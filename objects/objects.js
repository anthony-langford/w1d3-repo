var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  var totalTaxes = {};

    for (var company of companySalesData) {
      var provincialTaxes = 0;

      for (var i = 0; i < company.sales.length; i++) {
        provincialTaxes += (company.sales[i] * salesTaxRates[company.province]);
      }
      if (totalTaxes[company.name]) {
          totalTaxes[company.name] += provincialTaxes;
      }
      else {
          totalTaxes[company.name] = provincialTaxes;
      }

    }

    return totalTaxes;
}

function calculateTotalSales(salesData) {
  var totalSales = {};

  for (var company of companySalesData) {

    var sum = company.sales.reduce(function(a, b) {
      return a + b;
      }, 0);

    if (totalSales[company.name]) {
      totalSales[company.name] += sum;
    }
    else {
      totalSales[company.name] = sum;
    }

  }
  return totalSales;
}

function salesTaxReport(companySalesData, salesTaxRates) {
  var salesObject = calculateTotalSales(companySalesData);
  var taxObject = calculateSalesTax(companySalesData, salesTaxRates);
  var finalObject = {};

  for (var i = 0; i < companySalesData.length; i++) {
    if (!finalObject.hasOwnProperty(companySalesData[i]).name) {
      finalObject[companySalesData[i].name] = {totalSales: salesObject[companySalesData[i].name], totalTaxes: taxObject[companySalesData[i].name]};
    }
  }
  return finalObject;
}

var results = salesTaxReport(companySalesData, salesTaxRates);