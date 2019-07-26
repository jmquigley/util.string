## Functions

<dl>
<dt><a href="#capitalize">capitalize(text)</a> ⇒ <code>string</code></dt>
<dd><p>Capitalizes the first letter of a string and return it.</p>
<pre><code class="lang-javascript">import {capitalize} from &#39;util.string&#39;;

capitalize(&#39;abc&#39;); // &#39;Abc&#39;
</code></pre>
</dd>
<dt><a href="#hashCode">hashCode(text)</a> ⇒ <code>number</code></dt>
<dd><p>Converts a string to a 32bit int hash number.  Based on the djb2 algorithm:
<a href="http://www.cse.yorku.ca/~oz/hash.html">http://www.cse.yorku.ca/~oz/hash.html</a></p>
<pre><code class="lang-javascript">import {hashCode} from &#39;util.string&#39;;

const s = &quot;the quick brown fox jumps over the lazy dog&quot;;
hashCode(s); // 1224788714
</code></pre>
</dd>
<dt><a href="#join">join(obj, delimiter)</a> ⇒ <code>string</code></dt>
<dd><p>Takes a Set of strings and converts it to a string that is joined by a
delimiter.  Note that this function is NOT monkey patched into the
String.prototype.</p>
</dd>
<dt><a href="#parseList">parseList(text, prune, delimiter)</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Takes a comma delimited string list, splits it into tokens and returns it
as an array of strings.  The whitespace is trimmed from each string and
empty strings are removed from the list by default (pruning).</p>
<pre><code class="lang-javascript">import {parseList} from &#39;util.string&#39;;
parseList(&quot;a, b, c&quot;);  // [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]
</code></pre>
<p>The pruning can be turned off by setting the second parameter to false</p>
<pre><code class="lang-javascript">parseList(&quot;, , a, b, c&quot;);  // [&quot;&quot;, &quot;&quot;, &quot;a&quot;, &quot;b&quot;, &quot;c&quot;]
</code></pre>
</dd>
<dt><a href="#regexIndexOf">regexIndexOf(text, re, i)</a> ⇒ <code>number</code></dt>
<dd><p>Searches for the first location (index) within a given string using a regex.
The index starts at 0.</p>
<pre><code class="lang-javascript">import {regexIndexOf} from &#39;util.string&#39;;
regexIndexOf(&quot;abcdefghijk&quot;, /k/); // 10
</code></pre>
</dd>
<dt><a href="#rstrip">rstrip(str)</a> ⇒</dt>
<dd><p>Removes carriage return/line feed (CRLF) characters from the right side of a
string.</p>
<pre><code class="lang-javascript">import {rstrip} from &#39;util.string&#39;;
rstrip(&quot;some string\r\n&quot;);  // &quot;some string&quot;
</code></pre>
</dd>
<dt><a href="#splitInTwo">splitInTwo(text, delimiter)</a> ⇒</dt>
<dd><p>Splits a string into a left an right string tuple based on a given delimiter.
The delimter is not included in either string (the first instance encountered)
This function will not trim the left/right string as a side effect.</p>
<pre><code class="lang-javascript">import {splitInTwo} from &#39;util.string&#39;;
let s = &quot;The left side . The right side.&quot;;
splitInTwo(s, &quot;.&quot;); // [&quot;The left side &quot;, &quot; The right side.&quot;]
</code></pre>
</dd>
<dt><a href="#splitNL">splitNL(text)</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Splits a string into an array of strings based on the newline character.  It
will search for a windows and/or unix line endings for the split.</p>
<pre><code class="lang-javascript">import {splitNL} from &#39;util.string&#39;;
splitNL(&quot;a\nb\nc&quot;); // [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]
</code></pre>
</dd>
<dt><a href="#trim">trim(text)</a> ⇒ <code>string</code></dt>
<dd><p>Removes whitespaces from the front/end of a string.  This includes
whitespace defined by the regex switch \s, end of line characters
and zero width non breaking space.  This monkey patches the built in
version of trim to handle the unicode character space (\u200b)</p>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim</a></p>
<pre><code class="lang-javascript">import {trim} from &#39;util.string&#39;;
trim(&quot;\n     test    \n &quot;);  // &quot;test&quot;
</code></pre>
</dd>
</dl>

<a name="capitalize"></a>

## capitalize(text) ⇒ <code>string</code>
Capitalizes the first letter of a string and return it.

```javascript
import {capitalize} from 'util.string';

capitalize('abc'); // 'Abc'
```

**Kind**: global function  
**Returns**: <code>string</code> - - the newly capitalized string.  
**Params**

- text <code>string</code> - the input string to cacpitalize

<a name="hashCode"></a>

## hashCode(text) ⇒ <code>number</code>
Converts a string to a 32bit int hash number.  Based on the djb2 algorithm:
http://www.cse.yorku.ca/~oz/hash.html

```javascript
import {hashCode} from 'util.string';

const s = "the quick brown fox jumps over the lazy dog";
hashCode(s); // 1224788714
```

**Kind**: global function  
**Returns**: <code>number</code> - the new hash code related to the string as a 32-bit
unsigned int  
**Params**

- text <code>string</code> - the string to hash

<a name="join"></a>

## join(obj, delimiter) ⇒ <code>string</code>
Takes a Set of strings and converts it to a string that is joined by a
delimiter.  Note that this function is NOT monkey patched into the
String.prototype.

**Kind**: global function  
**Returns**: <code>string</code> - a new string of all sub objects joined together.  
**Params**

- obj <code>Set.&lt;string&gt;</code> - the set of strings that will be joined together
- delimiter <code>string</code> <code> = &quot;\&quot;\&quot;&quot;</code> - the string value that will be placed between
each string as they are joined together.  This is empty by default.

<a name="parseList"></a>

## parseList(text, prune, delimiter) ⇒ <code>Array.&lt;string&gt;</code>
Takes a comma delimited string list, splits it into tokens and returns it
as an array of strings.  The whitespace is trimmed from each string and
empty strings are removed from the list by default (pruning).

```javascript
import {parseList} from 'util.string';
parseList("a, b, c");  // ["a", "b", "c"]
```

The pruning can be turned off by setting the second parameter to false

```javascript
parseList(", , a, b, c");  // ["", "", "a", "b", "c"]
```

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - an array of strings generated from the split operation  
**Params**

- text <code>string</code> - the string to parse
- prune <code>boolean</code> <code> = true</code> - Removes empty strings from the array
if true, otherwise empty strings are not removed.
- delimiter <code>string</code> <code> = &quot;\&quot;,\&quot;&quot;</code> - the character that will be used as the
split location.

<a name="regexIndexOf"></a>

## regexIndexOf(text, re, i) ⇒ <code>number</code>
Searches for the first location (index) within a given string using a regex.
The index starts at 0.

```javascript
import {regexIndexOf} from 'util.string';
regexIndexOf("abcdefghijk", /k/); // 10
```

**Kind**: global function  
**Returns**: <code>number</code> - the index value location where the regex match was found
in the string.  If it is not found, then -1 is returned.  
**Params**

- text <code>string</code> - the string to search within
- re <code>RegExp</code> - the regex object to search with
- i <code>number</code> - a starting index value

<a name="rstrip"></a>

## rstrip(str) ⇒
Removes carriage return/line feed (CRLF) characters from the right side of a
string.

```javascript
import {rstrip} from 'util.string';
rstrip("some string\r\n");  // "some string"
```

**Kind**: global function  
**Returns**: a new string with the CRLF removed  
**Params**

- str <code>string</code> - the string that will have the CRLF removed

<a name="splitInTwo"></a>

## splitInTwo(text, delimiter) ⇒
Splits a string into a left an right string tuple based on a given delimiter.
The delimter is not included in either string (the first instance encountered)
This function will not trim the left/right string as a side effect.

```javascript
import {splitInTwo} from 'util.string';
let s = "The left side . The right side.";
splitInTwo(s, "."); // ["The left side ", " The right side."]
```

**Kind**: global function  
**Returns**: a tuple containing the left side and the right side of the delimter.
both values are a string.  If no delimiter was found then the whole string
is returned in the first position of the tuple and the second part is an
empty string.  
**Params**

- text <code>string</code> - the string to split
- delimiter <code>string</code> - the string within the text string where the split
will occur.

<a name="splitNL"></a>

## splitNL(text) ⇒ <code>Array.&lt;string&gt;</code>
Splits a string into an array of strings based on the newline character.  It
will search for a windows and/or unix line endings for the split.

```javascript
import {splitNL} from 'util.string';
splitNL("a\nb\nc"); // ["a", "b", "c"]
```

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - an array of strings representing each stirng split at the
newline characters.  The newline characters are not included.  
**Params**

- text <code>string</code> - the string to split

<a name="trim"></a>

## trim(text) ⇒ <code>string</code>
Removes whitespaces from the front/end of a string.  This includes
whitespace defined by the regex switch \s, end of line characters
and zero width non breaking space.  This monkey patches the built in
version of trim to handle the unicode character space (\u200b)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

```javascript
import {trim} from 'util.string';
trim("\n     test    \n ");  // "test"
```

**Kind**: global function  
**Returns**: <code>string</code> - the trimmed string  
**Params**

- text <code>string</code> - the string to trim

