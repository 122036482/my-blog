---
 title: web Audio
---
# {{ $frontmatter.title }}
## 创建一个Audio 实例
``` js
   const audioCTX = new (window.AudioContext || window.webkitAudioContext)()
```