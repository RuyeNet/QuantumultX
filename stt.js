/*
shititong unlock
https:\/\/shiti\.qipeixing\.cn\/java\-Maven\-0\.0\.1\-Shititong\/api\/(member\/(personalData|testaccredit)|sttExamination\/newQuerySaosao.*) url script-response-body https://raw.githubusercontent.com/RuyeNet/QuantumultX/main/stt.js

By @RuyeNet

QX:
https:\/\/shiti\.qipeixing\.cn\/java\-Maven\-0\.0\.1\-Shititong\/api\/(member\/(personalData|testaccredit)|sttExamination\/newQuerySaosao.*) url script-response-body https://raw.githubusercontent.com/RuyeNet/QuantumultX/main/stt.js

Surge4：
http-response https:\/\/shiti\.qipeixing\.cn\/java\-Maven\-0\.0\.1\-Shititong\/api\/(member\/(personalData|testaccredit)|sttExamination\/newQuerySaosao.*) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/RuyeNet/QuantumultX/main/stt.js

Surge & QX MITM = shiti.qipeixing.cn
*/

var body = $response.body;
var url = $request.url;

const path1 = '/api/member/personalData';
const path2 = "/api/sttExamination/newQuerySaosao";
const path3 = "/api/member/testaccredit";

if (url.indexOf(path1) != -1) {
  let obj = JSON.parse(body);
  obj.moneycount = 9999;
  obj.membernum = 2;
  obj.menbertimeDate = 9999;
  obj.sharetestnum = 9999;
  obj.membertitle = "高级会员";
  obj.authorName = "吾爱破解";
  body = JSON.stringify(obj);
};

if (url.indexOf(path2) != -1) {
  let obj = JSON.parse(body);
  obj["data"]["saosao"] = "YES";
  obj["data"]["membertype"]= "高级会员";
  obj["data"]["daynum"]= 9999;
  body = JSON.stringify(obj);
};

if (url.indexOf(path3) != -1) {
  let obj = JSON.parse(body);
  obj["data"]["result"] = "激活";
  body = JSON.stringify(obj);
};

$done({ body });

