import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Link,
  MenuItem,
  IconButton,
  InputAdornment
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [form, setForm] = useState({
    matricula: "",
    nombre_completo: "",
    fecha_nacimiento: "",
    genero: "",
    password: "",
    confirm: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let temp = {};

    if (!form.matricula) temp.matricula = "La matrícula es obligatoria";
    if (!form.nombre_completo) temp.nombre_completo = "El nombre es obligatorio";
    if (!form.fecha_nacimiento) temp.fecha_nacimiento = "La fecha es obligatoria";
    if (!form.genero) temp.genero = "El género es obligatorio";

    if (!form.password) {
      temp.password = "La contraseña es obligatoria";
    } else if (form.password.length < 6) {
      temp.password = "Mínimo 6 caracteres";
    }

    if (form.confirm !== form.password) {
      temp.confirm = "Las contraseñas no coinciden";
    }

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const token = localStorage.getItem("token");

      const res = await fetch("https://estudiantes-backend-1.onrender.com/api/auth/registro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          matricula: form.matricula,
          nombre_completo: form.nombre_completo,
          fecha_nacimiento: form.fecha_nacimiento,
          genero: form.genero,
          password: form.password
        })
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Error al registrar");
        console.log(data);
        return;
      }

      alert("Usuario creado correctamente");
      navigate("/login");

    } catch (error) {
      console.error(error);
      alert("Error de conexión con el servidor");
    }
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
          width: { xs: "100%", sm: 420 },
          maxWidth: 420,
          borderRadius: 3
        }}
      >
        <Typography variant="h5" textAlign="center" fontWeight="bold" mb={3}>
          Crear cuenta
        </Typography>

        <form onSubmit={handleSubmit}>

          <TextField
            label="Matrícula"
            name="matricula"
            fullWidth
            margin="normal"
            value={form.matricula}
            onChange={handleChange}
            error={!!errors.matricula}
            helperText={errors.matricula}
          />

          <TextField
            label="Nombre completo"
            name="nombre_completo"
            fullWidth
            margin="normal"
            value={form.nombre_completo}
            onChange={handleChange}
            error={!!errors.nombre_completo}
            helperText={errors.nombre_completo}
          />

          <TextField
            label="Fecha de nacimiento"
            name="fecha_nacimiento"
            type="date"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
            value={form.fecha_nacimiento}
            onChange={handleChange}
            error={!!errors.fecha_nacimiento}
            helperText={errors.fecha_nacimiento}
          />

          <TextField
            select
            label="Género"
            name="genero"
            fullWidth
            margin="normal"
            value={form.genero}
            onChange={handleChange}
            error={!!errors.genero}
            helperText={errors.genero}
          >
            <MenuItem value="M">Masculino</MenuItem>
            <MenuItem value="F">Femenino</MenuItem>
            <MenuItem value="Otro">Otro</MenuItem>
          </TextField>

          <TextField
            label="Contraseña"
            name="password"
            type={showPassword ? "text" : "password"}
            fullWidth
            margin="normal"
            value={form.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />

          <TextField
            label="Confirmar contraseña"
            name="confirm"
            type={showConfirm ? "text" : "password"}
            fullWidth
            margin="normal"
            value={form.confirm}
            onChange={handleChange}
            error={!!errors.confirm}
            helperText={errors.confirm}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowConfirm(!showConfirm)}
                  >
                    {showConfirm ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
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
            REGISTRARSE
          </Button>

        </form>

        <Typography textAlign="center" mt={2}>
          ¿Ya tienes cuenta?{" "}
          <Link href="/login">Inicia sesión</Link>
        </Typography>

      </Paper>
    </Box>
  );
}