import modData from "./data.json";

export type mapModType = {
	engName: string
	engRegex: string
	korName: string
	korRegex: string
	deadly: number
}
export const mapMods:{[key: string]: mapModType} = modData