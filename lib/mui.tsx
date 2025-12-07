"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import * as React from "react";

// Define the custom theme
let theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0f4c5c", // Deep Teal
      light: "#3d7a8a",
      dark: "#002231",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#e36414", // Warm Terracotta/Orange
      light: "#ff9444",
      dark: "#a93600",
      contrastText: "#ffffff",
    },
    background: {
      default: "#fffcf2", // Cream/Off-white
      paper: "#ffffff",
    },
    text: {
      primary: "#2b2d42",
      secondary: "#5d606b",
    },
  },
  typography: {
    fontFamily: "var(--font-lato), sans-serif",
    h1: {
      fontFamily: "var(--font-playfair), serif",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "var(--font-playfair), serif",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "var(--font-playfair), serif",
      fontWeight: 600,
    },
    h4: {
      fontFamily: "var(--font-playfair), serif",
      fontWeight: 600,
    },
    h5: {
      fontFamily: "var(--font-playfair), serif",
      fontWeight: 500,
    },
    h6: {
      fontFamily: "var(--font-playfair), serif",
      fontWeight: 500,
    },
    button: {
      textTransform: "none", // Remove uppercase default
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 16, // Softer corners
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50, // Pill shape buttons
          padding: "10px 24px",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          boxShadow: "0 10px 40px -10px rgba(0,0,0,0.05)", // Soft shadow
          border: "1px solid rgba(0,0,0,0.03)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 252, 242, 0.8)", // Translucent cream
          backdropFilter: "blur(12px)",
          boxShadow: "none",
          borderBottom: "1px solid rgba(0,0,0,0.05)",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export function MuiProvider({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
