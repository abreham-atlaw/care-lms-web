import Request from "@/lib/network/Request";
import type Certificate from "../models/certificate";
import CertificateSerializer from "../serializers/certificateSerializer";


export default class GetCertificateRequest extends Request<Certificate>{

	private serializer = new CertificateSerializer();

	constructor(id: string){
		super({
			url: "certificate/certificate/details/",
			method: "GET",
			params: {
				"id": id
			}
		});
	}

	deserializeResponse(response: any): Certificate {
		return this.serializer.deserialize(response);
	}


}