const commandPhoto = () => {
  let command = document.getElementById('command');
  command.addEventListener('mouseover', (event) => {
    let target = event.target;
    target.dataset.src = target.src;
    target.src = target.dataset.img;
  });
  command.addEventListener('mouseout', (event) => {
    let target = event.target;
    target.src =  target.dataset.src;
  });
};      
export default commandPhoto;