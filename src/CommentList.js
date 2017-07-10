class CommentList {
  constructor(){
    this.comments = []
  }


  addNewComment(commentText){
    this.comments.unshift(new Comment(commentText))
    $('ul#comments-list').append(this.comments[0].render())
  }

  hideUnMatchedSearches(searchText){
    $(`li:not(:contains('${searchText}'))`).css( "display", "none" )
  }
}
