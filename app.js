//After loading website
const text = ["My first project using javascript to create tetris", "Fill the row of the tetris game board with incoming blocks as fast as possible in order to destroy as many lines as possible in 2 minutes"];


//Using navbar to change text 

let navBarOptions = document.querySelectorAll(".navbar li");

console.log (navBarOptions);

navBarOptions.forEach(function(navBarOption){
    navBarOption.addEventListener("click", function(e){

        if (e.target.id === "about"){
            document.querySelector("#body").innerHTML = text[0];
        } else if (e.target.id === "description"){
            document.querySelector("#body").innerHTML = text[1];
        } else {
            return false;
        }

    });
});