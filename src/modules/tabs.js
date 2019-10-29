const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
          tab = tabHeader.querySelectorAll('.service-header-tab'),
          tabContent = document.querySelectorAll('.service-tab');
    const toggleTabContent = (index) => {
        tabContent.forEach((elem, i) =>{
            if (index === i){
                elem.classList.remove('d-none');
            } else {
                elem.classList.add('d-none');
            }
        });
        tab.forEach((elem , i) => {
            if (index === i){
                elem.classList.add('active');
            } else {
                elem.classList.remove('active');
            }
        });
    };     
    tabHeader.addEventListener('click', (event) => {
        let target = event.target; 
        target = target.closest('.service-header-tab');
                
        if (target.classList.contains('service-header-tab')){
            tab.forEach((item, i) => {
                if(item === target ){
                   toggleTabContent(i);
                }
            });         
        }
    });            
};
export default tabs;