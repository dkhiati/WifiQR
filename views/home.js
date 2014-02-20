var ssid = ko.observable("");
var wachtwoord = ko.observable("");
var keuze = ko.observable(0);
var beveiliging = [
	{naam: "geen",keuze:1},
	{naam: "WEP",keuze:2},
	{naam: "WPA/WPA2",keuze:3}
	];

var qrinfo = ko.observable("test");

WifiQR.home = function(){
	
	var viewModel = {
		
		Genereer: function(){
				if(keuze()==1){
					qrinfo("WIFI:T:'nopass';S:"+ssid()+";P:'';;");
				} else if(keuze()==2){
					qrinfo("WIFI:T:WEP;S:"+ssid()+";P:"+wachtwoord()+";;");
				} else if(keuze()==3){
					qrinfo("WIFI:T:WPA;S:"+ssid()+";P:"+wachtwoord()+";;");
				}
				//alert(qrinfo());
				$("#qrcode").empty();
				$("#qrcode").qrcode({
					render: "table",
					text: qrinfo()
				});
			
			
		}
	};
	return viewModel;
};