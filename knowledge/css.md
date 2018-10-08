1、CSS 的盒子模型
  - 标准盒子模型：宽度 = 内容的宽度(content) + border + padding + margin
  - 低版本 IE 盒子模型：宽度 = 内容宽度(content + border + padding) + margin

2、CSS 权重计算规则
  内联样式：1000
  ID选择器：100
  类、伪类和属性选择器：10
  类型选择器和伪元素选择器：1

  !important 优先级最高

3、两列等高布局
  1)、flex 布局
  2)、固定高度

4、CSS3 中对文字溢出的处理
	1)、单行文字溢出
	{
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	2)、多行文本溢出 (仅支持 webkit 内核)
	{
		display: -webkit-box;
		overflow:hidden;
		white-space: normal;
		word-wrap: break-word;
		-webkit-box-orient: vertical;
		-webkit-line-clamp:2;
	}

5、清除浮动的方法
	1)、伪元素
	.wrap::after {
	  content: " ";
	  display: block;
	  height: 0;
	  visibility: hidden;
	  clear: both;
  }
  2)、添加空标签
  `<div style="clear: both;"></div>`

6、重排和重绘
	浏览器的运行机制：(layout：布局)
	1)、构建 DOM 树 (parse)
	2)、构建 渲染树 (construct)
	3)、布局 渲染树 (reflow/layout)
	4)、绘制 渲染树 (paint/repaint)
  
  重绘：颜色
  重排：大小、位置、元素增加减少、隐藏...

  优化：
  1)、直接修改元素的 className；
  2)、将需要多次重排的元素，position 属性设为 absolute 或 fixed，元素脱离了文档流，它的变化不会影响到其他元素；
  3)、如需创建多个 DOM 节点，可以使用 DocumentFragment 创建完成后一次性加入 document
  4)、尽量不要使用 table 布局；