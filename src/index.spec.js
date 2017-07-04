import { getLanguageType, getLocationRegion, getLocationSubregion, getUnions, getMeasureSystem } from './index';

describe('getLanguageType', () => {
  it(`should return "Официальный" for language type "OFFICIAL" on Russian`, () => {
    expect(getLanguageType("OFFICIAL", "ru")).toBe("Официальный");
  });

  it(`should return "Official" for language type "OFFICIAL" on English`, () => {
    expect(getLanguageType("OFFICIAL", "en")).toBe("Official");
  });

  it(`should correctly work without defining locale`, () => {
    expect(getLanguageType("OFFICIAL")).toBe("Официальный");
  });

  it(`should return russian translation, when locale not specified`, () => {
    expect(getLanguageType("OFFICIAL")).toBe("Официальный");
  });
});

describe('getLocationRegion', () => {
  it(`should return "Африка" for location region "AFRICA" on Russian`, () => {
    expect(getLocationRegion("AFRICA", "ru")).toBe("Африка");
  });
  it(`should return "Европа" for location region "EUROPE" on Russian`, () => {
    expect(getLocationRegion("EUROPE", "ru")).toBe("Европа");
  });

  it(`should return "Africa" for location region "AFRICA" on English`, () => {
    expect(getLocationRegion("AFRICA", "en")).toBe("Africa");
  });
  it(`should return "Европа" for location region "EUROPE" on English`, () => {
    expect(getLocationRegion("EUROPE", "en")).toBe("Europe");
  });

  it(`should correctly work without defining locale`, () => {
    expect(getLocationRegion("EUROPE")).toBe("Европа");
  });

  it(`should return russian translation, when locale not specified`, () => {
    expect(getLocationRegion("EUROPE")).toBe("Европа");
  });
});

describe('getLocationSubregion', () => {
  it(`should return "Австралия и Новая Зеландия" for location subregion "AUSTRALIA_AND_NEW_ZEALAND" on Russian`, () => {
    expect(getLocationSubregion("AUSTRALIA_AND_NEW_ZEALAND", "ru")).toBe("Австралия и Новая Зеландия");
  });
  it(`should return "Юго-Восточная Азия" for location subregion "SOUTH_EASTERN_ASIA" on Russian`, () => {
    expect(getLocationSubregion("SOUTH_EASTERN_ASIA", "ru")).toBe("Юго-Восточная Азия");
  });

  it(`should return "Australia and New Zealand" for location subregion "AUSTRALIA_AND_NEW_ZEALAND" on English`, () => {
    expect(getLocationSubregion("AUSTRALIA_AND_NEW_ZEALAND", "en")).toBe("Australia and New Zealand");
  });
  it(`should return "South-Eastern Asia" for location subregion "SOUTH_EASTERN_ASIA" on English`, () => {
    expect(getLocationSubregion("SOUTH_EASTERN_ASIA", "en")).toBe("South-Eastern Asia");
  });

  it(`should correctly work without defining locale`, () => {
    expect(getLocationSubregion("AUSTRALIA_AND_NEW_ZEALAND")).toBe("Австралия и Новая Зеландия");
  });

  it(`should return russian translation, when locale not specified`, () => {
    expect(getLocationSubregion("AUSTRALIA_AND_NEW_ZEALAND")).toBe("Австралия и Новая Зеландия");
  });
});

describe('getUnions', () => {
  it(`should return "Европейский союз, Европейская экономическая зона, Шенгенская зона" for array of unions [EUROPEAN_UNION, EUROPEAN_ECONOMIC_AREA, SCHENGEN_AREA] on Russian`, () => {
    expect(getUnions(["EUROPEAN_UNION", "EUROPEAN_ECONOMIC_AREA", "SCHENGEN_AREA"], "ru")).toBe("Европейский союз, Европейская экономическая зона, Шенгенская зона");
  });
  it(`should work when passing just string, not an array: "Европейский союз" for EUROPEAN_UNION on Russian`, () => {
    expect(getUnions("EUROPEAN_UNION", "ru")).toBe("Европейский союз");
  });

  it(`should return "European Union, European Economic Area, Schengen Area" for array of unions [EUROPEAN_UNION, EUROPEAN_ECONOMIC_AREA, SCHENGEN_AREA] on English`, () => {
    expect(getUnions(["EUROPEAN_UNION", "EUROPEAN_ECONOMIC_AREA", "SCHENGEN_AREA"], "en")).toBe("European Union, European Economic Area, Schengen Area");
  });
  it(`should work when passing just string, not an array: "European Union" for EUROPEAN_UNION on English`, () => {
    expect(getUnions("EUROPEAN_UNION", "en")).toBe("European Union");
  });

  it(`should correctly work without defining locale`, () => {
    expect(getUnions(["EUROPEAN_UNION", "EUROPEAN_ECONOMIC_AREA", "SCHENGEN_AREA"])).toBe("Европейский союз, Европейская экономическая зона, Шенгенская зона");
  });

  it(`should return russian translation, when locale not specified`, () => {
    expect(getUnions(["EUROPEAN_UNION", "EUROPEAN_ECONOMIC_AREA", "SCHENGEN_AREA"])).toBe("Европейский союз, Европейская экономическая зона, Шенгенская зона");
  });
});

describe('getMeasureSystem', () => {
  it(`should return "Метрическая система" for "METRIC_SYSTEM" on Russian`, () => {
    expect(getMeasureSystem("METRIC_SYSTEM", "ru")).toBe("Метрическая система");
  });
  it(`should return "Бирманская система мер" for "BURMESE_SYSTEM" on Russian`, () => {
    expect(getMeasureSystem("BURMESE_SYSTEM", "ru")).toBe("Бирманская система мер");
  });

  it(`should return "Metric System" for "METRIC_SYSTEM" on English`, () => {
    expect(getMeasureSystem("METRIC_SYSTEM", "en")).toBe("Metric System");
  });
  it(`should return "Burmese System" for "BURMESE_SYSTEM" on English`, () => {
    expect(getMeasureSystem("BURMESE_SYSTEM", "en")).toBe("Burmese System");
  });

  it(`should correctly work without defining locale`, () => {
    expect(getMeasureSystem("METRIC_SYSTEM")).toBe("Метрическая система");
  });

  it(`should return russian translation, when locale not specified`, () => {
    expect(getMeasureSystem("METRIC_SYSTEM")).toBe("Метрическая система");
  });
});
