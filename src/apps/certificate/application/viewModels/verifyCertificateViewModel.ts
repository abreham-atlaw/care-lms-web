import AsyncViewModel from "@/lib/viewmodel/asyncViewModel";
import ViewModel from "@/lib/viewmodel/viewmodel";
import type VerifyCertificateState from "../states/verifyCertificateState";
import CertificateRepository from "../../data/repositories/certificateRepository";




export default class VerifyCertificateViewModel extends AsyncViewModel<VerifyCertificateState>{

	private repository = new CertificateRepository();

	public async onInit(): Promise<void> {
		await super.onInit();
		this.state.certificate = await this.repository.getCertificate(this.state.certificateId);
	}

}