# gini-ss
[![Build Status](https://travis-ci.org/DrPaulBrewer/gini-ss.svg?branch=master)](https://travis-ci.org/DrPaulBrewer/gini-ss)

Compute the gini coefficient of the numeric data, with small sample correction.

     var giniSS = require('gini-ss');
     giniSS([0,0,0,0,1]) // --> 1.0
     giniSS([0,0,0]) // --> 0.0
     giniSS([3,3,3]) // --> 0.0
     giniSS([1,2,3,...,100]) // --> ~ 99/303 ~ 1/3

## Small Sample Correction

The Gini coefficient with small sample correction has a value of 1.0 for the case of *perfect inequality*, when
for example, with income data, all of the incomes are zero and one person has all the income.   
The traditional Gini instead yields `G = 1-(1/n) = (n-1)/n`.  The correction is simply multiplying by `n/(n-1)`

These converge as the number of samples n become large.

## Background

For more information, see the Wikipedia article for [Gini coefficient](https://en.wikipedia.org/wiki/Gini_coefficient)


## Copyright

Copyright 2017 Paul Brewer, Economic and Financial Technology Consulting LLC

## License

[The MIT License](LICENSE.md)




