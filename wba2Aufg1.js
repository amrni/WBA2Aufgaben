/*************************************************************************************************

Schreiben sie ein Programm in Node.js, das die Datei wolkenkratzer.json ausliest und die darin
enthaltene Liste von Wolkenkratzern in folgender Form auf der Konsole ausgibt:

Name: Burj Khalifa
Stadt: Dubai
Höhe: 828m
--------------------
Name: Shanghai Tower
Stadt: Shanghai
Höhe: 632m
--------------------
...

Verwenden sie zum Auslesen der Datei die oben genannten asynchronen Funktionen des fs-Moduls.

*************************************************************************************************/



var fs = require('fs'); //File System einbinden(ermöglicht Asynchronität)

fs.readFile(__dirname+"/wolkenkratzer.json", function(err, data){ //Daten einlesen

    if (err) throw err;
	
	var tmp = data.toString(); //Binärdaten in String umwandeln
	//console.log(tmp); //test
	var obj = JSON.parse(tmp); //JSON-String in Javascript-Objekt umwandeln
	
	console.log('\n');
	//Objekt auslesen
	for ( var i=0; i < obj.wolkenkratzer.length; i++){
		console.log('Name: ' + obj.wolkenkratzer[i].name);
		console.log('Stadt: ' + obj.wolkenkratzer[i].stadt);
		console.log('Höhe: ' + obj.wolkenkratzer[i].hoehe);
		console.log('---------------------------');
	}
});


