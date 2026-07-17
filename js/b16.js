console.log("===== Function Expression: ======");

//Cú pháp Function Declaration: function ten_function(){ than ham}
//Function Declaration có thể gọi trước khi khai báo:

//Cú Pháp fnc Expression
// gọi sau khai báo

let tinhTong = function (a, b) {
  console.log("===== Tinh tong ======");
  let tong = a + b;
  console.log(tong);

  return tong;
};

//  cách sử dùng : giống với fnc bình thường
let tong = tinhTong(10, 20);
console.log("👉 tong", tong);

// console.log("👉 tinhThanhTien", tinhThanhTien(10, 3));

// tinh tien (gia , soluong) trả về tổng tiền
let tinhThanhTien = function (gia, soLuong) {
  // than ham
  return gia * soLuong;
};

let tienBanhMi = tinhThanhTien(2000, 4);
let tienTraSua = tinhThanhTien(4500, 3);

console.log("👉 tienBanhMi", tienBanhMi.toLocaleString());
console.log("👉 tienTraSua", tienTraSua.toLocaleString());

console.log("👉 tinhThanhTien_v2", tinhThanhTien_v2(10, 3));
//// tinh tien (gia , soluong) trả về tổng tiền
function tinhThanhTien_v2(gia, soLuong) {
  // than ham
  return gia * soLuong;
}

//  ======[V3] ARROW FUNCTION ====
// hàm mũi tên
// let tinhTong = function(a, b){ return a+b }
let tinhTong_v3 = (a, b) => {
  return a + b;
};
// cách dùng như cũ
console.log("✅ [ARROW] Tinh tong", tinhTong_v3(1, 2));

// tối giản code
// chỉ có 1 dòng return thì có thể lượt bỏ {  return    }
let tinhTong_v4 = (a, b) => a + b;
console.log("✅ tinhTong_v4", tinhTong_v4(2, 3));
// chỉ có 1 tham số
// có thể bỏ () ở phần tham số
let tinhBinhPhuong = (so) => so * so;
console.log("✅ tinhBinhPhuong", tinhBinhPhuong(4));

// kiemTraSoChan nhan vo 1 so  => kiem tra chan le

let kiemTraSoChan = (so) => {
  //   if (so % 2 == 0) {
  //     return true;
  //   } else return false;
  return so % 2 == 0;
};

let kiemTraSoChan_v2 = (so) =>
  so % 2 == 0 ? "Đây là số chẵn" : "Đây là số lẻ";
console.log("✅ kiemTraSoChan_v2", kiemTraSoChan_v2(6));

function tinhHieu(a, b) {
  return a - b;
}
let tinhHieu_v1 = (a, b) => {
  return a - b;
};
let tinhHieu_v2 = (a, b) => a - b;

function tinhTich(a, b) {
  return a * b;
}
let tinhTich_v1 = (a, b) => {
  return a * b;
};
let tinhTich_v2 = (a, b) => a * b;

function kiemTraDuTuoi(tuoi) {
  return tuoi >= 18;
}
let kiemTraDuTuoi_v1 = (tuoi) => {
  if (tuoi >= 18) return "Đủ tuổi";
  else return "Chưa đủ tuổi";
};
let kiemTraDuTuoi_v2 = (tuoi) => (tuoi >= 18 ? "Đủ tuổi" : "Chưa đủ tuổi");

// 2 phiên bản  1 arrow funtion đầy đủ
//              1 arrow function gọn

// Default param
// xinChao
// có gía trị dự phòng khi người dùng không truyền dữ liệu
// => hạn chế bị undefinded
let xinChao = (name = "bạn") => {
  console.log("✅ Xin chào", name);
};

xinChao("Nga");
xinChao(); // quen truyen

// ham tinh giam gia  (giaTien , phanTramGiam = 0)
let tinhGiamGia = (giaTien = 10000, phanTramGiam = 0) => {
  let tienGiam = (giaTien * phanTramGiam) / 100;
  let thanhTien = giaTien - tienGiam;
  return thanhTien;
};

console.log("✅ giam 20%", tinhGiamGia(100000, 20).toLocaleString());
console.log("✅ khong giam", tinhGiamGia(100000).toLocaleString());
console.log("✅ giam 10%", tinhGiamGia(100000, 10).toLocaleString());
console.log("✅ khong co gi", tinhGiamGia().toLocaleString());

//  callback funtion : 1 hàm được truyền vào hàm khác dứoi dạng tham số
// hàm được gọi lại
// callback_fn : sẽ là 1 hàm nào đó bất kì
let thucHienChucNang = (callback_fn) => {
  console.log("✅ ==== Vào hàm callback ======");
  callback_fn();
  // () đại diện cho việc gọi hàm
  console.log("✅ ==== Kết thúc hàm callback ======");
};

//
thucHienChucNang(xinChao);


// callback có dữ liệu
let hienThiKetQua = ketQua =>{
    console.log("✅ ketQua", ketQua);
}
// callback có dữ liệu
let hienThiKetQuaDep = ketQua =>{
    console.log("======= Kết quả ======");
    console.log(ketQua);
    console.log("======= END ======");

}

let tinhTong_cb = (a, b, fnc) =>{
    let tong = a + b
    fnc(tong)
}

tinhTong_cb(3, 5 , hienThiKetQua)
tinhTong_cb(30, 5 , hienThiKetQuaDep)
// tong = 8 => hienThiKetQua(8) => 


// kết hợp với DOM



// Bài tập
// document.querySelector("#btn_id").onclick= function(){
//     console.log("✅ label");
// }

let test = (so)=>{
    console.log("✅ hello button",so);
}