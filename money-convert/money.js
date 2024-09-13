var exchangeRates = {
  USD: { EUR: 0.85,
     DT: 3.00, 
     USD: 1, 
     CHF: 0.91, 
     JPY: 110.00 
    },
  EUR: { USD: 1.18,
     DT: 3.40, 
     EUR: 1, 
     CHF: 1.07, 
     JPY: 130.00 
    },
  DT: { USD: 0.33, 
    EUR: 0.29,
     DT: 1,
      CHF: 0.32,
       JPY: 43.33 
      },
  CHF: { USD: 1.10,
     EUR: 0.93,
      DT: 3.10, 
      CHF: 1,
       JPY: 127.00
       },
  JPY: { USD: 0.0091, 
    EUR: 0.0077, 
    DT: 0.023, 
    CHF: 0.0079, 
    JPY: 1 
  }};
  $("#convert-btn").click(function () {
    var amount = ($("#amount").val())
    var Current_amount = $("#Current_amount").val()
    var amount_exchanged = $("#amount_exchanged").val()
    if (isNaN(amount) || amount <= 0) {
      $("#result").text("Please enter a valid amount")
      return }
    if (Current_amount === amount_exchanged) {
      $("#result").text("Same currency selected")
      return   }
    var rate = exchangeRates[Current_amount][amount_exchanged]
    var convertedAmount = amount * rate
    $("#result").text( `${amount} ${Current_amount} = ${convertedAmount.toFixed(3)} ${amount_exchanged}`)
  })
