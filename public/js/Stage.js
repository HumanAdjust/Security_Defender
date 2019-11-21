
let img = document.getElementById('Ship_comes_korea');
var mood = 1;
setInterval(function(){
    axios({
        method: 'POST',
        url : 'http://172.26.0.131/ship',
        data:
        {
            "mood" : mood
        }
    }).then(function (response)
    {
        $("#Time_comes_Korea").val(`위험 ${Date()} 에 어떤 배가 영토에 불법으로 들어갔습니다.`);
        console.log(response);
        console.log("data:image/gif;base64,"+ response.data);
        // =response.data
        // img.src ="data:image/gif;base64,"+ response.data
        img.src="data:image/gif;base64,"+ response.data
    }).catch(function (error)
    {
        console.log('error');
    })
},1000)

 window.onload = function()
 {
    axios.get('172.26.0.131:80/check_login').then(function(data)
    {
        $('#GPS_Ship').val(`${data.UserID}님 안녕하세요!`)
    }
    )
    
    axios({
        method: 'POST',
        url : 'http://172.26.0.131/ship',
        data:
        {
            "mood" : mood
        }
    }).then(function (response)
    {
        $("#Time_comes_Korea").val(`위험 ${Date()} 에 어떤 배가 영토에 불법으로 들어갔습니다.`);
        console.log(response.shipImage);
        img.src = response.shipImage;
        mood = 0;
        time = 10000;


    }).catch(function (error)
    {
   
        console.log('error');
    })
 }