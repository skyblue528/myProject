$(document).ready(function() {
    var avatars = [
        'hellokitty1.png', 'helloKitty2.png', 'helloKitty3.png', 'minion.png', 'minion2.png'
    ];

    if ($("#player-template").length > 0) {
        var source = $("#player-template").html();
        var template = Handlebars.compile(source);
        var html = template({
            player_number: 1,
            name: 'Julia',
            image_url: avatars[4]
        });

        $('#player1').append(html);
        var html = template({
            player_number: 2,
            name: 'David',
            image_url: avatars[1]
        });

        $('#player2').append(html);
    }

    if ($("#modal-template").length > 0) {
        var source = $("#modal-template").html();
        var template = Handlebars.compile(source);
        var html = template({});
        $('body').append(html);
    }

    function updateBackgroundImage(playerNumber, imageUrl) {
        var html = '';
        if ($('#player-bg-template').length > 0) {
            var source = $("#player-bg-template").html();
            var template = Handlebars.compile(source);

            html = template({
                player_number: playerNumber,
                image_url: imageUrl
            });
        }

        $('#player' + playerNumber +'-style').html(html);
    }

    // Clicking on select avatar should set the player number and show modal
    var selectedPlayer = 1;
    $('.select-avatar-btn').on('click', function() {
        selectedPlayer = $(this).data('player-number');
        $('#avatar-select-modal').modal();
    });

    // Select Avatar click should change player's image and close the modal
    $('#avatar-select-modal a').on('click', function(){
        var imageUrl = $(this).data('img');
        $('#player' + selectedPlayer + ' img').attr('src', '/images/' + imageUrl);
        $('#avatar-select-modal').modal('hide');

        updateBackgroundImage(selectedPlayer, imageUrl);
    })
});
