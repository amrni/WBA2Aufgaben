/*************************************************************************************************

Erweitern sie das Programm aus Aufgabe 2 so, dass die Namen, 
Städte und Höhenangaben jeweils farbig ausgegeben werden. Hierzu können sie das Modul chalk verwenden, 
welches auch im Workshop vorgestellt wurde. 
Mehr zum Chalk-Modul finden sie hier. 
Erstellen zu ihrem Programm auch eine package.json-Datei, 
welche unter anderem die Modulabhängigkeiten definiert. 
Weitere Informationen zur package.json-Datei finden sie in der NPM-Dokumentation.

*************************************************************************************************/

var fs = require('fs'); //File System einbinden(ermöglicht Asynchronität)
var chalk = require('chalk'); //chalk-Modul enbinden (für Farbgestaltung)

		


fs.readFile(__dirname+"/wolkenkratzer.json", function(err, data){ //Daten einlesen

    if (err) throw err;
	
	var tmp = data.toString(); //Binärdaten in String umwandeln
	//console.log(tmp); //test
	var obj = JSON.parse(tmp); //JSON-String in Javascript-Objekt umwandeln
	
	console.log('\n');
	//Objekt auslesen und Ausgaben farbig
	for ( var i=0; i < obj.wolkenkratzer.length; i++){
		
		console.log('Name: ' + chalk.green(obj.wolkenkratzer[i].name));
		console.log('Stadt: ' + chalk.green(obj.wolkenkratzer[i].stadt));
		console.log('Höhe: ' + chalk.yellow(obj.wolkenkratzer[i].hoehe));
		console.log('---------------------------');
	}
});