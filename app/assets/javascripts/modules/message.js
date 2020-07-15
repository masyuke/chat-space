$(function() {
  function buildHTML(message) {
    if (message.image) {
      let html =
        `<div class="MainChat__MessageList__MainBox" data-message-id=${message.id}>
          <div class="MainChat__MessageList__MainBox__MessageInfo">
            <div class="MainChat__MessageList__MainBox__MessageInfo__UserName">
              ${message.user_name}
            </div>
            <div class="MainChat__MessageList__MainBox__MessageInfo__Date">
              ${message.created_at}
            </div>
          </div>
          <div class="MainChat__MessageList__MainBox__Message">
            <p class="Message__content">
              ${message.content}
            </p>
          </div>
          <img src="${message.image}"
        </div>`
      return html;
    } else {
      let html =
        `<div class="MainChat__MessageList__MainBox" data-message-id=${message.id}>
          <div class="MainChat__MessageList__MainBox__MessageInfo">
            <div class="MainChat__MessageList__MainBox__MessageInfo__UserName">
              ${message.user_name}
            </div>
            <div class="MainChat__MessageList__MainBox__MessageInfo__Date">
              ${message.created_at}
            </div>
          </div>
          <div class="MainChat__MessageList__MainBox__Message">
            <p class="Message__content">
              ${message.content}
            </p>
          </div>
        </div>`
      return html;
    };
  }
  $('.form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false,
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.MessageField').append(html);
      $('.MainChat__MessageList').animate({ scrollTop: $('.MessageField')[0].scrollHeight});
      $('form')[0].reset();
      $('.Form__submit').prop('disabled', false);
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
      $('.Form__submit').prop("disabled", false);
    });
  });
});