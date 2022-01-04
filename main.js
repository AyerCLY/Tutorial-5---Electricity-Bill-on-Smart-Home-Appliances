/*Electricity
Class: Electrical appliances
- Lamp 
- Washing machine
- Air-con

Operation:
	Turn on how many hrs
	How many Ws each hrs

Class: Billing
Report - How many Ws I spend each month 
*/
function Billing (_account_number, _ownername, _address){
	this.account = _account_number; 
	this.owner = _ownername;
	this.address = _address;
	this.monthly_expense = 0;
	this.monthly_w_usage = 0;
	this.appliances = {};
	this.appliancesCount = 0;

	this.addAppliances = function (_appliances) {
    	this.appliances[_appliances.app_name] = _appliances;
   	 	this.appliancesCount++;
  
  	}

  	this.getTotalWatt = function (){
  		var total = 0;
  		for (var app_name in this.appliances){
  			total += this.appliances[app_name].monthly_w_usage;
  		}
  		return total;
  	}

  	this.getReport = function (){
		var total = 0;
    	for (var app_name in this.appliances) {
      		total += this.appliances[app_name].monthly_expense;
    	}
   		return total;
   	}

   	this.printReport = function (){
   		console.log (this.owner + "'s monthly usage of Watt is " + this.getTotalWatt() + ". " + this.owner + "'s monthly electricity expense on home appliances is $"+ this.getReport() + "."  );
   	}

   	this.printBill = function (){
   		console.log ("Account number: " + _account_number + ". Address: " + _address + ". " + this.owner + "'s monthly usage of Watt is " + this.getTotalWatt() + ". " + this.owner + "'s monthly electricity expense on home appliances is $"+ this.getReport() + "."  );
   	}
	
}


function HomeAppliances (_app_name, _w_per_hr){
	this.app_name = _app_name;
	this.w_per_hr = _w_per_hr;
	this.cost_per_w = 3;
	this.monthly_w_usage = 0;
	this.monthly_expense = 0;


	this.Operation = function (_opera_hrs) {
		this.opera_hrs = _opera_hrs;
		this.monthly_w_usage = this.w_per_hr*_opera_hrs;
		this.monthly_expense = this.monthly_w_usage*this.cost_per_w;
		
	}


}


var ayer = new Billing ("001-6277277", "Ayer Cheung", "Street A");
var lamp = new HomeAppliances ("Lamp", 0.5);
var airCon = new HomeAppliances ("Air-Con", 1);
var washing_machine = new HomeAppliances ("Washing machine", 2);

ayer.addAppliances(lamp);
ayer.addAppliances(airCon);
ayer.addAppliances(washing_machine);

lamp.Operation(10);
airCon.Operation(5);
washing_machine.Operation(2);


var basic = new Billing ("002-3452561", "Basic Law", "Street B");
var lamp_b = new HomeAppliances ("Lamp", 3);
var airCon_b = new HomeAppliances ("Air-Con", 2);
var washing_machine_b = new HomeAppliances ("washing machine", 4);

basic.addAppliances(lamp_b);
basic.addAppliances(airCon_b);
basic.addAppliances(washing_machine_b);

lamp_b.Operation(10);
airCon_b.Operation(5);
washing_machine_b.Operation(2);


console.log(ayer);
console.log(basic);
ayer.printReport();
ayer.printBill();
basic.printReport();
basic.printBill();




