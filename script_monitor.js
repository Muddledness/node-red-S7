var socket = new WebSocket("ws://localhost:1880/ws/monitor");
        socket.onopen = function(event) {
            console.log("WebSocket connected");
        };
        var dataBase = [];
        socket.onmessage = function(event) {
            var receivedData = JSON.parse(event.data);
            var receservo_speed = receivedData[0].servo_speed;
            var receexc_pos = receivedData[0].exc_pos;
            var recewait_pos = receivedData[0].wait_pos;
            var recestep_1 = receivedData[0].step_1;
            var recestep_2 = receivedData[0].step_2;
            var recestep_3 = receivedData[0].step_3;
            var receact_pos = receivedData[0].act_pos;
            var recefre_con_speed = receivedData[0].fre_con_speed;
            var recelow_speed = receivedData[0].low_speed;
            var recehigh_speed = receivedData[0].high_speed;
            dataBase = [receservo_speed, receexc_pos, recewait_pos, recestep_1, recestep_2, recestep_3, 
                        receact_pos, recefre_con_speed, recelow_speed, recehigh_speed];
            return dataBase;
        };
        // 获取修改内容并发送数据库
        function submitInput(e){
            var WitchText = document.getElementById(e)
            if(e === 'servo_speed'){
                var dataToSend = {
                    servo_speed : WitchText.value,
                    exc_pos : dataBase[1],
                    wait_pos : dataBase[2],
                    step_1 : dataBase[3],
                    step_2 : dataBase[4],
                    step_3 : dataBase[5],
                    act_pos : dataBase[6],
                    fre_con_speed : dataBase[7],
                    low_speed : dataBase[8],
                    high_speed : dataBase[9]
                };
                socket.send(JSON.stringify(dataToSend));
            } else if (e === 'step_1'){
                var dataToSend = {
                    servo_speed : dataBase[0],
                    exc_pos : dataBase[1],
                    wait_pos : dataBase[2],
                    step_1 : WitchText.value,
                    step_2 : dataBase[4],
                    step_3 : dataBase[5],
                    act_pos : dataBase[6],
                    fre_con_speed : dataBase[7],
                    low_speed : dataBase[8],
                    high_speed : dataBase[9]
                };
                socket.send(JSON.stringify(dataToSend));
            } else if (e === 'step_2'){
                var dataToSend = {
                    servo_speed : dataBase[0],
                    exc_pos : dataBase[1],
                    wait_pos : dataBase[2],
                    step_1 : dataBase[3],
                    step_2 : WitchText.value,
                    step_3 : dataBase[5],
                    act_pos : dataBase[6],
                    fre_con_speed : dataBase[7],
                    low_speed : dataBase[8],
                    high_speed : dataBase[9]
                };
                socket.send(JSON.stringify(dataToSend));
            } else if (e === 'step_3'){
                var dataToSend = {
                    servo_speed : dataBase[0],
                    exc_pos : dataBase[1],
                    wait_pos : dataBase[2],
                    step_1 : dataBase[3],
                    step_2 : dataBase[4],
                    step_3 : WitchText.value,
                    act_pos : dataBase[6],
                    fre_con_speed : dataBase[7],
                    low_speed : dataBase[8],
                    high_speed : dataBase[9]
                };
                socket.send(JSON.stringify(dataToSend));
            } else if (e === 'exc_pos'){
                var dataToSend = {
                    servo_speed : dataBase[0],
                    exc_pos : WitchText.value,
                    wait_pos : dataBase[2],
                    step_1 : dataBase[3],
                    step_2 : dataBase[4],
                    step_3 : dataBase[5],
                    act_pos : dataBase[6],
                    fre_con_speed : dataBase[7],
                    low_speed : dataBase[8],
                    high_speed : dataBase[9]
                };
                socket.send(JSON.stringify(dataToSend));
            } else if (e === 'wait_pos'){
                var dataToSend = {
                    servo_speed : dataBase[0],
                    exc_pos : dataBase[1],
                    wait_pos : WitchText.value,
                    step_1 : dataBase[3],
                    step_2 : dataBase[4],
                    step_3 : dataBase[5],
                    act_pos : dataBase[6],
                    fre_con_speed : dataBase[7],
                    low_speed : dataBase[8],
                    high_speed : dataBase[9]
                };
                socket.send(JSON.stringify(dataToSend));
            } else if (e === 'act_pos'){
                var dataToSend = {
                    servo_speed : dataBase[0],
                    exc_pos : dataBase[1],
                    wait_pos : dataBase[2],
                    step_1 : dataBase[3],
                    step_2 : dataBase[4],
                    step_3 : dataBase[5],
                    act_pos : WitchText.value,
                    fre_con_speed : dataBase[7],
                    low_speed : dataBase[8],
                    high_speed : dataBase[9]
                };
                socket.send(JSON.stringify(dataToSend));
            } else if (e === 'fre_con_speed'){
                var dataToSend = {
                    servo_speed : dataBase[0],
                    exc_pos : dataBase[1],
                    wait_pos : dataBase[2],
                    step_1 : dataBase[3],
                    step_2 : dataBase[4],
                    step_3 : dataBase[5],
                    act_pos : dataBase[6],
                    fre_con_speed : WitchText.value,
                    low_speed : dataBase[8],
                    high_speed : dataBase[9]
                };
                socket.send(JSON.stringify(dataToSend));
            } else if (e === 'low_speed'){
                var dataToSend = {
                    servo_speed : dataBase[0],
                    exc_pos : dataBase[1],
                    wait_pos : dataBase[2],
                    step_1 : dataBase[3],
                    step_2 : dataBase[4],
                    step_3 : dataBase[5],
                    act_pos : dataBase[6],
                    fre_con_speed : dataBase[7],
                    low_speed : WitchText.value,
                    high_speed : dataBase[9]
                };
                socket.send(JSON.stringify(dataToSend));
            } else if (e === 'high_speed'){
                var dataToSend = {
                    servo_speed : dataBase[0],
                    exc_pos : dataBase[1],
                    wait_pos : dataBase[2],
                    step_1 : dataBase[3],
                    step_2 : dataBase[4],
                    step_3 : dataBase[5],
                    act_pos : dataBase[6],
                    fre_con_speed : dataBase[7],
                    low_speed : dataBase[8],
                    high_speed : WitchText.value
                };
                socket.send(JSON.stringify(dataToSend));
            }
        }