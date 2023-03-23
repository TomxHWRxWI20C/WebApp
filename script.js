
function handleTouch() {

     // fade out old quote
    $( "#quote, #author" ).fadeOut("slow").promise().done(function() {

       // fetch new quote
      fetch('https://api.quotable.io/random')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        return response.json();
      })
      .then((json) => {
        const quote = document.getElementById('quote');
        const author = document.getElementById('author');
        if(quote){
            quote.innerText = '"' + json.content + '"';
        }
        if(author){
          author.innerText = "- " + json.author;
        }
      })
      .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
      }); 
      
      // fade in new quote
      $( "#quote, #author" ).delay(250).fadeIn( "slow", function() {
      });

    });
   
}


document.addEventListener('touchstart', event => {
  handleTouch();
})


