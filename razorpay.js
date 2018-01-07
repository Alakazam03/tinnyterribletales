function done(){
  function getlength(number){
    return number.toString().length;
  }
  phoneUser=Number(document.getElementsByName('phone')[0].value);
  //addUser=addUser.replace(\\g, '-');
  if(phoneUser=="")
    alert("Invald phone number!");
  else{
    $.ajax({
      type: "GET",
      url: 'https://7b493696.ngrok.io/',
      data: {
        "id": phoneUser,
      },
      success: function(data){
        console.log(data);
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
  //  alert("Close the webview to proceed! You'll receive a confirmation message soon.");

  }
}

var price, nameUser, phoneUser, addUser;

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

/*
function razorpay(){
  var options = {
    "key": "rzp_test_HMAxicoOIZn8Xx",
    "amount": price*100, // 2000 paise = INR 20
    "name": "Baba da Dhaba",
    "description": "Payment for your food order",
    "image": "",
    "handler": function (response){
      console.log(response);
      //save payment id
      $.ajax({
        type: "GET",
        url: redisDb+"/"+uid+"/set_payment_key/"+response.razorpay_payment_id,
        success: function(data){
          console.log('Success!');
        },
        error: function(data){
          console.log('Nope!');
        }
      });
      //alert(response.razorpay_payment_id);
      //save address
      $.ajax({
        type: "GET",
        url: redisDb+"/"+uid+"/set_address/payment/"+lat+","+long,
        success: function(data){
          console.log('Success!');
        },
        error: function(data){
          console.log('Nope!');
        }
      });
      //to NodeJS script
      $.ajax({
        type: "GET",
        url: "https://8dd5fd02.ngrok.io/payments",
        data: {
          'key': response.razorpay_payment_id,
          'Id': uid
        },
        success: function(data){
          console.log(data);
        },
        error: function(data){
          console.log('Nope!');
        }
      });
      alert("Close webview to proceed!");
    },
    "prefill": {
      "name": nameUser,
      "email": emailUser,
      "contact": phoneUser
    },
    "notes": {
      "address": document.getElementsByName('address')[0].value
    },
    "theme": {
      "color": "#77cde3"
    }
  };
  var rzp1 = new Razorpay(options);
  rzp1.open();
}
*/
