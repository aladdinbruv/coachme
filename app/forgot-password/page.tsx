"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Send } from "lucide-react";
import Link from "next/link";
import { MuiProvider } from "../../lib/mui";

export default function ForgotPasswordPage() {
  return (
    <MuiProvider>
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          bgcolor: "background.default",
        }}
      >
        {/* Left Side - Image & Inspirational Content */}
        <Box
          sx={{
            flex: 1,
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            bgcolor: "primary.main",
            overflow: "hidden",
          }}
        >
          {/* Background Image */}
          <Box
            component="img"
            src="/img/insperationnal.png"
            alt="Inspirational coaching"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.6,
              mixBlendMode: "overlay",
            }}
          />

          {/* Overlay Gradient */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(to bottom right, rgba(15, 76, 92, 0.8), rgba(15, 76, 92, 0.6))",
              zIndex: 1,
            }}
          />

          {/* Content */}
          <Box
            sx={{
              position: "relative",
              zIndex: 2,
              p: 8,
              color: "white",
              mt: 6,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography
                variant="h2"
                component="h2"
                fontWeight="bold"
                sx={{ fontFamily: "Playfair Display, serif", mb: 4 }}
              >
                &quot;Chaque obstacle est une opportunité de grandir. Retrouvez
                l&apos;accès à votre potentiel.&quot;
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box sx={{ width: 40, height: 2, bgcolor: "secondary.main" }} />
                <Typography variant="h6" sx={{ fontWeight: 300 }}>
                  Récupération de compte
                </Typography>
              </Box>
            </motion.div>
          </Box>
        </Box>

        {/* Right Side - Form */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            p: { xs: 4, md: 8 },
            position: "relative",
          }}
        >
          <Box sx={{ width: "100%", maxWidth: 450 }}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Box sx={{ mb: 6 }}>
                <Typography
                  variant="overline"
                  color="secondary"
                  fontWeight="bold"
                  letterSpacing={2}
                >
                  RÉCUPÉRATION
                </Typography>
                <Typography
                  variant="h3"
                  component="h1"
                  color="primary.main"
                  fontWeight="bold"
                  sx={{ fontFamily: "Playfair Display, serif" }}
                  gutterBottom
                >
                  Mot de passe oublié ?
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  Entrez votre adresse email ci-dessous et nous vous enverrons
                  un lien pour réinitialiser votre mot de passe.
                </Typography>
              </Box>

              <Box
                component="form"
                sx={{ display: "flex", flexDirection: "column", gap: 3 }}
              >
                <Box>
                  <Typography
                    variant="subtitle2"
                    fontWeight="bold"
                    sx={{ mb: 1, color: "text.primary" }}
                  >
                    Email
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="exemple@email.com"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <Box
                          sx={{
                            mr: 1,
                            color: "text.secondary",
                            display: "flex",
                          }}
                        >
                          <Mail size={20} />
                        </Box>
                      ),
                      sx: { borderRadius: 2, bgcolor: "white" },
                    }}
                  />
                </Box>

                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{
                    py: 1.5,
                    fontSize: "1rem",
                    display: "flex",
                    justifyContent: "space-between",
                    px: 4,
                    mt: 2,
                    boxShadow: "0 10px 30px rgba(15, 76, 92, 0.2)",
                  }}
                >
                  <span>Envoyer le lien</span>
                  <Send size={20} />
                </Button>

                <Box sx={{ textAlign: "center", mt: 2 }}>
                  <Link
                    href="/login"
                    style={{
                      textDecoration: "none",
                      color: "#0f4c5c",
                      fontWeight: "bold",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <ArrowLeft size={16} />
                    Retour à la connexion
                  </Link>
                </Box>
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Box>
    </MuiProvider>
  );
}
