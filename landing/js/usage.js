function onClickUsageItem(sender) {
  let key = sender.target.dataset.usageId;
  $("[data-usage-id]").toggleClass("active", false);
  $('[data-usage-id="' + key + '"]').toggleClass("active", true);
  $("[data-usage-container-id]").toggleClass("active", false);
  $('[data-usage-container-id="' + key + '"]').toggleClass("active", true);
}
