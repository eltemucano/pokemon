$(document).ready(function () {
  for (let i = 1; i < 152; i++) {
    $("#pokemon").append(
      `<img  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${i}.png" class="img-thumbnail m-1"/>`
    );
  }
  $("img").hover(function () {
    $(this).toggleClass("magictime puffIn");
  });
});
