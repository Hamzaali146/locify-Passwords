const changeEl = document.getElementById("change-el")
const copyEl = document.getElementById("copy-el")
const passEl =document.getElementById("pass-el")
const smallAlphabet = ["q","w","e","r","t","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]
const largeAlphabet = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"]
const specialChar = ["!","@","#","$","%","^","&","*","(",")","_","-","=","+",":","<",">",",","?","/","[","]","{","}","`","~"]
const passCopy = document.getElementById("pass-copy")


const unsecuredCopyToClipboard = (text) => { const textArea = document.createElement("textarea"); textArea.value=text; document.body.appendChild(textArea); textArea.focus();textArea.select(); try{document.execCommand('copy')}catch(err){console.error('Unable to copy to clipboard',err)}document.body.removeChild(textArea)};

/**
 * Copies the text passed as param to the system clipboard
 * Check if using HTTPS and navigator.clipboard is available
 * Then uses standard clipboard API, otherwise uses fallback
*/
const copyToClipboard = (content) => {
  if (window.isSecureContext && navigator.clipboard) {
    navigator.clipboard.writeText(content);
  } else {
    unsecuredCopyToClipboard(content);
  }
};


changeEl.addEventListener("click",function(){
    // alert("Hello this application is developed by Hamza Ali Khan (HAK)")
    passCopy.innerHTML = ""
    passEl.innerHTML = render()
})
copyEl.addEventListener("click",function(){
    const content = passEl.textContent
    copyToClipboard(content)
    passCopy.innerHTML = "Password Copied to Clipboard!"
})
function randomAlpha(lst){
    let randomIndex = Math.floor(Math.random()*lst.length)
    return lst[randomIndex]
}
function render(){
    let demoStr =""
    for(let i= 0; i<5 ; i++ ){
        demoStr+= randomAlpha(smallAlphabet)
        demoStr+=randomAlpha(largeAlphabet)
        demoStr+=randomAlpha(specialChar)
    }
    return demoStr
}
passEl.innerText = render()
console.log(randomAlpha(largeAlphabet))




