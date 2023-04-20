import { Component, OnInit } from '@angular/core'; 
 

@Component({
  selector: 'app-work-test',
  templateUrl: './work-test.component.html',
  styleUrls: ['./work-test.component.scss']
})
export class WorkTestComponent implements OnInit {
   
  filingType: string; 
  surcharge: number; 
  
  penalty: number; 
  saleAmount: number; 
  taxAmount: number;  
  totalAmount: number; 

  penaltyView: string; 
  taxAmountView: string;
  surchargeView: string; 
  totalAmountView: string;
  saleAmountView: string;
  month: string;
  year: string;
  
  titleTHB = " THB";
  page = 1;
  constructor( ) { }

  ngOnInit(): void {
    this.filingType = '0'; 
    this.surcharge = 0.00; 
    this.penalty = 200.00; 
    this.penaltyView = "200.00"+ this.titleTHB;
    this.saleAmount = 0.00; 
    this.taxAmount = 0.00; 
    this.taxAmountView = "0.00"+ this.titleTHB;
    this.totalAmount = 0.00; 
    this.surchargeView = "0.00"+ this.titleTHB;
    this.totalAmountView = "0.00"+ this.titleTHB;
    this.saleAmountView = "0.00"+ this.titleTHB;
    this.month = "01";
    this.year = "2023";
  } 
 

  onChangeSaleAmount(event) {   
     const sumTaxAmount = event.target.value * 0.07;
     const resultSumTaxAmount = Math.round(sumTaxAmount * 1000) / 1000; 
     const formattedNum = resultSumTaxAmount.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}) + this.titleTHB;
     this.taxAmount = resultSumTaxAmount;
     this.taxAmountView = formattedNum;

     const sumSurcharge = sumTaxAmount * 0.1;
     const resultSumSurcharge= Math.round(sumSurcharge * 1000) / 1000; 
     this.surcharge = resultSumSurcharge;
      this.surchargeView  = resultSumSurcharge.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}) + this.titleTHB;

      const resultTotalAmount= this.taxAmount + this.surcharge + this.penalty;
      this.totalAmount = resultTotalAmount; 
      this.totalAmountView  = resultTotalAmount.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}) + this.titleTHB;
      const sumSaleAmount = this.saleAmount * 1;
      this.saleAmountView = sumSaleAmount.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}) + this.titleTHB;
  }


  numberOnly(event): boolean {
    var key = window.event ? event.keyCode : event.which;
        if (event.keyCode === 8 || event.keyCode === 46) {
            return true;
        } else if (key < 48 || key > 57) {
            return false;
        } else {
            return true;
        }

  }

  onClickBackPage1() {   
    this.page = 1;
  }

  onClickBackPage2() {   
    this.page = 2;
  }

  onClickNextPage2() {   
    if (this.saleAmount <= 0) {
      alert("Input Total value of taxable");
      return;
    }
    this.page = 2;
  }
  
  onClickNextPage3() {   
    this.page = 3;
  }

  onSubmit() {   
      const data = {
        filingType: this.filingType,
        surcharge: this.surcharge,
        penalty: this.penalty,
        saleAmount: this.saleAmount,
        taxAmount: this.taxAmount,
        totalAmount: this.totalAmount,
        month: this.month,
        year: this.year
      }

      alert(JSON.stringify(data));
  }
}