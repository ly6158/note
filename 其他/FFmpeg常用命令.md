# FFMPEG 常用命令

## 转换压缩

```bash

# -hwaccel videotoolbox 调用硬件加速
# -i 输入源
# -vf scale=854:480 指定目标分辨率
# -r 目标帧率
# -c:v hevc_videotoolbox 指定编码方式

# ffmpeg -hwaccel videotoolbox -i input.MP4 -vf scale=854:480 -r 30 -c:v hevc_videotoolbox output.MP4
ffmpeg -hwaccel videotoolbox -i input.MP4 -vf scale=854:480 -r 30  output.MP4

```

## 拼接视频

```bash

ffmpeg -hwaccel videotoolbox -i "concat:input.MP4|input.MP4" -vf scale=854:480 -r 30 output.MP4

```
