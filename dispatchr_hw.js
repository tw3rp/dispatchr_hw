/**
 *  @fileOverview Dispatchr Homework
 */


/**
 * Write a function to determine if a string has all unique characters.  How do you do this if you cannot use any additional data structures?  For the second part, declaring new variables is OK, but using something like an array is not.  Assume you don't know the size of the alphabet used to construct the string (e.g. it may be [a-z], or [a-z, A-Z], or all of unicode, ...)
 */

/**
 * @param  {String} input - input string to check if it is unique
 * @return {Boolean} returns false if repeated else returns true 
 * @description This does not use arrays but it does use a for loop to check where the running time is n(log n)
 */
function uniq(input){
	for (var i = 0; i < input.length; i++) {
		for (var j = input.length - i; j < input.length; j++) {
			console.log(input[i],input[j]);
			if(input[i] === input[j]){
				return false;
			}
		}
		
	}
	return true;
}


console.time("running uniq string");
uniq("hello");
console.timeEnd("running uniq string");


/**
 *  function to create a list courtesy http://www.i-programmer.info/programming/javascript/5328-javascript-data-structures-the-linked-list.html
 */
function List() {
 List.makeNode = function() { 
  return {data: null, next: null}; 
 }; 
 
 this.start = null; 
 this.end = null; 
 
 this.add = function(data) { 
  if (this.start === null) { 
   this.start = List.makeNode(); 
   this.end = this.start; 
  } else { 
   this.end.next = List.makeNode(); 
   this.end = this.end.next; 
  } 
  this.end.data = data; 
 }; 

 this.delete = function(data) { 
  var current = this.start; 
  var previous = this.start; 
  while (current !== null) { 
   if (data === current.data) { 
    if (current === this.start) { 
     this.start = current.next; 
     return; 
    } 
    if (current === this.end) {
      	this.end = previous;
    }
    previous.next = current.next; 
    return; 
    }
    previous = current; 
    current = current.next; 
   }
 }; 

 this.insertAsFirst = function(d) { 
  var temp = List.makeNode(); 
  temp.next = this.start; 
  this.start = temp; 
  temp.data = d; 
 }; 

 this.insertAfter = function(t, d) { 
  var current = this.start; 
  while (current !== null) { 
   if (current.data === t) { 
    var temp = List.makeNode();
    temp.data = d; 
    temp.next = current.next; 
    if (current === this.end) this.end = temp;
    current.next = temp; 
    return; 
   } 
   current = current.next; 
   }
  };

  this.item = function(i) { 
   var current = this.start; 
   while (current !== null) { 
    i--; 
    if (i === 0) return current; 
    current = current.next; 
   } 
   return null; 
  }; 

 this.each = function(f) {
  var current = this.start;
  while (current !== null) { 
   f(current); 
   current = current.next; 
  } 
 };
}

/**
 * Write a function to remove duplicates from an unsorted linked list (single or double, doesn't matter - you choose).  What if you cannot use a temporary buffer?
 */


/**
 * @param  {Object}  Input list to check duplicates
 * @return {Boolean}
 */

function removeDuplicates(input){

	var list = sampleList();
	/**
	 * sort list here 
	 * list.sort();
	 */
	if(list.start.data === list.start.next.data){
		list.delete(list.start.data);
	}
	list.each(function(item) { 
 		console.log(item);
	});
}

removeDuplicates();

/**
 * @return {Object} list - returns a linked list from 1 to 10
 */
function sampleList(){
	var list = new List(); 
	for(var i=1;i<=10;i++){ 
 		list.add(i);
	}
	list.add(10);
	return list;
}

/**
 *  Assume you are given an array of n integers, and will be expecting more coming in a stream (maybe this is implemented as a websocket).  You need to display the average (the mean) of the integers, and update it as the stream comes in.  The initial calculation on the array takes O(n) time.  As the stream starts, is it possible to update the average in O(1) time? If so, how?
 */

/**
 * @param  {number} sum - sum of input array of numbers
 * @param {number} length -  length of the array
 * @param {number} next number - coming in to be calculed
 * @return {Number} mean 
 */
function calculateProgressiveMean(sum,length,next_number){
	return (sum+next_number)/length+1;
}

/**
 * @return {number} mean of the final calculation
 */
var mean = function calculateMean(){
	var input = [1,2,3,4,5];
	var sum = 1+2+3+4+5;
	var mean_finale = calculateProgressiveMean(sum,input.length,6);
	return mean_finale;
};

console.log(mean);
