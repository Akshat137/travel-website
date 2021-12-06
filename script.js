var home = document.getElementById("home");
var explore = document.getElementById("explore");
var about = document.getElementById("about");

home.onclick = function () {
  home.setAttribute("class", "active");
  explore.removeAttribute("class");
  about.removeAttribute("class");
};

explore.onclick = function () {
  home.removeAttribute("class");
  explore.setAttribute("class", "active");
  about.removeAttribute("class");
};

about.onclick = function () {
  home.removeAttribute("class");
  explore.removeAttribute("class");
  about.setAttribute("class", "active");
};

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

var flight = true;
var hotel = false;
var bus = false;
var train = false;

function displayAeroplane() {
  document.getElementById("aeroplane").src = "blue-aeroplane.jpg";
  document.getElementById("hotel").src = "hotel.jpg";
  document.getElementById("bus").src = "bus.jpg";
  document.getElementById("train").src = "train.png";

  var travelClass = document.getElementById("travel-class");
  travelClass.style.display = "flex";

  var heading = document.getElementById("departureHeading");
  heading.innerHTML = "DEPARTURE";

  var aeroplaneclass = document.getElementById("aeroplane-class");
  aeroplaneclass.style.display = "flex";
  aeroplaneclass.style.flexDirection = "column";

  var trainclass = document.getElementById("train-class");
  trainclass.style.display = "none";

  var search = document.getElementById("searchList");
  search.innerHTML = "";

  var from = document.getElementById("from");
  from.style.display = "block";

  var to = document.getElementById("to");
  to.style.display = "block";

  var city = document.getElementById("city");
  city.style.display = "none";

  var checkIn = document.getElementById("checkIn");
  checkIn.style.display = "none";

  var checkOut = document.getElementById("checkOut");
  checkOut.style.display = "none";

  var departure = document.getElementById("departure");
  departure.style.display = "block";

  var guests = document.getElementById("travelerHeading");
  guests.innerHTML = "TRAVELLERS";

  flight = true;
  hotel = false;
  bus = false;
  train = false;
}

function displayHotels() {
  document.getElementById("aeroplane").src = "aeroplane.jpg";
  document.getElementById("hotel").src = "blue-hotel.jpg";
  document.getElementById("bus").src = "bus.jpg";
  document.getElementById("train").src = "train.png";

  var search = document.getElementById("searchList");
  search.innerHTML = "";

  var from = document.getElementById("from");
  from.style.display = "none";

  var to = document.getElementById("to");
  to.style.display = "none";

  var city = document.getElementById("city");
  city.style.display = "block";

  var travelClass = document.getElementById("travel-class");
  travelClass.style.display = "none";

  var checkIn = document.getElementById("checkIn");
  checkIn.style.display = "block";

  var checkOut = document.getElementById("checkOut");
  checkOut.style.display = "block";

  var departure = document.getElementById("departure");
  departure.style.display = "none";

  var guests = document.getElementById("travelerHeading");
  guests.innerHTML = "GUESTS";

  flight = false;
  hotel = true;
  bus = false;
  train = false;
}

function displayBus() {
  document.getElementById("aeroplane").src = "aeroplane.jpg";
  document.getElementById("hotel").src = "hotel.jpg";
  document.getElementById("bus").src = "blue-bus.jpg";
  document.getElementById("train").src = "train.png";

  var travelClass = document.getElementById("travel-class");
  travelClass.style.display = "none";

  var heading = document.getElementById("departureHeading");
  heading.innerHTML = "TRAVEL DATE";

  var search = document.getElementById("searchList");
  search.innerHTML = "";

  var from = document.getElementById("from");
  from.style.display = "block";

  var to = document.getElementById("to");
  to.style.display = "block";

  var city = document.getElementById("city");
  city.style.display = "none";

  var checkIn = document.getElementById("checkIn");
  checkIn.style.display = "none";

  var checkOut = document.getElementById("checkOut");
  checkOut.style.display = "none";

  var departure = document.getElementById("departure");
  departure.style.display = "block";

  var guests = document.getElementById("travelerHeading");
  guests.innerHTML = "TRAVELLERS";

  flight = false;
  hotel = false;
  bus = true;
  train = false;
}

