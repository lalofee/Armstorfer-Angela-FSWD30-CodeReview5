var profile1 =  {
			name: 'John',
			surname: 'Doe',
			favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
			age: 25,
   			myPhoto: "img/boy1.jpg",	
			likes: 0    // numeric property used to store likes
};
                        
var profile2 = {
			name: 'Jane',
			surname: 'Doe',
			favoritePerformers: ["Billy Idol", "Metallica", "Nirvana"],
			age: 25,
   			myPhoto: "img/girl2.jpg",	
			likes: 0    // numeric property used to store likes
};
                        
var profile3 = {
			name: 'Maxina',
			surname: 'Musterman',
			favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
			age: 25,
   			myPhoto: "img/girl1.jpg",	
			likes: 0    // numeric property used to store likes
};
                        
var profile4 = {
			name: 'Max',
			surname: 'Musterman',
			favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
			age: 25,
   			myPhoto: "img/boy2.jpg",	
			likes: 0    // numeric property used to store likes
};
        
			
		document.getElementById("profile1_image").innerHTML = '<img src="' + profile1.myPhoto  + '">';
		document.getElementById("profile1_name").innerHTML = "Name: " + profile1.name;
		document.getElementById("profile1_surname").innerHTML = "Surname: " + profile1.surname;
		document.getElementById("profile1_age").innerHTML = "Age: " + profile1.age;
		
		document.getElementById("profile2_image").innerHTML = '<img src="' + profile2.myPhoto  + '">';
		document.getElementById("profile2_name").innerHTML = "Name: " + profile2.name;
		document.getElementById("profile2_surname").innerHTML = "Surname: " + profile2.surname;
		document.getElementById("profile2_age").innerHTML = "Age: " + profile2.age;
		
		
		document.getElementById("profile3_image").innerHTML = '<img src="' + profile3.myPhoto  + '">';
		document.getElementById("profile3_name").innerHTML = "Name: " + profile3.name;
		document.getElementById("profile3_surname").innerHTML = "Surname: " + profile3.surname;
		document.getElementById("profile3_age").innerHTML = "Age: " + profile3.age;
		

		document.getElementById("profile4_image").innerHTML = '<img src="' + profile4.myPhoto  + '">';
		document.getElementById("profile4_name").innerHTML = "Name: " + profile4.name;
		document.getElementById("profile4_surname").innerHTML = "Surname: " + profile4.surname;
		document.getElementById("profile4_age").innerHTML = "Age: " + profile4.age;
		





// like-counter, doesnt work properly
var clicks = 0;
    function likeCounter() {

        clicks += 1;
        document.getElementById("profile_likes").innerHTML = clicks;

};
    
//--------solution with classes. but didnt find a solution for the image yet

/*
class Person {                  

   
    constructor(name, surname, age) {  
        
        this.name = name;        
        this.surname = surname;
        this.age = age;      
    }

    output() {
    	
		document.getElementById("profile1_name").innerHTML = "Name: " + this.name;
		document.getElementById("profile1_surname").innerHTML = "Surname: " + this.surname;
		document.getElementById("profile1_age").innerHTML = "Age: " + this.age;

		document.getElementById("profile2_name").innerHTML = "Name: " + this.name;
		document.getElementById("profile2_surname").innerHTML = "Surname: " + this.surname;
		document.getElementById("profile2_age").innerHTML = "Age: " + this.age;
		
		document.getElementById("profile3_name").innerHTML = "Name: " + this.name;
		document.getElementById("profile3_surname").innerHTML = "Surname: " + this.surname;
		document.getElementById("profile3_age").innerHTML = "Age: " + this.age;
		
		document.getElementById("profile4_name").innerHTML = "Name: " + this.name;
		document.getElementById("profile4_surname").innerHTML = "Surname: " + this.surname;
		document.getElementById("profile4_age").innerHTML = "Age: " + this.age;
		
}

}


var profile1 = new Person("John", "Doe", "25");
profile1.output();

var profile2 = new Person("Jane", "Doe", "25");
profile2.output();

var profile3 = new Person("Maxina", "Musterman", "25");
profile3.output();

var profile4 = new Person("Max", "Musterman", "25");
profile4.output();

//	document.getElementById("profile2_image").innerHTML = '<img src="' + profile1.myPhoto  + '">';
//	document.getElementById("profile2_image").innerHTML = '<img src="' + profile2.myPhoto  + '">';
//	document.getElementById("profile3_image").innerHTML = '<img src="' + profile3.myPhoto  + '">';
//	document.getElementById("profile4_image").innerHTML = '<img src="' + profile4.myPhoto  + '">';

*/













