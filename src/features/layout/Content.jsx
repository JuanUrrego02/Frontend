import React from "react";
import {
    Box,
    Typography,
    Button,
    Grid,
    Card,
    CardContent
} from "@mui/material";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CategoryIcon from "@mui/icons-material/Category";
import BarChartIcon from "@mui/icons-material/BarChart";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

import fondo from "/img/fondo.jpg";

export default function Content() {
    return (
        <Box>

            {/* HERO */}
            <Box
                id="inicio"
                sx={{
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    color: "white",
                    backgroundImage: `url(${fondo})`,
                    backgroundColor: "rgba(0,0,0,0.5)",
                    backgroundBlendMode: "darken",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "2rem", md: "3rem" } }}>
                    Controla tus gastos fácilmente
                </Typography>

                <Typography sx={{ maxWidth: "600px", mb: 3, fontSize: { xs: "1rem", md: "1.25rem" }, px: 2 }}>
                    Administra tus ingresos y gastos diarios de forma simple,
                    visualiza reportes y mejora tu control financiero.
                </Typography>

                <Button
                    variant="contained"
                    href="#funciones"
                    sx={{ background: "#2E7D32" }}
                >
                    Ver funciones
                </Button>
            </Box>

            {/* FUNCIONES */}
            <Box id="funciones" sx={{ padding: { xs: 4, md: 10 }, background: "#f5f5f5" }}>
                <Typography variant="h4" align="center" sx={{ mb: 6 }}>
                    Funciones
                </Typography>

                <Grid container spacing={4} justifyContent="center">

                    <Grid size={{ xs: 12, md: 3}}>
                        <Card
                            sx={{
                                textAlign: "center",
                                padding: "20px",
                                borderRadius: "15px",
                                transition: "0.3s",
                                "&:hover": {
                                    transform: "translateY(-10px)",
                                    boxShadow: 6
                                }
                            }}
                        >
                            <CardContent>
                                <AttachMoneyIcon sx={{ fontSize: 45, color: "#2E7D32" }} />
                                <Typography variant="h6" sx={{ mt: 2 }}>
                                    Registro de gastos
                                </Typography>
                                <Typography>
                                    Guarda tus gastos diarios rápidamente.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid size={{ xs: 12, md: 3}}>
                        <Card
                            sx={{
                                textAlign: "center",
                                padding: "20px",
                                borderRadius: "15px",
                                transition: "0.3s",
                                "&:hover": {
                                    transform: "translateY(-10px)",
                                    boxShadow: 6
                                }
                            }}
                        >
                            <CardContent>
                                <CategoryIcon sx={{ fontSize: 45, color: "#2E7D32" }} />
                                <Typography variant="h6" sx={{ mt: 2 }}>
                                    Categorías inteligentes
                                </Typography>
                                <Typography>
                                    Clasifica automáticamente tus gastos.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid size={{ xs: 12, md: 3}}>
                        <Card
                            sx={{
                                textAlign: "center",
                                padding: "20px",
                                borderRadius: "15px",
                                transition: "0.3s",
                                "&:hover": {
                                    transform: "translateY(-10px)",
                                    boxShadow: 6
                                }
                            }}
                        >
                            <CardContent>
                                <BarChartIcon sx={{ fontSize: 45, color: "#2E7D32" }} />
                                <Typography variant="h6" sx={{ mt: 2 }}>
                                    Reportes visuales
                                </Typography>
                                <Typography>
                                    Analiza tus gastos con estadísticas claras.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
            </Box>

            {/* Separador */}
            <Box sx={{ borderTop: "2px solid #e0e0e0", my: 6 }} />

            {/* PLANES */}
            <Box id="planes" sx={{ padding: { xs: 4, md: 10 }, background: "#f5f5f5" }}>
                <Typography variant="h4" align="center" sx={{ mb: 6, fontWeight: "bold" }}>
                    Planes
                </Typography>

                <Grid container spacing={4} justifyContent="center">

                    {/* Plan Gratis */}
                    <Grid size={{ xs: 12, md: 3}}>
                        <Card sx={{ textAlign: "center", padding: "25px", borderRadius: "15px", boxShadow: 3 }}>
                            <CardContent>

                                <Typography variant="h5" sx={{ mb: 1, fontWeight: "bold" }}>
                                    Gratis
                                </Typography>

                                <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
                                    $0 / mes
                                </Typography>

                                <Typography>Registro de gastos</Typography>
                                <Typography>Categorías básicas</Typography>
                                <Typography>Visualización limitada de reportes</Typography>
                                <Typography>Soporte por email</Typography>

                                <Button
                                    variant="outlined"
                                    sx={{
                                        mt: 3,
                                        borderColor: "#2E7D32",
                                        color: "#2E7D32",
                                        transition: "0.3s",
                                        "&:hover": {
                                            backgroundColor: "#2E7D32",
                                            color: "white",
                                            transform: "scale(1.05)"
                                        }
                                    }}
                                >
                                    Empezar
                                </Button>

                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Plan Pro */}
                    <Grid size={{ xs: 12, md: 3}}>
                        <Card
                            sx={{
                                textAlign: "center",
                                padding: "25px",
                                borderRadius: "15px",
                                border: "2px solid #2E7D32",
                                boxShadow: 5
                            }}
                        >
                            <CardContent>

                                <Typography variant="h5" sx={{ mb: 1, fontWeight: "bold" }}>
                                    Pro
                                </Typography>

                                <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
                                    $19 / mes
                                </Typography>

                                <Typography>Reportes avanzados</Typography>
                                <Typography>Presupuestos personalizados</Typography>
                                <Typography>Categorías inteligentes</Typography>
                                <Typography>Exportar datos a Excel</Typography>
                                <Typography>Soporte prioritario</Typography>

                                <Button
                                    variant="contained"
                                    sx={{
                                        mt: 3,
                                        background: "#2E7D32",
                                        transition: "0.3s",
                                        "&:hover": {
                                            backgroundColor: "#1B5E20",
                                            transform: "scale(1.05)",
                                            boxShadow: 6
                                        }
                                    }}
                                >
                                    Comprar
                                </Button>

                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
            </Box>

            {/* Separador */}
            <Box sx={{ borderTop: "2px solid #e0e0e0", my: 6 }} />

            {/* CONTACTO */}
            <Box
                id="contacto"
                sx={{
                    padding: { xs: 4, md: 10 },
                    background: "#f5f5f5",
                    textAlign: "center"
                }}
            >
                <Typography variant="h4" sx={{ mb: 4 }}>
                    Contacto
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: { xs: 2, md: 6 },
                        flexDirection: { xs: "column", sm: "row" },
                        alignItems: "center"
                    }}
                >

                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <WhatsAppIcon sx={{ color: "#25D366", fontSize: 30 }} />
                        <Typography>+57 304 345 659</Typography>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <EmailIcon sx={{ color: "#2E7D32", fontSize: 30 }} />
                        <Typography>soporte@speedwagon.com</Typography>
                    </Box>

                </Box>

            </Box>

        </Box>
    );
}