stack=[""]
base=36
p=function(x){return BigInteger.parse(x,base)};
commands={
	"©":function(){stack=[""]},
	"n":function(){stack.push("")},
	"+":function(){stack.push(p(stack.pop()).add(p(stack.pop())).toString(base))},
	"-":function(){x=stack.pop(),y=stack.pop(),stack.push(p(y).subtract(p(x)).toString(base))},
	"×":function(){stack.push(p(stack.pop()).add(p(stack.pop())).toString(base))},
	"÷":function(){x=stack.pop(),y=stack.pop(),stack.push(p(y).quotient(p(x)).toString(base))},
	"%":function(){x=stack.pop(),y=stack.pop(),stack.push(p(y).remainder(p(x)).toString(base))},
	"±":function(){stack.push(p(stack.pop()).negate().toString(base))},
	"&":function(){stack.push(BigInteger(p(stack.pop()).toString()&p(stack.pop()).toString()).toString(base))},
	"|":function(){stack.push(BigInteger(p(stack.pop()).toString()|p(stack.pop()).toString()).toString(base))},
	"^":function(){stack.push(BigInteger(p(stack.pop()).toString()^p(stack.pop()).toString()).toString(base))},
	"~":function(){stack.push(p(stack.pop()).negate().prev())},
	"«":function(){x=stack.pop(),y=stack.pop(),stack.push((p(y)<<p(x)).toString(base))},
	"»":function(){x=stack.pop(),y=stack.pop(),stack.push((p(y)>>p(x)).pow(p(x)).toString(base))},
	"ß":function(){ob=base,base=p(stack.pop()).toString(),stack=stack.map(function(x){return BigInteger.parse(x,ob).toString(base)})},
	"¹":function(){x=stack.pop(),y=stack.pop(),stack.push(p(y).pow(p(x)).toString(base))},
	"$":function(){stack.push(stack[stack.length-stack.pop()-2])},
	"ø":function(){stack.splice(stack.length-stack.pop()-2,1)},
	"@":function(){stack.push(stack.splice(stack.length-stack.pop()-2,1))},
	"ª":function(){stack.splice(stack.length-stack.pop()-2,0,stack.pop())},
}
$('.col').click(function(){
	$(this).text().match(/[A-Z0-9.]/)?stack[stack.length-1]+=$(this).text():commands[$(this).text()]()
	$('.disp').html(stack.map(function(x){return x===""?0:x}).reverse().join(' '))
})