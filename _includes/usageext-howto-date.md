<!-- Start -->
{% capture my_include %} 
# How to, get date

## 今日の時間を取る

「今日」と書くと日付だけが設定され、「現在」と書くと日付と時間が設定されます。

```javascript
// 「今日」と書くと、今日の00:00:00が取得できます
let date_object = NLPDate("今日");

// 「現在」と書くと、今日の現在時刻が取得できます
let now_object = NLPDate("現在");
```

「今日」や「現在」の別名でも認識します。

```javascript
// 「現在」ではなく「今」や「今頃」や「いま」のような別名を書いても取得できます
let date_object = NLPDate("今");
```

***

## 日時の精度

「今日の30分後」のような指定をしても動作しません。

今日の30分後＝今日のいつごろの30分後なのかが分からないためです。

```javascript
// 「現在」の30分後は、実行時の30分後の時間が取れます
let now_object = NLPDate("現在の30分後");

// 「今日」の30分後と書いた場合、「30分後」は無視されます
let date_object = NLPDate("今日の30分後");
```

時間を設定すれば、何分後、何秒後、何時間後の設定ができるようになります。

```javascript
// 「今日の10時00分 の30分後」と書くと、今日の10時30分が設定されます。
let ten_object = NLPDate("今日の10時00分の30分後");

// 「～の今頃」と書いて、現在時刻を設定しても大丈夫です
let ten_object = NLPDate("明日の今頃の30分後");
```

***

{% endcapture %}
{{ my_include | markdownify }}
