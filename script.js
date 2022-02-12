const data = {
  mainTitle: "My Fav Movies",
  cardContents: [
    {
      name: "Interstellar",
      imageLink:
        "https://miro.medium.com/max/1400/1*FvnlCOgs4vJqAzP-eJz4QA.jpeg",
    },
    {
      name: "Forrest Gump",
      imageLink:"https://www.themoviedb.org/t/p/w780/qdIMHd4sEfJSckfVJfKQvisL02a.jpg",
    },
    {
      name: "The Shawshank Redemption",
      imageLink:
        "https://cdn.onebauer.media/one/empire-tmdb/films/278/images/xBKGJQsAIeweesB79KC89FpBrVr.jpg?format=jpg&quality=80&width=960&height=540&ratio=16-9&resize=aspectfill",
    },
    {
      name: "The Terminal",
      imageLink:
        "https://a.ltrbxd.com/resized/sm/upload/gc/d1/oa/ou/the-terminal-1200-1200-675-675-crop-000000.jpg?k=fa7de4fff0",
    },
  ],
  userData: { name: "Neeraj.Do", tagLine: "Baby steps into the world of web!" },
};


// Plug in title data to HTML
let mainTitleElement = document.getElementById("main-title");
mainTitleElement.innerHTML += data.mainTitle;


// Create template for card content
let getCardStructure = (name, imageLink) => {
  return `<div class="col-12 col-sm-6 mb-4">
  <div class="tile">
    <div class="tile-text text-center">
      <h5>${name}</h5>
    </div>
    <img 
      src="${imageLink}" />
  </div>
</div>`;
};

let cardRow = document.getElementById("card-row");

// Plug in card data to HTML
data.cardContents.forEach((cardContent) => {
  let { name, imageLink } = cardContent;
  cardRow.innerHTML += getCardStructure(name, imageLink);
});

// Create template for footer content
let getFooterStructure = (name, tagLine) => {
  return `<h3 class="me-3"><i class="fas fa-heart"></i> ${name}</h3>
    <p>${tagLine}</p>`;
};

let footerContent = document.getElementById("footer");
let { name, tagLine } = data.userData;

// Plug in footer data to HTML
footerContent.innerHTML += getFooterStructure(name, tagLine);
