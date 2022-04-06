/*
https:\/\/api\.revenuecat\.com\/v1\/(subscribers|receipts) url script-response-body https://raw.githubusercontent.com/RuyeNet/QuantumultX/main/DSDownload.js
hostname= api.revenuecat.com
*/

var obj = JSON.parse($response.body);
obj = {
    "request_date_ms" : 1649208438000,
    "request_date" : "2022-01-01T00:00:00Z",
    "subscriber" : {
      "non_subscriptions" : {
  
      },
      "first_seen" : "2022-01-01T00:00:00Z",
      "original_application_version" : "59",
      "other_purchases" : {
  
      },
      "management_url" : "itms-apps://apps.apple.com/account/subscriptions",
      "subscriptions" : {
        "dsdownload.app.subscription.1year.d" : {
          "is_sandbox" : false,
          "ownership_type" : "PURCHASED",
          "billing_issues_detected_at" : null,
          "period_type" : "normal",
          "expires_date" : "2099-01-01T00:00:00Z",
          "grace_period_expires_date" : null,
          "unsubscribe_detected_at" : null,
          "original_purchase_date" : "2022-01-01T00:00:00Z",
          "purchase_date" : "2022-01-01T00:00:00Z",
          "store" : "app_store"
        }
      },
      "entitlements" : {
        "Unlimited" : {
          "grace_period_expires_date" : null,
          "purchase_date" : "2022-01-01T00:00:00Z",
          "product_identifier" : "dsdownload.app.subscription.1year.d",
          "expires_date" : "2099-01-01T00:00:00Z"
        }
      },
      "original_purchase_date" : "2022-01-01T00:00:00Z",
      "original_app_user_id" : "$RCAnonymousID:d59eae2f029b9d232c46e7fa9d709a1b",
      "last_seen" : "2022-01-01T00:00:00Z"
    }
  }
  ;

$done({ body: JSON.stringify(obj) });
