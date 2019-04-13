class SendValu
{	
	constructor(computerName, showResault)
	{
		this.computerName = computerName;
		this.showResault = showResault;
	}

	connect()
	{
		let xhr = new XMLHttpRequest();
					
		xhr.onreadystatechange = function() 
		{
			if (xhr.status === 200) 
			{			
				showResault.innerHTML = xhr.responseText;
			}
		}
					
		const link = `skrypty.php?computerName=${this.computerName}`;
		xhr.open('GET', link, true);
		xhr.send(null);
	}
}

const getHostInfo = document.getElementById("button");

	getHostInfo.addEventListener("click", () => 
	{
		const computerName = document.getElementById("computerName").value;
		let showResault = document.getElementById("showResault");
	
		if(computerName.length > 4)
		{
			let sendValue  = new SendValu(computerName, showResault);
			sendValue.connect();
		} 
		else 
		{
			showResault.value = "Podaj poprawną nazwę hosta w sieci";
		}
	});