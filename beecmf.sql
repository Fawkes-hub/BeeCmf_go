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

 Date: 30/08/2019 11:57:47
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
  `type` tinyint(3) UNSIGNED NOT NULL DEFAULT 1 COMMENT '菜单类型;1:有界面可访问菜单,2:无界面可访问菜单,3:只作为菜单',
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 0 COMMENT '状态;1:显示,0:不显示',
  `list_order` tinyint(3) UNSIGNED NOT NULL DEFAULT 100 COMMENT '排序',
  `controller` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '控制器名',
  `action` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '操作名称',
  `param` varchar(250) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '额外参数',
  `name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '菜单名称',
  `icon` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '菜单图标',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '备注',
  `module_belong` tinyint(3) NOT NULL DEFAULT 1 COMMENT '读取模块配置',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `status`(`status`) USING BTREE,
  INDEX `parent_id`(`parent_id`) USING BTREE,
  INDEX `controller`(`controller`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 720 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '后台菜单表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of cmf_menu
-- ----------------------------
INSERT INTO `cmf_menu` VALUES (1, 0, 1, 1, 2, 'IndexController', 'Main', '', '主页', '', '', 1);
INSERT INTO `cmf_menu` VALUES (6, 0, 0, 1, 100, 'Setting', 'default', '', '设置', 'layui-icon-setting', '系统设置入口', 1);
INSERT INTO `cmf_menu` VALUES (20, 0, 1, 1, 100, 'MenuController', 'default', '', '后台菜单', 'layui-icon-menu', '后台菜单管理', 1);
INSERT INTO `cmf_menu` VALUES (21, 20, 1, 1, 100, 'MenuController', 'Lists', '', '所有菜单', 'layui-icon-menu', '后台所有菜单列表', 1);
INSERT INTO `cmf_menu` VALUES (22, 20, 1, 1, 100, 'MenuController', 'Save', '', '后台菜单添加', '', '后台菜单添加', 1);
INSERT INTO `cmf_menu` VALUES (23, 20, 2, 1, 100, 'Menu', 'addPost', '', '后台菜单添加提交保存', '', '后台菜单添加提交保存', 1);
INSERT INTO `cmf_menu` VALUES (24, 20, 3, 1, 100, 'Menu', 'edit', '', '后台菜单编辑', '', '后台菜单编辑', 1);
INSERT INTO `cmf_menu` VALUES (25, 20, 2, 1, 100, 'Menu', 'editPost', '', '后台菜单编辑提交保存', '', '后台菜单编辑提交保存', 1);
INSERT INTO `cmf_menu` VALUES (26, 20, 2, 1, 100, 'Menu', 'delete', '', '后台菜单删除', '', '后台菜单删除', 1);
INSERT INTO `cmf_menu` VALUES (27, 20, 2, 1, 100, 'Menu', 'listOrder', '', '后台菜单排序', '', '后台菜单排序', 1);
INSERT INTO `cmf_menu` VALUES (49, 109, 0, 1, 100, 'User', 'default', '', '平台管理组', '', '管理组', 1);
INSERT INTO `cmf_menu` VALUES (50, 49, 1, 1, 100, 'Rbac', 'index', 'type=1', '角色管理', '', '角色管理', 1);
INSERT INTO `cmf_menu` VALUES (51, 50, 1, 1, 100, 'Rbac', 'roleAdd', '', '添加角色', '', '添加角色', 1);
INSERT INTO `cmf_menu` VALUES (52, 50, 2, 1, 100, 'Rbac', 'roleAddPost', '', '添加角色提交', '', '添加角色提交', 1);
INSERT INTO `cmf_menu` VALUES (53, 50, 1, 1, 100, 'Rbac', 'roleEdit', '', '编辑角色', '', '编辑角色', 1);
INSERT INTO `cmf_menu` VALUES (54, 50, 2, 1, 100, 'Rbac', 'roleEditPost', '', '编辑角色提交', '', '编辑角色提交', 1);
INSERT INTO `cmf_menu` VALUES (55, 50, 2, 1, 100, 'Rbac', 'roleDelete', '', '删除角色', '', '删除角色', 1);
INSERT INTO `cmf_menu` VALUES (56, 50, 1, 1, 100, 'Rbac', 'authorize', '', '设置角色权限', '', '设置角色权限', 1);
INSERT INTO `cmf_menu` VALUES (57, 50, 2, 1, 100, 'Rbac', 'authorizePost', '', '角色授权提交', '', '角色授权提交', 1);
INSERT INTO `cmf_menu` VALUES (109, 0, 0, 1, 100, 'AdminIndex', 'default', '', '用户管理', 'group', '用户管理', 1);
INSERT INTO `cmf_menu` VALUES (110, 49, 1, 1, 100, 'User', 'Index', 'type=1', '管理员', '', '管理员管理', 1);
INSERT INTO `cmf_menu` VALUES (111, 110, 1, 1, 100, 'User', 'add', '', '管理员添加', '', '管理员添加', 1);
INSERT INTO `cmf_menu` VALUES (112, 111, 1, 1, 100, 'User', 'add', '', '管理员添加', '', '管理员添加', 1);
INSERT INTO `cmf_menu` VALUES (113, 111, 2, 1, 100, 'User', 'addPost', '', '管理员添加提交', '', '管理员添加提交', 1);
INSERT INTO `cmf_menu` VALUES (114, 111, 1, 1, 100, 'User', 'edit', '', '管理员编辑', '', '管理员编辑', 1);
INSERT INTO `cmf_menu` VALUES (115, 111, 2, 1, 100, 'User', 'editPost', '', '管理员编辑提交', '', '管理员编辑提交', 1);
INSERT INTO `cmf_menu` VALUES (116, 111, 1, 1, 100, 'User', 'userInfo', '', '个人信息', '', '管理员个人信息修改', 1);
INSERT INTO `cmf_menu` VALUES (117, 111, 2, 1, 100, 'User', 'userInfoPost', '', '管理员个人信息修改提交', '', '管理员个人信息修改提交', 1);
INSERT INTO `cmf_menu` VALUES (118, 111, 2, 1, 100, 'User', 'delete', '', '管理员删除', '', '管理员删除', 1);
INSERT INTO `cmf_menu` VALUES (119, 111, 2, 1, 100, 'User', 'ban', '', '停用管理员', '', '停用管理员', 1);
INSERT INTO `cmf_menu` VALUES (120, 111, 2, 1, 100, 'User', 'cancelBan', '', '启用管理员', '', '启用管理员', 1);
INSERT INTO `cmf_menu` VALUES (711, 0, 1, 1, 1, 'SysController', 'Config', '', '网站配置', 'layui-icon-control', '配置网站的一些信息 头像 logo等等', 1);

-- ----------------------------
-- Table structure for cmf_option
-- ----------------------------
DROP TABLE IF EXISTS `cmf_option`;
CREATE TABLE `cmf_option`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `autoload` tinyint(3) UNSIGNED NOT NULL DEFAULT 1 COMMENT '是否自动加载;1:自动加载;0:不自动加载',
  `option_name` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '配置名',
  `option_value` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL COMMENT '配置值',
  `option_comment` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '中文备注',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `option_name`(`option_name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 60 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '全站配置表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of cmf_option
-- ----------------------------
INSERT INTO `cmf_option` VALUES (59, 0, 'site_config', '{\"site_logo\":\"upload/pic/2019/08/30/3931623433393835663033636531323166363762616439343235303533643535.png\",\"site_name\":\"BeeCMF_go\",\"remark\":\"BeeCmf是基于Beego开发的易用、易扩展、界面友好的轻量级功能权限管理系统。\\n前端框架基于layui进行资源整合。\\n本系统基于beego开发，默认使用mysql数据库，缓存redis \"}', '');

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
INSERT INTO `cmf_user` VALUES (7, '超级管理员帐号', 'admin', 'upload/pic/2019/08/09/d6c4821b8532cda9c43c67a91a614e4f.jpg', '82790085228cf8a1e3bac41f45271e5f', 1);

SET FOREIGN_KEY_CHECKS = 1;
