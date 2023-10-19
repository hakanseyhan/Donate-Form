function submitForm() {
    // Form verilerini al
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const donationAmount = document.querySelector('input[name="donation-amount"]:checked').value;
    const customAmount = document.getElementById("custom-amount").value;
    const cardNumber = document.getElementById("card-number").value;
    const expiryDate = document.getElementById("expiry-date").value;
    const cvv = document.getElementById("cvv").value;
    const cardHolder = document.getElementById("card-holder").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const postalCode = document.getElementById("postal-code").value;
    const country = document.getElementById("country").value;
    const district = document.getElementById("district").value;

    // Burada sunucuya bağış verilerini gönderme kodu yer alacak.

    // Formu temizle
    document.getElementById("donation-form").reset();

}

// Diğer tutar seçeneğini göster/gizle
document.getElementById("amount-other").addEventListener("change", function () {
    if (this.checked) {
        document.getElementById("other-amount").style.display = "block";
    } else {
        document.getElementById("other-amount").style.display = "none";
    }
});

// Error Message
document.getElementById("showTostButton").addEventListener("click", function () {
    var lastname = document.getElementById("last-name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var customamount = document.getElementById("custom-amount").value;
    var amount20 = document.getElementById("amount-20").value;
    var amount50 = document.getElementById("amount-50").value;
    var amount100 = document.getElementById("amount-100").value;
    var cardholder = document.getElementById("card-holder").value;
    var cardnumber = document.getElementById("card-number").value;
    var expirydate = document.getElementById("expiry-date").value;
    var cvv = document.getElementById("cvv").value;
    var errorMessage = document.getElementById("errorMessage");
    var successMessage = document.getElementById("successMessage");

    if (lastname === "" || phone === "" || customamount === "" || cardholder === "" || expirydate === "" || cvv === "" || email === "" || cardnumber === "" || amount20 === "" || amount50 === "" || amount100 === "") {

        errorMessage.style.display = "block";

        setTimeout(function () {
            errorMessage.style.display = "none";

        }, 5000)

    }
    else {
        errorMessage.style.display = "none";
        successMessage.style.display = "block";

        setTimeout(function () {
            successMessage.style.display = "none";
        }, 5000)

    }
    
});