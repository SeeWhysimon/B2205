// photos.js

document.addEventListener("DOMContentLoaded", function() {
    const addPhotoBtn = document.getElementById('addPhotoBtn');
    const photoPopup = document.getElementById('photoPopup');
    const closeBtn = document.querySelector('.closeBtn');
    const addBtn = document.getElementById('addBtn');
    const uploadBtn = document.getElementById('uploadBtn');
    const photoPreview = document.getElementById('photoPreview');

    let selectedImage = null;

    // Show the popup when the button is clicked
    addPhotoBtn.addEventListener('click', function() {
        photoPopup.style.display = 'flex';
    });

    // Hide the popup when the close button is clicked
    closeBtn.addEventListener('click', function() {
        photoPopup.style.display = 'none';
    });

    // Hide the popup when clicking outside of the popup content
    window.addEventListener('click', function(event) {
        if (event.target === photoPopup) {
            photoPopup.style.display = 'none';
        }
    });

    // Handle the add button click
    addBtn.addEventListener('click', function() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = function(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    photoPreview.innerHTML = '';
                    photoPreview.appendChild(img);
                    photoPreview.style.display = 'block';
                    selectedImage = img;
                };
                reader.readAsDataURL(file);
            }
        };
        input.click();
    });

    // Handle the upload button click
    uploadBtn.addEventListener('click', function() {
        if (selectedImage) {
            const img = document.createElement('img');
            img.src = selectedImage.src;
            img.style.width = '40px';
            img.style.height = '12px';
            document.body.appendChild(img);
        }
        photoPopup.style.display = 'none';
    });
});

