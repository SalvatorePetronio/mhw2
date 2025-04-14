function createImage(src) {
    
    const image = document.createElement('img');
    image.src = src;
    image.dataset.message = 'immagine creata'
    return image;
  }
  function riempi(num){
    
    const principale = document.querySelector('#main');
    let element;
    for(let i = 0; i<=num;i++){
       element = createImage(i%12);
        principale.appendChild(element);
       
    }

    console.log(principale.dataset.message);
}
  
  function onThumbnailClick(event) {
    const image = createImage(event.currentTarget.src);
    modalView.appendChild(image);
    modalView.classList.remove('hidden');
  }
  
  function onModalClick() {
    modalView.classList.add('hidden');
    modalView.innerHTML = '';
  }
  
  // Main
  
  const albumView = document.querySelector('#vista_album');
  for (let i = 0; i < ALBUM.length; i++) {
    const photoSrc = ALBUM[i];
    const image = createImage(photoSrc);
    image.addEventListener('click', onThumbnailClick);
    albumView.appendChild(image);
  }
  
  const modalView = document.querySelector('#modal-view');
  modalView.addEventListener('click', onModalClick);
  