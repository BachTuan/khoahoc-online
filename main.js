document.getElementById("login-res").innerHTML = '<div id="dangnhap"> <form action="" id="form-dangnhap"> <p>Bạn cần đăng nhập để truy cập khóa học, nếu chưa có tài khoản hãy bấm vào <span style="cursor:pointer;color:blue;font-weight:bold;" onclick="dangkyshow(),dangnhaphide()">ĐĂNG KÝ TÀI KHOẢN</span> </p> <div> <h2>ĐĂNG NHẬP TÀI KHOẢN</h2> </div> <input type="text" name="email" placeholder="Email" class="nhapvao" id="email-login"/><br/> <input type="password" name="password" placeholder="Mật khẩu" class="nhapvao" /><br/> <input type="checkbox" name="ghinho" id="ghinho"/><label for="ghinho">Ghi nhớ tài khoản</label><br/> <input type="submit" value="ĐĂNG NHẬP" class="nutbam"></input><input type="button" class="nutbam" value="ĐÓNG LẠI" onclick="dangnhaphide()"></input> </form> </div> <div id="dangky"> <form> <div> <h2>ĐĂNG KÝ TÀI KHOẢN</h2> </div> <input type="text" name="họ tên" placeholder="Họ Và Tên" class="nhapvao" id="hoten" /><br> <input type="email" name="email" placeholder="Email" class="nhapvao" id="email-dangky"/><br/> <input type="password" name="password" placeholder="Mật khẩu" class="nhapvao" id="pass-dangky" /><br/> <input type="password" name="password" placeholder="Nhập lại mật khẩu" class="nhapvao" id="re-pass-dangky" /><br/> <input type="text" name="sodienthoai" placeholder="Số điện thoại" class="nhapvao" /><br/><br/> <input type="button" value="ĐĂNG KÝ" class="nutbam" onclick="dangky()"></input><input type="button" class="nutbam" value="ĐÓNG LẠI" onclick="dangkyhide()"></input> </form>'
document.getElementsByTagName("footer")[0].innerHTML = '<div id="foot"> <div id="address"> <h2>Địa chỉ</h2> <p>Số 14, ngõ 4, Nguyễn Đình Chiểu, Hai Bà Trưng, Hà Nội</p> <p>Mở cửa: 9:00 đến 18:00</p> <p>Phòng 2304, tầng 23, toà nhà StarCity, 81 Lê Văn Lương, Nhân Chính, Thanh Xuân, Hà Nội</p> <p>Mở cửa: 9:00 đến 18:00</p> </div> <div id="contact"> <h2>Contact</h2> <p>Mr Cường : 090.220.9011</p> <p>Mr Nghĩa : 096.440.7993</p> <p>cuong@techmaster.vn</p><img src="img/fb.png"/><img src="img/tw.png"/><img src="img/youtube.png"/> </div> <div id="information"> <h2>Về chúng tôi</h2> <p>Việc làm</p> <p>Về chúng tôi</p> <p>Giảng viên</p> <p>Cơ sở vật chất</p> </div> <a href="#header-first"><img id="backtotop" src="img/backtotop.png"></a></div>'
function banner() {
	$('#banner').css("opacity","1");
	$('.wrap').css("right","0");
};
function animategiangvien() {
	$('.giangvien').css('animation','giangvienanimate 1s ease');
	$('.giangvien').css('-webkit-animation','giangvienanimate 1s ease');
};
function showhocvien() {
	$('.hocvien').css("width","29.333%");
};
function dangnhaphide() {
	$('#dangnhap').css("display","none");
};
function dangnhapshow() {
	$('#dangnhap').css("display","block");
};
function dangkyhide() {
	$('#dangky').css("display","none");
};
function dangkyshow() {
	$('#dangky').css("display","block");
};
function showmenu() {
	$('.nav').toggleClass('height160');
	$('.menu').toggleClass('height40');
};
function dangky() {
	var name = $('#hoten').val();
	var email = $('#email-dangky').val();
	var matkhau = $('#pass-dangky').val();
	var patt = /^([a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}$)/;
	if (patt.test(email) && name.length >4 && matkhau != "" && matkhau == $('#re-pass-dangky').val()) {
		alert("Đăng Ký Thành Công");
	}
	else if (name.length <= 4) {
		$('#hoten').val("");
		$('#hoten').attr("placeholder","Tên phải nhiều hơn 4 ký tự");
	}
	else if (matkhau == "") {
		$('#pass-dangky').val("");
		$('#pass-dangky').attr("placeholder","Mật khẩu có ít nhất 1 ký tự");
	}
	else if (matkhau != $('#re-pass-dangky').val()) {
		$('#re-pass-dangky').val("");
		$('#re-pass-dangky').attr("placeholder","Mật khẩu chưa trùng khớp");
	}
	else {
		$('#email-dangky').val("");	
		$('#email-dangky').attr("placeholder","Bạn phải điền đúng dạng abc@def.xyz");
	}
};
$('#form-dangnhap').on('submit', function() {
	if($('#email-login').val() == "index") {
		$('#form-dangnhap').attr("action","index-login.html");
		return true;
	}
	if($('#email-login').val() == "khoahoc") {
		$('#form-dangnhap').attr("action","khoahoc-login.html");
		return true;
	}
	return false;
});