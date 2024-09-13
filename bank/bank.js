let totalDeposit = 0;
let totalWithdraw = 0;
let totalBalance = 0;
$("#Deposit").on("click", function () {
  let amount = parseFloat($("#deposit").val());
  if (isNaN(amount) || amount <= 0) return;
  totalDeposit = totalDeposit + amount;
  totalBalance = totalDeposit - totalWithdraw;
  $("#Result1").text(`$${totalDeposit}`);
  $("#Result3").text(`$${totalBalance}`);
  $("#tot").text(`Total Balance: $${totalBalance}`);
});
$("#Withdraw").on("click", function () {
  let amount = parseFloat($("#withdraw").val());
  if (amount > totalBalance) {
    alert("You have insufficient Balance.");
    return;
  }
  if (isNaN(amount) || amount <= 0) return;
  totalWithdraw = totalWithdraw + amount;
  totalBalance = totalDeposit - totalWithdraw;
  $("#Result2").text(`$${totalWithdraw}`);
  $("#Result3").text(`$${totalBalance}`);
  $("#tot").text(`Total Balance: $${totalBalance}`);
});
$(".logout").on("click",function () {
    window.location.href = "/login/login.html";
})