function displayTrain() {
  document.getElementById("aeroplane").src = "aeroplane.jpg";
  document.getElementById("hotel").src = "hotel.jpg";
  document.getElementById("bus").src = "bus.jpg";
  document.getElementById("train").src = "blue-train.png";

  var travelClass = document.getElementById("travel-class");
  travelClass.style.display = "flex";

  var heading = document.getElementById("departureHeading");
  heading.innerHTML = "TRAVEL DATE";

  var aeroplaneclass = document.getElementById("aeroplane-class");
  aeroplaneclass.style.display = "none";

  var trainclass = document.getElementById("train-class");
  trainclass.style.display = "flex";
  trainclass.style.flexDirection = "column";

  var search = document.getElementById("searchList");
  search.innerHTML = "";

  var from = document.getElementById("from");
  from.style.display = "block";

  var to = document.getElementById("to");
  to.style.display = "block";

  var city = document.getElementById("city");
  city.style.display = "none";

  var checkIn = document.getElementById("checkIn");
  checkIn.style.display = "none";

  var checkOut = document.getElementById("checkOut");
  checkOut.style.display = "none";

  var departure = document.getElementById("departure");
  departure.style.display = "block";

  var guests = document.getElementById("travelerHeading");
  guests.innerHTML = "TRAVELLERS";

  flight = false;
  hotel = false;
  bus = false;
  train = true;
}

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

var tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
var td = tomorrow.getDate();
var tm = tomorrow.getMonth() + 1;
var ty = tomorrow.getFullYear();

if (dd < 10) {
  dd = "0" + dd;
}

if (mm < 10) {
  mm = "0" + mm;
}

if (td < 10) {
  td = "0" + td;
}

if (tm < 10) {
  tm = "0" + tm;
}

today = yyyy + "-" + mm + "-" + dd;
tomorrow = ty + "-" + tm + "-" + td;
document.getElementById("departure-date").min = today;
document.getElementById("departure-date").value = today;

document.getElementById("checkInDate").min = today;
document.getElementById("checkOutDate").min = today;
document.getElementById("checkInDate").value = today;
document.getElementById("checkOutDate").value = tomorrow;

