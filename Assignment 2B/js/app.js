function calCost() {
    let unit = 11.99;
    var discount;
    let num = parseInt(document.getElementById("q2box").value);
    if (num >= 5 && num <= 9) {
        discount = 0.1;
    }
    if (num >= 10 && num <= 29) {
        discount = 0.25;
    }
    if (num >= 30 && num <= 49) {
        discount = 0.4;
    }
    if (num >= 50) {
        discount = 0.5;
    }
    let rawPrice = (unit * num).toFixed(2);
    let discountPrice = (rawPrice * discount).toFixed(2);
    let totalPrice = (rawPrice - discountPrice).toFixed(2);

    document.getElementById("q2totalCost").textContent = "Total cost without discount: $" + rawPrice + "\t(" + num + " * " + unit + ")";
    document.getElementById("q2discount").textContent = "Discount of " + discount * 100 + ": $" + discountPrice + "\t(" + rawPrice + " * " + discount + ")";
    document.getElementById("q2finalCost").textContent = "Total cost: $" + totalPrice + "\t(" + rawPrice + " - " + discountPrice + ")";

}

function calNumber() {
    let first = parseInt(document.getElementById("q3first").value);
    let second = parseInt(document.getElementById("q3second").value);
    var result = "";

    for(let i=first;i<=second;i++){
        if(i%3===0){
            result +=i+",";
        }
    }

    document.getElementById("q3result").textContent = result.substring(0,result.length-1);

}

function calRoom() {
    let vcRoom = parseInt(document.getElementById("q4vcRoom").value);
    let ocRoom = parseInt(document.getElementById("q4ocRoom").value);
    let rsRoom = parseInt(document.getElementById("q4rsRoom").value);

    let totalRoom = vcRoom + ocRoom + rsRoom;
    let pVcRoom = (vcRoom / totalRoom).toFixed(3);
    let pOcRoom = (ocRoom / totalRoom).toFixed(3);
    let pRsRoom = (rsRoom / totalRoom).toFixed(3);

    document.getElementById("q4totalroom").textContent = "Total number of rooms: " + totalRoom + "(" + vcRoom + "+" + ocRoom + "+" + rsRoom + ")";
    document.getElementById("q4vacantroom").textContent = "The percentage of vacant rooms: " + pVcRoom * 100 + "%(" + vcRoom + "/" + totalRoom + "=" + pVcRoom + ")";
    document.getElementById("q4occupiedroom").textContent = "The percentage of occupied rooms: " + pOcRoom * 100 + "%(" + ocRoom + "/" + totalRoom + "=" + pOcRoom + ")";
    document.getElementById("q4reservedroom").textContent = "The percentage of reserved rooms: " + pRsRoom * 100 + "%(" + rsRoom + "/" + totalRoom + "=" + pRsRoom + ")";
}