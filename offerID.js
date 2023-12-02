let data = document.getElementById("offerListingID")

let offerID = data.value



function copyText(){
    var input = document.getElementById("twister-js-initializer_feature_div").appendChild(document.createElement("input"));
    input.value = offerID;
    input.select();
    document.execCommand("copy");
    input.parentNode.removeChild(input);
}

document.body.onload = addElement;

function addElement(){
    var targetDiv = document.getElementById('buyNow_feature_div');
    
    var OfferIDcopy = document.createElement("button");
    OfferIDcopy.innerHTML = "Copy OfferID";
    OfferIDcopy.addEventListener("click", copyText)
    OfferIDcopy.classList.add("a-button-text");
    OfferIDcopy.classList.add("button-copy");

    targetDiv.insertAdjacentElement('afterend', OfferIDcopy);
}
