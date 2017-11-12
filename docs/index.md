## Functions

<dl>
<dt><a href="#capitalize">capitalize(text)</a> ⇒ <code>string</code></dt>
<dd><p>Capitalizes the first letter of a string and return it.</p>
<pre><code>import {capitalize} from &#39;util.string&#39;;
capitalize(&#39;abc&#39;); // &#39;Abc&#39;
</code></pre></dd>
<dt><a href="#join">join(obj)</a> ⇒ <code>string</code></dt>
<dd><p>Takes a Set of strings and converts it to a string that is joined by a
delimiter.</p>
</dd>
<dt><a href="#regexIndexOf">regexIndexOf(text, re, i)</a> ⇒ <code>number</code></dt>
<dd><p>Searches for the first location (index) within a given string using a regex</p>
</dd>
<dt><a href="#splitNL">splitNL(text)</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Splits a string into an array of strings based on the newline character.  It
will search for a windows and/or unix line endings for the split.</p>
</dd>
<dt><a href="#translateHTML">translateHTML(text)</a> ⇒ <code>string</code></dt>
<dd><p>Takes an input string and replaces special HTML tokens with their string
eqivalents.  e.g. &nbsp; is converted to a space</p>
</dd>
<dt><a href="#trimHTML">trimHTML(text)</a> ⇒ <code>string</code></dt>
<dd><p>This is a special trim function that will remove spaces from the front/end
of a string.  it will also replace all u+200b and &nbsp; characters to &#39; &#39;
before the trim (so it can remove all types of spaces)</p>
</dd>
</dl>

<a name="capitalize"></a>

## capitalize(text) ⇒ <code>string</code>
Capitalizes the first letter of a string and return it.

```
import {capitalize} from 'util.string';
capitalize('abc'); // 'Abc'
```

**Kind**: global function  
**Returns**: <code>string</code> - the newly capitalized string.  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | the input string to cacpitalize |

<a name="join"></a>

## join(obj) ⇒ <code>string</code>
Takes a Set of strings and converts it to a string that is joined by a
delimiter.

**Kind**: global function  
**Returns**: <code>string</code> - a new string  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Set.&lt;string&gt;</code> | the set of strings that will be joined together |

<a name="regexIndexOf"></a>

## regexIndexOf(text, re, i) ⇒ <code>number</code>
Searches for the first location (index) within a given string using a regex

**Kind**: global function  
**Returns**: <code>number</code> - the index value location where the regex match was found
If it is not found, then -1 is returned.  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | the string to search within |
| re | <code>RegExp</code> | the regex object to search with |
| i | <code>number</code> | a starting index value |

<a name="splitNL"></a>

## splitNL(text) ⇒ <code>Array.&lt;string&gt;</code>
Splits a string into an array of strings based on the newline character.  It
will search for a windows and/or unix line endings for the split.

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - an array of strings representing each stirng split at the
newline characters.  The newline characters are not included.  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | the string to split |

<a name="translateHTML"></a>

## translateHTML(text) ⇒ <code>string</code>
Takes an input string and replaces special HTML tokens with their string
eqivalents.  e.g. &nbsp; is converted to a space

**Kind**: global function  
**Returns**: <code>string</code> - a new string with their replacements  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | the text string to translate |

<a name="trimHTML"></a>

## trimHTML(text) ⇒ <code>string</code>
This is a special trim function that will remove spaces from the front/end
of a string.  it will also replace all u+200b and &nbsp; characters to ' '
before the trim (so it can remove all types of spaces)

**Kind**: global function  
**Returns**: <code>string</code> - a new string with spaces trimmed.  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | the text string to trim |

