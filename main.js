var typed=new Typed (".text",{
    strings:["Frontend Devloper","Web Devloper","Programmer","Coder","Artist"],
    typeSpeed:100,
    backspeed:100,
    backSpace:100,
    backDelay:1000,
    loop:true
});

fetch("https://jsonplaceholder.typicode.com/todos", {
  method: "POST",
  body: JSON.stringify({
    userId: 1,
    title: "Fix my bugs",
    completed: false
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
});
              

