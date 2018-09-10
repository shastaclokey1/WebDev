//make a data structure which contains a list of a bunch of movies with
//titles, ratings, and a boolean for whether I have watched it
var movieDB = [
	{
		title: "Into The Wild",
		rating: 5,
		hasWatched: true,
		write_description: buildString
	},
	{
		title: "Titanic",
		rating: 3.5,
		hasWatched: false,
		write_description: buildString
	},
	{
		title: "Life Of Pie",
		rating: 5,
		hasWatched: true,
		write_description: buildString
	},
	{
		title: "Singularity",
		rating: 0,
		hasWatched: true,
		write_description: buildString
	},
	{
		title: "Return Of The King",
		rating: 5,
		hasWatched: true,
		write_description: buildString
	}
]

//Loop through all the movies and print out a summary of the movies.
movieDB.forEach(function(movie) {
	console.log(movie.write_description());
});

//Creating a funciton which will be used as a method by each movie object
//This method totally could have been created as an external function that
//acts on movie objecs, but it was fun to practice creating an object method with the . operator.
function buildString() {
	var result = "You have ";
	if (this.hasWatched)
		result += "watched ";
	else
		result += "not seen ";

	result += "\"" + this.title + "\" - ";
	result += this.rating + " stars";
	return result;
}