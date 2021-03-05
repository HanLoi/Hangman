

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
        return Math.floor(Math.random()*10)
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

        let bool = true;
        spanTable.forEach(element => {
            if (element.innerHTML == "_"){
                bool = false
            }
        });
        if (bool){
            document.getElementById("endgame").innerHTML = " ACCES AUTHORIZE !"
        }
        if ( a == 0){
            document.getElementById("endgame").innerHTML=" ACCES DENIED !"
            bout.style.display = "none";
        }
    }
    //function récupérer un mot aléatoire
    function restartWord() {

        randomNum= randomWord()
        secretWord = listWord[randomNum]["word"];
        secretWordSplit = secretWord.split("");
        display.innerHTML = "";     
        span()
    }
    //function crée span underscore    
    function span() { 

        for (let i=0; i <secretWordSplit.length; i++) {
            let score = document.createElement('span');
            score.innerHTML="_";
            score.style.fontSize='50px'                  
            display.appendChild(score);}
    }
    //variable
    let randomNum= randomWord();
    let secretWord = listWord[randomNum]["word"];
    let secretWordSplit = secretWord.split("");
    let live = 7;
    let displayLetter = [];
    let display = document.getElementById('displayWord');
    let bout = document.querySelector(".alphabet");   
    let boutons = bout.querySelectorAll("button");
    //affichage
    document.getElementById("displayLetter").innerHTML = "You have already tape : "+ displayLetter;
    document.getElementById("count").innerHTML="ATTEMPT(S) LEFT :  "+ live;
    //création des première spans
    span()
    //acquérir l'input de lettre
    let table = document.getElementById("displayWord");
    let spanTable = table.querySelectorAll("span");

    boutons.forEach(btn =>
        btn.addEventListener(
            "click", () => {

                let b = btn.innerHTML;
                let h = b.toLowerCase();
                if (secretWordSplit.includes(h) == true){
                    changeTiret(h)
                }else {
                    live -= 1
                    displayLetter.push(h)
                    changeTiret(h)
                }

                document.getElementById("count").innerHTML="ATTEMPT(S) LEFT :  "+ live;
                document.getElementById("displayLetter").innerHTML = "You have already tape : "+ displayLetter;
                stateGame(live);
         })
    );
    //évènement affichage indice
    document.getElementById("clue").addEventListener("click", () => {
        document.getElementById("displayClue").innerHTML=" : " + listWord[randomNum]["clue"]
    })

    //évènement boutton restart
    document.getElementById("restart").addEventListener("click", () => {
        restartWord();
        live = 7;
        document.getElementById("count").innerHTML="ATTEMPT(S) LEFT :  "+ live;
        bout.style.display = "";
        document.getElementById("endgame").innerHTML = "ENTER THE PASSWORD !";
        document.getElementById("displayClue").innerHTML=" :  ***********************************";
        displayLetter=[];
        document.getElementById("displayLetter").innerHTML = "You have already tape : "+ displayLetter;
    })



