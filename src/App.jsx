import './App.css'
import Navbar  from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  

  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting='Bienbenidos al E-comerse' />
    </div>
  )
}

export default App
