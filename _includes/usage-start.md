<!-- Start -->
<div class="container-fluid">
  <p class="karla-text title-font">Getting started</p>

  <div class="card">
    <div class="card-body">
      <h5 class="card-title">動作環境</h5>
      <p class="card-text">
        ブラウザ、node、コマンドプロンプト、bashで使えます。
      </p>
    </div>
  </div>

  <div class="card">
    <div class="card-body">
      <h5 class="card-title">JavaScriptで始める</h5>
      <p class="card-text">
        HTMLに導入するときは、CDNを使って始めることができます。
      </p>
      <p class="card-text">
        以下の &lt;scirpt> を &lt;head> 内側に入れてください。
      </p>
      {% include code/cdn.html %}
    </div>
  </div>

  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Nodeで始める</h5>
      <p class="card-text">
        Node で使う場合は、Cloneしたあと、たとえば次のように書いてください。
      </p>

      {% highlight javascript %}{% include code/node-import.js %}{% endhighlight
      %}
    </div>
  </div>

  <div class="card">
    <div class="card-body">
      <h5 class="card-title">コマンドプロンプト、bashで始める</h5>
      <p class="card-text">
        node がインストールされた環境であれば、bash や Windows
        のコマンドプロンプトでも使えます。
      </p>
      <p class="card-text">
        github のソースを Clone した後、取り込んだプロジェクトのルートにある bin
        までのパスを通してください。
      </p>
      <p class="card-text">
        例：MyName さんのデスクトップに、NLPDate のフォルダ名で clone
        した場合<br />
        　　環境変数に登録する：C:\Users\MyName\Desktop\NLPDate\bin
      </p>
    </div>
  </div>
</div>