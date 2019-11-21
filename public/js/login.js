const click = document.getElementById('click');
let mood;
click.onclick = function(){
    const username = document.getElementById('userEmail').value;
    const password = document.getElementById('Userpassword').value;
    console.log(username, password);
axios({
    method : "POST",
    url : "http://172.26.0.131:80/check_login",
    data : {
        "username": username,
        "password": password
    }
})
.then((data) => {
    alert(`${id}님 환영합니다!`);
    mood = true;
    location.href='Stage.html';
})
.catch((error) => {
    alert(`오류!`);
})}

