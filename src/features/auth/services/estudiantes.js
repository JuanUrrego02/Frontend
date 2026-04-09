const API = "https://estudiantes-backend-1.onrender.com";

const getToken = () => localStorage.getItem("token");

// 🔍 GET - listar estudiantes
export const getEstudiantes = async () => {
  const res = await fetch(API, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  if (!res.ok) throw new Error("Error al obtener estudiantes");
  return res.json();
};

// ➕ POST - crear estudiante
export const createEstudiante = async (data) => {
  const res = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json();
    console.log("ERROR BACKEND:", error);
    throw new Error(error.message || "Error al crear estudiante");
  }

  return res.json();
};

// ✏️ PUT - actualizar estudiante
export const updateEstudiante = async (id, data) => {
  const res = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Error al actualizar estudiante");
  return res.json();
};

// 🗑️ DELETE - eliminar estudiante
export const deleteEstudiante = async (id) => {
  const res = await fetch(`${API}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  if (!res.ok) throw new Error("Error al eliminar estudiante");
  return res.json();
};