import './Formulario.css';
import React, { useState } from "react";


const Formulario = () => {
  const [inputValue, setInputValue] = useState("");
  const [lista, setLista] = useState([]);

    const añadirTarea = () => {
    if (inputValue !== "") {
      setLista([...lista, inputValue]);
      setInputValue("");
    }
  };

  const eliminarTarea = (index) => {
    setLista(lista.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-4">
      <div className="mb-3">
        <label htmlFor="nombreInput" className="form-label">
          Haz tu lista debajo
        </label>

        <ul className="list-group mb-3">          
          <li className="list-group-item">
            <input
              type="text"
              className="form-control"
              id="nombreInput"
               placeholder ={ lista.length === 0
      ? "No hay tareas, añadir tareas"
      : "Ingrese una nueva tarea"
  }
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  añadirTarea();
                }
              }}
            />
          </li>

          {lista.map((tarea, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {tarea}
              <i
                className="fa-solid fa-trash text-secondary"
                onClick={() => eliminarTarea(index)}
              ></i>
            </li>
          ))}
        </ul>
        
        <button
          type="button"
          className="btn btn-success"
          onClick={añadirTarea}
        >
          Añadir Tarea
        </button>
      </div>
    </div>
  );
};

export default Formulario;

