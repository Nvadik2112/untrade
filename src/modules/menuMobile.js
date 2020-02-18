const menuMobile = () => {
    const mobileBarItem = document.querySelectorAll('.mobile__trade-item'),
        arrow = document.querySelectorAll('.mobile__trade-arrow'),
        imageArrow = document.querySelectorAll('.mobile__trade-arrow img');       
    
    arrow.forEach((elem, i) => {
        elem.addEventListener('click', () => {
            if (mobileBarItem[i].style.display === 'none') {
                mobileBarItem[i].style.display = "block"
                imageArrow[i].setAttribute('src', 'image/hide.svg')
            } else if (mobileBarItem[i].style.display === "block") {
                mobileBarItem[i].style.display = "none"
                imageArrow[i].setAttribute('src', 'image/show.svg')
            }

        });
    })
}
export default menuMobile;

// menuBarItem.forEach((elem, i) => {
