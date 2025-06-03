
// Arrays of images for each layer
    const imageOptions = {
      background: ['green-bg.png', 'peach-bg.png', 'orange-bg.png', 'blue-bg.png'],
      outfit: ['blue-dress.png', 'orange-dress.png', 'green-dress.png', 'peach-dress.png','yellow-dress.png'],
      shoes: ['orange-shoes.png', 'blue-shoes.png', 'peach-shoes.png', 'green-shoes.png', 'yellow-shoes.png']
    };

// Track current index for each layer
    const currentIndex = {
      background: 0,
      outfit: 0,
      shoes: 0
    };

// Event listeners for buttons
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("btn-background").addEventListener("click", function () {
        cycleItem("background");
    });

    document.getElementById("btn-outfit").addEventListener("click", function () {
        cycleItem("outfit");
    });

    document.getElementById("btn-shoes").addEventListener("click", function () {
        cycleItem("shoes");
    });
    });

// Function to cycle through images for a given layer
    function cycleItem(layer) {
// Get next index
      currentIndex[layer] = (currentIndex[layer] + 1) % imageOptions[layer].length;
      const filename = imageOptions[layer][currentIndex[layer]];
// Update image source
      document.querySelector('.' + layer).src = 'assets/images/' + filename;
    }

