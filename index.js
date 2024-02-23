let imgUrls = [
    `https://miro.medium.com/max/1400/0*SPjH6EGSjLcMPv8Q.jpg`,
    `https://blog.testproject.io/wp-content/uploads/2020/07/Using-Java-Enums-in-Test-Automation-Code.jpg`,
    `https://mobiltek.pl/wp-content/themes/yootheme/cache/heroImage01-398f220e.jpeg`,
    `https://mobiltek.pl/wp-content/themes/yootheme/cache/heroImage02-9df1a0cb.jpeg`,
    `https://technerds.com/wp-content/uploads/2021/06/13-api-2-1536x991.jpg`,
    `https://technerds.com/wp-content/uploads/2021/06/Twilio-Api-Marketplace.png`,
    `https://technerds.com/wp-content/uploads/2021/06/Google-maps-api-marketplace.png`,
    `https://multimatics.co.id/images/phyton-programming.jpg`,
    `https://multimatics.co.id/images/data-science-rockstar.jpg`,
    `https://diginovation.multimatics.co.id/images/banner-1-min.jpg`,
    `https://multimatics.co.id/images/back-services.jpg`,
    `https://multimatics.co.id/images/back-partner.jpg`,
    `https://diginovation.multimatics.co.id/images/img-slider-Managing%20Project%20Like%20Pro.jpg`,
    `https://www.skovian.com/wp-content/uploads/2020/12/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863-e1607419867297.jpg`,
    `https://www.softwaretestinghelp.com/wp-content/qa/uploads/2018/09/Code-Editors.png`,
    `https://img.freepik.com/free-vector/cross-platform-frameworks-abstract-concept-illustration-programming-build-tool-software-development-framework-cross-platform-structure-application-ui-coding-process_335657-344.jpg?w=2000`,
    `https://media.gettyimages.com/id/1124838925/vector/programming-code-application-window.jpg?s=612x612&w=gi&k=20&c=jaa1-dhyhxI6vlY8fG8AOQszOq7rPe3VA_TadTnVVzo=`,
    `https://kienthucphanmem.com/wp-content/uploads/2022/03/1-4.jpg`,
    `https://t3.ftcdn.net/jpg/04/08/34/72/360_F_408347240_XoD3pgXWa44LJh8wL2K9nII6Gbdn0nPN.jpg`,
    `https://edgy.app/wp-content/uploads/2018/09/programming-day-FI.jpg`,
    `https://www.ravepubs.com/wp-content/uploads/2015/10/programmers-1015.jpg`,
    `https://img.freepik.com/free-vector/programmer-working-web-development-code-engineer-programming-python-php-java-script-computer_90220-249.jpg`,
    `https://www.shutterstock.com/image-vector/programming-engineering-development-tiny-girl-260nw-1854334105.jpg`,
    `https://img.freepik.com/premium-vector/woman-programmer-software-web-development-computer-girl-work-script-coding-programming_352905-203.jpg?w=2000`,
    `https://st2.depositphotos.com/14229124/44777/v/1600/depositphotos_447775076-stock-illustration-women-sit-desks-code-applications.jpg`,
    `https://st2.depositphotos.com/1007566/7454/v/950/depositphotos_74544875-stock-illustration-software-design.jpg`,
    `https://cdn.xxl.thumbs.canstockphoto.com/web-programming-development-flat-design-vector-illustration-icons-set-of-modern-office-workflow-with-eps-vectors_csp16234230.jpg`,
    `https://c8.alamy.com/comp/2H5B60T/web-app-developers-web-illustrations-developer-website-interface-development-people-hold-software-banners-programmers-team-utter-vector-concept-2H5B60T.jpg`,
    `https://t3.ftcdn.net/jpg/01/78/65/02/360_F_178650212_oePgGaIhKUhz0cIg2bLBGsFsdbWs5Xwj.jpg`,`https://t4.ftcdn.net/jpg/01/35/92/85/360_F_135928597_xU5EzKq6vpOeXPX5vsbI48zfVVkSRlrF.jpg`,
    `https://t4.ftcdn.net/jpg/03/13/40/45/360_F_313404541_e9YZ3pht6oEEkMXuhxTboqXA2B2ShNnC.jpg`,
    `https://t4.ftcdn.net/jpg/04/12/83/91/360_F_412839178_eBThjVy75lyoTMkjcaSZSgeaH91M9bse.jpg`,
    `https://media.istockphoto.com/id/947663966/vector/programming-design-concept.jpg?s=612x612&w=0&k=20&c=7ACckqE60fQkt8yLlFEkcVuhoBZWwwfUhyA2XaOZrGQ=`
  ];
  console.log(imgUrls.length)
   // rand = Math.floor(Math.random() *imgUrls.length)
  // console.log(randomImg)
  // const randomImg = imgUrls[rand];
  // console.log(rand)
  
  const randomImg = () => {
        return imgUrls[Math.floor(Math.random() * imgUrls.length)];
    };

    let url = "https://kontests.net/api/v1/all";
    fetch(url)
        .then(response => response.json())
        .then(contests => {
            let ihtml = "";
            let bgimg = randomImg();
            let c = 0;

            for (const item in contests) {
                if (c === 5) {
                    c = 0;
                    bgimg = randomImg();
                }
                c++;

                ihtml += `
                    <div id="contests" class="card mx-2 my-2" style="width: 22rem;">
                        <img src=${bgimg} alt="">
                        <div class="card-body">
                            <h5 class="card-title">${contests[item].name}</h5>
                            <p>Starts at: ${contests[item].start_time}</p>
                            <p>Ends at: ${contests[item].end_time}</p>
                            <a href="${contests[item].url}" class="btn btn-outline-success my-4">Visit Contest</a>
                        </div>
                    </div>`;
            }

            cardContainer.innerHTML = ihtml;
        })
        .catch(error => console.error('Error fetching contests:', error));
});
