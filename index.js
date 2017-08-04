module.exports = function(x){
    let sumdiff = 0;
    let sum = 0;
    let n = x.length;
    for(let i=0,l=x.length;i<l;++i){
	sum += x[i];
	for(let j=0;j<i;++j)
	    sumdiff += Math.abs(x[i]-x[j]);
    }
    if ((sum===0) && (sumdiff===0)) return 0;
    return sumdiff/((n-1)*sum);    
};
	    
