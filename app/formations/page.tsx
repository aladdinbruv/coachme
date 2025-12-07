"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import CourseCard from "../../components/CourseCard";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { API_URL } from "../../lib/config";
import { MuiProvider } from "../../lib/mui";

interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  duration: string;
  level: string;
  rating: number;
  reviewCount: number;
  image: string;
  badge: string;
  slug: string;
}

export default function FormationsPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`${API_URL}/api/courses`);
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des formations");
        }
        const data = await response.json();
        const mappedCourses = data.map((c: any) => ({
          id: c.id,
          title: c.title,
          description: c.subtitle || "",
          price: Number(c.price),
          duration: c.duration || "N/A",
          level: c.level || "Tous niveaux",
          rating: Number(c.rating),
          reviewCount: c.students_count || 0,
          image: c.thumbnail_url || "/img/hero.jpg",
          badge: c.badge || "",
          slug: c.slug,
        }));
        setCourses(mappedCourses);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

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
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
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
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: 8 }}>
          {loading ? (
            <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
              <CircularProgress />
            </Box>
          ) : error ? (
            <Typography color="error" align="center">
              {error}
            </Typography>
          ) : (
            <Grid container spacing={6}>
              {courses.map((c, i) => (
                <Grid key={i} size={{ xs: 12 }}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={`/formations/${c.slug}`}
                      style={{ textDecoration: "none" }}
                    >
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
                    </Link>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          )}
        </Container>

        {/* CTA Section */}
        <Box sx={{ bgcolor: "grey.50", py: 12 }}>
          <Container maxWidth="md" sx={{ textAlign: "center" }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h3"
                component="h2"
                fontWeight="bold"
                gutterBottom
                sx={{
                  fontFamily: "Playfair Display, serif",
                  color: "text.primary",
                }}
              >
                Besoin d'un conseil personnalisé ?
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ mb: 4, fontWeight: 300 }}
              >
                Nos conseillers pédagogiques sont là pour vous aider à choisir
                le parcours le plus adapté à vos objectifs.
              </Typography>
              <Link href="/contact" passHref style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    px: 6,
                    py: 2,
                    borderRadius: 50,
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                  }}
                >
                  Contactez-nous
                </Button>
              </Link>
            </motion.div>
          </Container>
        </Box>
      </main>
      <Footer />
    </MuiProvider>
  );
}
