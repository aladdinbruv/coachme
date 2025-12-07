"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { LogIn, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuth } from "../lib/AuthContext";

export default function LoginModal() {
  const { isLoginModalOpen, closeLoginModal } = useAuth();
  const router = useRouter();

  const handleLoginRedirect = () => {
    closeLoginModal();
    router.push("/login");
  };

  const handleRegisterRedirect = () => {
    closeLoginModal();
    router.push("/register");
  };

  return (
    <Dialog
      open={isLoginModalOpen}
      onClose={closeLoginModal}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          p: 2,
        },
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton onClick={closeLoginModal} size="small">
          <X size={20} />
        </IconButton>
      </Box>
      <DialogContent sx={{ pt: 0, pb: 4, px: 3, textAlign: "center" }}>
        <Box
          sx={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            bgcolor: "primary.light",
            color: "primary.main",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: "auto",
            mb: 2,
            opacity: 0.2,
          }}
        >
          <LogIn size={30} />
        </Box>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ fontFamily: "Playfair Display, serif", mb: 2 }}
        >
          Connexion requise
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Pour continuer cette action, vous devez être connecté à votre compte.
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Button
            fullWidth
            variant="contained"
            size="large"
            onClick={handleLoginRedirect}
            sx={{ py: 1.5 }}
          >
            Se connecter
          </Button>
          <Button
            fullWidth
            variant="outlined"
            size="large"
            onClick={handleRegisterRedirect}
            sx={{ py: 1.5 }}
          >
            Créer un compte
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
