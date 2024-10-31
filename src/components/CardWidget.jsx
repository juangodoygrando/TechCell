const CardWidget=({counter})=>{
    /* console.log(props) */
    return(
        <div className="cartWidgetContainer">
            <img src='./shopping-cart_7835563.png' alt="cart" className="cartIcon"/>
            <p className="cartCounter">{counter}</p>
        </div>
    )
}

export default CardWidget