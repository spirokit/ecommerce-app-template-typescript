import { useNavigation } from "@react-navigation/native";
import {
  Button,
  HStack,
  Input,
  TitleTwo,
  useColorModeValue,
  useTheme,
  VStack,
} from "@spirokit/core";
import React from "react";
import { ScrollView } from "react-native";
import BackButton from "../components/BackButton";

const AddDeliveryAddress = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  return (
    <ScrollView
      style={{
        backgroundColor: useColorModeValue(
          colors.primaryGray["100"],
          colors.primaryDark["0"]
        ),
      }}
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      <VStack padding={4} flex={1} space={6}>
        <HStack
          padding={4}
          width="full"
          space={4}
          alignItems="center"
          backgroundColor={useColorModeValue("white", "primaryDark.0")}
        >
          <BackButton></BackButton>
          <TitleTwo fontWeight={"bold"}>Add Delivery Address</TitleTwo>
        </HStack>
        <VStack space={4} flex={1}>
          <HStack space={4}>
            <Input placeholder="Name"></Input>
            <Input placeholder="Last Name"></Input>
          </HStack>

          <Input placeholder="Street"></Input>
          <Input placeholder="City"></Input>
          <Input placeholder="Mobile number"></Input>
          <Input placeholder="House No / Flat No / Floor (Opt)"></Input>
          <Input placeholder="Gate code (Opt)"></Input>
        </VStack>
        <Button onPress={() => navigation.goBack()}>Confirm</Button>
      </VStack>
    </ScrollView>
  );
};

export default AddDeliveryAddress;
