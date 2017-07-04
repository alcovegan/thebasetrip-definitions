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