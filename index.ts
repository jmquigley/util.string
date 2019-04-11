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
		regexIndexOf(re: RegExp, start: number): number;
		rstrip(s: string): string;
		splitInTwo(delimiter: string): [string, string];
		splitNL(): string[];
		translateHTML(): string;
		trimHTML(): string;
	}
}

String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.regexIndexOf = function(re: RegExp, start: number = 0) {
	return regexIndexOf(this, re, start);
};

String.prototype.rstrip = function() {
	return rstrip(this);
};

String.prototype.splitInTwo = function(delimiter: string) {
	return splitInTwo(this, delimiter);
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
 * Removes carriage return/line feed (CRLF) characters from the right side of a
 * string.
 * @param str {string} - the string that will have the CRLF removed
 * @return a new string with the CRLF removed
 */
export function rstrip(str: string) {
	return str.replace(/\r\n$|\n$|\r$/, "");
}

/**
 * Splits a string into a left an right string tuple based on a given delimiter.
 * The delimter is not included in either string (the first instance encountered)
 * This function will not trim the left/right string as a side effect.
 * @param text {string} the string to split
 * @param delimiter {string} the string within the text string where the split
 * will occur.
 * @return a tuple containing the left side and the right side of the delimter.
 * both values are a string.  If no delimiter was found then the whole string
 * is returned in the first position of the tuple and the second part is an
 * empty string.
 */
export function splitInTwo(text: string, delimiter: string): [string, string] {
	const index: number = text.indexOf(delimiter);

	if (index === -1) {
		return [text, ""];
	}

	return [text.slice(0, index), text.slice(index + delimiter.length)];
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
