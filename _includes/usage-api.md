<!-- API -->
<div class="container-fluid">
  <p class="karla-text title-font">API</p>
  
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">結果をキャストする</h5>
      <p class="card-text">
        作成した日時を、JavaScriptのどの型で、どのフォーマットで受け取るのかを呼び出します。
        {% capture my_include %} 
```javascript
// 結果を文字列で取得します。1989年04月10日 14時20分00秒になります。
let date_object = NLPDate("平成元年4月10日の14時20分").asString("日本語の年月日時分秒");

// 結果を文字列で取得します。1989年04月10日になります。
let date_object_day = NLPDate("平成元年4月10日の14時20分").asString("日本語の年月日");

// 結果を文字列で取得します。1989/04/10になります。
let date_object_sla = NLPDate("平成元年4月10日の14時20分").asString("スラッシュ区切りの年月日");
```
        {% endcapture %} 
        {{ my_include | markdownify }}
      </p>
    </div>
  </div>

  <div class="card">
    <div class="card-body">
      <h5 class="card-title">変換メソッド</h5>
      <p class="card-text">
        変換メソッドは、asString を含めて 3 つあります。 
        {% capture my_include %} 
| メソッド | 正常時<br />戻り値 | エラー時<br />戻り値         | 引数               | 出力内容                       |
| -------- | ------------------ | ---------------------------- | ------------------ | ------------------------------ |
| asString | string 型          | undefined                    | フォーマット文字列 | 日時を文字列として出力します   |
| asNumber | number 型          | number<br />(エポックミリ秒) | asString に同じ    | 日時を数値として出力します     |
| asDate   | Date 型            | undefined                    | なし               | 日時を Date 型として出力します |
        {% endcapture %} 
        {{ my_include | markdownify }}
      </p>
    </div>
  </div>
</div>
