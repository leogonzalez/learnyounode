module.exports = function (n,p){
	var pad = new Array(1+p).join(0);
	return (pad+n).slice(-pad.length);
}
