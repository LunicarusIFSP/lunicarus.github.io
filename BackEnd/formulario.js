function formulario(){
    var client = {
        client_name : "Anonymous",
        client_tel : 000000,
        client_email : "usermail@hotmail.com"
    };
    client.client_name = document.getElementById("name").value;
    client.client_tel = document.getElementById("tel").value;
    client.client_email = document.getElementById("email").value;
    document.getElementById("confirmation").innerHTML = "Confirmation: hello '" + client.client_name + "' an email was sent to the adress: '" + client.client_email + "' and an WhatsApp BOT will also contact you at: " + client.client_tel;
}
