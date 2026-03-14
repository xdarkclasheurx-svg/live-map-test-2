var map = L.map('map').setView([48.5, 31], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

fetch("events.json")
.then(res => res.json())
.then(events => {
  let list = document.getElementById("eventList");
  events.forEach(event => {
    let marker = L.marker([event.lat,event.lng]).addTo(map);
    marker.bindPopup("<b>"+event.title+"</b><br>"+event.description);
    let li = document.createElement("li");
    li.innerHTML = "<b>"+event.title+"</b><br>"+event.description;
    li.onclick = () =>{
      map.setView([event.lat,event.lng],10);
      marker.openPopup();
    };
    list.appendChild(li);
  });
});