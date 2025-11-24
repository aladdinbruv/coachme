"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { CheckCircle, Heart, Lock, Scale, Shield } from "lucide-react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { MuiProvider } from "../../lib/mui";

export default function DeontologiePage() {
  const values = [
    {
      title: "Confidentialité Absolue",
      desc: "Le secret professionnel est la pierre angulaire de notre pratique. Tout ce qui est partagé en séance reste strictement confidentiel.",
      icon: <Lock size={24} />,
    },
    {
      title: "Intégrité & Transparence",
      desc: "Nous communiquons clairement sur nos compétences, nos tarifs et le cadre de l'accompagnement. Aucune promesse irréaliste.",
      icon: <Shield size={24} />,
    },
    {
      title: "Respect de la Personne",
      desc: "Nous accueillons chaque client avec bienveillance, sans jugement, et respectons son autonomie et ses choix de vie.",
      icon: <Heart size={24} />,
    },
    {
      title: "Responsabilité",
      desc: "Nous nous engageons à mettre en œuvre tous les moyens nécessaires pour favoriser le développement du client.",
      icon: <Scale size={24} />,
    },
  ];

  return (
    <MuiProvider>
      <Header />
      <main>
        {/* Hero Section */}
        <Box
          sx={{
            bgcolor: "background.default",
            py: { xs: 8, md: 12 },
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="overline"
                color="secondary"
                fontWeight="bold"
                letterSpacing={2}
                sx={{ mb: 2, display: "block", textAlign: "center" }}
              >
                NOS VALEURS
              </Typography>
              <Typography
                variant="h2"
                component="h1"
                align="center"
                gutterBottom
                sx={{
                  color: "primary.main",
                  mb: 4,
                  fontFamily: "Playfair Display, serif",
                  fontWeight: "bold",
                }}
              >
                Code de Déontologie
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                sx={{ maxWidth: 700, mx: "auto", fontWeight: 400 }}
              >
                Un engagement éthique fort pour garantir un accompagnement
                professionnel, respectueux et sécurisé.
              </Typography>
            </motion.div>
          </Container>
        </Box>

        {/* Timeline Section */}
        <Container maxWidth="lg" sx={{ pb: 12, position: "relative" }}>
          {/* Central Line (Desktop) */}
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: "2px",
              bgcolor: "secondary.light",
              transform: "translateX(-50%)",
              display: { xs: "none", md: "block" },
              opacity: 0.3,
            }}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: 6, md: 0 },
            }}
          >
            {values.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: {
                    xs: "center",
                    md: index % 2 === 0 ? "flex-end" : "flex-start",
                  },
                  position: "relative",
                  mb: { md: 8 },
                  flexDirection: {
                    xs: "column",
                    md: index % 2 === 0 ? "row-reverse" : "row",
                  },
                  alignItems: "center",
                }}
              >
                {/* Timeline Icon on the line */}
                <Box
                  sx={{
                    position: { md: "absolute" },
                    left: { md: "50%" },
                    transform: { md: "translateX(-50%)" },
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    bgcolor: "white",
                    border: "2px solid",
                    borderColor: "secondary.main",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "secondary.main",
                    zIndex: 2,
                    mb: { xs: 2, md: 0 },
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: "secondary.main",
                      color: "white",
                      transform: {
                        md: "translateX(-50%) scale(1.1)",
                        xs: "scale(1.1)",
                      },
                    },
                  }}
                >
                  {item.icon}
                </Box>

                {/* Spacer for the other side */}
                <Box sx={{ flex: 1, display: { xs: "none", md: "block" } }} />

                {/* Card Content */}
                <Box sx={{ flex: 1, px: { md: 6 }, width: "100%" }}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 4,
                        bgcolor: "white",
                        borderRadius: "16px", // Refined shape
                        borderBottom: "4px solid", // Bottom accent
                        borderColor: "secondary.main",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                        textAlign: "center", // Center title
                        transition: "transform 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-5px)",
                        },
                      }}
                    >
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        gutterBottom
                        sx={{ color: "primary.main" }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        color="text.secondary"
                        sx={{ lineHeight: 1.8, textAlign: "left" }}
                      >
                        {item.desc}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>

        {/* Engagements Section - Dark Background */}
        <Box sx={{ bgcolor: "primary.main", color: "white", py: 12 }}>
          <Container maxWidth="lg">
            <Typography
              variant="h3"
              align="center"
              gutterBottom
              sx={{
                mb: 8,
                fontFamily: "Playfair Display, serif",
                fontWeight: "bold",
              }}
            >
              Nos Engagements Clés
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {[
                "Formation continue et supervision régulière",
                "Cadre contractuel clair établi avant le démarrage",
                "Refus de toute mission contraire à l'éthique",
                "Orientation vers un autre professionnel si nécessaire",
              ].map((text, index) => (
                <Grid size={{ xs: 12, md: 6 }} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 4,
                        display: "flex",
                        alignItems: "center",
                        gap: 3,
                        borderRadius: "12px",
                        bgcolor: "rgba(255, 255, 255, 0.05)", // Glassy effect on dark bg
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        color: "white",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          bgcolor: "rgba(255, 255, 255, 0.1)",
                          transform: "translateX(10px)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          minWidth: 40,
                          height: 40,
                          borderRadius: "50%",
                          bgcolor: "secondary.main",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <CheckCircle size={20} color="white" />
                      </Box>
                      <Typography
                        variant="h6"
                        fontWeight="500"
                        sx={{ fontSize: "1.1rem" }}
                      >
                        {text}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </main>
      <Footer />
    </MuiProvider>
  );
}
