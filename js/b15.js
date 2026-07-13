let isLogin = false;
let checkLogin = "";

// if(isLogin){
//     checkLogin = "Xin chào , Phương Nga"
// } else{
//     // islogin = false
//     checkLogin = "Hãy đăng nhập để tiếp tục"
// }

// checkLogin = biểu thức toán tử ba ngôi
// biểu thức điều kiện ? giá trị khi dk đúng : giá trị khi dk sai
checkLogin = isLogin ? "Xin chào" : "Vui lòng đăng nhập";
console.log(checkLogin);

// kiểm tra số chẵn lẻ
let number1 = 23;
let kq1 = number1 % 2 == 0 ? "số chẵn" : " số lẻ";

console.log("👉 kq1", kq1);

// Kiểm tra đậu rớt : >=5 đậu ngược lai là rớt
let score = 4;
let kq2 = score >= 5 ? "Đậu" : "Rớt";

console.log("👉 kq2", kq2);

// kiểm tra giới tính
// 1: Nam , 0: là nữ
// 1 => truthy
// 0 => falsy
let gender = false;
let kq3 = gender ? "Nam" : "Nữ";

console.log("👉 kq3", kq3);

// if else if mở rộng
//
let dtb = 6.0;
let xepLoai =
  dtb >= 8 ? "Giỏi" : dtb >= 6.5 ? "Khá" : dtb >= 5 ? "Trung bình" : "Yếu";

console.log("👉 xepLoai", xepLoai);

// switch case
document.querySelector("#inputThu").oninput = function () {
  let so = document.querySelector("#inputThu").value;
  let kq = "";
//   if (so == 1) 
//     kq = "Chủ nhật";
//   else if (so == 2) {
//     kq = "Thứ hai";
//   } else if (so == 3) {
//     kq = "Thứ ba";
//   } else if (so == 4) {
//     kq = "Thứ tư";
//   } else if (so == 5) {
//     kq = "Thứ năm";
//   } else if (so == 6) {
//     kq = "Thứ sáu";
//   } else if (so == 7) {
//     kq = "Thứ baye";
//   } else {
//     kq = "Không hợp lệ";
//   }

    switch (so){
        // so == "1"
        case "1":
        case "8":
        case "15":
        case "22":
        {
            kq = "Chủ nhật"
            break;
        }
        case "2":
        case "9":
        case "16":
        case "23":
            {
            kq = "Thứ hai"
            break;
        }
        case "3":{
            kq = "Thứ ba"
            break;
        }
        case "4":{
            kq = "Thứ tư"
            break;
        }
        case "5":{
            kq = "Thứ năm"
            break;
        }
        case "6":{
            kq = "Thứ sáu"
            break;
        }
        case "7":{
            kq = "Thứ bảy"
            break;
        }

        //  tương ứng với else
        default: {
            kq  ="không hợp lệ"
            break
        }
    }
  document.querySelector("#result1").innerText = kq
};


//DÙNG SWITCH CASE VỚI GIÁ TRỊ CỤ THỂ , IF ELSE DÀNH CHO KHOẢNG GIÁ TRỊ