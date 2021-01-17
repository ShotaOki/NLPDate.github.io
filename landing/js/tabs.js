/**
 * タブのコンテナを作成します
 */
function Container() {
  let $self = this;
  /**
   *  タブを押下され、コンテナを切り替えます
   */
  $self.switchContainer = function (sender) {
    let key = undefined;
    let target = undefined;
    if (sender.target) {
      target = sender.target;
      key = target.getAttribute("key");
    } else {
      target = document.getElementById("t_" + sender);
      key = sender;
    }
    // 現在の選択状態をクリアする
    $self.nav_key_list.forEach(function (item) {
      $("#" + item).toggleClass("active", false);
    });

    $(".nav-item").toggleClass("active", false);
    // 押下されたヘッダ、コンテンツを選択状態にする
    $("#c_" + key).toggleClass("active", true);
    $(target).toggleClass("active", true);
  };

  /**
   * HTMLからテキストデータを取得する
   * Templateと同じ処理だが、IE 11が対応していないため、この方法で代用する
   * また、JS非対応ページでも必要なデータが表示されるため、SEO効果を期待する
   */
  $self.loadContentFromHTML = function () {
    // HTMLから取得した後、データをマップに詰める
    let content_data = {};
    let content_list = document
      .getElementById("text-loader")
      .getElementsByTagName("div");
    content_list.forEach(function (item) {
      content_data[item.id] = item.innerHTML;
    });
    // 取得した後はhtmlから削除する
    document.getElementById("text-loader").innerHTML = "";
    return content_data;
  };

  /**
   * タブを初期化する
   * @param {タブの表示データ一覧} nav_link_list
   * @param {初期選択位置} first_position
   */
  $self.initNavBar = function (nav_link_list, first_position) {
    let navbar_top = document.getElementById("navbar-top");
    let nav_content = document.getElementById("nav-content");
    $self.nav_key_list = [];
    nav_link_list.forEach(function (item) {
      // 変数を保持する
      let head_element = document.createElement("a");
      let content_element = undefined;

      // タブを設定する
      head_element.classList.add("nav-item");
      head_element.classList.add("nav-link");
      head_element.innerHTML = item.content;
      head_element.id = "t_" + item.key;
      head_element.setAttribute("key", item.key);
      if (item.href) {
        // href指定があればリンクにする
        head_element.href = item.href;
        head_element.target = "_blank";
      } else {
        // 指定がなければコンテナにデータを設定、Ajaxで切り替える
        head_element.href = "#";
        head_element.onclick = $self.switchContainer;

        // Ajax用のコンテナを設定する
        content_element = document.createElement("div");
        content_element.id = "c_" + item.key;
        $self.nav_key_list.push(content_element.id);
        content_element.classList.add("carousel-item");
        if (item.body) {
          content_element.innerHTML = $self.content_data[item.body];
        }
        nav_content.appendChild(content_element);
      }
      navbar_top.appendChild(head_element);

      // 初期選択位置を指定する
      if (item.key == first_position) {
        head_element.classList.add("active");
        if (content_element) {
          content_element.classList.add("active");
        }
      }
    });
  };

  /**
   * コンテンツデータを読み込んだ後、タブを初期化する
   * @param {タブの表示データ一覧} nav_link_list
   * @param {初期選択位置} first_position
   */
  $self.init = function (nav_link_list, first_position) {
    $self.content_data = $self.loadContentFromHTML();
    $self.initNavBar(nav_link_list, first_position);
  };
}
