import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect } from "react";
import Form from "./Form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const isAuth = useSelector((state) => state.token);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      navigate("/home");
    }
  }, []);
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Sociopedia
        </Typography>
      </Box>
      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to Socipedia, the Social Media for Sociopaths
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
