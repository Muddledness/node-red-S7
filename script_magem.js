var socket = new WebSocket("ws://localhost:1880/ws/request");
socket.onopen = function(event) {
    console.log("WebSocket connected");
};
const table = document.getElementById('data-table');
var database = [];
var newData = [];
socket.onmessage = function(event) {
    var newData = [];
    var receivedData = JSON.parse(event.data);
    for (let i = 0; i < receivedData.length; i++){
        var receid = receivedData[i].id;
        var rece_type = receivedData[i].pro_type;
        var rece_num = receivedData[i].pro_num;
        var rece_prioity = receivedData[i].priority;
        var rece_time = receivedData[i].ord_time;
        var rece_status = receivedData[i].status;
        var item_data = { 'id':receid, 'pro_type':rece_type, 'pro_num':rece_num, 'priority':rece_prioity, 'time':rece_time, 'status':rece_status};
        if (rece_status != '已完成') {
            newData.push(item_data);
        }
        else {
            socket.send(JSON.stringify({ action: 'delete_to_his', id: receid }));
            // console.log("tohis");
        }
        // database[i] = { 'id':receid, 'pro_type':rece_type, 'pro_num':rece_num, 'priority':rece_prioity, 'time':rece_time, 'status':rece_status};
    }
    database = newData;
    updateTable(database);
    return database;
};

function updateTable(data) {
    table.innerHTML = '';
    const headerRow = table.insertRow();
    const headers = ['产品ID', '产品种类', '生产数量', '生产优先级', '下单时间', '订单状态'];
    headers.forEach(header => {
        const cell = headerRow.insertCell();
        cell.innerText = header;
    });
    data.forEach(item => {
        const row = table.insertRow();
        const columns = ['id', 'pro_type', 'pro_num', 'priority', 'time', 'status'];
        columns.forEach(column => {
            const cell = row.insertCell();
            cell.innerText = item[column];
        });
        const deleteCell = row.insertCell();
        const deleteButton = document.createElement('button');
        deleteButton.innerText = '删除订单';
        deleteButton.onclick = function () {
            deleteRow(item.id);
        };
        deleteCell.appendChild(deleteButton);
    });
};

function deleteRow(id) {
    socket.send(JSON.stringify({ action: 'delete', id: id }));
    const deletedIndex = database.findIndex(item => item.id === id);
    if (deletedIndex !== -1) {
        database.splice(deletedIndex, 1);
        updateTable(database);
    }
}