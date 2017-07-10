$(document).ready(function(){
  // your code here!
  currentCommentList = new CommentList()
  addNewCommentToList()
  filterList()
})



function addNewCommentToList(){
  console.log("hello")
  $('form#note-form').on('submit', function(event){
    let commentText = $('#newCommentText').val()
    currentCommentList.addNewComment(commentText)
    $('#newCommentText').val('')
    event.preventDefault()

  })
}

function filterList(){
  $('form#search-form').on('submit', function(event){
    let searchText = $('#searchText').val()
    currentCommentList.hideUnMatchedSearches(searchText)
    event.preventDefault()
  })
}
