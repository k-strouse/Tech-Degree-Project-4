/*   Call lightGallery Plugin   */
$("#lightgallery").lightGallery({

  height: '400px',
  download: false,
  thumbnail: false,
  counter: false,
  mode: 'lg-lollipop',
});

/*   Call hideSeek Plugin   */
$('#search').hideseek({
  nodata: 'No Results Found',
});

$(document).ready(function()
  {
    $('.no-results').attr('href', 'index.html')
  });
