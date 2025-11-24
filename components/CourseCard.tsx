"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { ArrowRight, Clock, GraduationCap, Star } from "lucide-react";

type Props = {
  title: string;
  description?: string;
  price?: number;
  duration?: string;
  level?: string;
  rating?: number;
  reviewCount?: number;
  image?: string;
  badge?: string;
};

export default function CourseCard({
  title,
  description,
  price,
  duration = "20 Heures",
  level = "Débutant",
  rating = 4.8,
  reviewCount = 50,
  image = "/placeholder-course.jpg",
  badge,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          overflow: "hidden",
          borderRadius: 4,
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
          transition: "box-shadow 0.3s ease",
          "&:hover": {
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          },
          height: "100%",
        }}
      >
        {/* Image Section */}
        <Box
          sx={{
            width: { xs: "100%", md: "40%" },
            position: "relative",
            overflow: "hidden",
          }}
        >
          <CardMedia
            component="img"
            image={image}
            alt={title}
            sx={{
              height: "100%",
              minHeight: 250,
              objectFit: "cover",
              transition: "transform 0.5s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />
          {badge && (
            <Chip
              label={badge}
              color="secondary"
              size="small"
              sx={{
                position: "absolute",
                top: 16,
                left: 16,
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            />
          )}
        </Box>

        {/* Content Section */}
        <CardContent
          sx={{
            flex: 1,
            p: { xs: 3, md: 4 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Meta Tags */}
          <Box sx={{ display: "flex", gap: 3, mb: 2, flexWrap: "wrap" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                color: "text.secondary",
              }}
            >
              <Clock size={16} />
              <Typography variant="caption" fontWeight="medium">
                {duration}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                color: "text.secondary",
              }}
            >
              <GraduationCap size={16} />
              <Typography variant="caption" fontWeight="medium">
                {level}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                color: "warning.main",
              }}
            >
              <Star size={16} fill="currentColor" />
              <Typography
                variant="caption"
                fontWeight="bold"
                color="text.primary"
              >
                {rating}/5
              </Typography>
              <Typography variant="caption" color="text.secondary">
                ({reviewCount} avis)
              </Typography>
            </Box>
          </Box>

          <Typography
            variant="h4"
            component="h3"
            gutterBottom
            sx={{
              fontFamily: "Playfair Display, serif",
              fontWeight: "bold",
              color: "primary.main",
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            paragraph
            sx={{ mb: 3 }}
          >
            {description}
          </Typography>

          <Box
            sx={{
              mt: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              pt: 2,
            }}
          >
            <Typography variant="h5" color="secondary.main" fontWeight="bold">
              {price ? `${price}€` : "Gratuit"}
            </Typography>

            <Button
              variant="contained"
              endIcon={<ArrowRight size={18} />}
              sx={{
                px: 4,
                py: 1,
                borderRadius: 50,
                textTransform: "none",
                fontSize: "1rem",
              }}
            >
              Voir détails
            </Button>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
}
