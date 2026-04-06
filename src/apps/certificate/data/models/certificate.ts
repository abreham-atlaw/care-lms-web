


export default class Certificate{

	fullName: string;
	date: Date;
	course: string;
	id: string;

	constructor(id: string, fullName: string, date: Date, course: string){
		this.id = id;
		this.fullName = fullName;
		this.date = date;
		this.course = course

	}

}