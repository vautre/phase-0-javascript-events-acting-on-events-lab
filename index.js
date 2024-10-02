document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
      moveDodgerLeft();
    }
  });
  
  function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 10}px`;
    }
  }

  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10);
  
    // Assuming the game container's width is 400px and dodger's width is 40px
    // Adjust these values based on your actual game container and dodger dimensions
    const containerWidth = 400;
    const dodgerWidth = 40;
  
    if (left + dodgerWidth < containerWidth) {
      dodger.style.left = `${left + 10}px`;
    }
  }