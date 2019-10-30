--
-- 服务器负载 `server_perf`
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
