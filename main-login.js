document.getElementsByTagName("footer")[0].innerHTML = '<div id="foot"> <div id="address"> <h2>Địa chỉ</h2> <p>Số 14, ngõ 4, Nguyễn Đình Chiểu, Hai Bà Trưng, Hà Nội</p> <p>Mở cửa: 9:00 đến 18:00</p> <p>Phòng 2304, tầng 23, toà nhà StarCity, 81 Lê Văn Lương, Nhân Chính, Thanh Xuân, Hà Nội</p> <p>Mở cửa: 9:00 đến 18:00</p> </div> <div id="contact"> <h2>Contact</h2> <p>Mr Cường : 090.220.9011</p> <p>Mr Nghĩa : 096.440.7993</p> <p>cuong@techmaster.vn</p> </div> <div id="information"> <h2>Về chúng tôi</h2> <p>Việc làm</p> <p>Về chúng tôi</p> <p>Giảng viên</p> <p>Cơ sở vật chất</p> </div> </div>'
function banner() {
	$('#banner').css("opacity","1");
	$('.wrap').css("right","0");
}
function dangnhaphide() {
	$('#dangnhap').css("display","none");
}
function dangnhapshow() {
	$('#dangnhap').css("display","block");
}
function dangkyhide() {
	$('#dangky').css("display","none");
}
function dangkyshow() {
	$('#dangky').css("display","block");
}
function showmenu() {
	$('.nav').toggleClass('height160');
	$('.menu').toggleClass('height40');
}
