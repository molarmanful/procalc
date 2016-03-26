stack=["0"]
base=36
p=function(x){return BigInteger.parse(x,base)};
commands={
	"©":function(){stack=["0"]},
	"n":function(){stack.push("0")},
	"+":function(){if(stack.length>1)stack.push(p(stack.pop()).add(p(stack.pop())).toString(base))},
	"-":function(){if(stack.length>1)x=stack.pop(),y=stack.pop(),stack.push(p(y).subtract(p(x)).toString(base))},
	"×":function(){if(stack.length>1)stack.push(p(stack.pop()).add(p(stack.pop())).toString(base))},
	"÷":function(){if(stack.length>1)x=stack.pop(),y=stack.pop(),stack.push(p(y).quotient(p(x)).toString(base))},
	"%":function(){if(stack.length>1)x=stack.pop(),y=stack.pop(),stack.push(p(y).remainder(p(x)).toString(base))},
	"±":function(){stack.push(p(stack.pop()).negate().toString(base))},
	"&":function(){if(stack.length>1)stack.push(BigInteger(p(stack.pop()).toString()&p(stack.pop()).toString()).toString(base))},
	"|":function(){if(stack.length>1)stack.push(BigInteger(p(stack.pop()).toString()|p(stack.pop()).toString()).toString(base))},
	"^":function(){if(stack.length>1)stack.push(BigInteger(p(stack.pop()).toString()^p(stack.pop()).toString()).toString(base))},
	"~":function(){stack.push(p(stack.pop()).negate().prev())},
	"«":function(){if(stack.length>1)x=stack.pop(),y=stack.pop(),stack.push((eval('p(y)'+'.multiply(2)'.repeat(p(x)))).toString(base))},
	"»":function(){if(stack.length>1)x=stack.pop(),y=stack.pop(),stack.push((eval('p(y)'+'.quotient(2)'.repeat(p(x)))).toString(base))},
	"ß":function(){ob=base,base=p(stack.pop()).toString(),stack=stack.map(function(x){return BigInteger.parse(x,ob).toString(base)})},
	"¹":function(){if(stack.length>1)x=stack.pop(),y=stack.pop(),stack.push(p(y).pow(p(x)).toString(base))},
	"$":function(){if(stack.length>1)stack.push(stack[stack.length-stack.pop()-2])},
	"ø":function(){if(stack.length>1)stack.splice(stack.length-stack.pop()-2,1)},
	"@":function(){if(stack.length>1)stack.push(stack.splice(stack.length-stack.pop()-2,1))},
	"ª":function(){if(stack.length>1)stack.splice(stack.length-stack.pop()-2,0,stack.pop())},
}
$('.col').on('click',function(){
	$(this).text().match(/[A-Z0-9.]/)?stack[stack.length-1]=stack[stack.length-1]==='0'?$(this).text():stack[stack.length-1]+$(this).text():commands[$(this).text()]()
	$('.disp').html(stack.join(' ')).scrollLeft($(document).outerWidth())
})