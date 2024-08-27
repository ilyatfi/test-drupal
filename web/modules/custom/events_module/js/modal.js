(function (Drupal) {

  Drupal.behaviors.modalBehaviour = {
 
    attach: (context, settings) => {

      // Get the modal
      let modal = document.getElementsByClassName("myModal")[0];

      // Get the button that opens the modal
      let btn = document.getElementsByClassName("myBtn")[0];

      // Get the <span> element that closes the modal
      let span = document.getElementsByClassName("close")[0];

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
    },
  };

})(Drupal);
