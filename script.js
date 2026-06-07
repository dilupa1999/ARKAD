function toggleFilter(id) {
    const filter = document.getElementById(`filter-${id}`);
    const icon = document.getElementById(`icon-${id}`);
    filter.classList.toggle('hidden');
    icon.classList.toggle('rotate-180');
  }
  function toggleSidebar() {
    const sidebar = document.getElementById("filterSidebar");
    sidebar.classList.toggle("-translate-x-full");
  }


  const carList = [
    "./Images/car/1.jpg",
    "./Images/car/2.jpg",
    "./Images/car/3.jpg",
    "./Images/car/4.jpg",
    "./Images/car/5.jpg"
  ];
  const propertyimages = [
    "./Images/House/1.jpg",
    "./Images/House/2.jpg",
    "./Images/House/3.jpg",
    "./Images/House/4.jpg",
    "./Images/House/5.jpg"
  ];
  const electronicsimages = [
    "./Images/phone/phone/1.jpg" ,
    "./Images/phone/phone/2.jpg" ,
    "./Images/phone/phone/3.jpg" ,
    "./Images/phone/phone/4.jpg" ,
    "./Images/phone/phone/5.jpg" ,
  ]
  let currentIndex = 0;

  function changeImage(src) {
    document.getElementById('mainImage').src = src;
  }

  function openFullscreen(src) {
    const modal = document.getElementById('fullscreenModal');
    const fullscreenImage = document.getElementById('fullscreenImage');
    fullscreenImage.src = src;
    modal.classList.remove('hidden');
  }

  function closeFullscreen() {
    const modal = document.getElementById('fullscreenModal');
    modal.classList.add('hidden');
  }

  function navigateImage(direction,name) {
    let images = getImgList(name);
    currentIndex = (currentIndex + direction + images.length) % images.length; // Loop around
    const fullscreenImage = document.getElementById('fullscreenImage');
    fullscreenImage.src = images[currentIndex];
  }
  

  // function getImgList(name) {
  //   let imageList = [];
  //   if(name === "car"){
  //     imageList = carList;
  //   }else if(name === "electronics"){
  //     imageList = electronicsimages;
  //   }
  //   return imageList;
  // }
  function getImgList(name) {
    const imageLists = {
      car: carList,
      electronics: electronicsimages,
      property: propertyimages,
      
    };
  
    return imageLists[name] || []; 
  }
  
  document.getElementById('toggleBtn').addEventListener('click', function() {
    let extraText = document.getElementById('extraText');
    let btnText = this.querySelector('span');
    let icon = document.getElementById('toggleIcon');

    if (extraText.classList.contains('hidden')) {
        extraText.classList.remove('hidden'); // Show extra text
        extraText.classList.add('block'); // Ensure visibility
        btnText.innerText = "Show less";
        icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
    } else {
        extraText.classList.add('hidden'); // Hide extra text
        extraText.classList.remove('block'); // Ensure it's hidden
        btnText.innerText = "Show more";
        icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
    }
});

const priceRange = document.getElementById("priceRange");
const selectedPrice = document.getElementById("selectedPrice");

priceRange.addEventListener("input", function () {
    selectedPrice.textContent = `Rs:${this.value}`;
});



