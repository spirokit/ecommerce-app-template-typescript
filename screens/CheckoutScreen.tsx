import {
  Button,
  HStack,
  TitleThree,
  useColorModeValue,
  VStack,
  Image,
  Body,
  FlatList,
  Box,
  Subhead,
  Input,
} from "@spirokit/core";
import React, { useState } from "react";
import { Dimensions } from "react-native";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  TrashIcon,
} from "react-native-heroicons/outline";
import BackButton from "../components/BackButton";

type ShoppingBagItem = {
  id: number;
  title: string;
  assetUrl: string;
  price: number;
  size: string;
  amount: number;
};

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

const Checkout = () => {
  const [shoppingBag, setShoppingBag] =
    useState<ShoppingBagItem[]>(initialItems);

  const styles = {
    iconColor: useColorModeValue("primary.500", "primary.300"),
    background: useColorModeValue("primaryGray.100", "primaryDark.0"),
  };

  const onItemAmountUpdated = (id: number, value: number) => {
    const newItems = shoppingBag.map((item) => {
      if (item.id === id) {
        item.amount = value;
      }

      return item;
    });
    setShoppingBag(newItems);
  };

  const onClearShoppingBag = () => {
    setShoppingBag([]);
  };
  return (
    <Box safeAreaBottom flex={1} background={styles.background}>
      <FlatList
        flex={1}
        paddingX={4}
        ListHeaderComponent={() => (
          <Header onClearShoppingBag={onClearShoppingBag}></Header>
        )}
        ListFooterComponent={() => (
          <VStack space={6} paddingY={6}>
            <Input
              LabelComponent={<Subhead>Have a coupon code? Enter here</Subhead>}
              ButtonComponent={<Button>Check</Button>}
              placeholder="Coupon code"
            ></Input>
            <PurchaseResume></PurchaseResume>
            <Button>Checkout</Button>
          </VStack>
        )}
        ListHeaderComponentStyle={{
          paddingTop: 16,
          paddingBottom: 24,
        }}
        data={shoppingBag}
        contentContainerStyle={{ flexGrow: 1, width: "100%" }}
        ItemSeparatorComponent={() => <Box height={4}></Box>}
        bounces={false}
        renderItem={({ item, index }) => (
          <ShoppingBagItem
            {...item}
            index={index}
            onAmountUpdated={(value) => onItemAmountUpdated(item.id, value)}
          ></ShoppingBagItem>
        )}
      ></FlatList>
    </Box>
  );
};

const PurchaseResume = () => {
  const styles = {
    totalPriceColor: useColorModeValue("primary.500", "primary.300"),
  };
  return (
    <VStack borderTopColor={"primaryGray.700"}>
      <HStack alignItems={"center"} padding={2}>
        <Subhead
          color={useColorModeValue("primaryGray.600", "primaryGray.300")}
          flex={1}
        >
          Subtotal:
        </Subhead>
        <Subhead>$101.97</Subhead>
      </HStack>
      <HStack alignItems={"center"} padding={2}>
        <Subhead
          color={useColorModeValue("primaryGray.600", "primaryGray.300")}
          flex={1}
        >
          Delivery fee:
        </Subhead>

        <Subhead>$9.99</Subhead>
      </HStack>
      <HStack
        alignItems={"center"}
        padding={2}
        borderBottomColor={useColorModeValue(
          "primaryGray.500",
          "primaryGray.700"
        )}
        borderBottomWidth={1}
      >
        <Subhead
          color={useColorModeValue("primaryGray.600", "primaryGray.300")}
          flex={1}
        >
          Discount
        </Subhead>

        <Subhead>-$15.99</Subhead>
      </HStack>
      <HStack alignItems={"center"} padding={2}>
        <Subhead
          color={useColorModeValue("primaryGray.600", "primaryGray.300")}
          flex={1}
        >
          Total
        </Subhead>
        <Body color={styles.totalPriceColor} fontWeight="bold">
          $95.97
        </Body>
      </HStack>
    </VStack>
  );
};

