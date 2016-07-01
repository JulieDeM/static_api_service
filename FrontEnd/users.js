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
var answers = document.getElementById('answers');

$.ajax(settings).done(function (response) {
  for(var i = 0; i<response.dataInfo.length; i++){
    var li = document.createElement('li');
    console.log("*****RESPONSE*******");
    li.innerHTML = response.dataInfo[i].user_data.first_name + " " + response.dataInfo[i].user_data.last_name;
    answers.appendChild(li);
  }
  return;

  console.log(response.dataInfo[0].user_data.first_name + " " + response.dataInfo[0].user_data.last_name);
});
