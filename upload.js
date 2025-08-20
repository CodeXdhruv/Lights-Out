// File upload handling
document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('paymentScreenshot');
    const selectedFile = document.querySelector('.selected-file');
    const previewImage = document.querySelector('.preview-image');

    fileInput.addEventListener('change', function(e) {
        if (this.files && this.files[0]) {
            const file = this.files[0];
            
            // Update file name display
            selectedFile.textContent = file.name;
            
            // Show image preview
            const reader = new FileReader();
            reader.onload = function(e) {
                previewImage.style.backgroundImage = `url(${e.target.result})`;
                previewImage.classList.add('has-image');
            };
            reader.readAsDataURL(file);

            // Validate file size
            const maxSize = 5 * 1024 * 1024; // 5MB
            if (file.size > maxSize) {
                alert('File is too large. Please select an image under 5MB.');
                this.value = '';
                resetFileUpload();
                return;
            }

            // Validate file type
            const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
            if (!validTypes.includes(file.type)) {
                alert('Please select a valid image file (JPEG, PNG).');
                this.value = '';
                resetFileUpload();
                return;
            }
        } else {
            resetFileUpload();
        }
    });

    function resetFileUpload() {
        selectedFile.textContent = 'No file chosen';
        previewImage.style.backgroundImage = 'none';
        previewImage.classList.remove('has-image');
    }
});
