
function blink()
{
    tile = Math.ceil(Math.random()*16).toString();
    document.getElementById(tile).style.background = "Red";
    setTimeout(function()
    {
        document.getElementById(tile).style.background = "#978fa0"},500);
    

        assigned_order.push(tile);
        temp_assigned_order = assigned_order;
      
}

var assigned_order = [];
var clicked_order = [];
var tile;
var temp_assigned_order;
var score = 0;
alert("Press any key to start the game");

document.addEventListener('keypress',blink);

document.addEventListener('click',function(e){;
    if(temp_assigned_order.includes(e.target.id))
    {
        temp_assigned_order = temp_assigned_order.filter(item => item !== e.target.id);
    }
    else
    {
        alert("You lost with a score of " +   score + " Press any key to play again");
        assigned_order = [];
        clicked_order = [];
        score = 0;
    }
    if(temp_assigned_order.length == 0)
    {
        score ++;
        blink();
    }
    
});
