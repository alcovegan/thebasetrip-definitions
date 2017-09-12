import data from '../data/definitions';

export function getLanguageType(tbtConstant, locale = 'ru') {
	return data.languages.type[tbtConstant][locale]
}

export function getLocationRegion(tbtConstant, locale = 'ru') {
	return data.location.region[tbtConstant][locale]
}

export function getLocationSubregion(tbtConstant, locale = 'ru') {
	return data.location.subregion[tbtConstant][locale]
}

export function getUnions(tbtConstant, locale = 'ru') {

	if(typeof tbtConstant === 'string') {
		return data.unions[tbtConstant][locale]
	}

	return tbtConstant.map(union => {
		return data.unions[union][locale]
	})
	.join(', ')
}

export function getMeasureSystem(tbtConstant, locale = 'ru') {
	return data.measurementSystem[tbtConstant][locale]
}

export function getReligionType(tbtConstant, locale = 'ru') {
	return data.religion.type[tbtConstant][locale]
}

export function getEmergencyNumberType(tbtConstant, locale = 'ru') {
	return data.emergency["numbers.type"][tbtConstant][locale]
}

export function getATMs(tbtConstant, locale = 'ru') {
	return data.atms[tbtConstant][locale]
}

export const getDriving = (function() {

	return {
		license: function(tbtConstant, locale = 'ru') {
			return data.driving["license.acceptance"][tbtConstant][locale]
		},
		fuelType: function(tbtConstant, locale = 'ru') {
			return data.driving["road.petrol.fuel.type"][tbtConstant][locale]
		},
		entityType: function(tbtConstant, locale = 'ru') {
			return data.driving["road.entities.type"][tbtConstant][locale]
		},
		transmission: function(tbtConstant, locale = 'ru') {
			return data.driving["rules.transmission"][tbtConstant][locale]
		},
		roadType: function(tbtConstant, locale = 'ru') {
			return data.driving["rules.speedLimits.roadType"][tbtConstant][locale]
		},
		side: function(tbtConstant, locale = 'ru') {
			return data.driving["rules.side"][tbtConstant][locale]
		}

	}

})()

export const getHealth = (function() {

	return {
		policy: function(tbtConstant, locale = 'ru') {
			return data.health["vaccination.policy"][tbtConstant][locale]
		},
		risks: function(tbtConstant, locale = 'ru') {
			return data.health["vaccination.risks.name"][tbtConstant][locale]
		}
	}

})()


export function getCountryNameType(tbtConstant, locale = 'ru') {
	return data.name["native.type"][tbtConstant][locale]
}

export function getCurrencyType(tbtConstant, locale = 'ru') {
	return data.currency[tbtConstant][locale]
}

export function getMobileType(tbtConstant, locale = 'ru') {
	return data.mobile["capabilities.type"][tbtConstant][locale]
}

export function getWifiCoverage(tbtConstant, locale = 'ru') {
	return data.internet["wifi.coverage"][tbtConstant][locale]
}

export const getTipping = (function() {

	return {
		category: function(tbtConstant, locale = 'ru') {
			return data.tipping["category"][tbtConstant][locale]
		},
		serviceCharge: function(tbtConstant, locale = 'ru') {
			return data.tipping["serviceCharge"][tbtConstant][locale]
		},
		placeToTip: function(tbtConstant, locale = 'ru') {
			return data.tipping["placeToTip"][tbtConstant][locale]
		},
		frequency: function(tbtConstant, locale = 'ru') {
			return data.tipping["frequency"][tbtConstant][locale]
		},
		expectations: function(tbtConstant, locale = 'ru') {
			return data.tipping["expectations"][tbtConstant][locale]
		},
		serviceQuality: function(tbtConstant, locale = 'ru') {
			return data.tipping["serviceQuality"][tbtConstant][locale]
		}
	}

})()

export const getDrugs = (function() {

	return {
		type: function(tbtConstant, locale = 'ru') {
			return data.drugs["type"][tbtConstant][locale]
		},
		purpose: function(tbtConstant, locale = 'ru') {
			return data.drugs["purpose"][tbtConstant][locale]
		},
		useType: function(tbtConstant, locale = 'ru') {
			return data.drugs["useType"][tbtConstant][locale]
		},
		limitUnit: function(tbtConstant, locale = 'ru') {
			return data.drugs["limit.unit"][tbtConstant][locale]
		}
	}

})()

export const getCards = (function() {

	return {
		acceptIntl: function(tbtConstant, locale = 'ru') {
			return data.cards["acceptanceInternationalCards"][tbtConstant][locale]
		},
		brand: function(tbtConstant, locale = 'ru') {
			return data.cards["brand"][tbtConstant][locale]
		},
		acceptance: function(tbtConstant, locale = 'ru') {
			return data.cards["acceptance"][tbtConstant][locale]
		}
	}

})()

