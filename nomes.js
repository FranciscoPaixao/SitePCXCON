
  // Setup
  var play_interval;

  // Get a random name
  function getNomeAleatorio() {

    let url = 'https://thingproxy.freeboard.io/fetch/https://gerador-nomes.herokuapp.com/nome/aleatorio';

    fetch(url)
    .then(res => res.json())
    .then((out) => {
      // Refresh Display
      refreshDisplay(out[0], out[1], out[2])
    })
    .catch(err => { throw err });
  }

  // Refresh Display
  function refreshDisplay(nome, apelido1, apelido2) {
    document.getElementById("nome1").textContent = nome
    document.getElementById("apelido1").textContent = apelido1
    document.getElementById("apelido2").textContent = apelido2
  }


  // Start Play
  function play() {
    play_interval = setInterval(getNomeAleatorio, 3000);
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
    enableControls();

  })();