//THIS IS A STRING OF JSON (NOT AN OBJECT)
const data = `{"ticker":{"base":"BTC","target":"USD","price":"11288.49813464","volume":"91769.69699773","change":"-46.29462447"},"timestamp":1596510482,"success":true,"error":""}`

// THIS IS A JS OBJECT JSON.parse() will return a JavaScript object from a JSON string
const parsedData = JSON.parse(data);


// JSON.stringify() will return a JSON string from a JavaScript object