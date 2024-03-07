let result = document.querySelector(".result");
let submitButton = document.querySelector(".submit");
let message = document.querySelector(".result");




submitButton.onclick = function() {
    let oneInput = document.querySelector(".number").value;
let twoInput = document.querySelector(".Two").value;
    // console.log(bob);
    if (oneInput >= 2 && twoInput === "city") {
        message.innerHTML = "you are a dog";
    } else if (oneInput === 1 && twoInput === "city") {
        message.innerHTML = "you are a dog";
    } else if (oneInput >= 3 && twoInput === "town") {
        message.innerHTML = "you are a cat";
    } else if (oneInput >= 4 && twoInput === "forest") {
        message.innerHTML = "you are a bear";
    } else if (oneInput >= 5 && twoInput === "ocean") {
        message.innerHTML = "you are a fish";
    }

    // let usercomment =
    //     document.querySelector("input").value;
    // //console.log(usercomment);
    // result.innerHTML = usercomment;
};