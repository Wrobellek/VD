const alternatives = [
    {text:"", images:"images/cat-01.gif"},
    {text:"Te prometo que será inolvidable", images:"images/cat-02.gif"},
    {text:"Piénsalo de nuevo", images:"images/cat-03.gif"},
    {text:"Vamos, atrévete a un sí", images:"images/cat-04.gif"},
    {text:"Que el miedo no te detenga", images:"images/cat-05.gif"},
  ]
  const ohyes = {text:"Hihi wygrałaś super kolację! Kocham Cię 💛😘🙌🏻", images:"images/cat-yes.gif"}
  const cat = document.querySelector('.cat')
  const text = document.querySelector('.text')
  const buttons = document.querySelectorAll('.button')
  const errorButton = document.querySelector('.button__error')
  const negativeButton = document.getElementById('negativeButton');
  const yesButton = document.getElementById('yesButton');
  
  function runAway() {
    // Ustawiamy losową pozycję dla przycisku
    const newX = Math.random() * (window.innerWidth - negativeButton.offsetWidth);
    const newY = Math.random() * (window.innerHeight - negativeButton.offsetHeight);
    negativeButton.style.left = newX + 'px';
    negativeButton.style.top = newY + 'px';
  }

  // Dodajemy nasłuchiwanie na zdarzenie najechania myszką
negativeButton.addEventListener('mouseenter', () => {
    runAway(); // Uruchamiamy animację ucieczki
  });
  
  // Blokujemy możliwość kliknięcia na przycisk
  negativeButton.addEventListener('click', (event) => {
    event.preventDefault();
  });
  let count = 0;
  
  function updateDisplay(item){
    cat.src = item.images
    text.innerHTML = item.text
  }
  
  errorButton.addEventListener('click', ()=>{
    count = 0;
    updateDisplay(alternatives[count])
    buttons.forEach(btn => btn.style.display = 'inline-block')
    errorButton.style.display = 'none'
  })
  

    yesButton.addEventListener('click', ()=>{
        if(yesButton.textContent == "Niee to znaczy tak!"){
            updateDisplay(ohyes)
            buttons.forEach(btn => btn.style.display = 'none')
        }
    })
