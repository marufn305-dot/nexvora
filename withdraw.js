document.addEventListener("DOMContentLoaded", function () {

  const button = document.querySelector("button");

  if (!button) {
    return;
  }

  button.addEventListener("click", function () {

    const method =
      document.getElementById("method").value;

    const account =
      document.getElementById("account").value.trim();

    const amount =
      Number(document.getElementById("amount").value);

    const message =
      document.getElementById("message");


    if (!method) {
      message.textContent =
        "Please select a withdrawal method.";
      message.style.color = "red";
      return;
    }


    if (!account) {
      message.textContent =
        "Please enter your account number.";
      message.style.color = "red";
      return;
    }


    if (!amount || amount <= 0) {
      message.textContent =
        "Please enter a valid withdrawal amount.";
      message.style.color = "red";
      return;
    }


    let withdrawals = [];

    try {

      const saved =
        localStorage.getItem("nexvora_withdrawals");

      if (saved) {
        withdrawals = JSON.parse(saved);
      }

      if (!Array.isArray(withdrawals)) {
        withdrawals = [];
      }

    } catch (error) {

      withdrawals = [];

    }


    const newWithdrawal = {

      id:
        "WD-" +
        Date.now(),

      method:
        method,

      account:
        account,

      amount:
        amount,

      status:
        "Pending",

      date:
        new Date().toLocaleString()

    };


    withdrawals.unshift(newWithdrawal);


    localStorage.setItem(
      "nexvora_withdrawals",
      JSON.stringify(withdrawals)
    );


    message.textContent =
      "Withdrawal request submitted successfully.";

    message.style.color =
      "#0b8f4d";


    document.getElementById("account").value = "";
    document.getElementById("amount").value = "";

  });

});