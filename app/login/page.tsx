"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { ArrowRight, Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "../../lib/AuthContext";
import { MuiProvider } from "../../lib/mui";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await login(email, password);
      router.push("/"); // Redirect to home or dashboard
    } catch (err: any) {
      setError(err.message);
    }
  };

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
                &quot;Le coaching n&apos;est pas une thérapie. C&apos;est un
                partenariat pour atteindre vos objectifs plus rapidement.&quot;
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box sx={{ width: 40, height: 2, bgcolor: "secondary.main" }} />
                <Typography variant="h6" sx={{ fontWeight: 300 }}>
                  Votre voyage commence ici
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
                  BIENVENUE
                </Typography>
                <Typography
                  variant="h3"
                  component="h1"
                  color="primary.main"
                  fontWeight="bold"
                  sx={{ fontFamily: "Playfair Display, serif" }}
                >
                  Connexion
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  Heureux de vous revoir. Connectez-vous pour accéder à votre
                  espace.
                </Typography>
              </Box>

              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: "flex", flexDirection: "column", gap: 3 }}
              >
                {error && (
                  <Typography color="error" variant="body2">
                    {error}
                  </Typography>
                )}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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

                <Box>
                  <Typography
                    variant="subtitle2"
                    fontWeight="bold"
                    sx={{ mb: 1, color: "text.primary" }}
                  >
                    Mot de passe
                  </Typography>
                  <TextField
                    fullWidth
                    type="password"
                    placeholder="••••••••"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <Box
                          sx={{
                            mr: 1,
                            color: "text.secondary",
                            display: "flex",
                          }}
                        >
                          <Lock size={20} />
                        </Box>
                      ),
                      sx: { borderRadius: 2, bgcolor: "white" },
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label={
                      <Typography variant="body2" color="text.secondary">
                        Se souvenir de moi
                      </Typography>
                    }
                  />
                  <Link
                    href="/forgot-password"
                    style={{
                      textDecoration: "none",
                      color: "#e36414",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                    }}
                  >
                    Mot de passe oublié ?
                  </Link>
                </Box>

                <Button
                  fullWidth
                  type="submit"
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
                  Se connecter
                  <ArrowRight size={20} />
                </Button>

                <Typography
                  align="center"
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 2 }}
                >
                  Pas encore de compte ?{" "}
                  <Link
                    href="/register"
                    style={{
                      textDecoration: "none",
                      color: "#0f4c5c",
                      fontWeight: "bold",
                    }}
                  >
                    Créer un compte
                  </Link>
                </Typography>
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Box>
    </MuiProvider>
  );
}
