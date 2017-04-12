/**
 * Created by zamaj on 10.04.2017.
 */
// http://mockbin.com/bin/b4971d97-86d0-4adb-a33c-ab1419f282fb
var employees = [
    {"title":"United Kingdom","text":"The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom (UK) or Britain, is a sovereign state in Europe."},
    {"title":"France","text":"France, officially the French Republic (French: R\u00e9publique fran\u00e7aise), is a unitary sovereign state comprising territory in western Europe and several overseas regions and territories."},
    {"title":"Spain","text":"Spain (Spanish: Espa\u00f1a), officially the Kingdom of Spain (Spanish: Reino de Espa\u00f1a), is a sovereign state located on the Iberian Peninsula in southwestern Europe."},
    {"title":"Germany","text":"Germany, officially the Federal Republic of Germany (German: Bundesrepublik Deutschland), is a federal parliamentary republic in western-central Europe."}
]


$(document).ready(function() {

    // Сортируем по title

    function sortTitleUp() {
        let arr = employees.sort(function (a, b) {
            var titleA = a.title.toLowerCase(), titleB = b.title.toLowerCase();
            return (titleA < titleB) ? -1 : 1;
        });

        printArr(arr);
        accord();
        del();
    }
    sortTitleUp();

    function sortTitleDown() {
        let arr = employees.reverse();

        printArr(arr);
        accord();
        del();
    }

    // print arr
    function printArr(obj) {
        obj.forEach(
            function (ob) {
                $(".wrapper").append(`<p><i class="fa fa-trash" aria-hidden="true"></i></p> \
                                      <dt>${ob.title}</dt> \
                                      <dd>${ob.text} <br> </dd> `);
            }
        )
    }

    //accardion
    function accord() {
        $('.wrapper > dd').not(':first-of-type').hide();
        $('.wrapper > dt').on('click', function() {
            let findText = $(this).next();
            let findWrap = $(this).closest('.wrapper');
            if (findText.is(':visible')) {
                findText.slideUp('fast');
            } else {
                findWrap.find('> dd').slideUp('fast');
                findText.slideDown('fast');
            }
        });
    }

    //delete 
    function del() {
        $('.wrapper p > i').on('click', function() {
            let thisP  = $(this).closest('p');
            let findDt = $(thisP).next();
            let findDd = $(findDt).next();
            $(findDd).remove();
            $(findDt).remove();
            $(thisP).remove();
            console.log(thisP , findDd, findDt)
        });
    }



    // Sort
    $('.sort > i').on('click', function() {
        let bool = 1;
        if (bool) {
            $('dd').closest('.wrapper').empty();
            sortTitleDown();
            bool = 0;
        } else {
            $('dd').closest('.wrapper').empty();
            sortTitleUp();
            bool = 1;
        }
    })
});















//--------------------//
// // Сортируем по спаданию title
//
// function sortTitleDown() {
//     let arr = employees.sort(function (a, b) {
//         var titleA = a.title.toLowerCase(), titleB = b.title.toLowerCase();
//         return (titleA > titleB) ? -1 : 1;
//     });
//
//     printArr(arr);
// }
// // sortTitleDown();
//
// // Сортируем по длине
//
// function sorttextLength() {
//     let arr = employees.sort(function (a, b) {
//         var textA = a.text.length, textB = a.text.length;
//         console.log(textA , textB)
//         return (textA < textB) ? -1 : 1;
//     })
//
//     printArr(arr);
// }
// // sorttextLength()
