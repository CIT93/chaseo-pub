import { renderTbl } from "./render.js";
import {determineHouseholdPts, determineHouseSizePts} from "./cfp.js"
import {FORM, FNAME, LNAME, SUBMIT} from "./global.js"
import {saveLS, cfpData} from "./storage.js"

  const  start = function(first, last, houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseholdPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push({
    firstName: first,
    lastName: last,
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total,
  });
}

renderTbl(cfpData);

  const validateField = function(event) {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);

  if (field === '') {
      fieldError.textContent = `${fieldId} is required`;
      event.target.classList.add('invalid');
  } else {
      fieldError.textContent = '';
      event.target.classList.remove('invalid');
  }
};

// Attach blur event listeners
FNAME.addEventListener('blur', validateField);
LNAME.addEventListener('blur', validateField);


FORM.addEventListener('submit', function (e) {
  e.preventDefault();
  if (FNAME.value !== '' && LNAME.value !== '') {
    SUBMIT.textContent = '';
    start(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
 } else {
   SUBMIT.textContent = "Form requires first name and last name";
 }
 
});

//rest operator
// const add2 = function(...a) {
//   return 2 + a[3];
// }

// const result = add2(1, 2, 3, 4);

//arrow function
const add2 = a => 2 + a;

const result = add2(50);
console.log(result);

//if a1>??

//IIFE

// const a = 3;

// (function(){
//   console.log("inside IIFE ")
// })();