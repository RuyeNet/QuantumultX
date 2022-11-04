/*
https:\/\/router\-app\-api\.jdcloud\.com\/v1\/board\/routerAppSplash url script-response-body https://raw.githubusercontent.com/RuyeNet/QuantumultX/main/JDRouterNoAds.js
hostname= router-app-api.jdcloud.com
*/

var obj = JSON.parse($response.body);
obj = {"code":200,"requestId":"","error":null,"result":{"splashInfos":[],"isAdOpen":false}};

$done({ body: JSON.stringify(obj) });
