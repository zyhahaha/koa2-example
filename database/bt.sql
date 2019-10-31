--
-- bt信息 `bt_info`
--

DROP TABLE IF EXISTS `bt_info`;
CREATE TABLE IF NOT EXISTS `bt_info` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `hash` varchar(50) DEFAULT '' COMMENT 'hash',
  `name` varchar(200) DEFAULT '' COMMENT 'name',
  `size` varchar(200) DEFAULT '' COMMENT '大小',
  `status` tinyint(3) unsigned DEFAULT '1' COMMENT '状态',
  `tim` bigint(20) unsigned DEFAULT '0' COMMENT '创建时间',
  `tim_up` bigint(20) unsigned DEFAULT '0' COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `status` (`status`)
) ENGINE=MyISAM;
