import { Box, Container, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #1B5E20, #2E7D32)",
        color: "white",
        mt: 10,
        pt: 6,
        pb: 3
      }}
    >
      <Container maxWidth="lg">

        {/* GRID */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
            gap: 4,
            textAlign: { xs: "center", md: "left" }
          }}
        >

          {/* Logo / descripción */}
          <Box>
            <Typography variant="h5" fontWeight="bold">
              SpeedWagon
            </Typography>

            <Typography sx={{ mt: 1, opacity: 0.8 }}>
              Controla tus gastos diarios de forma inteligente,
              rápida y desde cualquier lugar.
            </Typography>
          </Box>

          {/* Navegación */}
          <Box>
            <Typography variant="h6" fontWeight="bold" mb={1}>
              Navegación
            </Typography>

            <Link href="#inicio" color="inherit" underline="none" display="block" sx={{ "&:hover": { color: "#A5D6A7" } }}>
              Inicio
            </Link>

            <Link href="#funciones" color="inherit" underline="none" display="block" sx={{ "&:hover": { color: "#A5D6A7" } }}>
              Funciones
            </Link>

            <Link href="#planes" color="inherit" underline="none" display="block" sx={{ "&:hover": { color: "#A5D6A7" } }}>
              Planes
            </Link>

            <Link href="#contacto" color="inherit" underline="none" display="block" sx={{ "&:hover": { color: "#A5D6A7" } }}>
              Contacto
            </Link>
          </Box>

          {/* Redes */}
          <Box>
            <Typography variant="h6" fontWeight="bold" mb={1}>
              Síguenos
            </Typography>

            <Box>
              <IconButton sx={{ color: "white", "&:hover": { color: "#A5D6A7" } }}>
                <FacebookIcon />
              </IconButton>

              <IconButton sx={{ color: "white", "&:hover": { color: "#A5D6A7" } }}>
                <InstagramIcon />
              </IconButton>

              <IconButton sx={{ color: "white", "&:hover": { color: "#A5D6A7" } }}>
                <GitHubIcon />
              </IconButton>
            </Box>

            <Typography sx={{ mt: 1, opacity: 0.8 }}>
              soporte@speedwagon.com
            </Typography>
          </Box>

        </Box>

        {/* Línea */}
        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.2)",
            mt: 5,
            pt: 2,
            textAlign: "center"
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            © {new Date().getFullYear()} SpeedWagon — Todos los derechos reservados
          </Typography>
        </Box>

      </Container>
    </Box>
  );
};

export default Footer;