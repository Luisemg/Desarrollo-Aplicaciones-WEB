function getWeatherHttp(){
  var request = new XMLHttpRequest();

  request.onload = function (resp) {
    console.log(resp.target.response);
    console.log(JSON.parse(resp.target.response));
  }

  // request.open('GET', 'https://randomuser.me/api/?results=1', true);
  request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=queretaro,mexico&appid=0a8eec8c47affb1a1988216f81623b7c', true);

  request.send();
}

function getWeatherFetch(){
  var request = new Request('https://api.openweathermap.org/data/2.5/weather?q=queretaro,mexico&appid=0a8eec8c47affb1a1988216f81623b7c',
    {
      method: 'GET'
      // headers: new Headers({'Content-Type': 'application/json'})
    });

  fetch(request)
  .then(function(data) {
    console.log('data');
    console.log(data);
    data.json()
    .then(function(myjson){
      console.log('results = ');
      console.log(myjson);
    });
  })
  .catch(err => {
    console.log(err);
  });
}

function getWeatherJquery(){
  $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=queretaro,mexico&appid=0a8eec8c47affb1a1988216f81623b7c",
    function(json){
      console.log(json);
      $('#resultado').text(JSON.stringify(json));
    }
  );
}
