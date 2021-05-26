### 数组里面对象赋值问题
```javascript
let arr = [
    {
        id:'id',
        a: 'a',
        b: 'b'
    }
];
// 错误写法
const assignment = obj => {
    arr.forEach(f => {
        if (obj.id === f.id) {
            f = {...f, ...obj};
        }
    });
};
// 正确写法
const assignment = obj => {
    arr.forEach(f => {
        if(obj.id === f.id){
            Object.keys(obj).forEach(k=>{
                f[k] = obj[k];
            });
        }
    });
};
```