<script>
  document.addEventListener('DOMContentLoaded', function() {
    const addPusheenButton = document.querySelector('.fa-parachute-box');
    const pusheenContainer = document.getElementById('pusheenContainer');
    const pusheenImages = [
      'cookie.png', 
      'donut.png', 
      'ice_cream.png', 
      'mcdonalds.png', 
      'noodles.png', 
      'phone.png', 
      'popcorn.png', 
      'regular.png'
    ];
    const pusheenPath = 'assets/images/pusheens/';

    // Check if the button and container elements exist
    if (addPusheenButton && pusheenContainer) {
      // Check if the event listener is already attached
      if (!addPusheenButton.dataset.listenerAttached) {
        addPusheenButton.addEventListener('click', function() {
          // Select a random Pusheen image
          const randomImage = pusheenImages[Math.floor(Math.random() * pusheenImages.length)];
          const pusheenUrl = pusheenPath + randomImage;

          // Create Pusheen image element
          const pusheen = document.createElement('img');
          pusheen.src = pusheenUrl;
          pusheen.classList.add('pusheen');

          // Set initial random positions
          let posX = Math.random() * (window.innerWidth - 100);
          let posY = Math.random() * (window.innerHeight - 100);

          // Set initial random velocities
          let velocityX = (Math.random() - 0.5) * 8; // Adjust speed as needed
          let velocityY = (Math.random() - 0.5) * 8;

          pusheen.style.left = `${posX}px`;
          pusheen.style.top = `${posY}px`;

          // Add Pusheen to the container
          pusheenContainer.appendChild(pusheen);

          function updatePosition() {
            posX += velocityX;
            posY += velocityY;

            // Bounce off the edges
            if (posX <= 0 || posX >= window.innerWidth - 100) {
              velocityX = -velocityX;
            }
            if (posY <= 0 || posY >= window.innerHeight - 100) {
              velocityY = -velocityY;
            }

            pusheen.style.left = `${posX}px`;
            pusheen.style.top = `${posY}px`;

            requestAnimationFrame(updatePosition);
          }

          updatePosition();
        });

        // Mark the event listener as attached
        addPusheenButton.dataset.listenerAttached = 'true';
      }
    }
  });
</script>
