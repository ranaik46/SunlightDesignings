document.addEventListener('DOMContentLoaded', function () {
    const rangeSlider = document.getElementById('rangeSlider');
    const leftImage = document.querySelector('.c-compare__left');
    const rightImage = document.querySelector('.c-compare__right');
  
    function updateImages() {
      const value = rangeSlider.value;
      leftImage.style.clipPath = `polygon(0% 0%, ${value}% 0%, ${value}% 100%, 0% 100%)`;
      rightImage.style.clipPath = `polygon(100% 0%, ${value}% 0%, ${value}% 100%, 100% 100%)`;
    }
  
    rangeSlider.addEventListener('input', updateImages);
    updateImages(); // Initialize the images position
  });
  