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
    const input = document.getElementById("searchInput1");
    const filter = input.value.toLowerCase();
    const suggestionContainer = document.getElementById("suggestions1");
    suggestionContainer.innerHTML = "";
    const filteredSuggestions = suggestions.filter((item) =>
      item.toLowerCase().includes(filter)
    );
    filteredSuggestions.forEach((item) => {
      const suggestion = document.createElement("div");
      suggestion.classList.add("suggestion1");
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

  
  const searchInput = document.getElementById("searchInput1");
  const suggestionContainer = document.getElementById("suggestions1");
  
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
  const clearButton = document.getElementById("clearButton1");
  clearButton.addEventListener("click", function() {
  const searchInput = document.getElementById("searchInput1");
    searchInput.value = ""; // Xóa nội dung của trường tìm kiếm
    showSuggestions(); // Hiển thị lại danh sách gợi ý
    hideSuggestions(); // Ẩn gợi ý nếu trường tìm kiếm trống
  });
  function hideSuggestions() {
    const suggestionContainer = document.getElementById("suggestions1");
    suggestionContainer.style.display = "none";
  }


  //JS CỦA lOGIN
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