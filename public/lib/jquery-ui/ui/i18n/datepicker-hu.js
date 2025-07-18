
( function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "../widgets/datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}( function( datepicker ) {

datepicker.regional.hu = {
	closeText: "bezár",
	prevText: "vissza",
	nextText: "előre",
	currentText: "ma",
	monthNames: [ "Január", "Február", "Március", "Április", "Május", "Június",
	"Július", "Augusztus", "Szeptember", "Október", "November", "December" ],
	monthNamesShort: [ "Jan", "Feb", "Már", "Ápr", "Máj", "Jún",
	"Júl", "Aug", "Szep", "Okt", "Nov", "Dec" ],
	dayNames: [ "Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat" ],
	dayNamesShort: [ "Vas", "Hét", "Ked", "Sze", "Csü", "Pén", "Szo" ],
	dayNamesMin: [ "V", "H", "K", "Sze", "Cs", "P", "Szo" ],
	weekHeader: "Hét",
	dateFormat: "yy.mm.dd.",
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: true,
	yearSuffix: "" };
datepicker.setDefaults( datepicker.regional.hu );

return datepicker.regional.hu;

} ) );
