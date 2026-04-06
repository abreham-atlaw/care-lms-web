import Cookies from "js-cookie";



export default abstract class Storage{

	abstract store(key: string, value: string): void;

	abstract get(key: string): string | null;

}


export class CookieStorage extends Storage{
	store(key: string, token: string): void {
		Cookies.set(key, token);
	}
	get(key: string): string | null {
		return Cookies.get(key) ?? null;
	}

}