function search() {
  fetch("./database.json")
    .then((response) => response.json())
    .then((data) => {
      var f = document.getElementById("places-from");
      var t = document.getElementById("places-to");
      var hotel_city = document.getElementById("hotels-places-from");

      var textclass = "input[name=" + '"aeroplaneClass"]:checked';
      if (train) {
        textclass = "input[name=" + '"trainClass"]:checked';
      }

      var place_from = f.options[f.selectedIndex].text;
      var place_to = t.options[t.selectedIndex].text;
      var departure_date = document.getElementById("departure-date").value;
      var travel_class = document.querySelector(textclass).value;
      var ul = document.getElementById("searchList");
      ul.innerHTML = "";

      for (var i = 0; i < data.length; i++) {
        if (flight && data[i].aeroplaneClass == travel_class) {
          if (
            data[i].from == place_from &&
            data[i].to == place_to &&
            data[i].date == departure_date
          ) {
            var newlist = document.createElement("li");
            var text =
              '<div style = "display : flex; flex-direction: row; justify-content: space-evenly; align-items: center;">';
            text +=
              '<span><img src = "indigo.jpg" alt = "Indigo" width = "30px" height = "30px"><p id = "flight-company">IndiGo</p></span>' +
              "<span>" +
              `${data[i].from_time} <p>${data[i].from}</p>` +
              "</span>" +
              "<span>" +
              '<img src = "./green_line.png" alt = "line" width = "50px" height = "5px"> <p>Non-Stop</p>' +
              "</span>" +
              "<span>" +
              `${data[i].to_time} <p>${data[i].to}</p>` +
              "</span>" +
              "<span>" +
              `Rs. ${data[i].price}` +
              "</span>" +
              "</div>";

            newlist.innerHTML = text;
            ul.appendChild(newlist);
          }
        } else if (train && data[i].trainClass == travel_class) {
          if (
            data[i].from == place_from &&
            data[i].to == place_to &&
            data[i].date == departure_date
          ) {
            var newlist = document.createElement("li");
            var text = `<div><h3>${data[i].trainName}</h3><p>${data[i].from_time} <img src = "./green_line.png" alt = "line" width = "50px" height = "5px"> ${data[i].to_time}</p></div>`;
            text += `<div style = "display : flex; flex-direction: row; justify-content: space-evenly; align-items: center;"><span>${data[i].trainClass}</span> <span>${data[i].price} </span></div>`;
            text += `${data[i].status}<br><br>`;
            text += "Free Cancellation";

            newlist.innerHTML = text;
            ul.appendChild(newlist);
          }
        } else if (
          hotel &&
          data[i].city == hotel_city.options[hotel_city.selectedIndex].text
        ) {
          var check_in = document.getElementById("checkInDate").value;
          var check_out = document.getElementById("checkOutDate").value;
          if (data[i].checkin == check_in && data[i].checkout == check_out) {
            var newlist = document.createElement("li");
            var text = `<div style = "display : flex; flex-direction: row; justify-content: space-evenly; align-items: center;">`;
            text += `<div><h3>${data[i].hotelName}</h3>
            <p>${data[i].hotelAddress}</p><p>Breakfast available ${data[i].hotelBreakfast} extra charges</p></div>`;
            text += `<div style = "height: 100%;"><p><del>${data[i].originalPrice}</del></p><p>${data[i].discountPrice}</p></div>`;
            text += "</div>";

            newlist.innerHTML = text;
            ul.appendChild(newlist);
          }
        } else if (
          bus &&
          data[i].from == place_from &&
          data[i].to == place_to &&
          data[i].date == departure_date &&
          Object.keys(data[i]).length == 10
        ) {
          var newlist = document.createElement("li");
          var text = `<div style = "display : flex; flex-direction: row; justify-content: space-evenly; align-items: center;">`;
          text += `<div><strong>${data[i].busProvider}</strong> <span style = "background-color: lightgreen; border-radius: 5px;">${data[i].rating}/5</span>
          <p>${data[i].busName} | ${data[i].busSeats} Seats Left</p><p>${data[i].from_time} <img src = "./green_line.png" alt = "line" width = "50px" height = "5px"> ${data[i].to_time}</p></div>`;
          text += `<div>starting from <p>${data[i].price}</p><button type = "button" style = "background-image: linear-gradient(93deg, #53b2fe, #065af3); color: white; border-radius: 5px; border:none; font-size: 13px; padding:2px;">Select Seats</button></div>`;
          text += "</div>";

          newlist.innerHTML = text;
          ul.appendChild(newlist);
        }
      }
    })
    .catch((err) => console.log(err));
}

