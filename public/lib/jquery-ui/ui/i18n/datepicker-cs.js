

( function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "../widgets/datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}( function( datepicker ) {

datepicker.regional.cs = {
	closeText: "Zavřít",
	prevText: "&#x3C;Dříve",
	nextText: "Později&#x3E;",
	currentText: "Nyní",
	monthNames: [ "leden","únor","březen","duben","květen","červen",
	"červenec","srpen","září","říjen","listopad","prosinec" ],
	monthNamesShort: [ "led","úno","bře","dub","kvě","čer",
	"čvc","srp","zář","říj","lis","pro" ],
	dayNames: [ "neděle", "pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota" ],
	dayNamesShort: [ "ne", "po", "út", "st", "čt", "pá", "so" ],
	dayNamesMin: [ "ne","po","út","st","čt","pá","so" ],
	weekHeader: "Týd",
	dateFormat: "dd.mm.yy",
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: "" };
datepicker.setDefaults( datepicker.regional.cs );

return datepicker.regional.cs;

} ) );
