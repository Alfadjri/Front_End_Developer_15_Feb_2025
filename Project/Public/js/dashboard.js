document.getElementById('logout').addEventListener("click",function(){
    if(confirm("Apakah anda yakin untuk keluar ?")){// confirm atau alert itu modal default
        localStorage.removeItem('id_token');
        alert('logout berhasil di lakukan');
        window.location.href = "./login.html";
    } 
});