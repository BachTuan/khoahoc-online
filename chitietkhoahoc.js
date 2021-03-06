function show() {
	$('#lythuyet').toggleClass('showdemuc');
}
function thuchanh() {
	$('#thuchanh').toggleClass('showdemuc');
}
document.getElementById('result').innerHTML = $('.CodeMirror-code').text()
function inketqua() {
	document.getElementById('result').innerHTML = $('.CodeMirror-code').text()
}
function bai1() {
	document.getElementById('noidungkhoahoc').innerHTML = "<h1>BÀI 1: GIỚI THIỆU VỀ HTML</h1> <p>Ngôn ngữ đánh dấu siêu văn bản (html) chỉ rõ một trang Web sẽ được hiển thị như thế nào trong một trình duyệt. Sử dụng các thẻ và các phần tử html, bạn có thể:</p> <p>+Điều khiển hình thức và nội dung của trang</p> <p>+Xuất bản các tài liệu trực tuyến và truy xuất thông tin trực tuyến bằng cách sử dụng các liên kết được chèn vào tài liệu html</p> <p>+Tạo các biểu mẫu trực tuyến để thu thập thông tin về người dùng, quản lý các giao dịch .....</p> <p>+Chèn các đối tượng như audio clip, video clip, các thành phần ActiveX, Flash và các Java Applet vào tài liệu html</p> <p>Tài liệu html tạo thành mã nguồn của trang Web. Khi được xem trên trình soạn thảo, tài liệu này là một chuỗi các thẻ và các phần tử, mà chúng xác định trang web hiển thị như thế nào. Trình duyệt đọc các file có đuôi .htm hay .html và hiển thị trang web đó theo các lệnh có trong đó. HTML là kiến thức cơ bản mà bất cứ ai muốn học lập trình web hoặc học thiết kế web đều phải biết. Tất cả các trang web dù xử lý phức tạp đến đâu đều phải trả về dưới dạng mã nguồn HTML để trình duyệt có thể hiểu và hiển thị lên được.</p> <p>Một tài liệu html gồm 3 phần cơ bản:</p> <p>+Phần html: Mọi tài liệu html phải bắt đầu bằng thẻ mở html &#60;html&#62; và kết thúc bằng thẻ đóng html &#60;/html&#62;. Thẻ html báo cho trình duyệt biết nội dung giữa hai thẻ này là một tài liệu html</p> <p>+Phần tiêu đề: Phần tiêu đề bắt đầu bằng thẻ &#60;head&#62; và kết thúc bởi thẻ &#60;/head&#62;. Phần này chứa tiêu đề mà được hiển thị trên thanh điều hướng của trang Web. Tiêu đề nằm trong thẻ title, bắt đầu bằng thẻ &#60;title&#62; và kết thúc là thẻ &#60;/title&#62;. Tiêu đề là phần khá quan trọng. Khi người dùng tìm kiếm thông tin, tiêu đề của trang Web cung cấp từ khóa chính yếu cho việc tìm kiếm.</p> <p>+Phần thân: phần này nằm sau phần tiêu đề. Phầ̀n thân bao gồm văn bản, hình ảnh và các liên kết mà bạn muốn hiển thị trên trang web của mình. Phần thân bắt đầu bằng thẻ &#60;body&#62; và kết thúc bằng thẻ &#60;/body&#62;</p>";
}
function bai2() {
	document.getElementById('noidungkhoahoc').innerHTML = '<h1>BÀI 2: CÁC THẺ HTML CƠ BẢN</h1><h3> Thẻ Headings (Tiêu đề)</h3><p>Phần tử này được sử dụng để trình bày tiêu đề cho phần nội dung hiển thị trên trang web. Những phần tiêu đề được hiển thị to và in đậm hơn để phân biệt chúng với các phần còn lại của văn bản. Chúng ta cũng có thể hiển thị phần tiêu đề theo một trong sáu kích thước từ h1 đến h6. Tất cả những gì chúng ta làm là định rõ kích thước h1, h2… Thẻ H1 dành cho các tiêu đề quan trọng nhất và giảm dần đến h6.</p><iframe width="560" height="315" src="https://www.youtube.com/embed/f34M4D5KbXI" frameborder="0" allowfullscreen></iframe><h3> Thẻ P (Đoạn văn)</h3><p> Là thẻ trình bày đoạn văn trong html</p><iframe width="560" height="315" src="https://www.youtube.com/embed/9ZooNOtCuZ0" frameborder="0" allowfullscreen></iframe>';
}
function thuchanh1() {
	document.getElementById('noidungkhoahoc').innerHTML = '<h2>I.Quiz</h2><button id="quizthuchanh" onclick="showquiz()">Quiz</button><div style="clear:both;"></div><h2>II.LAB</h2><p>Hãy tạo 1 trang wed với 1 tiêu đề và 1 đoạn văn</p><p>Gợi ý: Dùng thẻ h1 và thẻ p </p>';
}
function rank() {
	document.getElementById('noidungkhoahoc').innerHTML = '<table id="bangrank"> <tr> <td>HỌ TÊN</td> <td>THÀNH TÍCH</td> <td>HẠNG</td> </tr> <tr> <td>USER</td> <td>50000/5000 điểm</td> <td><img src="img/diamond.png"></td> </tr> <tr style="background-color:#ccc;"> <td>USER</td> <td>5000/5000 điểm</td> <td><img src="img/platium.png"></td> </tr> <tr> <td>USER</td> <td>500/5000 điểm</td> <td><img src="img/gold.png"></td> </tr> <tr> <td>USER</td> <td>50/5000 điểm</td> <td><img src="img/sliver.png"></td> </tr> <tr> <td>USER</td> <td>5/5000 điểm</td> <td><img src="img/bronze.png"></td> </tr> </table>'
}
function showquiz() {
	$('#wrap').css('display','block');
}
function hidequiz() {
	$('#wrap').css('display','none');
}
	var cau1 = {
		cauhoi:"Chọn định nghĩa SAI về HTML", dapanA:"Ngôn ngữ hiển thị mặc định của HTML không phải là tiếng Việt", dapanB:"HTML là ngôn ngữ trình bày trang web", dapanC:"Tài liệu HTML được tạo nên từ các thẻ", dapanD:"Phiên bản HTML mới nhất là HTML 5",
	};
	var cau2 = {
		cauhoi:"Theo tiêu chuẩn mới nhất của HTML5 thi khai báo doctype chuẩn là", dapanA:"!DOCTYPE html", dapanB:"!DOCTYPE html5", dapanC:"!DOCTYPE htmlnew", dapanD:"!DOCTYPE",
	};
	var cau3 = {
		cauhoi:"Thẻ nào dùng để định nghĩa danh sách có thứ tự?", dapanA:"ul", dapanB:"al", dapanC:"ol", dapanD:"el",
	};
	var cau4 = {
		cauhoi:"Đoạn HTML sau đây thêm màu nền cho trang là màu gì? <br> body {color:red;background-color:yellow;}", dapanA:"Đỏ", dapanB:"Đỏ và Vàng", dapanC:"Không màu", dapanD:"Vàng",
	};
	var mang = [cau1, cau2, cau3, cau4];
	var a = 0;
	function chuyencau() {
		if (a <= mang.length - 1) {
			document.getElementById("cauhoi").innerHTML = mang[a].cauhoi;
			document.getElementById("dapanA").innerHTML = mang[a].dapanA;
			document.getElementById("dapanB").innerHTML = mang[a].dapanB;
			document.getElementById("dapanC").innerHTML = mang[a].dapanC;
			document.getElementById("dapanD").innerHTML = mang[a].dapanD;
			document.getElementById("start").innerHTML = "Tiếp Tục";
			document.getElementById('ketqua-quiz').innerHTML = "";
		}
		else { 
			a = -1;
			document.getElementById("cauhoi").innerHTML = "Bạn đã kết thúc bài quiz";
			document.getElementById("dapanA").innerHTML = "";
			document.getElementById("dapanB").innerHTML = "";
			document.getElementById("dapanC").innerHTML = "";
			document.getElementById("dapanD").innerHTML = "";
			document.getElementById("start").innerHTML = "Bắt đầu lại";
			document.getElementById('ketqua-quiz').innerHTML = "";
		}
		a=a+1;
	}
	function traloi(aa,b) {
		if (aa==cau1.cauhoi) {
			if (b==cau1.dapanA) {
				document.getElementById('ketqua-quiz').innerHTML = "CHÍNH XÁC";
			}
			else {
				document.getElementById('ketqua-quiz').innerHTML = "SAI :((";
			}
		}
		if (aa==cau2.cauhoi) {
			if (b==cau2.dapanA) {
				document.getElementById('ketqua-quiz').innerHTML = "CHÍNH XÁC";
			}
			else {
				document.getElementById('ketqua-quiz').innerHTML = "SAI :((";
			}
		}
		if (aa==cau3.cauhoi) {
			if (b==cau3.dapanC) {
				document.getElementById('ketqua-quiz').innerHTML = "CHÍNH XÁC";
			}
			else {
				document.getElementById('ketqua-quiz').innerHTML = "SAI :((";
			}
		}
		if (aa==cau4.cauhoi) {
			if (b==cau4.dapanD) {
				document.getElementById('ketqua-quiz').innerHTML = "CHÍNH XÁC";
			}
			else {
				document.getElementById('ketqua-quiz').innerHTML = "SAI :((";
			}
		}
	}