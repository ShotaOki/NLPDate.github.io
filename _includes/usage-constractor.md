<!-- コンストラクタ -->
<div class="container-fluid">
  <p class="karla-text title-font">コンストラクタ</p>

  <div class="card">
    <div class="card-body">
      <h5 class="card-title">コンストラクタ</h5>
      <p class="card-text">
        コンストラクタに自然な日本語を渡すことで、思い通りの日時を作成します。
        {% capture my_include %} 
```javascript
// 今日の日時
let today = NLPDate("今日");

// 昨日の日時
let yesterday = NLPDate("昨日");

// 3日後の日時
let three_days_later = NLPDate("3日後");

// 特定の日時
let any_day = NLPDate("昭和40年4月10日");

// 相対日時
let any_day = NLPDate("次の土曜日の4日後");
```
        {% endcapture %}
        {{ my_include | markdownify }}
      </p>
    </div>
  </div>

  <div class="card">
    <div class="card-body">
      <h5 class="card-title">コンストラクタに渡せるデータ</h5>
      <p class="card-text">
        日時文字列のほかにも、以下のものが指定できます。
        {% capture my_include %}
| 指定 | 型 | 引数の例 | 処理結果 |
| -------- | ------------------ | ---------------------------- | ------------------ |
| 日時を指定 | string 型          | 明日の4時20分                   | テキストが指す日時を作成します。 |
| エポック秒、エポックミリ秒を指定 | string 型          | 1610975612                  | エポック秒が指す日時を作成します。 |
| エポック秒を含む日時を指定 | string 型          | 1610975612の2日後                   | エポック秒を基準に、操作することができます。 |
| 年月日を指定 | string 型          | 19901230                  | 年月日が指す日時を作成します。 |
| 記号の日時を指定 | string 型          | 1990/12/30                  | 年月日が指す日時を作成します。 |
| 数字を指定 | number 型          | 19901230 | 桁数がエポック秒の桁数であればエポックとして、年月日であれば年月日として解析して作成します。 |
        {% endcapture %}
        {{ my_include | markdownify }}
      </p>
    </div>
  </div>

</div>
```