const Header = (props: { onClearShoppingBag: () => void }) => {
  const styles = {
    iconColor: useColorModeValue("primary.500", "primary.300"),
  };

  return (
    <HStack space={4} alignItems="center">
      <BackButton></BackButton>
      <TitleThree flex={1} fontWeight="semibold">
        Shopping Bag
      </TitleThree>
      <Button
        width="auto"
        variant="tertiary"
        textColor={styles.iconColor}
        size="sm"
        onPress={() => props.onClearShoppingBag()}
        IconLeftComponent={TrashIcon}
      ></Button>
    </HStack>
  );
};

const ShoppingBagItem = (
  props: ShoppingBagItem & {
    index: number;
    onAmountUpdated: (value: number) => void;
  }
) => {
  const styles = {
    iconColor: useColorModeValue("primary.500", "primary.300"),
    background: useColorModeValue("white", "primaryDark.1"),
    arrowsColor: useColorModeValue("primary.500", "primary.300"),
    priceDisclaimerTextColor: useColorModeValue(
      "primaryGray.700",
      "primaryGray.400"
    ),
  };
  return (
    <HStack
      key={`${props.assetUrl}-${props.index}`}
      overflow="hidden"
      backgroundColor={styles.background}
      borderRadius={8}
      width="full"
    >
      <Image
        alt={props.title}
        width={screenWidth / 3}
        height={screenHeight / 5}
        source={{ uri: props.assetUrl }}
      ></Image>
      <VStack justifyContent="space-between" flex={1} padding={4}>
        <HStack flex={1} justifyContent="space-between" alignItems="flex-start">
          <VStack flex={1} space={2}>
            <Body fontWeight="medium" flex={1}>
              {props.title}
            </Body>
            <Box flex={1}></Box>
            <Subhead>
              ${(props.price * props.amount).toFixed(2)}
              {props.amount > 1 ? (
                <Subhead color={styles.priceDisclaimerTextColor}>
                  ({props.price.toFixed(2)} x {props.amount})
                </Subhead>
              ) : null}
            </Subhead>
            <Subhead>
              <Subhead fontWeight="extrabold">Size: </Subhead>
              {props.size}
            </Subhead>
            <Box flex={1}></Box>
          </VStack>

          <Button
            width="auto"
            marginRight={-2}
            marginTop={-2}
            size="sm"
            textColor={styles.iconColor}
            variant="tertiary"
            IconLeftComponent={TrashIcon}
          ></Button>
        </HStack>
        <HStack
          marginRight={-2}
          marginBottom={-2}
          space={2}
          alignItems="center"
          justifyContent="flex-end"
        >
          <Button
            width="auto"
            textColor={styles.arrowsColor}
            variant="tertiary"
            size="sm"
            IconLeftComponent={ChevronLeftIcon}
            onPress={() => {
              if (props.amount > 1) {
                props.onAmountUpdated(props.amount - 1);
              }
            }}
          ></Button>
          <Body fontWeight={"medium"}>{props.amount}</Body>
          <Button
            width="auto"
            size="sm"
            textColor={styles.arrowsColor}
            variant="tertiary"
            IconLeftComponent={ChevronRightIcon}
            onPress={() => props.onAmountUpdated(props.amount + 1)}
          ></Button>
        </HStack>
      </VStack>
    </HStack>
  );
};

const initialItems: ShoppingBagItem[] = [
  {
    id: 1,
    title: "PAC-MAN Yellow T-Shirt - 2021",
    price: 35.99,
    assetUrl: "https://i.imgur.com/rSvwWy3.png",
    size: "LG",
    amount: 1,
  },
  {
    id: 2,
    title: "Regrets T-Shirt",
    price: 32.99,
    assetUrl: "https://i.imgur.com/odSZ3Gv.png",
    size: "LG",
    amount: 1,
  },
];

export default Checkout;
