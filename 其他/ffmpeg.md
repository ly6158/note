# FFMPEG 常用命令

## 转换压缩

```bash

# -i 输入源
# -vf scale=854:480 指定目标分辨率
# -r 目标帧率

$ ffmpeg -i input.MP4 -vf scale=854:480 -r 30 output.MP4

```
