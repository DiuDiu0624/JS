window.onload = checkForm;

function checkForm() {
    var oname = document.getElementById("user_name");
    var opwd = document.getElementById("pwd");
    var ocpwd = document.getElementById("cpwd");
    var otips = document.getElementsByClassName("error_tip");
    var oemail = document.getElementById("email");
    var oallow = document.getElementById("allow");
    var osubmit = document.querySelector("input[type = submit]");
    oname.onblur = checkname;
    opwd.onblur = checkpwd;
    ocpwd.onblur = checkcpwd;
    oemail.onblur = checkemail;
    oallow.onclick = checkallow;
    var fname = false;
    var fpwd = false;
    var fcpwd = false;
    var femail = false;

    document.forms[0].onsubmit = function () {
        checkname();
        checkpwd();
        checkcpwd();
        checkemail();
        checkallow();
        if(fname && fpwd && fcpwd && femail) {
            alert(oname.value + "," +  opwd.value + "," + ocpwd.value + "," + oemail.value);
            return true;
        }
        return false;
        return false;
    };


    function checkname() {
        if (oname.value === "") {
            otips[0].innerHTML = "用户名不能为空";
            otips[0].style.display = "block";
        } else if (!isvalid(oname.value)) {
            otips[0].innerHTML = "用户名格式不正确";
            otips[0].style.display = "block";
        } else {
            otips[0].innerHTML = "";
            otips[0].style.display = "none";
            fname = true;
        }
    }

    function checkpwd() {
        if (opwd.value === "") {
            otips[1].innerHTML = "密码不能为空";
            otips[1].style.display = "block";
        } else if (opwd.value.length < 6) {
            otips[1].innerHTML = "密码长度不够";
            otips[1].style.display = "block";
        } else {
            otips[1].innerHTML = "";
            otips[1].style.display = "none";
            fpwd = true;
        }
    }

    function checkcpwd() {
        if (ocpwd.value !== opwd.value) { 
            otips[2].innerHTML = "两次密码不一致";
            otips[2].style.display = "block";
        } 
        // else if(ocpwd.value === ""){
        //     otips[2].innerHTML = "密码不能为空";
        //     otips[2].style.display = "block";
        // }
        else {
            otips[2].innerHTML = "";
            otips[2].style.display = "none";
            fcpwd = true;
        }
    }

    function checkemail() {
        if (oemail.value === '') {
            otips[3].innerHTML = "邮箱不能为空";
            otips[3].style.display = "block";
        } else if (!isEmail(oemail.value)) {
            otips[3].innerHTML = "格式不正确";
            otips[3].style.display = "block";
        } else {
            otips[3].innerHTML = "";
            otips[3].style.display = "none";
            femail = true;
        }

    }

    function checkallow() {
        if (oallow.checked) {
            ///osubmit.removeAttribute("disabled");
            //osubmit.disabled = false;
            osubmit.disabled = "";
        } else {
            //osubmit.disabled = true;
            osubmit.disabled = "disabled";
        }
    }

}


function isvalid(s) {
    for (var i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        if (c >= 'A' && c <= 'Z' || c >= 'a' && c <= 'z' || c >= '0' && c <= '9') {
            continue;
        } else {
            return false;
        }
    }
    return true;
}

function isEmail(e) {
    return e.indexOf(".") !== -1 && e.indexOf("@") !== -1;
}