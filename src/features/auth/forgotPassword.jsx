import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Link
} from "@mui/material";

export default function ForgotPassword() {

  const [correo, setCorreo] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!correo) {
      setError("El correo es obligatorio");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(correo)) {
      setError("Correo inválido");
      return;
    }

    setError("");
    alert("Si el correo existe, recibirás instrucciones.");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg,#2E7D32,#66BB6A)",
        pt: 10,
        px: 2
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: { xs: 3, md: 4 },
          width: { xs: "100%", sm: 380 },
          maxWidth: 380,
          borderRadius: 3
        }}
      >
        <Typography
          variant="h5"
          textAlign="center"
          fontWeight="bold"
          mb={2}
        >
          Recuperar contraseña
        </Typography>

        <Typography
          variant="body2"
          textAlign="center"
          mb={2}
        >
          Ingresa tu correo y te enviaremos instrucciones
        </Typography>

        <form onSubmit={handleSubmit}>

          <TextField
            label="Correo electrónico"
            fullWidth
            size="small"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            error={!!error}
            helperText={error}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              background: "#2E7D32",
              ":hover": { background: "#1B5E20" }
            }}
          >
            ENVIAR
          </Button>

        </form>

        <Typography textAlign="center" mt={2}>
          <Link href="/login">Volver al login</Link>
        </Typography>

      </Paper>
    </Box>
  );
}