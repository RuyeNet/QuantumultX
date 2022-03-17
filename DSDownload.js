/*
https:\/\/api\.revenuecat\.com\/v1\/(subscribers|receipts) url script-response-body https://raw.githubusercontent.com/RuyeNet/QuantumultX/main/DSDownload.js
hostname= api.revenuecat.com
*/

var obj = JSON.parse($response.body);
obj = {
    "request_date_ms" : 1642154193189,
    "request_date" : "2022-01-14T09:56:33Z",
    "subscriber" : {
      "non_subscriptions" : {
  
      },
      "first_seen" : "2022-01-12T02:04:31Z",
      "original_application_version" : "59",
      "other_purchases" : {
  
      },
      "management_url" : "itms-apps://apps.apple.com/account/subscriptions",
      "subscriptions" : {
        "dsdownload.app.subscription.1year.d" : {
          "is_sandbox" : false,
          "ownership_type" : "PURCHASED",
          "billing_issues_detected_at" : null,
          "period_type" : "trial",
          "expires_date" : "2099-01-17T09:56:28Z",
          "grace_period_expires_date" : null,
          "unsubscribe_detected_at" : null,
          "original_purchase_date" : "2022-01-14T09:56:29Z",
          "purchase_date" : "2022-01-14T09:56:28Z",
          "store" : "app_store"
        }
      },
      "entitlements" : {
        "Unlimited" : {
          "grace_period_expires_date" : null,
          "purchase_date" : "2022-01-14T09:56:28Z",
          "product_identifier" : "dsdownload.app.subscription.1year.d",
          "expires_date" : "2099-01-17T09:56:28Z"
        }
      },
      "original_purchase_date" : "2022-01-12T01:58:46Z",
      "original_app_user_id" : "$RCAnonymousID:01f1b5dfd871470b870535de6d222c62",
      "last_seen" : "2022-01-14T09:32:37Z"
    }
  }
  ;

$done({ body: JSON.stringify(obj) });
