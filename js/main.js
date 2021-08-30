var btnGenera = document.getElementById("get_Ticket");
var checkOut = Number ;

btnGenera.addEventListener("click",
    function() {
        //raccolgo l'input di "userName" e lo scrivo nell'html
        var userName = document.getElementById("user_Name").value;
        document.getElementById("your_Name").innerHTML = userName;

        //raccolgo l'input di "distance" e di "promo"
        var distance = parseInt(document.getElementById("distance").value);
        var discount = document.getElementById("promo").value;

        //calcolo il prezzo del biglietto secondo i valori raccolti
        checkOut = (0.21 * distance).toFixed(2) ;
        if (discount == "minorenne") {
            checkOut = (checkOut * 0.8).toFixed(2);
        } else if (discount ==  "over") {
            checkOut = (checkOut * 0.6).toFixed(2);
        }
    }
);


