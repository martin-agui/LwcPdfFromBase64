/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 05-29-2021
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
 * Modifications Log 
 * Ver   Date         Author                               Modification
 * 1.0   05-29-2021   ChangeMeIn@UserSettingsUnder.SFDoc   Initial Version
**/
public with sharing class PdfGenerator {
    @AuraEnabled
    public static List<Contact> getContactsController(){
        return [SELECT Id , FirstName , LastName
                FROM Contact
                LIMIT 1000];
    }
    @AuraEnabled
    public static string getStringBase64(String recordId){
        List<Account> cuentas = [SELECT Factura_Base64__c 
        FROM Account 
        WHERE Id =: recordId];
        return cuentas[0].Factura_Base64__c;
    }
}