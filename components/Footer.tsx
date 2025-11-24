"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "grey.900", color: "white", py: 6, mt: "auto" }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography variant="h6" gutterBottom>
              CoachMe
            </Typography>
            <Typography variant="body2" color="grey.400">
              Accompagnement professionnel et personnel pour révéler votre
              potentiel.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography variant="h6" gutterBottom>
              Liens Utiles
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link
                href="/solutions"
                style={{ color: "#bdbdbd", textDecoration: "none" }}
              >
                Solutions
              </Link>
              <Link
                href="/formations"
                style={{ color: "#bdbdbd", textDecoration: "none" }}
              >
                Formations
              </Link>
              <Link
                href="/deontologie"
                style={{ color: "#bdbdbd", textDecoration: "none" }}
              >
                Déontologie
              </Link>
              <Link
                href="/contact"
                style={{ color: "#bdbdbd", textDecoration: "none" }}
              >
                Contact
              </Link>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography variant="h6" gutterBottom>
              Suivez-nous
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Facebook color="#bdbdbd" />
              <Twitter color="#bdbdbd" />
              <Linkedin color="#bdbdbd" />
              <Instagram color="#bdbdbd" />
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            mt: 5,
            pt: 3,
            borderTop: "1px solid #424242",
            textAlign: "center",
          }}
        >
          <Typography variant="body2" color="grey.500">
            © {new Date().getFullYear()} CoachMe — Tous droits réservés
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
