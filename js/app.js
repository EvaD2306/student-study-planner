const today = new Date();

const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
};

const formattedDate = today.toLocaleDateString("en-GB", options);

document.getElementById("current-date").textContent = formattedDate;