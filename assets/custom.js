// sticky Navigation

// initialize variables

const header = document.querySelector(".header-navigation");
const initialCoords = header.getBoundingClientRect();

const navLinks = document.querySelectorAll("li.menu-lv-item a span");

const headerIcons = document.querySelectorAll(
  ".header-navigation .header__icon svg"
);

const searchIcon = document.querySelector(
  "#shopify-section-sections--23338728489276__header_navigation_hamburger_WcARck .icon-search"
);

const searchBar = document.querySelector(
  "#shopify-section-sections--23338728489276__header_navigation_hamburger_WcARck .field"
);

const logo = document.querySelector(".header__heading-text p");

const homeCoords = document.querySelector(
  "#shopify-section-template--23338727539004__1632296224c9e90203"
);

const aboutUsCoords = document.querySelector(
  ".section-block-template--23338727670076__rich_text_DakBrz"
);

const collectionCoords = document.querySelector(
  "#shopify-section-template--23373962740028__rich_text_ygY6bd"
);

const coordinations = homeCoords || aboutUsCoords || collectionCoords;

function smokyHeader() {
  if (header) {
    navLinks.forEach(function (item) {
      item.style.color = "#332F2E";
    });
    headerIcons.forEach(function (item) {
      item.style.fill = "#332F2E";
    });
    logo.style.color = "#332F2E";
    searchIcon.style.fill = "#332F2E";
    searchBar.style.background = "#8C684814";
  }
}
function transparentHeader() {
  if (header) {
    header.style.background = "transparent";
    navLinks.forEach(function (item) {
      item.style.color = "#fff";
    });
    headerIcons.forEach(function (item) {
      item.style.fill = "#fff";
    });
    logo.style.color = "#fff";
    searchIcon.style.fill = "#fff";
    searchBar.style.background = "#ffffff1a";
  }
}

if (coordinations) {
  window.addEventListener("scroll", function () {
    if (window.scrollY > initialCoords.top) {
   
      smokyHeader();
    } else {
      transparentHeader();
    }
  });
} else {
  header.style.position = "static";
  smokyHeader();
  window.addEventListener("scroll", function () {
    if (window.scrollY > initialCoords.top) {
      header.style.position = "absolute";
   
    } else {
      header.style.background = "transparent";
      header.style.position = "static";
    }
  });
}

// document.querySelectorAll('.shopify-section-group-header-group').forEach((nav) => {
//   // let hmmm = nav.classList.contains('shopify-section-header-sticky');
//   window.addEventListener('scroll', function() {
//   console.log(nav)
//   nav.classList.contains('shopify-section-header-sticky')

//   }
// })

// window.addEventListener("scroll", function () {
//   // console.log('Scrolled to:');
//   document
//     .querySelectorAll(".shopify-section-group-header-group")
//     .forEach((nav) => {
//       let navSticky = nav.classList.contains("shopify-section-header-sticky");
//       if (navSticky == true) {
//         document.querySelectorAll(".header-icons .icon").forEach((icon) => {
//           icon.classList.add("color-change2", "color-change2-path");
//           console.log("done", window.scrollY);
//         });
//         if(window.scrollY == 20){
//           console.log('0')
//           document.querySelectorAll(".header-icons .icon").forEach((icon) => {
//           icon.classList.remove("color-change2", "color-change2-path");
//         });
//         }
//       }
//     });
// });

document
  .querySelectorAll(
    ".product-block.section-block-template--23338727539004__163247026462da6862222"
  )
  .forEach((mostLoved) => {
    mostLoved.style.display = "none";

    document
        .querySelectorAll(
          "#shopify-section-template--23338727539004__rich_text_U6YK44"
        )
        .forEach((text) => {
          text.style.display = "none";
          console.log(text)
        });
    
    const mediaQuery3 = window.matchMedia("(max-width: 480px)");
    if (mediaQuery3.matches) {
      console.log("Viewport is greater than 480px");
      mostLoved.style.display = "block";
      document.querySelector(
        "#shopify-section-template--23338727539004__163247026462da6862"
      ).style.display = "none";
      document
        .querySelectorAll(
          ".section-block-template--23338727539004__1632296224c9e90203 .halo-block-header .title"
        )
        .forEach((text) => {
          text.style.display = "none";
          console.log(text)
        });
      document
        .querySelectorAll(
          "#shopify-section-template--23338727539004__rich_text_U6YK44"
        )
        .forEach((text) => {
          text.style.display = "block";
          console.log(text)
        });
    }
  });
