/*
https://apiios_dq.xiangha.com/v4/dish/info url script-response-body https://raw.githubusercontent.com/RuyeNet/QuantumultX/main/recipebookCrack.js
hostname = *
*/

var str = $response.body;
str = str.replace(/"power":[^]*\[/g, "\"power\":{}}\,\"append\":[");
$done({ body: str });
