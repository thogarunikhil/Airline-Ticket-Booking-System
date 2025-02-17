const puppeteer = require("puppeteer");
const handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");
//const logoimg = require("../mailbody/Cloud9logo.png")
html_to_pdf = async ({ templateHtml, dataBinding, options }) => {
  const template = handlebars.compile(templateHtml);
  const finalHtml = encodeURIComponent(template(dataBinding));

  const browser = await puppeteer.launch({
    args: ["--no-sandbox"],
    headless: true,
  });
  const page = await browser.newPage();
  await page.goto(`data:text/html;charset=UTF-8,${finalHtml}`, {
    waitUntil: "networkidle0",
  });
  await page.pdf(options);
  await browser.close();
};
image = fs
  .readFileSync(path.resolve(__dirname + "/Cloud9logo.png"))
  .toString("base64");

const templateHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirmation Mail</title>
</head>
<body>
    <div style="
        width:100%;
        height: 100%;


       margin:auto;">
        <div class="container" style="
        background-color: #5f7ec1;
        width: 100%;
        text-align: center;
        ">
            <div style="
                    position: relative;
                    text-align: center;
                    display: flex;
                    flex-direction: row;
                    gap: 5%;
                    color: #fff;
                    background-color: #000;
                    height: 15%;">
                <img src="data:image/jpeg;base64,${image}"alt="Cloud9-Airlines" style="
                    margin-left: 20%;
                    width: 100px;
                    height: 100px;
                    padding-top: 30px;
                    padding-bottom: 30px;
                    top: 50%;
                    left: 20px;
                    ">
                <h1 style="
                    font-size: 2rem;
                    font-family: 'fantasy';
                    font-weight: 600;
                    position: absolute;
                    top: 45%;
                    left: 50%;
                    transform: translate(-50%, -50%);">Cloud9 Airlines</h1>
                
            </div>
            <div
            style="background-color: #9daac6;">
                <h2 style="
                    font-size: 1.25rem;
                    font-family: 'fantasy';
                    font-weight:800;">Ticket Confirmation</h2>
                <div style="
                        text-align: left;
                        padding-left: 30px;
                        padding-bottom: 30px;
                        ">
                    <p>
                        Dear {{name}},
                    </p>
                    <div style="
                            padding-left: 20px;">
                        <p>
                            Thank you for booking with Cloud9 Airlines. Your booking has been confirmed.
                        </p>
                        <p>
                            Your booking details are as follows:
                        </p>
                        <div style="padding-left: 30px;">
                            <p>
                                <span style="font-weight: 600;">Booking ID:</span> {{bookingId}}
                            </p>
                            <p>
                                <span style="font-weight: 600;">Flight ID:</span> {{flightId}}
                            </p>
                            <p>
                                <span style="font-weight: 600;">To:</span> {{destination}}
                            </p>
                            <p>
                                <span style="font-weight: 600;">From:</span> {{source}}
                            </p>
                            <p>
                                <span style="font-weight: 600;">Date:</span> {{date}}
                            </p>
                            <p>
                                <span style="font-weight: 600;">Class:</span> {{class}}
                            </p>
                            <p>
                                <span style="font-weight: 600;">Departs:</span> {{departs}}
                            </p>
                            <p>
                                <span style="font-weight: 600;">Arrives:</span> {{arrives}}
                            </p>
                            <p>
                                <span style="font-weight: 600;">Number of Passengers:</span> {{passengers}}
                            </p>
                            <p>
                                <span style="font-weight: 600;">Total Cost:</span> {{flight_cost}}
                            </p>
                        </div>
                        <p>
                            Thank you for choosing Cloud9 Airlines.
                        </p>
                    </div>
                    <p>
                        Regards,
                    </p>
                    <p>
                        Cloud9 Airlines
                    </p>    
                </div>
        </div>
    </div>
