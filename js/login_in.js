window.onload = function logincheck() {
  var memid = document.getElementById("memid");
  var mempwd = document.getElementById("mempwd");
  const loginbtn = document.getElementById("loginbtn");

  loginbtn.addEventListener("click", () => {
    if (memid.value == "test" && mempwd.value=="0000") {
        alert("로그인 되었습니다.");
        location.href = "main.html";
    }
      else {
        alert("다시 확인해주세요.");
      }
  });
};