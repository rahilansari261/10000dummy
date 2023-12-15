const fs = require('fs');

// Dummy data generation function
function generateDummyData(numRecords) {
  const data = [];
  for (let i = 1; i <= numRecords; i++) {
    data.push([
      `First Name ${i}`,
      `Last Name ${i}`,
      `Account Owner ${i}`,
      `Organization ${i}`,
      `Phone ${i}`,
      'Show',
      `Email ${i}`,
      `Secondary Mail ${i}`,
      'high',
      `Organization Source ${i}`,
      `Job Title ${i}`,
      `Department ${i}`,
      `Fax Number ${i}`,
      `Tax Number ${i}`,
      `Secondary Person Name ${i}`,
      `Secondary Person Phone ${i}`,
      `Linkedin ${i}`,
      `Instagram ${i}`,
      `SkypeId ${i}`,
      `WeChat ${i}`,
      `Billing Address Line 1 ${i}`,
      `Billing Address Line 2 ${i}`,
      `Billing Country ${i}`,
      `Billing Zip Code ${i}`,
      `Billing City ${i}`,
      `Billing State Province ${i}`,
      `Shipping Address Line 1 ${i}`,
      `Shipping Address Line 2 ${i}`,
      `Shipping Country ${i}`,
      `Shipping Zip Code ${i}`,
      `Shipping City ${i}`,
      `Shipping State Province ${i}`,
    ]);
  }
  return data;
}

// Convert data to CSV format
function convertToCSV(data) {
  const header = [
    'First Name',
    'Last Name',
    'Account Owner',
    'Organization',
    'Phone',
    'Lead Visibility',
    'Email',
    'Secondary Mail',
    'Priority',
    'Organization Source',
    'Job Title',
    'Department',
    'Fax Number',
    'Tax Number',
    'Secondary Person Name',
    'Secondary Person Phone',
    'Linkedin',
    'Instagram',
    'SkypeId',
    'WeChat',
    'Billing Address Line 1',
    'Billing Address Line 2',
    'Billing Country',
    'Billing Zip Code',
    'Billing City',
    'Billing State Province',
    'Shipping Address Line 1',
    'Shipping Address Line 2',
    'Shipping Country',
    'Shipping Zip Code',
    'Shipping City',
    'Shipping State Province',
  ];
  const csvData = [header, ...data.map(row => row.map(cell => `${cell}`))];
  return csvData.map(row => row.join(',')).join('\n');
}

// Generate dummy data and convert it to CSV
const numRecords = 10000; // Specify the number of records you want
const dummyData = generateDummyData(numRecords);
const csvContent = convertToCSV(dummyData);

// Save the CSV data to a file
fs.writeFileSync('dummy_data.csv', csvContent, 'utf-8');

console.log('CSV file created: dummy_data.csv');
