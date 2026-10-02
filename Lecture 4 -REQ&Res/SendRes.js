const http=require('http');
const server= http.createServer((req,res)=>{
console.log(req.url,req.method,req.headers);
if(req.url==='/'){
  res.setHeader('Content-Type','Text/html');
res.write('<html>');
res.write('<head><title>Complete coding</title></head>');
res.write('<body><h1>Welcome to home page</h1></body>');
res.write('</html>');
return res.end();
}
else if(req.url==='/products'){
  res.setHeader('Content-Type','Text/html');
res.write('<html>');
res.write('<head><title>Complete coding</title></head>');
res.write('<body><h1>Welcome to product section</h1></body>');
res.write('</html>');
return res.end();
}
res.setHeader('Content-Type','Text/html');
res.write('<html>');
res.write('<head><title>Complete coding</title></head>');
res.write('<body><h1>Welcome to complete coding</h1></body>');
res.write('</html>');
res.end();
});
 const port=3000;
 server.listen(port,()=>{
  console.log(`server is listening on http://localhost:${port}`);

 });
