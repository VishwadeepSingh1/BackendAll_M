const http = require('http');

const server=http.createServer((req,res)=>{
console.log(req.url,req.method,req.headers);
process.exit();
});
const port =3000;

server.listen(port,()=>{
  console.log(`server running on http://localhost: ${port}`);
});