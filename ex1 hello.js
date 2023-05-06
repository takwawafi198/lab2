//console.log("Hello World !");
var path = require('path');
var util = require('util');
var v8 = require('v8');

//Afficher le nom du fichier courant avec util.log et path.basename
util.log( path.basename(__filename) );

//Créer un chemin avec path.join puis affichage
var dirUploads = path.join(__dirname, 'www', 'files', 'uploads');
util.log(dirUploads);

//Afficher les statistiques de l’utilisation de la mémoire avec v8.
util.log();(v8.getHeapStatistics());
