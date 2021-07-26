```javascript
const oracledb = require('oracledb');
// 事务自动提交
oracledb.autoCommit = true;
// 返回结果集 对象格式
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
// 引入Oracle驱动文件
oracledb.initOracleClient({libDir: "/Oracle驱动文件路径/instantclient_12_1"});

// 创建连接池
oracledb.createPool({
    user: 'user',// 用户名
    password: 'password',// 密码
    connectString: `ip:port/orcl`,
    poolAlias: `sys_alias` // 别名必须唯一
})

// 获取查询实例
const getDBInstance = async () => {
    return oracledb.getPool(`sys_alias`).getConnection();
}

const query = async () => {
    const connection = await getDBInstance();
    const selectSQL = `sql`;
    const {rows} = await connection.execute(selectSQL);
    await connection.close();
    return rows;
}
```
