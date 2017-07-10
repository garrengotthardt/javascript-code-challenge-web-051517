$(document).ready(function(){
  addNewCommentToList()
  filterList()
})


function addNewCommentToList(){
  $('form#note-form').on('submit', function(event){
    let commentText = $('#newCommentText').val()
    $('ul#comments-list').append(`<li>${commentText}</li>`)
    $('#newCommentText').val('')
    event.preventDefault()

  })
}

function filterList(){
  $('form#search-form').on('submit', function(event){
    let searchText = $('#searchText').val()
    $(`li:not(:contains('${searchText}'))`).css( "display", "none" )
    event.preventDefault()
  })
}
