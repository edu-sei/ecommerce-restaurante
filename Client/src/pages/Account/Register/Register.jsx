import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import styles from "./Register.module.css";
import api from "api/api";

function Register() {
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    console.log('Submitting form:', form);
    
    try {
      const response = await api.post('/users/user', form);
      console.log('Registration successful:', response.data);
      // Redirigir al login con mensaje de éxito
      navigate('/login', { state: { message: 'Usuario registrado exitosamente. Ahora puedes iniciar sesión.' } });
    } catch (error) {
      if (error.response?.status === 400) {
        setError('Datos inválidos. Verifica los campos.');
      } else if (error.response?.data?.message?.includes('email')) {
        setError('El email ya está registrado.');
      } else {
        setError('Error del servidor. Intenta nuevamente.');
      }
    }
  };

  return (
    <div className={styles.container}>
      <h2>Register</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        {error && <div className={styles.error}>{error}</div>}
        <input name="name" placeholder="Nombre" onChange={handleChange} required />
        <input name="lastname" placeholder="Apellido" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Correo electrónico" onChange={handleChange} required />
        <div className={styles.passwordContainer}>
          <input 
            name="password" 
            type={showPassword ? "text" : "password"} 
            placeholder="Contraseña" 
            onChange={handleChange} 
            required 
          />
          <button
            type="button"
            className={styles.eyeButton}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        <button type="submit">Crear cuenta</button>
        <p>
          ¿Ya tienes una cuenta? <a href="login">Inicia sesión</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
