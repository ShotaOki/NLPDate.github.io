<!-- Start -->
{% capture my_include %} 
# Getting started

## 動作環境

ブラウザ、node、コマンドプロンプト、bashで使えます。

***

## JavaScriptで始める

HTMLに導入するときは、CDNを使って始めることができます。

以下の &lt;scirpt> を &lt;head> 内側に入れてください。

{% include code/cdn.html %}

***

## Nodeで始める

Node で使う場合は、Cloneしたあと、たとえば次のように書いてください。

{% highlight javascript %}{% include code/node-import.js %}{% endhighlight %}

***

## コマンドプロンプト、bashで始める

node がインストールされた環境であれば、bash や Windowsのコマンドプロンプトでも使えます。

github のソースを Clone した後、取り込んだプロジェクトのルートにある binまでのパスを通してください。

例：MyName さんのデスクトップに、NLPDate のフォルダ名で cloneした場合<br />
　　環境変数に登録する：C:\Users\MyName\Desktop\NLPDate\bin

***

{% endcapture %}
{{ my_include | markdownify }}
