(function () {

  Drupal.behaviors.modalBehaviour = {
 
    attach: (context, settings) => {
      once('remove-modals', 'html').forEach(function () {        
                 
        // Get the modal
        let modal = document.getElementsByClassName("myModal")[0];
        // Get the button that opens the modal
        let btn = document.getElementsByClassName("myBtn")[0];
        // Get the <span> element that closes the modal
        let span = document.getElementsByClassName("close")[0];
  
        // Get modal body paragraph
        let header = document.querySelectorAll('.modal-header h2')[0];
        // Get modal body paragraph
        let body = document.querySelectorAll('.modal-body')[0];
        // Get modal body paragraph
        let footer = document.querySelectorAll('.modal-footer h3')[0];
  
        let emailParag = document.createElement("p");
        emailParag.innerHTML = 'E-mail: ' + settings.modalData.email;
        body.appendChild(emailParag);

        let phonesParag = document.createElement("p");
        phonesParag.innerHTML = 'Phone numbers: ' + settings.modalData.phoneNums.join(', ');
        body.appendChild(phonesParag);
  
        header.innerHTML = settings.modalData.title;
        footer.innerHTML = settings.modalData.address;
        
        // When the user clicks on <span> (x), close the modal
        btn.addEventListener("click", () => {
          modal.style.display = "block";
        });
        
        // When the user clicks anywhere outside of the modal, close it
        span.addEventListener("click", () => {
          modal.style.display = "none";
        });
  
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }
      })
      
    },

  };

})();
