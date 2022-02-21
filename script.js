

function copy() {
    /* Get the text field */
    var copyText = document.getElementById("pass-el-1");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
}

function generator() {

    // Defining Variable
    let dictionary = ["A", "B", "C", "D", "E", "1", "2", "3", "4", "5", "+", "$", "!", "a", "b", "c", "d", "e"]
    let pass_length = 15

    // -------Getting the Value-------->>
    var Value = document.getElementById("input").value
    console.log(Value)

    if (Value) {
        pass_length = Value
    }

    // Defining Elements

    let passOne_El = document.getElementById("pass-el-1")
    let passTwo_El = document.getElementById("pass-el-2")
    let passThree_El = document.getElementById("pass-el-3")
    let passFour_El = document.getElementById("pass-el-4")


    // Empty Strings to pass strings from Dictionary one by one to
    let passwordOne = ""
    let passwordTwo = ""
    let passwordThree = ""
    let passwordFour = ""

    // Loop to Generat random numbers for Passwords
    for (let i = 0; i < pass_length; i++) {

        // Randon Numbers from Dictionary
        let num1 = dictionary[Math.floor(Math.random() * dictionary.length)]
        let num2 = dictionary[Math.floor(Math.random() * dictionary.length)]
        let num3 = dictionary[Math.floor(Math.random() * dictionary.length)]
        let num4 = dictionary[Math.floor(Math.random() * dictionary.length)]

        // Adding Numbers one by one to a single String
        passwordOne += num1
        passwordTwo += num2
        passwordThree += num3
        passwordFour += num4


    }

    // console.log(passOne_El)
    // console.log(passTwo_El)
    // console.log(passThree_El)
    // console.log(passFour_El)

    passOne_El.textContent = passwordOne
    passTwo_El.textContent = passwordTwo
    passThree_El.textContent = passwordThree
    passFour_El.textContent = passwordFour

    // console.log(passOne_El)
    // console.log(passTwo_El)
    // console.log(passThree_El)
    // console.log(passFour_El)



    // console.log(passwordOne)
    // console.log(passwordTwo)
    // console.log(passwordThree)
    // console.log(passwordFour)
}

