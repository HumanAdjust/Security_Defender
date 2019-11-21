const axios = require('axios');
let img = document.getElementById('Ship_comes_korea');

setInterval(function(){
    axios.get('172.26.0.131:80/ship').then(function (response)
    {
        $("#Time_comes_Korea").val(`위험 ${Date()} 에 어떤 배가 영토에 불법으로 들어갔습니다.`);
        img.src = response.shipImage

    })
},100)

let k = 'asdlkfjsadklfjlk';
 window.onload = function()
 {
    axios.get('172.26.0.131:80/login').then(function(data)
    {
        $('#GPS_Ship').val(`${data.UserID}님 안녕하세요!`)
    }
    )
    
 }