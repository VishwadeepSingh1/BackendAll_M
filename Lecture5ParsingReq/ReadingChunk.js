// const http=require('http');
const fs=require('fs');
const userRequestHandler=(req,res)=>{
  console.log(req.url,req.method);
  if(req.url==='/'){
    res.setHeader('Contecnt-type','text/html');
    res.write('<html>');
    res.write('<head><title>User Input</title></head>');
    res.write('<h1>Enter Your Detail Here</h1> <br>');
    res.write('<body><input type="text" name="username" placeholder="Enter name here"></input><br>');
res.write('<form action="/submit-details" method="POST">');
 
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
  else if(req.url.toLowerCase()==="/submit-details" && req.method=="POST"){
    const body=[];
     req.on('data',(chunk)=>{
      console.log(chunk);
      body.push(chunk);
     });
     req.on("end",()=>{
      const fullBody=   Buffer.concat(body).toString();
      
      console.log(fullBody);



      // Now parsing actual

    const params= new  URLSearchParams(fullBody);

const bodyObject=Object.fromEntries(params); 
    // for(const [key,val] of params.entries()){
    //   bodyObject[key]=val;

    // }
    console.log(bodyObject);
 fs.writeFileSync('user_details.txt',JSON.stringify(bodyObject));
     });

   
    res.statusCode=302;
    res.setHeader('Location','/');
  }
      res.setHeader('Contecnt-type','text/html');
    res.write('<html>');
    res.write('<head><title>User Input</title></head>');
    res.write('<body><h1>Enter your dept</h1></body>');
    res.write('<html>');
    return res.end();
};
module.exports=userRequestHandler;