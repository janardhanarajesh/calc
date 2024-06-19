putnum=(val)=>{
	

document.getElementById('inp').value+=val;

}

var i=0;
eva=(valu)=>{
	if(valu=="=")
	{
var values=document.getElementById('inp').value

let histo=document.getElementById('inp').value=eval(values)
i++;
localStorage.setItem("history",histo);
// localStorage.setItem("leng",i);


}
if(valu=="AC")
	{ 

document.getElementById('inp').value=" "
}
else if(valu=="<")
{

let valu=document.getElementById('inp').value

				document.getElementById("inp").value=valu.substring(0,valu.length - 1);

}

}
histo=()=>{
	let histo=localStorage.getItem('history');
	document.getElementById('inp').value=histo;
}

