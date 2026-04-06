import Serializer from "./serializer";





export default class DateTimeSerializer extends Serializer<Date, string>{
	serialize(instance: Date): string {
		return instance.toISOString();
	}
	deserialize(data: string): Date {
		return new Date(data);
	}


}