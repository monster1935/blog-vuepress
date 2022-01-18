---
title: 条件类型
author: 冴羽
date: '2021-12-12'
---

## 链接

https://mp.weixin.qq.com/s/Ky6SoWJv85orqYioihTRqg

`nodejs`

## 几个问题



问题： **什么是RPC**



<u>几乎可以这么说，只要公司达到一定量级，其后端服务之间必定会采用 RPC 而非简单 HTTP 的形式来进行互相调用。</u>



问题： **为什么？RPC通信相比较于Http通信的有哪些优势？**





**RPC中的两个关键概念**



- 网络协议：用于传输数据。
- 序列化协议：用于转换数据。



```typescript
interface Connection {
  read(): Promise<Buffer>;
  write(buf: Buffer): Promise<void>;
}

```



```typescript
interface Protocol {
    encode(): Promise<void>;
    decode(): Promise<void>;
}
```





扩展问题



pb协议是基于什么的协议？protobuf？

https://km.woa.com/group/16841/articles/show/224924?kmref=search&from_page=1&no=1



















