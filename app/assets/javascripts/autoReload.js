$(function(){
  function buildHTML(message){
    if ( message.image ) {
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

  let reloadMessages = function() {
    let last_message_id = $('.MainChat__MessageList__MainBox:last').data("message-id") || 0;
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
        let insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.MessageField').append(insertHTML);
        $('.MainChat__MessageList').animate({ scrollTop: $('.MainChat__MessageList')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    });
  };
  setInterval(reloadMessages, 7000);
});