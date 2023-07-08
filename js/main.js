const burger = document.getElementById("burger");
const navMenu = document.getElementById("nav-menu");
burger.addEventListener("click", function () {
  burger.classList.toggle("change");
  navMenu.classList.toggle("open");
});

const sponsorsForm = document.getElementById("sponsorsForm");
if (sponsorsForm) {
  sponsorsForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const first_name = document.getElementById("first_name").value;
    const last_name = document.getElementById("last_name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const business_name = document.getElementById("business_name").value;

    fetch("https://tedxfuta.herokuapp.com/partners_form", {
      method: "POST",
      body: JSON.stringify({
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone: phone,
        business_name: business_name,
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        "X-CSRFToken":
          "iAiX7PfFfpMhPcbz9712GdBnk08A9oljxChVjad8Ku5OxjdgQjpqwJHXEcoM0fw3",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        // console.log(response.data);
        alert("You have successfully submitted the form");
      })
      .catch((error) => {
        console.log(error);
        alert("Invalid submission. Please Check your Fields");
      });

    sponsorsForm.reset();
  });
}

const ticketForm = document.getElementById("ticketForm");
if (ticketForm) {
  ticketForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const full_name = document.getElementById("full_name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const occupation = document.getElementById("occupation").value;
    const no_of_ticket = 1;


    const amount =  3145 * no_of_ticket;



    var handler = PaystackPop.setup({
     key: "pk_live_c669857beaa96ab7bd7619f4664a881d893669f4",
      email: email,
      amount: amount * 100,
      ref: "TEDx" + Date.now(),
      metadata: {
        custom_fields: [
          {
            display_name: full_name,
            variable_name: full_name,
            value: phone,
          },
        ],
      },
      callback: function (response) {
        //Log this information
        var message = response.message;
        var status = response.status;
        var trans = response.trans;
        var transaction = response.transaction;
        var reference = response.reference;
        var trxref = response.trxref;
      },
      onClose: function () {},
    });

    handler.openIframe();

    fetch("https://tedxfuta.herokuapp.com/ticket_form", {
      method: "POST",
      body: JSON.stringify({
        full_name: full_name,
        email: email,
        phone: phone,
        occupation: occupation,
        no_of_ticket: 1,
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        "X-CSRFToken":
          "BSDi3XXpkHSOF3YJ6W6VzwL2LTTmBLeiQUCgfiVSPMblna0qN8ujp2RC559ysCp2",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response.data);
        alert("You have successfully submitted the form");
      })

      .catch((error) => {
        console.log(error);
        alert("Invalid submission. Please Check your Fields");
      });

    ticketForm.reset();
  });
}


