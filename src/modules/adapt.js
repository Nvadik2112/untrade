const adapt = () => {      
    
        const main = document.querySelector('.main'),
            mobile = document.querySelector('.mobile');
    
        const wth = window.onresize = () => { 
            let width = document.documentElement.clientWidth;
            return width;
            
        };                   
        const scroll =  document.onscroll = () => {
            let width = wth();                                                          
            if (width < 1200){
                mobile.style.display = 'flex';
                main.style.display = 'none';
            }
            else {
                main.style.display = 'flex';
                mobile.style.display = 'none';
            }
        };
        scroll();                  
}
export default adapt;


