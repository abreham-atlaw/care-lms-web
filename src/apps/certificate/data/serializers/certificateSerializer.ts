import Serializer from "@/lib/serializers/serializer";
import Certificate from "../models/certificate";
import DateTimeSerializer from "@/lib/serializers/dateTimeSerializer";



export default class CertificateSerializer extends Serializer<Certificate, Record<string, any>>{
	
	private dateSerializer = new DateTimeSerializer();

	serialize(instance: Certificate): Record<string, any> {
		throw new Error("Method not implemented.");
	}
	
	deserialize(data: Record<string, any>): Certificate {
		return new Certificate(
			data["id"],
			data["full_name"],
			this.dateSerializer.deserialize(data["date"]),
			data["course"]
		)
	}

}