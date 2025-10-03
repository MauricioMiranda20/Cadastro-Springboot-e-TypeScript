// Coloca esse código na: postCadastro.ts
import axios from "axios";
import { API_URL } from "../utils/constante";

export async function createPost(data: {
  id: string;
  name: string;
  sobrenome: string;
  email: string;
  cep: string;
  phone: string;
}) {
  try {
    const res = await axios.post(`${API_URL}/api/user`, data);
    return res.data; 
  } catch (error) {
    console.error("Erro ao criar post:", error);
    throw error;
  }
}