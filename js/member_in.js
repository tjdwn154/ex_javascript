window.onload=function(){
    var memid = document.getElementById('memid');
    var mempwd = document.getElementById('mempwd');
    var mempwd2 = document.getElementById('mempwd2');
    var memname = document.getElementById('memname');
    var b_year = document.getElementById('b_year');
    var b_month = document.getElementById('b_month');
    var b_day = document.getElementById('b_day');
    var memtel = document.getElementById('memtel');
    var gender = document.getElementById('gender');

    var inputAr = document.getElementsByTagName('input');
    for (var i=0; i<inputAr.length; i++){
        var input = inputAr[i];
        input.style.border = "1px solid lightgray";
        input.style.padding = "10px";
        if(i==4 || i==5) { // b_year,b_month
            input.style.width = "114px";
        }
        else{
        input.style.width = "376px";
        }
    }
};

function check(){
    var pwdCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    var reg = /^[0-9]+/g;



  if (memid.value == "") {
    alert("아이디를 입력하세요.");
    memid.focus();
  } else if (mempwd.value == "") {
    alert("비밀번호를 입력하세요.");
    mempwd.focus();
  } else if (!pwdCheck.test(mempwd.value)) {
    alert("비밀번호는 영문자+숫자+특수문자 조합으로 8~25자리 사용해야 합니다.");
    mempwd.focus();
    return false;
  } else if (mempwd2.value == "") {
    alert("비밀번호를 한번 더 입력하세요.");
    mempwd2.focus();
  } else if (mempwd2.value != mempwd.value) {
    alert("비밀번호가 일치하지 않습니다.");
    mempwd2.focus();
  } else if (memname.value == "") {
    alert("이름을 입력하세요.");
    memname.focus();
  } else if (memtel.value == "") {
    alert("전화번호를 입력하세요.");
    memtel.focus();
  } 
  else if (!reg.test(memtel.value)) {
    alert("전화번호는 숫자와 '-'를 입력해주세요.");
    memtel.focus();
    return false;
  } else {
    alert(memname.value + "님 저희 사이트에 회원이 되었습니다. 환영합니다.");
    // history.back();
    location.href = "main.html";
  }
};