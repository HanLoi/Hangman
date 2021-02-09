

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

    let a = Math.floor(Math.random()*10)
  
    var guessWord =listWord[a]["word"]

    var gWlenght= guessWord.split("").length

    console.log(guessWord)
    console.log(gWlenght)

    // -------------------------------------
    //acquérir l'input de lettre
    let typeword =[];

    let bout = document.querySelector(".alphabet")

    let boutons = bout.querySelectorAll("button")

   
    boutons.forEach(btn =>
        btn.addEventListener(
            "click", () => {
                let b = btn.innerHTML
                typeword.push(b)
        
            }))
    
    console.log(typeword)

    //-------------------------------------------------------
    //affichage mot caché
    function displayWord(c) {
        let display = document.getElementById('displayWord');
        
        for (let i=0; i < c; i++) {
        var score = document.createElement('span');
        score.innerHTML="_";
        score.style.fontSize='50px'

        display.appendChild(score);}
    }

    displayWord(gWlenght)

    //-------------------------------------------------
    //live

    /*let live = gWlenght

    if (live == 0){
        document.getElementById("endgame").innerHTML="GAME OVER"
    }*/

 


    //--------------------------------------------------------
    //afficher l'indice

    document.getElementById("clue").addEventListener("click", () => {

        document.getElementById("displayclue").innerHTML=listWord[a]["clue"]

     })
    
    //--------------------------------------
   // restart
   
   document.getElementById("restart").addEventListener("click", () => { 
        
         a = Math.floor(Math.random()*10)
        

     //live = 0
   })

