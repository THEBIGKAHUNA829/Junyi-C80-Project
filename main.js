var task_names = [];
    
function submit()
{
    var task_name = document.getElementById("task1").value;task_names.push(task_name);
	console.log(task_name);    
    console.log(task_names);
    var length_of_name = task_names.length;
    console.log(length_of_name);
	document.getElementById("display_task").innerHTML=task_names.toString();
   }



function show()
{
	var i= task_names.join("<br>");
	console.log(task_names);
	document.getElementById("p1").innerHTML=i.toString();
	document.getElementById("sort_button").style.display="block";
	
}


function sorting()
	{
		task_names.sort();
		var i= task_names.join("<br>");
		console.log(task_names);		
		document.getElementById("sorted").innerHTML=i.toString();
	}


function searching()
{
	var s= document.getElementById("s1").value;
	var found=0;
	var j;
	for(j=0; j<task_names.length; j++)
		{
			if(s==task_names[j]){
				found=found+1;
			}	
		}
	document.getElementById("p2").innerHTML="task found "+found+" time/s";
	console.log("found task "+found+" time/s");
}
