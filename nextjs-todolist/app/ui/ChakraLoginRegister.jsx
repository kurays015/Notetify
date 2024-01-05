"use client";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import useAuthContext from "../hooks/useAuthContext";

export default function ChakraLoginRegister() {
  const {
    isActive,
    emailRef,
    passwordRef,
    handleReset,
    handleLogin,
    handleRegister,
    loginLoading,
    registerLoading,
    loginError,
    showPassword,
    setShowPassword,
  } = useAuthContext();

  return (
    <Box
      maxW="md"
      mx="auto"
      mt={8}
      p={6}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      bg="white"
    >
      <Heading as="h2" mb={4} textAlign="center" color="blue.500">
        {isActive ? "Welcome back!" : "Create your account"}
      </Heading>
      <FormControl mb={4}>
        <FormLabel>Email</FormLabel>
        <Input
          disabled={isActive ? loginLoading : registerLoading}
          ref={emailRef}
          placeholder={isActive ? "Email" : "Enter your email"}
          variant="filled"
          bg="gray.100"
        />
      </FormControl>

      <FormControl>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            disabled={isActive ? loginLoading : registerLoading}
            ref={passwordRef}
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            variant="filled"
            bg="gray.100"
          />
          <InputRightElement>
            <IconButton
              aria-label={showPassword ? "Hide password" : "Show password"}
              variant="ghost"
              onClick={() => setShowPassword(prev => !prev)}
              icon={showPassword ? <IoIosEye /> : <IoIosEyeOff />}
            />
          </InputRightElement>
        </InputGroup>
        <div className="text-center my-3">
          <Button
            isLoading={isActive ? loginLoading : registerLoading}
            loadingText={isActive ? "Logging in..." : "Registering..."}
            disabled={isActive ? loginLoading : registerLoading}
            colorScheme="blue"
            onClick={isActive ? handleLogin : handleRegister}
            _hover={{ bg: "blue.600" }}
          >
            {isActive ? "Login" : "Register"}
          </Button>
        </div>
        <Text my={4} fontSize="sm" textAlign="center" color="#E33B3B">
          {loginError && loginError.response.data}
        </Text>
      </FormControl>
      <div className="text-sm text-center flex justify-center gap-2">
        {isActive ? (
          <>
            Don&apos;t have an account yet?
            <Text
              as="span"
              color="blue.500"
              cursor="pointer"
              onClick={handleReset}
              _hover={{ textDecoration: "underline" }}
            >
              Register
            </Text>
          </>
        ) : (
          <>
            Already have an account?
            <Text
              as="span"
              color="blue.500"
              cursor="pointer"
              textAlign="center"
              onClick={handleReset}
              _hover={{ textDecoration: "underline" }}
            >
              Login
            </Text>
          </>
        )}
      </div>
    </Box>
  );
}
