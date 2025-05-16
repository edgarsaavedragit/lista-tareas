import './App.css';
import tareaLogo from './imagenes/tareaLogo.png';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='tarea-logo-contenedor'>
        <img 
          src={tareaLogo} 
          className='tarea-logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mi Lista de Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
