

function startup() {
   
    const el = document.getElementById('container');
    if (el) {
        el.addEventListener('touchstart', handleTouch);
        console.log('Initialized.');
    }
}
  

  
function handleTouch() {
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
            quote.innerText = json.content;
        }
        if(author){
          author.innerText = json.author;
        }
    })
    .catch((error) => {
      console.error('There has been a problem with your fetch operation:', error);
    });    
}


document.addEventListener('DOMContentLoaded', startup);


