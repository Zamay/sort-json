/**
 * Created by zamaj on 11.04.2017.
 */
// Вариант с использованием ajax.
//

let urls =  'http://mockbin.com/bin/95fdbfb8-1799-4327-97fd-a955df10cdee';

// Сортируем по возрастанию title
function sortTitleUp() {
    $.ajax({
        type: 'GET',
        url: urls,
        success: function (data) {
            // можно вынести в отдельную фу-ю
            let arr = JSON.parse(data).sort(function (a, b) {
                var titleA = a.title.toLowerCase(), titleB = b.title.toLowerCase();
                return (titleA < titleB) ? -1 : 1;
            });

            printArr(arr);
        }
    })
}
// sortTitleUp();

// Сортируем по возрастанию title

function sortTitleDown() {
    $.ajax({
        type: 'GET',
        url: urls,
        success: function (data) {
            // можно вынести в отдельную фу-ю
            let arr = JSON.parse(data).sort(function (a, b) {
                var titleA = a.title.toLowerCase(), titleB = b.title.toLowerCase();
                return (titleA > titleB) ? -1 : 1;
            });

            printArr(arr);
        }
    })
}
// sortTitleDown();

function printArr(obj) {

    obj.forEach(
        function (ob) {
            // console.log(obj);
            $("body").append(`title :${ob.title} , text :${ob.text} <br>`);
        }
    )
}

