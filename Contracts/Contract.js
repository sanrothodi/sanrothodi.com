console.log("I'm coding, mf!")



//Collapsible
  var coll = document.getElementsByClassName("collapsible");

  for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  };

// Fill in contract variables

// My info
let nameContractor = document.getElementById('contractor-name');
var myName = 'Sanro Thodi';
let addressContractor = document.getElementById('contractor-address');
var myAddress = 'This will be shared once we sign the contract ;D';
let phoneContractor = document.getElementById('contractor-phone');
var myPhone = '+44 7395 634050';
let emailContractor = document.getElementById('contractor-email');
var myEmail = 'sanrothodi@protonmail.com';

// Inputs
let nameInputClient = document.getElementById('name-input-client');
let addressInputClient = document.getElementById('address-input-client');
let countryCode = document.getElementById('country-code');
let phoneInputClient = document.getElementById('phone-input-client');
let emailInputClient = document.getElementById('email-input-client');
let startDate = document.getElementById('start-date');
let endDate = document.getElementById('end-date');

// Client's info
let nameClient = document.getElementById('client-name');
let addressClient = document.getElementById('client-address');
let phoneClient = document.getElementById('client-phone');
let emailClient = document.getElementById('client-email');
let commencementDate = document.getElementById('agreement-commence-date');
let terminationDate = document.getElementById('agreement-termination-date');

// Signatures and other info
let today = new Date();
let effectiveDate = document.getElementById('effective-date');
let workingDays = document.getElementById('work-days');
let dateOfSignature = document.getElementById('client-date-signed');
let dateSigned = document.getElementsByClassName('date-signed');
let nameClientSigned = document.getElementById('client-name-signed');
let nameContractorSigned = document.getElementById('contractor-name-signed');
let approxPrice = document.getElementById('payment-amount')

//Rates
// let selectedRate = function () {
//   switch () {
//
//   }
// }
let baseRate = 250;
let weddingHalfDay = 600;
let weddingFullDay = 1200;


// Rendered contract
var renderedContract = document.getElementsByClassName('contract-button');

for (var i =0; i < renderedContract.length; i++) {
  renderedContract[i].addEventListener('click', function() {

    //Contractor info
    nameContractor.innerHTML = myName;
    addressContractor.innerHTML = myAddress;
    phoneContractor.innerHTML = myPhone;
    emailContractor.innerHTML = myEmail;

    // Client's info
    nameClient.innerHTML = nameInputClient.value;
    addressClient.innerHTML = addressInputClient.value;
    phoneClient.innerHTML = '+' + countryCode.value + ' ' + phoneInputClient.value;
    emailClient.innerHTML = emailInputClient.value;

    // Dates
    effectiveDate.innerHTML = today.toLocaleDateString();
    commencementDate.innerHTML = new Date (startDate.value).toLocaleDateString();
    terminationDate.innerHTML = new Date (endDate.value).toLocaleDateString();

    var amountOfDays = parseInt(endDate.value.slice(endDate.value.length -2, endDate.value.length)) - parseInt(startDate.value.slice(startDate.value.length - 2, startDate.value.length)) + 1;
    workingDays.innerHTML = amountOfDays;

    // Price
    approxPrice.innerHTML = '£ ' + (amountOfDays*baseRate) + ' GBP' + '<br />' + 'This rate is an approximate on how much will the service cost based on the day(s) of work provided and a base rate, prices may vary depending on the specifics of the job and whichever the goal of the Client might be in regards to the Service. Please, contact me by email, and we can discuss further details.'

    // Signatures info
    nameClientSigned.innerHTML = nameInputClient.value.toUpperCase();
    nameContractorSigned.innerHTML = myName.toUpperCase();
    for (var i = 0; i < dateSigned.length; i++) {
      dateSigned[i].innerHTML = today.toLocaleDateString();
    }

    //Render Contract

    this.classList.toggle('active');
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px'
    }
  });
};

// Export to PDF

import { jsPDF } from "jspdf";

var printPDF = document.getElementById('print-to-pdf');

printPDF.addEventListener('click',

function convertToPDF() {


  var doc = new jsPDF();
  var contractToPrint = document.getElementById('contract-to-pdf').innerHTML;

  // Handler to format the content
  var formatContent = {
    '#endofPDF': function (element, renderer) {
      return true;
    }
  };

  // Set source and margins
  doc.fromHTML(
    contractToPrint,
    15,
    15,
    {
      'width': 170,
      'elementHandlers': formatContent
    }
  );

  // Save the PDF
  doc.save(nameClient + ' contract.pdf')
}
);







//Scroll up
  var scrollup = document.getElementById("top");

  function scrollToTop() {
    scrollup.scrollIntoView({ behavior: 'smooth', block: "start", inline: "nearest"});
  }
