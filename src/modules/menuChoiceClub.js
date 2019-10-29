const menuChoiceClub = ()=>{
    const menu = document.querySelector('.club-select'),
          clubList = document.querySelector('.clubs-list ul');
    menu.addEventListener('click', () => {
        const toggle = menu.classList.toggle('.club-select');
        if (toggle){
            clubList.style.display = 'block';
        }  
        else {                      
            clubList.style.display = 'none';
        };
    });
};          
export default menuChoiceClub;