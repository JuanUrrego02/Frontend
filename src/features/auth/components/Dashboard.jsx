import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TextField,
} from "@mui/material";

import {
  getEstudiantes,
  deleteEstudiante,
  updateEstudiante,
  createEstudiante,
} from "../services/estudiantes";

export default function Dashboard() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    matricula: "",
    nombre_completo: "",
    genero: "",
    fecha_nacimiento: "",
  });

  const [newForm, setNewForm] = useState({
    matricula: "",
    nombre_completo: "",
    genero: "",
    fecha_nacimiento: "",
    password: "",
  });

  // 🔍 GET
  const fetchData = async () => {
    try {
      const res = await getEstudiantes();
      setData(res.items || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 🗑️ DELETE
  const handleDelete = async (id) => {
    try {
      await deleteEstudiante(id);
      setData((prev) => prev.filter((e) => e._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  // ✏️ EDIT
  const handleEdit = (item) => {
    setEditId(item._id);
    setForm({ ...item });
  };

  // 💾 UPDATE
  const handleUpdate = async () => {
    try {
      const payload = {
        matricula: form.matricula,
        nombre_completo: form.nombre_completo,
        genero: form.genero,
        fecha_nacimiento: form.fecha_nacimiento,
      };

      await updateEstudiante(editId, payload);
      setEditId(null);
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  // ➕ CREATE
  const handleCreate = async () => {
    try {
      console.log("DATOS QUE SE ENVÍAN:", newForm);

      await createEstudiante(newForm);

      setNewForm({
        matricula: "",
        nombre_completo: "",
        genero: "",
        fecha_nacimiento: "",
        password: "",
      });

      fetchData();
    } catch (err) {
      console.error("Error al crear:", err);
    }
  };

  // 🚪 LOGOUT
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Box p={{ xs: 2, md: 4 }} mt={10}>
      <Box
        display="flex"
        justifyContent="space-between"
        mb={3}
        flexDirection={{ xs: "column", sm: "row" }}
        gap={2}
      >
        <Typography variant="h4">Dashboard</Typography>

        <Button variant="contained" color="error" onClick={logout}>
          Cerrar sesión
        </Button>
      </Box>

      {/* ➕ FORM CREAR */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="h6">Crear estudiante</Typography>

        <Box display="flex" gap={2} mt={2} flexWrap="wrap">
          <TextField
            label="Matrícula"
            value={newForm.matricula}
            onChange={(e) =>
              setNewForm({ ...newForm, matricula: e.target.value })
            }
          />

          <TextField
            label="Nombre"
            value={newForm.nombre_completo}
            onChange={(e) =>
              setNewForm({ ...newForm, nombre_completo: e.target.value })
            }
          />

          <TextField
            label="Género"
            value={newForm.genero}
            onChange={(e) =>
              setNewForm({ ...newForm, genero: e.target.value })
            }
          />

          <TextField
            label="Fecha nacimiento"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={newForm.fecha_nacimiento}
            onChange={(e) =>
              setNewForm({
                ...newForm,
                fecha_nacimiento: e.target.value,
              })
            }
          />

          <TextField
            label="Password"
            type="password"
            value={newForm.password}
            onChange={(e) =>
              setNewForm({ ...newForm, password: e.target.value })
            }
          />

          <Button variant="contained" onClick={handleCreate}>
            Crear
          </Button>
        </Box>
      </Paper>

      {/* 📄 TABLA */}
      <Paper>
        <Box sx={{ overflowX: "auto" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Matrícula</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Género</TableCell>
                <TableCell>Fecha nacimiento</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {data.map((item) => (
                <TableRow key={item._id}>
                  <TableCell>
                    {editId === item._id ? (
                      <TextField
                        value={form.matricula}
                        onChange={(e) =>
                          setForm({ ...form, matricula: e.target.value })
                        }
                      />
                    ) : (
                      item.matricula
                    )}
                  </TableCell>

                  <TableCell>
                    {editId === item._id ? (
                      <TextField
                        value={form.nombre_completo}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            nombre_completo: e.target.value,
                          })
                        }
                      />
                    ) : (
                      item.nombre_completo
                    )}
                  </TableCell>

                  <TableCell>
                    {editId === item._id ? (
                      <TextField
                        value={form.genero}
                        onChange={(e) =>
                          setForm({ ...form, genero: e.target.value })
                        }
                      />
                    ) : (
                      item.genero
                    )}
                  </TableCell>

                  <TableCell>
                    {editId === item._id ? (
                      <TextField
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={form.fecha_nacimiento?.slice(0, 10)}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            fecha_nacimiento: e.target.value,
                          })
                        }
                      />
                    ) : (
                      item.fecha_nacimiento?.slice(0, 10)
                    )}
                  </TableCell>

                  <TableCell>
                    {editId === item._id ? (
                      <Button
                        variant="contained"
                        color="success"
                        onClick={handleUpdate}
                      >
                        Guardar
                      </Button>
                    ) : (
                      <Button
                        variant="outlined"
                        onClick={() => handleEdit(item)}
                      >
                        Editar
                      </Button>
                    )}

                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDelete(item._id)}
                      sx={{ ml: 1 }}
                    >
                      Eliminar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Paper>
    </Box>
  );
}