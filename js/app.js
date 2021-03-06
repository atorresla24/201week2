'use strict'

let salesSection = document.getElementById('sales');
let table = document.getElementById('salesTable');
let form = document.getElementById('newStore');

let hours= ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']


//got from mdn
function randCust(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let storeSales = [];

function Location(store, minCust, maxCust, avgCookies) {
    this.store = store;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookies = avgCookies;
    this.total = 0;
    this.numCookies = 0;
    this.cookieArray = [];
    this.getTotal();

    storeSales.push(this);
  };

  Location.prototype.getTotal = function(){
    for (let i = 0; i < hours.length; i++) {
      let numCookiesSold = Math.ceil(randCust(this.minCust, this.maxCust) * this.avgCookies);
      this.total += numCookiesSold;
      this.cookieArray.push(numCookiesSold);    
    }
  };


Location.prototype.render = function(){
  let trOneElem = document.createElement('tr');
  salesTable.appendChild(trOneElem);
  let dataCell = document.createElement('td');
  dataCell.textContent = this.store;
  trOneElem.appendChild(dataCell);
  for(let i = 0; i < hours.length; i++){
    dataCell = document.createElement('td');
    dataCell.textContent = this.cookieArray[i];
    trOneElem.appendChild(dataCell);
  }
  let dataTotal = document.createElement('td');
  dataTotal.textContent = this.total;
  trOneElem.appendChild(dataTotal);
};

function renderData(){
  for (let i = 0; i < 5; i++){
    storeSales[i].render();
  }
};

function tHeader(){
  let row = document.createElement('tr');
  salesTable.appendChild(row);
  let th1Elem = document.createElement('th');
  row.appendChild(th1Elem);
  th1Elem.textContent = 'Store Location';
  for (let i = 0; i < hours.length; i++){
    let th1Elem = document.createElement('th');
    row.appendChild(th1Elem);
    th1Elem.textContent = `${hours[i]}`;
  }
  let thTotal = document.createElement('th');
  row.appendChild(thTotal);
  thTotal.textContent = 'Daily Total';
};

function footer(){
  let footElem = document.createElement('tfoot');
  salesTable.appendChild(footElem);
  let footRow = document.createElement('tr');
  footElem.appendChild(footRow);

  let tdElem = document.createElement('td');
  tdElem.textContent = 'Hourly Totals';
  footRow.appendChild(tdElem);

  for(let i = 0; i < hours.length; i++){
    let fTotal = 0;
    for (let j = 0; j < storeSales.length; j++){
      fTotal += storeSales[j].cookieArray[i]
    }
    let dataCell = document.createElement('td');
    dataCell.textContent = `${fTotal}`
    footRow.appendChild(dataCell);
  }
}

new Location('Seattle', 23, 65, 6.3);
new Location('Tokyo', 3, 24, 1.2);
new Location('Dubai', 11, 38, 3.7);
new Location('Paris', 20, 38, 2.3);
new Location('Lima', 2, 16, 4.6);
tHeader();
//console.log(storeSales);
renderData();
footer();

function doSubmit(event){
  event.preventDefault();

  let storeName = event.target.storeName.value;
  let minCust = +event.target.minCust.value;
  let maxCust = +event.target.maxCust.value;
  let avgCookies = +event.target.avgCookies.value;

  let newStore = new Location(storeName, minCust, maxCust, avgCookies);

  //newStore.randCust();
  newStore.getTotal();
  newStore.render();
  //newStore.renderData();
}

newStore.addEventListener('submit', doSubmit);


//Objects 

//let seattle = {
  //store: 'Seattle',
  //minCust: 23,
  //maxCust: 65,
  //avgCookies: 6.3,
  //total: 0,
  //cookieArray: [],

    //getAvgCookiePerHour: function(){
      //for (let i = 0; i < hours.length; i++){
        //let custNum = randCust(this.minCust, //this.maxCust); 
        //let cookieTotal = Math.ceil(custNum * this.avgCookies);
        //this.cookieArray.push(cookieTotal);
        //this.total += cookieTotal;
   //   }
 //   },
    // DOM MANIPULATION
    //render: function(){
      //let articleElem = document.createElement('article');
      //salesSection.appendChild(articleElem);

      //let h2Elem = document.createElement('h2');
      //h2Elem.textContent = this.store;
      //articleElem.appendChild(h2Elem);

      //let pElem = document.createElement('p');
      //pElem.textcontent = `${this.avgCookiePerHour}`;
      //articleElem.appendChild(pElem);

      //let ulElem = document.createElement('ul');
      //pElem.appendChild(ulElem);

      //for (let i = 0; i < hours.length; i++){
        //let liElem = document.createElement('li');
        //liElem.textContent = `${hours[i]}: ${this.cookieArray[i]} cookies`;
        //ulElem.appendChild(liElem);
      //}
      //let cookieTotal = document.createElement('li');
      //cookieTotal.textContent = `Total: ${this.total} cookies`;
      //ulElem.appendChild(cookieTotal);
    //}
//}


//console.log(seattle);

//seattle.getAvgCookiePerHour();  
//seattle.render();

//let tokyo = {
  //store: 'Tokyo',
  //minCust: 3,
  //maxCust: 24,
  //avgCookies: 1.2,
  //total: 0,
  //cookieArray: [],

    //getAvgCookiePerHour: function(){
      //for (let i = 0; i < hours.length; i++){
        //let custNum = randCust(this.minCust, this.maxCust); 
        //let cookieTotal = Math.ceil(custNum * this.avgCookies);
        //this.cookieArray.push(cookieTotal);
        //this.total += cookieTotal;
      //}
    //},
    // DOM MANIPULATION
    //render: function(){
      //let articleElem = document.createElement('article');
      //salesSection.appendChild(articleElem);

      //let h2Elem = document.createElement('h2');
      //h2Elem.textContent = this.store;
      //articleElem.appendChild(h2Elem);

      //let pElem = document.createElement('p');
      //pElem.textcontent = `${this.avgCookiePerHour}`;
      //articleElem.appendChild(pElem);

      //let ulElem = document.createElement('ul');
      //pElem.appendChild(ulElem);

      //for (let i = 0; i < hours.length; i++){
        //let liElem = document.createElement('li');
        //liElem.textContent = `${hours[i]}: ${this.cookieArray[i]} cookies`;
        //ulElem.appendChild(liElem);
      //}
      //let cookieTotal = document.createElement('li');
      //cookieTotal.textContent = `Total: ${this.total} cookies`;
      //ulElem.appendChild(cookieTotal);
    //}
//}


//console.log(tokyo);

//tokyo.getAvgCookiePerHour();  
//tokyo.render();

//let dubai = {
  //store: 'Dubai',
  //minCust: 11,
  //maxCust: 38,
  //avgCookies: 3.7,
  //total: 0,
  //cookieArray: [],

    //getAvgCookiePerHour: function(){
      //for (let i = 0; i < hours.length; i++){
        //let custNum = randCust(this.minCust, this.maxCust); 
        //let cookieTotal = Math.ceil(custNum * this.avgCookies);
        //this.cookieArray.push(cookieTotal);
        //this.total += cookieTotal;
      //}
    //},
    // DOM MANIPULATION
    //render: function(){
      //let articleElem = document.createElement('article');
      //salesSection.appendChild(articleElem);

      //let h2Elem = document.createElement('h2');
      //h2Elem.textContent = this.store;
      //articleElem.appendChild(h2Elem);

      //let pElem = document.createElement('p');
      //pElem.textcontent = `${this.avgCookiePerHour}`;
      //articleElem.appendChild(pElem);

      //let ulElem = document.createElement('ul');
      //pElem.appendChild(ulElem);

      //for (let i = 0; i < hours.length; i++){
        //let liElem = document.createElement('li');
        //liElem.textContent = `${hours[i]}: ${this.cookieArray[i]} cookies`;
        //ulElem.appendChild(liElem);
      //}
      //let cookieTotal = document.createElement('li');
      //cookieTotal.textContent = `Total: ${this.total} cookies`;
      //ulElem.appendChild(cookieTotal);
    //}
//}


//console.log(dubai);

//dubai.getAvgCookiePerHour();  
//dubai.render();

//let paris = {
  //store: 'Paris',
  //minCust: 20,
  //maxCust: 38,
  //avgCookies: 2.3,
  //total: 0,
  //cookieArray: [],

    //getAvgCookiePerHour: function(){
      //for (let i = 0; i < hours.length; i++){
        //let custNum = randCust(this.minCust, this.maxCust); 
        //let cookieTotal = Math.ceil(custNum * this.avgCookies);
        //this.cookieArray.push(cookieTotal);
        //this.total += cookieTotal;
      //}
    //},
    // DOM MANIPULATION
    //render: function(){
      //let articleElem = document.createElement('article');
      //salesSection.appendChild(articleElem);

      //let h2Elem = document.createElement('h2');
      //h2Elem.textContent = this.store;
      //articleElem.appendChild(h2Elem);

      //let pElem = document.createElement('p');
      //pElem.textcontent = `${this.avgCookiePerHour}`;
      //articleElem.appendChild(pElem);

      //let ulElem = document.createElement('ul');
      //pElem.appendChild(ulElem);

      //for (let i = 0; i < hours.length; i++){
        //let liElem = document.createElement('li');
        //liElem.textContent = `${hours[i]}: ${this.cookieArray[i]} cookies`;
        //ulElem.appendChild(liElem);
      //}
      //let cookieTotal = document.createElement('li');
      //cookieTotal.textContent = `Total: ${this.total} cookies`;
      //ulElem.appendChild(cookieTotal);
    //}
//}


//console.log(paris);

//paris.getAvgCookiePerHour();  
//paris.render();

//let lima = {
  //store: 'Lima',
  //minCust: 2,
  //maxCust: 16,
  //avgCookies: 4.6,
  //total: 0,
  //cookieArray: [],

    //getAvgCookiePerHour: function(){
      //for (let i = 0; i < hours.length; i++){
        //let custNum = randCust(this.minCust, this.maxCust); 
        //let cookieTotal = Math.ceil(custNum * this.avgCookies);
        //this.cookieArray.push(cookieTotal);
        //this.total += cookieTotal;
      //}
    //},
    // DOM MANIPULATION
    //render: function(){
      //let articleElem = document.createElement('article');
      //salesSection.appendChild(articleElem);

      //let h2Elem = document.createElement('h2');
      //h2Elem.textContent = this.store;
      //articleElem.appendChild(h2Elem);

      //let pElem = document.createElement('p');
      //pElem.textcontent = `${this.avgCookiePerHour}`;
      //articleElem.appendChild(pElem);

      //let ulElem = document.createElement('ul');
      //pElem.appendChild(ulElem);

      //for (let i = 0; i < hours.length; i++){
        //let liElem = document.createElement('li');
        //liElem.textContent = `${hours[i]}: ${this.cookieArray[i]} cookies`;
        //ulElem.appendChild(liElem);
      //}
      //let cookieTotal = document.createElement('li');
      //cookieTotal.textContent = `Total: ${this.total} cookies`;
      //ulElem.appendChild(cookieTotal);
    //}
//}


//console.log(lima);

//lima.getAvgCookiePerHour();  
//lima.render();

