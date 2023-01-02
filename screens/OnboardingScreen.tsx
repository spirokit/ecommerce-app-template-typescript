import {
  ZStack,
  Image,
  Box,
  TitleOne,
  Button,
  HStack,
  Body,
  VStack,
  Pressable,
} from "@spirokit/core";
import { Dimensions } from "react-native";
import Logo from "../assets/logo-white.png";

const imageSize = Dimensions.get("screen").width * 0.65;
const Onboarding = () => {
  return (
    <ZStack flex={1}>
      <Image
        source={{ uri: "https://i.imgur.com/CKBrViE.png" }}
        minWidth="full"
        height="full"
        alt="clothing background"
      ></Image>
      <Box
        safeArea
        padding={4}
        height="full"
        width="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box alignItems="center" width="full" justifyContent="center" flex={1}>
          <Image
            marginBottom={6}
            width={imageSize}
            height={imageSize / 2}
            resizeMode="contain"
            source={Logo}
          ></Image>
          <TitleOne
            fontSize="4xl"
            textAlign="center"
            width="3/5"
            numberOfLines={2}
          >
            Trends at your fingertips
          </TitleOne>
        </Box>
        <VStack width="full" alignItems="center" space={4} padding={4}>
          <Button>Join us!</Button>
          <HStack alignItems="center">
            <Body>If you have an account, </Body>
            <Pressable onPress={() => console.log("navigate to login")}>
              <Body fontWeight="bold" textDecorationLine="underline">
                Sign in
              </Body>
            </Pressable>
          </HStack>
        </VStack>
      </Box>
    </ZStack>
  );
};

export default Onboarding;