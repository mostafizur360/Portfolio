document.getElementById("downloadButton").addEventListener("click", function() {
    // Start downloading the PDF file
    const link = document.createElement('a');
    link.href = 'Asset/pdf/MD.Mostafizur_Rahman-CV.pdf'; // Replace with the actual path to your PDF
    link.download = 'MD.Mostafizur_Rahman-CV.pdf'; // Replace with the desired file name
    document.body.appendChild(link);
    link.click();
    
    // Remove the link after the download starts
    document.body.removeChild(link);

    // Trigger a function to simulate download completion
    afterDownload();
});



//============================================================================>



    document.addEventListener('DOMContentLoaded', function() {
        const radios = document.querySelectorAll('input[name="slide"]');
        const cards = document.querySelectorAll('.card_1');
    
        // Initially hide all card backgrounds
        cards.forEach(card => {
            card.style.backgroundImage = 'none';
        });
    
        // Function to update images based on selected radio button
        function updateImages() {
            cards.forEach(card => {
                card.style.backgroundImage = 'none'; // Hide all images
            });
    
            const selectedRadio = document.querySelector('input[name="slide"]:checked');
            const imageId = selectedRadio.id;
    
            switch (imageId) {
                case 'c1':
                    document.querySelector(`label[for="c1"]`).style.backgroundImage = "url('Asset/Img/Portfilio/1.png')";
                    break;
                case 'c2':
                    document.querySelector(`label[for="c2"]`).style.backgroundImage = "url('Asset/Img/Portfilio/2.png')";
                    break;
                case 'c3':
                    document.querySelector(`label[for="c3"]`).style.backgroundImage = "url('Asset/Img/Portfilio/3.png')";
                    break;
                case 'c4':
                    document.querySelector(`label[for="c4"]`).style.backgroundImage = "url('Asset/Img/Portfilio/3.png')";
                    break;
            }
        }
    
        // Event listeners for radio buttons
        radios.forEach(radio => {
            radio.addEventListener('change', updateImages);
        });
    
        // Event listener for card clicks
        cards.forEach(card => {
            card.addEventListener('click', function() {
                const associatedRadio = document.querySelector(`input[id="${this.getAttribute('for')}"]`);
                associatedRadio.checked = true; // Check the corresponding radio button
                updateImages(); // Update the images
            });
        });
    
        // Trigger the initial setup
        updateImages();
    });
    




    function toggleTitleVisibility(element) {
        const allTitles = document.querySelectorAll(".porject-title");

        // Loop through all titles
        allTitles.forEach((title) => {
            if (title === element) {
                // Toggle visibility of the clicked title
                if (title.style.display === "none" || title.style.display === "") {
                    title.style.display = "block";
                } else {
                    title.style.display = "none";
                }
            } else {
                // Ensure other titles are always visible
                title.style.display = "block";
            }
        });
    }
//===========================================================>

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var closeBtn = document.querySelector(".close");

// Add event listeners to all "Read more" buttons
var buttons = document.querySelectorAll('.sh_btn');
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Find the closest card and extract the .description text
        var description = this.closest('.card').querySelector('.description').innerText;

        // Display the description in the modal
        document.getElementById('modal-description').innerText = description;

        // Show the modal
        modal.style.display = "block";
    });
});

// Close the modal when the user clicks on <span> (x)
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}