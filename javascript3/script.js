    "use strict"   
    let myText = document.getElementById('myText');
    let myImage = document.getElementById('myImage');
    let myButton = document.getElementById('myButton');
    let myReset = document.getElementById('myReset');

    myButton.addEventListener('click', function(){
        main();
    })

    myReset.addEventListener('click', function(){
        myText.innerHTML = "..........."
        myImage.src = "https://static6.depositphotos.com/1074442/627/i/600/depositphotos_6276762-stock-photo-reset-button.jpg"
    })

    function main(){
         let dezeTextWordtHet = makeThisSentence();
         myText.innerHTML = dezeTextWordtHet;
         sayItLoud(dezeTextWordtHet); // say something nice say it loud
         selectThisImage(); // show a nice image
    }
    
    
    
    function randomizer(range = 1){ 
        // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
        return Math.floor((Math.random() * range));
    }
    
    
    function makeThisSentence(){
        let index = randomizer(arrayLength);
        let index2 = randomizer(arrayLength);
        let index3 = randomizer(arrayLength);
        let woord1 = onderwerp[index];
        let woord2 = werkwoord[index2];
        let woord3 = restwoord[index3];
        let outputString = woord1 + " " + woord2 + " " + woord3;
        return outputString;
    }
    
    function selectThisImage(){
        let index = randomizer(arrayLength);
        myImage.src = plaatjes[index]; 
    }
    
    function sayItLoud (textString) {
      let message = new SpeechSynthesisUtterance(textString);
      let voices = window.speechSynthesis.getVoices();
      message.voice = voices[3];
      message.pitch = 1.4; // range between 0 and 2
      message.rate = 1; // range between 0.1 (lowest) and 10 (highest) 
      window.speechSynthesis.speak(message);
    }

    
    
    
    const onderwerp = ["he", "Obama", "that"];
    const werkwoord = ["be", "is", "is"];
    const restwoord = ["walking", "vibin", "llama"];
        
    let plaatjes = ["https://i.kym-cdn.com/entries/icons/mobile/000/030/873/Screenshot_20.jpg", "https://i.redd.it/ja660fks69521.jpg", "https://upload.wikimedia.org/wikipedia/commons/b/b9/Llama_lying_down.jpg", "https://www.manners.nl/wp-content/uploads/2020/11/baby-yoda-mandalorian-naam-grogu.jpg"]
    let arrayLength = onderwerp.length;
