import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CourseCard from "../../components/CourseCard";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { MuiProvider } from "../../lib/mui";

export default function FormationsPage() {
  const courses = [
    {
      title: "Devenir Coach Certifié",
      description:
        "Un parcours complet de 6 mois pour maîtriser les fondamentaux du coaching, développer votre posture et accompagner vos premiers clients vers la réussite.",
      price: 1490,
      duration: "120 Heures",
      level: "Intermédiaire",
      rating: 4.9,
      reviewCount: 128,
      image: "/img/hero.jpg",
      badge: "Best Seller",
    },
    {
      title: "Leadership & Management",
      description:
        "Développez votre impact en tant que leader. Apprenez à inspirer vos équipes, gérer les conflits et créer une culture d'entreprise performante et bienveillante.",
      price: 890,
      duration: "45 Heures",
      level: "Avancé",
      rating: 4.8,
      reviewCount: 85,
      image: "/img/insperationnal.png",
      badge: "Nouveau",
    },
    {
      title: "Coach de Vie & Développement Personnel",
      description:
        "Maîtrisez les outils du coaching de vie pour accompagner vos clients vers un meilleur équilibre. Gestion du stress, confiance en soi et intelligence émotionnelle.",
      price: 1290,
      duration: "80 Heures",
      level: "Débutant",
      rating: 4.7,
      reviewCount: 64,
      image: "/img/hero.jpg",
      badge: "Populaire",
    },
  ];

  return (
    <MuiProvider>
      <Header />
      <main>
        {/* Page Header */}
        <Box
          sx={{
            bgcolor: "primary.main",
            color: "white",
            py: 12,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: -100,
              right: -100,
              width: 400,
              height: 400,
              bgcolor: "secondary.main",
              opacity: 0.1,
              borderRadius: "50%",
              filter: "blur(80px)",
            }}
          />
          <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
            <Grid container alignItems="center">
              <Grid size={{ xs: 12, md: 8 }}>
                <Typography
                  variant="overline"
                  color="secondary"
                  fontWeight="bold"
                  letterSpacing={2}
                >
                  FORMATIONS
                </Typography>
                <Typography
                  variant="h2"
                  component="h1"
                  fontWeight="bold"
                  sx={{ fontFamily: "Playfair Display, serif", mb: 2 }}
                >
                  Développez Votre Potentiel
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 300, opacity: 0.9, maxWidth: 600 }}
                >
                  Des programmes certifiants conçus pour l&apos;excellence
                  professionnelle et la croissance personnelle.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Grid container spacing={6}>
            {courses.map((c, i) => (
              <Grid key={i} size={{ xs: 12 }}>
                <CourseCard
                  title={c.title}
                  description={c.description}
                  price={c.price}
                  duration={c.duration}
                  level={c.level}
                  rating={c.rating}
                  reviewCount={c.reviewCount}
                  image={c.image}
                  badge={c.badge}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Footer />
    </MuiProvider>
  );
}
