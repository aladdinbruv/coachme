"use client";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import {
  Award,
  CheckCircle,
  ChevronDown,
  Clock,
  PlayCircle,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { MuiProvider } from "../../../lib/mui";

// --- Components ---

// 1. Split Text Animation
const SplitText = ({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) => {
  const words = text.split(" ");
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: { staggerChildren: 0.08, delayChildren: delay },
        },
      }}
      className={className}
      style={{ display: "inline-block" }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.5, ease: "easeOut" },
            },
          }}
          style={{ display: "inline-block", marginRight: "0.25em" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

// 2. Spotlight Card
const SpotlightCard = ({
  children,
  sx = {},
}: {
  children: React.ReactNode;
  sx?: any;
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <Box
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 4,
        border: "1px solid",
        borderColor: "grey.200",
        bgcolor: "white",
        height: "100%",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
        },
        ...sx,
      }}
    >
      <Box
        sx={{
          pointerEvents: "none",
          position: "absolute",
          inset: 0,
          opacity: opacity,
          transition: "opacity 0.3s",
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(15, 76, 92, 0.08), transparent 40%)`,
          zIndex: 1,
        }}
      />
      <Box sx={{ position: "relative", zIndex: 2, height: "100%" }}>
        {children}
      </Box>
    </Box>
  );
};

// 3. Shiny Button
const ShinyButton = ({
  children,
  onClick,
  fullWidth = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
}) => (
  <Button
    variant="contained"
    fullWidth={fullWidth}
    onClick={onClick}
    sx={{
      bgcolor: "primary.main",
      color: "white",
      py: 2,
      px: 4,
      fontSize: "1.1rem",
      fontWeight: "bold",
      borderRadius: 2,
      position: "relative",
      overflow: "hidden",
      transition: "all 0.3s ease",
      boxShadow: "0 10px 20px rgba(15, 76, 92, 0.2)",
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: "-100%",
        width: "100%",
        height: "100%",
        background:
          "linear-gradient(120deg, transparent, rgba(255,255,255, 0.3), transparent)",
        transition: "left 0.6s ease-in-out",
      },
      "&:hover::before": {
        left: "100%",
      },
      "&:hover": {
        bgcolor: "primary.dark",
        transform: "translateY(-2px)",
        boxShadow: "0 15px 30px rgba(15, 76, 92, 0.3)",
      },
    }}
  >
    {children}
  </Button>
);

// Icon Mapping
const iconMap: any = {
  Users: <Users size={24} />,
  Star: <Star size={24} />,
  CheckCircle: <CheckCircle size={24} />,
  ShieldCheck: <ShieldCheck size={24} />,
  Award: <Award size={24} />,
};

export default function CourseDetailClient({ course }: { course: any }) {
  if (!course) return null;

  return (
    <MuiProvider>
      <Header />
      <main style={{ backgroundColor: "#FAFAFA" }}>
        {/* 1. Cinematic Hero Section */}
        <Box
          sx={{
            bgcolor: "primary.dark",
            color: "white",
            pt: { xs: 12, md: 16 },
            pb: { xs: 8, md: 12 },
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: -200,
              right: -200,
              width: 800,
              height: 800,
              background:
                "radial-gradient(circle, rgba(227, 100, 20, 0.15) 0%, rgba(0,0,0,0) 70%)",
              borderRadius: "50%",
              filter: "blur(60px)",
            }}
          />

          <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
            <Grid container spacing={8} alignItems="center">
              <Grid size={{ xs: 12, md: 7 }}>
                <Box sx={{ mb: 3 }}>
                  <Chip
                    label="Best Seller"
                    color="secondary"
                    size="small"
                    sx={{ fontWeight: "bold", mb: 2 }}
                  />
                  <Box
                    sx={{
                      typography: "h1",
                      fontWeight: 800,
                      mb: 2,
                      lineHeight: 1.1,
                    }}
                  >
                    <SplitText text={course.title} />
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "rgba(255,255,255,0.8)",
                      fontWeight: 300,
                      maxWidth: 600,
                      lineHeight: 1.6,
                      mb: 4,
                    }}
                  >
                    {course.subtitle}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      gap: 4,
                      alignItems: "center",
                      mb: 4,
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Box sx={{ display: "flex", color: "secondary.main" }}>
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={18} fill="currentColor" />
                        ))}
                      </Box>
                      <Typography variant="body2" fontWeight="bold">
                        {course.rating}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.6 }}>
                        ({course.students_count} avis)
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Clock size={18} style={{ opacity: 0.6 }} />
                      <Typography variant="body2">
                        Dernière mise à jour: {course.last_updated}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: { xs: "block", md: "none" } }}>
                    <ShinyButton fullWidth>
                      Rejoindre la Masterclass
                    </ShinyButton>
                  </Box>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, md: 5 }}>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        borderRadius: 4,
                        overflow: "hidden",
                        boxShadow: "0 30px 60px rgba(0,0,0,0.3)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        aspectRatio: "16/9",
                        bgcolor: "black",
                      }}
                    >
                      <Image
                        src={course.thumbnail_url || "/img/hero.jpg"}
                        alt="Course Preview"
                        fill
                        style={{ objectFit: "cover", opacity: 0.8 }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          bgcolor: "rgba(0,0,0,0.2)",
                          transition: "0.3s",
                          cursor: "pointer",
                          "&:hover": { bgcolor: "rgba(0,0,0,0.4)" },
                        }}
                      >
                        <Box
                          sx={{
                            width: 80,
                            height: 80,
                            borderRadius: "50%",
                            bgcolor: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "primary.main",
                            boxShadow: "0 0 30px rgba(255,255,255,0.3)",
                          }}
                        >
                          <PlayCircle size={40} fill="currentColor" />
                        </Box>
                      </Box>
                    </Box>
                  </motion.div>
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Grid container spacing={6}>
            <Grid size={{ xs: 12, md: 8 }}>
              {/* Benefits */}
              <Box sx={{ mb: 8 }}>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ mb: 4 }}
                >
                  Ce que vous allez apprendre
                </Typography>
                <Grid container spacing={3}>
                  {course.benefits?.map((benefit: any, index: number) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={index}>
                      <SpotlightCard sx={{ p: 3 }}>
                        <Box sx={{ color: "secondary.main", mb: 2 }}>
                          {iconMap[benefit.icon_name] || (
                            <CheckCircle size={24} />
                          )}
                        </Box>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                          {benefit.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ lineHeight: 1.6 }}
                        >
                          {benefit.description}
                        </Typography>
                      </SpotlightCard>
                    </Grid>
                  ))}
                </Grid>
              </Box>

              {/* Curriculum */}
              <Box sx={{ mb: 8 }}>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ mb: 4 }}
                >
                  Programme de la formation
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {course.curriculum?.map((module: any, index: number) => (
                    <Accordion
                      key={index}
                      disableGutters
                      elevation={0}
                      sx={{
                        border: "1px solid",
                        borderColor: "grey.200",
                        borderRadius: "12px !important",
                        "&:before": { display: "none" },
                        overflow: "hidden",
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ChevronDown />}
                        sx={{ bgcolor: "white", px: 3, py: 1 }}
                      >
                        <Typography variant="subtitle1" fontWeight="bold">
                          {module.module}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails
                        sx={{ bgcolor: "grey.50", px: 3, py: 2 }}
                      >
                        <Box component="ul" sx={{ pl: 2, m: 0 }}>
                          {module.lessons?.map(
                            (lesson: string, idx: number) => (
                              <Box
                                component="li"
                                key={idx}
                                sx={{
                                  mb: 1,
                                  color: "text.secondary",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 2,
                                }}
                              >
                                <PlayCircle size={16} />
                                <Typography variant="body2">
                                  {lesson}
                                </Typography>
                              </Box>
                            )
                          )}
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Box>
              </Box>

              {/* Instructor */}
              {course.instructor && (
                <Box sx={{ mb: 8 }}>
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    gutterBottom
                    sx={{ mb: 4 }}
                  >
                    Votre Formateur
                  </Typography>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 4,
                        borderRadius: 4,
                        bgcolor: "white",
                        border: "1px solid",
                        borderColor: "grey.200",
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        gap: 4,
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          width: 120,
                          height: 120,
                          borderRadius: "50%",
                          overflow: "hidden",
                          flexShrink: 0,
                          border: "4px solid",
                          borderColor: "background.default",
                          boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                        }}
                      >
                        <Image
                          src={
                            course.instructor.avatar_url || "/img/profile.jpg"
                          }
                          alt="Instructor"
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </Box>
                      <Box>
                        <Typography variant="h5" fontWeight="bold" gutterBottom>
                          {course.instructor.full_name}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          color="secondary.main"
                          gutterBottom
                          sx={{
                            mb: 2,
                            textTransform: "uppercase",
                            letterSpacing: 1,
                          }}
                        >
                          {course.instructor.title}
                        </Typography>
                        <Typography color="text.secondary" paragraph>
                          {course.instructor.bio}
                        </Typography>
                        <Box sx={{ display: "flex", gap: 2 }}>
                          <Chip
                            icon={<Award size={16} />}
                            label="Certifié"
                            size="small"
                          />
                          <Chip
                            icon={<Users size={16} />}
                            label="Expert"
                            size="small"
                          />
                        </Box>
                      </Box>
                    </Paper>
                  </motion.div>
                </Box>
              )}
            </Grid>

            {/* Sticky Sidebar */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ position: "sticky", top: 100 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    bgcolor: "white",
                    border: "1px solid",
                    borderColor: "grey.200",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                  }}
                >
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="overline"
                      color="text.secondary"
                      fontWeight="bold"
                    >
                      Prix de lancement
                    </Typography>
                    <Box
                      sx={{ display: "flex", alignItems: "baseline", gap: 2 }}
                    >
                      <Typography
                        variant="h2"
                        fontWeight="bold"
                        color="primary.main"
                      >
                        {course.price}€
                      </Typography>
                      {course.original_price && (
                        <Typography
                          variant="h5"
                          color="text.secondary"
                          sx={{ textDecoration: "line-through", opacity: 0.6 }}
                        >
                          {course.original_price}€
                        </Typography>
                      )}
                    </Box>
                  </Box>

                  <Box sx={{ mb: 4 }}>
                    <ShinyButton fullWidth>Accéder à la formation</ShinyButton>
                    <Typography
                      variant="caption"
                      align="center"
                      display="block"
                      color="text.secondary"
                      sx={{ mt: 1 }}
                    >
                      Garantie 30 jours satisfait ou remboursé
                    </Typography>
                  </Box>

                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <Typography variant="subtitle2" fontWeight="bold">
                      Ce qui est inclus :
                    </Typography>
                    {course.features?.map((feature: string, index: number) => (
                      <Box
                        key={index}
                        sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                      >
                        <CheckCircle size={18} color="#2e7d32" />
                        <Typography variant="body2" color="text.secondary">
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </main>
      <Footer />
    </MuiProvider>
  );
}
