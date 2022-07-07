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
    var OfferIDcopy = document.createElement("BUTTON");
    OfferIDcopy.innerHTML = "Copy OfferID";
    OfferIDcopy.addEventListener("click", copyText)

    OfferIDcopy.setAttribute("style","vertical-align: top; width: 90px; height: 40px; padding: 0; border-radius:2em; font-size: 14px; color: white; text-align: center; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25); background: #2ecc71; border: 0; border-bottom: 2px solid #28be68; cursor: pointer; -webkit-box-shadow: inset 0 -2px #28be68; box-shadow: inset 0 -2px #28be68;")
    var element = document.getElementById("imageBlock");
    element.prepend(OfferIDcopy)
}
