import { LightningElement, api } from 'lwc';
import getString from '@salesforce/apex/PdfGenerator.getStringBase64';

export default class ViewPDF extends LightningElement {

    /*facturaBase64 =  atob('JVBERi0xLjQKJeLjz9MKMSAwIG9iago8PC9EZWNvZGVQYXJ'+
    'tczw8L0JsYWNrSXMxIHRydWUvUm93cyAxMTUvSyAtMS9Db2x1bW5zIDExNT4+L1R5cGUvW'+
    'E9iamVjdC9Db2xvclNwYWNlL0RldmljZUdyYXkvU3VidHlwZS9JbWFnZS9CaXRzUGVyQ29'+
    'tcG9uZW50IDEvV2lkdGggMTE1L0xlbmd0aCA2NzIvSGVpZ2h0IDExNS9GaWx0ZXIvQ0NJV'+
    'FRGYXhEZWNvZGU+PnN0cmVhbQomoHgp///'+'//yC+h3PMtzuey7LmXp///8uExN8IIIIIIMM'+
    'lcuE//'+'//+fubwwgghCO8I7wjvn7///'+'///8Q4ZcOXYwv///'+'///57DL85ARthBf///'+'//8clY'+
    '82QhHcMPH//'+'//jO8I7hBBF+d5f4RfneP//'+'///xHxEOGEFEOP//kF3LIHLICiXZ7Lc/f///'+
    'EvlxS+HNuGey+EEEfoX//'+'//hhBBHmRXPx7hQwwy7O//'+'///CCCCLszwgpLoR3IriGXBj///'+
    '+IhmbCCLkHL8KGbcf///ILuXZJzuIYeGX5F45//'+'//8IuQZczuew8n4Zd///'+'//nhYRfL4YR'+
    'fhGyLlDhBHf//'+'///8MvhHuHwsRPZ3ChBBhBBf//'+'//hYZfHccII7ncIvhhc5///'+'//xmeEFP'+
    'UEPyU///8gu5FeIZdludyVhF/nn//'+'//hl8TeEd8IIKEEEEEXYl2eBj//'+'//4ZdlyDDhhH4I'+
    'MI2RfC//'+'//wgxCncMPCL4Z6juF//'+'//8g3cPhFwgQRcjZRCh//'+'//yBDzPCCCIrhwgi7JPCO'+
    '4//'+'//4QQRdhBBBBHc5y3mfDLlPf//'+'//44YQ8u4QQRsWeYRcX//'+'//kF3DCO4Qwggggi+GFD'+
    'L8II7nf///'+'///CNsMML/C8MMIIL//'+'//+IR3JcEXw8MM/Bl+e//'+'///4Qns/BQw+FDjhw///'+
    '/+GEX8vhhxCCP0KXZcNn///+Ecgiudwp3yK8Q54GP///iQ7l3wgggz2Z5chC///8gvpEI9'+
    'iGby/hBTv//'+'//y4TLizudxDkrO4y7//'+'//+fuGGGEES47ncMRw///'+'//+EW4QUMIRhF8uQUL'+
    '///'+'//wxhBBF83h4YR3//'+'//8cg7knDy5Qp3CLv//'+'///Gdwp3DLkEecIIIII9j//'+'//iIiIiI'+
    'iP//'+'///ABABAKZW5kc3RyZWFtCmVuZG9iagozIDAgb2JqCjw8L0xlbmd0aCA2NzAvRmlsd'+
    'GVyL0ZsYXRlRGVjb2RlPj5zdHJlYW0KeJzNVd1O2zAYvc9THO0KJJo6CWnS3LmOgUxpXBw'+
    'HCcRN1gaUqU1ESpHgqfYKewAuJl5oTtGASUYbGkhzbo6s78TH5/vxlXWFkNg+iP62wHXgj'+
    'PYxX2FYry4J4hbH1rF1ZU2U5RCMiA+1sAgGjtuD4YGDAOrC2omTw0TRFOoEjE5SDh5Piyx'+
    'Gbks7tXfVV6s/4yV3B8bdfDPfdOtyiaxrbRBjDCuXywqyXW2WLQ7bVXXXR2Psgy/qCzxrM'+
    'bLP2qYcTsquq1ukJWS5KhclihPoC07P4PlGlqqWFza8keeP/JFZedlcl2Dd5g4DTNplfVO'+
    'XxsDBXy4jOUtUBG8cBCR0iGP254AyVUiKTAo7QhAYg2ihhEzOKEsessdI1w9C4oSEOJ5Hi'+
    'Pv+2hVPORO6LhKmjxUZz83yOTuiiHUNTZNcq4vgjockHLrEGRsJR0LSCCSMnFHkmW+b8x9'+
    'Cnu/w/Hw3+rwpG8yqrrp7zeEhSyLH9fb9URC+vw1MZEpSJSLX81zXM8bMuExELCISvnrrf'+
    '9NAMwVoJYzPlMDzmkmuUwMooVvI3LcOZinNEOte17XyxHQJsQl5Ah9QPr0kTNb2bwea0y2'+
    'yKBY5S3imRK5lYuh8hCT2oIeN6Gt1m1SRRr43iCeDgA24eY48FneaTBPFX9b4H0rcPCz/h'+
    '91PPFcUv0bO1oZkUpxy6FzFPKdSu5IKIzXmKWb0Pt+DBkUukKT3LFFbP7d/zbn8bs4vzfo'+
    'BQuNtLGUFlxpqX/mp/ekN4tPqFtk37PtehLRdY111N/W81mhRfakaI2e9WdVNvb7uym5do'+
    'Wowb5tFT2qqnmbk1E0739SLcrGHebnsAW71YZebrsdveR8PpR6dNMdMSORF364HXHLtBn3'+
    '5F670q/0Tll/JjAplbmRzdHJlYW0KZW5kb2JqCjUgMCBvYmoKPDwvUGFyZW50IDQgMCBSL'+
    '0NvbnRlbnRzIDMgMCBSL1R5cGUvUGFnZS9SZXNvdXJjZXM8PC9YT2JqZWN0PDwvaW1nMCA'+
    'xIDAgUj4+L1Byb2NTZXQgWy9QREYgL1RleHQgL0ltYWdlQiAvSW1hZ2VDIC9JbWFnZUldL'+
    '0ZvbnQ8PC9GMSAyIDAgUj4+Pj4vTWVkaWFCb3hbMCAwIDE3MCA2MjBdPj4KZW5kb2JqCjI'+
    'gMCBvYmoKPDwvTGFzdENoYXIgMjExL0Jhc2VGb250L0NvdXJpZXIvVHlwZS9Gb250L0VuY'+
    '29kaW5nL1dpbkFuc2lFbmNvZGluZy9TdWJ0eXBlL1R5cGUxL1dpZHRoc1s1MDAgMCA1MDA'+
    'gMCAwIDAgMCAwIDUwMCA1MDAgMCAwIDUwMCA1MDAgNTAwIDUwMCA1MDAgNTAwIDUwMCA1M'+
    'DAgNTAwIDUwMCA1MDAgNTAwIDUwMCA1MDAgNTAwIDAgMCAwIDAgMCAwIDUwMCA1MDAgNTA'+
    'wIDUwMCA1MDAgNTAwIDUwMCA1MDAgNTAwIDUwMCAwIDUwMCA1MDAgNTAwIDUwMCA1MDAgM'+
    'CA1MDAgNTAwIDUwMCA1MDAgNTAwIDAgMCA1MDAgNTAwIDAgMCAwIDAgMCAwIDUwMCA1MDA'+
    'gNTAwIDUwMCA1MDAgNTAwIDUwMCAwIDUwMCAwIDAgNTAwIDUwMCA1MDAgNTAwIDAgMCA1M'+
    'DAgNTAwIDUwMCA1MDAgNTAwIDAgMCA1MDAgNTAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCA'+
    'wIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgM'+
    'CAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCA1MDAgMCAwIDAgMCAwIDAgMCAwIDA'+
    'gMCAwIDAgMCAwIDAgMCA1MDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDUwMCAwIDAgMCA1M'+
    'DAgMCA1MDBdL0ZpcnN0Q2hhciAzMj4+CmVuZG9iago0IDAgb2JqCjw8L0lUWFQoNS4xLjA'+
    'pL1R5cGUvUGFnZXMvQ291bnQgMS9LaWRzWzUgMCBSXT4+CmVuZG9iago2IDAgb2JqCjw8L'+
    '1R5cGUvQ2F0YWxvZy9QYWdlcyA0IDAgUj4+CmVuZG9iago3IDAgb2JqCjw8L1Byb2R1Y2V'+
    'yKGlUZXh0riA1LjEuMCCpMjAwMC0yMDExIDFUM1hUIEJWQkEpL01vZERhdGUoRDoyMDE5M'+
    'DgyOTA4MTYzNy0wNCcwMCcpL0NyZWF0aW9uRGF0ZShEOjIwMTkwODI5MDgxNjM3LTA0JzA'+
    'wJyk+PgplbmRvYmoKeHJlZgowIDgKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDE1I'+
    'DAwMDAwIG4gCjAwMDAwMDE4MTkgMDAwMDAgbiAKMDAwMDAwMDkwMiAwMDAwMCBuIAowMDA'+
    'wMDAyNDI5IDAwMDAwIG4gCjAwMDAwMDE2MzkgMDAwMDAgbiAKMDAwMDAwMjQ5MiAwMDAwM'+
    'CBuIAowMDAwMDAyNTM3IDAwMDAwIG4gCnRyYWlsZXIKPDwvUm9vdCA2IDAgUi9JRCBbPGQ'+
    '0ZTE1NTg4YTFmNmNiODA3MDQ5ZGNhMGQ2ODk2YTU1PjwxMTIxYTdlYmFiMDE2MGU1ZmE5M'+
    'Tc2YzhiY2QzOTU4YT5dL0luZm8gNyAwIFIvU2l6ZSA4Pj4Kc3RhcnR4cmVmCjI2NzMKJSV'+
    'FT0YK');*///atob() decodifica una cadena de datos que ha sido codificada usando la codificación en base 64.
    @api recordId;
    base64enString;
    facturaURL;
    verFactura = false;
    showSpinner = false;

