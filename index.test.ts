"use strict";

// const debug = require('debug')('util.string.test');

import {sp} from "util.constants";
import {
	capitalize,
	hashCode,
	join,
	regexIndexOf,
	rstrip,
	splitInTwo,
	splitNL
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

test("Test the capitalize function", () => {
	expect("abc".capitalize()).toBe("Abc");
	expect(capitalize("abc")).toBe("Abc");
});

test("Test splitting a string on newline characters", () => {
	expect(splitNL("a\nb\nc")).toEqual(["a", "b", "c"]);
	expect("a\nb\nc".splitNL()).toEqual(["a", "b", "c"]);

	expect(splitNL("a\\nb\\nc")).toEqual(["a", "b", "c"]);
	expect("a\\nb\\nc".splitNL()).toEqual(["a", "b", "c"]);

	expect(splitNL("a\rb\rc")).toEqual(["a", "b", "c"]);
	expect("a\rb\rc".splitNL()).toEqual(["a", "b", "c"]);

	expect(splitNL("a\r\nb\r\nc")).toEqual(["a", "b", "c"]);
	expect("a\r\nb\r\nc".splitNL()).toEqual(["a", "b", "c"]);

	expect(splitNL("\ra\nb\r\nc\n")).toEqual(["", "a", "b", "c"]);
	expect("\ra\nb\r\nc\n".splitNL()).toEqual(["", "a", "b", "c"]);
});

test("Split a string by newlines with an empty string", () => {
	expect(splitNL("")).toEqual([]);
	expect("".splitNL()).toEqual([]);
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
	let s = "line 1\n";

	expect(rstrip(s)).toBe("line 1");
	expect(s.rstrip()).toBe("line 1");

	s = "line 1\\n";

	expect(rstrip(s)).toBe("line 1");
	expect(s.rstrip()).toBe("line 1");
});

test("stripping newlines #2", () => {
	let s = "line 1\r";

	expect(rstrip(s)).toBe("line 1");
	expect(s.rstrip()).toBe("line 1");

	s = "line 1\\r";

	expect(rstrip(s)).toBe("line 1");
	expect(s.rstrip()).toBe("line 1");
});

test("stripping newlines #3", () => {
	let s = "line 1\r\n";

	expect(rstrip(s)).toBe("line 1");
	expect(s.rstrip()).toBe("line 1");

	s = "line 1\\r\\n";

	expect(rstrip(s)).toBe("line 1");
	expect(s.rstrip()).toBe("line 1");
});

test("Testing hash code creation", () => {
	const s0 = "";
	const s1 = "test string 1";
	const s2 = "test string 2";
	const s3 = "the quick brown fox jumps over the lazy dog";

	expect(hashCode(s0)).toBe(0);

	expect(hashCode(s1)).toBe(3161057047);
	expect(hashCode(s1)).toBe(3161057047);
	expect(s1.hashCode()).toBe(3161057047);

	expect(hashCode(s2)).toBe(3161057044);
	expect(hashCode(s2)).toBe(3161057044);
	expect(s2.hashCode()).toBe(3161057044);

	expect(hashCode(s3)).toBe(1224788714);
	expect(hashCode(s3)).toBe(1224788714);
	expect(s3.hashCode()).toBe(1224788714);
});
