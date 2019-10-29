const os = require('os');
const Router = require('koa-router');
const db = require('../db');
const SERVER_PERF_DB = 'server_perf';
const LENGTH = os.cpus().length;

let schedule = require('node-schedule');
const serverIp = getIp();

function getIp() {
  let interfaces = os.networkInterfaces();
  for (let devName in interfaces) {
      let iface = interfaces[devName];
      for (let i = 0; i < iface.length; i++) {
          let alias = iface[i];
          if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
              return alias.address;
          }
      }
  }
}

function insertServerPerfData() {
  
  // cpu
  let loadAvg15 = os.loadavg()[3]; // 最近15分钟的负载
  // 内存
  const { rss, heapUsed, heapTotal } = process.memoryUsage();
  const sysFree = os.freemem(); // 系统空闲内存
  const sysTotal = os.totalmem(); // 系统总内存
  // const PCT = 1 - (sysFree / sysTotal); // 内存占用率

  let server_ip = serverIp || '127.0.0.1';
  let cpu_perf = loadAvg15 || '0';
  let tim = Date.now();
  // if (!server_ip || !cpu_perf) return '参数不正确';
  let sql = `INSERT INTO ${SERVER_PERF_DB} (server_ip, cpu_perf, freemem, totalmem, tim) VALUES (?, ?, ?, ?, ?);`;
  db.query(sql, [server_ip, cpu_perf, sysFree, sysTotal, tim]).then(res => {
    // ctx.body = res;
  })
}

function saveServerPerfTask() {
  insertServerPerfData();
  schedule.scheduleJob({second: 10}, function () {
    console.log(`saveServerPerfTask: ${Date.now()}`);
  });
}

module.exports = saveServerPerfTask;
