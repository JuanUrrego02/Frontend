import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "/img/SPW.png";
import { Link } from "react-router-dom";

export default function Header() {
    const [anchorEl, setAnchorEl] = useState(null);

    document.body.style.margin = "0";

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar
            position="fixed"
            sx={{
                background: "#2E7D32",
                width: "100%",
                left: 0,
                top: 0
            }}
        >
            <Toolbar sx={{ paddingLeft: "16px", paddingRight: "16px" }}>

                <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1, gap: 1 }}>

                    <img
                        src={logo}
                        alt="logo"
                        style={{
                            height: "40px",
                            width: "40px",
                            objectFit: "contain"
                        }}
                    />

                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        SpeedWagon
                    </Typography>

                </Box>

                {/* Menú de escritorio - visible en md y superior */}
                <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
                    <Button color="inherit" href="/#inicio">
                        Inicio
                    </Button>

                    <Button color="inherit" href="#funciones">Funciones</Button>
                    <Button color="inherit" href="#planes">Planes</Button>
                    <Button color="inherit" href="#contacto">Contacto</Button>
                    <Button color="inherit" component={Link} to="/api">
                        API
                    </Button>
                </Box>

                {/* Botones de acción - responsive */}
                <Button component={Link} to="/registro"
                    variant="contained"
                    sx={{
                        ml: { xs: 1, md: 4 },
                        background: "#66BB6A",
                        color: "black",
                        fontSize: { xs: "0.75rem", md: "1rem" }
                    }}
                >
                    Empezar
                </Button>

                <Button
                    variant="outlined"
                    component={Link}
                    to="/login"
                    sx={{
                        ml: 1,
                        borderColor: "#66BB6A",
                        color: "#66BB6A",
                        display: { xs: "none", sm: "inline-flex" }
                    }}
                >
                    Iniciar Sesión
                </Button>

                {/* Menú hamburguesa - visible en xs y sm */}
                <IconButton
                    color="inherit"
                    onClick={handleMenuOpen}
                    sx={{ display: { xs: "flex", md: "none" }, ml: 1 }}
                >
                    <MenuIcon />
                </IconButton>

                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                >
                    <MenuItem component="a" href="/#inicio" onClick={handleMenuClose}>
                        Inicio
                    </MenuItem>
                    <MenuItem component="a" href="#funciones" onClick={handleMenuClose}>
                        Funciones
                    </MenuItem>
                    <MenuItem component="a" href="#planes" onClick={handleMenuClose}>
                        Planes
                    </MenuItem>
                    <MenuItem component="a" href="#contacto" onClick={handleMenuClose}>
                        Contacto
                    </MenuItem>
                    <MenuItem component={Link} to="/api" onClick={handleMenuClose}>
                        API
                    </MenuItem>
                    <MenuItem component={Link} to="/login" onClick={handleMenuClose}>
                        Iniciar Sesión
                    </MenuItem>
                </Menu>

            </Toolbar>
        </AppBar>
    );
}