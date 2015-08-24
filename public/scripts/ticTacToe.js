var total = 0;

function addPositionClass($board, index) {
    var i = index % 3;
    var j = Math.floor(index / 3);

    if (j == 0) {
        $board.addClass('top');
    }

    if (j == 2) {
        $board.addClass('bottom');
    }

    if (i == 2) {
        $board.addClass('right');
    }

    if (i == 0) {
        $board.addClass('left');
    }
}

$(document).ready(function () {
    for (var index = 0; index < 9; index++) {
        var $board = $('<div class="col-xs-4 board" ></div>');
        addPositionClass($board, index);

        for (var j = 0; j < 9; j++) {
            var id = index + '-' + j;
            var $piece = $('<div class="piece col-xs-4" id="' + id + '"></div>');
            $board.append($piece);
            addPositionClass($piece, j);
        }

        $('.bigBoard').append($board)
    }

    $('.piece').on('click', function () {
        // Step #1 - if piece is clicked
        var $piece = $(this);
        if ($piece.parent().hasClass('disabled')) {
            return;
        }

        if ($piece.hasClass('player1') || $piece.hasClass('player2')) {
            return;
        }

        $piece.addClass(total++ % 2 == 0 ? 'player1' : 'player2');

        // Step #2 - find winner if winner is not set
        findWinnerOfCurrentBoard($piece.parent());

        // Step #3 - Find winner of big board
        findWinnerOfBigBoard();

        // Step #4 - Disable all boards
        toggleBoards($piece.index());
    });

    if ($("#game-result-template").length > 0) {
        var source = $("#game-result-template").html();
        var template = Handlebars.compile(source);
        var html = template({});
        $('body').append(html);
    }
});

// return 0 if no winner, -1 if player 1, 1 if player 2
function findWinnerOfBoard(board) {
    var score = 0;
    for (var i = 0; i < 3; i++) {
        score = board[0][i];
        score += board[1][i];
        score += board[2][i];

        if (score == -3) {
            return -1;

        }
        if (score == 3) {
            return 1;

        }
    }

    score = 0;
    for (var i = 0; i < 3; i++) {
        score = board[i][0];
        score += board[i][1];
        score += board[i][2];

        if (score == -3) {
            return -1;
        }
        if (score == 3) {
            return 1;
        }
    }

    score = board[0][0] + board[1][1] + board[2][2];
    if (score == -3) {
        return -1;
    }
    if (score == 3) {
        return 1;
    }

    score = board[0][2] + board[1][1] + board[2][0];
    if (score == -3) {
        return -1;
    }
    if (score == 3) {
        return 1;
    }


    return 0;
}

// board - 2d array: [[1,1,1][0,1,1][-1,-1,-1]]
function isFull(board) {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (board[i][j] == 0)
                return false;
        }
    }
    return true;
}

function convertToArray($board) {
    var board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    $board.find('.piece').each(function (index) {
        var i = index % 3;
        var j = Math.floor(index / 3);
        //console.log("i am here1");
        if ($(this).hasClass('player1')) {
            board[i][j] = -1;
        }
        if ($(this).hasClass('player2')) {
            board[i][j] = 1;
        }
    });

    return board;
}

function findWinnerOfCurrentBoard($board) {
    if ($board.hasClass('player1') || $board.hasClass('player2'))
        return;

    var board = convertToArray($board);

    var winner = findWinnerOfBoard(board);
    if (winner == 1) {
        $board.addClass('player2');
    }
    else if (winner == -1) {
        $board.addClass('player1')
    }
    else {
        // No one wins if the board is full
        if (isFull(board)) {
            $board.addClass('draw');
        }
    }
}

function findWinnerOfBigBoard() {
    var board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    var totalCompleted = 0;
    $('.board').each(function (index) {
        var i = index % 3;
        var j = Math.floor(index / 3);

        if ($(this).hasClass('player1')) {
            board[i][j] = -1;
            totalCompleted++;
        }
        else if ($(this).hasClass('player2')) {
            board[i][j] = 1;
            totalCompleted++;
        }
        else if ($(this).hasClass('draw')) {
            totalCompleted++;
        }
    });

    var winner = findWinnerOfBoard(board);
    if (winner == 1) {
        $('#game-result-modal')
            .find('.modal-body').html('Player 2 Win');
        $('#game-result-modal').modal('show');
    }
    else if (winner == -1) {
        $('#game-result-modal')
            .find('.modal-body').html('Player 1 Win');
        $('#game-result-modal').modal('show');
    }
    else if (totalCompleted == 9) {
        $('#game-result-modal')
            .find('.modal-body').html('Draw');
        $('#game-result-modal').modal('show');
    }
}

function toggleBoards(pieceIndex) {
    var enableAll = false;
    $('.board').each(function (index) {
        var $board = $(this);

        //console.log($piece.index()-1  + "index: " + index);
        if (!($board.hasClass('disabled'))) {
            $board.addClass('disabled');
        }

        if ($('.bigBoard').hasClass('foundWinner')) {
            $board.addClass('disabled');
        } else if ((pieceIndex) == index) {
            // if this board is full - then enable the rest.
            var board = convertToArray($board);
            if (isFull(board)) {
                // Enable the others.
                enableAll = true;
            }
            else {
                $board.removeClass('disabled');
            }
        }
    });

    if (enableAll) {
        $('.board').each(function () {
            var $board = $(this);
            $board.removeClass('disabled');
            var board = convertToArray($board);
            if (!isFull(board)) {
                $board.removeClass('disabled');
            }
        });
    }
}
