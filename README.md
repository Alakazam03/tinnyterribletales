# tinnyterribletales


A normal submit button is made from which razorpay.js is getting the value. After this the value is sent to NodeJS(webhook) 
which access online(ttt txt file) and using map(dictionary) returns the frequency of words occurring in sorted manner.
Based on value sent from front end, we slice the sorted frequency list and responds back to front end.
Easily we can table out of that using html.


libraries used(NodeJS):
  express
  body-parser
  request
  path
  http
  bluebird
  Promise
  
  
Handled cases:
  Invalid value of n(handled at front-end)
  Failure of ending value to backend(using NodeJs, it's nature)
