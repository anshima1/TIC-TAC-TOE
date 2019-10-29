console.log("Connection established");

/*function mycode(){
  var l={a11:'#a11',b22:'#b22',c33:'#c33'}

  return l[key];
}*/
var a11=document.querySelector('#a11');
a11.addEventListener('click',function(){
  a11.textContent="X";
});
a11.addEventListener('dblclick',function(){
  a11.textContent="O"
});

var a12=document.querySelector('#a12');
a12.addEventListener('click',function(){
  a12.textContent="X";
});
a12.addEventListener('dblclick',function(){
  a12.textContent="O"
});

var a13=document.querySelector('#a13')
a13.addEventListener('click',function(){
  a13.textContent="X";
});
a13.addEventListener('dblclick',function(){
  a13.textContent="O"
});

var head1=document.querySelector('h2');
head1.addEventListener('click',function(){
  head1.style.color='red';
});

var b21=document.querySelector('#b21');
b21.addEventListener('click',function(){
  b21.textContent="X";
});
b21.addEventListener('dblclick',function(){
  b21.textContent="O"
});

var b22=document.querySelector('#b22');
b22.addEventListener('click',function(){
  b22.textContent="X";
});
b22.addEventListener('dblclick',function(){
  b22.textContent="O"
});

var b23=document.querySelector('#b23')
b23.addEventListener('click',function(){
  b23.textContent="X";
})
b23.addEventListener('dblclick',function(){
  b23.textContent="O"
});

var c31=document.querySelector('#c31');
c31.addEventListener('click',function(){
  c31.textContent="X";
});
c31.addEventListener('dblclick',function(){
  c31.textContent="O"
});

var c32=document.querySelector('#c32');
c32.addEventListener('click',function(){
  c32.textContent="X";
});
c32.addEventListener('dblclick',function(){
  c32.textContent="O"
});

var c33=document.querySelector('#c33')
c33.addEventListener('click',function(){
  c33.textContent="X";
});
c33.addEventListener('dblclick',function(){
  c33.textContent="O"
});

var btn=document.querySelector('#Refreshbtn');
btn.addEventListener('mouseover',function(){
  btn.color='red';
})
btn.addEventListener('click',function(){
  a11.textContent="";
  a12.textContent="";
  a13.textContent="";
  b21.textContent="";
  b22.textContent="";
  b23.textContent="";
  c31.textContent="";
  c32.textContent="";
  c33.textContent="";
  btn.textContent='Refresh';
});
