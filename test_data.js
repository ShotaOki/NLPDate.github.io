function TestRequest(id, left_menu_id, time_zone_menu) {
  var self = this;
  self.id = id;
  self.left_menu_id = left_menu_id;
  self.time_zone_menu = time_zone_menu;
  self.format_text = "";
  self.current_time_zone = "";

  self.dataset = [
    "現在", //
    "今日",
    "明日",
    "昨日",
    "来月",
    "今月",
    "先月",
    "あさっての今頃",
    "あさっての14時",
    "明後日の14時",
    "2022年の4月12日",
    "2022/4/12の14時",
    "2022-4-12の午後2時",
    "去年の午前6時",
    "来月の月末",
    "先月の月末",
    "2015年の年末",
    "一昨日の8時33分",
    "おとといの8時33分",
    "おとついの8時33分",
    "2019/11/2の午後2時",
    "午前6時の8月14日2022年",
    "やのあさっての10時",
    "しあさっての10時",
    "今月の第一水曜日",
    "前の第一水曜日",
    "次の第一水曜日",
    "土曜日",
    "次の土曜日",
    "前の土曜日",
    "前の土曜日の今",
  ];

  self.format = [
    "", //
    "ISO8601",
    "スラッシュ区切りの年月日時分秒",
    "ハイフン区切りの年月日時分秒",
    "日本語の年月日時分秒",
    "日本語の年月日",
    "和暦の年月日",
    "区切りなしの年月日時分秒",
    "スラッシュ区切りの年月日",
    "スラッシュ区切りの年月日時分秒とミリ秒",
    "スラッシュ区切りの年月日と曜日",
    "日本語の年月",
    "日本語の年",
    "日本語の月",
    "和暦の年",
    "日本語の日",
    "日本語の曜日",
    "数字の年",
    "数字の月",
    "数字の日",
    "数字の時",
    "数字の分",
    "数字の秒",
    "数字のミリ秒",
    "エポック秒",
    "エポックミリ秒",
    "[日時:YYYY_MM_dd HH_mm_ss（E）]",
  ];

  self.time_zone_list = [
    "",
    "Asia/Tokyo",
    "UTC",
    "Asia/Tehran",
    "America/Los_Angeles",
  ];

  self.update_time_zone = function () {
    let time_zone_area = document.getElementById(self.time_zone_menu);
    self.time_zone_list.forEach(function (item, index) {
      let a_element = document.createElement("a");
      a_element.style.paddingLeft = 10;
      a_element.style.paddingRight = 10;
      a_element.innerText = item.length == 0 ? "指定なし" : item;
      a_element.href = "#";
      a_element.setAttribute("data-index", index);
      a_element.onclick = function (e) {
        self.current_time_zone = self.time_zone_list[e.target.dataset.index];
        self.update_table();
        e.preventDefault();
      };
      time_zone_area.appendChild(a_element);
    });
  };

  self.update_table = function () {
    $("#" + self.id).empty();
    self.dataset.forEach(function (item) {
      let format_text = self.format_text.length == 0 ? null : self.format_text;
      let format_text_display = format_text == null ? "" : '"${format_text}"';
      let time_zone_text = "";
      if (self.current_time_zone.length != 0) {
        time_zone_text =
          ', {<span class = "text-danger"> time_zone</span> : <span class = "text-danger">"' +
          self.current_time_zone +
          '"</span>}';
      }
      self.log_output(
        'NLPDate(<span class = "text-primary">"' +
          item +
          '"</span>' +
          time_zone_text +
          ').asString(<span class = "text-primary">' +
          format_text_display +
          "</span>)",
        function () {
          if (self.current_time_zone.length == 0) {
            return NLPDate(item).asString(format_text);
          } else {
            return NLPDate(item, {
              time_zone: self.current_time_zone,
            }).asString(format_text);
          }
        }
      );
    });
  };

  self.create_left_menu = function () {
    let left_menu_parent = document.getElementById(self.left_menu_id);
    self.format.forEach(function (item, index) {
      let text = item;
      if (text.length == 0) {
        text = "指定なし";
      }
      let a_element = document.createElement("a");
      a_element.classList.add("nav-link");
      a_element.setAttribute("data-index", index);
      a_element.innerHTML = text;
      a_element.onclick = function (e) {
        if (!e.target.classList.contains("active")) {
          $(".nav-link").removeClass("active");
          e.target.classList.add("active");

          self.format_text = self.format[e.target.dataset.index];
          self.update_table();
        }
        e.preventDefault();
      };

      if (item.length == 0) {
        a_element.classList.add("active");
      }
      left_menu_parent.appendChild(a_element);
    });
  };

  self.log_output = function (title, process) {
    let parent_table = document.getElementById(self.id);

    let line = document.createElement("tr");
    parent_table.appendChild(line);

    let content = {
      title: document.createElement("td"),
      result: document.createElement("td"),
    };
    Object.keys(content).forEach(function (key) {
      let td = content[key];
      line.appendChild(td);
    });

    content.title.innerHTML = title;
    content.result.innerHTML = process();
  };
}
