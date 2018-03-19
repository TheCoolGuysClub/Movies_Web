
// When using function(), this refers to
$(document).ready(function() {
  const title_input = $('#movie_title');
  const poster = $('#poster');
  const plot = document.querySelector('#plot');
  const link = document.querySelector('#link');
  const poster_link = document.querySelector('#poster_link');

  title_input.on('keyup', function(e) {
    if (e.key === 'Enter') {
      const movie_title = title_input.val();
      title_input.val('');
      $.get(`/movie_info?title=${movie_title}`, (response) => {
        poster.attr('src', response.poster);
        plot.innerHTML = "Plot: " + response.plot;
        link.style.display = 'block';
        link.href = response.website;
        poster_link.href = response.poster;
      })
    }
  })
})
