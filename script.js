function toggleDropdown(){
    var dropdownContent = document.querySelector(".drop-down-contents");
    if(dropdownContent.style.display === "block"){
        dropdownContent.style.display = "none";
    }
    else{
        dropdownContent.style.display = "block";
    }
}

window.onclick = function(event){
    if(!event.target.matches('.drop-down-btn') && !event.target.matches('.drop-down-contents') && !event.target.matches('.drop-down-contents a')){
        var dropdowns = document.getElementsByClassName("drop-down-contents");
        for (var i = 0; i < dropdowns.length;i++){
            var openDropdown = dropdowns[i];
            if(openDropdown.style.display === "block"){
                openDropdown.style.display = "none"
            }
        }
    }
}

let page = 1;

function next() {
    // Cek ukuran layar dan hanya jalankan jika di bawah ukuran tertentu (misalnya, untuk mobile)
    if (window.innerWidth <= 414) {
        if (page === 1) {
            document.querySelector('.products-row-3').style.display = 'flex';
            document.querySelector('.products-row-2').style.display = 'none';
            page = 2;
        }
    }
}

function prev() {
    if (window.innerWidth <= 414) {
        if (page === 2) {
            document.querySelector('.products-row-3').style.display = 'none';
            document.querySelector('.products-row-2').style.display = 'flex';
            page = 1;
        }
    }
}
function allrow() {
    const row2 = document.querySelector('.products-row-2');
    const row3 = document.querySelector('.products-row-3');

    if (window.innerWidth > 414) {
        if (row2 && row3) {
            row2.style.display = 'flex';
            row3.style.display = 'flex';
        }
    }
}

window.addEventListener('resize', allrow);

allrow();

let currentImage = 0; 
const images = document.querySelectorAll('.carousel-item img');
const thumbnails = document.querySelectorAll('.carousel-indicator img');

function updateHeroDisplay() {
    images.forEach((img, index) => {
        img.style.display = index === currentImage ? 'block' : 'none';
    });

    thumbnails.forEach((thumb, index) => {
        if (index === currentImage) {
            thumb.classList.add('thumbnail-active');
        } else {
            thumb.classList.remove('thumbnail-active');
        }
    });
}

updateHeroDisplay();

function nextCarousel() {
    currentImage = (currentImage + 1) % 2;
    updateHeroDisplay();
}

function prevCarousel() {
    currentImage = (currentImage - 1 + 2) % 2;
    updateHeroDisplay();
}

const menuToggle = document.getElementById('menu-toggle');
const collapseNavbar = document.querySelector('.collapse-navbar-light');
const navbarLight = document.querySelector('.navbar-light');
const containerNavbarLight = document.querySelector('.container-navbar-light');
const body = document.body;
const containerBreadcrumb = document.querySelector('.container-breadcrumb');

menuToggle.addEventListener('click', function() {
    // Periksa apakah lebar layar kurang dari atau sama dengan 414px
    if (window.innerWidth <= 414) {
        // Periksa apakah navbar sudah terbuka atau belum
        if (collapseNavbar.style.display === 'flex') {
            // Menyembunyikan collapseNavbar dan mengembalikan ukuran navbar
            collapseNavbar.style.display = 'none';
            navbarLight.style.height = '81px';  // Ukuran navbar-light default
            containerNavbarLight.style.height = '81px';  // Ukuran container-navbar-light default
            body.style.height = '3786px';  // Ukuran body default

            // Kembalikan container-breadcrumb ke posisi semula
            containerBreadcrumb.style.marginTop = '0';  // Mengembalikan margin-top
        } else {
            // Menampilkan collapseNavbar dan memperbesar ukuran navbar
            collapseNavbar.style.display = 'flex';
            navbarLight.style.height = '879px';  // Ukuran navbar-light saat menu dibuka
            containerNavbarLight.style.height = '879px';  // Ukuran container-navbar-light
            body.style.height = '4584px';  // Ukuran body saat menu dibuka

            // Ubah margin-top container-breadcrumb ketika menu terbuka
            containerBreadcrumb.style.marginTop = '798px';  // Memberikan jarak saat menu terbuka
        }
    }
});








