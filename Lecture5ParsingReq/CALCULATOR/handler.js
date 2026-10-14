const { sumRequestHandler } = require("./Sum");



const requestHandler = (req, res) => {
    console.log(req.url, req.method);
if(req.url==='/'){
res.setHeader('Content-Type','text/html');
res.write(`<html>
<head>
<title>Complete code</title>
</head>
    <body>
<h1>WELCOME </h1>
<a href="/calculator">Go to Calculator</a>
     </body>
</html>
`);
return res.end();
}
if(req.url==='/calculator'){
 res.setHeader('Content-Type','text/html');
res.write(`<html>
<head>
<title>Practice Set</title>
</head>
    <body>
<h1>Calculator banayega</h1>
<form action="calculate-result" method="POST">
<input type="text" placeholder="First Num" name="First"/>
<input type="text" placeholder="Second Num" name="Second"/>
<input type="submit" value="Sum">
</form>
<a href="/">Go to home</a>
     </body>
</html>`); 
return res.end()
} 
else if(req.url==='/calculate-result' && req.method==='POST'){
   return sumRequestHandler(req,res);
    
}
res.setHeader('Content-Type','text/html');
res.write(`<html>
<head>
<title>Complete codin</title>
</head>
    <body>
<h1>404 not found </h1>
<a href="/">Go to home</a>
     </body>
</html>`);  
};

exports.requestHandler = requestHandler;