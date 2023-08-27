function generateReferenceNumber() {
    const timestamp = Date.now();
    const referenceNumber = `TEDx${timestamp}`;
    return referenceNumber;
  }

var paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener('submit', verifyAndPurchase, false);

function payWithPaystack(e) {
      e.preventDefault();
    var handler = PaystackPop.setup({
      key: 'pk_live_c669857beaa96ab7bd7619f4664a881d893669f4',
      email: document.getElementById('email-address').value,
      amount: 2500 * 100, // the amount value is multiplied by 100 to convert to the lowest currency unit
      currency: 'NGN',
      ref:  generateReferenceNumber(),
      metadata: {
        custom_fields: [
          {
            display_name: "Full Name",
            variable_name: "Full Name",
            value: document.getElementById('full-name').value,
          },
          {
            display_name: "Phone Number",
            variable_name: "Phone Number",
            value: document.getElementById('phone_number').value,
          },
        ],
      },
      callback: function(response) {
        //this happens after the payment is completed successfully
        var reference = response.reference;
        alert('Payment complete! Reference: ' + reference);
        // Make an AJAX call to your server with the reference to verify the transaction
      },
      onClose: function() {
        alert('Transaction was not completed, window closed.');
      },
    });
    handler.openIframe();
  }

const approvedEmails = [
    "pastormac9@gmail.com",
    "obediencepraise@gmail.com",
    "imaginemyke@gmail.com",
    "adeleyee45@gmail.com",
    "tijesuolayinka@gmail.com",
    "thisvane@gmail.com",
    "solomonboluwatife12@gmail.com",
    "olorunsolatodimu15@gmail.com",
    "happilyvictorious21@gmail.com",
    "emmanuelkehinde175@yahoo.com",
    "ezraiyanu66@gmail.com",
    "tolulopeelijah90@gmail.com",
    "samdgen@gmail.com",
    "olutayoglory03@gmail.com",
    "daveolat19@gmail.com",
    "olokimi789@gmail.com",
    "aniwuramalik@gmail.com",
    "oyelakinabdullahioyedele@gmail.com",
    "doreenadarenne@gmail.com",
    "nurudeenabdulaleem@gmail.com",
    "braimohohinorenua@gmail.com",
    "kayodedamilola02@gmail.com",
    "lekanogunsimide@gmail.com",
    "fsticks8187@gmail.com",
    "ayenidamzy001@gmail.com",
    "oyekanrotimi5@gmail.com",
    "samuelomotehinse2022@gmail.com",
    "akindejuhmikel@gmail.com",
    "adewumiayomidipupo@gmail.com",
    "emmanuelajibokun9@gmail.com",
    "ajalaoluwatoyinmary@gmail.com",
    "ogunjobidaniel72@gmail.com",
    "osenimodel@gmail.com",
    "danielsamson143@gmail.com",
    "adaramolao141@gmail.com",
    "muomaifepeter97@gmail.com",
    "matthewoduola@gmail.com",
    "tobilobaakanlepeter@gmail.com",
    "jesulogomi2004@gmail.com",
    "aanuakinleye@gmail.com",
    "victortemidayo466@gmail.com",
    "asumodavid@gmail.com",
];

function verifyAndPurchase(e) {
    const fullName = document.getElementById("full-name").value;
    const email = document.getElementById("email-address").value;

    const resultMessage = document.getElementById("resultMessage");

    if (!paymentForm.checkValidity()) {
        return;
    }

    if (approvedEmails.includes(email)) {
        // Proceed with payment process using Paystack
        resultMessage.style.color = "green";
        paymentForm.addEventListener('submit', payWithPaystack, false);
        resultMessage.textContent = `Hi ${fullName}! Your discount is applied. Redirecting to payment...`;
    } else {
        resultMessage.style.color = "red";
        resultMessage.textContent = "Sorry, this discount only applies to users who joined our Waitlist.";
    }
    e.preventDefault();
}
