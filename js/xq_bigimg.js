;(function ($) {
		var XQ_bigimg=function(xq_big){
			var self=this;
			this.xq_big =xq_big;
			this.width	=xq_big.width();
			this.height	=xq_big.height();
			this.top	=xq_big.offset().top;
			this.left	=xq_big.offset().left;
			this.pdiv	=Math.floor(Math.random()*this.width*this.height);
			this.setting={
				"pwidth"	: 	300,
				"pheight"	: 	200,
				"scale"		: 	3,
				"margin_top"	: 50,
				"margin_left" 	: 50,
				"pclass"		: ""
			}
			$.extend(this.setting,this.getSetting());
			this.imgsrc	=this.setting.bigImg ? this.setting.bigImg : xq_big.attr("src");
			this.xq_big.hover(function(){
									self.createPchild(self.pdiv);
									self.imgsrc	=$(this).attr("src");
									self.createImg();
								},function(){
									var pdiv="#"+self.pdiv;
									$(pdiv).remove();
								});
			this.xq_big.mousemove(function(e){
				var scrollTop=$(document).scrollTop();
				var scaleX=(e.clientX-self.left)/self.width;//处于左边部分的距离
				var scaleY=(e.clientY-self.top+scrollTop)/self.height;//处于顶部部分的距离
				self.updImg(scaleX,scaleY);
			});
		}
		XQ_bigimg.prototype={
			createPchild:function(id){
				var ele=document.createElement("div");
				var img=document.createElement("img");
				var scrollTop=$(document).scrollTop();
				$("body").append($(ele));
				$(ele).attr({'id':id}).css({
					'width':this.setting.pwidth+"px",
					'height':this.setting.pheight+"px",
					'position':'fixed',
					'top':this.top+this.setting.margin_top-scrollTop,
					'left':this.left+this.width+this.setting.margin_left,
					'overflow':'hidden'
				}).addClass(this.setting.pclass);
			},
			createImg:function(){
				var img=document.createElement("img");
				$(img).attr("src",this.imgsrc).css({
					'width':this.width*this.setting.scale,
					'height':this.height*this.setting.scale,
					'margin-top':'0px',
					'margin-left':'0px',
					'position':'relative'
				});
				var pdiv="#"+this.pdiv;
				$(pdiv).append($(img));
			},
			updImg:function(scaleX,scaleY){
				var top=(scaleY*this.height*this.setting.scale)-(scaleY*this.setting.pheight);
				var left=(scaleX*this.width*this.setting.scale)-(scaleX*this.setting.pwidth);
				var pdiv="#"+this.pdiv;
					$(pdiv).find("img").css({'top':-top+"px"});
					$(pdiv).find("img").css({'left':-left+"px"});
			},
			getSetting:function(){
				var setting=this.xq_big.attr("setting");//节点属性配置参数
				if (setting && setting!="") {
					return $.parseJSON(setting);
				}else{
					return {};
				}
			}
		};
		XQ_bigimg.init=function($ele){
			var _this_=this;
			$ele.each(function(){
				new _this_($(this));
			});
		}
		window['XQ_bigimg']=XQ_bigimg;
	})(jQuery)
	$(function(){
		XQ_bigimg.init($("[xq_big='true']"));
	});