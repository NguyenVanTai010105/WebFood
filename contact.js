document.getElementById('myForm').addEventListener('submit', function (event) {
    // Ngăn chặn hành động mặc định của form (tránh refresh trang)
    event.preventDefault();

    // Hiển thị thông báo alert
    alert('Tuyệt vời ông mặt trời, cảm ơn bạn đã đóng góp ý kiến!');
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('myForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của form (tránh refresh trang)

        const data = {
            name: form.elements["name"].value,
            email: form.elements["email"].value,
            content: form.elements["content"].value,
        };

        postGoogle(data).then(() => {
            // Hiển thị thông báo alert sau khi dữ liệu đã được gửi thành công
            alert('Tuyệt vời ông mặt trời, cảm ơn bạn đã đóng góp ý kiến!');
        });
    });

    async function postGoogle(data) {
        const formURL = "https://docs.google.com/forms/u/1/d/e/1FAIpQLSf5RZgRwOXyFppufvoPmM_eXBs3d-hsdvsIxGbbkXARUiHt2g/formResponse?pli=1";
        const formData = new FormData();
        formData.append("entry.2097515203", data.name);
        formData.append("entry.1521955776", data.email);
        formData.append("entry.401693819", data.content);

        try {
            await fetch(formURL, {
                method: "POST",
                body: formData,
            });
            return true;
        } catch (error) {
            console.error('Error:', error);
            return false;
        }
    }
});

document.addEventListener("DOMContentLoaded",()=> {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const content = document.getElementById("content");
    const send = document.getElementById("send");
    send.addEventListener("click",(e)=>{
  
    e.preventDefault();
const data ={
    name: name.value,
    email: email.value,
    content: content.value,

};
postGoogle(data);
  });
async function postGoogle (data){
    const formURL="https://docs.google.com/forms/u/1/d/e/1FAIpQLSf5RZgRwOXyFppufvoPmM_eXBs3d-hsdvsIxGbbkXARUiHt2g/formResponse?pli=1";
    const formData= new FormData();
    formData.append("entry.2097515203",data.name);
    formData.append("entry.1521955776",data.email);
    formData.append("entry.401693819",data.content);
await fetch (formURL,{
    method:"POST",
    body:formData,
});
}

});


