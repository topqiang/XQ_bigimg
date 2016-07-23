# XQ_bigimg
在网购时，在商品的主页上，当我们把鼠标放在图片上时，图片的右边会出现局部放大的图片，鼠标移开，放大的图片消失，这就是图片放大特效。先共享一个自己写的小组件.

来一起感受它的魅力吧！

<h3>1.技术点</h3>

三个鼠标事件：
onmouseover：鼠标移到指定对象上时触发；
onmouseout：鼠标移出指定对象上时触发；
onmousemove：鼠标在指定对象上移动时触发；

<h3>2.先来看看它的执行效果吧。<h3>

https://topqiang.github.io/XQ_bigimg/goodsDetail.html

<h3>3.迫不及待想试一试了。</h3>

\<script src="js/jquery-1.8.2.js"\>\</script\> 

\<script src="js/xq_bigimg.js"\>\</script\> 

在你的页面里引入这两个文件。位置放在页面哪里都可以。

\<img src="img/demo.png" xq_big="true" setting='{"pwidth":400,"pheight":400,"margin_top":0,"margin_left":0}'/\>
然后在加入你要显示的图片  

<b>xq_big="true"</b> 这个属性很重要哦。它是标注当前元素为放大镜的标识。  <b>setting='{"pwidth":400,"pheight":400,"margin_top":0,"margin_left":0}'</b>这个属性是为放大镜配置的参数。一定要遵循标准的json格式哦。
节点属性用单引号。json属性用双引号。

<h3>4.那么配置参数都有那些呢？</h3>

 {
 
    "pwidth"  :   300,  //配置可视区域的宽度 默认300px
    
    "pheight" :   200,  //配置可视区域的高度 默认200px
    
    "scale"   :   3,    //设置图片的放大比例 默认3倍
    
    "margin_top"  : 50, //设置可是区域距离当前主体img的顶部距离  默认为0
    
    "margin_left"   : 50,//设置可是区域距离当前主体img的右边距离 默认为0
    
    "pclass"    : "",    //为可视区域添加自定义类样式     默认为空
    
    "bigImg"  :""        //设置当前主体所对应的大图片地址值，如果不设置，默认取当前img的地址值
    
  }


<h3>5.怎么启动呢？</h3>

嘿嘿 这个不用担心，该插件会自动在文档加载完成后自动识别有xq_big属性的img标签。会自动为标注xq_big="true"属性的img标签加入放大镜的效果。看看神器吧！



再次特请各位大牛指出不足。
跪拜！跪拜！
