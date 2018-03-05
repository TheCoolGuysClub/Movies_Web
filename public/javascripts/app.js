
// When using function(), this refers to
$(document).ready(function() {
  const title_input = $('#movie_title');
  const poster = $('#poster');
  title_input.on('keyup', function(e) {
    if (e.key === 'Enter') {
      const movie_title = title_input.val();
      title_input.val('');
      $.get(`/movie_info?title=${movie_title}`, (response) => {
        poster.attr('src', response.poster);
      })
    }
  })
})
