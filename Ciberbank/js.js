let jin = document.getElementById("in");
let jout = document.getElementById("out");

jin.addEventListener('keydown', function(e){
  if( e.key.match(/[0-9]/) ) return e.preventDefault();
});

jin.addEventListener('input', function(e){
 
  jin.value = jin.value.replace(/[0-9]/g, "");
});
