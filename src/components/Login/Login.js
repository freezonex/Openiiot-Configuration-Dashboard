"use client";
import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Checkbox,
  Chip,
  Link,
  FormControlLabel,
  Button,
  Typography,
  Divider,
  Paper,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import Logo from "../Utils/Logo";
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
    <Container
      component="main"
      maxWidth={false}
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url('/images/login-background.jpeg')`, // Random image from Unsplash
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 2,
          width: 400, // Fixed width for the paper
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "left",
            padding: 1,
          }}
        >
          <Logo></Logo>
          <Typography component="h1" variant="h5" sx={{ ml: 2 }}>
            Login
          </Typography>
        </Box>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="tenant"
          label="Tenant"
          name="tenant"
          autoComplete="tenant"
          autoFocus
        />

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="User name or email address"
          name="email"
          autoComplete="email"
        />

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
            sx={{
              "& .MuiSvgIcon-root": { fontSize: 18 },
              "& .MuiFormControlLabel-label": { fontSize: "0.875rem" },
            }}
          />
          <Link href="#" variant="body2" sx={{ fontSize: "0.875rem" }}>
            Forgot password?
          </Link>
        </Box>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
        >
          Login
        </Button>

        <Button type="button" fullWidth variant="outlined" sx={{ mb: 2 }}>
          Cancel
        </Button>
        <Divider sx={{ width: "100%" }}>
          <Chip label="Third-party login"></Chip>
        </Divider>
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
      </Paper>
    </Container>
  );
};

export default Login;
