const url = "https://bank-papua-staging.codingstudio.id/api/";


document.getElementById("loginForm").addEventListener('submit', async function(event){
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let formData = {
        email : email,
        password : password,
    };

    try{
        let response = await fetch( url + 'login',{
            method : "POST",
            headers : {
                "Content-type" : "application/json"
            },
            body : JSON.stringify(formData)
        });
        
        let result = await response.json();

        if(result.sukses === 1){
            localStorage.setItem('id_token',result.user.token);
            alert("Berhasil membuat akun !");
            window.location.href = "./dashboard.html";
        }else{
            let errorMessange = result.pesan;
            document.getElementById('loginForm').reset();
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