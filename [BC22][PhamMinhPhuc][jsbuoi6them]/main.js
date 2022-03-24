// // 1. Viết chương trình có một ô input, một button. Khi click vào button
// thì in ra các số nguyên tố từ 1 tới giá trị của ô input
var numberList = [];
document.getElementById("btnSubmit").onclick = function() {
    var content = ""
    var soduong = document.getElementById("txt_Soduong").value * 1;
    for (var i = 1; i < soduong; i++) {
        numberList.push(i);
        content += "<td>" + i + " " + "</td>"
    }
    console.log("soduong");
    console.log(numberList);
    document.getElementById('footerCard').innerHTML = content;
};


/** mentor chấm bài cho em hỏi nếu em sử dụng đoạn code ở dưới xài hàm push array nó có hiển thị dấu phẩy thì nó có được không
 */
// document.getElementById("btnSubmit").onclick = function() {

//         var soduong = document.getElementById("txt_Soduong").value * 1;
//         for (var i = 1; i < soduong; i++) {
//             numberList.push(i);
//         }

//         console.log(numberList);
//         document.getElementById('footerCard').innerHTML = numberList;
//     };