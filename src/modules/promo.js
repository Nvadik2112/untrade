const promo = () =>{
    const priceMessage = document.querySelector('.price-message.input-text input'),
          cards = document.getElementById('cards'),
          priceTotal = document.getElementById('price-total'),
          price = document.querySelector('.price'),
          sendPrice = price.querySelector('input[name="price"]');
                                
    cards.addEventListener('change' , () => {
        let target = event.target;
        if (!target.closest('p.input-text') 
        && !target.closest('input[type="checkbox"]')) {              
            if (priceMessage.value === "ТЕЛО2019"){
                priceTotal.textContent = Math.round(priceTotal.textContent*0.7);
                sendPrice.setAttribute('value', priceTotal.textContent);
            }          
        }        
    });        
     
};
export default promo;