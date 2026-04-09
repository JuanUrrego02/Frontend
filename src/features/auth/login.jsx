import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Box,
    TextField,
    Button,
    Typography,
    Paper,
    Link,
    IconButton,
    InputAdornment
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Login() {
    const navigate = useNavigate();

    const [matricula, setMatricula] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};

        if (!matricula) {
            tempErrors.matricula = "La matrícula es obligatoria";
        }

        if (!password) {
            tempErrors.password = "La contraseña es obligatoria";
        } else if (password.length < 6) {
            tempErrors.password = "Mínimo 6 caracteres";
        }

        setErrors(tempErrors);

        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        try {
            const res = await fetch("https://estudiantes-backend-1.onrender.com/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    matricula,
                    password
                })
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.message || "Error al iniciar sesión");
                return;
            }

            console.log("LOGIN OK:", data);

            localStorage.setItem("token", data.token);
            navigate("/dashboard");

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
                background: "linear-gradient(135deg, #2E7D32, #66BB6A)",
                pt: 10,
                px: 2
            }}
        >
            <Paper
                elevation={6}
                sx={{
                    padding: { xs: 3, md: 4 },
                    width: { xs: "100%", sm: 350 },
                    maxWidth: 350,
                    borderRadius: 3
                }}
            >
                <Typography
                    variant="h5"
                    textAlign="center"
                    fontWeight="bold"
                    mb={3}
                >
                    Iniciar Sesión
                </Typography>

                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Matrícula"
                        fullWidth
                        margin="normal"
                        value={matricula}
                        onChange={(e) => setMatricula(e.target.value)}
                        error={!!errors.matricula}
                        helperText={errors.matricula}
                    />

                    <TextField
                        label="Contraseña"
                        type={showPassword ? "text" : "password"}
                        fullWidth
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={!!errors.password}
                        helperText={errors.password}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                        edge="end"
                                    >
                                        {showPassword ? (
                                            <VisibilityOff />
                                        ) : (
                                            <Visibility />
                                        )}
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
                            background: "#2E7D32"
                        }}
                    >
                        Entrar
                    </Button>
                </form>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mt: 2
                    }}
                >
                    <Link href="/registro" underline="hover">
                        Regístrate
                    </Link>

                    <Link href="/forgot-password">
                        ¿Olvidaste tu contraseña?
                    </Link>
                </Box>
            </Paper>
        </Box>
    );
}