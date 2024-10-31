import CardWidget from "./cardWidget"
const Navbar=()=>{
    return(
    <nav className="navConteiner">
        <a>Nombre del E-comerce</a>
        <a className="aLink">Inicio</a>
        <a className="aLink">Productos</a>
        <a className="aLink">Ofertas</a>
        <a className="aLink">Inicio Sesion</a>
        <CardWidget counter={12} saludar={"hola chicos"}/>
    </nav>

    )
}
export default Navbar