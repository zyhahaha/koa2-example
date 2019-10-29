--
-- 表的结构 `db_account`
--

DROP TABLE IF EXISTS `db_account`;
CREATE TABLE IF NOT EXISTS `db_account` (
  `uuid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `types` varchar(20) DEFAULT '',
  `account` varchar(20) DEFAULT '' COMMENT '账号',
  `no` varchar(50) DEFAULT '' COMMENT '编号',
  `name` varchar(50) DEFAULT '' COMMENT '名称',
  `avatar` varchar(200) DEFAULT '' COMMENT '头像',
  `status` tinyint(3) unsigned DEFAULT '1' COMMENT '状态',
  `tim` int(10) unsigned DEFAULT '0' COMMENT '创建时间',
  `tim_up` int(10) unsigned DEFAULT '0' COMMENT '更新时间',
  PRIMARY KEY (`uuid`),
  KEY `no` (`no`),
  KEY `name` (`name`),
  KEY `status` (`status`)
) ENGINE=MyISAM;


--
-- 表的结构 `db_message`
--

DROP TABLE IF EXISTS `db_message`;
CREATE TABLE IF NOT EXISTS `db_message` (
  `uuid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `types` varchar(20) DEFAULT '',
  `name` varchar(50) DEFAULT '' COMMENT '名称',
  `message` varchar(200) DEFAULT '' COMMENT '内容',
  `avatar` varchar(200) DEFAULT '' COMMENT '头像',
  `status` tinyint(3) unsigned DEFAULT '1' COMMENT '状态',
  `tim` int(10) unsigned DEFAULT '0' COMMENT '创建时间',
  `tim_up` int(10) unsigned DEFAULT '0' COMMENT '更新时间',
  PRIMARY KEY (`uuid`),
  KEY `name` (`name`),
  KEY `status` (`status`)
) ENGINE=MyISAM;

--
-- 表的结构 `server_perf`
--

DROP TABLE IF EXISTS `server_perf`;
CREATE TABLE IF NOT EXISTS `server_perf` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `server_ip` varchar(50) DEFAULT '' COMMENT '服务器ip',
  `cpu_perf` varchar(200) DEFAULT '' COMMENT 'cpu情况',
  `totalmem` varchar(200) DEFAULT '' COMMENT '系统总内存',
  `freemem` varchar(200) DEFAULT '' COMMENT '系统空闲内存',
  `status` tinyint(3) unsigned DEFAULT '1' COMMENT '状态',
  `tim` bigint(20) unsigned DEFAULT '0' COMMENT '创建时间',
  `tim_up` bigint(20) unsigned DEFAULT '0' COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `status` (`status`)
) ENGINE=MyISAM;
