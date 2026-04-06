import CoreProviders from "@/di/coreProviders";
import type Certificate from "../models/certificate";
import GetCertificateRequest from "../requests/getCertificateRequest";



export default class CertificateRepository{

	networkClient = CoreProviders.provideNetworkClient();

	async getCertificate(id: string): Promise<Certificate>{
		return await this.networkClient.execute(new GetCertificateRequest(id));
	}

}