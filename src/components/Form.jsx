import { useState } from 'react';
import './Form.module.css';
import Card from './Card';

const Form = () => {
    const [nombre, setNombre] = useState('');
    const [comidaFavorita, setComidaFavorita] = useState('');
    const [errors, setErrors] = useState({ nombre: '', comidaFavorita: '' });
    const [showCard, setShowCard] = useState(false);

    const handleNombreChange = (e) => {
        const value = e.target.value;
        setNombre(value);

    if (value.length <= 2) {
        setErrors((prevErrors) => ({
        ...prevErrors,
        nombre: 'El nombre debe tener un mínimo de 3 caracteres',
    }));
    } else if (value.startsWith(' ')) {
        setErrors((prevErrors) => ({
        ...prevErrors,
        nombre: 'El nombre no debe tener espacios en blanco',
        }));
    } else {
        setErrors((prevErrors) => (
            { ...prevErrors,
                nombre: '' 
            }
        ));
    }
    };

    const handleComidaFavoritaChange = (e) => {
    const value = e.target.value;
    setComidaFavorita(value);

    if (value.length < 6) {
        setErrors((prevErrors) => ({
        ...prevErrors,
        comidaFavorita: 'La comida favorita debe tener al menos 6 caracteres.',
        }));
    } else {
        setErrors((prevErrors) => ({ ...prevErrors, comidaFavorita: '' }));
    }
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    if (!errors.nombre && !errors.comidaFavorita && nombre && comidaFavorita) {
        setShowCard(true);
    } else {
        alert('Por favor chequea que la información sea correcta');
        setShowCard(false);
    }
    };

    return (
    <div>
        <form className="formWrapper" onSubmit={handleSubmit}>
        <div className="formContainer">
            <div className="formGroup">
            <label htmlFor="nombre">Nombre:</label>
            <input
                type="text"
                id="nombre"
                value={nombre}
                onChange={handleNombreChange}
            />
            {errors.nombre && <p>{errors.nombre}</p>}
            </div>
            <div className="formGroup">
            <label htmlFor="comidaFavorita">Comida Favorita:</label>
            <input
                type="text"
                id="comidaFavorita"
                value={comidaFavorita}
                onChange={handleComidaFavoritaChange}
            />
            {errors.comidaFavorita && (
                <p>{errors.comidaFavorita}</p>
            )}
            </div>
        </div>
        <button type="submit" className="submitButton">
            Enviar
        </button>
        </form>

      {/* Renderizar el componente Card si las validaciones son exitosas */}
        {showCard && <Card nombre={nombre} comidaFavorita={comidaFavorita} />}
    </div>
    );
};

export default Form;