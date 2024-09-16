const imgUrls = [
  `https://miro.medium.com/max/1400/0*SPjH6EGSjLcMPv8Q.jpg`,
  `https://mobiltek.pl/wp-content/themes/yootheme/cache/heroImage01-398f220e.jpeg`,
  `https://mobiltek.pl/wp-content/themes/yootheme/cache/heroImage02-9df1a0cb.jpeg`,
  `https://technerds.com/wp-content/uploads/2021/06/13-api-2-1536x991.jpg`,
  `https://technerds.com/wp-content/uploads/2021/06/Twilio-Api-Marketplace.png`,
  `https://technerds.com/wp-content/uploads/2021/06/Google-maps-api-marketplace.png`,
  `https://multimatics.co.id/images/data-science-rockstar.jpg`,
  `https://multimatics.co.id/images/back-partner.jpg`,
  `https://www.softwaretestinghelp.com/wp-content/qa/uploads/2018/09/Code-Editors.png`,
  `https://img.freepik.com/free-vector/cross-platform-frameworks-abstract-concept-illustration-programming-build-tool-software-development-framework-cross-platform-structure-application-ui-coding-process_335657-344.jpg?w=2000`,
  `https://media.gettyimages.com/id/1124838925/vector/programming-code-application-window.jpg?s=612x612&w=gi&k=20&c=jaa1-dhyhxI6vlY8fG8AOQszOq7rPe3VA_TadTnVVzo=`,
  `https://t3.ftcdn.net/jpg/04/08/34/72/360_F_408347240_XoD3pgXWa44LJh8wL2K9nII6Gbdn0nPN.jpg`,
  `https://edgy.app/wp-content/uploads/2018/09/programming-day-FI.jpg`,
  `https://img.freepik.com/free-vector/programmer-working-web-development-code-engineer-programming-python-php-java-script-computer_90220-249.jpg`,
  `https://www.shutterstock.com/image-vector/programming-engineering-development-tiny-girl-260nw-1854334105.jpg`,
  `https://img.freepik.com/premium-vector/woman-programmer-software-web-development-computer-girl-work-script-coding-programming_352905-203.jpg?w=2000`,
  `https://st2.depositphotos.com/1007566/7454/v/950/depositphotos_74544875-stock-illustration-software-design.jpg`,
  `https://t3.ftcdn.net/jpg/01/78/65/02/360_F_178650212_oePgGaIhKUhz0cIg2bLBGsFsdbWs5Xwj.jpg`,
  `https://t4.ftcdn.net/jpg/01/35/92/85/360_F_135928597_xU5EzKq6vpOeXPX5vsbI48zfVVkSRlrF.jpg`,
  `https://t4.ftcdn.net/jpg/03/13/40/45/360_F_313404541_e9YZ3pht6oEEkMXuhxTboqXA2B2ShNnC.jpg`,
  `https://t4.ftcdn.net/jpg/04/12/83/91/360_F_412839178_eBThjVy75lyoTMkjcaSZSgeaH91M9bse.jpg`,
  `https://media.istockphoto.com/id/947663966/vector/programming-design-concept.jpg?s=612x612&w=0&k=20&c=7ACckqE60fQkt8yLlFEkcVuhoBZWwwfUhyA2XaOZrGQ=`
];

const randomImg = () => imgUrls[Math.floor(Math.random() * imgUrls.length)];

document.addEventListener("DOMContentLoaded", function () {
  const contests = [
    { name: "Codeforces Round #845 (Div. 2)", link: "https://codeforces.com/contest/1847" },
    { name: "Codeforces Round #846 (Div. 2)", link: "https://codeforces.com/contest/1848" },
    { name: "Codeforces Round #847 (Div. 2)", link: "https://codeforces.com/contest/1849" },
    { name: "Codeforces Round #848 (Div. 2)", link: "https://codeforces.com/contest/1850" },
    { name: "Codeforces Round #849 (Div. 2)", link: "https://codeforces.com/contest/1851" },
    { name: "Codeforces Round #850 (Div. 2)", link: "https://codeforces.com/contest/1852" },
    { name: "Codeforces Round #851 (Div. 2)", link: "https://codeforces.com/contest/1853" },
    { name: "Codeforces Round #852 (Div. 2)", link: "https://codeforces.com/contest/1854" },
    { name: "Codeforces Round #853 (Div. 2)", link: "https://codeforces.com/contest/1855" },
    { name: "Codeforces Round #854 (Div. 2)", link: "https://codeforces.com/contest/1856" }
  ];

  const cardContainer = document.getElementById("cardContainer");
  let visibleRows = 4; // initially show four rows

  function renderCards() {
    cardContainer.innerHTML = '';
    const cardsToShow = contests.slice(0, visibleRows * 4); // show only up to visibleRows * 4 cards
    cardsToShow.forEach(contest => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div class="card" style="width: 18rem;">
          <img src="${randomImg()}" class="card-img-top" alt="Contest Image">
          <div class="card-body">
            <h5 class="card-title">${contest.name}</h5>
            <a href="${contest.link}" class="btn btn-primary" target="_blank">Go to Contest</a>
          </div>
        </div>
      `;
      cardContainer.appendChild(card);
    });
    document.getElementById("showMoreBtn").style.display = visibleRows * 4 < contests.length ? 'block' : 'none';
  }

  renderCards();

  document.getElementById("showMoreBtn").addEventListener("click", function () {
    visibleRows = Math.min(visibleRows + 2, Math.ceil(contests.length / 4)); // show 8 more cards or up to the end
    renderCards();
  });
});


