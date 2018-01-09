function done(){
  function getlength(number){
    return number.toString().length;
  }
  User=Number(document.getElementsByName('number')[0].value);
  if(User=="")
    alert("Invald Number");
  else{
    $.ajax({
      type: "GET",
      url: 'https://df09069c.ngrok.io',
      data: {
        "id": User,
      },
      success: function(data){
        //console.log(data);
        data=JSON.parse(data);
        data=JSON.parse(data);
        var x=document.getElementById('tableGen');
        x.innerHTML='<tr><th>word</th><th>freq</th></tr>';
        var y=document.getElementById('top');
        y.style.display='none';
        for(var k in data){
          console.log(data[k]);
          x.innerHTML+="<tr><td>"+data[k][0]+"</td><td>"+data[k][1]+"</td>";
        }
        getURL();
      },
      error: function(data){
        console.log(data);
      }
    });

  }
}


function getURL(){
  var str = window.location.href;
  uid="";
  for (var i = 0; i<=str.length; i++){
    //console.log(str.charAt(i));
    if (str.charAt(i) == "="){
      for ( var j=i+1; j<str.length; j++){
        if(str.charAt(j)=="#")
          break;
        uid = uid + str.charAt(j);
      }
      console.log(uid);
      break;
    }
  }
  console.log(str);
  console.log(uid);
}
