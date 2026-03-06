
type PaymentMethod= "UPI"| "CreditCard"| "PayPal"
function makePayment(paymentoptions:PaymentMethod)
{
    console.log("Payment done via",paymentoptions)
}
makePayment("UPI")
makePayment("CreditCard")