document.addEventListener("DOMContentLoaded", ()=>{

    let outer = document.getElementById("outer");
    let chance = false;
    let arr = Array(9).fill(undefined);
    outer.addEventListener("click", (e)=>{

        let cell = e.target;
        let cellnum = cell.getAttribute("data-cell");
        if(cell.getAttribute("data-clicked")) return ;
        cell.setAttribute("data-clicked", "true");
        if(chance ==true){
            cell.textContent = "X";
            arr[cellnum] = "X";
            winningcombo("X");
        }else{ 
            cell.textContent = "O";
            arr[cellnum] = "O";
            winningcombo("O");
        }
        chance = !chance;

    });

    function winningcombo(char){

        let result = document.getElementById("result");
        // row
        if(arr[0] == char && arr[1] == char && arr[2] == char ){
            result.textContent = `${char} wins`;
            return;
        }
        else if(arr[3] == char && arr[4] == char && arr[5] == char ){
            result.textContent = `${char} wins`;
            return;
        }
        else if(arr[6] == char && arr[7] == char && arr[8] == char ){
            result.textContent = `${char} wins`;
            return;
        }
        // column

        else if(arr[0] == char && arr[3] == char && arr[6] == char ){
            result.textContent = `${char} wins`;
            return;
        }
         else if(arr[1] == char && arr[4]== char && arr[7] == char ){
            result.textContent = `${char} wins`;
            return;
        }

         else if(arr[2] == char && arr[5]== char && arr[8] == char ){
            result.textContent = `${char} wins`;
            return;
        }

        // digonal
         else if(arr[0] == char && arr[4] == char && arr[8] == char ){
            result.textContent = `${char} wins`;
            return;
        }

         else if(arr[2] == char && arr[4] == char && arr[6] == char ){
            result.textContent = `${char} wins`;
            return;
        }
    }

});