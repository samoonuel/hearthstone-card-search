let searchBtn = $("#submit");
let input = "";

const settings = {
  async: true,
  crossDomain: true,
  url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${input}`,
  method: "GET",
  headers: {
    "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
    "x-rapidapi-key": "68b1245972msh0622e37a717ce83p156bd8jsn33c53f5c9f28",
  },
};

const call = () => {
  $.ajax(settings).done(function (response) {
    getCard(response);
  });
};

searchBtn.on("click", () => {
  input = $("input").val();
  settings.url = `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${input}`;
  call();
});

const getCard = (card) => {
  console.log(card);
  const img = $('#img')
  const name = $('#card-one')
  for(let element in card) {
    console.log(card[element]);
    name.text(card[element].name);
    img.attr('src', card[element].img);
  }
};
