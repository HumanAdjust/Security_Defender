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
    .then(response => {
        console.log(response);
        const script = (response.data.split('>')[1]).split('<')[0];
        eval(script);
    })
    .catch((error) => {
        alert(`오류!`);
    }
)}

