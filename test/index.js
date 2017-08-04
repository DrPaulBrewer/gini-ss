const assert = require('assert');
require('should');

const giniSS = require("../index.js");

describe('gini-ss', function(){
    it('should be a function', function(){
	giniSS.should.be.type('function');
    });

    it('should return 0.0 when inputs are equal', function(){
	for(let size=2;size<=10;++size)
	    for(let x=0;x<10;x+=2.5){
		let data = new Array(size).fill(x);
		giniSS(data).should.equal(0.0);
	    }
    });

    it('should return 1.0 when all inputs are zero except for one positive number', function(){
	for(let size=2;size<=10;++size)
	    for(let pos=0;pos<size;++pos)
		for(let val=1;val<10;val+=2.5){
		    let data = new Array(size).fill(0);
		    data[pos] = val;
		    giniSS(data).should.equal(1.0);
		}
    });

    it('should be within 0.01 of 99/303 for data input of [1,2,3,...,100]', function(){
	let data = [];
	for(x=1;x<=100;++x) data.push(x);
	const result = giniSS(x);
	const diff = Math.abs(giniSS(data) - (99.0/303.0));
	diff.should.be.below(0.01);
    });
	

});

	

    
