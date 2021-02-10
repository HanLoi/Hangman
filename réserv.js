

    const listWord = [
        {word :"procesor", clue:"fsdfsd"},
        {word :"display", clue:"sdfsdfsd"},
        {word :"mouse", clue:"fdsfdsf"},
        {word :"keybord", clue:"sdfsdf"},
        {word :"ram", clue:"fdsfdsf"},
        {word :"linux", clue:"sdfsdfs"},
        {word :"html", clue:"dsfsdf"},
        {word :"motherboard", clue:"sdfsdfsd"},
        {word :"foreach", clue:"sdfsdf"},
        {word :"figure", clue:"fsdfdsf"},
    ];



    //random word

    function randomword () {

        let a = Math.floor(Math.random()*10)
  
        var guessWord =listWord[a]["word"]

        return guessWord

    }


    //acquérir l'input de lettre

    function arrayPlayer() {

        let typeword =[];

        let bout = document.querySelector(".alphabet")
        
        let boutons = bout.querySelectorAll("button")
        
            boutons.forEach(btn =>
                btn.addEventListener(
                    "click", () => {
                        let b = btn.innerHTML

                        if (secretWord.includes(b.toLowerCase) == true){
                            typeword.push(b)
                            ;}
                            else {
                               life -= 1
                            }
                
                    }))
        return typeword
    }

    //affichage mot caché
    function displayWord(c) {
        let display = document.getElementById('displayWord');
            
        for (let i=0; i < c; i++) {
            var score = document.createElement('span');
            score.innerHTML=" _ ";
            score.style.fontSize='50px'
            
    
        display.appendChild(score);}
    }

        }

    let wordPlayer = arrayPlayer()
    
    let secretWord = randomword()

    let gWlenght= secretWord.split("").length

    var life = 7
    
    displayWord(gWlenght)
  
    console.log(life);
    console.log(secretWord)
    console.log(gWlenght)
    console.log(wordPlayer)

    // ------------------------------------

   /* var idx = guessWord.indexOf(typeword)
    console.log (idx)*/

    
    //---------------------------------------------------
    //indexoff

    /*typeword.forEach(element, () => {

        if (guessword.indexOf(element) > -1) {
          score.innerHTML= element
        } 
      });*/
    
 


    //--------------------------------------------------------
    //afficher l'indice

    /*document.getElementById("clue").addEventListener("click", () => {

        document.getElementById("displayclue").innerHTML=listWord[a]["clue"]

     })
    
    //--------------------------------------
   // restart
   
   /*document.getElementById("restart").addEventListener("click", () => { 
        
         a = Math.floor(Math.random()*10)
        

     //live = 0
   })*/

