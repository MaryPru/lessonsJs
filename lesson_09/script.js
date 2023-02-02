$(document).ready(function () {


    function modifyArticle(element) {
        let header = element.find('.card-header')
        header.css('color', 'red');
        let date = dayjs(new Date).format('DD.MM.YYYY')
        let card_date = element.find('.article__pubdate ');
        card_date.text(date)
    }

    function addLike(element) {
        return $(element).text(+$(element).text() + 1)
    }

    function createArticleTpl(title, text, author, date) {
        let newArticle;
        newArticle = `
         
             <article class="card mb-2">
                    <header class="card-header">${title}</header>
                    <div class="card-body">
                        <p class="card-text">${text}</p>
                    </div>
                    <footer class="card-footer">
                        <p class="card-text"> ${author}<small class="article__pubdate text-muted">${date}</small></p>
                        <small>Likes:
                            <button class="btn btn-sm btn-primary add-like" title="Add like!">0</button>
                        </small>
                    </footer>
                </article>
             
        `
        return newArticle
    }

    function initForm(selector) {
        let title = $(selector).find('#article-name').val()
        let text = $(selector).find('#article-text').val()
        let author = $(selector).find('#article-author').val()
        let date = dayjs(new Date).format('DD.MM.YYYY')
        return {title, text, author, date}
    }

    let firstCard =  $('.article-list .card.mb-2:first-child');

    $('form').on('submit', function (e) {
        e.preventDefault()
        let data = initForm('form')
        let newArticle = createArticleTpl(data.title, data.text, data.author, data.date);
        firstCard.prepend(newArticle);
        e.currentTarget.reset()
    })

    $('#show-form-block').on('click', ()=> {
        // modifyArticle($(e.currentTarget))
        $('form').slideToggle()
    })

    $('.article-list').on('click', '.card .btn.btn-sm.btn-primary', e => {
         addLike(e.currentTarget)
    })


})
