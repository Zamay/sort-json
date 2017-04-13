/**
 * Created by zamaj on 10.04.2017.
 */
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
                $(".wrapper").append(`<dl> \
                                      <p><i class="fa fa-trash" aria-hidden="true"></i></p> \
                                      <dt>${ob.title}</dt> \
                                      <dd>${ob.text}<br> </dd> \
                                      </dl> `);
            }
        )
    }

    //accоrdion
    function accord() {
        $('.wrapper dl > dd').hide();
        $('.wrapper dl > dt').on('click', function() {
            let findText = $(this).next();
            let findWrap = $(this).closest('dl');
            if (findText.is(':visible')) {
                findText.slideUp('fast');
            } else {
                findWrap.find('> dd').slideUp('fast');
                findText.slideDown('fast');
            }
        });
    }

    //delete - это ппц.
    function del() {
        $('.wrapper p > i').on('click', function() {
            let findDl  = $(this).closest('dl');
            $(findDl).remove();

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
