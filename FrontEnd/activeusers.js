var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:3000/",
  "method": "GET",
  "headers": {
    "x-requested-with": "text/html",
    "cache-control": "no-cache",
    "postman-token": "c4e384dc-ed49-380a-0509-8d17b399e44d"
  }
}
var goHere = document.getElementById('sendhere');


$.ajax(settings).done(function (response) {
  for(var i = 0; i<response.dataInfo.length; i++){
    if(response.dataInfo[i].user_data.active === 1){
      var li = document.createElement('li');
      goHere.appendChild(li);
      li.innerHTML = response.dataInfo[i].user_data.first_name + " " + response.dataInfo[i].user_data.last_name;
    }
  }
});
