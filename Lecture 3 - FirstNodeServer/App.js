const http = require('http');
function requestListener(req,res){
console.log(req);
}
const server=http.createServer(requestListener);
const port =3000;

server.listen(port,()=>{
  console.log(`server running on http://localhost: ${port}`);
});