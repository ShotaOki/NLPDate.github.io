<!-- Option -->
{% capture my_include %} 
# Optoin

## オプションを設定する

コンストラクタにオプションをつけて、タイムゾーンやパースのタイミングを設定することができます。

```javascript
const UTC = {
    time_zone: "UTC", // 日本時間はAsia/Tokyoになる
    mode: "dynamic" // 現在日時の評価を変換APIの実行時点に行う
}

// UTC時間の今日を取得します。
let date_object = NLPDate("今日", UTC);
```

***

## 設定できるオプション

| キー | 値 | 初期値 | 内容                       |
| -------- | --------- | --------- | ------------------------------ |
| time_zone | Asia/Tokyo | タイムゾーンのロケール | 時差を設定します。 |
| mode | dynamic | static | dynamicを指定すると、変換APIを実行したタイミングで時間を評価します。 |
| mode | static  | static | staticを指定すると、コンストラクタを実行したタイミングで時間を評価します。 |
| epoch_time_milliseconds | エポックミリ秒 | None | 設定すると、現在日時の時間を強制的に固定します。<br />※値のコピー、単体試験で使います。 |

***

{% endcapture %} 
{{ my_include | markdownify }}
