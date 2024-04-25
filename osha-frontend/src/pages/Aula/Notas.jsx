import React from 'react';

function Notas() {
  return (
    <div className="px-10 py-10 w-full h-full">
      <h3 className="text-primary">Leyes</h3>
      <LawsComponent />
    </div>
  )
}

class LawsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      laws: [] // Inicializamos el estado con un array vacío para almacenar las leyes
    };
  }

  componentDidMount() {
    // En el ciclo de vida componentDidMount, cargaremos los datos desde el archivo JSON
    fetch('/src/utils/lawsData.json') // Hacemos una solicitud HTTP para obtener los datos del archivo JSON
      .then(response => response.json()) // Parseamos la respuesta como JSON
      .then(data => this.setState({ laws: data })) // Actualizamos el estado con los datos obtenidos
      .catch(error => console.error('Error fetching laws data:', error)); // Manejamos errores de la solicitud
  }

  render() {
    return (
      <div className='pt-5'>
        <h1 className='text-sm text-azulOscuro'>Leyes de los Abogados</h1>
        <br />
        <ul className='flex flex-col gap-3'>
          {this.state.laws.map(law => (
            <li key={law.id} className='bg-white rounded-lg shadow-lg p-5'>
              <h2 className='text-lg'>{law.title}</h2>
              <p className='text-grisOscuro'>{law.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Notas