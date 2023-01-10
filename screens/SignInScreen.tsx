import {
  Body,
  Box,
  Button,
  HStack,
  Image,
  Input,
  Pressable,
  StatusBar,
  TitleTwo,
  useColorModeValue,
  VStack,
} from "@spirokit/core";
import React from "react";
import { Dimensions, ScrollView } from "react-native";
import { LockClosedIcon, MailIcon } from "react-native-heroicons/outline";
import LogoWhite from "../assets/logo-white.png";
import LogoBlack from "../assets/logo-black.png";
import BackButton from "../components/BackButton";
import { useNavigation } from "@react-navigation/native";

const imageSize = Dimensions.get("screen").width * 0.5;

const SignIn = () => {
  const navigation = useNavigation();

  const styles = {
    bgColor: useColorModeValue("primaryGray.100", "primaryDark.0"),
    footerBgColor: useColorModeValue("white", "primaryDark.1"),
  };

  const Logo = useColorModeValue(LogoBlack, LogoWhite);
  const barStyle = useColorModeValue("dark-content", "light-content");

  return (
    <Box flex={1} backgroundColor={styles.bgColor} safeAreaTop>
      <StatusBar barStyle={barStyle}></StatusBar>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <VStack padding={4} alignItems="flex-start" width="full" flex={1}>
          <BackButton></BackButton>
          <Image
            alt="eCommerce logo in white"
            marginBottom={4}
            alignSelf="center"
            source={Logo}
            width={imageSize}
            height={imageSize / 2}
          ></Image>
          <VStack space={4} marginTop={5} width="full" flex={1}>
            <TitleTwo fontWeight="medium">Sign in</TitleTwo>
            <Input
              placeholder="Enter your email"
              IconLeftComponent={MailIcon}
            ></Input>
            <Input
              placeholder="Enter your password"
              secureTextEntry={true}
              IconLeftComponent={LockClosedIcon}
            ></Input>
            <Button
              onPress={() => navigation.navigate("TabBarNavigation")}
              marginBottom={5}
              textColor="primaryGray.900"
            >
              Sign in
            </Button>
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
          <Button accentColor="night">Sign in with Apple</Button>
          <HStack alignItems="center" justifyContent="center">
            <Body>Have an account? </Body>
            <Pressable onPress={() => navigation.navigate("SignUp")}>
              <Body fontWeight="bold" textDecorationLine="underline">
                Sign up
              </Body>
            </Pressable>
          </HStack>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default SignIn;
