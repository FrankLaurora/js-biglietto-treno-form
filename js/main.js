var btnGenera = document.getElementById("get_ticket");
var btnAnnulla = document.getElementById("erase");
var checkOut = Number ;

btnGenera.addEventListener("click",
    function() {
        //cambio colore al bordo del bottone
        btnGenera.classList.add("btn_orange_border");

        //raccolgo l'input di "userName"
        var userName = document.getElementById("user_name").value;
        
        //raccolgo l'input di "distance" e di "promo"
        var distance = parseInt(document.getElementById("distance").value);
        var discount = document.getElementById("promo").value;
        
        //calcolo il prezzo del biglietto secondo i valori raccolti
        checkOut = (0.21 * distance).toFixed(2);
        if (discount == "minorenne") {
            checkOut = (checkOut * 0.8).toFixed(2);
        } else if (discount ==  "over") {
            checkOut = (checkOut * 0.6).toFixed(2);
        }
        
        //genero un numero casuale per la carrozza
        var yourSeat = Math.floor(Math.random() * 9) + 1;
        
        //genero il CP
        var yourCP = yourSeat.toString() + (Math.floor(Math.random() * (10000 - 1000)) + 1000);
        
        //compilo l'html con le informazioni generate
        document.getElementById("your_name").innerHTML = userName;

        if (discount == "minorenne") {
            document.getElementById("your_promo").innerHTML = "Young";
        } else if (discount == "over") {
            document.getElementById("your_promo").innerHTML = "Silver";
        } else {
            document.getElementById("your_promo").innerHTML = "Standard";
        }
        
        document.getElementById("your_seat").innerHTML = yourSeat;
        
        document.getElementById("your_CP").innerHTML = yourCP;
        
        document.getElementById("your_check_out"). innerHTML = checkOut + "€";

        document.getElementById("ticket_heading").classList.add("visible");
        document.getElementById("your_ticket").classList.add("visible");
    }
);

btnAnnulla.addEventListener("click",
    function() {
        // cambio colore al bordo del bottone
        btnGenera.classList.remove("btn_orange_border");

        //resetto i campi input
        var userName = document.getElementById("user_name").value = "";
        var distance = document.getElementById("distance").value = "";
        var discount = document.getElementById("promo").value = "";
        
        document.getElementById("ticket_heading").classList.remove("visible");
        document.getElementById("your_ticket").classList.remove("visible");
    }
);