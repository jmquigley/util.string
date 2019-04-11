"use strict";

// const debug = require('debug')('util.string.test');

import {sp} from "util.constants";
import {
	capitalize,
	join,
	regexIndexOf,
	rstrip,
	splitInTwo,
	splitNL,
	translateHTML,
	trimHTML
} from "./index";

test("Test join function to combine a set into a string", () => {
	const x: Set<string> = new Set<string>(["a", "b", "c"]);

	expect(join(x)).toBe("abc");
	expect(join(x, " ")).toBe("a b c");
	expect(join(x, "@")).toBe("a@b@c");
});

test("Test searching for index in string using regex", () => {
	expect(regexIndexOf("abcdefghijk", /a/)).toBe(0);
	expect(regexIndexOf("abcdefghijk", /k/)).toBe(10);
	expect(regexIndexOf("abcdefghijk", /def/)).toBe(3);
	expect(regexIndexOf("123abcdefghijklmnop", /[a-zA-Z]/)).toBe(3);
	expect("123abcdefghijklmnop".regexIndexOf(/[a-zA-Z]/)).toBe(3);

	// not found
	expect(regexIndexOf("abcdefghijk", /[0-9]/)).toBe(-1);

	// finds the second set of 'aaa', but contains abs index
	expect(regexIndexOf("aaabbbcccaaa", /aaa/, 3)).toBe(9);
	expect("aaabbbcccaaa".regexIndexOf(/aaa/, 3)).toBe(9);
});

test("Test translation of HTML string entities", () => {
	expect("abc &quot; def".translateHTML()).toBe('abc " def');
	expect(translateHTML("abc &quot; def")).toBe('abc " def');
	expect(translateHTML("abc &nbsp; def")).toBe("abc   def");
	expect(translateHTML("abc &amp; def")).toBe("abc & def");
	expect(translateHTML("abc &lt; def")).toBe("abc < def");
	expect(translateHTML("abc &gt; def")).toBe("abc > def");
});

test("Test special HTML trim function", () => {
	expect(`&nbsp; abc ${sp}`.trimHTML()).toBe("abc");
	expect(trimHTML(`&nbsp; abc ${sp}`)).toBe("abc");
	expect(trimHTML(`abc &nbsp; def`)).toBe("abc   def");
	expect(trimHTML(`${sp}abc${sp}def${sp}`)).toBe("abc def");
	expect(trimHTML(`&nbsp;abc&nbsp;def&nbsp;`)).toBe("abc def");
});

test("Test the capitalize function", () => {
	expect("abc".capitalize()).toBe("Abc");
	expect(capitalize("abc")).toBe("Abc");
});

test("Test splitting a string on newline characters", () => {
	expect(splitNL("a\nb\nc")).toEqual(["a", "b", "c"]);
	expect("a\nb\nc".splitNL()).toEqual(["a", "b", "c"]);

	expect(splitNL("a\rb\rc")).toEqual(["a", "b", "c"]);
	expect("a\rb\rc".splitNL()).toEqual(["a", "b", "c"]);

	expect(splitNL("a\r\nb\r\nc")).toEqual(["a", "b", "c"]);
	expect("a\r\nb\r\nc".splitNL()).toEqual(["a", "b", "c"]);
});

test("Split a string in two by a delimiter", () => {
	let s = "The left side . The right side.";
	let [left, right] = splitInTwo(s, ".");

	expect(left).toBe("The left side ");
	expect(right).toBe(" The right side.");

	s = ". The right side only";
	[left, right] = splitInTwo(s, ".");
	expect(left).toBe("");
	expect(right).toBe(" The right side only");

	s = "The left side only .";
	[left, right] = splitInTwo(s, ".");
	expect(left).toBe("The left side only ");
	expect(right).toBe("");

	s = "No delimter in the string";
	[left, right] = splitInTwo(s, ".");
	expect(left).toBe("No delimter in the string");
	expect(right).toBe("");

	s = "left abcd right";
	[left, right] = splitInTwo(s, "abcd");
	expect(left).toBe("left ");
	expect(right).toBe(" right");

	s = "left abcd right";
	[left, right] = s.splitInTwo("abcd");
	expect(left).toBe("left ");
	expect(right).toBe(" right");
});

test("stripping newlines #1", () => {
	const s = "line 1\n";
	expect(rstrip(s)).toBe("line 1");
	expect(s.rstrip()).toBe("line 1");
});

test("stripping newlines #2", () => {
	const s = "line 1\r";
	expect(rstrip(s)).toBe("line 1");
	expect(s.rstrip()).toBe("line 1");
});

test("stripping newlines #3", () => {
	const s = "line 1\r\n";
	expect(rstrip(s)).toBe("line 1");
	expect(s.rstrip()).toBe("line 1");
});
