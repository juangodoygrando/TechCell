import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBarApp  from './components/NavBarApp'
import TituloPrincipal from './components/TituloPrincipal'
import BannerCentral from './components/BannerCentral'

function App() {
  

  return (
    <div>
      <NavBarApp/>
      <TituloPrincipal title='Sácale partido a la tecnología con nosotros' titleTwo='Tu nuevo movil esta mas cerca!'/>
      <BannerCentral/>
    </div>
  )
}

export default App
