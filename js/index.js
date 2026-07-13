// string : chuỗi
// NUmber: số
// NUll
// undefinded
//object
// {
//     name: "Nga",
//     age:10,
// }
// boolean

//

//

//
let nong = "hello"; // => true
console.log(typeof nong);
console.log(nong * 2);

// Cấu trúc điều kiện
// nếu trời nóng thì mở máy lạnh
// CÚ PHÁP
// if(dieu kien)
// {
//     // nếu điều đúng thì code trong đây sẽ chạy
// }
if (nong) {
  console.log("Bật máy lạnh");
} else {
  // if sai thì sẽ chạy code này
  console.log("tắt máy lạnh");
}

// truthy và falsy

// "", 0, null, undefined, NaN => falsy
// "sdfsdf" ,1, -100, {}, [], '0',.... => truthy

// toán tử so sánh
// > < >= <= == === != !== : kết quả của phép so sánh là boolean
// == ===
console.log("========= Toán tử so sánh ==========");
console.log("1 == '1'", 1 == "1"); // so sánh giá trị
console.log("1 === '1'", 1 === "1"); // so sánh giá trị  và KDL
console.log("1 === 1", 1 === 1);

//  != , !== :

console.log("10 != '10'", 10 != "10"); // false
console.log("10 !== '10'", 10 !== "10"); //

console.log("10 != '11'", 10 != "11"); //
console.log("10 !== '11'", 10 !== "11"); //

console.log(2 > 3);
console.log(2 <= 3);
console.log(2 < 3);
console.log(2 >= 3);

// toán tử logic
// ! && ||

// ! : phủ định
// !true => false
// !0 => true
console.log("======= Toán tử logic ======");

console.log("!true", !true);
console.log("!0", !0);
console.log("!1", !1);
console.log("!false", !false);

// && : và
// muốn đúng thì phải đúng hết
// console.log(biểu thức 1 && biểu thức 2) => true && true => true
// làm xong bài tập  , mẹ cho đi chơi => mới được đi chơi
console.log(2 == 2 && true); // true  && true => true
console.log("hello " && 1); // truthy
console.log(0 && 1); // false && true => false
console.log(true && false); // => false

// ||: hoặc
// chỉ cần 1 điều kiện đúng thì sẽ đúng hết
// điểm thi đại học >26 => được học trường A
// có giải quốc gia  => được học trường A
// đánh giá năng lực => được học trường A
// ietls: => được học trường A

// true || false || false => true
console.log(true || false); // => true

// làm bài tập ôn IF ELSE
// giao diện html cho phép nhập độ tuổi => đủ tuổi tham gia giao thông bằng xe máy >50cc

// có giao diện -> bấm button kiểm tra -> lấy ra giá trị từ input -> kiểm tra if else
// nếu đủ thì nội dung in ra màu xanh ngược lại màu đỏ

document.querySelector("#checkAge").onclick = function () {
  // console.log('first')
  // lay gias tri tu input
  let age = document.querySelector("#age").value;
  let domKq = document.querySelector("#result1")
  let kq = "";
  // kiem tra
  //
  console.log(age >= 18); // lowns hon 18 || = 18
  if (age >= 18 && age <= 80) { // từ 18 -> 80
    // 15
    //sai || đúng => đúng
    //sai && đúng => sai
    // chỉnh class alert alert-success
    kq = "Đủ tuổi lái xe máy >50cc";
    domKq.className = "alert alert-success mt-3";
  } 
  else if(age > 80){
     kq = "Người lớn tuổi ";
    domKq.className = "alert alert-warning mt-3";
  }
  else {
    // chỉnh class alter-danger

    kq = "Không đủ tuổi lái xe máy >50cc";
    domKq.className = "alert alert-danger mt-3";
  }
  domKq.innerText = kq;
  // output
};

//else if mở rộng
// if(dk1){

// }
// else if(dk2){

// }
// else{}


    // if (age >= 18 && age <= 80)
    // Cách khác
    // if(!(age < 18 || a > 80))
    // 15
    //   !( true ||  false) => ! true => false

    // nhâp điểm Toán , lý hoá , => tính dtb
    // Xếp loại => giỏi(>=8) khá(>=7) tb(>=5) yếu(<5)

    document.querySelector("#check2").onclick = function(){
        let domKq = document.querySelector("#result2")
        // input: dt , dl , dh
        let dt = document.querySelector("#dtoan").value
        let dl = document.querySelector("#dly").value
        let dh = document.querySelector("#dhoa").value
        // process: tính dtb , xếp loại tương ứng...
        
        let dtb = (Number(dl) + Number(dt) + Number(dh)) / 3;
        if(dtb >= 8){

            kq = "giỏi"
        }
        // khi nào chỗ này chạy 7.5

        else if(dtb >= 7){
            kq = "Khá"
        }
        else if(dtb >= 5){
            kq = "trung bình"
        }
        else{
            kq = "yếu"
        }
        // output: xep loai
        domKq.innerText = kq
    }
//Bài Tập : Xét thưởng nhân viên đạt đủ doanh số
// Yêu cầu: Viết một chương trình để xét thưởng cho nhân viên. Nếu nhân viên
// đạt mục tiêu bán hàng trên 100 sản phẩm, thưởng 10% tổng doanh số. Nếu
// không, không có thưởng.

// soluong > 100 => có hoá hồng  = doanh số * 10%

//but bi , but máy , túi LV

// 100 bút bi, 300 k => 30k
// 100 túi LV 300tr => 30tr
// 100 cái gì đó

document.querySelector("#check3").onclick = function(){
    let domKq = document.querySelector("#result3")
    // láy doanh thu, soluong
    let doanhThu = document.querySelector("#doanhSo").value
    let soLuong = document.querySelector("#soLuong").value
    let kq = ""
    if(soLuong >=100){
        // tính hoa hồng
        let hoaHong = Number(doanhThu) *  10 / 100 ;
        kq = `Hoa hồng là : ${hoaHong.toLocaleString()}`
    }else{
        kq = "Không đạt KPI"
    }
    domKq.innerText = kq
}
// không cần nhấn button kiểm tra -> sự kiện oninput cho doanhSo
document.querySelector("#doanhSo").oninput = function(){
    let domKq = document.querySelector("#result3")
    // láy doanh thu, soluong
    let doanhThu = document.querySelector("#doanhSo").value
    let soLuong = document.querySelector("#soLuong").value
    let kq = ""
    if(soLuong >=100){
        // tính hoa hồng
        let hoaHong = Number(doanhThu) *  10 / 100 ;
        kq = `Hoa hồng là : ${hoaHong.toLocaleString()}`
    }else{
        kq = "Không đạt KPI"
    }
    domKq.innerText = kq
}

// ===== Kiểm tra số chẵn lẻ ====
document.querySelector("#soChanLe").oninput = function(){
    // lấy ra giá trị của input
    let so = document.querySelector("#soChanLe").value
    let kq=""
    if(Number(so) % 2 == 0){
        kq = "Số chẵn"
    }
    else if(Number(so) % 2 !=0){
        kq = "Số lẻ"
    } else{
        kq = "Không hợp lệ"
    }
    document.querySelector("#result4").innerText = kq
}