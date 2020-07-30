
var self = this;
/*self.MyNope = GetMyNope();
/*self.EnemyNope = GetEnemyNope();
self.WhoseTurn = GetWhoseTurn();
self.IsNewMove = GetIsNewMove();*/

// Initial load
(async function(){
    var myName = await GetMyNope();
    $('#MyName').text(myName.data[0].first_name);
    
    
})()

function startGame() {

}

function getVal() {
    return Math.round(Math.random() * (50 - 0)); 
}

var moveBody = $('#MoveBody');
$('.move').click(function(){
    console.log('i was clicked');
    Attack();
})

function Attack(){
    HideMoves();        
}

function HideMoves(){                
    moveBody.replaceWith('<div id="TextBody" class="text-body"></div>');
    setTimeout(() => {
        ShowMoves();
    }, 2000);
}

function ShowMoves(){    
    console.log('rewriting');    
    var textBody = $('#TextBody');
    textBody.replaceWith(moveBody);
    $('.move').click(function(){
    console.log('i was clicked');
    Attack();
})
}


