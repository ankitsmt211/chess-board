// moves black-pawn-one
const pawnElement = document.querySelector("#pawn-one") //contains img element

pawnElement.addEventListener("click", e=>{ //event on img element

    const newParent = pawnElement.parentElement.parentElement.nextElementSibling //row->next-row

let targetRank = newParent.children  //all files of new rank
let nextRank = newParent.nextElementSibling.children

    for(let i=0;i<targetRank.length-1;i++){
        if(targetRank[i].matches(".a-file")){
            if(targetRank[i].children[0]==null){
                targetRank[i].appendChild(pawnElement)
            }
            
        }
    }
})
