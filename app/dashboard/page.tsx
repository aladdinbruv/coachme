"use client";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Calendar, Clock, FileText } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useAuth } from "../../lib/AuthContext";
import { API_URL } from "../../lib/config";
import { MuiProvider } from "../../lib/mui";

interface Booking {
  id: number;
  booking_date: string;
  notes: string;
  status: string;
  course_title?: string;
}

export default function DashboardPage() {
  const { user, token, isLoading } = useAuth();
  const router = useRouter();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loadingBookings, setLoadingBookings] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login");
    }
  }, [isLoading, user, router]);

  useEffect(() => {
    const fetchBookings = async () => {
      if (!token) return;
      try {
        const response = await fetch(`${API_URL}/api/bookings`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des réservations");
        }
        const data = await response.json();
        setBookings(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoadingBookings(false);
      }
    };

    if (user) {
      fetchBookings();
    }
  }, [user, token]);

  if (isLoading || !user) {
    return (
      <MuiProvider>
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      </MuiProvider>
    );
  }

  return (
    <MuiProvider>
      <Header />
      <main>
        <Box sx={{ bgcolor: "background.default", py: 12, minHeight: "80vh" }}>
          <Container maxWidth="lg">
            <Box sx={{ mb: 6 }}>
              <Typography
                variant="overline"
                color="secondary"
                fontWeight="bold"
                letterSpacing={2}
              >
                ESPACE PERSONNEL
              </Typography>
              <Typography
                variant="h3"
                component="h1"
                fontWeight="bold"
                sx={{
                  fontFamily: "Playfair Display, serif",
                  color: "primary.main",
                }}
              >
                Bonjour, {user.fullName}
              </Typography>
            </Box>

            <Typography
              variant="h5"
              gutterBottom
              sx={{ mb: 3, fontWeight: "bold" }}
            >
              Vos Réservations
            </Typography>

            {loadingBookings ? (
              <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
                <CircularProgress />
              </Box>
            ) : error ? (
              <Typography color="error">{error}</Typography>
            ) : bookings.length === 0 ? (
              <Paper sx={{ p: 4, textAlign: "center", borderRadius: 4 }}>
                <Typography color="text.secondary">
                  Vous n'avez aucune réservation pour le moment.
                </Typography>
              </Paper>
            ) : (
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {bookings.map((booking) => (
                  <Paper
                    key={booking.id}
                    elevation={0}
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      border: "1px solid",
                      borderColor: "grey.200",
                      transition: "transform 0.2s",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        justifyContent: "space-between",
                        alignItems: { xs: "flex-start", md: "center" },
                        gap: 2,
                      }}
                    >
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            mb: 1,
                          }}
                        >
                          <Chip
                            label={booking.status || "Confirmé"}
                            color="success"
                            size="small"
                            variant="outlined"
                          />
                          <Typography variant="caption" color="text.secondary">
                            #{booking.id}
                          </Typography>
                        </Box>
                        <Typography variant="h6" fontWeight="bold">
                          {booking.course_title || "Séance de Coaching"}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            mt: 1,
                            color: "text.secondary",
                          }}
                        >
                          <Calendar size={16} />
                          <Typography variant="body2">
                            {new Date(booking.booking_date).toLocaleDateString(
                              "fr-FR",
                              {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )}
                          </Typography>
                          <Clock size={16} style={{ marginLeft: 8 }} />
                          <Typography variant="body2">
                            {new Date(booking.booking_date).toLocaleTimeString(
                              "fr-FR",
                              {
                                hour: "2-digit",
                                minute: "2-digit",
                              }
                            )}
                          </Typography>
                        </Box>
                      </Box>

                      {booking.notes && (
                        <Box
                          sx={{
                            bgcolor: "grey.50",
                            p: 2,
                            borderRadius: 2,
                            maxWidth: { md: 400 },
                            width: "100%",
                          }}
                        >
                          <Box sx={{ display: "flex", gap: 1, mb: 0.5 }}>
                            <FileText size={14} color="#666" />
                            <Typography
                              variant="caption"
                              fontWeight="bold"
                              color="text.secondary"
                            >
                              Notes
                            </Typography>
                          </Box>
                          <Typography variant="body2" color="text.secondary">
                            {booking.notes}
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  </Paper>
                ))}
              </Box>
            )}
          </Container>
        </Box>
      </main>
      <Footer />
    </MuiProvider>
  );
}
