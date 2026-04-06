import BaseState from "@/lib/state/baseState";
import type Certificate from "../../data/models/certificate";
import { AsyncState } from "@/lib/state/asyncState";



export default class VerifyCertificateState extends AsyncState{

	certificateId: string;

	certificate?: Certificate;	
	
	constructor(certificateId: string){
		super();
		this.certificateId = certificateId;
	}

}