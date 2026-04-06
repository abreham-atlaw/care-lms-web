import BaseState from "./baseState";
import { AsyncStatus } from "./types";


export class AsyncState extends BaseState{

	public status: AsyncStatus;
	public error: Error;

	constructor(status: AsyncStatus = AsyncStatus.none, error: any = null){
		super();
		this.status = status;
		this.error = error;
	}

}
