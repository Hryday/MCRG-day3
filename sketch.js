var hypnoticBall, database;
var position;
var gameState, playerCount, allPlayers;
var player1, player2, player3, player4, players;
var canvas;

function setup(){
  database = firebase.database();
  console.log(database);
  canvas=createCanvas(displayWidth, displayHeight);
}

function draw(){
  background("white");
}

