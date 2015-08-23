$(document).ready(function() {
    var selectedUrl = null;
    $('.modal-content a').on('click', function(){
        selectedUrl = ($(this).attr('href'));
        $('.modal-content a').removeClass('selected');
        $(this).addClass('selected');
        console.log(selectedUrl);
    })

    $('#saveP1').on('click',function(){
        console.log("selectedUrl: " +selectedUrl);

        /* var hash = {
         url :selectedUrl,
         success : function(){
         window.location.reload();
         }
         }  */

        var hash = {} // hash map
        hash.url = selectedUrl
        hash.success = function(){
            window.location.reload();
        }
        console.log("hello")

        $.ajax(hash);
    });

    var selectedP2Url = null;
    $('.modal-content a').on('click',function(){
        selectedP2Url = $(this).attr('href')
        $('.modal-content a').removeClass('selected');
        $(this).addClass('selected');

    })

    $('#saveP2').on('click', function(){
        $.ajax({
            url: selectedP2Url,
            success: function(){
                window.location.reload();
            }
        })
    });

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

        $('#players').append(html);
        var html = template({
            player_number: 2,
            name: 'David',
            image_url: avatars[1]
        });

        $('#players').append(html);
    }

    if ($("#modal-template").length > 0) {
        var source = $("#modal-template").html();
        var template = Handlebars.compile(source);
        var html = template({});
        $('#body').append(html);
    }
});