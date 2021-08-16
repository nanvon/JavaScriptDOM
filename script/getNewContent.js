function getNewContent() {
  var request=new XMLHttpRequest();
  if(request){
      request.open("GET","example.txt",true);
      request.onreadystatechange=function(){
          if(request.readyState==4){
              var para=document.createElement("p");
              var txt=document.createTextNode(request.responseText);
              para.append(txt);
              document.getElementById("new").appendChild(para);
          }
      };
      request.send(null);
  }else{
      alert("Sorry,your browser does not support XMLHttpRequest");
  }
}
addLoadEvent(getNewContent);
