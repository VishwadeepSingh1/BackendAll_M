const http=require('http');
const server=http.createServer((req,res)=>{
  if(req.url==='/'){
    res.setHeader('Contecnt-type','text/html');
    res.write('<html>');
    res.write('<head><title>User Input</title></head>');
    res.write('<h1>Enter Your Detail Here</h1> <br>');
    res.write('<body><input type="text" name="username" placeholder="Enter name here"></input><br>');
res.write('<form action="/Submit-details" method="POST">');
 
    res.write('<labeL for="gender>Gender</label>');
    
res.write('<label for="Male">Male</label>');
  res.write('<input type="radio" id="male" name="gender" value="Male"> <br>');

res.write('<label for="female">female</label> ');
res.write('<input type="radio" id="female" name="gender" value="female"><br> ');
res.write('<button type="submit">Submit</button>');
res.write('</form>');
    res.write('</body>')
    res.write('</html>');
    return res.end();
  }
      res.setHeader('Contecnt-type','text/html');
    res.write('<html>');
    res.write('<head><title>User Input</title></head>');
    res.write('<body><h1>Enter your dept</h1></body>');
    res.write('<html>');
    return res.end();
});
const port=3000;
server.listen(port,()=>{
  console.log('server listening');
})