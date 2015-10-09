(function(win){
	/**
	 * 这里是为了练习不用Jquery制作组件
	 * 这里需要传入当前页数字
	 * 合计页数字
	 * 点击li标签后，执行操作，写回调函数
	 */
	
	var  zdw_createmean = function(_dom,_curpage,_totpage){
		var config = {
			curpage:_curpage,
			totpage:_totpage,
			dom:_dom
		}
		
		var ulcss ={
			width:"80%",
			height:"30px",
			display:"block",
			margin:"0 auto",
			padding:"0",
			textAlign:"center",
		}
		
		var  licss = {
			display:"inline-block",
			border:"1px solid #e6e6e6",
			listsytle:"none",
			height:"28px",
			lineheight:"30px",
			verticalAlign:"top",
			marginright:"5px",
		}
		
		
		
		
		this.createDom = function(){
			config.dom.innerHTML = "";//将要添加的目标容器清空
			if(config.totpage!=1){
				//创建目录列表
				createListMean();
			}
		}
		
		//创建目录列表
		function createListMean(){
			var ul = document.createElement("ul");
			config.dom.appendChild(ul);
			ul.className = "mulitxtul"
			setulcss(ul);
			//geiul设置完毕css
			//接下来需要创建li 并给里设置css样式
			createli(ul);
			ul.onclick = function(){
				//console.log("这里是我测试事件用的")
			//	win.test(1);
			}
		}
		
		//创建li标签
		function createli(ul){
			var showPageNum = config.totpage;
			if(showPageNum>=10){
				showPageNum = 10;
			}
			
			createOneLi(ul,"上一页");
			for(var i = 0;i<showPageNum;i++){
				createOneLi(ul,i+1)
			}
			createOneLi(ul,"下一页");
		}
		
		//创建单个li
		function createOneLi(ul,txt){
			var li = document.createElement("li");
			ul.appendChild(li);
			li.innerHTML = "&nbsp&nbsp"+txt+"&nbsp&nbsp";
			
		//	setlicss(li);
			li.setAttribute("class","mulitxt");
			
			li.onclick = function(){
				win.gotoPage(txt)
			}
			
			
		}
		
		function setlicss(li){
			li.style.display = licss.display;
			li.style.border = licss.border;
			li.style.height = licss.height;
			li.style.lineHeight = licss.lineheight;
			li.style.verticalAlign = licss.verticalAlign;
			li.style.marginRight = licss.marginright;
		}

		
		function setulcss(ul){
			ul.style.width = ulcss.width;
			ul.style.height = ulcss.height;
			ul.style.display = ulcss.display;
			ul.style.margin = ulcss.margin;
			ul.style.padding = ulcss.padding;
			ul.style.textAlign = ulcss.textAlign;
		}
		
		
	}
	
	win.zdw_createmean = zdw_createmean;
	
	
})(window)
