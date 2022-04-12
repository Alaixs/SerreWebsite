document.getElementById("button").addEventListener("click",function(){
  Toastify({
    text: "I'm a toast",
    duration: 3000,
    destination: 'https://github.com/apvarun/toastify-js',
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    positionLeft: true, // `true` or `false`
    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)"
  }).showToast();
});