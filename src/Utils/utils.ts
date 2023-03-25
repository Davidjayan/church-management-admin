import moment from 'moment'

export const returnTemplate = (status: number, message: any, res: any) => {
  if (status == 1) {
    return res.status(200).send({ status, message })
  } else {
    return res.status(400).send({ status, message })
  }
}

export const offeringTypes = [
  'Name',
  'Tithe',
  'Offering',
  'Missionary',
  'Special Offering',
  'Baptism Offering',
  'Birthday Offering',
  'Wedding Offering',
  'Child Dedication Offering',
  'Committed Offering',
  'Building Fund',
]

export const currencyDenoScales = {
  TwoThousands: 2000,
  FiveHundreds: 500,
  TwoHundreds: 200,
  Hundreds: 100,
  Fifty: 50,
  Twenty: 20,
  Ten: 10,
  Five: 5,
  Two: 2,
  One: 1,
}

export const totalsColumnNames = [
  'TitheTotal',
  'OfferingTotal',
  'MissionaryTotal',
  'SpecialOfferingTotal',
  'BaptismofferingTotal',
  'BirthdayofferingTotal',
  'WeddingofferingTotal',
  'ChilddedicationofferingTotal',
  'CommittedofferingTotal',
  'BuildingFundTotal',
  'ChurchOffering',
  'GrandTotal',
]

export const buildHtml = (
  data: any,
  totals: any,
  fromDate: string,
  toDate?: string,
) => {
  let headerItems = ''
  let totalsitems = '<th>Totals</th>'
  let churchOffering = '<td colspan="7"></td><th colspan="2">Church Offerings</th>'
  let grandTotal = '<td colspan="7"></td><th colspan="2">Grand Total</th>'

  totalsColumnNames.forEach((col) => {
    let total = totals.reduce((prev: any, curr: any) => {
      return prev + curr[col]
    }, 0)
    if (col == 'ChurchOffering') {
      churchOffering = churchOffering + '<td colspan="2">' + total + '</td>'
    } else if (col == 'GrandTotal') {
      grandTotal = grandTotal + '<td colspan="2">' + total + '</td>'
    } else {
      totalsitems = totalsitems + '<td>' + total + ' </td>'
    }
  })

  offeringTypes.forEach((value) => {
    headerItems = headerItems + '<th>' + value + ' </th>'
  })
  let tableOnehtmlBodyTd = ''
  let tableTwoHtmlBody = ''

  data.forEach((element: any) => {
    let dataRow = ''
    offeringTypes.forEach((value) => {
      if (value !== 'Name') {
        dataRow =
          dataRow +
          `<td>${(value == element.Type ? element.Amount : 0).toString()}</td>`
      } else {
        dataRow = dataRow + `<td>${element.Name}</td>`
      }
    })
    tableOnehtmlBodyTd = tableOnehtmlBodyTd + '<tr>' + dataRow + '</tr>'
  })
  Object.entries(currencyDenoScales).forEach(([key, value]) => {
    let total = totals.reduce((prev: any, curr: any) => {
      return prev + curr[key]
    }, 0)
    tableTwoHtmlBody =
      tableTwoHtmlBody +
      `<tr><td>${value}</td><td> x </td><td>${total}</td><td> = </td><td>${
        value * total
      } </td></tr>`
  })
  const tableOnehtmlHeaderTh = `<thead><tr><th colspan='11'>JEHOVAH NISSI AG CHURCH ACCOUNTS REPORT</th></tr><tr><th colspan='11'>${
    toDate
      ? `REPORT FROM ${moment(fromDate).format('DD/MM/YYYY')} TO ${moment(
          toDate,
        ).format('DD/MM/YYYY')}`
      : `REPORT ON ${moment(fromDate).format('DD/MM/YYYY')}`
  } </th>
     </tr><tr>
      ${headerItems}
     </tr></thead>`

  const tableTwohtmlHeaderTh = ` <thead>
      <tr>
        <th colspan="5">
          DENOMINATIONS
        </th>
      </tr>
    </thead>`

  const tableOne = `<table id="t1">${tableOnehtmlHeaderTh}<tbody>${tableOnehtmlBodyTd}<tr>${totalsitems}</tr><tr>${churchOffering}</tr><tr>${grandTotal}</tr></tbody></table>`
  const tableTwo = `<table id="t2">${tableTwohtmlHeaderTh}<tbody>${tableTwoHtmlBody}</tbody></table>`

  return `<html><style>table{margin-top:4px;} table,th{border:1px solid black; border-collapse: collapse;padding:5px;} #t1 > tbody > tr > td {text-align:center;border:1px solid black;padding:5px;}#t2 > tbody > tr > td {padding:5px;}</style>${tableOne}${tableTwo}</html>`
}
