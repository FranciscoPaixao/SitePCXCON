
  // Setup
  var play_interval;

  // Get a random name
  function getNomeAleatorio() {

    let url = 'https://site-tap.herokuapp.com/url.php?url=https://gerador-nomes.herokuapp.com/nome/aleatorio';

    fetch(url)
    .then(res => res.json())
    .then((out) => {
      // Refresh Display
      refreshDisplay(out[0])
    })
    .catch(err => { throw err });
  }
  
  /*
  function getNomeAleatorio() {
  fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://gerador-nomes.herokuapp.com/nome/aleatorio')}`)
                    .then(response => {
                      if (response.ok) return response.json()
                      throw new Error('Network response was not ok.')
                    })
                    .then(data => {refreshDisplay(JSON.parse(data.contents)[0]); console.log(JSON.parse(data.contents)[0])});
  }
*/
  // Refresh Display
  function refreshDisplay(nome) {
    document.getElementById("nome1").textContent = nome
  }


  // Start Play
  function play() {
    play_interval = setInterval(getNomeAleatorio, 30000);
  }

  // Pause Play
  function pause() {
    clearTimeout(play_interval);
  }

  // Enable controls
  getNomeAleatorio();
  play();

  // On Page load
  (function() {

    getNomeAleatorio();
    play();
  })();