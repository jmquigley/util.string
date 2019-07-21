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
</dd>
<dt><a href="#join">join(obj, delimiter)</a> ⇒ <code>string</code></dt>
<dd><p>Takes a Set of strings and converts it to a string that is joined by a
delimiter.</p>
</dd>
<dt><a href="#parseList">parseList(text, delimiter)</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Takes a comma delimited string list, splits it into tokens and returns it
as an array of strings.  The whitespace is trimmed from each string.</p>
<pre><code class="lang-javascript">parseList(&quot;a, b, c&quot;);  // [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]
</code></pre>
</dd>
<dt><a href="#regexIndexOf">regexIndexOf(text, re, i)</a> ⇒ <code>number</code></dt>
<dd><p>Searches for the first location (index) within a given string using a regex</p>
</dd>
<dt><a href="#rstrip">rstrip(str)</a> ⇒</dt>
<dd><p>Removes carriage return/line feed (CRLF) characters from the right side of a
string.</p>
</dd>
<dt><a href="#splitInTwo">splitInTwo(text, delimiter)</a> ⇒</dt>
<dd><p>Splits a string into a left an right string tuple based on a given delimiter.
The delimter is not included in either string (the first instance encountered)
This function will not trim the left/right string as a side effect.</p>
</dd>
<dt><a href="#splitNL">splitNL(text)</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Splits a string into an array of strings based on the newline character.  It
will search for a windows and/or unix line endings for the split.</p>
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

**Kind**: global function  
**Returns**: <code>number</code> - the new hash code related to the string as a 32-bit
unsigned int  
**Params**

- text <code>string</code> - the string to hash

<a name="join"></a>

## join(obj, delimiter) ⇒ <code>string</code>
Takes a Set of strings and converts it to a string that is joined by a
delimiter.

**Kind**: global function  
**Returns**: <code>string</code> - a new string of all sub objects joined together.  
**Params**

- obj <code>Set.&lt;string&gt;</code> - the set of strings that will be joined together
- delimiter <code>string</code> <code> = &quot;\&quot;\&quot;&quot;</code> - the string value that will be placed between
each string as they are joined together.  This is empty by default.

<a name="parseList"></a>

## parseList(text, delimiter) ⇒ <code>Array.&lt;string&gt;</code>
Takes a comma delimited string list, splits it into tokens and returns it
as an array of strings.  The whitespace is trimmed from each string.

```javascript
parseList("a, b, c");  // ["a", "b", "c"]
```

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - an array of strings generated from the split operation  
**Params**

- text <code>string</code> - the string to parse
- delimiter <code>string</code> <code> = &quot;\&quot;,\&quot;&quot;</code> - the character that will be used as the
split location.

<a name="regexIndexOf"></a>

## regexIndexOf(text, re, i) ⇒ <code>number</code>
Searches for the first location (index) within a given string using a regex

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

**Kind**: global function  
**Returns**: a new string with the CRLF removed  
**Params**

- str <code>string</code> - the string that will have the CRLF removed

<a name="splitInTwo"></a>

## splitInTwo(text, delimiter) ⇒
Splits a string into a left an right string tuple based on a given delimiter.
The delimter is not included in either string (the first instance encountered)
This function will not trim the left/right string as a side effect.

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

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - an array of strings representing each stirng split at the
newline characters.  The newline characters are not included.  
**Params**

- text <code>string</code> - the string to split

