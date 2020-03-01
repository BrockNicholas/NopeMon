
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


