"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle,
  CreditCard,
  ShieldCheck,
  Star,
  Video,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { InlineWidget } from "react-calendly";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { MuiProvider } from "../../lib/mui";

export default function BookingPage() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setSelectedProduct(id);
  };

  const handleBack = () => {
    setSelectedProduct(null);
  };

  const products = [
    {
      id: "discovery",
      title: "Séance Découverte",
      price: "Offert",
      duration: "30 min",
      description: "Pour faire le point et définir vos objectifs.",
      buttonText: "Réserver",
      calendlyUrl: "https://calendly.com/medmaster63/30min",
      icon: <Star size={24} />,
      features: [
        "Bilan de situation",
        "Identification des blocages",
        "Plan d'action initial",
      ],
      color: "secondary.main",
    },
    {
      id: "flash",
      title: "Coaching Flash",
      price: "90€",
      duration: "1h",
      description:
        "Une séance intensive pour débloquer une situation spécifique.",
      buttonText: "Réserver & Payer",
      calendlyUrl: "https://calendly.com/medmaster63/flash", // Placeholder URL
      icon: <Zap size={24} />,
      features: [
        "Focus problématique précise",
        "Outils concrets immédiats",
        "Suivi par email (J+7)",
      ],
      color: "#2e7d32", // Success green
    },
    {
      id: "mentoring",
      title: "Mentoring Mensuel",
      price: "Abonnement",
      duration: "Suivi continu",
      description:
        "Un accompagnement sur la durée pour une transformation profonde.",
      buttonText: "S'abonner",
      calendlyUrl: "https://calendly.com/medmaster63/mentoring", // Placeholder URL
      icon: <ShieldCheck size={24} />,
      features: [
        "2 séances par mois",
        "Support WhatsApp 5j/7",
        "Accès ressources privées",
      ],
      color: "primary.main",
    },
  ];

  const currentProduct = products.find((p) => p.id === selectedProduct);

  return (
    <MuiProvider>
      <Header />
      <main>
        <Box
          sx={{
            bgcolor: "background.default",
            py: { xs: 8, md: 12 },
            minHeight: "100vh",
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={6}>
              {/* Left Column: Context & Info */}
              <Grid size={{ xs: 12, md: 4 }}>
                <Box sx={{ position: "sticky", top: 100 }}>
                  <Typography
                    variant="overline"
                    color="secondary"
                    fontWeight="bold"
                    letterSpacing={2}
                  >
                    RÉSERVATION
                  </Typography>
                  <Typography
                    variant="h3"
                    component="h1"
                    gutterBottom
                    sx={{
                      color: "primary.main",
                      mb: 3,
                      fontWeight: 700,
                      fontFamily: "Playfair Display, serif",
                    }}
                  >
                    Investissez en vous
                  </Typography>
                  <Typography
                    paragraph
                    color="text.secondary"
                    sx={{ mb: 4, fontSize: "1.1rem" }}
                  >
                    Choisissez la formule qui correspond le mieux à vos besoins
                    actuels. Chaque accompagnement est conçu pour vous apporter
                    clarté et résultats.
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 3,
                      mb: 6,
                    }}
                  >
                    {[
                      {
                        icon: <Video size={24} />,
                        title: "Visio-conférence",
                        desc: "Lien Zoom/Google Meet envoyé",
                      },
                      {
                        icon: <ShieldCheck size={24} />,
                        title: "100% Confidentiel",
                        desc: "Échange privé et sécurisé",
                      },
                    ].map((item, index) => (
                      <Box
                        key={index}
                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                      >
                        <Box
                          sx={{
                            p: 1.5,
                            borderRadius: "50%",
                            bgcolor: "white",
                            color: "secondary.main",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                          }}
                        >
                          {item.icon}
                        </Box>
                        <Box>
                          <Typography variant="subtitle2" fontWeight="bold">
                            {item.title}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {item.desc}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>

                  {/* Trust Signals */}
                  <Box
                    sx={{
                      pt: 4,
                      borderTop: "1px solid",
                      borderColor: "divider",
                    }}
                  >
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ display: "block", mb: 2, fontWeight: 600 }}
                    >
                      PAIEMENT SÉCURISÉ
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 2,
                        opacity: 0.6,
                        filter: "grayscale(100%)",
                      }}
                    >
                      {/* Simulating Logos with Text/Icons for now as no assets provided */}
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <CreditCard size={20} />
                        <Typography variant="caption" fontWeight="bold">
                          Stripe
                        </Typography>
                      </Box>
                      <Typography variant="caption" fontWeight="bold">
                        VISA
                      </Typography>
                      <Typography variant="caption" fontWeight="bold">
                        Mastercard
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>

              {/* Right Column: Product Selection & Calendly */}
              <Grid size={{ xs: 12, md: 8 }}>
                <Paper
                  elevation={0}
                  sx={{
                    borderRadius: 4,
                    bgcolor: "white",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
                    overflow: "hidden",
                    minHeight: 700,
                    position: "relative",
                  }}
                >
                  <AnimatePresence mode="wait">
                    {!selectedProduct ? (
                      <motion.div
                        key="selection"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        style={{ padding: "32px", height: "100%" }}
                      >
                        <Typography
                          variant="h5"
                          gutterBottom
                          fontWeight="bold"
                          sx={{ mb: 4 }}
                        >
                          Sélectionnez votre séance
                        </Typography>

                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 3,
                          }}
                        >
                          {products.map((product) => (
                            <Paper
                              key={product.id}
                              elevation={0}
                              sx={{
                                p: 3,
                                border: "1px solid",
                                borderColor: "grey.200",
                                borderRadius: 3,
                                transition: "all 0.2s ease",
                                cursor: "pointer",
                                "&:hover": {
                                  borderColor: product.color,
                                  boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
                                  transform: "translateY(-2px)",
                                },
                              }}
                              onClick={() => handleSelect(product.id)}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "flex-start",
                                  mb: 2,
                                }}
                              >
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 2,
                                    alignItems: "center",
                                  }}
                                >
                                  <Box
                                    sx={{
                                      p: 1,
                                      borderRadius: 2,
                                      bgcolor: `${product.color}15`, // 15 is hex opacity
                                      color: product.color,
                                    }}
                                  >
                                    {product.icon}
                                  </Box>
                                  <Box>
                                    <Typography variant="h6" fontWeight="bold">
                                      {product.title}
                                    </Typography>
                                    <Typography
                                      variant="body2"
                                      color="text.secondary"
                                    >
                                      {product.duration} • {product.price}
                                    </Typography>
                                  </Box>
                                </Box>
                                <Button
                                  variant="outlined"
                                  size="small"
                                  sx={{
                                    borderColor: product.color,
                                    color: product.color,
                                    "&:hover": {
                                      bgcolor: product.color,
                                      color: "white",
                                      borderColor: product.color,
                                    },
                                  }}
                                >
                                  {product.buttonText}
                                </Button>
                              </Box>

                              <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ mb: 2 }}
                              >
                                {product.description}
                              </Typography>

                              <Box
                                sx={{
                                  display: "flex",
                                  gap: 2,
                                  flexWrap: "wrap",
                                }}
                              >
                                {product.features.map((feature, idx) => (
                                  <Box
                                    key={idx}
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: 0.5,
                                    }}
                                  >
                                    <CheckCircle size={14} color="#2e7d32" />
                                    <Typography
                                      variant="caption"
                                      color="text.secondary"
                                    >
                                      {feature}
                                    </Typography>
                                  </Box>
                                ))}
                              </Box>
                            </Paper>
                          ))}
                        </Box>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="calendar"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Box
                          sx={{
                            p: 2,
                            borderBottom: "1px solid",
                            borderColor: "divider",
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                          }}
                        >
                          <Button
                            startIcon={<ArrowLeft size={18} />}
                            onClick={handleBack}
                            color="inherit"
                          >
                            Retour
                          </Button>
                          <Typography variant="subtitle1" fontWeight="bold">
                            {currentProduct?.title}
                          </Typography>
                        </Box>

                        <Box sx={{ flex: 1, overflow: "hidden" }}>
                          <InlineWidget
                            url={currentProduct?.calendlyUrl || ""}
                            styles={{
                              height: "100%",
                              width: "100%",
                              minHeight: "700px",
                            }}
                            pageSettings={{
                              backgroundColor: "ffffff",
                              hideEventTypeDetails: false,
                              hideLandingPageDetails: false,
                              primaryColor: "0f4c5c",
                              textColor: "2b2d42",
                            }}
                          />
                        </Box>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </main>
      <Footer />
    </MuiProvider>
  );
}
