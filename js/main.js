const startDate = "03 06 2021";

window.onload = (e) => {
  let images = document.querySelectorAll(".imageWrapper");
  for (let i = 0; i < images.length; i++) {
    const dateCompare = moment(startDate).add(i, "days").format("YYYY-MM-DD");
    const dateNow = moment();
    if (dateNow.isAfter(dateCompare, "days")) {
      images[i].classList.add("crossed");
    }
  }
};
