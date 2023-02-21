import {db} from './db.js'

$(document).ready(function () {

    const initItems = () => {
        let list = $('#comments-list');
        list.children('.card').remove()

        const allRecords = db.getAllRecords();
        allRecords.forEach((record) => {
            let card = createCard(record)
            list.append(card)
        })
    }
    initItems()

    $('.card').find('#add-comments').find('#name').attr('required', true)
    $('.card').find('#add-comments').find('#message').attr('required', true)

    function initForm(selector) {
        let name = $(selector).find('.name').val()
        let message = $(selector).find('.message').val()
        let date = dayjs(new Date).format('HH:mm DD.MM.YYYY')
        let id = crypto.randomUUID();
        let comments = []
        return {name, message, date, id, comments}
    }

    function initComentedForm(selector) {
        let nameComment = $(selector).find('.name').val()
        let messageComment = $(selector).find('.message').val()
        let dateComment = dayjs(new Date).format('HH:mm DD.MM.YYYY')
        return {nameComment, messageComment, dateComment}
    }

    function initEditedForm(selector) {
        let name = $(selector).find('.name').val()
        let message = $(selector).find('.message').val()
        let date = dayjs(new Date).format('HH:mm DD.MM.YYYY')
        let id = $(selector).data().id
        return {name, message, date, id}
    }


    function createComment(data) {
        let comment = `
         <article class="card">
                    <div class="card-body">
                        <h6>${data.nameComment}</h6>
                        <p>${data.messageComment}</p>
                    </div>
                    <div class="card-footer">
                        <small>Pub date: ${data.dateComment}</small>
                    </div>
                </article>
        `
        return comment
    }

    function createCard(record) {
        const {name, message, date, id, comments} = record
        let commentsList = comments.map((comment) => createComment(comment))

        let card = `
                 <article class="card parent" data-id="${id}">
            <div class="card-body">
                <h3  class="cart-title">${name}</h3>
                <p>${message}</p>
            </div>
            <div class="card-footer">
                <small><span>Pub date:</span> ${date}</small>
                <button class="btn btn-secondary btn-sm">comments this</button>
                <button class="btn btn-primary edit-button btn-sm">edit this</button>
                <button class="btn btn-danger btn-sm">delete this</button>
                <small><span class="hidden">edited date*</span> </small>
            </div>
            <div class="sub-comments-list p-2">
           
        ${commentsList}
            </div>
          <div class="card mt-2">
        <form action="#" id="add-comments">
            <div class="card-body">
                <h4 class="cart-title">Add new comments</h4>
            <div class="form-group">
                <label for="name">name</label>
                <input type="text" class="form-control name" id="name">
            </div>
            <div class="form-group">
                <label for="message">message</label>
                <textarea name="message" class="form-control message" id="message" cols="30" rows="2"></textarea>
            </div>
                <button class="btn btn-primary">add comment</button>
            </div>
        </form>
    </div>
        `
        return card
    }

    $('#comments-list ').on('click', '.card .btn-danger', function (e) {
        let deletedCard = $(e.currentTarget).closest('.card')
        deletedCard.next('.card.mt-2').remove()
        deletedCard.remove()
        db.deleteRecord(deletedCard.data().id)
        $.iaoAlert({
            msg: `record #${deletedCard.data().id} delete`,
            alertClass: 'green'
        })
    })

    $('#comments-list ').on('click', '.card .btn-secondary', function (e) {
        let comentedCard = $(e.currentTarget).closest('.card')
        comentedCard.addClass('commented')
        db.updateRecord(comentedCard.data().id)
    })

    $('#comments-list ').on('submit', '#add-comments', function (e) {
        e.preventDefault();

        let commentData = initComentedForm($(e.currentTarget));
        let commentCard = $(e.currentTarget).closest('.card.commented').find('.sub-comments-list')
        let newComment = createComment(commentData);
        commentCard.append(newComment)
        e.currentTarget.reset()
        db.addRecords(commentData)
        $.fancybox.open({
            src: '#pop-up',
            type: 'inline',
            modal: true,
            smallBtn: true,
        });
        $(e.currentTarget).closest('.card.commented').removeClass('commented')
    })

    $('.btn-success').on('click', function () {
        $.fancybox.open({
            src: '#pop-up_addForm',
            type: 'inline',
            modal: true,
            smallBtn: true,
        });
    })

    $('#add-record').find('#name-record').attr('required', true)
    $('#add-record').find('#message-record').attr('required', true)

    $('#add-record').on('submit', function (e) {
        e.preventDefault();
        let cardData = initForm($(this));
        let list = $('#comments-list');
        let newCard = createCard(cardData);
        list.append(newCard)
        e.currentTarget.reset()
        db.addRecords(cardData)
        $.fancybox.close({
            src: '#pop-up_addForm'
        });
    })

    $('#comments-list ').on('click', '.card .edit-button', function (e) {
        $(e.currentTarget).closest('.card').addClass('edited')
        let editedCard = $(e.currentTarget).closest('.edited')
        let editedCardId = editedCard.data().id
        const allRecords = db.getAllRecords();
        let editRecord = allRecords.filter(({...record}) => record.id == editedCardId);

        $.fancybox.open({
            src: '#pop-up_editForm',
            type: 'inline',
            modal: true,
            smallBtn: true,
            'beforeLoad': function () {
                $('#message-rerecord').val(editRecord[0].message)
                $('#name-rerecord').val(editRecord[0].name)
                $('#name-rerecord').attr('readonly', true)
                $("#edit-record").data("id", `${editRecord[0].id}`)
            }
        });
    })

    $('#edit-record').on('submit', function (e) {
        e.preventDefault();
        let editedCard = $('.edited')
        let editedCardId = editedCard.data().id
        const allRecords = db.getAllRecords();
        let editRecord = allRecords.filter(({...record}) => record.id === `${editedCardId}`);
        let cardEditedData = initEditedForm($(e.target));
        let commentsData = editRecord[0].comments;

        db.updateRecord({
            ...cardEditedData,
            id: `${cardEditedData.id}`,
            comments: commentsData
        })
        initItems()
        $.fancybox.close({
            src: '#pop-up_editForm'
        });
        $.iaoAlert({
            msg: "record update",
            alertClass: 'green'
        })

        let editedFormId = $(e.target).data().id
        let cards = $('#comments-list .card.parent')
        cards.each(function() {
            if($( this ).data().id==editedFormId){
                $( this).find('.hidden').css('display', 'inline-block');
            }
        })
        $('.card').removeClass('edited')
    })

    $('#edit-record').on('click', '.cancel', function (e) {
        e.preventDefault();
        $.fancybox.close({
            src: '#pop-up_editForm'
        });
    })

    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: 'Предыдущий',
        nextText: 'Следующий',
        currentText: 'Сегодня',
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        weekHeader: 'Не',
        dateFormat: 'yy.mm.dd',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);

    $("#search-date-from").datepicker({
        showOn: "button",
        buttonImage: "https://snipp.ru/demo/437/calendar.gif",
        buttonImageOnly: true,
        buttonText: "Выбрать дату"
    });
    $("#search-date-to").datepicker({
        showOn: "button",
        buttonImage: "https://snipp.ru/demo/437/calendar.gif",
        buttonImageOnly: true,
        buttonText: "Выбрать дату"
    });

    let parent = ($('#comments-list article.card.parent'))
    $("#search-field").keyup(function () {
        let filter = $(this).val()

        parent.each(function () {
            if ($(this).find('.cart-title').text().search(new RegExp(filter, "gi")) < 0) {
                $(this).fadeOut();
            } else {
                $(this).show();
            }
        });
    });


    $('#search').on('submit', function (e) {
        e.preventDefault();
        let startDate = Date.parse($('#search-date-from').val())
        let endDate = Date.parse($('#search-date-to').val())

        parent.each(function () {
            let date = $(this).find('.card-footer small').text().slice(16, 26)
            let dateTime = Date.parse(dayjs(date).format('YYYY-DD-MM')) - 7200000
            console.log(startDate, 'startDate')
            console.log(endDate, 'endDate')
            console.log(dateTime, 'dateTime')
            if (dateTime >= startDate && dateTime <= endDate) {
                $(this).show();
            } else {
                $(this).fadeOut();
            }
        });
    })
})


