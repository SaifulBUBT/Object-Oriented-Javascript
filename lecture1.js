//create an object and traverse all atts

var book = {
	name: 'Functional Javascript',
	author: 'Micbeal Fogus',
	publisher: 'O\'Reilly',
	page: 250,
	print: function (){
		console.log(this.publisher, this.page);
	}

}

console.log(book.name); //obejct call using .notation
console.log(book['author']) // object call using bracket [] notation
console.log(book.print())

/// insert new attribute in object
console.log('peice '+book.price);
book.price = 300;
console.log('price '+book.price);

book.publishedYear = 2017;
console.log('publishedYear =',book.publishedYear);

console.log(book)


//// traverse all attibutes from object

for(var properties in book){
	console.log(properties +' = '+ book[properties])
}

