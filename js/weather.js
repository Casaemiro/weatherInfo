//view

const Cart = (city,temp,hum,rainf) => {
    return ( 
        <div class="cart">
        <div class="subt subt1">{city}</div>
        <div class="subt">Temperature{temp}</div>
        <div class="subt">Humidity{hum}</div>
        <div class="subt">Humidity</div>
        <div class="subt">Rainfall{rainf}</div>
      </div>
     );
}
 
export default Cart;