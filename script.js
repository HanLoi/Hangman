

    const listWord = [
        {word :"procesor", clue:"a machine that processes something"},
        {word :"display", clue:"put (something) in a prominent place in order that it may readily be seen."},
        {word :"mouse", clue:"a small handheld device which is moved across a mat or flat surface to move the cursor on a computer screen."},
        {word :"keybord", clue:"a panel of keys that operate a computer or typewriter."},
        {word :"ram", clue:"a form of computer memory that can be read and changed in any order, typically used to store working data and machine code."},
        {word :"linux", clue:"a family of open-source Unix-like operating systems"},
        {word :"html", clue:"standard markup language for documents designed to be displayed in a web browser."},
        {word :"motherboard", clue:"a printed circuit board containing the principal components of a computer or other device"},
        {word :"foreach", clue:"method executes a provided function once for each array element."},
        {word :"figure", clue:"represents self-contained content, potentially with an optional caption"},
    ];



    //random word

    function randomWord () {

        let a = Math.floor(Math.random()*10)

        return a

    }

    //changement des tirets les lettres du secretWord

    function changeTiret(letter) {
    
        let indices = [];
        let idx = secretWordSplit.indexOf(letter); // = l'index de la lettre se situant dans le mot
    
        while (idx != -1) { //-1 = si il ne trouve pas de valeur correspondante
            indices.push(idx);
            idx = secretWordSplit.indexOf(letter, idx +1);
        }
        spanTable = document.getElementById("displayWord").querySelectorAll("span")

        indices.forEach(indice => {
            spanTable[secretWordSplit.indexOf(letter, indice)].innerHTML = letter;
    
        });
    }
    // function état du jeu
    function stateGame(a) {

        let bool = true
        
        spanTable.forEach(element => {
            if (element.innerHTML == " _ "){
                bool = false
            }
        })
        console.log(bool)
        if (bool){
            document.getElementById("endgame").innerHTML = " YOU WIN !!"
        }
        if ( a == 0){
            document.getElementById("endgame").innerHTML="TOO BAD ! YOU LOOSE !"
            bout.style.display = "none";

    }}



    //variable
    let randomNum= randomWord()

    let secretWord = listWord[randomNum]["word"];

    let secretWordSplit = secretWord.split("");

    let live = 7;


    document.getElementById("count").innerHTML="You still have "+ live + " live.";

    let display = document.getElementById('displayWord');

    console.log("test")
    console.log(secretWordSplit.length)
            
    for (let i=0; i <secretWordSplit.length; i++) {
        var score = document.createElement('span');
        score.innerHTML=" _ ";
        score.style.fontSize='50px'
            
        display.appendChild(score);}

    


    
    //tiret html

    function restartWord() {
    
    randomNum= randomWord()

    secretWord = listWord[randomNum]["word"];

    secretWordSplit = secretWord.split("");
    
    display.innerHTML = "";

    console.log("test")
            
    for (let i=0; i <secretWordSplit.length; i++) {
        score = document.createElement('span');
        score.innerHTML=" _ ";
        score.style.fontSize='50px'
            
        display.appendChild(score);}

    }

    
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

                    document.getElementById("count").innerHTML="You still have "+ live + " live.";
                    
                    stateGame(live)
                   
                }));





     document.getElementById("clue").addEventListener("click", () => {

            document.getElementById("displayclue").innerHTML=listWord[randomNum]["clue"]
     })

     document.getElementById("restart").addEventListener("click", () => {

       restartWord()
       live = 7
       document.getElementById("count").innerHTML="You still have "+ live + " live.";
       bout.style.display = "";
       document.getElementById("endgame").innerHTML = "KEEP GOING ! FIND THE WORD !"


     })