</body>
</html>`;

// const dataBinding={
//     name:"Vikram",
//     flightId:"AI-123",
// }

const options = {
  format: "A4",
  headerTemplate: "<p></p>",
  footerTemplate: "<p></p>",
  displayHeaderFooter: false,

  margin: {
    top: "40px",
    bottom: "0px",
  },
  printBackground: true,
  path: "mokky1.pdf",
};
//finish this and update send success email

const dataBinding = {
  name: "captian_monu",
  email: "email",
  flightId: "katika shampoo",
  source: "disney land",
  destination: "la la land",
  date: "daily",
  img: image,
};
html_to_pdf({ templateHtml, dataBinding, options });

// //module.exports={html_to_pdf};

// const puppeteer = require("puppeteer");
// const handlebars = require("handlebars");
// const fs = require("fs");
// const path = require("path");

// html_to_pdf = async ({ templateHtml, dataBinding, options }) => {
//   const template = handlebars.compile(templateHtml);
//   const finalHtml = encodeURIComponent(template(dataBinding));

//   const browser = await puppeteer.launch({
//     args: ["--no-sandbox"],
//     headless: true,
//   });
//   const page = await browser.newPage();
//   await page.goto(`data:text/html;charset=UTF-8,${finalHtml}`, {
//     waitUntil: "networkidle0",
//   });
//   await page.pdf(options);
//   await browser.close();
// };

// const options = {
//   format: "A4",
//   headerTemplate: "<p></p>",
//   footerTemplate: "<p></p>",
//   displayHeaderFooter: false,
//   margin: {
//     top: "40px",
//     bottom: "100px",
//   },
//   printBackground: true,
//   path: "invoice.pdf",
// };
// const templateHtml=
// `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Confirmation Mail</title>
// </head>
// <body>
//     <div style="
//         width:100%;
//         margin-left: auto;
//         margin-right: auto;">
//         <div class="container" style="
//         background-color: #5f7ec1;
//         width: 100%;
//         text-align: center;
//         ">
//             <div style="
//                     position: relative;
//                     text-align: center;
//                     display: flex;
//                     flex-direction: row;
//                     gap: 5%;
//                     color: #fff;
//                     background-color: #000;
//                     height: 15%;">
//                 <img src="data:image/jpeg;base64,{{img}}"alt="Cloud9-Airlines" style="
//                     margin-left: 20%;
//                     width: 100px;
//                     height: 100px;
//                     padding-top: 30px;
//                     padding-bottom: 30px;
//                     top: 50%;
//                     left: 20px;
//                     ">
//                 <h1 style="
//                     font-size: 2rem;
//                     font-family: 'fantasy';
//                     font-weight: 600;
//                     position: absolute;
//                     top: 45%;
//                     left: 50%;
//                     transform: translate(-50%, -50%);">Cloud9 Airlines</h1>

//             </div>
//             <div
//             style="background-color: #9daac6;">
//                 <h2 style="
//                     font-size: 1.25rem;
//                     font-family: 'fantasy';
//                     font-weight:800;">Ticket Confirmation</h2>
//                 <div style="
//                         text-align: left;
//                         padding-left: 30px;
//                         padding-bottom: 30px;
//                         ">
//                     <p>
//                         Dear {{name}},
//                     </p>
//                     <div style="
//                             padding-left: 20px;">
//                         <p>
//                             Thank you for booking with Cloud9 Airlines. Your booking has been confirmed.
//                         </p>
//                         <p>
//                             Your booking details are as follows:
//                         </p>
//                         <div style="padding-left: 30px;">
//                             <p>
//                                 <span style="font-weight: 600;">Booking ID:</span> {{bookingId}}
//                             </p>
//                             <p>
//                                 <span style="font-weight: 600;">Flight ID:</span> {{flightId}}
//                             </p>
//                             <p>
//                                 <span style="font-weight: 600;">To:</span> {{destination}}}
//                             </p>
//                             <p>
//                                 <span style="font-weight: 600;">From:</span> {{source}}
//                             </p>
//                             <p>
//                                 <span style="font-weight: 600;">Date:</span> {{date}}
//                             </p>
//                             <p>
//                                 <span style="font-weight: 600;">Class:</span> {{class}}}
//                             </p>
//                             <p>
//                                 <span style="font-weight: 600;">Departs:</span> {{departs}}}
//                             </p>
//                             <p>
//                                 <span style="font-weight: 600;">Arrives:</span> {{arrives}
//                             </p>
//                             <p>
//                                 <span style="font-weight: 600;">Number of Passengers:</span> {{passengers}}
//                             </p>
//                             <p>
//                                 <span style="font-weight: 600;">Total Cost:</span> {{flight_cost}}
//                             </p>
//                         </div>
//                         <p>
//                             Thank you for choosing Cloud9 Airlines.
//                         </p>
//                     </div>
//                     <p>
//                         Regards,
//                     </p>
//                     <p>
//                         Cloud9 Airlines
//                     </p>
//                 </div>
//         </div>
//     </div>
// </body>
// </html>`
