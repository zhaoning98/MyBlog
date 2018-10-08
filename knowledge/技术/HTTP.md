## HTTP 全过程：
	输入域名 (url) 
	--->> DNS 映射为 IP
	--->> TCP 三次握手
	--->> HTTP 请求
	--->> HTTP 响应
	--->> (浏览器跟踪重定向地址)
	--->> 服务器处理请求
	--->> 服务器返回一个 html 响应
	--->> (视情况决定释放 TCP 连接)
	--->> 客户端解析 HTML
	--->> 获取嵌入在 HTML 中的对象重新发起 http 请求

## http 和 https 协议区别
	http + 加密 + 认证 + 完整性保护 = https
	- http：应用层的无状态，超文本传输协议。端口为 80
	- https：只是 http 通信接口部分用 SSL 和 TLS 协议替代。http 直接和 TCL 通信，而 HTTPS 使用 SSL 所以是先和 SSL通信，再由 SSL 和 TCL 通信。端口为 443
	
## DNS 解析域名为 IP
  - 浏览器缓存中找
  - 系统缓存中找
  - 路由器缓存中找
  - ISP DNS 缓存中找





	
	
	
	
	
	
	
	
	
	
	
	
	
	
