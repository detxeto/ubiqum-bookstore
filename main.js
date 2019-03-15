//api provided :https://api.myjson.com/bins/udbm5 //

//first get data from api byh doing fetch



fetch(' https://api.myjson.com/bins/udbm5')

	.then(function (response) {
		return response.json();

	})
	.then(function (myJson) {

		//	var data = myJson
		//	console.log(data);
		var allBooks = myJson.books;
		mainBooks.allBooks = myJson.books;


	})
	.catch(function (error) {
		alert("You are wrong")
	});

//let him know where to put it, listeners



//declare functions

//function getAllBooks(allBooks){
//	var allTheBooks=[];
//	var allBooks = data.books;
//	var booksImg = allBooks[0].portada;
//	var mainBook=document.getElementById("mainBooks");
//	mainBook.innerHTML = "";
//	
//	for (i=0;i<booksImg.length;i++){
//		
//		var bookDiv=document.createElement("div");
//		bookDiv.setAttribute("class","divBoxBook");
//		
//		allTheBooks.push(allBooks);
//		bookDiv.append(allTheBooks);
//	}
//	
//}







//create vue object
var mainBooks = new Vue({

	el: '#mainBooks',
	data: {

		allBooks: [],

		bookSearch:"",


	},

	computed: {

		filteredBooks: function () {

			return this.allBooks.filter(buk => 
				 buk.titulo.toLowerCase().match(this.bookSearch.toLowerCase())
				 

			)
		}
	},







})
