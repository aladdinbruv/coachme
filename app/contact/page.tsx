"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { MuiProvider } from "../../lib/mui";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <MuiProvider>
      <Header />
      <main>
        <Box sx={{ bgcolor: "background.default", pt: 12, pb: 0 }}>
          <Container maxWidth="lg">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <Grid container spacing={8}>
                {/* Left Side */}
                <Grid size={{ xs: 12, md: 5 }}>
                  <motion.div variants={itemVariants}>
                    <Typography
                      variant="overline"
                      color="secondary"
                      fontWeight="bold"
                      letterSpacing={2}
                    >
                      CONTACT
                    </Typography>
                    <Typography
                      variant="h2"
                      component="h1"
                      gutterBottom
                      sx={{
                        color: "primary.main",
                        mb: 4,
                        fontFamily: "Playfair Display, serif",
                      }}
                    >
                      Parlons de votre avenir
                    </Typography>
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      paragraph
                      sx={{ mb: 6, fontWeight: 400 }}
                    >
                      Une question ? Un projet ? N&apos;hésitez pas à me
                      contacter pour échanger sur vos besoins.
                    </Typography>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 4 }}
                    >
                      {[
                        {
                          icon: <Mail size={24} />,
                          title: "Email",
                          text: "contact@coachme.fr",
                        },
                        {
                          icon: <Phone size={24} />,
                          title: "Téléphone",
                          text: "06 12 34 56 78",
                        },
                        {
                          icon: <MapPin size={24} />,
                          title: "Cabinet",
                          text: "123 Avenue des Champs-Élysées, 75008 Paris",
                        },
                      ].map((item, index) => (
                        <Box
                          key={index}
                          sx={{ display: "flex", alignItems: "center", gap: 3 }}
                        >
                          <Box
                            sx={{
                              width: 50,
                              height: 50,
                              borderRadius: "50%",
                              bgcolor: "white",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "secondary.main",
                              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                              transition: "transform 0.3s ease",
                              "&:hover": {
                                transform: "scale(1.1)",
                              },
                            }}
                          >
                            {item.icon}
                          </Box>
                          <Box>
                            <Typography
                              variant="subtitle2"
                              color="text.secondary"
                            >
                              {item.title}
                            </Typography>
                            <Typography variant="h6" color="primary.main">
                              {item.text}
                            </Typography>
                          </Box>
                        </Box>
                      ))}
                    </Box>

                    {/* Personal Touch */}
                    <Box
                      sx={{
                        mt: 8,
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      <Box
                        component="img"
                        src="/img/profile.jpg"
                        alt="Coach"
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: "50%",
                          objectFit: "cover",
                          border: "2px solid white",
                          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                        }}
                      />
                      <Box>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          fontStyle="italic"
                        >
                          &quot;Au plaisir de vous lire,&quot;
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{
                            fontFamily: "Playfair Display, serif",
                            color: "primary.main",
                          }}
                        >
                          Votre Coach
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>

                {/* Right Side - Form */}
                <Grid size={{ xs: 12, md: 7 }}>
                  <motion.div variants={itemVariants}>
                    <Box
                      sx={{
                        bgcolor: "white",
                        p: { xs: 4, md: 6 },
                        borderRadius: 4,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.05)", // Softer shadow
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <AnimatePresence mode="wait">
                        {!isSubmitted ? (
                          <motion.form
                            key="form"
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0, y: -20 }}
                            onSubmit={handleSubmit}
                          >
                            <Grid container spacing={3}>
                              <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField
                                  fullWidth
                                  label="Prénom"
                                  variant="outlined"
                                  sx={{
                                    "& .MuiOutlinedInput-root": {
                                      borderRadius: 2,
                                      transition: "all 0.3s",
                                      "&.Mui-focused fieldset": {
                                        borderColor: "secondary.main",
                                      },
                                    },
                                  }}
                                />
                              </Grid>
                              <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField
                                  fullWidth
                                  label="Nom"
                                  variant="outlined"
                                  sx={{
                                    "& .MuiOutlinedInput-root": {
                                      borderRadius: 2,
                                      transition: "all 0.3s",
                                      "&.Mui-focused fieldset": {
                                        borderColor: "secondary.main",
                                      },
                                    },
                                  }}
                                />
                              </Grid>
                              <Grid size={{ xs: 12 }}>
                                <TextField
                                  fullWidth
                                  label="Email"
                                  type="email"
                                  variant="outlined"
                                  sx={{
                                    "& .MuiOutlinedInput-root": {
                                      borderRadius: 2,
                                      transition: "all 0.3s",
                                      "&.Mui-focused fieldset": {
                                        borderColor: "secondary.main",
                                      },
                                    },
                                  }}
                                />
                              </Grid>
                              <Grid size={{ xs: 12 }}>
                                <TextField
                                  fullWidth
                                  label="Message"
                                  multiline
                                  rows={4}
                                  variant="outlined"
                                  sx={{
                                    "& .MuiOutlinedInput-root": {
                                      borderRadius: 2,
                                      transition: "all 0.3s",
                                      "&.Mui-focused fieldset": {
                                        borderColor: "secondary.main",
                                      },
                                    },
                                  }}
                                />
                              </Grid>
                              <Grid size={{ xs: 12 }}>
                                <Button
                                  fullWidth
                                  variant="contained"
                                  size="large"
                                  type="submit"
                                  sx={{
                                    py: 2,
                                    mt: 2,
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                      transform: "translateY(-2px)",
                                      boxShadow:
                                        "0 10px 20px rgba(227, 100, 20, 0.3)",
                                    },
                                  }}
                                  endIcon={<Send size={18} />}
                                >
                                  Envoyer le message
                                </Button>
                              </Grid>
                            </Grid>
                          </motion.form>
                        ) : (
                          <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                              padding: "40px 0",
                              textAlign: "center",
                            }}
                          >
                            <Box
                              sx={{
                                width: 80,
                                height: 80,
                                borderRadius: "50%",
                                bgcolor: "success.light",
                                color: "success.main",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mb: 3,
                              }}
                            >
                              <Check size={40} />
                            </Box>
                            <Typography
                              variant="h4"
                              gutterBottom
                              color="primary.main"
                              fontWeight="bold"
                            >
                              Message envoyé !
                            </Typography>
                            <Typography color="text.secondary">
                              Merci de m&apos;avoir contacté. Je reviendrai vers
                              vous sous 24h.
                            </Typography>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Box>
                  </motion.div>
                </Grid>
              </Grid>
            </motion.div>
          </Container>

          {/* Map Section */}
          <Box
            sx={{
              mt: 12,
              height: 400,
              width: "100%",
              filter: "grayscale(100%) contrast(1.2) opacity(0.8)",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.222176299776!2d2.300774315674884!3d48.87294497928894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc4f8f8f8f7%3A0x40b82c3688c9460!2sAv.%20des%20Champs-%C3%89lys%C3%A9es%2C%20Paris!5e0!3m2!1sen!2sfr!4v1629898765432!5m2!1sen!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </Box>
        </Box>
      </main>
      <Footer />
    </MuiProvider>
  );
}
