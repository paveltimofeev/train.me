####exercise index format

Fields:
	- [x] exiciseName 		(exiciseView)
	- [x] exiciseTarget 	(exiciseView)
	- [x] todayTask 		(exiciseView)
	- [x] todayMotivation 	(exiciseView)
	- [-] todayProgress 	(exiciseView, Done)
	- [x] description 		(exiciseDescription)
	- [x] imageUrl 			(exiciseDescription)
	- [x] pitch 			(exiciseDescription)
	- [ ] title 			(Done)
	- [x] motivationMessage (Done)
	- [x] nextExerciseDelay (Done)


```
{
	exiciseName: "squats and bench press",
	exiciseTarget: "",
	description: "",
	imageUrl: "",
	pitch: "",
	motivationMessage: "",
	
	days: 
	[
		{
			sets: 
			[ 
				{ todayTask: "squats", repeats: 50, weight: "own", todayMotivation: "", nextExerciseDelay: 0, moreInfo: null } 
			],
			restDays: 1
		},
		
		
		/* another day */
		{
			sets:
			[
				{ todayTask: "Bench press", repeats: 10, weight: "50 kg",	 todayMotivation: "", nextExerciseDelay: 2,   moreInfo: null },
				{ todayTask: "Bench press", repeats:  8, weight: "50% OWN",	 todayMotivation: "", nextExerciseDelay: 2,   moreInfo: [{ comments:"Move slow down, quick up"}] },
				{ todayTask: "Bench press", repeats:  8, weight: "100 lbs",	 todayMotivation: "", nextExerciseDelay: 3.5, moreInfo: null },
				{ todayTask: "Bench press", repeats:  1, weight: "90% PM",	 todayMotivation: "", nextExerciseDelay: 0,   moreInfo: null },
			],
			restDays: 1
		}
	],
	
	_isOnline: false
}
```