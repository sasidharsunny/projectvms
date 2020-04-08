import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { GlobalService } from 'src/app/global.service';
const EXCEL_TYPE = 'application/vnd.openxmlformatsofficedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Component({
  selector: 'app-logbook',
  templateUrl: './logbook.component.html',
  styleUrls: ['./logbook.component.css']
})
export class LogbookComponent implements OnInit {
  seclog: any;
  constructor(private gs:GlobalService) { }

  ngOnInit() {
    this.gs.getdata().subscribe((res2)=>{
      if(res2['message']=="no data found")
      {
         alert("no data found")
      }
      else {
        this.seclog = (res2["message"])

        

      }

    });
  };

      
    









  


downloadPDF(){
 const doc = new jsPDF()
 var col=["Enter employeeid","Enter name","Enterphone","CHECK-IN","CHECK-OUT"]
 var rows=[];
 this.seclog.forEach(element=>{
 let logempid=element.logempid;
 let logename=element.logename;
 let logephone=element.logephone;
 let logcheckin=element.logcheckin;
 let logcheckout=element.logcheckout;
 let temp=[logempid,logename,logephone,logcheckin,logcheckout]
 rows.push(temp)
 })
 doc.autoTable(col,rows,{
 theme:'grid'
 })
 doc.save('first.pdf')
}




// down load excel sheet 



public downloadFile(): void {
const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.seclog);
const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames:
['data'] };
const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type:
'array' });
this.saveAsExcelFile(excelBuffer, 'excelFileName');
}
private saveAsExcelFile(buffer: any, fileName: string): void {
const data: Blob = new Blob([buffer], {type: EXCEL_TYPE});
FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() +
EXCEL_EXTENSION);
}
}
