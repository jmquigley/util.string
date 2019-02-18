"use strict";

const debug = require("debug")("util.string");

import {sp} from "util.constants";
import * as XRegExp from "xregexp";

const chevrons = {
	quot: '"',
	nbsp: " ",
	amp: "&",
	lt: "<",
	gt: ">"
};

const s = Object.keys(chevrons).join("|");
debug("Using chevrons: %s", s);

const reHTML: RegExp = XRegExp(`&(${s});`, "gi");
const reSPC: RegExp = XRegExp(`${sp}`, "g");

declare global {
	interface String {
		capitalize(): string;
		splitNL(): string[];
		translateHTML(): string;
		trimHTML(): string;
	}
}

String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.splitNL = function() {
	return this.split(/\r\n|\n|\r/);
};

String.prototype.translateHTML = function() {
	return this.replace(reHTML, (match: any, ele: string) => {
		match = match;
		return chevrons[ele];
	});
};

String.prototype.trimHTML = function() {
	return this.translateHTML()
		.replace(reSPC, " ")
		.trim();
};

/**
 * Capitalizes the first letter of a string and return it.
 *
 * ```
 * import {capitalize} from 'util.string';
 * capitalize('abc'); // 'Abc'
 * ```
 *
 * @param text {string} the input string to cacpitalize
 * @return {string} the newly capitalized string.
 */
export function capitalize(text: string): string {
	return text.capitalize();
}

/**
 * Takes a Set of strings and converts it to a string that is joined by a
 * delimiter.
 * @param obj {Set<string>} the set of strings that will be joined together
 * @return {string} a new string
 */
export function join(obj: Set<string>, delimiter: string = ""): string {
	return Array.from(obj).join(delimiter);
}

/**
 * Searches for the first location (index) within a given string using a regex
 * @param text {string} the string to search within
 * @param re {RegExp} the regex object to search with
 * @param i {number} a starting index value
 * @return {number} the index value location where the regex match was found
 * If it is not found, then -1 is returned.
 */
export function regexIndexOf(
	text: string,
	re: RegExp,
	start: number = 0
): number {
	const idx: number = text.slice(start).search(re);
	return idx < 0 ? -1 : idx + start;
}

/**
 * Splits a string into an array of strings based on the newline character.  It
 * will search for a windows and/or unix line endings for the split.
 * @param text {string} the string to split
 * @return {string[]} an array of strings representing each stirng split at the
 * newline characters.  The newline characters are not included.
 */
export function splitNL(text: string): string[] {
	return text.splitNL();
}

/**
 * Takes an input string and replaces special HTML tokens with their string
 * eqivalents.  e.g. &nbsp; is converted to a space
 * @param text {string} the text string to translate
 * @return {string} a new string with their replacements
 */
export function translateHTML(text: string): string {
	return text.translateHTML();
}

/**
 * This is a special trim function that will remove spaces from the front/end
 * of a string.  it will also replace all u+200b and &nbsp; characters to ' '
 * before the trim (so it can remove all types of spaces)
 * @param text {string} the text string to trim
 * @return {string} a new string with spaces trimmed.
 */
export function trimHTML(text: string): string {
	return text.trimHTML();
}
