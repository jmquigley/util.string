const reNL = /\r\n|\n|\r|\\r\\n|\\n|\\r/gim;
const reNLEOL = /\r\n$|\n$|\r$|\\r\\n$|\\n$|\\r$/gim;

// const debug = require("debug")("util.string");

declare global {
	interface String {
		capitalize(): string;
		hashCode(): number;
		parseList(prune: boolean, delimiter: string): string[];
		regexIndexOf(re: RegExp, start: number): number;
		rstrip(): string;
		splitInTwo(delimiter: string): [string, string];
		splitNL(): string[];
		trim(): string;
	}
}

String.prototype.capitalize = function() {
	return capitalize(this);
};

String.prototype.hashCode = function() {
	return hashCode(this);
};

String.prototype.parseList = function(
	prune: boolean = true,
	delimiter: string = ","
) {
	return parseList(this, prune, delimiter);
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
	return splitNL(this);
};

String.prototype.trim = function() {
	return trim(this);
};

/**
 * Capitalizes the first letter of a string and return it.
 *
 * ```javascript
 * import {capitalize} from 'util.string';
 *
 * capitalize('abc'); // 'Abc'
 * ```
 *
 * @param text {string} - the input string to cacpitalize
 * @return {string} - the newly capitalized string.
 */
export function capitalize(text: string): string {
	return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Converts a string to a 32bit int hash number.  Based on the djb2 algorithm:
 * http://www.cse.yorku.ca/~oz/hash.html
 *
 * ```javascript
 * import {hashCode} from 'util.string';
 *
 * const s = "the quick brown fox jumps over the lazy dog";
 * hashCode(s); // 1224788714
 * ```
 *
 * @param text {string} - the string to hash
 * @return {number} the new hash code related to the string as a 32-bit
 * unsigned int
 */
export function hashCode(text: string): number {
	let hash = 5381;

	if (text.length === 0) {
		hash = 0;
	} else {
		for (const char of text) {
			hash = (hash * 33) ^ char.charCodeAt(0);
		}
	}

	return hash >>> 0;
}

/**
 * Takes a Set of strings and converts it to a string that is joined by a
 * delimiter.  Note that this function is NOT monkey patched into the
 * String.prototype.
 *
 * @param obj {Set<string>} - the set of strings that will be joined together
 * @param delimiter="" {string} - the string value that will be placed between
 * each string as they are joined together.  This is empty by default.
 * @return {string} a new string of all sub objects joined together.
 */
export function join(obj: Set<string>, delimiter: string = ""): string {
	return Array.from(obj).join(delimiter);
}

/**
 * Takes a comma delimited string list, splits it into tokens and returns it
 * as an array of strings.  The whitespace is trimmed from each string and
 * empty strings are removed from the list by default (pruning).
 *
 * ```javascript
 * import {parseList} from 'util.string';
 * parseList("a, b, c");  // ["a", "b", "c"]
 * ```
 *
 * The pruning can be turned off by setting the second parameter to false
 *
 * ```javascript
 * parseList(", , a, b, c");  // ["", "", "a", "b", "c"]
 * ```
 *
 * @param text {string} - the string to parse
 * @param prune=true {boolean} - Removes empty strings from the array
 * if true, otherwise empty strings are not removed.
 * @param delimiter="," {string} - the character that will be used as the
 * split location.
 * @return {string[]} an array of strings generated from the split operation
 */
export function parseList(
	text: string,
	prune: boolean = true,
	delimiter: string = ","
): string[] {
	if (text != null) {
		return text
			.trim()
			.split(delimiter)
			.map((s) => s.trim())
			.filter((it) => (prune ? it : true));
	}

	return [];
}

/**
 * Searches for the first location (index) within a given string using a regex.
 * The index starts at 0.
 *
 * ```javascript
 * import {regexIndexOf} from 'util.string';
 * regexIndexOf("abcdefghijk", /k/); // 10
 * ```
 *
 * @param text {string} - the string to search within
 * @param re {RegExp} - the regex object to search with
 * @param i {number} - a starting index value
 * @return {number} the index value location where the regex match was found
 * in the string.  If it is not found, then -1 is returned.
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
 *
 * ```javascript
 * import {rstrip} from 'util.string';
 * rstrip("some string\r\n");  // "some string"
 * ```
 *
 * @param str {string} - the string that will have the CRLF removed
 * @return a new string with the CRLF removed
 */
export function rstrip(str: string) {
	return str.replace(reNLEOL, "");
}

/**
 * Splits a string into a left an right string tuple based on a given delimiter.
 * The delimter is not included in either string (the first instance encountered)
 * This function will not trim the left/right string as a side effect.
 *
 * ```javascript
 * import {splitInTwo} from 'util.string';
 * let s = "The left side . The right side.";
 * splitInTwo(s, "."); // ["The left side ", " The right side."]
 * ```
 *
 * @param text {string} - the string to split
 * @param delimiter {string} - the string within the text string where the split
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
 *
 * ```javascript
 * import {splitNL} from 'util.string';
 * splitNL("a\nb\nc"); // ["a", "b", "c"]
 * ```
 *
 * @param text {string} - the string to split
 * @return {string[]} an array of strings representing each stirng split at the
 * newline characters.  The newline characters are not included.
 */
export function splitNL(text: string): string[] {
	const s: string = rstrip(text);

	if (s) {
		return s.split(reNL);
	}

	return [];
}

/**
 * Removes whitespaces from the front/end of a string.  This includes
 * whitespace defined by the regex switch \s, end of line characters
 * and zero width non breaking space.  This monkey patches the built in
 * version of trim to handle the unicode character space (\u200b)
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
 *
 * ```javascript
 * import {trim} from 'util.string';
 * trim("\n     test    \n ");  // "test"
 * ```
 *
 * @param text {string} - the string to trim
 * @return {string} the trimmed string
 */
export function trim(text: string): string {
	return text.replace(/^[\s\uFEFF\xA0\u200b]+|[\s\uFEFF\xA0\u200b]+$/g, "");
}
