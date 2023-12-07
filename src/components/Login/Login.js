"use client";
import React, { useState } from "react";
import { Container, Box, TextField, Button, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { httpToSupos, login } from "@/utils/http";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const handleLogin = async (event) => {
    event.preventDefault();
    login(() => {
      router.push("/flows");
    }, router);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Button
          type="submit"
          fullWidth
          variant="outlined"
          color="primary"
          startIcon={<LoginIcon />}
          style={{ margin: "24px 0px 16px" }}
          onClick={handleLogin}
        >
          Login with SupOS
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
