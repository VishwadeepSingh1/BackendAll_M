const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
if(req.url=='/'){
res.setHeader('Contecnt-type','text/html');
res.write('<html>');
res.write('<head><title>Student Detalils</title></head>');
res.write('<body >');
res.write('<form action="/Home" method="GET">');
res.write('<a href="./HOME">Home</a>');
res.write('<br>');
res.write('<a href="./Location"  >Location</a>');
res.write('</form>');
res.write('</body>');
res.write('</html>');
return res.end();
}
else if(req.url.toLocaleLowerCase()==="/home" && req.method=="GET"){
  res.setHeader("Contecnt-type","text/html");
  res.write('<html>');
  res.write('<body>');
res.write('<h1>welcome home</h1>');

res.write('</body>');
res.write('</html>');
}
});
 const port=3000;
 server.listen(port,()=>{
  console.log("server is listening");
 });