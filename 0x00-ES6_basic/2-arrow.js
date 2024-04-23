
rt default function getNeighborhoodsList(){
	this.sanFranciscoNeighborhoods = ['SOMA','Union Square'];

	const self = this;
	this.addNeighborhood = function add(newNeighborhood){
		self.sanFranciscoNeghborhoods.push(newNeighborhood);
		return self.sanFranciscoNeighborhoods;
	};
}
