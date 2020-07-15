$("#submit").on("click", function () {

    //Step 1: Get user data
    let k = parseInt($("#numInK").val());
    let num1 = parseInt($("#numIn1").val());
    let num2 = parseInt($("#numIn2").val());
    let num3 = parseInt($("#numIn3").val());
    let num4 = parseInt($("#numIn4").val());
    let num5 = parseInt($("#numIn5").val());

    //Step 2: Create an array and add user data to it
    let array = new Array();
    array.push(num1);
    array.push(num2);
    array.push(num3);
    array.push(num4);
    array.push(num5);

    //Step 3:  Perform algorithm
    let message = "";

    for (let i = 0; i < array.length - 1; i++) {
        //if the number in the array is larger than k, go on to the next
        if (array[i] > k) continue;

        //calculate the difference between k and the next number in the array
        let solution = k - array[i];

        //forward search the array, beginning at the NEXT legitimate index position (index begins at position 0, so all legitimate index positions will be positive numbers.)
        if (array.indexOf(solution, i + 1) > -1) {
            message = `The given set of numbers DOES include a solution for a K value of ${k}.`;
            break;
        } else {
            message = `The given set of numbers does NOT include a solution for a K value of ${k}.`;
        }
    }

    // Step 4: Display result & clear all on click
    $("#clear").on("click", function () {
        $("#numInK").val("");
        $("#numIn1").val("");
        $("#numIn2").val("");
        $("#numIn3").val("");
        $("#numIn4").val("");
        $("#numIn5").val("");
        $("#resultOut").text("");
    })
    $("#resultOut").text(message);
});