const fileInput =
document.getElementById("pdfFile");

const result =
document.getElementById("result");

const printBtn =
document.getElementById("printBtn");

const payment =
document.getElementById("payment");

let pages = 0;
let amount = 0;

fileInput.addEventListener(
"change",
async function(){

    const file = this.files[0];

    if(!file){
        return;
    }

    const buffer =
    await file.arrayBuffer();

    const pdf =
    await pdfjsLib
    .getDocument({
        data: buffer
    }).promise;

    pages = pdf.numPages;

    amount = pages * 2;

    result.innerHTML = `
        <h3>Total Pages : ${pages}</h3>
        <h3>Amount : ₹${amount}</h3>
    `;

    printBtn.style.display =
    "inline-block";
});

printBtn.addEventListener(
"click",
function(){

    result.innerHTML += `
        <h3>
        File Deleted After Printing
        </h3>
    `;

    fileInput.value = "";

    payment.innerHTML = `
        <h2>Payment</h2>

        <img
        src="paymentQR.png"
        width="250">

        <p>
        Scan QR and Pay ₹${amount}
        </p>
    `;
});