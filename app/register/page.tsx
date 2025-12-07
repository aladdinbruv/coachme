"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { ArrowRight, Lock, Mail, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../../lib/AuthContext";
import { MuiProvider } from "../../lib/mui";

export default function RegisterPage() {
  const { register } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas");
      return;
    }

    try {
      await register(name, email, password);
    } catch (err: any) {
      setError(err.message || "Une erreur est survenue lors de l'inscription");
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
                &quot;Investissez en vous-même. C&apos;est le meilleur
                investissement que vous puissiez faire.&quot;
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box sx={{ width: 40, height: 2, bgcolor: "secondary.main" }} />
                <Typography variant="h6" sx={{ fontWeight: 300 }}>
                  Rejoignez la communauté
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
                  REJOIGNEZ-NOUS
                </Typography>
                <Typography
                  variant="h3"
                  component="h1"
                  color="primary.main"
                  fontWeight="bold"
                  sx={{ fontFamily: "Playfair Display, serif" }}
                >
                  Créer un compte
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  Commencez votre parcours de transformation dès
                  aujourd&apos;hui.
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
                    Nom complet
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Jean Dupont"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <Box
                          sx={{
                            mr: 1,
                            color: "text.secondary",
                            display: "flex",
                          }}
                        >
                          <User size={20} />
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

                <Box>
                  <Typography
                    variant="subtitle2"
                    fontWeight="bold"
                    sx={{ mb: 1, color: "text.primary" }}
                  >
                    Confirmer le mot de passe
                  </Typography>
                  <TextField
                    fullWidth
                    type="password"
                    placeholder="••••••••"
                    variant="outlined"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
                  <span>S&apos;inscrire</span>
                  <ArrowRight size={20} />
                </Button>

                <Typography
                  align="center"
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 2 }}
                >
                  Déjà un compte ?{" "}
                  <Link
                    href="/login"
                    style={{
                      textDecoration: "none",
                      color: "#0f4c5c",
                      fontWeight: "bold",
                    }}
                  >
                    Se connecter
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
