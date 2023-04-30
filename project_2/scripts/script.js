// selecting all needed elements
var popup = document.getElementById("popup");
var username = document.getElementById("username");
var password = document.getElementById("password");
var fInputs = document.getElementsByClassName("f-input");
var pInputs = document.getElementsByClassName("p-input");
var allInputs = document.getElementsByClassName("input");
var nameInputs = document.getElementsByClassName("name-input");
var errors = document.getElementById("errors-box")

// loop through all inputs for focus and blur
for (var i = 0; i < allInputs.length; i++) {

    // the current input in loop
    var currentInput = allInputs[i];

    // if the input is focused
    currentInput.onfocus = function () {

        // if input is focused change its background color to yellow
        this.style.backgroundColor = '#ffffa3';
    }

    currentInput.onblur = function () {

        // if inputs is blurred change its background color to white
        this.style.backgroundColor = '#ffffff';
    }

}


// functions
function nameValidate() {


    for (var i = 0; i < nameInputs.length; i++) {

        // check if the name has a digit
        if (nameInputs[i].value.match(/[0-9]/g) != null) {
            // if the name has a digit display an error
            errors.style.display = 'block';
            errors.innerHTML = '<p class="error">' + 'your name should not contain a digit' + '</p>';
            return true;

        } else {

            // if the name doesn't have an error don't display the error
            errors.style.display = 'none';

        }

    }

    return false;
}

function phoneValidate() {

    var phoneInput = fInputs[2].value;
    if (phoneInput.search(/^9665+\d{8}/) != 0 && phoneInput.length > 0) {

        // if the phone number does not have the right format
        errors.innerHTML = '<p class="error">' + 'phone number should always start with 9665, and only contain digits, and have 12 digits.' + '</p>'
        return true;
    }


    // if the phone has no errors return false
    return false;
}
function emailValidate() {

    if (checkEmpty(fInputs[1], "email")) {
        // if the email is empty => return true

        return true;
    } else {


        if (fInputs[1].value.search(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) != 0) {
            // if the email have the wrong format => return true
            errors.innerHTML = '<p class="error">' + 'your email format is incorrect' + '</p>'
            return true;
        }
    }


    // if the email is valid return false
    return false;
}
function showPopUp() {
    // to display the login popup
    popup.style.display = 'block';
}
function hidePopup() {
    // to hide the login popup when it's closed
    popup.style.display = 'none'
}
function checkEmpty(selector, type) {

    if (selector.value.length == 0) {

        // check if the selector parameter length is = 0, then display an error
        document.getElementById("errors-box").innerHTML += "<p class='error'>" + 'the ' + type + " cannot be empty" + "</p>";

        return true;
    }

    // if there is no error ...
    return false;

}

function checkLength(selector, chars, type) {


    if (selector.value.length < chars) {

        // if the selector param have less than chars param [length], display an error & return true 
        errors.innerHTML += '<p class="error">' + type + ' cannot be less than ' + chars + ' characters' + '</p>';
        return true;
    }

    // if there is no error ...
    return false;
}

function loginValidate() { // if the login form is submitted this function is triggred


    errors.style.display = 'block';
    if (errors.innerHTML.length != 0) {
        // delete the previous error [last submit]
        errors.innerHTML = '';
    }


    // get the returned values of each of the following: true if there is an error
    var isUsernameEmpty = checkEmpty(username, 'username');
    var isPassEmpty = checkEmpty(password, 'password');
    var isUsernameShort = checkLength(username, 4, 'username');
    var isPassShort = checkLength(password, 6, 'password');

    if (isUsernameEmpty || isPassEmpty || isUsernameShort || isPassShort) { // if the username OR password is empty the condition is true

        // if there are errors prevent submitting
        return false;
    }

    // if the input data is valid => allow submitting
    return true;
}

function validateMessage() {

    // if the textarea length is 0
    if (fInputs[5].value.length == 0) {
        // display an error and return true
        errors.innerHTML += '<p class="error">' + 'message cannot be empty' + '</p>'
        return true;
    };

    return false
}

function feedbackValidate() {


    var checkNameDigit = nameValidate();

    errors.style.display = 'block';
    if (errors.innerHTML.length != 0) {
        // delete previous errors message [last submit]
        errors.innerHTML = '';
    }

    // get the returned values of each of the following: true if there is an error
    var checkNameEmpty = checkEmpty(fInputs[0], "name");
    var checkNameLength = checkLength(fInputs[0], 6, "name");
    var checkPhone = phoneValidate();
    var checkEmail = emailValidate();
    var checkSubject = checkEmpty(fInputs[3], "subject of feedback");
    var checkMessage = validateMessage();


    if (checkNameEmpty || checkNameLength || checkNameDigit || checkPhone || checkEmail || checkSubject || checkMessage) {

        // if there are errors prevent submitting
        return false;
    }

    // if the input data is valid => allow submitting

    return true;
}

function purchaseValidate() {


    errors.style.display = 'block';
    if(errors.innerHTML.length != 0) {
        // delete previous errors message [last submit]
        errors.innerHTML = '';
    }




    // get the returned values of each of the following: true if there is an error
    var checkFname = checkEmpty(pInputs[0], "first name");
    var checkLname = checkEmpty(pInputs[1], "last name");
    var checkFnamelength = checkLength(pInputs[0], 6, "first name")
    var checkLnamelength = checkLength(pInputs[1], 6, "last name")
    var checkPhone = phoneValidate();
    var checkEmail = emailValidate();
    var checkCity = checkEmpty(pInputs[4], "city");
    var checkAddress = checkEmpty(pInputs[5], "address");
    var checkZip = checkEmpty(pInputs[6], "zip code")


    if (checkFname || checkLname || checkFnamelength || checkLnamelength || checkPhone || checkEmail || checkCity || checkAddress || checkZip) {
        // if there are errors prevent submitting
        return false;
    }

    // if the input data is valid => allow submitting
    return true;
}
