function allocateRooms(customers) {
	const rooms = [];
	customers = customers.map((arr, idx) => ({ arrival: arr[0], departure: arr[1], num: idx, room: 0 })).sort((a, b) => a.arrival - b.arrival);

	//for (let cust of customers) {
		for (let i = 0; i < customers.length; i++) {
		let freeRoomIndex = rooms.findIndex((roomEndDay) => customers[i].arrival > roomEndDay);
		if (freeRoomIndex < 0) {
			rooms.push(customers[i].departure);
			customers[i].room = rooms.length;
		} else {
			rooms[freeRoomIndex] = customers[i].departure;
			customers[i].room = freeRoomIndex + 1;
		}
	}
	return customers.sort((a, b) => a.num - b.num).map((el) => el.room);
}
console.log(allocateRooms([[15,22],[2,4],[6,9],[3,33],[12,21]]))

/*
const tests = [
	 [[1,2],[2,4],[4,4]], // [1,2,1] or [2,1,1]
	 [[1,5],[2,4],[6,8],[7,7]], // any of [1,2,1,2], [1,2,2,1], [2,1,2,1], or [2,1,1,2]
	 [[15,22],[2,4],[6,9],[3,33],[12,21]], // [1,2,2,3,2], [2,1,1,3,1], [3,1,3,2,1], etc

	 [[1,10],[2,5],[6,6],[3,7],[6,6],[11,13],[9,15],[8,14]],
			Solutions include:   [1,2,2,3,4,1,3,2], [1,2,2,3,4,1,2,3],
										[1,2,4,3,2,1,3,2], [2,3,3,1,4,2,1,3], and others
	 [[8,8],[5,8],[8,9],[1,4],[1,3],[5,7],[4,8],[2,2],[4,5],[6,8]]
			Solutions include:   [4, 1, 5, 1, 2, 4, 2, 3, 3, 3],
										[5, 4, 2, 2, 1, 2, 3, 3, 1, 1], and others
  ];
	*/