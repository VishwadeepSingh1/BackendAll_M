const http=require('http');

 const RequestHandler= require('./ReadingChunk') ; 
const server=http.createServer(RequestHandler);
const port=3000;
server.listen(port,()=>{
  console.log('server listening');
})