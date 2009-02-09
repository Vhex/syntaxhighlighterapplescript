/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/
 *
 * @version
 * 2.0.287 (February 06 2009)
 *
 * @author
 * Alex Gorbatchev
 * 
 * @copyright
 * Copyright (C) 2004-2009 Alex Gorbatchev.
 *
 * Licensed under a GNU Lesser General Public License.
 * http://creativecommons.org/licenses/LGPL/2.1/
 *
 * SyntaxHighlighter is donationware. You are allowed to download, modify and distribute 
 * the source code in accordance with LGPL 2.1 license, however if you want to use 
 * SyntaxHighlighter on your site or include it in your product, you must donate.
 * http://alexgorbatchev.com/wiki/SyntaxHighlighter:Donate
 */
SyntaxHighlighter.brushes.AppleScript = function()
{
	var lightwords =	'application do exists false form null quoted script shell using type ' +
					'value variable';

	var keywords =	'about above after against and apart around as aside at back before ' +
					'beginning behind below beneath beside between but by considering ' +
					'contain contains continue copy div does eighth else end equal equals ' +
					'error every exit fifth first for fourth from front get given ' +
					'global if ignoring in instead into is it its last local me middle ' +
					'mod my ninth not of on onto or out over prop property put ref ' +
					'references repeat return returning script second set seventh since ' +
					'sixth some tell tenth that the then third through thru timeout to ' +
					'transaction true try until where while whose with without';

	var operators =	'all and any between cross in join like not null or outer some';

	this.regexList = [
		{ regex: /--(.*)$/gm,												css: 'comments' },			// one line and multiline comments
		{ regex: SyntaxHighlighter.regexLib.multiLineDoubleQuotedString,	css: 'string' },			// double quoted strings
		{ regex: SyntaxHighlighter.regexLib.multiLineSingleQuotedString,	css: 'string' },			// single quoted strings
		{ regex: new RegExp(this.getKeywords(lightwords), 'gmi'),			css: 'color1' },			// words that show up lighter in AppleScript
		{ regex: new RegExp(this.getKeywords(keywords), 'gmi'),				css: 'keyword' }			// keywords
		];
};

SyntaxHighlighter.brushes.AppleScript.prototype	= new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.AppleScript.aliases	= ['AppleScript', 'applescript'];

