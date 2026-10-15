const sumRequestHandler=(req,res)=>{
console.log("In sum req handler",req.url);
const body=[];
req.on('data',chunk=>{
  console.log(chunk);
body.push(chunk)}
);
req.on('end',()=>{
const bodyStr= Buffer.concat(body).toString();
console.log(bodyStr);
  const params=new URLSearchParams(bodyStr);
  const bodyObj=Object.fromEntries(params);
  const result=Number(bodyObj.First)+Number(bodyObj.Second);
  console.log(result);
  res.setHeader('Content-Type','text/html');
res.write(`<html>
<head>
<title>Complete codin</title>
</head>
    <body>
<h1>Sum is ${result} </h1>
<a href="/">Go to home</a>
     </body>
</html>`); 
res.end();
});

}
exports.sumRequestHandler=sumRequestHandler