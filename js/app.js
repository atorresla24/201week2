'use strict'

let salesSection = document.getElementById('sales');

let hours= ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']


//got from mdn
function randCust(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Objects 

let seattle = {
  store: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  total: 0,
  cookieArray: [],

    getAvgCookiePerHour: function(){
      for (let i = 0; i < hours.length; i++){
        let custNum = randCust(this.minCust, this.maxCust); 
        let cookieTotal = Math.ceil(custNum * this.avgCookies);
        this.cookieArray.push(cookieTotal);
        this.total += cookieTotal;
      }
    },
    // DOM MANIPULATION
    render: function(){
      let articleElem = document.createElement('article');
      salesSection.appendChild(articleElem);

      let h2Elem = document.createElement('h2');
      h2Elem.textContent = this.store;
      articleElem.appendChild(h2Elem);

      let pElem = document.createElement('p');
      pElem.textcontent = `${this.avgCookiePerHour}`;
      articleElem.appendChild(pElem);

      let ulElem = document.createElement('ul');
      pElem.appendChild(ulElem);

      for (let i = 0; i < hours.length; i++){
        let liElem = document.createElement('li');
        liElem.textContent = `${hours[i]}: ${this.cookieArray[i]} cookies`;
        ulElem.appendChild(liElem);
      }
      let cookieTotal = document.createElement('li');
      cookieTotal.textContent = `Total: ${this.total} cookies`;
      ulElem.appendChild(cookieTotal);
    }
}


console.log(seattle);

seattle.getAvgCookiePerHour();  
seattle.render();

let tokyo = {
  store: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  total: 0,
  cookieArray: [],

    getAvgCookiePerHour: function(){
      for (let i = 0; i < hours.length; i++){
        let custNum = randCust(this.minCust, this.maxCust); 
        let cookieTotal = Math.ceil(custNum * this.avgCookies);
        this.cookieArray.push(cookieTotal);
        this.total += cookieTotal;
      }
    },
    // DOM MANIPULATION
    render: function(){
      let articleElem = document.createElement('article');
      salesSection.appendChild(articleElem);

      let h2Elem = document.createElement('h2');
      h2Elem.textContent = this.store;
      articleElem.appendChild(h2Elem);

      let pElem = document.createElement('p');
      pElem.textcontent = `${this.avgCookiePerHour}`;
      articleElem.appendChild(pElem);

      let ulElem = document.createElement('ul');
      pElem.appendChild(ulElem);

      for (let i = 0; i < hours.length; i++){
        let liElem = document.createElement('li');
        liElem.textContent = `${hours[i]}: ${this.cookieArray[i]} cookies`;
        ulElem.appendChild(liElem);
      }
      let cookieTotal = document.createElement('li');
      cookieTotal.textContent = `Total: ${this.total} cookies`;
      ulElem.appendChild(cookieTotal);
    }
}


console.log(tokyo);

tokyo.getAvgCookiePerHour();  
tokyo.render();

let dubai = {
  store: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  total: 0,
  cookieArray: [],

    getAvgCookiePerHour: function(){
      for (let i = 0; i < hours.length; i++){
        let custNum = randCust(this.minCust, this.maxCust); 
        let cookieTotal = Math.ceil(custNum * this.avgCookies);
        this.cookieArray.push(cookieTotal);
        this.total += cookieTotal;
      }
    },
    // DOM MANIPULATION
    render: function(){
      let articleElem = document.createElement('article');
      salesSection.appendChild(articleElem);

      let h2Elem = document.createElement('h2');
      h2Elem.textContent = this.store;
      articleElem.appendChild(h2Elem);

      let pElem = document.createElement('p');
      pElem.textcontent = `${this.avgCookiePerHour}`;
      articleElem.appendChild(pElem);

      let ulElem = document.createElement('ul');
      pElem.appendChild(ulElem);

      for (let i = 0; i < hours.length; i++){
        let liElem = document.createElement('li');
        liElem.textContent = `${hours[i]}: ${this.cookieArray[i]} cookies`;
        ulElem.appendChild(liElem);
      }
      let cookieTotal = document.createElement('li');
      cookieTotal.textContent = `Total: ${this.total} cookies`;
      ulElem.appendChild(cookieTotal);
    }
}


console.log(dubai);

dubai.getAvgCookiePerHour();  
dubai.render();

let paris = {
  store: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  total: 0,
  cookieArray: [],

    getAvgCookiePerHour: function(){
      for (let i = 0; i < hours.length; i++){
        let custNum = randCust(this.minCust, this.maxCust); 
        let cookieTotal = Math.ceil(custNum * this.avgCookies);
        this.cookieArray.push(cookieTotal);
        this.total += cookieTotal;
      }
    },
    // DOM MANIPULATION
    render: function(){
      let articleElem = document.createElement('article');
      salesSection.appendChild(articleElem);

      let h2Elem = document.createElement('h2');
      h2Elem.textContent = this.store;
      articleElem.appendChild(h2Elem);

      let pElem = document.createElement('p');
      pElem.textcontent = `${this.avgCookiePerHour}`;
      articleElem.appendChild(pElem);

      let ulElem = document.createElement('ul');
      pElem.appendChild(ulElem);

      for (let i = 0; i < hours.length; i++){
        let liElem = document.createElement('li');
        liElem.textContent = `${hours[i]}: ${this.cookieArray[i]} cookies`;
        ulElem.appendChild(liElem);
      }
      let cookieTotal = document.createElement('li');
      cookieTotal.textContent = `Total: ${this.total} cookies`;
      ulElem.appendChild(cookieTotal);
    }
}


console.log(paris);

paris.getAvgCookiePerHour();  
paris.render();

let lima = {
  store: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  total: 0,
  cookieArray: [],

    getAvgCookiePerHour: function(){
      for (let i = 0; i < hours.length; i++){
        let custNum = randCust(this.minCust, this.maxCust); 
        let cookieTotal = Math.ceil(custNum * this.avgCookies);
        this.cookieArray.push(cookieTotal);
        this.total += cookieTotal;
      }
    },
    // DOM MANIPULATION
    render: function(){
      let articleElem = document.createElement('article');
      salesSection.appendChild(articleElem);

      let h2Elem = document.createElement('h2');
      h2Elem.textContent = this.store;
      articleElem.appendChild(h2Elem);

      let pElem = document.createElement('p');
      pElem.textcontent = `${this.avgCookiePerHour}`;
      articleElem.appendChild(pElem);

      let ulElem = document.createElement('ul');
      pElem.appendChild(ulElem);

      for (let i = 0; i < hours.length; i++){
        let liElem = document.createElement('li');
        liElem.textContent = `${hours[i]}: ${this.cookieArray[i]} cookies`;
        ulElem.appendChild(liElem);
      }
      let cookieTotal = document.createElement('li');
      cookieTotal.textContent = `Total: ${this.total} cookies`;
      ulElem.appendChild(cookieTotal);
    }
}


console.log(lima);

lima.getAvgCookiePerHour();  
lima.render();