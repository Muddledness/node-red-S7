var account = [];
        var socket = new WebSocket("ws://localhost:1880/ws/login");
        socket.onopen = function(event) {
            console.log("WebSocket connected");
        }
        socket.onmessage = function(event) {
            var receivedData = JSON.parse(event.data);
            for (let i = 0; i < receivedData.length; i++) {
                var receuser = receivedData[i].username;
                var recepassword = receivedData[i].user_password;
                account[i] = { receuser, recepassword };
            }
        }

        function login() {
            var username_val = document.getElementById("username").value;
            var password_val = document.getElementById("password").value;
            event.preventDefault();

            var loggedIn = false;
            for (let i = 0; i < account.length; i++) {
                if (username_val === account[i].receuser && password_val === account[i].recepassword) {
                    window.location.href = './order.html';
                    alert("登陆成功！");
                    loggedIn = true;
                    break;
                }
            }
            if (!loggedIn) {
                if (username_val === '' || password_val === '') {
                    alert("用户名或密码不能为空！");
                } else {
                    alert("用户名或密码错误！");
                }
            }
        }

        function toggleRegisterForm() {
            var loginForm = document.getElementById("login-form");
            var registerForm = document.getElementById("register-form");
            if (registerForm.style.display === "none") {
                registerForm.style.display = "block";
                loginForm.style.display = "none";
            } else {
                registerForm.style.display = "none";
                loginForm.style.display = "block";
            }
        }

        function register() {
            var newUsername = document.getElementById("new-username").value;
            var newPassword = document.getElementById("new-password").value;
            if (newUsername && newPassword) {
                alert("注册成功！");
                var dataToSend = {
                    username : newUsername,
                    password : newPassword
                };
                socket.send(JSON.stringify(dataToSend));
                toggleRegisterForm();
            } else {
                alert("请填写新用户名和新密码！");
            }
        }