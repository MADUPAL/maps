import {clsx, type ClassValue} from "clsx";
import {twMerge} from "tailwind-merge";
import { mapMods } from "./result";
import { Dispatch, SetStateAction } from "react";

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
};

export function makeDontWant(name:string[]) {
	if (name.length === 0)
		return {
			dontWantKor: "",
			dontWantEng: ""
		}
	return {
		dontWantKor: `"!${name.map((n) => mapMods[n].korRegex.replaceAll("\"", "")).join("|")}"`,
		dontWantEng: `"!${name.map((n) => mapMods[n].engRegex.replaceAll("\"", "")).join("|")}"`
	}

}

export function makeWant(name: string[]) {

}

export function makeSafeSearch(search:string) {
	try {
		search.trim();
		return new RegExp(search);
	} catch(e) {
		return "";
	}
}