//XMLHttpRequest

//creating a new instance of XMLHttpRequest Object
var exRequest = new XMLHttpRequest();

//onreadystatechange property specifies a function to be executed when status of exRequest changes
exRequest.onreadystatechange = () => {
  //when readystate is 4(means response is ready) and the server return status 200(OK)
  if (exRequest.readyState == 4 && exRequest.status == 200) {
    //using the JSON.parse to make data workable and writing the response to the console
    console.log(JSON.parse(exRequest.responseText));
  }
};

//properties of http request; get request, url and async=true
exRequest.open("GET", "https://jsonplaceholder.typicode.com/users", true);

//sending the GET request
exRequest.send();

//SECOND WAY USING FETCH
//sending get request,changing content type to json and writing it to the console

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((json) => console.log(json));
