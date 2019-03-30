
#### 常见问题 & 解决方案

- nginx 413 Request Entity Too Large
    - 打开nginx配置文件
    - 添加 client_max_body_size 1000m;