function demo() {
  var k = document.getElementById("theme");
  var x = document.getElementById("img1");
  var y = document.getElementById("img2");
  var z = document.getElementById("img3");
  var a = document.getElementById("desc1");
  var b = document.getElementById("desc2");
  var c = document.getElementById("desc3");
  k.style.display = "inline-block";
  x.src = "kerala.jpg";
  y.src = "Himachal.jpg";
  z.src = "Delhi.jpg";
  a.innerHTML =
    "KERALA:-The tranquil beauty of Kerala has helped it to be named as one of the ‘10 paradises of the world’ and one of the 50 must see destinations of a lifetime by the National Geographic's Traveller magazine. Kerala, the state also offers exotic beaches, lush hill-stations, spectacular waterfalls, wilderness to explore, many sanctuaries, ancient ports, and greenery everywhere. The state is known for its hospitality and if you are currently in search of your next travel destination here is the one calling you. Get ready to explore the tranquil beauty through Kerala Holidays.";
  b.innerHTML =
    "HIMACHAL:-This is popularly renowned for its Himalayan landscapes and popular hill-stations. Many outdoor activities such as rock climbing, mountain biking, paragliding, ice-skating, trekking, rafting, and heli-skiing are popular tourist attractions in Himachal Pradesh.Get ready to explore the tranquil beauty through himachal pradesh holidays.";
  c.innerHTML =
    "DELHI:-It is famous for its heritage sites, featuring UNESCO Heritage sites like Red Fort, Humayun's Tomb, Jama Masjid and Qutub Minar. Some of the other popular tourist destinations in Delhi are Old Fort, the famous ISKCON temple - a famous Hindu spiritual destination and Akshardham.";
}

function demo1() {
  var k = document.getElementById("theme");
  var x = document.getElementById("img1");
  var y = document.getElementById("img2");
  var z = document.getElementById("img3");
  var a = document.getElementById("desc1");
  var b = document.getElementById("desc2");
  var c = document.getElementById("desc3");
  k.style.display = "inline-block";
  x.src = "jaipur.jfif";
  y.src = "kashmir.jpg";
  z.src = "nainital.jpg";
  a.innerHTML =
    "JAIPUR:-Jaipur is known as much for its fascinating monuments and colorful markets as it is for its gorgeous handloom garments and wonderfully laid-out gardens. It is really not very difficult to fall in love with Jaipur the moment you land here. Along with Delhi and Agra, Jaipur forms the Golden Triangle of Indian tourism.";
  b.innerHTML =
    "KASHMIR:-Some major tourist attractions in Jammu and Kashmir are Srinagar, the Mughal Gardens, Gulmarg, Pahalgam, Patnitop and Jammu. ... Jammu and Kashmir is also famous for its scenic beauty, flower gardens, apple farms and more. It attracts tourists for its unique handicrafts and the world-famous Kashmiri Shawls.";
  c.innerHTML =
    "NAINITAL:-Nainital, the charming Himalayan lake town, is a picture-postcard perfect hill-station and one of the most popular in Northern India. Commonly known as the 'Lake District', Nainital is nestled high up in the Kumaon Himalayas at an altitude of around 2,000 m above sea level.";
}
function demo2() {
  var k = document.getElementById("theme");
  var x = document.getElementById("img1");
  var y = document.getElementById("img2");
  var z = document.getElementById("img3");
  var a = document.getElementById("desc1");
  var b = document.getElementById("desc2");
  var c = document.getElementById("desc3");
  k.style.display = "inline-block";
  x.src = "ladakh.jpg";
  y.src = "goa.jpg";
  z.src = "gujarat.jpg";
  a.innerHTML =
    "LADAKH:-Ladakh is most famous for breathtaking landscapes, the crystal clear skies, the highest mountain passes, thrilling adventure activities, Buddhist Monasteries and festivals. ... Ladakh gains a lot of popularity for being the only cold desert in India apart from bordering the World's highest saltwater Lake Pangong Lake.";
  b.innerHTML =
    "GOA:-Goa is definitely the best tourist place for India. The pearl of the east, Goa is known for its Gothic churches, crumbling forts, palm-fringed beaches, coconut groves, ferry rides, bubbly folk music… the list is endless! With its 131-km-long coastline, Goa is an important locale in every tourist's itinerary.";
  c.innerHTML =
    "GUJARAT:-It is 9th most popular tourist regions in the country and was visited by 54.4 million domestic and international tourists in 2018. Gujarat offers scenic beauty from Great Rann of Kutch to the hills of Saputara. Gujarat is the one and only place to view pure Asiatic lions in the world.";
}
