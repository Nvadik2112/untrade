const burgerMenu = () => {
    const menu = document.querySelector('.popup-menu');       
    document.addEventListener('click', () => {
        let target = event.target;
        if (target.closest('.menu-button img')){
            menu.style.display = "flex";
        }
        else if(target.closest('.close-menu-btn') || target.closest('.scroll')){
            menu.style.display = "none";
        };    
    });        
};
export default burgerMenu;  