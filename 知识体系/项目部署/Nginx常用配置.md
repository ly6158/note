# Nginx 常用配置

```nginx
# 配置服务器组
upstream server_pools {
    server  127.0.0.1:7202 ;
}


# 静态资源代理
location /web/ {
    alias /root/projects/web/;
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

    proxy_pass http://server_pools/;
}

# 301重定向
server {
    listen 80;
    server_name domain.com;
    return 301 https://$host$request_uri;
}
```