    obtenerFacturaBase64(){
        console.log('OUTPUT : ', this.recordId);
        if(this.base64enString !== ''){
        this.showSpinner = true
        getString({recordId:this.recordId}).then( result =>{
            this.base64enString = result;
        }).then(()=>{
            this.decodificarDatos();
        })
        }else{
            this.showSpinner = true;
            this.verFactura = false ;
            this.showSpinner = false;
        }
    }
    decodificarDatos(){
        let facturaString = atob(this.base64enString.replace(/\s/g, ''));
        let len = facturaString.length;
        let buffer = new ArrayBuffer(len);// LONGITUD EN BYTES
        let view= new Uint8Array(buffer);//representan un array de enteros sin signo de 8 bits. 
        for ( var i = 0 ; i < len ; i++ ){
            view[i] = facturaString.charCodeAt(i);
    }
        let blob = new Blob([view], {type:"application/pdf"});//El constructor Blob() retorna un nuevo objeto Blob . El contenido del blob consiste en la concatenación de los valores obtenidos en el parrametro array.
        this.facturaURL = URL.createObjectURL(blob);
        this.showSpinner = false;
        this.verFactura = true ;
    }

}


    /*callFactura(){
    //facturaString = atob(base64str.replace(/\s/g, '')); => si recibimos el string utilizamos esta variable
        let len = this.facturaBase64.length;
        let buffer = new ArrayBuffer(len);// LONGITUD EN BYTES
        let view= new Uint8Array(buffer);//representan un array de enteros sin signo de 8 bits. 
        for ( var i = 0 ; i < len ; i++ ){
            view[i] = this.facturaBase64.charCodeAt(i);
    }
        let blob = new Blob([view], {type:"application/pdf"});//El constructor Blob() retorna un nuevo objeto Blob . El contenido del blob consiste en la concatenación de los valores obtenidos en el parrametro array.
        this.facturaURL = URL.createObjectURL(blob);
        console.log('OUTPUT : ', this.facturaURL);
    }*/