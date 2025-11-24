"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { MuiProvider } from "../../lib/mui";

export default function CoachPage() {
  return (
    <MuiProvider>
      <Header />
      <main>
        <Box sx={{ bgcolor: "background.default", py: 12 }}>
          <Container maxWidth="lg">
            <Grid container spacing={8} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    position: "relative",
                    height: 600,
                    borderRadius: 4,
                    overflow: "hidden",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  }}
                >
                  <Image
                    src="/img/profile.jpg"
                    alt="Coach Profile"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography
                  variant="overline"
                  color="secondary"
                  fontWeight="bold"
                  letterSpacing={2}
                >
                  À PROPOS
                </Typography>
                <Typography
                  variant="h2"
                  component="h1"
                  gutterBottom
                  sx={{ color: "primary.main", mb: 4 }}
                >
                  Votre Coach
                </Typography>
                <Typography variant="h5" paragraph sx={{ fontWeight: 400 }}>
                  Passionné par le développement humain, j&apos;accompagne les
                  individus et les organisations vers leur plein potentiel.
                </Typography>
                <Typography paragraph color="text.secondary">
                  Après 10 ans d&apos;expérience en management et direction
                  d&apos;entreprise, j&apos;ai choisi de me consacrer au
                  coaching pour apporter une aide concrète et bienveillante.
                </Typography>
                <Typography paragraph color="text.secondary">
                  Certifié par l&apos;ICF (International Coaching Federation),
                  ma pratique repose sur l&apos;écoute active, le questionnement
                  puissant et la mise en action.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </main>
      <Footer />
    </MuiProvider>
  );
}
