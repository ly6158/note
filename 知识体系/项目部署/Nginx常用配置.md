# Nginx 常用配置

```nginx
http{
  # 限制请求体的大小 默认为1m
  client_max_body_size 1024m;
}


# 配置服务器组
upstream server_pools {
    server  127.0.0.1:7201 ;
    server  127.0.0.1:7202 ;
}

location / {
  #网站主页路径
  root /nginx/html;
  index index.html;

  # 解决每次前端部署前端需要清除缓存的问题
  if ($request_filename ~* ^.*?.(html|htm)$) {
    add_header Cache-Control "private, no-store, no-cache, must-revalidate, proxy-revalidate";
  }
}

# 静态资源代理
location /files/ {
  alias /files/;
  autoindex on;
  include   mime.types;
  default_type  application/octet-stream;
  expires 7d;
}

# 后端服务代理
location ^~/api/ {
    proxy_set_header Host $host;
    proxy_set_header  X-Real-IP        $remote_addr;
    proxy_set_header  X-Forwarded-For  $proxy_add_x_forwarded_for;
    proxy_set_header X-NginX-Proxy true;

    proxy_pass http://server_pools/api/;
}

# 301重定向
# POST请求会转发异常
server {
    listen 80;
    server_name domain.com;
    return 301 https://$host$request_uri;
}
```
