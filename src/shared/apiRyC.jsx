
import React, { useEffect, useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Container,
  Pagination,
  Chip
} from '@mui/material';

const ApiRyc = () => {
  const [characters, setCharacters] = useState([]);
  const [pages, setPages] = useState(1);
  const [info, setInfo] = useState({});
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${pages}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [pages]);

  const filteredCharacters = characters.filter(char =>
    char.name.toLowerCase().includes(search.toLowerCase())
  );

  const handlePageChange = (event, value) => {
    setPages(value);
  };

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f5f5f5", pt: 10, pb: 4 }}>
      <Container maxWidth="lg">

        <Typography variant="h4" align="center" sx={{ mb: 4, fontWeight: "bold" }}>
          Rick and Morty API
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <TextField
            label="Buscar personaje"
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ width: { xs: "100%", sm: 400 } }}
          />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <Pagination
            count={info.pages || 1}
            page={pages}
            onChange={handlePageChange}
            color="primary"
            size="large"
          />
        </Box>

        <Grid container spacing={3}>
          {filteredCharacters.map((char) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={char.id}>
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardMedia
                  component="img"
                  height="250"
                  image={char.image}
                  alt={char.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="div" sx={{ fontWeight: "bold", mb: 1 }}>
                    {char.name}
                  </Typography>

                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Chip
                      size="small"
                      label={`${char.status} - ${char.species}`}
                      sx={{
                        backgroundColor:
                          char.status === 'Alive' ? '#4caf50' :
                          char.status === 'Dead' ? '#f44336' : '#9e9e9e',
                        color: 'white'
                      }}
                    />
                  </Box>

                  <Typography variant="body2" color="text.secondary">
                    Last known location:
                  </Typography>
                  <Typography variant="body1">
                    {char.location.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
};

export default ApiRyc;

