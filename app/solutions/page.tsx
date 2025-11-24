"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  ClipboardCheck,
  Compass,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { MuiProvider } from "../../lib/mui";

export default function SolutionsPage() {
  const solutions = [
    {
      title: "Coaching Professionnel",
      description:
        "Identifiez vos forces, développez vos compétences relationnelles et atteignez vos objectifs avec un accompagnement sur mesure.",
      action: "En savoir plus",
      icon: <Compass size={40} />,
      primary: true,
    },
    {
      title: "Bilan de Compétences",
      description:
        "Explorez vos talents, vos aspirations et vos valeurs pour construire un projet professionnel aligné avec qui vous êtes.",
      action: "Découvrir",
      icon: <ClipboardCheck size={40} />,
      primary: false,
    },
    {
      title: "Coaching en Entreprise",
      description:
        "Améliorez la motivation, la productivité et la rétention des talents au sein de vos équipes.",
      action: "Offre Entreprise",
      icon: <Users size={40} />,
      primary: false,
    },
  ];

  const benefits = [
    {
      title: "Gagner en Clarté",
      description:
        "Clarifiez vos objectifs et définissez une vision précise de votre avenir professionnel.",
      icon: <Target size={32} />,
    },
    {
      title: "Surmonter les Obstacles",
      description:
        "Identifiez les blocages et transformez-les en opportunités de croissance.",
      icon: <CheckCircle size={32} />,
    },
    {
      title: "Accélérer votre Croissance",
      description:
        "Atteignez vos résultats plus rapidement grâce à des stratégies éprouvées.",
      icon: <TrendingUp size={32} />,
    },
  ];

  return (
    <MuiProvider>
      <Header />
      <main>
        {/* Hero Section */}
        <Box
          sx={{
            bgcolor: "primary.main",
            color: "white",
            pt: 12,
            pb: 20,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background Blobs */}
          <Box
            sx={{
              position: "absolute",
              top: -100,
              left: -100,
              width: 500,
              height: 500,
              bgcolor: "secondary.main",
              opacity: 0.1,
              borderRadius: "50%",
              filter: "blur(80px)",
            }}
          />
          <Container
            maxWidth="lg"
            sx={{ position: "relative", zIndex: 1, textAlign: "center" }}
          >
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
              >
                NOS EXPERTISES
              </Typography>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{
                  fontFamily: "Playfair Display, serif",
                  fontWeight: "bold",
                  mt: 2,
                }}
              >
                Solutions d&apos;Accompagnement
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 300,
                  opacity: 0.9,
                  maxWidth: 800,
                  mx: "auto",
                  mt: 3,
                }}
              >
                Des parcours adaptés pour chaque étape de votre vie
                professionnelle, conçus pour révéler votre potentiel.
              </Typography>
            </motion.div>
          </Container>
        </Box>

        {/* Solutions Grid with Overlap */}
        <Container
          maxWidth="lg"
          sx={{ mt: -12, mb: 12, position: "relative", zIndex: 2 }}
        >
          <Grid container spacing={4}>
            {solutions.map((sol, index) => (
              <Grid key={index} size={{ xs: 12, md: 4 }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: 4,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                      overflow: "visible",
                      position: "relative",
                      bgcolor: "white",
                    }}
                  >
                    <CardContent
                      sx={{ flexGrow: 1, p: 4, textAlign: "center" }}
                    >
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: "50%",
                          bgcolor: sol.primary ? "primary.light" : "grey.100",
                          color: sol.primary
                            ? "primary.main"
                            : "text.secondary",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mx: "auto",
                          mb: 3,
                          mt: -8,
                          boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                          border: "4px solid white",
                        }}
                      >
                        {sol.icon}
                      </Box>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        fontWeight="bold"
                        sx={{ fontFamily: "Playfair Display, serif", mb: 2 }}
                      >
                        {sol.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        paragraph
                        sx={{ lineHeight: 1.7 }}
                      >
                        {sol.description}
                      </Typography>
                    </CardContent>
                    <Box sx={{ p: 4, pt: 0 }}>
                      <Button
                        variant={sol.primary ? "contained" : "outlined"}
                        fullWidth
                        size="large"
                        endIcon={<ArrowRight size={18} />}
                        sx={{
                          py: 1.5,
                          borderRadius: 50,
                          borderWidth: 2,
                          "&:hover": {
                            borderWidth: 2,
                          },
                        }}
                      >
                        {sol.action}
                      </Button>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Why Choose Us - Benefits Grid */}
        <Box sx={{ bgcolor: "background.paper", py: 12 }}>
          <Container maxWidth="lg">
            <Box sx={{ textAlign: "center", mb: 8 }}>
              <Typography
                variant="overline"
                color="secondary"
                fontWeight="bold"
                letterSpacing={2}
              >
                POURQUOI NOUS CHOISIR
              </Typography>
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontFamily: "Playfair Display, serif",
                  fontWeight: "bold",
                  mt: 2,
                }}
              >
                Pourquoi se faire accompagner ?
              </Typography>
            </Box>

            <Grid container spacing={6}>
              {benefits.map((benefit, index) => (
                <Grid key={index} size={{ xs: 12, md: 4 }}>
                  <Box sx={{ textAlign: "center" }}>
                    <Box
                      sx={{
                        color: "secondary.main",
                        mb: 2,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {benefit.icon}
                    </Box>
                    <Typography variant="h5" gutterBottom fontWeight="bold">
                      {benefit.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {benefit.description}
                    </Typography>
                  </Box>
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
