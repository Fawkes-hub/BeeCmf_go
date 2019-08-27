/*
 Navicat Premium Data Transfer

 Source Server         : 127.0.0.1
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : 127.0.0.1:3306
 Source Schema         : beecmf

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 27/08/2019 17:23:49
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for cmf_menu
-- ----------------------------
DROP TABLE IF EXISTS `cmf_menu`;
CREATE TABLE `cmf_menu`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `parent_id` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '父菜单id',
  `type` tinyint(3) UNSIGNED NOT NULL DEFAULT 1 COMMENT '菜单类型;1:有界面可访问菜单,2:无界面可访问菜单,0:只作为菜单',
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 0 COMMENT '状态;1:显示,0:不显示',
  `list_order` float NOT NULL DEFAULT 10000 COMMENT '排序',
  `controller` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '控制器名',
  `action` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '操作名称',
  `param` varchar(250) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '额外参数',
  `name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '菜单名称',
  `icon` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '菜单图标',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '备注',
  `module_belong` tinyint(3) NOT NULL DEFAULT 1 COMMENT '读取模块配置',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `status`(`status`) USING BTREE,
  INDEX `parent_id`(`parent_id`) USING BTREE,
  INDEX `controller`(`controller`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 604 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '后台菜单表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of cmf_menu
-- ----------------------------
INSERT INTO `cmf_menu` VALUES (1, 0, 1, 1, 0, 'IndexController', 'Main', '', '主页', '', '', 1);
INSERT INTO `cmf_menu` VALUES (6, 0, 0, 1, 0, 'Setting', 'default', '', '设置', 'layui-icon-setting', '系统设置入口', 1);
INSERT INTO `cmf_menu` VALUES (20, 0, 1, 1, 10000, 'MenuController', 'default', '', '后台菜单', 'layui-icon-menu', '后台菜单管理', 1);
INSERT INTO `cmf_menu` VALUES (21, 20, 1, 1, 10000, 'MenuController', 'Lists', '', '所有菜单', 'layui-icon-menu', '后台所有菜单列表', 1);
INSERT INTO `cmf_menu` VALUES (22, 20, 1, 1, 10000, 'MenuController', 'Add', '', '后台菜单添加', '', '后台菜单添加', 1);
INSERT INTO `cmf_menu` VALUES (23, 20, 2, 1, 10000, 'Menu', 'addPost', '', '后台菜单添加提交保存', '', '后台菜单添加提交保存', 1);
INSERT INTO `cmf_menu` VALUES (24, 20, 1, 1, 10000, 'Menu', 'edit', '', '后台菜单编辑', '', '后台菜单编辑', 1);
INSERT INTO `cmf_menu` VALUES (25, 20, 2, 1, 10000, 'Menu', 'editPost', '', '后台菜单编辑提交保存', '', '后台菜单编辑提交保存', 1);
INSERT INTO `cmf_menu` VALUES (26, 20, 2, 1, 10000, 'Menu', 'delete', '', '后台菜单删除', '', '后台菜单删除', 1);
INSERT INTO `cmf_menu` VALUES (27, 20, 2, 1, 10000, 'Menu', 'listOrder', '', '后台菜单排序', '', '后台菜单排序', 1);
INSERT INTO `cmf_menu` VALUES (28, 20, 1, 1, 10000, 'Menu', 'getActions', '', '导入新后台菜单', '', '导入新后台菜单', 1);
INSERT INTO `cmf_menu` VALUES (49, 109, 0, 1, 10000, 'User', 'default', '', '平台管理组', '', '管理组', 1);
INSERT INTO `cmf_menu` VALUES (50, 49, 1, 1, 10000, 'Rbac', 'index', 'type=1', '角色管理', '', '角色管理', 1);
INSERT INTO `cmf_menu` VALUES (51, 50, 1, 1, 10000, 'Rbac', 'roleAdd', '', '添加角色', '', '添加角色', 1);
INSERT INTO `cmf_menu` VALUES (52, 50, 2, 1, 10000, 'Rbac', 'roleAddPost', '', '添加角色提交', '', '添加角色提交', 1);
INSERT INTO `cmf_menu` VALUES (53, 50, 1, 1, 10000, 'Rbac', 'roleEdit', '', '编辑角色', '', '编辑角色', 1);
INSERT INTO `cmf_menu` VALUES (54, 50, 2, 1, 10000, 'Rbac', 'roleEditPost', '', '编辑角色提交', '', '编辑角色提交', 1);
INSERT INTO `cmf_menu` VALUES (55, 50, 2, 1, 10000, 'Rbac', 'roleDelete', '', '删除角色', '', '删除角色', 1);
INSERT INTO `cmf_menu` VALUES (56, 50, 1, 1, 10000, 'Rbac', 'authorize', '', '设置角色权限', '', '设置角色权限', 1);
INSERT INTO `cmf_menu` VALUES (57, 50, 2, 1, 10000, 'Rbac', 'authorizePost', '', '角色授权提交', '', '角色授权提交', 1);
INSERT INTO `cmf_menu` VALUES (71, 6, 1, 0, 0, 'Setting', 'site', '', '网站信息', '', '网站信息', 1);
INSERT INTO `cmf_menu` VALUES (72, 71, 2, 1, 10000, 'Setting', 'sitePost', '', '网站信息设置提交', '', '网站信息设置提交', 1);
INSERT INTO `cmf_menu` VALUES (73, 6, 1, 1, 10000, 'Setting', 'password', '', '密码修改', '', '密码修改', 1);
INSERT INTO `cmf_menu` VALUES (74, 73, 2, 1, 10000, 'Setting', 'passwordPost', '', '密码修改提交', '', '密码修改提交', 1);
INSERT INTO `cmf_menu` VALUES (75, 6, 1, 0, 10000, 'Setting', 'upload', '', '上传设置', '', '上传设置', 1);
INSERT INTO `cmf_menu` VALUES (76, 75, 2, 1, 10000, 'Setting', 'uploadPost', '', '上传设置提交', '', '上传设置提交', 1);
INSERT INTO `cmf_menu` VALUES (77, 6, 1, 0, 10000, 'Setting', 'clearCache', '', '清除缓存', '', '清除缓存', 1);
INSERT INTO `cmf_menu` VALUES (109, 0, 2, 0, 10, 'AdminIndex', 'default', '', '用户管理', 'group', '用户管理', 1);
INSERT INTO `cmf_menu` VALUES (110, 49, 1, 1, 10000, 'User', 'Index', 'type=1', '管理员', '', '管理员管理', 1);
INSERT INTO `cmf_menu` VALUES (111, 110, 1, 1, 10000, 'User', 'add', '', '管理员添加', '', '管理员添加', 1);
INSERT INTO `cmf_menu` VALUES (112, 111, 1, 1, 10000, 'User', 'add', '', '管理员添加', '', '管理员添加', 1);
INSERT INTO `cmf_menu` VALUES (113, 111, 2, 1, 10000, 'User', 'addPost', '', '管理员添加提交', '', '管理员添加提交', 1);
INSERT INTO `cmf_menu` VALUES (114, 111, 1, 1, 10000, 'User', 'edit', '', '管理员编辑', '', '管理员编辑', 1);
INSERT INTO `cmf_menu` VALUES (115, 111, 2, 1, 10000, 'User', 'editPost', '', '管理员编辑提交', '', '管理员编辑提交', 1);
INSERT INTO `cmf_menu` VALUES (116, 111, 1, 1, 10000, 'User', 'userInfo', '', '个人信息', '', '管理员个人信息修改', 1);
INSERT INTO `cmf_menu` VALUES (117, 111, 2, 1, 10000, 'User', 'userInfoPost', '', '管理员个人信息修改提交', '', '管理员个人信息修改提交', 1);
INSERT INTO `cmf_menu` VALUES (118, 111, 2, 1, 10000, 'User', 'delete', '', '管理员删除', '', '管理员删除', 1);
INSERT INTO `cmf_menu` VALUES (119, 111, 2, 1, 10000, 'User', 'ban', '', '停用管理员', '', '停用管理员', 1);
INSERT INTO `cmf_menu` VALUES (120, 111, 2, 1, 10000, 'User', 'cancelBan', '', '启用管理员', '', '启用管理员', 1);

-- ----------------------------
-- Table structure for cmf_user
-- ----------------------------
DROP TABLE IF EXISTS `cmf_user`;
CREATE TABLE `cmf_user`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `true_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '',
  `login` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `pwd` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `role` tinyint(1) NULL DEFAULT NULL COMMENT '1默认管理员',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name`(`true_name`) USING BTREE,
  UNIQUE INDEX `email`(`login`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 21 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '用户表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of cmf_user
-- ----------------------------
INSERT INTO `cmf_user` VALUES (7, 'adminzxzx', 'admin', 'upload/pic/2019/08/09/d6c4821b8532cda9c43c67a91a614e4f.jpg', '82790085228cf8a1e3bac41f45271e5f', 1);
INSERT INTO `cmf_user` VALUES (8, '张三李四', 'admin2', '', '82790085228cf8a1e3bac41f45271e5f', 0);
INSERT INTO `cmf_user` VALUES (9, '北冥有鱼', 'test', '', '82790085228cf8a1e3bac41f45271e5f', 0);
INSERT INTO `cmf_user` VALUES (10, '12', '11', '', '82790085228cf8a1e3bac41f45271e5f', 0);
INSERT INTO `cmf_user` VALUES (12, '121231', '123123', '', '82790085228cf8a1e3bac41f45271e5f', 0);
INSERT INTO `cmf_user` VALUES (13, '2', '2', '', '82790085228cf8a1e3bac41f45271e5f', 0);
INSERT INTO `cmf_user` VALUES (14, '2123', '2123123', '', '82790085228cf8a1e3bac41f45271e5f', 0);
INSERT INTO `cmf_user` VALUES (18, '123123', 'admin1', '', '82790085228cf8a1e3bac41f45271e5f', 0);
INSERT INTO `cmf_user` VALUES (19, 'xcvxcvxcv', 'xcvzxc', 'upload/pic/2019/08/09/f374988d4e7e090677e53445a37daccf.jpg', '82790085228cf8a1e3bac41f45271e5f', 0);
INSERT INTO `cmf_user` VALUES (20, '新的用户张三', 'plat', 'upload/pic/2019/08/09/bef0b650a851d77001c3dc9a63d12879.jpg', '82790085228cf8a1e3bac41f45271e5f', 0);

SET FOREIGN_KEY_CHECKS = 1;
