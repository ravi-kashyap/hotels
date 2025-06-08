// Gallery configuration
const GALLERY_CONFIG = {
  folders: {
    'cave canvas': 19,
    'cliff canvas': 20,
    'glass canvas': 23,
    'retro glass house': 19
  },
  imageExtension: '.avif',
  initialPreviewCount: 8
};

// Function to create image path
function createImagePath(folder, index) {
  return `images/${folder}/${index}${GALLERY_CONFIG.imageExtension}`;
}

// Function to create gallery item
function createGalleryItem(imagePath, folderName) {
  const item = document.createElement('div');
  item.className = 'gallery-item';
  item.setAttribute('data-category', folderName.toLowerCase().replace(' ', '-'));

  const img = document.createElement('img');
  img.src = imagePath;
  img.alt = folderName;

  const overlay = document.createElement('div');
  overlay.className = 'gallery-item-overlay';
  const title = document.createElement('h3');
  title.textContent = folderName;
  overlay.appendChild(title);

  item.appendChild(img);
  item.appendChild(overlay);
  return item;
}

// Function to create button
function createButton(text, isViewMore = true) {
  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'gallery-button-container';
  buttonContainer.style.textAlign = 'center';
  buttonContainer.style.margin = '40px 0';

  const button = document.createElement('button');
  button.className = isViewMore ? 'view-more-btn' : 'view-less-btn';
  button.textContent = text;
  button.style.padding = '12px 30px';
  button.style.fontSize = '16px';
  button.style.backgroundColor = isViewMore ? '#4CAF50' : '#f44336';
  button.style.color = 'white';
  button.style.border = 'none';
  button.style.borderRadius = '5px';
  button.style.cursor = 'pointer';
  button.style.transition = 'background-color 0.3s ease';

  button.addEventListener('mouseover', () => {
    button.style.backgroundColor = isViewMore ? '#45a049' : '#da190b';
  });

  button.addEventListener('mouseout', () => {
    button.style.backgroundColor = isViewMore ? '#4CAF50' : '#f44336';
  });

  buttonContainer.appendChild(button);
  return buttonContainer;
}

// Function to load gallery images
function loadGalleryImages() {
  const galleryGrid = document.querySelector('.gallery-grid');
  galleryGrid.innerHTML = '';

  const allGalleryItems = [];
  let currentIndex = 0;
  let totalImagesToCheck = 0;
  let totalImagesChecked = 0;

  Object.entries(GALLERY_CONFIG.folders).forEach(([folder, count]) => {
    for (let i = 1; i <= count; i++) {
      const imagePath = createImagePath(folder, i);
      totalImagesToCheck++;

      const img = new Image();
      img.onload = () => {
        const item = createGalleryItem(imagePath, folder);
        allGalleryItems.push(item);

        if (currentIndex < GALLERY_CONFIG.initialPreviewCount) {
          galleryGrid.appendChild(item);
          currentIndex++;
        }

        totalImagesChecked++;
        if (totalImagesChecked === totalImagesToCheck) {
          updateButtonState();
          initializeModal();
        }
      };

      img.onerror = () => {
        console.warn(`Skipping missing image: ${imagePath}`);
        totalImagesChecked++;
        if (totalImagesChecked === totalImagesToCheck) {
          updateButtonState();
          initializeModal();
        }
      };

      img.src = imagePath;
    }
  });

  function showMoreImages() {
    const endIndex = Math.min(currentIndex + GALLERY_CONFIG.initialPreviewCount, allGalleryItems.length);
    for (let i = currentIndex; i < endIndex; i++) {
      galleryGrid.appendChild(allGalleryItems[i]);
    }
    currentIndex = endIndex;
    updateButtonState();
  }

  function showLessImages() {
    galleryGrid.innerHTML = '';
    currentIndex = 0;
    for (let i = 0; i < Math.min(GALLERY_CONFIG.initialPreviewCount, allGalleryItems.length); i++) {
      galleryGrid.appendChild(allGalleryItems[i]);
    }
    currentIndex = Math.min(GALLERY_CONFIG.initialPreviewCount, allGalleryItems.length);
    updateButtonState();
  }

  function updateButtonState() {
    const existingButton = document.querySelector('.gallery-button-container');
    if (existingButton) {
      existingButton.remove();
    }

    if (currentIndex >= allGalleryItems.length && allGalleryItems.length > GALLERY_CONFIG.initialPreviewCount) {
      const showLessContainer = createButton('Show Less', false);
      galleryGrid.parentNode.insertBefore(showLessContainer, galleryGrid.nextSibling);
      const showLessBtn = showLessContainer.querySelector('.view-less-btn');
      showLessBtn.addEventListener('click', () => {
        showLessImages();
        initializeModal();
      });
    } else if (allGalleryItems.length > GALLERY_CONFIG.initialPreviewCount) {
      const viewMoreContainer = createButton('View Full Gallery', true);
      galleryGrid.parentNode.insertBefore(viewMoreContainer, galleryGrid.nextSibling);
      const viewMoreBtn = viewMoreContainer.querySelector('.view-more-btn');
      viewMoreBtn.addEventListener('click', () => {
        showMoreImages();
        initializeModal();
      });
    }
  }
}

// Function to initialize modal functionality
function initializeModal() {
  const modal = document.querySelector('.gallery-modal');
  const modalImg = modal.querySelector('img');
  const closeBtn = modal.querySelector('.gallery-modal-close');
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryItems.forEach(item => {
    item.addEventListener('click', function () {
      const imgSrc = this.querySelector('img').src;
      modalImg.src = imgSrc;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  closeBtn.addEventListener('click', function () {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  });

  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

// Load gallery when DOM is ready
document.addEventListener('DOMContentLoaded', loadGalleryImages);
