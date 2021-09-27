// Only change code below this line
function myMutation(arr) {
    for(var i = 0; i < arr[1].length; i++){
        if (!arr[0].toLowerCase().includes(arr[1][i].toLowerCase())){
            return false;
        }
    }
    return true;
}
// Only change code above this line

console.log(myMutation(["Noel", "Ole"])); // Change this line
module.exports = myMutation;
