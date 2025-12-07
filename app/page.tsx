"use client";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  CheckCircle,
  ChevronDown,
  Clock,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { MuiProvider } from "../lib/mui";

export default function Home() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <MuiProvider>
      <Header />
      <main>
        {/* Hero Section */}
        <Box
          sx={{
            bgcolor: "background.default",
            color: "text.primary",
            pt: { xs: 8, md: 12 },
            pb: { xs: 12, md: 20 }, // Extra padding bottom for overlap
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Abstract Background Shape */}
          <Box
            sx={{
              position: "absolute",
              top: -100,
              right: -100,
              width: 600,
              height: 600,
              bgcolor: "secondary.light",
              opacity: 0.1,
              borderRadius: "50%",
              filter: "blur(80px)",
              zIndex: 0,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: -50,
              left: -100,
              width: 400,
              height: 400,
              bgcolor: "primary.main",
              opacity: 0.05,
              borderRadius: "50%",
              filter: "blur(60px)",
              zIndex: 0,
            }}
          />

          <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
            <Grid container spacing={8} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Typography
                    variant="overline"
                    color="secondary"
                    fontWeight="bold"
                    letterSpacing={2}
                    sx={{ mb: 2, display: "block" }}
                  >
                    – COACHING - FORMATION- CONSEIL
                  </Typography>
                  <Typography
                    variant="h1"
                    component="h1"
                    gutterBottom
                    sx={{
                      fontSize: { xs: "3rem", md: "4.5rem" },
                      lineHeight: 1.1,
                      color: "primary.main",
                    }}
                  >
                    Révélez votre <br />
                    <Box component="span" sx={{ color: "secondary.main" }}>
                      Vrai Potentiel
                    </Box>
                  </Typography>
                  <Typography
                    variant="h5"
                    paragraph
                    sx={{
                      mb: 5,
                      color: "text.secondary",
                      fontWeight: 400,
                      maxWidth: 500,
                      lineHeight: 1.6,
                    }}
                  >
                    Un accompagnement sur-mesure pour transformer vos ambitions
                    en réalité. Reprenez le contrôle de votre carrière dès
                    aujourd&apos;hui.
                  </Typography>
                  <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      href="/booking"
                      sx={{ px: 5, py: 2, fontSize: "1.1rem" }}
                    >
                      Commencer maintenant
                    </Button>
                    <Button
                      variant="text"
                      color="primary"
                      size="large"
                      href="/solutions"
                      endIcon={<ArrowRight />}
                      sx={{ px: 3, py: 2, fontSize: "1.1rem" }}
                    >
                      Dècouvrez notre approche
                    </Button>
                  </Box>
                </motion.div>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: [1, 1.02, 1] }}
                  transition={{
                    opacity: { duration: 0.8, delay: 0.2 },
                    scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      height: 500,
                      borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%", // Organic blob shape
                      overflow: "hidden",
                      boxShadow: "0 30px 60px rgba(15, 76, 92, 0.15)",
                    }}
                  >
                    <Image
                      src="/img/coach_in_action.png"
                      alt="Coaching professionnel"
                      fill
                      style={{ objectFit: "cover" }}
                      priority
                    />
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Stats Section - Overlapping */}
        <Container
          maxWidth="lg"
          sx={{ mt: -10, position: "relative", zIndex: 10, mb: 12 }}
        >
          <Box
            sx={{
              bgcolor: "white",
              borderRadius: 4,
              p: 4,
              boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
            }}
          >
            <Grid container spacing={4} justifyContent="center">
              {[
                {
                  number: "500+",
                  label: "Clients accompagnés",
                  icon: <Users size={28} />,
                },
                {
                  number: "10+",
                  label: "Années d'expérience",
                  icon: <Clock size={28} />,
                },
                {
                  number: "98%",
                  label: "Satisfaction client",
                  icon: <Star size={28} />,
                },
                {
                  number: "50+",
                  label: "Entreprises partenaires",
                  icon: <Briefcase size={28} />,
                },
              ].map((stat, index) => (
                <Grid size={{ xs: 6, md: 3 }} key={index}>
                  <Box sx={{ textAlign: "center" }}>
                    <Box
                      sx={{
                        mb: 1,
                        display: "flex",
                        justifyContent: "center",
                        color: "secondary.main",
                      }}
                    >
                      {stat.icon}
                    </Box>
                    <Typography
                      variant="h4"
                      fontWeight="bold"
                      color="primary.main"
                    >
                      {stat.number}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      fontWeight="bold"
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>

        {/* Problem/Solution Section (Services) - White Background */}
        <Box sx={{ bgcolor: "white", py: 12 }}>
          <Container maxWidth="lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h3"
                component="h2"
                align="center"
                gutterBottom
                sx={{ mb: 2, fontWeight: "bold" }}
              >
                S&apos;eppanuir est un droit individuel pas un merite
              </Typography>
              <Typography
                variant="h6"
                align="center"
                color="text.secondary"
                sx={{ mb: 8, maxWidth: 700, mx: "auto" }}
              >
                Nous vous accompagnons à chaque étape de votre évolution
                professionnelle avec des solutions adaptées.
              </Typography>
            </motion.div>

            <Grid container spacing={4}>
              {[
                {
                  title: "Coaching Pro",
                  desc: "Surmontez les obstacles, identifiez vos forces et atteignez vos objectifs.",
                  icon: <Star size={32} />,
                },
                {
                  title: "Bilan de Compétences",
                  desc: "Faites le point sur votre carrière et construisez un projet aligné.",
                  icon: <CheckCircle size={32} />,
                },
                {
                  title: "Formations en ligne",
                  desc: "Accédez à nos modules certifiants pour développer vos compétences.",
                  icon: <ArrowRight size={32} />,
                },
              ].map((item, index) => (
                <Grid size={{ xs: 12, md: 4 }} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <Card
                      sx={{
                        height: "100%",
                        borderRadius: 4,
                        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                        transition: "0.3s",
                        bgcolor: "background.default", // Cream card on white bg
                        "&:hover": { transform: "translateY(-5px)" },
                      }}
                    >
                      <CardContent sx={{ p: 4, textAlign: "center" }}>
                        <Box
                          sx={{
                            color: "primary.main",
                            mb: 2,
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          {item.icon}
                        </Box>
                        <Typography
                          variant="h5"
                          gutterBottom
                          fontWeight="bold"
                          color="text.primary"
                        >
                          {item.title}
                        </Typography>
                        <Typography color="text.secondary">
                          {item.desc}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Process Section - Cream Background */}
        <Box
          sx={{ bgcolor: "background.default", py: 12, position: "relative" }}
          ref={targetRef}
        >
          <Container maxWidth="lg">
            <Typography
              variant="h2"
              align="center"
              gutterBottom
              sx={{ mb: 12, color: "primary.main" }}
            >
              Votre parcours de transformation
            </Typography>

            {/* Connecting Line (Desktop) */}
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                position: "absolute",
                left: 0,
                right: 0,
                top: "300px",
                height: "2px",
                zIndex: 0,
              }}
            >
              <svg width="100%" height="100" style={{ overflow: "visible" }}>
                <motion.path
                  d="M 100 50 Q 400 100 700 50 T 1300 50" // Simple wave
                  fill="none"
                  stroke="#e36414"
                  strokeWidth="2"
                  strokeDasharray="10 10"
                  style={{ pathLength: height, opacity: 0.3 }}
                />
              </svg>
            </Box>

            <Grid
              container
              spacing={4}
              sx={{ position: "relative", zIndex: 1 }}
            >
              {[
                {
                  step: "01",
                  title: "Prise de contact",
                  desc: "Un premier échange gratuit de 30 min pour faire connaissance et valider votre besoin.",
                },
                {
                  step: "02",
                  title: "Diagnostic",
                  desc: "Nous définissons ensemble vos objectifs et le cadre de l'accompagnement.",
                },
                {
                  step: "03",
                  title: "Accompagnement",
                  desc: "Des séances régulières (1h30) pour avancer concrètement vers votre but.",
                },
                {
                  step: "04",
                  title: "Bilan",
                  desc: "Une séance de clôture pour mesurer le chemin parcouru et célébrer vos succès.",
                },
              ].map((item, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                  <Box
                    sx={{
                      position: "relative",
                      p: 3,
                      height: "100%",
                      bgcolor: "white",
                      borderRadius: 4,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                      transition: "0.3s",
                      "&:hover": {
                        transform: "translateY(-10px)",
                      },
                    }}
                  >
                    <Typography
                      variant="h1"
                      sx={{
                        color: "secondary.main",
                        opacity: 0.1,
                        fontWeight: "900",
                        position: "absolute",
                        top: 10,
                        right: 20,
                        fontSize: "4rem",
                        fontFamily: "var(--font-playfair)",
                      }}
                    >
                      {item.step}
                    </Typography>
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      gutterBottom
                      sx={{ mt: 4, position: "relative", zIndex: 1 }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      sx={{ position: "relative", zIndex: 1 }}
                    >
                      {item.desc}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Coach Section (About) - White Background */}
        <Box sx={{ bgcolor: "white", py: 12 }}>
          <Container maxWidth="md">
            <Grid container spacing={6} alignItems="center">
              <Grid size={{ xs: 12, md: 5 }}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <Box sx={{ position: "relative" }}>
                    {/* Decorative Circle */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 20,
                        left: -20,
                        width: 280,
                        height: 280,
                        borderRadius: "50%",
                        bgcolor: "secondary.light",
                        opacity: 0.2,
                        zIndex: 0,
                      }}
                    />
                    <Box
                      sx={{
                        position: "relative",
                        width: 280,
                        height: 280,
                        borderRadius: "50%",
                        mx: "auto",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                        overflow: "hidden",
                        zIndex: 1,
                      }}
                    >
                      <Image
                        src="/img/coach.jpg"
                        alt="Coach Profile"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
              <Grid size={{ xs: 12, md: 7 }}>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <Typography
                    variant="overline"
                    color="primary"
                    fontWeight="bold"
                  >
                    À PROPOS
                  </Typography>
                  <Typography
                    variant="h3"
                    gutterBottom
                    fontWeight="bold"
                    sx={{ mb: 3 }}
                  >
                    Un coach certifié à vos côtés
                  </Typography>
                  <Typography
                    paragraph
                    color="text.secondary"
                    sx={{ fontSize: "1.1rem" }}
                  >
                    Je suis [Votre Nom], coach professionnel certifié.
                    J&apos;accompagne celles et ceux qui souhaitent retrouver
                    équilibre et sérénité dans leur vie personnelle et
                    professionnelle.
                  </Typography>
                  <Typography
                    fontStyle="italic"
                    color="text.primary"
                    paragraph
                    sx={{
                      borderLeft: "4px solid",
                      borderColor: "secondary.main",
                      pl: 2,
                      py: 1,
                      bgcolor: "background.default",
                    }}
                  >
                    &quot;Je crois profondément que chacun possède les
                    ressources nécessaires pour trouver ses propres
                    solutions.&quot;
                  </Typography>
                  <Button
                    variant="text"
                    color="primary"
                    href="/coach"
                    endIcon={<ArrowRight size={16} />}
                  >
                    En savoir plus sur le coach
                  </Button>
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Testimonials Section - Dark Teal Background */}
        <Box sx={{ bgcolor: "primary.main", py: 12, color: "white" }}>
          <Container maxWidth="lg">
            <Typography
              variant="h3"
              align="center"
              gutterBottom
              fontWeight="bold"
              sx={{ mb: 6 }}
            >
              Ce qu&apos;ils disent de nous
            </Typography>
            <Grid container spacing={4}>
              {[
                {
                  name: "Sophie Martin",
                  role: "Directrice Marketing",
                  text: "Grâce au coaching, j'ai pu identifier mes blocages et prendre ce poste de direction que je n'osais pas viser.",
                },
                {
                  name: "Thomas Dubois",
                  role: "Entrepreneur",
                  text: "Le bilan de compétences a été une révélation. J'ai enfin lancé mon projet avec confiance et sérénité.",
                },
                {
                  name: "Marie Leroy",
                  role: "En reconversion",
                  text: "Une écoute bienveillante et des outils concrets qui m'ont permis de changer de voie sans peur.",
                },
              ].map((testimonial, index) => (
                <Grid size={{ xs: 12, md: 4 }} key={index}>
                  <Card
                    sx={{
                      height: "100%",
                      borderRadius: 4,
                      bgcolor: "rgba(255,255,255,0.05)", // Glassy effect
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      boxShadow: "none",
                      color: "white",
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box
                        sx={{ display: "flex", mb: 2, color: "secondary.main" }}
                      >
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={20} fill="currentColor" />
                        ))}
                      </Box>
                      <Typography
                        paragraph
                        sx={{
                          fontStyle: "italic",
                          mb: 3,
                          minHeight: 80,
                          opacity: 0.9,
                        }}
                      >
                        &quot;{testimonial.text}&quot;
                      </Typography>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                      >
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            bgcolor: "secondary.main",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            fontWeight: "bold",
                          }}
                        >
                          {testimonial.name.charAt(0)}
                        </Box>
                        <Box>
                          <Typography variant="subtitle1" fontWeight="bold">
                            {testimonial.name}
                          </Typography>
                          <Typography variant="caption" sx={{ opacity: 0.7 }}>
                            {testimonial.role}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* FAQ Section - White Background */}
        <Box sx={{ bgcolor: "white", py: 12 }}>
          <Container maxWidth="md">
            <Typography
              variant="h3"
              align="center"
              gutterBottom
              fontWeight="bold"
              sx={{ mb: 6 }}
            >
              Questions Fréquentes
            </Typography>
            {[
              {
                q: "Comment se déroule une séance de coaching ?",
                a: "Une séance dure généralement 1h à 1h30. Nous commençons par faire le point sur votre situation actuelle, définissons un objectif de séance, et travaillons ensemble pour lever les blocages et trouver des solutions concrètes.",
              },
              {
                q: "Le coaching est-il confidentiel ?",
                a: "Absolument. La confidentialité est la base de la relation de confiance entre le coach et le coaché. Tout ce qui est dit en séance reste strictement confidentiel, conformément au code de déontologie.",
              },
              {
                q: "Quelle est la différence entre coaching et thérapie ?",
                a: "Le coaching est orienté vers l'action et l'avenir (comment atteindre un objectif), tandis que la thérapie se penche souvent sur le passé pour comprendre l'origine des souffrances. Le coaching vise l'autonomie et la performance.",
              },
              {
                q: "Proposez-vous des séances à distance ?",
                a: "Oui, toutes nos séances peuvent être réalisées en visio-conférence avec la même efficacité qu'en présentiel.",
              },
            ].map((faq, index) => (
              <Accordion
                key={index}
                sx={{
                  mb: 2,
                  borderRadius: "8px !important",
                  boxShadow: "none",
                  bgcolor: "background.default",
                  "&:before": { display: "none" },
                }}
              >
                <AccordionSummary expandIcon={<ChevronDown />}>
                  <Typography variant="h6" fontWeight="500">
                    {faq.q}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="text.secondary">{faq.a}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Container>
        </Box>

        {/* Newsletter Section - Textured */}
        <Container maxWidth="md" sx={{ py: 12, textAlign: "center" }}>
          <Box
            sx={{
              bgcolor: "primary.main",
              color: "white",
              p: { xs: 4, md: 8 },
              borderRadius: 4,
              position: "relative",
              overflow: "hidden",
              backgroundImage:
                "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)",
            }}
          >
            {/* Noise Texture Overlay (Simulated with CSS) */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0.05,
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                zIndex: 0,
              }}
            />

            <Box sx={{ position: "relative", zIndex: 1 }}>
              <Typography variant="h4" gutterBottom fontWeight="bold">
                Restez inspiré
              </Typography>
              <Typography paragraph sx={{ mb: 4, opacity: 0.9 }}>
                Recevez nos conseils, articles et actualités directement dans
                votre boîte mail. Pas de spam, promis.
              </Typography>
              <Box
                component="form"
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 2,
                  maxWidth: 500,
                  mx: "auto",
                }}
              >
                <TextField
                  placeholder="Votre email"
                  variant="outlined"
                  fullWidth
                  sx={{
                    bgcolor: "white",
                    borderRadius: 1,
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { border: "none" },
                    },
                  }}
                />
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  sx={{ px: 4, whiteSpace: "nowrap" }}
                >
                  S&apos;inscrire
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </main>
      <Footer />
    </MuiProvider>
  );
}
