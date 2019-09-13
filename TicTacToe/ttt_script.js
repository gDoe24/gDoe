$(document).ready();
 $('#dialog').dialog({ 
    autoOpen: true,
    draggable: true,
    position: {
      my: 'right',
      at: 'left-50',
      of: 'table'}
     });
    
$('#rulesBtn').click(function(){
   $('#dialog').dialog("open");
});

$('#rulesBtn').button({
  icons: {primary: "ui-icon-info"}
});
      var num;
      var ctx;
      var numId;
      var turn=1;
      var symbol;
      var winner;
      var gameOver=false;
      
      var filled;
      filled=[false, false, false, false, false, false, false, false, false];
      symbol=['','','','','','','','',''];
      winner=[[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
      
  
 
/*New Game*/
var game = function(){
document.getElementById('btn').addEventListener('click', function(e){
  location.reload(true);
});
};
game();

document.querySelector('table').addEventListener('click', function(e){

        main(e.target.id);
        });
/*Canvas Id and O/X drawing*/
var main = function(numId){
  

  switch (numId){
      
      case 'one': num=1;
        break;
      case 'two':num= 2;
        break;
      case 'three': num=3;
          break;
      case 'four': num=4;
          break;
      case 'five': num=5;
          break;
      case 'six':num= 6;
          break;
      
        case 'seven':num= 7;
          break;
      case 'eight': num=8;
          break;
      case 'nine': num=9;
          break;
     
    
    }    
      var canvas=document.getElementById(numId);
      var ctx = canvas.getContext('2d');


      if (filled[num-1]==false){
        if(gameOver==false){
         if(turn%2 != 0){
             
              (function(){
              ctx.strokeStyle = 'rgb(0,0,0)';
              ctx.beginPath();
              ctx.lineWidth=20;
              ctx.lineCap='square';
              ctx.moveTo(40,25);
              ctx.lineTo(260,125);
              ctx.moveTo(260,25);
              ctx.lineTo(40,125)

              ctx.stroke();
              ctx.closePath();
            }());
              symbol[num-1]='X';
          }
          else{
            
              (function(){
              ctx.strokeStyle = 'rgb(0,0,0)';
              ctx.beginPath();
              ctx.lineWidth=10;
              ctx.arc(150, 75, 50, 0, 2 * Math.PI,false);
              ctx.stroke();
              ctx.closePath();
            }());
          symbol[num-1]='O'; 
          }

          
          filled[num-1]=true;
          
          win();
          turn++;
          /*Draw*/
          if((turn==10) && (gameOver==false)){
            $('#result').text('Draw!');
            gameOver=true;
          }
       }
        
      }
    };
    
  
    /*Win states*/
  var win = function(){  
  var s = symbol[num-1]
    for (var i=0; i<winner.length; i++){
      if ((symbol[winner[i][0]]== s) && (symbol[winner[i][1]]==s) && (symbol[winner[i][2]]==s)){
        if (s=='X'){
          $('#result').text('Player 1 wins!');
        }
        else{
          $('#result').text('Player 2 wins!');
        }
        gameOver=true;
      }
    }
  };
  
  /*var $dialog=$('#dialog');*/
