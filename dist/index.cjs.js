'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var data = {
	"languages": {
		"type": {
			"OFFICIAL": {
				"ru": "Официальный"
			}
		}
	},
	"location": {
		"region": {
			"AFRICA": {
				"ru": "Африка"
			},
			"AMERICAS": {
				"ru": "Америка"
			},
			"ASIA": {
				"ru": "Азия"
			},
			"EUROPE": {
				"ru": "Европа"
			},
			"OTHER": {
				"ru": "Другая"
			}
		},
		"subregion": {
			"AUSTRALIA_AND_NEW_ZEALAND": {
				"ru": "Австралия и Новая Зеландия"
			},
			"CARIBBEAN": {
				"ru": "Карибский регион"
			},
			"CENTRAL_AMERICA": {
				"ru": "Центральная Америка"
			},
			"CENTRAL_ASIA": {
				"ru": "Центральная Азия"
			},
			"EASTERN_AFRICA": {
				"ru": "Восточная Африка"
			},
			"EASTERN_ASIA": {
				"ru": "Восточная Азия"
			},
			"EASTERN_EUROPE": {
				"ru": "Восточная Европа"
			},
			"MELANESIA": {
				"ru": "Меланезия"
			},
			"MICRONESIA": {
				"ru": "Микронезия"
			},
			"MIDDLE_AFRICA": {
				"ru": "Центральная Африка"
			},
			"NORTHERN_AFRICA": {
				"ru": "Северная Африка"
			},
			"NORTHERN_AMERICA": {
				"ru": "Северная Америка"
			},
			"NORTHERN_EUROPE": {
				"ru": "Северная Европа"
			},
			"POLYNESIA": {
				"ru": "Полинезия"
			},
			"SOUTH_AMERICA": {
				"ru": "Южная Америка"
			},
			"SOUTH_EASTERN_ASIA": {
				"ru": "Юго-Восточная Азия"
			},
			"SOUTHERN_AFRICA": {
				"ru": "Южная Африка"
			},
			"SOUTHERN_ASIA": {
				"ru": "Южная Азия"
			},
			"SOUTHERN_EUROPE": {
				"ru": "Южная Европа"
			},
			"WESTERN_AFRICA": {
				"ru": "Западная Африка"
			},
			"WESTERN_ASIA": {
				"ru": "Западная Азия"
			},
			"WESTERN_EUROPE": {
				"ru": "Западная Европа"
			}
		}
	},
	"unions": {
		"EUROPEAN_UNION": {
			"ru": "Европейский союз"
		},
		"EUROPEAN_ECONOMIC_AREA": {
			"ru": "Европейская экономическая зона"
		},
		"SCHENGEN_AREA": {
			"ru": "Шенгенская зона"
		}
	},
	"measurementSystem": {
		"METRIC_SYSTEM": {
			"ru" : "Метрическая система"
		},
		"UNITED_STATES_CUSTOMARY_SYSTEM": {
			"ru" : "Американская система мер"
		},
		"IMPERIAL_SYSTEM": {
			"ru" : "Имперская система мер"
		},
		"BURMESE_SYSTEM": {
			"ru" : "Бирманская система мер"
		}
	}
};

function getLocationRegion(tbtConstant, ref) {
	var locale = ref.locale; if ( locale === void 0 ) locale = 'ru';

	return data.location.region[tbtConstant][locale]
}

function getLocationSubregion(tbtConstant, ref) {
	var locale = ref.locale; if ( locale === void 0 ) locale = 'ru';

	return data.location.subregion[tbtConstant][locale]
}

function getUnions(tbtConstant, ref) {
	var locale = ref.locale; if ( locale === void 0 ) locale = 'ru';

	return tbtConstant.map(function (union) {
		return data.unions[union][locale]
	})
	.join(', ')
}

console.log(
	getUnions(["EUROPEAN_UNION", "EUROPEAN_ECONOMIC_AREA", "SCHENGEN_AREA"], {locale: "ru"})
);

exports.getLocationRegion = getLocationRegion;
exports.getLocationSubregion = getLocationSubregion;
exports.getUnions = getUnions;
