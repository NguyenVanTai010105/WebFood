const wrapperlogin = document.querySelector('.wrapper-login');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

const btnPopup= document.querySelector('.btnLogin-popup');
const iconClose= document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapperlogin.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapperlogin.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapperlogin.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapperlogin.classList.remove('active-popup');
});




// Lấy phần tử overlay
const overlay = document.getElementById('overlay');

// Lấy phần tử đăng nhập
const loginPopup = document.querySelector('.wrapper-login');

// Xử lý sự kiện khi nút đăng nhập được nhấn
document.querySelector('.btnLogin-popup').addEventListener('click', function() {
    // Hiển thị phần đăng nhập
    loginPopup.classList.add('active-popup');
    // Hiển thị overlay
    overlay.style.display = 'block';
});

// Xử lý sự kiện khi nút đóng được nhấn
document.querySelector('.icon-close').addEventListener('click', function() {
    // Ẩn phần đăng nhập
    loginPopup.classList.remove('active-popup');
    // Ẩn overlay
    overlay.style.display = 'none';
});


// Lấy phần tử body
const body = document.querySelector('body');

// Xử lý sự kiện khi nút đăng nhập được nhấn
document.querySelector('.btnLogin-popup').addEventListener('click', function() {
    // Thêm lớp lock-scroll vào body để ngăn chặn lướt web
    body.classList.add('lock-scroll');
});

// Xử lý sự kiện khi nút đóng được nhấn
document.querySelector('.icon-close').addEventListener('click', function() {
    // Loại bỏ lớp lock-scroll khỏi body để cho phép lướt web lại
    body.classList.remove('lock-scroll');
});