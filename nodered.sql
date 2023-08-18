/*
 Navicat Premium Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 80033
 Source Host           : localhost:3306
 Source Schema         : nodered

 Target Server Type    : MySQL
 Target Server Version : 80033
 File Encoding         : 65001

 Date: 18/08/2023 11:13:23
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for account
-- ----------------------------
DROP TABLE IF EXISTS `account`;
CREATE TABLE `account`  (
  `username` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_password` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of account
-- ----------------------------
INSERT INTO `account` VALUES ('admin', 'admin');
INSERT INTO `account` VALUES ('123', '123');
INSERT INTO `account` VALUES ('abcd', '1234');

-- ----------------------------
-- Table structure for historyproduct
-- ----------------------------
DROP TABLE IF EXISTS `historyproduct`;
CREATE TABLE `historyproduct`  (
  `his_id` int NULL DEFAULT NULL,
  `his_pro_type` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `his_pro_num` int NULL DEFAULT NULL,
  `his_ord_time` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of historyproduct
-- ----------------------------
INSERT INTO `historyproduct` VALUES (74, 'W103', 1, '2023-8-17 16:49:4');
INSERT INTO `historyproduct` VALUES (73, 'W102', 2, '2023-8-17 16:49:0');

-- ----------------------------
-- Table structure for monitor
-- ----------------------------
DROP TABLE IF EXISTS `monitor`;
CREATE TABLE `monitor`  (
  `servo_speed` int NOT NULL DEFAULT 0,
  `exc_pos` int NULL DEFAULT NULL,
  `wait_pos` int NULL DEFAULT NULL,
  `step_1` int NULL DEFAULT NULL,
  `step_2` int NULL DEFAULT NULL,
  `step_3` int NULL DEFAULT NULL,
  `act_pos` int NULL DEFAULT NULL,
  `fre_con_speed` int NULL DEFAULT NULL,
  `low_speed` int NULL DEFAULT NULL,
  `high_speed` int NULL DEFAULT NULL,
  `index_id` int NOT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of monitor
-- ----------------------------
INSERT INTO `monitor` VALUES (90, -85, 23, 139, 318, 497, 318, 0, 5, 40, 1);
INSERT INTO `monitor` VALUES (60, -85, 23, 139, 318, 497, 497, 0, 5, 40, 0);

-- ----------------------------
-- Table structure for parameter
-- ----------------------------
DROP TABLE IF EXISTS `parameter`;
CREATE TABLE `parameter`  (
  `par_id` int NOT NULL AUTO_INCREMENT,
  `pro_type` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'W000',
  `pro_num` int NOT NULL DEFAULT 0,
  `pro_sum` int NOT NULL DEFAULT 0,
  `W101_sum` int NOT NULL DEFAULT 0,
  `W102_sum` int NOT NULL DEFAULT 0,
  `W103_sum` int NOT NULL DEFAULT 0,
  `W104_sum` int NOT NULL DEFAULT 0,
  `conv_set_v` float NOT NULL DEFAULT 0,
  `conv_act_v` float NOT NULL DEFAULT 0,
  `tran_set_v` float NOT NULL DEFAULT 0,
  `tran_act_v` float NOT NULL DEFAULT 0,
  `tran_set_pos` float NOT NULL DEFAULT 0,
  `tran_act_pos` float NOT NULL DEFAULT 0,
  PRIMARY KEY (`par_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of parameter
-- ----------------------------
INSERT INTO `parameter` VALUES (1, 'W000', 0, 0, 0, 0, 0, 0, 20, 16, 25, 20, 30, 28);
INSERT INTO `parameter` VALUES (2, 'W001', 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `pro_type` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'W000',
  `pro_num` int NOT NULL DEFAULT 0,
  `priority` int NOT NULL DEFAULT 1,
  `ord_time` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `status` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 76 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of product
-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;
