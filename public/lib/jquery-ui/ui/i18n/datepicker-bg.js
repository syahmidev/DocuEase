

( function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "../widgets/datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}( function( datepicker ) {

datepicker.regional.bg = {
	closeText: "затвори",
	prevText: "&#x3C;назад",
	nextText: "напред&#x3E;",
	nextBigText: "&#x3E;&#x3E;",
	currentText: "днес",
	monthNames: [ "Януари","Февруари","Март","Април","Май","Юни",
	"Юли","Август","Септември","Октомври","Ноември","Декември" ],
	monthNamesShort: [ "Яну","Фев","Мар","Апр","Май","Юни",
	"Юли","Авг","Сеп","Окт","Нов","Дек" ],
	dayNames: [ "Неделя","Понеделник","Вторник","Сряда","Четвъртък","Петък","Събота" ],
	dayNamesShort: [ "Нед","Пон","Вто","Сря","Чет","Пет","Съб" ],
	dayNamesMin: [ "Не","По","Вт","Ср","Че","Пе","Съ" ],
	weekHeader: "Wk",
	dateFormat: "dd.mm.yy",
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: "" };
datepicker.setDefaults( datepicker.regional.bg );

return datepicker.regional.bg;

} ) );
