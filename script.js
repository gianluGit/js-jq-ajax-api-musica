function initCdContainer() {
  $.ajax({
    url: 'https://flynn.boolean.careers/exercises/api/array/music',
    method: 'GET',
    success: function(data, state) {
      var success = data['success'];
      var arrCD = data['response'];
      console.log(arrCD);

      if (success == true) {
        showdCD(arrCD);
      } else {
        console.log('error');
      }


    },
    error: function(request, state, error) {
      console.log('request', request);
      console.log('state', state);
      console.log('error', error);
    }
  });
}

function showdCD(arrCD) {
  if (arrCD.length == 10) {
    for (var i = 0; i < arrCD.length; i++) {
      var template = $('#template-cd').html();
      var compiled = Handlebars.compile(template);
      var target = $('#cd-target');

      var cdHTML = compiled({
        'poster': arrCD[i]['poster'],
        'title': arrCD[i]['title'],
        'author': arrCD[i]['author'],
        'year': arrCD[i]['year']
      });

      target.append(cdHTML);

    }

  }


}







$(document).ready(function() {
  initCdContainer();
});
