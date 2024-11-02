import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBarApp  from './components/NavBarApp'
import ItemListConteiner from './components/ItemListConteiner'
import BannerCentral from './components/CarruselInicio'

function App() {
  

  return (
    <div>
      <NavBarApp/>
      <ItemListConteiner greeting='Sácale partido a la tecnología con nosotros' titleTwo='Tu nuevo movil esta mas cerca!'/>
      <BannerCentral/>
    </div>
  )
}

export default App
