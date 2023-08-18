####### 项目简介
大一暑期自学了一些HTML和MySQL相关知识，尝试写了一个可以下单给PLC再进行生产并显示加工状态的网页界面，可以对PLC的DB块内相关数据进行读写。先在界面中下订单，等待PLC发送接收订单指令（1），发送订单给PLC，将订单状态设为“加工中”，订单完成后发送完成指令（2）延时2s再次发送接收订单指令（1）接收优先级最高且下单时间早的订单并加工。设备监控界面需要读取的DB块数据视实际情况而定。

####### 环境依赖
Node-RED version: v3.0.2
Node.js  version: v18.16.1
node-red-contrib-s7 version: v3.1.0
node-red-node-mysql version: v1.0.3

####### 部署步骤
1. npm install                       //安装node运行环境
2. node-red                          //启动node-red
3. node-red导入node-red-flow.json
4. PLC需要设置允许远程访问和关闭优化块访问

####### 目录结构描述
├── README.md                   // help
├── nodered.sql                 // 数据库文件
├── log_in.html                 // 登录注册
├── monitor.html                // 设备监控
├── operate.html                // 调试登录
├── operate_admin.html          // 设备调试
├── ord_management.html         // 订单管理
├── ord_finished.html           // 历史订单管理
├── order.html                  // 下单界面
├── node-red-flow.json          // node-red节点
├── script_history.js 
├── script_login.js
├── script_magem.js
├── script_monitor.js   
├── styles_magem.css
└── styles_op_admin.css

####### 说明
operate.html 账号密码都为admin，可自行修改使其与数据库数据匹配
log_in.html 注册账号均储存在Account表内
ord_management.html 查询Product表内数据
ord_finished.html 查询HistoryProduct表内数据
S7相关节点按实际情况配置 https://github.com/st-one-io/node-red-contrib-s7
配置教程 https://www.ad.siemens.com.cn/club/bbs/upload/file/20190107/6368245247212689561934974.pdf
该项目连接的PLC为 S7-1500