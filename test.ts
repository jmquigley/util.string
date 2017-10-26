'use strict';

// const debug = require('debug')('util.string.test');

import test from 'ava';
import {sp} from 'util.constants';
import {
	capitalize,
	join,
	regexIndexOf,
	translateHTML,
	trimHTML
} from './index';

test('Test join function to combine a set into a string', t => {
	const x: Set<string> = new Set<string>(['a', 'b', 'c']);

	t.is(join(x), 'abc');
	t.is(join(x, ' '), 'a b c');
	t.is(join(x, '@'), 'a@b@c');
});

test('Test searching for index in string using regex', t => {
	t.is(regexIndexOf('abcdefghijk', /a/), 0);
	t.is(regexIndexOf('abcdefghijk', /k/), 10);
	t.is(regexIndexOf('abcdefghijk', /def/), 3);
	t.is(regexIndexOf('123abcdefghijklmnop', /[a-zA-Z]/), 3);

	// not found
	t.is(regexIndexOf('abcdefghijk', /[0-9]/), -1);

	// finds the second set of 'aaa', but contains abs index
	t.is(regexIndexOf('aaabbbcccaaa', /aaa/, 3), 9);
});

test('Test translation of HTML string entities', t => {
	t.is('abc &quot; def'.translateHTML(), 'abc " def');
	t.is(translateHTML('abc &quot; def'), 'abc " def');
	t.is(translateHTML('abc &nbsp; def'), 'abc   def');
	t.is(translateHTML('abc &amp; def'), 'abc & def');
	t.is(translateHTML('abc &lt; def'), 'abc < def');
	t.is(translateHTML('abc &gt; def'), 'abc > def');
});

test('Test special HTML trim function', t => {
	t.is(`&nbsp; abc ${sp}`.trimHTML(), 'abc');
	t.is(trimHTML(`&nbsp; abc ${sp}`), 'abc');
	t.is(trimHTML(`abc &nbsp; def`), 'abc   def');
	t.is(trimHTML(`${sp}abc${sp}def${sp}`), 'abc def');
	t.is(trimHTML(`&nbsp;abc&nbsp;def&nbsp;`), 'abc def');
});

test('Test the capitalize function', t => {
	t.is('abc'.capitalize(), 'Abc');
	t.is(capitalize('abc'), 'Abc');
});
