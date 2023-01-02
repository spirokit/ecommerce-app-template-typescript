import {
  Body,
  Box,
  Button,
  HStack,
  Image,
  Input,
  Pressable,
  StatusBar,
  Subhead,
  Switch,
  TitleTwo,
  useColorModeValue,
  VStack,
} from "@spirokit/core";
import React from "react";
import { Dimensions, ScrollView } from "react-native";
import {
  ChevronLeftIcon,
  LockClosedIcon,
  MailIcon,
  UserIcon,
} from "react-native-heroicons/outline";

import LogoWhite from "../assets/logo-white.png";
import LogoBlack from "../assets/logo-black.png";

const imageSize = Dimensions.get("screen").width * 0.5;

const SignUp = () => {
  const styles = {
    bgColor: useColorModeValue("primaryGray.100", "primaryDark.0"),
    footerBgColor: useColorModeValue("white", "primaryDark.1"),
  };

  const barStyle = useColorModeValue("dark-content", "light-content");

  const Logo = useColorModeValue(LogoBlack, LogoWhite);

  return (
    <Box flex={1} backgroundColor={styles.bgColor} safeAreaTop>
      <StatusBar barStyle={barStyle}></StatusBar>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <VStack padding={4} alignItems="flex-start" width="full" flex={1}>
          <Button IconLeftComponent={ChevronLeftIcon} width="auto"></Button>
          <Image
            alt="eCommerce logo in white"
            marginBottom={4}
            alignSelf="center"
            source={Logo}
            width={imageSize}
            height={imageSize / 2}
          ></Image>
          <VStack space={4} marginTop={5} width="full" flex={1}>
            <TitleTwo fontWeight="medium">Sign up</TitleTwo>
            <Input
              LabelComponent={<Subhead>First Name</Subhead>}
              placeholder="Enter your first name..."
              IconLeftComponent={UserIcon}
            ></Input>
            <Input
              LabelComponent={<Subhead>Email</Subhead>}
              placeholder="Enter your email"
              IconLeftComponent={MailIcon}
            ></Input>
            <Input
              LabelComponent={<Subhead>Password</Subhead>}
              placeholder="Enter your password"
              secureTextEntry={true}
              IconLeftComponent={LockClosedIcon}
            ></Input>
            <HStack space={3} width="full" marginBottom={1}>
              <Subhead flex={1}>
                Send me exclusive offers, unique gift ideas, and personalized
                tips for shopping
              </Subhead>

              <Switch></Switch>
            </HStack>
            <Button marginBottom={5}>Sign up</Button>
          </VStack>
        </VStack>
        <VStack
          padding={4}
          backgroundColor={styles.footerBgColor}
          space={4}
          paddingTop={8}
          safeAreaBottom
        >
          <Button accentColor="blue">Sign in with Facebook</Button>
          <Button accentColor="night" variant="secondary">
            Sign in with Google
          </Button>
          <Button accentColor="black">Sign in with Apple</Button>
          <HStack alignItems="center" justifyContent="center">
            <Body>If you have an account, </Body>
            <Pressable onPress={() => console.log("navigate to login")}>
              <Body fontWeight="bold" textDecorationLine="underline">
                Sign in
              </Body>
            </Pressable>
          </HStack>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default SignUp;
