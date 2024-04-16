const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const comment = document.querySelector('#list-comment')
const commentItem = document.querySelectorAll('#list-comment .item')
var translateY = 0
var count = commentItem.length

next.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 1) {
    // Xem hết bình luận
    return false
  }
  translateY += -400
  comment.style.transform = `translateY(${translateY}px)`
  count--
})

prev.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 3) {
    // Xem hết bình luận
    return false
  }
  translateY += 400
  comment.style.transform = `translateY(${translateY}px)`
  count++
})
// Lắng nghe sự kiện click trên các món ăn
document.addEventListener("DOMContentLoaded", function () {
  var items = document.querySelectorAll("#list-products .item");

  items.forEach(function (item) {
      item.addEventListener("click", function (event) {
          // Ngăn chặn hành vi mặc định của thẻ <a>
          event.preventDefault();

          // Lấy href của món ăn được bấm
          var href = item.querySelector('a').getAttribute('href');

          // Chuyển hướng đến trang tương ứng của món ăn
          window.location.href = href;
      });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var itemThitLonXaoCaChua = document.getElementById("thit-lon-xao-ca-chua");

  itemThitLonXaoCaChua.addEventListener("click", function (event) {
      event.preventDefault(); // Ngăn chặn chuyển hướng mặc định của thẻ <a>

      // Load nội dung của trang mới vào một phần tử vùng cụ thể trên trang hiện tại
      fetch("thit-lon-xao-ca-chua.html")
          .then(response => response.text())
          .then(data => {
              document.getElementById("content-area").innerHTML = data; // Thay đổi nội dung của phần vùng content
          })
          .catch(error => console.log(error));
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var itemLaugachuacay = document.getElementById("laugachuacay");

  itemLaugachuacay.addEventListener("click", function (event) {
      event.preventDefault(); // Ngăn chặn chuyển hướng mặc định của thẻ <a>

      // Load nội dung của trang mới vào một phần tử vùng cụ thể trên trang hiện tại
      fetch("laugachuacay.html")
          .then(response => response.text())
          .then(data => {
              document.getElementById("content-area").innerHTML = data; // Thay đổi nội dung của phần vùng content
          })
          .catch(error => console.log(error));
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.item'); // Chọn tất cả các phần tử có lớp 'item'

  items.forEach(function (item) {
      item.addEventListener('click', function () {
          // Loại bỏ lớp 'selected' từ tất cả các phần tử có lớp 'item'
          items.forEach(function (item) {
              item.classList.remove('selected');
          });

          // Thêm lớp 'selected' vào phần tử được nhấp vào
          this.classList.add('selected');
      });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var itemcanhkhoaitaythitbo = document.getElementById("canhkhoaitaythitbo");

  itemcanhkhoaitaythitbo.addEventListener("click", function (event) {
      event.preventDefault(); // Ngăn chặn chuyển hướng mặc định của thẻ <a>

      // Load nội dung của trang mới vào một phần tử vùng cụ thể trên trang hiện tại
      fetch("canhkhoaitaythitbo.html")
          .then(response => response.text())
          .then(data => {
              document.getElementById("content-area").innerHTML = data; // Thay đổi nội dung của phần vùng content
          })
          .catch(error => console.log(error));
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var itemBohamkhaitay = document.getElementById("Bohamkhoaitay");

  itemBohamkhaitay.addEventListener("click", function (event) {
      event.preventDefault(); // Ngăn chặn chuyển hướng mặc định của thẻ <a>

      // Load nội dung của trang mới vào một phần tử vùng cụ thể trên trang hiện tại
      fetch("Bohamkhoaitay.html")
          .then(response => response.text())
          .then(data => {
              document.getElementById("content-area").innerHTML = data; // Thay đổi nội dung của phần vùng content
          })
          .catch(error => console.log(error));
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var itemthitkhotau = document.getElementById("thitkhotau");

  itemthitkhotau.addEventListener("click", function (event) {
      event.preventDefault(); // Ngăn chặn chuyển hướng mặc định của thẻ <a>

      // Load nội dung của trang mới vào một phần tử vùng cụ thể trên trang hiện tại
      fetch("Thitkhotau.html")
          .then(response => response.text())
          .then(data => {
              document.getElementById("content-area").innerHTML = data; // Thay đổi nội dung của phần vùng content
          })
          .catch(error => console.log(error));
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var itemthitboxaogia = document.getElementById("thitboxaogia");

  itemthitboxaogia.addEventListener("click", function (event) {
      event.preventDefault(); // Ngăn chặn chuyển hướng mặc định của thẻ <a>

      // Load nội dung của trang mới vào một phần tử vùng cụ thể trên trang hiện tại
      fetch("thitboxaogia.html")
          .then(response => response.text())
          .then(data => {
              document.getElementById("content-area").innerHTML = data; // Thay đổi nội dung của phần vùng content
          })
          .catch(error => console.log(error));
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var itemsuonchuangot = document.getElementById("suonchuangot");

  itemsuonchuangot.addEventListener("click", function (event) {
      event.preventDefault(); // Ngăn chặn chuyển hướng mặc định của thẻ <a>

      // Load nội dung của trang mới vào một phần tử vùng cụ thể trên trang hiện tại
      fetch("Suonchuangot.html")
          .then(response => response.text())
          .then(data => {
              document.getElementById("content-area").innerHTML = data; // Thay đổi nội dung của phần vùng content
          })
          .catch(error => console.log(error));
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var itemsuonchuangot = document.getElementById("bohamdudu");

  itembohamdudu.addEventListener("click", function (event) {
      event.preventDefault(); // Ngăn chặn chuyển hướng mặc định của thẻ <a>

      // Load nội dung của trang mới vào một phần tử vùng cụ thể trên trang hiện tại
      fetch("bohamdudu.html")
          .then(response => response.text())
          .then(data => {
              document.getElementById("content-area").innerHTML = data; // Thay đổi nội dung của phần vùng content
          })
          .catch(error => console.log(error));
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var itemthitboxaolahe = document.getElementById("thitboxaolahe");

  itemsuonchuangot.addEventListener("click", function (event) {
      event.preventDefault(); // Ngăn chặn chuyển hướng mặc định của thẻ <a>

      // Load nội dung của trang mới vào một phần tử vùng cụ thể trên trang hiện tại
      fetch("thitboxaolahe.html")
          .then(response => response.text())
          .then(data => {
              document.getElementById("content-area").innerHTML = data; // Thay đổi nội dung của phần vùng content
          })
          .catch(error => console.log(error));
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var itemsuonchuangot = document.getElementById("longheoxaochuangot");

  itemthitboxaochuangot.addEventListener("click", function (event) {
      event.preventDefault(); // Ngăn chặn chuyển hướng mặc định của thẻ <a>

      // Load nội dung của trang mới vào một phần tử vùng cụ thể trên trang hiện tại
      fetch("thitboxaochuangot.html")
          .then(response => response.text())
          .then(data => {
              document.getElementById("content-area").innerHTML = data; // Thay đổi nội dung của phần vùng content
          })
          .catch(error => console.log(error));
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var itemgoichanga = document.getElementById("goichanga");

  itemgoichanga.addEventListener("click", function (event) {
      event.preventDefault(); // Ngăn chặn chuyển hướng mặc định của thẻ <a>

      // Load nội dung của trang mới vào một phần tử vùng cụ thể trên trang hiện tại
      fetch("goichanga.html")
          .then(response => response.text())
          .then(data => {
              document.getElementById("content-area").innerHTML = data; // Thay đổi nội dung của phần vùng content
          })
          .catch(error => console.log(error));
  });
});


const suggestions = [
  "Canh khoai tây thịt bò",
  "Cút lộn xào me",
  "Gỏi chân gà rút xương",
  "Lẩu gà chua cay",
  "Lòng heo xào chua ngọt",
  "Sườn kho chua ngọt",
  "Thịt heo xào cà chua",
  "Thịt bò xào giá",
  "Thịt bò xào lá hẹ",
  "Thịt kho tàu",
  "Bò hầm khoai tây",
  "Bò hầm đu đủ"
];

function showSuggestions() {
  const input = document.getElementById("searchInput");
  const filter = input.value.toLowerCase();
  const suggestionContainer = document.getElementById("suggestions");
  suggestionContainer.innerHTML = "";
  const filteredSuggestions = suggestions.filter((item) =>
    item.toLowerCase().includes(filter)
  );
  filteredSuggestions.forEach((item) => {
    const suggestion = document.createElement("div");
    suggestion.classList.add("suggestion");
    suggestion.textContent = item;
    suggestion.addEventListener("click", function () {
      redirectToPage(item);
    });
    suggestionContainer.appendChild(suggestion);
  });
}

function redirectToPage(keyword) {
  // Tạo một ánh xạ từ khóa với URL tương ứng
  const keywordUrlMap = {
    "Cút lộn xào me": "cutlonxaome.html",
    "Canh khoai tây thịt bò": "canhkhoaitaythitbo.html",
    "Gỏi chân gà rút xương": "goichanga.html",
    "Lẩu gà chua cay": "laugachuacay.html ",
    "Lòng heo xào chua ngọt": "longheoxaochuangot.html",
    "Sườn kho chua ngọt": "suonchuangot.html",
    "Thịt heo xào cà chua": "thitlonxaocachua.html",
    "Thịt bò xào giá": "thitboxaogia.html",
    "Thịt bò xào lá hẹ": "thitboxaolahe.html",
    "Thịt kho tàu": "thitkhotau.html",
    "Bò hầm khoai tây": "bohamkhoaitay.html",
    "Bò hầm đu đủ": "bohamdudu.html" 
    // Thêm các từ khóa và URL tương ứng khác nếu cần thiết
  };

  // Kiểm tra xem từ khóa có trong ánh xạ hay không
  if (keywordUrlMap.hasOwnProperty(keyword)) {
    // Nếu có, chuyển hướng đến URL tương ứng
    window.location.href = keywordUrlMap[keyword];
  } else {
    // Nếu không, thông báo lỗi
    console.log("URL not found for keyword:", keyword);
  }
}


const searchInput = document.getElementById("searchInput");
const suggestionContainer = document.getElementById("suggestions");

searchInput.addEventListener("input", function() {
  suggestionContainer.style.display = "block";
});


searchInput.addEventListener("input", function() {
  if (searchInput.value.trim() === "") {
      suggestionContainer.style.display = "none";
  } else {
      suggestionContainer.style.display = "block";
  }
});
const clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", function() {
const searchInput = document.getElementById("searchInput");
  searchInput.value = ""; // Xóa nội dung của trường tìm kiếm
  showSuggestions(); // Hiển thị lại danh sách gợi ý
  hideSuggestions(); // Ẩn gợi ý nếu trường tìm kiếm trống
});
function hideSuggestions() {
  const suggestionContainer = document.getElementById("suggestions");
  suggestionContainer.style.display = "none";
}



// js của login
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