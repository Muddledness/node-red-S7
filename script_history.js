var socket = new WebSocket("ws://localhost:1880/ws/his_order");

socket.onopen = function(event) {
    console.log("WebSocket connected");
};

const table = document.getElementById('data-table');
var database = [];
// var newData = [];
socket.onmessage = function(event) {
    // var newData = [];
    var receivedData = JSON.parse(event.data);
    console.log(receivedData);
    for (let i = 0; i < receivedData.length; i++){
        var recehis_id = receivedData[i].his_id;
        var recehis_type = receivedData[i].his_pro_type;
        var recehis_num = receivedData[i].his_pro_num;
        var recehis_time = receivedData[i].his_ord_time;
        database[i] = { 'id':recehis_id, 'pro_type':recehis_type, 'pro_num':recehis_num, 'time':recehis_time};
        updateTable(database);
        // console.log(database);
    }
    return database;
};
// 更新前端表格
function updateTable(data) {
    table.innerHTML = '';
    const headerRow = table.insertRow();
    const headers = ['产品ID', '产品种类', '生产数量', '下单时间'];
    headers.forEach(header => {
        const cell = headerRow.insertCell();
        cell.innerText = header;
    });
    data.forEach(item => {
        const row = table.insertRow();
        const columns = ['id', 'pro_type', 'pro_num', 'time'];
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
// 删除订单
function deleteRow(id) {
    socket.send(JSON.stringify({ action: 'delete', id: id }));
    const deletedIndex = database.findIndex(item => item.id === id);
    if (deletedIndex !== -1) {
        database.splice(deletedIndex, 1);
        updateTable(database);
    }
}