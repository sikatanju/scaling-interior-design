let roomNumber = 1;
let roomNumberPro = 1;
const pricePerRoom = 199;

function signUpBasic() {
    document.getElementById("thankYouRoomNumberBasic").innerText = roomNumber;
    document.getElementById("thankYouNoteBasic").style.display = "block";
}

function addRoomBasic(delta) {
    roomNumber = Math.max(1, roomNumber + delta);
    document.getElementById("roomNumberBasic").innerText = roomNumber;
    let current_price = parseInt(
        document.getElementById("priceBasic").innerText
    );
    document.getElementById("priceBasic").innerText = current_price + 99;
}

function minusRoomBasic(delta) {
    roomNumber = Math.max(1, roomNumber + delta);
    document.getElementById("roomNumberBasic").innerText = roomNumber;
    let current_price = parseInt(
        document.getElementById("priceBasic").innerText
    );
    if (current_price !== 199)
        document.getElementById("priceBasic").innerText = current_price - 99;
}

function signUpPro() {
    document.getElementById("thankYouRoomNumberPro").innerText = roomNumberPro;
    document.getElementById("thankYouNotePro").style.display = "block";
}

function addRoomPro(delta) {
    roomNumberPro = Math.max(1, roomNumberPro + delta);
    document.getElementById("roomNumberPro").innerText = roomNumberPro;
    let current_price = parseInt(document.getElementById("pricePro").innerText);
    document.getElementById("pricePro").innerText = current_price + 99;
}

function minusRoomPro(delta) {
    roomNumberPro = Math.max(1, roomNumberPro + delta);
    document.getElementById("roomNumberPro").innerText = roomNumberPro;
    let current_price = parseInt(document.getElementById("pricePro").innerText);
    if (current_price !== 199)
        document.getElementById("pricePro").innerText = current_price - 99;
}
