function getJson(){
	this.xmlhttp = "asadasd";
	this.jsonobj = {};
}

getJson.prototype.init = function(){
	
	if(window.XMLHttpRequest){
		this.xmlhttp = new XMLHttpRequest();
	}else{
		this.xmlhttp  = new ActiveXObject("Microsoft.XMLHTTP");
	}
}

/**
 * 
 * @param {Object} _method GET或者PSOT.
 * @param {Object} _url "路径"
 * @param {Object} _isacy true 或者 flase 是否异步
 */
getJson.prototype.Open= function(_method,_url,_isacy){
	try{
		this.xmlhttp.open(_method,_url,_isacy);
		this.xmlhttp.send();
	}catch(e){
		alert("这里是不行的")
	}
	
}



