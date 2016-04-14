stack=["0"]
base=36
p=function(x){return BigInteger.parse(x,base)};
commands={
	"ǁ":function(){if(stack.length)stack.push(stack[stack.length-1])},
	"ǂ":function(){if(stack.length)stack.pop()},
	"¤":function(){if(stack.length>1)stack.push(stack[stack.length-2])},
	"u":function(){stack[stack.length-1]=stack[stack.length-1].split(''),stack[stack.length-1].pop(),stack[stack.length-1].join('').length?(stack[stack.length-1]=stack[stack.length-1].join('')):stack.pop()},
	"c":function(){stack=["0"]},
	"n":function(){stack.push("0")},
	"+":function(){if(stack.length>1)stack.push(p(stack.pop()).add(p(stack.pop())).toString(base))},
	"-":function(){if(stack.length>1)x=stack.pop(),y=stack.pop(),stack.push(p(y).subtract(p(x)).toString(base))},
	"×":function(){if(stack.length>1)stack.push(p(stack.pop()).multiply(p(stack.pop())).toString(base))},
	"÷":function(){if(stack.length>1)x=stack.pop(),y=stack.pop(),stack.push(p(y).quotient(p(x)).toString(base))},
	"%":function(){if(stack.length>1)x=stack.pop(),y=stack.pop(),stack.push(p(y).remainder(p(x)).toString(base))},
	"±":function(){if(stack.length)stack.push(p(stack.pop()).negate().toString(base))},
	"&":function(){if(stack.length>1)stack.push(BigInteger(p(stack.pop()).toString()&p(stack.pop()).toString()).toString(base))},
	"|":function(){if(stack.length>1)stack.push(BigInteger(p(stack.pop()).toString()|p(stack.pop()).toString()).toString(base))},
	"^":function(){if(stack.length>1)stack.push(BigInteger(p(stack.pop()).toString()^p(stack.pop()).toString()).toString(base))},
	"~":function(){if(stack.length)stack.push(p(stack.pop()).negate().prev().toString(base))},
	"«":function(){if(stack.length>1)x=stack.pop(),y=stack.pop(),stack.push((eval('p(y)'+'.multiply(2)'.repeat(p(x)))).toString(base))},
	"»":function(){if(stack.length>1)x=stack.pop(),y=stack.pop(),stack.push((eval('p(y)'+'.quotient(2)'.repeat(p(x)))).toString(base))},
	"ß":function(){if(stack.length)ob=base,base=p(stack.pop()).toString(),stack=stack.map(function(x){return BigInteger.parse(x,ob).toString(base)})},
	"¹":function(){if(stack.length>1)x=stack.pop(),y=stack.pop(),stack.push(p(y).pow(p(x)).toString(base))},
	"©":function(){if(stack.length>1)stack.push(stack[stack.length-stack.pop()-2])},
	"d":function(){if(stack.length>1)stack.splice(stack.length-stack.pop()-2,1)},
	"@":function(){if(stack.length>1)stack.push(stack.splice(stack.length-stack.pop()-2,1))},
	"ª":function(){if(stack.length>1)stack.splice(stack.length-stack.pop()-2,0,stack.pop())},
}
FastClick.attach(document.body);
$('.col').on('click',function(){
	$(this).text().match(/[A-Z0-9.]/)?stack[stack.length-1]=stack[stack.length-1]==='0'?$(this).text():stack[stack.length-1]+$(this).text():commands[$(this).text()]()
	$('.disp').html(stack.join(' ')).scrollLeft($('.disp').text().length*100)
})
