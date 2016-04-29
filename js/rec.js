/* 


function isQuotaExceeded(e) {
  var quotaExceeded = false;
  if (e) {
    if (e.code) {
      switch (e.code) {
        case 50:
          quotaExceeded = true;
          break;
        case 2000://1014:
          // Firefox
          if (e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
            quotaExceeded = true;
          }
          break;
      }
    } else if (e.number === -2147024882) {
      // Internet Explorer 8
      quotaExceeded = true;
    }
  }
  return quotaExceeded;
}



/* function appendToStorage(name, data){
    var old = localStorage.getItem(name);
    if(old === null) old = "";
    localStorage.setItem(name, old + data);
}

appendToStorage('oldData', $i("textbox").value); 











function addEntry() {
    // Parse any JSON previously stored in allEntries
    var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
    if(existingEntries == null) existingEntries = [];
    var entryTitle = document.getElementById("entryTitle").value;
    var entryText = document.getElementById("entryText").value;
    var entry = {
        "title": entryTitle,
        "text": entryText
    };
    localStorage.setItem("entry", JSON.stringify(entry));
    // Save allEntries back to local storage
    existingEntries.push(entry);
    localStorage.setItem("allEntries", JSON.stringify(existingEntries));
}; */




function save()
{
	
		// Parse any JSON previously stored in allEntries
		/* var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
		if(existingEntries == null) existingEntries = []; 
		
		var date = document.getElementById("date").value;
		var brakes = document.getElementById("brakes").value;
		var chain = document.getElementById("chain").value;
		var seats = document.getElementById("seats").value;
		var handlebars = document.getElementById("handlebars").value;
		
		var entry =
		{
			"date": date,
			"brakes": brakes,
			"chain": chain,
			"seats": seats,
			"handlebars": handlebars
		};
		
		localStorage.setItem("entry", JSON.stringify(entry));
		// Save allEntries back to local storage
		existingEntries.push(entry);
		
		var b = new Date().getTime();
		
		localStorage.setItem(b, JSON.stringify(existingEntries));
	
		console.log("It's me again here"); */
	
		var date = document.getElementById("date").value;
		var brakes = document.getElementById("brakes").value;
		var chain = document.getElementById("chain").value;
		var seats = document.getElementById("seats").value;
		var handlebars = document.getElementById("handlebars").value;
		
		var c = new Date().getTime();
	
		var b = {'date': date, 'brakes': brakes, 'chain': chain, 'seats': seats, 'handlebars': handlebars};
		localStorage.setItem(c, JSON.stringify(b));
	
	
	
	/*// Parse any JSON previously stored in allEntries
    var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
    if(existingEntries == null) existingEntries = [];
    var date = document.getElementById("date").value;
    var brakes = document.getElementById("brakes").value;
	var chain = document.getElementById("chain").value;
	var seats = document.getElementById("seats").value;
	var handlebars = document.getElementById("handlebars").value;
    var entry =
	{
        "date": date,
        "brakes": brakes,
		"chain": chain,
		"seats": seats,
		"handlebars": handlebars
    };
    localStorage.setItem("entry", JSON.stringify(entry));
    // Save allEntries back to local storage
    existingEntries.push(entry);
    localStorage.setItem("allEntries", JSON.stringify(existingEntries));
	
	console.log("It's me again here");*/
	
	
	/* var date = document.getElementById("date");
	var brakes = document.getElementById("brakes"); 	 
	var seats = document.getElementById("seats");
	var chain = document.getElementById("chain");
	var handlebars = document.getElementById("handlebars"); */

	
 	/*try
	{
			if($('#brakes').prop('checked'))
			{
				localStorage.setItem("brakes", brakes.value);
			}
			else 
			{
				localStorage.setItem("brakes", " ");
			}
			
			if($('#seats').prop('checked'))
			{
				localStorage.setItem("seats", seats.value);
			}
			else 
			{
				localStorage.setItem("seats", " ");
			}
			
			if($('#chain').prop('checked'))
			{
				localStorage.setItem("chain", chain.value);
			}
			else 
			{
				localStorage.setItem("chain", " ");
			}			
			
			if($('#handlebars').prop('checked'))
			{
				localStorage.setItem("handlebars", handlebars.value);
			}
			else
			{
				localStorage.setItem("handlebars", " ");
			}
			
			localStorage.setItem("date", date.value);
			
			date.value = "";
			brakes.value = "";
			chain.value = "";
			seats.value = "";
			handlebars.value = "";
		
		console.log("Successfully Saved Data to the local storage.")
		alert("Your data was saved successfully.");
	}
	catch (e)
	{
		if (e == isQuotaExceeded)
		{
			alert("Error: Local Storage limit exceeded.");
			localStorage.clear();
			console.log("Error: Local Storage limit exceeded.");
		}
	}*/
}


function request()
{	
	/* var date = document.getElementById("date");
	var brakes = document.getElementById("brakes");
	var seats = document.getElementById("seats");
	var chain = document.getElementById("chain");
	var handlebars = document.getElementById("handlebars");


	date.value = localStorage.getItem("date", date.value);
 	brakes.value = localStorage.getItem("brakes", brakes.value);
	seats.value = localStorage.getItem("seats", seats.value);
	chain.value = localStorage.getItem("chain", chain.value);
	handlebars.value = localStorage.getItem("handlebars", handlebars.value);
	
	alert("Your data was successfully requested from data storage."); */
	
	
 	/* for (var i = 0, len = localStorage.length; i < len; ++i)
	{
		/* myApp.alert(localStorage.getItem(localStorage.key(i)));  
		document.getElementById("allData").innerHTML += localStorage.getItem(localStorage.key(i));
	} */
	
	
	/* var obj = JSON.parse(localStorage.getItem('entry'));

    document.getElementById("date").value = obj.date;
    document.getElementById("brakes").value = obj.brakes;
    document.getElementById("chain").value = obj.chain;
    document.getElementById("seats").value = obj.seats;
    document.getElementById("handlebars").value = obj.handlebars; */
	 
	
	/* var get = localStorage.getItem('b');
	
	alert('get ', JSON.parse(get)); */
	
	
	
	
	for (var i = 0, len = localStorage.length; i < len; ++i)
	{
		/* myApp.alert(localStorage.getItem(localStorage.key(i))); */ 
		/* document.getElementById("allData").innerHTML += localStorage.getItem(localStorage.key(i)); */
		
		var get = localStorage.getItem(localStorage.key(i));
		//myApp.alert(localStorage.getItem(localStorage.key(i)));
		
		 var getp = JSON.parse(get) 
		/* console.log(get, JSON.parse(get)); */
		console.log(getp);
		
		$.each(getp, function(key, value)
		{
			/* console.log(key, value); */
			/* myApp.alert(value); */
			document.getElementById('me').innerHTML += (key, " ", value);
		});
	}
}
























function clearStorage() {
    console.log("Clearing local storage.");
	
	var r = confirm("Are you sure you want to dele data from data storage??");
	
	if (r == true)
	{
		localStorage.clear();
	}
	else
	{
		alert("You canceled the process of clearing data storage. Thanks");
	}
}