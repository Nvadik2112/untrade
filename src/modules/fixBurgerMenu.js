const fixBurgerMenu = () => {
    const topMenu = document.querySelector('.top-menu');
    
    const wth = window.onresize = () => { 
        let width = document.documentElement.clientWidth;
        return width;
    };                   
    const scroll =  document.onscroll = () => {
        let width = wth();
        let scrolled = window.pageYOffset;                                               
        if (scrolled > 190 && width < 768){
            topMenu.style.position = 'fixed';
        }
        else topMenu.style.position = 'static';
    };
    scroll();                  
};
export default fixBurgerMenu;                 
                           
          
            
    
    

      
