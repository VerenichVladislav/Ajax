$(document).ready(function() {
    $.ajax({
        url : 'GetAllMatchesServlet',
        beforeSend: function () {
            $('#wait').append($('<p>Please, wait</p>'));
        },
        success : function(responseText) {
            $('#wait').css('display', 'none');
            var json = '{"date":"11.03.2018","team1":"Real Madrid","team2":"Juventus"}';
            var json2 = '{"date":"11.03.2018","team1":"Sevilla","team2":"FC Bayern Munchen"}';
            var json3 = '{"date":"24.03.2018","team1":"Roma","team2":"Sevilla"}';
            var json4 = '{"date":"28.03.2018","team1":"Inter","team2":"Dinamo"}';
            var json5 = '{"date":"28.03.2018","team1":"Egypt","team2":"Spain"}';
            var array = [json, json2, json3, json4, json5];
            for (var i = 0; i < array.length; i++) {
                $('#matches').append('<tr id="match'+i+'">');
                json = JSON.parse(array[i]);
                for (var id in json) {
                    $('#match' + i).append($("<td>" + json[id] + "</td>"));
                }
                $('#match' + i).append('</tr>');
            }
        }
    });
});

$(document).ready(function () {
    $('#selectChampionship').change(function () {

        $.ajax({
            url: 'GetAllMatchesServlet',
            data: {championship : $('#selectChampionship').val()},
            beforeSend: function () {
                $('#matches tr').remove();
            },
            success: function (responseText) {
                var json = '{"date":"11.03.2018","team1":"Real Madrid","team2":"Juventus"}';
                var json2 = '{"date":"11.03.2018","team1":"Sevilla","team2":"FC Bayern Munchen"}';
                var json3 = '{"date":"24.03.2018","team1":"Roma","team2":"Sevilla"}';
                var array = [json, json2, json3];
                for (var i = 0; i < array.length; i++) {
                    $('#matches').append('<tr id="match'+i+'">');
                    json = JSON.parse(array[i]);
                    for (var id in json) {
                        $('#match' + i).append($("<td>" + json[id] + "</td>"));
                    }
                    $('#match' + i).append('</tr>');
                }
            }
        });
    });
});