function createContact() {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = "Phone: 408-555-4189";

    const address = document.createElement("p");
    address.textContent = "Address: 707 The Alameda, San Jose, CA";

    const restaurantLocation = document.createElement("img");
    restaurantLocation.src = "img/restaurant-map.png";
    restaurantLocation.alt = "Sushi Kunai location";

    contact.appendChild(phoneNumber);
    contact.appendChild(address);
    contact.appendChild(restaurantLocation);

    return contact;
} 

function loadContact() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createContact());
}

export default loadContact;