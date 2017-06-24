var baseURL = "http://192.168.1.111:8080";

//Product Info
var productTitle = document.getElementById('productTitle');
var productTagline = document.getElementById('productTagline');
var productInfo = document.getElementById('productInfo');
var productImageName = document.getElementById('productImageName');
var productImageCute = document.getElementById('productImageCute');
var productImage = document.getElementById('productImage');

//Designer Info
var designer = document.getElementById("designer");
var designerImage = document.getElementById("designerImage");
var designerBio = document.getElementById("designerBio");
var designerLink = document.getElementById('designerLink');

//Maker Info
var maker = document.getElementById("maker");
var makerImage = document.getElementById("makerImage");
var makerBio = document.getElementById('makerBio');
var makerLink = document.getElementById('makerLink');

designerLink.style.display = "none";
makerLink.style.display = "none";
designer.style.display = "none";
maker.style.display = "none";

//Other Variables
function playSound () {
    document.getElementById('play').play();
}

window.onload = function() {
    testConnection();
};

//Test the Connection
function testConnection() {
    $.ajax({
        method: "GET",
        url: baseURL + `/test`
    }).done(function(res) {
        console.log("getting test");
        console.log("Test result is " + res.message);

    })
}

function getData() {
    $.ajax({
        method: "GET",
        url: baseURL + `/data`
    }).done(function(res) {
        playSound();
        console.log("The Data is: " + res);
        var info = res.split("*");
        console.log("cool to send is:" + info[0]);
        if (info[0] == "yes") {
        designer.innerHTML = info[1];
        maker.innerHTML = info[2];
        productTitle.innerHTML = info[3];
        designerImage.src = info[4];
        makerImage.src = info[5];
        productImage.src = info[6];
        productTagline.innerHTML = info[7];
        productInfo.innerHTML = info[8];
        designerBio.innerHTML = info[9];
        makerBio.innerHTML = info[10];
        designerLink.href = info[11];
        makerLink.href = info[12];
        designerLink.style.display = "block";
        makerLink.style.display = "block";
        designer.style.display = "block";
        maker.style.display = "block";

    } else if (info[0] == "no") {
        console.log('no fucker');
        designer.style.display = "none";
        maker.style.display = "none";
        productTitle.innerHTML = "Unum";
        productInfo.innerHTML = "The Maker Movement is already redefining labor and capital relationships for the 21st century. Fueled by the proliferation of affordable digital design and fabrication tools, this movement is democratizing production and decentralizing manufacturing, giving almost anyone with access to a computer the ability to craft and sell their own products. However, no viable system yet exists to coordinate manufacturing relationships in a truly distributed network. </br></br>Unum harnesses the blockchain protocol to do just this, bringing designers and makers together in trusted collaborations and connecting global ideas to local on-demand production that is centered around customers. Unum envisions a future where home goods, furniture, art, and electronics are all created through distributed manufacturing channels, supporting more sustainable, transparent, and community-driven production. The blockchain makes this future real.</br></br><strong>Learn more at <a href='http://www.unum.nyc' target='_blank'>unum.nyc</a></strong>";
        designerImage.src = "images/designerIcon.png";
        makerImage.src = "images/makerIcon.png";
        productImage.src = "images/unumSplash.png"
        productTagline.innerHTML = "The Blockchain for the Maker Movement ";
        designerBio.innerHTML = "Want to learn more about who designed your product?</br></br>Scan the Unum seal to see information about the DESIGNER of a product here.</br></br>You can also click on their website to learn more about them.";
        makerBio.innerHTML = "Want to learn more about who fabricated your product?</br></br>Scan the Unum seal to see information about the MAKER of a product here.</br></br>You can also click on their website to learn more about them.";
        designerLink.style.display = "none";
        makerLink.style.display = "none";
    }
    })
}