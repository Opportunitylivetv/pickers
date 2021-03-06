var defaults = new Object;

defaults.font = '"Noto Nastaliq Urdu WF"'; // font name per usage in CSS
defaults.size = "30";  // number of pixels (just the number)
defaults.rows = "3"; // number representing number of times 100px for height of box
defaults.lineHeight = "3";  // just the number
defaults.view = "alphabet";  // alphabet, phonic, phonelist
defaults.language = 'ur'
defaults.blocklocation= '/scripts/arabic/block'
defaults.uifont = '"Noto Nastaliq Urdu WF"'; // font name per usage in CSS
defaults.uisize = "24";  // number of pixels (just the number)
defaults.ccbase = "◌";  // default base for combining characters


var defaults = new Object
var factoryDefaults = new Object
	factoryDefaults.font = 'Noto Nastaliq Urdu WF'; // text area font name (a single font, no quotes)
	factoryDefaults.size = "30";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "3"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "3"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'ur' // language to use for examples
	factoryDefaults.blocklocation= '/scripts/arabic/block'  // blocklocation to use for examples
	factoryDefaults.uifont = 'Noto Nastaliq Urdu WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.direction = "rtl" // indicates whether this is a picker for a RTL script
	factoryDefaults.uidir = "rtl" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours


var thisPicker = 'urduPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
