const lyricsElt = document.getElementById("lyrics")
const displayBtn = document.querySelector("#display")
const deleteBtn = document.querySelector("#delete")
const listElt = document.getElementById("lists")

let inputElts = [];
displayBtn.addEventListener("click", () =>{

let inputValue = lyricsElt.value
inputElts.push(inputValue)
lyricsElt.value = "";
listElt.innerHTML = "";

inputElts.forEach((value, index, arr1) =>{
  let listItem = document.createElement("li")
  listItem.textContent = value
  listElt.appendChild(listItem)
});

})

deleteBtn.addEventListener("click",() =>{
    inputElts = []
    listElt.innerHTML = ""

})
