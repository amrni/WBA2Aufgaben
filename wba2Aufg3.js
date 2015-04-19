/*************************************************************************************************

Erweitern sie das Programm aus Aufgabe 2 so, dass es die Wolkenkratzer der Höhe nach sortiert, 
die sortierte Liste in der neuen Datei wolkenkratzer_sortiert.json speichert 
und sie erst danach auf der Konsole ausgibt.

Informationen zum sortieren von Arrays in Javascript finden sie beispielsweise hier.

*************************************************************************************************/

var fs = require('fs'); //File System einbinden(ermöglicht Asynchronität)
var chalk = require('chalk'); //chalk-Modul enbinden (für Farbgestaltung)
//var data;
var obj;


fs.readFile(__dirname+"/wolkenkratzer.json", function(err, data){ //Daten einlesen

    if (err) throw err;
	
	var tmp = data.toString(); //Binärdaten in String umwandeln
	//console.log(tmp); //test
	obj = JSON.parse(tmp); //JSON-String in Javascript-Objekt umwandeln
	//console.log(obj); //test
	var bla = obj.wolkenkratzer.sort(function (a, b) { //sortiere nach Höhe (aber umgekehrt ;)
 		if (a.hoehe > b.hoehe) {
  			return 1;
  		}
  		if (a.hoehe < b.hoehe) {
    		return -1;
  		}
	});
	var str = JSON.stringify(bla); //sortierte objekte in JSON-String umwandeln

	//Schreibe JSON-Datai mit Sortiertem String
	fs.writeFile(__dirname+"wolkenkratzer_sortiert.json", str, function(error){

	   if (err) throw err;

	});
	print();
});

function print(){
		
	//Objekt auslesen und Ausgabe farbig
	for ( var i=0; i < obj.wolkenkratzer.length; i++){
		
		console.log('Name: ' + chalk.green(obj.wolkenkratzer[i].name));
		console.log('Stadt: ' + chalk.green(obj.wolkenkratzer[i].stadt));
		console.log('Höhe: ' + chalk.yellow(obj.wolkenkratzer[i].hoehe));
		console.log('---------------------------');
	}
};