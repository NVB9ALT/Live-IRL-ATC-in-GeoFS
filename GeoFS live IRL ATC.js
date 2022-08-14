//thanks to AriakimTaiyo for the distance and LLA stuff

function playLiveATC() {
let kmiaLLA = [[25.796182023339707, -80.28454441042501, 11.15922051437477]];

function distance(pos1, pos2) {
  var a = pos2[0] - pos1[0];
var b = pos2[1] - pos1[1];
var c = pos2[2] - pos1[2];
return Math.sqrt(a * a + b * b + c * c)
};

groundWindow = window.open("https://s1-fmt2.liveatc.net/kmia3_twr_1183","popUpWindow","height=50,width=150,left=250,top=0,resizable=no,scrollbars=no,toolbar=no,menubar=no,location=no,directories=no, status=no");
approach1Window = window.open("https://s1-bos.liveatc.net/kmia3_app_12485","popUpWindow","height=50,width=150,left=250,top=0,resizable=no,scrollbars=no,toolbar=no,menubar=no,location=no,directories=no, status=no");
approach2Window = window.open("https://s1-fmt2.liveatc.net/kmia3_app_1205", "popUpWindow","height=50,width=150,left=250,top=0,resizable=no,scrollbars=no,toolbar=no,menubar=no,location=no,directories=no, status=no");

function checkATC() {
console.log("YEET");
kmiaLLA.forEach(function(e){
   if (distance(geofs.aircraft.instance.llaLocation, e) < 500) {
	   if (geofs.animation.values.haglFeet < 1000) {
		approach1Window.close()
		approach2Window.close()
		groundWindow.open()
       }
		else {
		groundWindow.close()
		approach1Window.open()
		approach2Window.open()
         }
	   }
   })
};

let repeatChecks = setInterval(function(){
checkATC()
   }, 1000);
}
