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

 Date: 23/08/2019 17:48:57
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
) ENGINE = InnoDB AUTO_INCREMENT = 600 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '后台菜单表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of cmf_menu
-- ----------------------------
INSERT INTO `cmf_menu` VALUES (6, 0, 0, 0, 0, 'Setting', 'default', '', '设置', 'cogs', '系统设置入口', 1);
INSERT INTO `cmf_menu` VALUES (7, 6, 1, 0, 50, 'Link', 'index', '', '友情链接', '', '友情链接管理', 1);
INSERT INTO `cmf_menu` VALUES (8, 7, 1, 0, 10000, 'Link', 'add', '', '添加友情链接', '', '添加友情链接', 1);
INSERT INTO `cmf_menu` VALUES (9, 7, 2, 0, 10000, 'Link', 'addPost', '', '添加友情链接提交保存', '', '添加友情链接提交保存', 1);
INSERT INTO `cmf_menu` VALUES (10, 7, 1, 0, 10000, 'Link', 'edit', '', '编辑友情链接', '', '编辑友情链接', 1);
INSERT INTO `cmf_menu` VALUES (11, 7, 2, 0, 10000, 'Link', 'editPost', '', '编辑友情链接提交保存', '', '编辑友情链接提交保存', 1);
INSERT INTO `cmf_menu` VALUES (12, 7, 2, 0, 10000, 'Link', 'delete', '', '删除友情链接', '', '删除友情链接', 1);
INSERT INTO `cmf_menu` VALUES (13, 7, 2, 0, 10000, 'Link', 'listOrder', '', '友情链接排序', '', '友情链接排序', 1);
INSERT INTO `cmf_menu` VALUES (14, 7, 2, 0, 10000, 'Link', 'toggle', '', '友情链接显示隐藏', '', '友情链接显示隐藏', 1);
INSERT INTO `cmf_menu` VALUES (15, 6, 1, 0, 10, 'Mailer', 'index', '', '邮箱配置', '', '邮箱配置', 1);
INSERT INTO `cmf_menu` VALUES (16, 15, 2, 0, 10000, 'Mailer', 'indexPost', '', '邮箱配置提交保存', '', '邮箱配置提交保存', 1);
INSERT INTO `cmf_menu` VALUES (17, 15, 1, 0, 10000, 'Mailer', 'template', '', '邮件模板', '', '邮件模板', 1);
INSERT INTO `cmf_menu` VALUES (18, 15, 2, 0, 10000, 'Mailer', 'templatePost', '', '邮件模板提交', '', '邮件模板提交', 1);
INSERT INTO `cmf_menu` VALUES (19, 15, 1, 0, 10000, 'Mailer', 'test', '', '邮件发送测试', '', '邮件发送测试', 1);
INSERT INTO `cmf_menu` VALUES (20, 6, 1, 0, 10000, 'Menu', 'index', '', '后台菜单', '', '后台菜单管理', 1);
INSERT INTO `cmf_menu` VALUES (21, 20, 1, 0, 10000, 'Menu', 'lists', '', '所有菜单', '', '后台所有菜单列表', 1);
INSERT INTO `cmf_menu` VALUES (22, 20, 1, 0, 10000, 'Menu', 'add', '', '后台菜单添加', '', '后台菜单添加', 1);
INSERT INTO `cmf_menu` VALUES (23, 20, 2, 0, 10000, 'Menu', 'addPost', '', '后台菜单添加提交保存', '', '后台菜单添加提交保存', 1);
INSERT INTO `cmf_menu` VALUES (24, 20, 1, 0, 10000, 'Menu', 'edit', '', '后台菜单编辑', '', '后台菜单编辑', 1);
INSERT INTO `cmf_menu` VALUES (25, 20, 2, 0, 10000, 'Menu', 'editPost', '', '后台菜单编辑提交保存', '', '后台菜单编辑提交保存', 1);
INSERT INTO `cmf_menu` VALUES (26, 20, 2, 0, 10000, 'Menu', 'delete', '', '后台菜单删除', '', '后台菜单删除', 1);
INSERT INTO `cmf_menu` VALUES (27, 20, 2, 0, 10000, 'Menu', 'listOrder', '', '后台菜单排序', '', '后台菜单排序', 1);
INSERT INTO `cmf_menu` VALUES (28, 20, 1, 0, 10000, 'Menu', 'getActions', '', '导入新后台菜单', '', '导入新后台菜单', 1);
INSERT INTO `cmf_menu` VALUES (29, 6, 1, 0, 30, 'Nav', 'index', '', '导航管理', '', '导航管理', 1);
INSERT INTO `cmf_menu` VALUES (30, 29, 1, 0, 10000, 'Nav', 'add', '', '添加导航', '', '添加导航', 1);
INSERT INTO `cmf_menu` VALUES (31, 29, 2, 0, 10000, 'Nav', 'addPost', '', '添加导航提交保存', '', '添加导航提交保存', 1);
INSERT INTO `cmf_menu` VALUES (32, 29, 1, 0, 10000, 'Nav', 'edit', '', '编辑导航', '', '编辑导航', 1);
INSERT INTO `cmf_menu` VALUES (33, 29, 2, 0, 10000, 'Nav', 'editPost', '', '编辑导航提交保存', '', '编辑导航提交保存', 1);
INSERT INTO `cmf_menu` VALUES (34, 29, 2, 0, 10000, 'Nav', 'delete', '', '删除导航', '', '删除导航', 1);
INSERT INTO `cmf_menu` VALUES (35, 29, 1, 0, 10000, 'NavMenu', 'index', '', '导航菜单', '', '导航菜单', 1);
INSERT INTO `cmf_menu` VALUES (36, 35, 1, 0, 10000, 'NavMenu', 'add', '', '添加导航菜单', '', '添加导航菜单', 1);
INSERT INTO `cmf_menu` VALUES (37, 35, 2, 0, 10000, 'NavMenu', 'addPost', '', '添加导航菜单提交保存', '', '添加导航菜单提交保存', 1);
INSERT INTO `cmf_menu` VALUES (38, 35, 1, 0, 10000, 'NavMenu', 'edit', '', '编辑导航菜单', '', '编辑导航菜单', 1);
INSERT INTO `cmf_menu` VALUES (39, 35, 2, 0, 10000, 'NavMenu', 'editPost', '', '编辑导航菜单提交保存', '', '编辑导航菜单提交保存', 1);
INSERT INTO `cmf_menu` VALUES (40, 35, 2, 0, 10000, 'NavMenu', 'delete', '', '删除导航菜单', '', '删除导航菜单', 1);
INSERT INTO `cmf_menu` VALUES (41, 35, 2, 0, 10000, 'NavMenu', 'listOrder', '', '导航菜单排序', '', '导航菜单排序', 1);
INSERT INTO `cmf_menu` VALUES (49, 109, 0, 1, 10000, 'User', 'default', '', '平台管理组', '', '管理组', 1);
INSERT INTO `cmf_menu` VALUES (50, 49, 1, 1, 10000, 'Rbac', 'index', 'type=1', '角色管理', '', '角色管理', 1);
INSERT INTO `cmf_menu` VALUES (51, 50, 1, 0, 10000, 'Rbac', 'roleAdd', '', '添加角色', '', '添加角色', 1);
INSERT INTO `cmf_menu` VALUES (52, 50, 2, 0, 10000, 'Rbac', 'roleAddPost', '', '添加角色提交', '', '添加角色提交', 1);
INSERT INTO `cmf_menu` VALUES (53, 50, 1, 0, 10000, 'Rbac', 'roleEdit', '', '编辑角色', '', '编辑角色', 1);
INSERT INTO `cmf_menu` VALUES (54, 50, 2, 0, 10000, 'Rbac', 'roleEditPost', '', '编辑角色提交', '', '编辑角色提交', 1);
INSERT INTO `cmf_menu` VALUES (55, 50, 2, 0, 10000, 'Rbac', 'roleDelete', '', '删除角色', '', '删除角色', 1);
INSERT INTO `cmf_menu` VALUES (56, 50, 1, 0, 10000, 'Rbac', 'authorize', '', '设置角色权限', '', '设置角色权限', 1);
INSERT INTO `cmf_menu` VALUES (57, 50, 2, 0, 10000, 'Rbac', 'authorizePost', '', '角色授权提交', '', '角色授权提交', 1);
INSERT INTO `cmf_menu` VALUES (61, 6, 1, 0, 10000, 'Route', 'index', '', 'URL美化', '', 'URL规则管理', 1);
INSERT INTO `cmf_menu` VALUES (62, 61, 1, 0, 10000, 'Route', 'add', '', '添加路由规则', '', '添加路由规则', 1);
INSERT INTO `cmf_menu` VALUES (63, 61, 2, 0, 10000, 'Route', 'addPost', '', '添加路由规则提交', '', '添加路由规则提交', 1);
INSERT INTO `cmf_menu` VALUES (64, 61, 1, 0, 10000, 'Route', 'edit', '', '路由规则编辑', '', '路由规则编辑', 1);
INSERT INTO `cmf_menu` VALUES (65, 61, 2, 0, 10000, 'Route', 'editPost', '', '路由规则编辑提交', '', '路由规则编辑提交', 1);
INSERT INTO `cmf_menu` VALUES (66, 61, 2, 0, 10000, 'Route', 'delete', '', '路由规则删除', '', '路由规则删除', 1);
INSERT INTO `cmf_menu` VALUES (67, 61, 2, 0, 10000, 'Route', 'ban', '', '路由规则禁用', '', '路由规则禁用', 1);
INSERT INTO `cmf_menu` VALUES (68, 61, 2, 0, 10000, 'Route', 'open', '', '路由规则启用', '', '路由规则启用', 1);
INSERT INTO `cmf_menu` VALUES (69, 61, 2, 0, 10000, 'Route', 'listOrder', '', '路由规则排序', '', '路由规则排序', 1);
INSERT INTO `cmf_menu` VALUES (70, 61, 1, 0, 10000, 'Route', 'select', '', '选择URL', '', '选择URL', 1);
INSERT INTO `cmf_menu` VALUES (71, 6, 1, 0, 0, 'Setting', 'site', '', '网站信息', '', '网站信息', 1);
INSERT INTO `cmf_menu` VALUES (72, 71, 2, 0, 10000, 'Setting', 'sitePost', '', '网站信息设置提交', '', '网站信息设置提交', 1);
INSERT INTO `cmf_menu` VALUES (73, 6, 1, 0, 10000, 'Setting', 'password', '', '密码修改', '', '密码修改', 1);
INSERT INTO `cmf_menu` VALUES (74, 73, 2, 0, 10000, 'Setting', 'passwordPost', '', '密码修改提交', '', '密码修改提交', 1);
INSERT INTO `cmf_menu` VALUES (75, 6, 1, 0, 10000, 'Setting', 'upload', '', '上传设置', '', '上传设置', 1);
INSERT INTO `cmf_menu` VALUES (76, 75, 2, 0, 10000, 'Setting', 'uploadPost', '', '上传设置提交', '', '上传设置提交', 1);
INSERT INTO `cmf_menu` VALUES (77, 6, 1, 0, 10000, 'Setting', 'clearCache', '', '清除缓存', '', '清除缓存', 1);
INSERT INTO `cmf_menu` VALUES (78, 6, 1, 0, 40, 'Slide', 'index', '', '幻灯片管理', '', '幻灯片管理', 1);
INSERT INTO `cmf_menu` VALUES (79, 78, 1, 0, 10000, 'Slide', 'add', '', '添加幻灯片', '', '添加幻灯片', 1);
INSERT INTO `cmf_menu` VALUES (80, 78, 2, 0, 10000, 'Slide', 'addPost', '', '添加幻灯片提交', '', '添加幻灯片提交', 1);
INSERT INTO `cmf_menu` VALUES (81, 78, 1, 0, 10000, 'Slide', 'edit', '', '编辑幻灯片', '', '编辑幻灯片', 1);
INSERT INTO `cmf_menu` VALUES (82, 78, 2, 0, 10000, 'Slide', 'editPost', '', '编辑幻灯片提交', '', '编辑幻灯片提交', 1);
INSERT INTO `cmf_menu` VALUES (83, 78, 2, 0, 10000, 'Slide', 'delete', '', '删除幻灯片', '', '删除幻灯片', 1);
INSERT INTO `cmf_menu` VALUES (84, 78, 1, 0, 10000, 'SlideItem', 'index', '', '幻灯片页面列表', '', '幻灯片页面列表', 1);
INSERT INTO `cmf_menu` VALUES (85, 84, 1, 0, 10000, 'SlideItem', 'add', '', '幻灯片页面添加', '', '幻灯片页面添加', 1);
INSERT INTO `cmf_menu` VALUES (86, 84, 2, 0, 10000, 'SlideItem', 'addPost', '', '幻灯片页面添加提交', '', '幻灯片页面添加提交', 1);
INSERT INTO `cmf_menu` VALUES (87, 84, 1, 0, 10000, 'SlideItem', 'edit', '', '幻灯片页面编辑', '', '幻灯片页面编辑', 1);
INSERT INTO `cmf_menu` VALUES (88, 84, 2, 0, 10000, 'SlideItem', 'editPost', '', '幻灯片页面编辑提交', '', '幻灯片页面编辑提交', 1);
INSERT INTO `cmf_menu` VALUES (89, 84, 2, 0, 10000, 'SlideItem', 'delete', '', '幻灯片页面删除', '', '幻灯片页面删除', 1);
INSERT INTO `cmf_menu` VALUES (90, 84, 2, 0, 10000, 'SlideItem', 'ban', '', '幻灯片页面隐藏', '', '幻灯片页面隐藏', 1);
INSERT INTO `cmf_menu` VALUES (91, 84, 2, 0, 10000, 'SlideItem', 'cancelBan', '', '幻灯片页面显示', '', '幻灯片页面显示', 1);
INSERT INTO `cmf_menu` VALUES (92, 84, 2, 0, 10000, 'SlideItem', 'listOrder', '', '幻灯片页面排序', '', '幻灯片页面排序', 1);
INSERT INTO `cmf_menu` VALUES (93, 6, 1, 0, 10000, 'Storage', 'index', '', '文件存储', '', '文件存储', 1);
INSERT INTO `cmf_menu` VALUES (94, 93, 2, 0, 10000, 'Storage', 'settingPost', '', '文件存储设置提交', '', '文件存储设置提交', 1);
INSERT INTO `cmf_menu` VALUES (95, 6, 1, 0, 20, 'Theme', 'index', '', '模板管理', '', '模板管理', 1);
INSERT INTO `cmf_menu` VALUES (96, 95, 1, 0, 10000, 'Theme', 'install', '', '安装模板', '', '安装模板', 1);
INSERT INTO `cmf_menu` VALUES (97, 95, 2, 0, 10000, 'Theme', 'uninstall', '', '卸载模板', '', '卸载模板', 1);
INSERT INTO `cmf_menu` VALUES (98, 95, 2, 0, 10000, 'Theme', 'installTheme', '', '模板安装', '', '模板安装', 1);
INSERT INTO `cmf_menu` VALUES (99, 95, 2, 0, 10000, 'Theme', 'update', '', '模板更新', '', '模板更新', 1);
INSERT INTO `cmf_menu` VALUES (100, 95, 2, 0, 10000, 'Theme', 'active', '', '启用模板', '', '启用模板', 1);
INSERT INTO `cmf_menu` VALUES (101, 95, 1, 0, 10000, 'Theme', 'files', '', '模板文件列表', '', '启用模板', 1);
INSERT INTO `cmf_menu` VALUES (102, 95, 1, 0, 10000, 'Theme', 'fileSetting', '', '模板文件设置', '', '模板文件设置', 1);
INSERT INTO `cmf_menu` VALUES (103, 95, 1, 0, 10000, 'Theme', 'fileArrayData', '', '模板文件数组数据列表', '', '模板文件数组数据列表', 1);
INSERT INTO `cmf_menu` VALUES (104, 95, 2, 0, 10000, 'Theme', 'fileArrayDataEdit', '', '模板文件数组数据添加编辑', '', '模板文件数组数据添加编辑', 1);
INSERT INTO `cmf_menu` VALUES (105, 95, 2, 0, 10000, 'Theme', 'fileArrayDataEditPost', '', '模板文件数组数据添加编辑提交保存', '', '模板文件数组数据添加编辑提交保存', 1);
INSERT INTO `cmf_menu` VALUES (106, 95, 2, 0, 10000, 'Theme', 'fileArrayDataDelete', '', '模板文件数组数据删除', '', '模板文件数组数据删除', 1);
INSERT INTO `cmf_menu` VALUES (107, 95, 2, 0, 10000, 'Theme', 'settingPost', '', '模板文件编辑提交保存', '', '模板文件编辑提交保存', 1);
INSERT INTO `cmf_menu` VALUES (108, 95, 1, 0, 10000, 'Theme', 'dataSource', '', '模板文件设置数据源', '', '模板文件设置数据源', 1);
INSERT INTO `cmf_menu` VALUES (109, 0, 2, 1, 10, 'AdminIndex', 'default', '', '用户管理', 'group', '用户管理', 1);
INSERT INTO `cmf_menu` VALUES (110, 49, 1, 1, 10000, 'User', 'index', 'type=1', '管理员', '', '管理员管理', 1);
INSERT INTO `cmf_menu` VALUES (111, 110, 1, 0, 10000, 'User', 'add', '', '管理员添加', '', '管理员添加', 1);
INSERT INTO `cmf_menu` VALUES (112, 111, 1, 0, 10000, 'User', 'add', '', '管理员添加', '', '管理员添加', 1);
INSERT INTO `cmf_menu` VALUES (113, 111, 2, 0, 10000, 'User', 'addPost', '', '管理员添加提交', '', '管理员添加提交', 1);
INSERT INTO `cmf_menu` VALUES (114, 111, 1, 0, 10000, 'User', 'edit', '', '管理员编辑', '', '管理员编辑', 1);
INSERT INTO `cmf_menu` VALUES (115, 111, 2, 0, 10000, 'User', 'editPost', '', '管理员编辑提交', '', '管理员编辑提交', 1);
INSERT INTO `cmf_menu` VALUES (116, 111, 1, 0, 10000, 'User', 'userInfo', '', '个人信息', '', '管理员个人信息修改', 1);
INSERT INTO `cmf_menu` VALUES (117, 111, 2, 0, 10000, 'User', 'userInfoPost', '', '管理员个人信息修改提交', '', '管理员个人信息修改提交', 1);
INSERT INTO `cmf_menu` VALUES (118, 111, 2, 0, 10000, 'User', 'delete', '', '管理员删除', '', '管理员删除', 1);
INSERT INTO `cmf_menu` VALUES (119, 111, 2, 0, 10000, 'User', 'ban', '', '停用管理员', '', '停用管理员', 1);
INSERT INTO `cmf_menu` VALUES (120, 111, 2, 0, 10000, 'User', 'cancelBan', '', '启用管理员', '', '启用管理员', 1);
INSERT INTO `cmf_menu` VALUES (123, 122, 1, 0, 10000, 'AdminArticle', 'add', '', '添加文章', '', '添加文章', 1);
INSERT INTO `cmf_menu` VALUES (124, 122, 2, 0, 10000, 'AdminArticle', 'addPost', '', '添加文章提交', '', '添加文章提交', 1);
INSERT INTO `cmf_menu` VALUES (125, 122, 1, 0, 10000, 'AdminArticle', 'edit', '', '编辑文章', '', '编辑文章', 1);
INSERT INTO `cmf_menu` VALUES (126, 122, 2, 0, 10000, 'AdminArticle', 'editPost', '', '编辑文章提交', '', '编辑文章提交', 1);
INSERT INTO `cmf_menu` VALUES (127, 122, 2, 0, 10000, 'AdminArticle', 'delete', '', '文章删除', '', '文章删除', 1);
INSERT INTO `cmf_menu` VALUES (128, 122, 2, 0, 10000, 'AdminArticle', 'publish', '', '文章发布', '', '文章发布', 1);
INSERT INTO `cmf_menu` VALUES (129, 122, 2, 0, 10000, 'AdminArticle', 'top', '', '文章置顶', '', '文章置顶', 1);
INSERT INTO `cmf_menu` VALUES (130, 122, 2, 0, 10000, 'AdminArticle', 'recommend', '', '文章推荐', '', '文章推荐', 1);
INSERT INTO `cmf_menu` VALUES (131, 122, 2, 0, 10000, 'AdminArticle', 'listOrder', '', '文章排序', '', '文章排序', 1);
INSERT INTO `cmf_menu` VALUES (133, 132, 1, 0, 10000, 'AdminCategory', 'add', '', '添加文章分类', '', '添加文章分类', 1);
INSERT INTO `cmf_menu` VALUES (134, 132, 2, 0, 10000, 'AdminCategory', 'addPost', '', '添加文章分类提交', '', '添加文章分类提交', 1);
INSERT INTO `cmf_menu` VALUES (135, 132, 1, 0, 10000, 'AdminCategory', 'edit', '', '编辑文章分类', '', '编辑文章分类', 1);
INSERT INTO `cmf_menu` VALUES (136, 132, 2, 0, 10000, 'AdminCategory', 'editPost', '', '编辑文章分类提交', '', '编辑文章分类提交', 1);
INSERT INTO `cmf_menu` VALUES (137, 132, 1, 0, 10000, 'AdminCategory', 'select', '', '文章分类选择对话框', '', '文章分类选择对话框', 1);
INSERT INTO `cmf_menu` VALUES (138, 132, 2, 0, 10000, 'AdminCategory', 'listOrder', '', '文章分类排序', '', '文章分类排序', 1);
INSERT INTO `cmf_menu` VALUES (139, 132, 2, 0, 10000, 'AdminCategory', 'delete', '', '删除文章分类', '', '删除文章分类', 1);
INSERT INTO `cmf_menu` VALUES (141, 140, 1, 0, 10000, 'AdminPage', 'add', '', '添加页面', '', '添加页面', 1);
INSERT INTO `cmf_menu` VALUES (142, 140, 2, 0, 10000, 'AdminPage', 'addPost', '', '添加页面提交', '', '添加页面提交', 1);
INSERT INTO `cmf_menu` VALUES (143, 140, 1, 0, 10000, 'AdminPage', 'edit', '', '编辑页面', '', '编辑页面', 1);
INSERT INTO `cmf_menu` VALUES (144, 140, 2, 0, 10000, 'AdminPage', 'editPost', '', '编辑页面提交', '', '编辑页面提交', 1);
INSERT INTO `cmf_menu` VALUES (145, 140, 2, 0, 10000, 'AdminPage', 'delete', '', '删除页面', '', '删除页面', 1);
INSERT INTO `cmf_menu` VALUES (147, 146, 1, 0, 10000, 'AdminTag', 'add', '', '添加文章标签', '', '添加文章标签', 1);
INSERT INTO `cmf_menu` VALUES (148, 146, 2, 0, 10000, 'AdminTag', 'addPost', '', '添加文章标签提交', '', '添加文章标签提交', 1);
INSERT INTO `cmf_menu` VALUES (149, 146, 2, 0, 10000, 'AdminTag', 'upStatus', '', '更新标签状态', '', '更新标签状态', 1);
INSERT INTO `cmf_menu` VALUES (150, 146, 2, 0, 10000, 'AdminTag', 'delete', '', '删除文章标签', '', '删除文章标签', 1);
INSERT INTO `cmf_menu` VALUES (153, 110, 0, 1, 10000, 'AdminIndex', 'default1', '', '用户组', '', '用户组', 1);
INSERT INTO `cmf_menu` VALUES (154, 153, 1, 1, 10000, 'AdminIndex', 'index', '', '本站用户', '', '本站用户', 1);
INSERT INTO `cmf_menu` VALUES (155, 154, 2, 0, 10000, 'AdminIndex', 'ban', '', '本站用户拉黑', '', '本站用户拉黑', 1);
INSERT INTO `cmf_menu` VALUES (156, 154, 2, 0, 10000, 'AdminIndex', 'cancelBan', '', '本站用户启用', '', '本站用户启用', 1);
INSERT INTO `cmf_menu` VALUES (157, 153, 1, 1, 10000, 'AdminOauth', 'index', '', '第三方用户', '', '第三方用户', 1);
INSERT INTO `cmf_menu` VALUES (158, 157, 2, 0, 10000, 'AdminOauth', 'delete', '', '删除第三方用户绑定', '', '删除第三方用户绑定', 1);
INSERT INTO `cmf_menu` VALUES (159, 6, 1, 0, 10000, 'AdminUserAction', 'index', '', '用户操作管理', '', '用户操作管理', 1);
INSERT INTO `cmf_menu` VALUES (160, 159, 1, 0, 10000, 'AdminUserAction', 'edit', '', '编辑用户操作', '', '编辑用户操作', 1);
INSERT INTO `cmf_menu` VALUES (161, 159, 2, 0, 10000, 'AdminUserAction', 'editPost', '', '编辑用户操作提交', '', '编辑用户操作提交', 1);
INSERT INTO `cmf_menu` VALUES (162, 159, 1, 0, 10000, 'AdminUserAction', 'sync', '', '同步用户操作', '', '同步用户操作', 1);
INSERT INTO `cmf_menu` VALUES (430, 109, 2, 0, 10000, 'rbac', 'storeManager', '', '店铺管理组', '', '', 1);
INSERT INTO `cmf_menu` VALUES (431, 430, 1, 0, 10000, 'Rbac', 'index', 'type=2', '角色管理', '', '角色管理', 1);
INSERT INTO `cmf_menu` VALUES (432, 430, 1, 0, 10000, 'User', 'index', 'type=2', '管理员', '', '管理员管理', 1);
INSERT INTO `cmf_menu` VALUES (436, 0, 1, 1, 10000, 'StoreLogistics', 'default', '', '物流管理', 'truck', '', 2);
INSERT INTO `cmf_menu` VALUES (437, 436, 1, 1, 10000, 'StoreLogistics', 'index', '', '物流列表', '', '', 2);
INSERT INTO `cmf_menu` VALUES (438, 436, 1, 1, 10000, 'storeLogistics', 'logisticsTempLists', '', '运费模板设置', '', '', 2);
INSERT INTO `cmf_menu` VALUES (439, 436, 1, 1, 10000, 'storeLogistics', 'LogisticsBilling', '', '设置快递计费方式', '', '', 2);
INSERT INTO `cmf_menu` VALUES (440, 0, 1, 1, 10000, 'CommonSet', 'default', 'cogs', '通用设置', 'cogs', '', 1);
INSERT INTO `cmf_menu` VALUES (441, 440, 1, 1, 10000, 'CommonSet', 'index', '', '站点设置', '', '', 1);
INSERT INTO `cmf_menu` VALUES (442, 440, 1, 1, 10000, 'CommonSet', 'banner', '', '广告管理', '', '', 1);
INSERT INTO `cmf_menu` VALUES (443, 440, 1, 1, 10000, 'CommonSet', 'getCommonOption', 'name=refund_reason', '退款原因管理', '', '', 1);
INSERT INTO `cmf_menu` VALUES (444, 440, 1, 1, 10000, 'CommonSet', 'setBusinessTime', '', '业务设置', '', '', 1);
INSERT INTO `cmf_menu` VALUES (445, 440, 1, 1, 10000, 'CommonSet', 'payType', '', '交易设置', '', '', 1);
INSERT INTO `cmf_menu` VALUES (446, 440, 1, 1, 10000, 'CommonSet', 'friendShipLink', '', '友链管理', '', '', 1);
INSERT INTO `cmf_menu` VALUES (447, 440, 1, 1, 10000, 'Article', 'index', '', '协议文章', '', '', 1);
INSERT INTO `cmf_menu` VALUES (470, 0, 1, 1, 1, 'Goods', 'default', '', '商品模块', 'shopping-cart', '', 2);
INSERT INTO `cmf_menu` VALUES (471, 0, 0, 1, 4, 'ShopMember', 'default', '', '账号模块', 'group', '', 2);
INSERT INTO `cmf_menu` VALUES (472, 470, 1, 1, 1, 'Goods', 'goodsCategoryList', '', '商品分类列表', '', '', 2);
INSERT INTO `cmf_menu` VALUES (473, 470, 1, 1, 4, 'Goods', 'goodsSpec', '', '商品规格', '', '', 2);
INSERT INTO `cmf_menu` VALUES (474, 471, 1, 1, 10000, 'shopMember', 'index', '', '会员列表', '', '', 2);
INSERT INTO `cmf_menu` VALUES (475, 470, 1, 1, 5, 'Goods', 'goodsBrand', '', '商品品牌', '', '', 2);
INSERT INTO `cmf_menu` VALUES (476, 470, 1, 1, 6, 'Goods', 'goodsLable', '', '商品标签', '', '', 2);
INSERT INTO `cmf_menu` VALUES (478, 470, 1, 1, 7, 'Goods', 'goodsAttribute', '', '商品属性', '', '', 2);
INSERT INTO `cmf_menu` VALUES (479, 470, 1, 1, 3, 'StoreGoods', 'publish', '', '发布商品', '', '', 2);
INSERT INTO `cmf_menu` VALUES (480, 470, 1, 1, 2, 'StoreGoods', 'index', '', '商品列表', '', '', 2);
INSERT INTO `cmf_menu` VALUES (481, 0, 1, 1, 2, 'Order', 'default', '', '订单模块', 'first-order', '', 2);
INSERT INTO `cmf_menu` VALUES (482, 481, 1, 1, 10000, 'StoreOrder', 'index', '', '订单列表', '', '', 2);
INSERT INTO `cmf_menu` VALUES (483, 481, 1, 1, 10000, 'Order', 'refundOrder', '', '退款列表', '', '', 2);
INSERT INTO `cmf_menu` VALUES (484, 0, 1, 1, 3, 'Wallet', 'default', '', '钱包模块', 'money', '', 2);
INSERT INTO `cmf_menu` VALUES (485, 484, 1, 1, 10000, 'Wallet', 'settings', '', '提现申请设置', '', '', 2);
INSERT INTO `cmf_menu` VALUES (486, 0, 0, 1, 10000, 'information', 'default', '', '资讯模块', 'info', '', 3);
INSERT INTO `cmf_menu` VALUES (487, 486, 1, 1, 10000, 'information', 'informationCategoryList', '', '文章分类', '', '', 3);
INSERT INTO `cmf_menu` VALUES (488, 0, 1, 1, 10000, 'Store', 'modularize', '', '商城可视化配置', 'ravelry', '', 1);
INSERT INTO `cmf_menu` VALUES (489, 486, 1, 1, 10000, 'information', 'informationCategoryEdit', '', '新增文章分类', 'file', '', 3);
INSERT INTO `cmf_menu` VALUES (490, 486, 1, 1, 10000, 'information', 'infoList', '', '文章列表', '', '', 3);
INSERT INTO `cmf_menu` VALUES (491, 486, 1, 1, 10000, 'information', 'infoEdit', '', '新增文章', '', '', 3);
INSERT INTO `cmf_menu` VALUES (494, 0, 1, 1, 10000, 'Plugin', 'JumpHook', 'hook=KidSms&controller=Sms&action=default', '短信模板', 'envelope-o', '', 1);
INSERT INTO `cmf_menu` VALUES (495, 494, 1, 1, 10000, 'Plugin', 'JumpHook', 'hook=KidSms&amp;controller=Sms&amp;action=Statistics', '短信查询', '', '', 1);
INSERT INTO `cmf_menu` VALUES (496, 486, 1, 1, 10000, 'information', 'businessinfolist', 'type=1', '企业动态列表', '', '', 3);
INSERT INTO `cmf_menu` VALUES (497, 486, 1, 1, 10000, 'information', 'businfoedit', 'type=1', '新增企业动态', '', '', 3);
INSERT INTO `cmf_menu` VALUES (498, 486, 1, 1, 10000, 'information', 'businessinfolist', 'type=2', '运营案例列表', '', '', 3);
INSERT INTO `cmf_menu` VALUES (499, 486, 1, 1, 10000, 'information', 'businfoedit', 'type=2', '新增运营案例', '', '', 3);
INSERT INTO `cmf_menu` VALUES (500, 486, 1, 1, 10000, 'information', 'businessinfolist', 'type=3', '产品展示列表', '', '', 3);
INSERT INTO `cmf_menu` VALUES (501, 486, 1, 1, 10000, 'information', 'businfoedit', 'type=3', '新增产品展示', '', '', 3);
INSERT INTO `cmf_menu` VALUES (502, 486, 1, 1, 10000, 'information', 'businessinfolist', 'type=4', '产品系列列表', '', '', 3);
INSERT INTO `cmf_menu` VALUES (503, 486, 1, 1, 10000, 'information', 'businfoedit', 'type=4', '新增产品系列', '', '', 3);
INSERT INTO `cmf_menu` VALUES (504, 440, 1, 1, 10000, 'CommonSet', 'sellerLevelList', '', '分销商等级管理', '', '', 1);
INSERT INTO `cmf_menu` VALUES (514, 486, 1, 1, 10000, 'information', 'exhibitionUpload', 'type=1', '线上展会', '', '', 3);
INSERT INTO `cmf_menu` VALUES (515, 486, 1, 1, 10000, 'information', 'exhibitionUpload', 'type=2', '线下展会', '', '', 3);
INSERT INTO `cmf_menu` VALUES (537, 0, 1, 1, 10000, 'Plugin', 'JumpHook', 'hook=Promotion&controller=Promotion&action=default', '促销模块', 'gift', '', 2);
INSERT INTO `cmf_menu` VALUES (538, 537, 1, 1, 10000, 'Plugin', 'JumpHook', 'hook=Seckill&controller=Seckill&action=default', '秒杀活动', '', '', 2);
INSERT INTO `cmf_menu` VALUES (539, 538, 1, 1, 10000, 'Plugin', 'JumpHook', 'hook=Seckill&amp;controller=Seckill&amp;action=phaselists', '秒杀时间段', '', '', 2);
INSERT INTO `cmf_menu` VALUES (540, 538, 1, 0, 10000, 'Plugin', 'JumpHook', 'hook=Seckill&amp;controller=Seckill&amp;action=seckillActivityLists', '秒杀活动列表', '', '', 2);
INSERT INTO `cmf_menu` VALUES (541, 0, 1, 0, 10000, 'Plugin', 'JumpHook', 'hook=Promotion&amp;controller=StorePromotion&amp;action=default', '促销模块', 'gift', '', 2);
INSERT INTO `cmf_menu` VALUES (542, 541, 1, 1, 10000, 'Plugin', 'JumpHook', 'hook=Seckill&controller=StoreSeckill&action=default', '秒杀活动', '', '', 2);
INSERT INTO `cmf_menu` VALUES (543, 542, 1, 1, 10000, 'Plugin', 'JumpHook', 'hook=Seckill&controller=StoreSeckill&action=activityLists', '秒杀活动列表', '', '', 2);
INSERT INTO `cmf_menu` VALUES (544, 0, 1, 1, 10000, 'Plugin', 'JumpHook', 'hook=Promotion&amp;controller=Promotion&amp;action=default', '优惠券', 'gift', '', 2);
INSERT INTO `cmf_menu` VALUES (545, 544, 1, 1, 10000, 'Plugin', 'JumpHook', 'hook=Coupon&controller=Coupon&action=lists', '优惠券', '', '', 2);
INSERT INTO `cmf_menu` VALUES (546, 440, 1, 1, 10000, 'commonSet', 'setScoreRule', '', '分销商积分规则设置', '', '', 1);
INSERT INTO `cmf_menu` VALUES (548, 0, 1, 1, 10000, 'Plugin', 'JumpHook', 'hook=KidLogistics&controller=logistics&action=default', '物流模块', 'flag', '', 1);
INSERT INTO `cmf_menu` VALUES (549, 548, 1, 1, 10000, 'Plugin', 'JumpHook', 'hook=KidLogistics&controller=Logistics&action=Statistics', '物流使用统计', '', '', 1);
INSERT INTO `cmf_menu` VALUES (550, 0, 0, 1, 10000, 'Seller', 'default', '', '分销管理', 'user-circle-o', '分销管理插件', 2);
INSERT INTO `cmf_menu` VALUES (551, 550, 1, 1, 10000, 'Plugin', 'jumpHook', 'hook=Distribution&controller=Seller&action=sellerList', '分销员管理', '', '分销员管理', 2);
INSERT INTO `cmf_menu` VALUES (574, 537, 1, 1, 10000, 'Plugin', 'JumpHook', 'hook=GroupBuy&controller=GroupBuy&action=default', '拼团活动', '', '', 2);
INSERT INTO `cmf_menu` VALUES (575, 574, 1, 1, 10000, 'Plugin', 'JumpHook', 'hook=GroupBuy&controller=GroupBuyChannel&action=index', '拼团频道', '', '', 2);
INSERT INTO `cmf_menu` VALUES (576, 574, 1, 1, 10000, 'Plugin', 'JumpHook', 'hook=GroupBuy&controller=StoreGroupBuy&action=index', '拼团商品', '', '', 2);
INSERT INTO `cmf_menu` VALUES (577, 484, 1, 1, 10000, 'Wallet', 'sellerApplyLists', '', '分销商提现记录', '', '', 2);
INSERT INTO `cmf_menu` VALUES (578, 484, 1, 1, 10000, 'Wallet', 'sellerApplyLists', '', '分销商提现记录', '', '', 2);
INSERT INTO `cmf_menu` VALUES (579, 538, 1, 1, 10000, 'Plugin', 'JumpHook', 'hook=Seckill&controller=StoreSeckill&action=activityLists', '秒杀活动列表', '', '', 2);
INSERT INTO `cmf_menu` VALUES (588, 440, 2, 1, 10000, 'commonSet', 'default', '', '地图管理', '', '', 1);
INSERT INTO `cmf_menu` VALUES (593, 588, 1, 1, 10000, 'commonSet', 'mapPointList', '', '地图点位管理', '', '', 1);
INSERT INTO `cmf_menu` VALUES (594, 588, 1, 1, 10000, 'commonSet', 'mapPointEdit', '', '添加地图点', '', '', 1);
INSERT INTO `cmf_menu` VALUES (595, 588, 1, 1, 10000, 'commonSet', 'mapManage', '', '地图管理', '', '', 1);
INSERT INTO `cmf_menu` VALUES (596, 0, 1, 1, 10000, 'Plugin', 'JumpHook', 'hook=IM&controller=IM&action=default', 'IM模块', 'cog', '', 2);
INSERT INTO `cmf_menu` VALUES (597, 596, 1, 1, 10000, 'Plugin', 'JumpHook', 'hook=SystemMessage&controller=SystemMessageTemplate&action=lists', '消息模板', '', '', 2);
INSERT INTO `cmf_menu` VALUES (598, 596, 1, 1, 10000, 'Plugin', 'JumpHook', 'hook=SystemMessage&controller=SystemMessage&action=lists', '发送记录', '', '', 2);
INSERT INTO `cmf_menu` VALUES (599, 596, 1, 1, 10000, 'Plugin', 'JumpHook', 'hook=SystemMessage&controller=SystemMessage&action=notify', '通知会员', '', '', 2);

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
