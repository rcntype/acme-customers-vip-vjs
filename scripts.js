const customers = [
  { id: 1, name: 'moe', email: 'moe@gmail.com', isVIP: true, dateJoined: '07/05/2015'},
  { id: 2, name: 'larry', isVIP: true, email: 'larry@gmail.com', dateJoined: '01/01/2019'},
  { id: 4, name: 'shep', email: 'shep@gmail.com', dateJoined: '03/19/2000'},
 ];

const customersList = document.querySelector('.customers-list');
const addCustomerForm = document.querySelector('form');
const validationErrors = document.querySelector('.validation-errors');

customers.forEach( (customer) => {
  customer.dateJoined = new Date(customer.dateJoined);
});



const render = () => {
  customersList.innerHTML = "";
  customers.sort( (a, b) => a.dateJoined - b.dateJoined );
  
  customers.forEach( (customer, ind) => {
    const { isVIP, name, dateJoined } = customers[ind];
    const diff = new Date() - customer.dateJoined;
    const oneYear = 1000 * 60 * 60 * 24 * 365;

    customersList.innerHTML += `
    <li ${isVIP ? "class='vip'" : ""}>
      ${name} Joined on ${dateJoined.toLocaleDateString()}. Has been a customer for ${(diff/oneYear).toFixed(2)} years.
    </li>`;
  });
}

const addCustomer = (customer) => {
  customers.push(customer);
  render();
}

addCustomerForm.addEventListener ('submit', (e) => {
  const name = addCustomerForm.querySelector('input[name="customerName"]').value;
  const dateJoined = addCustomerForm.querySelector('input[name="customerJoinDate"]').value;
  const isVIP = addCustomerForm.querySelector('input[type="checkbox"]').checked;

  if (!name) {
    console.log(123);
    validationErrors.innerHTML +=  `<li>Name required</li>`;
  }
  if (!dateJoined) {

  }
  if (name && dateJoined) {
    validationErrors.innerHTML = "";
    const customer = {name, dateJoined: new Date(dateJoined), isVIP};

    addCustomer(customer);
  }

  

  e.preventDefault();
});

const dateCalculation = (customer) => {
  const now = new Date();
  const customerJoined = customer.dateJoined;
}

render();
