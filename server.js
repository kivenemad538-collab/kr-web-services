const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.static(__dirname));
const prices = { personal:60, portfolio:75, business:120, gaming:100, discord:90, fivem:150, fivemAdvanced:220, custom:150 };
app.get('/api/prices', (req,res) => res.json(prices));
app.post('/api/orders', (req,res) => {
 const b=req.body;
 if(!b.name || !b.whatsapp || !prices[b.type]) return res.status(400).json({error:'Missing required information'});
 const id='KR-'+Math.floor(100000+Math.random()*900000);
 res.json({id:id,status:'New',price:prices[b.type],monthly:b.customDomain?10:0});
});
app.get('/',(req,res)=>res.sendFile(path.join(__dirname,'index.html')));
const port=process.env.PORT || 3000;
app.listen(port,'0.0.0.0',()=>console.log('KR running on port '+port));