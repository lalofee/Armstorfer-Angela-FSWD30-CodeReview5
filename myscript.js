var persons = [
 {
			name: 'John',
			surname: 'Doe',
			favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
			age: 25,
   			myPhoto: "img/boy1.jpg",	
			likes: 0    // numeric property used to store likes
},
                        
 {
			name: 'Jane',
			surname: 'Doe',
			favoritePerformers: ["Billy Idol", "Metallica", "Nirvana"],
			age: 25,
   			myPhoto: "img/girl2.jpg",	
			likes: 0    // numeric property used to store likes
},
                        
 {
			name: 'Maxina',
			surname: 'Musterman',
			favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
			age: 25,
   			myPhoto: "img/girl1.jpg",	
			likes: 0    // numeric property used to store likes
},
                        
 {
			name: 'Max',
			surname: 'Musterman',
			favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
			age: 25,
   			myPhoto: "img/boy2.jpg",	
			likes: 0    // numeric property used to store likes
}
];
        console.log(persons[0].surname);
			
		document.getElementById("profile1_image").innerHTML = '<img src="' + persons[0].myPhoto  + '">';
		document.getElementById("profile1_name").innerHTML = "Name: " + persons[0].name;
		document.getElementById("profile1_surname").innerHTML = "Surname: " + persons[0].surname;
		document.getElementById("profile1_age").innerHTML = "Age: " + persons[0].age;
		
		document.getElementById("profile2_image").innerHTML = '<img src="' + persons[1].myPhoto  + '">';
		document.getElementById("profile2_name").innerHTML = "Name: " + persons[1].name;
		document.getElementById("profile2_surname").innerHTML = "Surname: " + persons[1].surname;
		document.getElementById("profile2_age").innerHTML = "Age: " + persons[1].age;
		
		
		document.getElementById("profile3_image").innerHTML = '<img src="' + persons[2].myPhoto  + '">';
		document.getElementById("profile3_name").innerHTML = "Name: " + persons[2].name;
		document.getElementById("profile3_surname").innerHTML = "Surname: " + persons[2].surname;
		document.getElementById("profile3_age").innerHTML = "Age: " + persons[2].age;
		

		document.getElementById("profile4_image").innerHTML = '<img src="' + persons[3].myPhoto  + '">';
		document.getElementById("profile4_name").innerHTML = "Name: " + persons[3].name;
		document.getElementById("profile4_surname").innerHTML = "Surname: " + persons[3].surname;
		document.getElementById("profile4_age").innerHTML = "Age: " + persons[3].age;
		





// like-counter, doesnt work properly yet
var clicks = 0;
    function likeCounter() {

        clicks += 1;
        document.getElementById("profile_likes").innerHTML = clicks;

};
    










