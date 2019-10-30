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

