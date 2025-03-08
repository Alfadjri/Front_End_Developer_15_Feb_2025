const url = "https://bank-papua-staging.codingstudio.id/api/";


document.getElementById("registerForm").addEventListener('submit', async function(event){
    event.preventDefault();
    let nama = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let telp = document.getElementById("telp").value;
    let password = document.getElementById("password").value;

    let formData = {
        nama : nama,
        email : email,
        telp : telp,
        password : password,
    };

    try{
        let response = await fetch( url + 'register',{
            method : "POST",
            headers : {
                "Content-type" : "application/json"
            },
            body : JSON.stringify(formData)
        });
        
        let result = await response.json();

        if(result.sukses === 1){
            alert("Berhasil membuat akun !");
            window.location.href = "./login.html";
        }else{
            let errorMessange = "";
            for(let row in result.pesan){
                errorMessange += `${result.pesan[row].join(", ")}\n`;
            }
            document.getElementById('modal-message').innerText = errorMessange;
            document.getElementById('modal').style.display = 'flex';
        }

    }catch (error){
        console.error("Error : ", error);
        document.getElementById('modal-message').innerText = "Terjadi kesalahan saat menghubungkan kepada database";
        document.getElementById('modal').style.display = "flex";
    }
});

document.querySelectorAll('#close-modal-icon,#close-modal-btn').forEach(function (el) {
    el.addEventListener("click", function() {
        document.getElementById('modal').style.display = "none";
    });
});