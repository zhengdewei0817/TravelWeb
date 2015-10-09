window.onload = function() {
	var getpiclist = new getJson();
	getpiclist.init();

	getpiclist.Open("GET", "http://www.ljkdream.com/travel/getBannerData.json", true);
	getpiclist.xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var obj = this.responseText;
 
			getpiclist.jsonobj = (eval("(" + obj + ")"));
			//	console.log(getpiclist.jsonobj)
			createDompic();
		}
	}


	//当前播放的图片ID是多少
	var curpicID = 0;
	var time;
	//间隔时间
	var speed = 5000;
	//总图片个数
	var allpicnum = 0;

/**
 *这里是创建图片轮转图的DOM 
 */
	createDompic = function() {
		var piclength = getpiclist.jsonobj.attachment.length;
		allpicnum = piclength;
		var focuspic = document.getElementById("focuspic");
		for (var i = 0; i < piclength; i++) {

			var divpic = document.createElement("div");
			focuspic.appendChild(divpic);
			divpic.className = "picdiv";

			if (i == 0) {
				divpic.className += " picdivopacitycur"
			}
			var aclick = document.createElement("a");
			divpic.appendChild(aclick);

			var img = document.createElement("img");
			aclick.appendChild(img)
			img.src = getpiclist.jsonobj.attachment[i].pic ;

			img.onload = function() {
//				console.log(this.width + "------" + this.height)
				var bili = this.width / this.height
				if (this.width * 378 / 716 >= this.height) {
					//证明高度小，则以高度为准
					this.height = 378;
					this.width = bili * 378;
				} else {
					this.width = 716;
					this.height = 716 / bili;
				}
			}


		}

		var divtxt = document.createElement("div");
		focuspic.appendChild(divtxt);
		divtxt.className = "pictxtdiv";


		var spantxt = document.createElement("span");
		divtxt.appendChild(spantxt);
		var description = getpiclist.jsonobj.attachment[0].absDesc.replace(/[\r\n]/g, "");
		if (description.length >= 96) {
			description = description.substr(0, 96) + "......"
		}
		spantxt.innerHTML = "<span>" + description + "</span>";
		spantxt.className = "pictxt";

		animatepic();

		var pointdiv = document.createElement("div");
		focuspic.appendChild(pointdiv);
		var pointul = document.createElement("ul");
		pointdiv.appendChild(pointul)
		pointul.className = "pointul"

		for (var j = 0; j < piclength; j++) {

			var pointli = document.createElement("li");
			pointul.appendChild(pointli);
			//			pointli.innerHTML = j+"";
			pointli.className = "point" + j;
		}

		var firstcurpoint = document.getElementsByClassName("point0")[0];
		firstcurpoint.id = "pointullicur"

		//x坐标为总宽度-20-个数*（8+17）
		pointul.style.left = (716 - 20) - allpicnum * (8 + 17) + "px";
		pointul.style.top = "350px";

		//创建左右箭头
		var leftdiv = document.createElement("div");
		focuspic.appendChild(leftdiv)
		leftdiv.className = "leftjian";

		leftdiv.onclick = function() {
			propic();
		}

		var rightdiv = document.createElement("div");
		focuspic.appendChild(rightdiv)
		rightdiv.className = "rightjian";

		rightdiv.onclick = function() {

			nextpic();
		}



		focuspic.onmouseover = function() {
			leftdiv.className = "leftjian jiantoupacitycur";
			rightdiv.className = "rightjian jiantoupacitycur";
			//remanimate();

		}

		focuspic.onmouseout = function() {
			leftdiv.className = "leftjian";
			rightdiv.className = "rightjian";
		//	animatepic()
		}


	}


	animatepic = function() {
		time = setInterval(function() {
			nextpic()
		}, speed)
	}

	remanimate = function() {
		clearInterval(time)
	}




	nextpic = function() {


		curpicID += 1;
		if (curpicID >= allpicnum) {
			curpicID = 0;
		}
		gotoplay();
	}

	propic = function() {

		curpicID -= 1;
		if (curpicID < 0) {
			curpicID = allpicnum - 1;
		}
		gotoplay();
	}

	gotoplay = function() {

		var cur = document.getElementsByClassName("picdivopacitycur")[0];
		cur.className = "picdiv"

		var next = document.getElementsByClassName("picdiv")[curpicID];
		next.className = "picdiv picdivopacitycur";

		var description = getpiclist.jsonobj.attachment[curpicID].absDesc.replace(/[\r\n]/g, "");
		if (description.length >= 96) {
			description = description.substr(0, 96) + "......"
		}
		var spantxt = document.getElementsByClassName("pictxt")[0]
		spantxt.innerHTML = "<span>" + description + "</span>";

		var curoldpoint = document.getElementById("pointullicur");
		curoldpoint.id = "";

		var curpoint = document.getElementsByClassName("point" + curpicID)[0];
		curpoint.id = "pointullicur"

	}







}