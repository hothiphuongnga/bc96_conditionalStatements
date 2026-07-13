dom("#r1").innerText = "Hello 1";
dom("#r2").innerText = "Hello 2";
dom("#r3").innerText = "Hello 3";
dom("#r4").innerText = "Hello 4";

//  đưa document.querySelector  thành function
function dom(sel) {
  return document.querySelector(sel);
}
// Thành Phố Hồ Chí Minh
// tphcm
// sg
// let a = 10, b=20
let a = 10;
let b = 20;
tong(a, b);
// console.log("a + b = ", 45 + 12);
tong(45, 12);

a = 11;
b = 21;
// console.log("a + b = ", a + b);
tong(a, b);

a = 55;
b = 90;
// console.log("a + b = ", a + b);
tong(a, b);
tong(8, 10);

// Cú pháp : khai bao fnc
function tong(a, b) {
  console.log("a + b bằng ", a + b);
}
// su dung ham  tong(10,20)

function reload() {
  console.log("Vui long reload lại trang website");
}

reload();
reload();
reload();
reload();
reload();
reload();
reload();
reload();
reload();
reload();
reload();
reload();

// CÁC LOẠI FUNCTION
// function return
// function tham số
// Có Tham Số
// function tong(a, b) : 2 tham số a và b
// function xinChao(name): tham số name
// không tham số
// function reload()
// function test()

// xin chào tên_nguoi_dung
function xinChao(ten) {
  console.log("Xin chào ", ten);
}

// gọi hàm
xinChao("Nga"); // truyền tham số vào cho hàm
xinChao(10);
xinChao(9.7);
xinChao(true);

// tính diện tích hình chữ nhật
// input là dài , rộng , tính xong thì console.log ra kết quả
// dai , rong là tham số / parameter
function dienTichHinhChuNhat(dai, rong) {
  let s = dai * rong;
  console.log(`Dien tich hình chu nhat dài = ${dai}, rộng = ${rong} là ${s} `);
}
// gọi hàm với dài = 3 rộng = 5
// 3 và 5 là giá trị tuyền vào / argument / đối số
dienTichHinhChuNhat(3, 5);
dienTichHinhChuNhat(9, 20);

// tính điểm trung bình
function dtb(toan, ly, hoa) {
  let diem = (toan + ly + hoa) / 3;
  console.log(`Điểm trung bình là : ${diem.toFixed(2)}`);
  // vừa làm nhiệm vụ trả về , vừa làm nhiệm vụ kết thúc hàm
  return diem // để lại 1 giá trị
    console.log("hello")
    console.log("hello")
    console.log("hello")
    console.log("hello")


}


let dToan = 10,
  dHoa = 8,
  dLy = 7;

let diemTrungBinh = dtb(dToan, dLy, dHoa);

console.log("👉 diemTrungBinh", diemTrungBinh);
//hàm xếp loại dựa trên điểm trung bình
function xepLoai(diemTB) {
  let kq = "";
  if (diemTB >= 8) {
    kq = "giỏi";
  } else if (diemTB >= 7) {
    kq = "Khá";
  } else if (diemTB >= 5) {
    kq = "trung bình";
  } else {
    kq = "yếu";
  }
  
  console.log("👉 kq", kq);
}


// xử dụng xepLoai
// tinhdtb hứng giá trị trả về của dtb
let tinhdtb= dtb(dToan, dLy, dHoa)
xepLoai(tinhdtb);



// ====== function return =======

// tính tổng 2 số là trả về giá trị
function tinhTong2(a,b){
    return a+b;
}

let res = tinhTong2(10,30); 

console.log("👉 res", res);