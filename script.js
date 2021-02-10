

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

    //changement des tirets les lettres du secretWord

    function changeTiret(letter) {
    
        let indices = [];
        let idx = secretWordSplit.indexOf(letter); // = l'index de la lettre se situant dans le mot
    
        while (idx != -1) { //-1 = si il ne trouve pas de valeur correspondante
            indices.push(idx);
            idx = secretWordSplit.indexOf(letter, idx +1);
        }
    
        indices.forEach(indice => {
            spanTable[secretWordSplit.indexOf(letter, indice)].innerHTML = letter;
    
        });
    }
    // function état du jeu
    function stateGame() {

        
        
        let bool = true
        
        spanTable.forEach(element => {
            if (spanTable.innerHTML == " _ "){
                bool = false
                console.log(bool)
            }else {
                console.log("test")
    
            }
        })
        if (bool == true){
            console.log("win")
        }
        if ( live == 0){
            console.log("game Over")


        
    }}



    //variable
    let secretWord = randomword();

    let secretWordSplit = secretWord.split("");

    let gWlenght= secretWord.split("").length;

    let live = 7;

    
    //tiret html
    
    let display = document.getElementById('displayWord');
            
    for (let i=0; i < gWlenght; i++) {
        var score = document.createElement('span');
        score.innerHTML=" _ ";
        score.style.fontSize='50px'
            
        display.appendChild(score);}

    

    
    //acquérir l'input de lettre

   

    let bout = document.querySelector(".alphabet");
        
    let boutons = bout.querySelectorAll("button");
    
    let table = document.getElementById("displayWord");

    let spanTable = table.querySelectorAll("span");

        boutons.forEach(btn =>
            btn.addEventListener(
                "click", () => {
                    let b = btn.innerHTML
                    let h = b.toLowerCase()

                    if (secretWordSplit.includes(h) == true){
                        changeTiret(h)
                    }else {
                        live -= 1
                    }
                    console.log(secretWordSplit.includes(h));
                    console.log(live)
                    stateGame()
                   
                }));






    console.log(live);
    console.log(secretWord);
    console.log(secretWordSplit);
    console.log(gWlenght);

    // -----------------------------------




   /* var idx = guessWord.indexOf(typeword)
    console.log (idx)*/

    
    //---------------------------------------------------



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

