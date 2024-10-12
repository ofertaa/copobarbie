document.addEventListener('DOMContentLoaded', function () {
  var comprarBtn = document.getElementById('comprar-btn');

  if (comprarBtn) {
    comprarBtn.addEventListener('click', function (event) {
      event.preventDefault(); 

      var url = 'https://pay.pagamentoreferente.shop/521rZJD4k78geaX';

      window.location.href = url;
    });
  }
});
