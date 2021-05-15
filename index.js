const http=require('http');
const server=http.createServer((req,res)=>{
if(req.url=='/')
{
return res.end('123');
}

return res.end(0);
})

server.listen(3000)
