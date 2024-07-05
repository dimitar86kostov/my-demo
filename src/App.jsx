import './App.css'
import TripList from './assets/TripList';

function App() {
  const trips = [
    'Val Thorens',
    'Les Orres',
    'Vars',
    'Tignes'
  ];

  return (
    <TripList destinations={trips} title={'Check this out:'} />
  )
}

export default App
