console.log("Connection Successfull")

const textarea = document.getElementsByClassName("text")[0];
const TEXT = [`Cryptography is the practice of securing information through the use of mathematical algorithms and keys. It ensures confidentiality, integrity, and authenticity of data by converting it into unreadable ciphertext that can only be deciphered with the appropriate decryption key. Cryptography has been used for centuries, and in the digital age, it plays a vital role in securing communication, financial transactions, and data privacy on the internet. It underpins technologies such as SSL/TLS for secure web browsing and blockchain for secure digital transactions.`, `Love is a complex and multifaceted emotion that transcends cultures and species, characterized by a deep emotional connection, affection, and attachment between individuals. It can take various forms, from romantic love between partners to the love between friends and family, and even the love people have for their pets. Love is a driving force in human relationships, fostering empathy, compassion, and a sense of belonging, while its neurological and psychological underpinnings continue to be a subject of scientific study and artistic inspiration.`,`Blockchain is a distributed ledger technology that enables secure and transparent record-keeping of transactions. It operates on a decentralized network, ensuring that data is stored across multiple nodes, making it resistant to tampering and providing a high degree of trust. It's most well-known for underpinning cryptocurrencies like Bitcoin, but its applications extend to various industries, including supply chain management, finance, and healthcare, where it enhances data integrity and reduces the need for intermediaries.`] 

paragraph = TEXT[Math.floor(Math.random()*TEXT.length)]

array_text = paragraph.split("");

array_text.forEach(element => {
    let span = document.createElement("span");
    let node = document.createTextNode(element);
    
    span.appendChild(node);
    textarea.append(span);
});

let inputBox = document.getElementById("abcd");
let mistake = isTyping = 0;
let maxTime = 60,
    timeLeft = 60,
    timer;
let timeTag = document.getElementsByClassName("time")[0];
// For input input focus
const inpBox = document.getElementById("abcd");
let span = document.querySelectorAll("span");
let charIndex = 0;
let cpmtag = document.getElementById("cpm");
let wpmtag = document.getElementById("wpm");

start.addEventListener("click", function () {
    inpBox.focus();
    if (start.innerText == "Start") {
        start.innerText = "Again";
    } else {
        start.innerText = "Start";
    }
    span[charIndex].classList.add("add");  
});

// For typing 

// To prevent backescape
function preventBackspace(event) {
    var key = event.keyCode || event.which;
    
    if (key === 8) { // 8 is the key code for Backspace
        event.preventDefault();
        return false;
    }

}



let inpTe = ()=>{
    let inputText = inputBox.value;
    let paragraphText = paragraph;

    charIndex++;
    span[charIndex].classList.add("add");
    
    if (!isTyping) {
        const timer = setInterval(initTimer, 1000);
        isTyping = true;
    }
    // for checking correct or not
    if(inputText[charIndex-1] == paragraphText[charIndex-1]){
        span[charIndex-1].classList.remove("add");
        span[charIndex-1].classList.add("correct");
        // console.log("correct");
    }else{
        span[charIndex-1].classList.remove("add");
        span[charIndex-1].classList.add("wrong");
        // console.log("wrong");
        mistake++;
        document.getElementById("mistake").innerText = `${mistake}`;
    }
    cpmtag.innerText = charIndex - mistake;
    let wpm = Math.round((((charIndex - mistake)/5)/(maxTime-timeLeft))*60)
    wpmtag.innerText = wpm;
    wpm = wpm < 0 || !wpm  || wpm === Infinity ? 0:wpm;

    
}

function initTimer() {
    if(timeLeft>0){
        timeLeft--;
        timeTag.innerText = `${timeLeft}s`;
    }else{
        clearInterval(timer);
    }
    if(timeLeft == 0){
        alert(`WPM = ${wpmtag.innerText}\n CPM = ${cpmtag.innerText} \n Mistakes = ${mistake}`);
        location.reload();
        timeLeft = 60;
    }
}

