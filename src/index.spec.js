import {
  getLanguageType,
  getCountryNameType,
  getCurrencyType,
  getLocationRegion,
  getLocationSubregion,
  getUnions,
  getMeasureSystem,
  getReligionType,
  getEmergencyNumberType,
  getDriving,
  getHealth,
  getATMs,
  getTipping,
  getDrugs,
  getMobileType,
  getWifiCoverage,
  getCards } from './index';

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
  it(`should return "Юго-Восточная Азия" for location subregion "SOUTH-EASTERN_ASIA" on Russian`, () => {
    expect(getLocationSubregion("SOUTH-EASTERN_ASIA", "ru")).toBe("Юго-Восточная Азия");
  });

  it(`should return "Australia and New Zealand" for location subregion "AUSTRALIA_AND_NEW_ZEALAND" on English`, () => {
    expect(getLocationSubregion("AUSTRALIA_AND_NEW_ZEALAND", "en")).toBe("Australia and New Zealand");
  });
  it(`should return "South-Eastern Asia" for location subregion "SOUTH-EASTERN_ASIA" on English`, () => {
    expect(getLocationSubregion("SOUTH-EASTERN_ASIA", "en")).toBe("South-Eastern Asia");
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

describe('getReligionType', () => {
  it(`should return "Иудаизм" for "JUDAISM" on Russian`, () => {
    expect(getReligionType("JUDAISM", "ru")).toBe("Иудаизм");
  });

  it(`should return "Народные верования" for "FOLK" on Russian`, () => {
    expect(getReligionType("FOLK", "ru")).toBe("Народные верования");
  });

  it(`should correctly work without defining locale`, () => {
    expect(getReligionType("ISLAM")).toBe("Ислам");
  });

  it(`should return russian translation, when locale not specified`, () => {
    expect(getReligionType("HINDUISM")).toBe("Индуизм");
  });
});

describe('getEmergencyNumberType', () => {
  it(`should return "Пожарный департамент" for "FIRE_DEPARTMENT" on Russian`, () => {
    expect(getEmergencyNumberType("FIRE_DEPARTMENT", "ru")).toBe("Пожарный департамент");
  });

  it(`should return "Морские спасатели" for "MARITIME_RESCUE" on Russian`, () => {
    expect(getEmergencyNumberType("MARITIME_RESCUE", "ru")).toBe("Морские спасатели");
  });

  it(`should correctly work without defining locale`, () => {
    expect(getEmergencyNumberType("MISSING_CHILDREN")).toBe("Пропавший ребенок");
  });

  it(`should return russian translation, when locale not specified`, () => {
    expect(getEmergencyNumberType("POLICE")).toBe("Полиция");
  });
});

describe('getDriving', () => {

  describe('license', function() {

    it(`should return "Международное водительское удостоверение" for "IDP" on Russian`, () => {
      expect(getDriving.license("IDP", "ru")).toBe("Международное водительское удостоверение");
    });

    it(`should return "Права вашей страны" for "LOCAL" on Russian`, () => {
      expect(getDriving.license("LOCAL", "ru")).toBe("Права вашей страны");
    });

    it(`should correctly work without defining locale`, () => {
      expect(getDriving.license("IDP")).toBe("Международное водительское удостоверение");
    });

    it(`should return russian translation, when locale not specified`, () => {
      expect(getDriving.license("LOCAL")).toBe("Права вашей страны");
    });

  });

  describe('fuelType', function() {

    it(`should return "Бензин" for "PETROL" on Russian`, () => {
      expect(getDriving.fuelType("PETROL", "ru")).toBe("Бензин");
    });

    it(`should return "Дизель" for "DIESEL" on Russian`, () => {
      expect(getDriving.fuelType("DIESEL", "ru")).toBe("Дизель");
    });

    it(`should correctly work without defining locale`, () => {
      expect(getDriving.fuelType("PETROL")).toBe("Бензин");
    });

    it(`should return russian translation, when locale not specified`, () => {
      expect(getDriving.fuelType("DIESEL")).toBe("Дизель");
    });

  });

  describe('entityType', function() {

    it(`should return "Дорожные новости" for "TRAFFIC_NEWS" on Russian`, () => {
      expect(getDriving.entityType("TRAFFIC_NEWS", "ru")).toBe("Дорожные новости");
    });

    it(`should return "Плата за проезд по автомагистралям" for "MOTORWAYS_TOLLS" on Russian`, () => {
      expect(getDriving.entityType("MOTORWAYS_TOLLS", "ru")).toBe("Плата за проезд по автомагистралям");
    });

    it(`should correctly work without defining locale`, () => {
      expect(getDriving.entityType("TRAFFIC_NEWS")).toBe("Дорожные новости");
    });

    it(`should return russian translation, when locale not specified`, () => {
      expect(getDriving.entityType("MOTORWAYS_TOLLS")).toBe("Плата за проезд по автомагистралям");
    });

  });


  describe('transmission', function() {

    it(`should return "Дорожные новости" for "AUTOMATIC" on Russian`, () => {
      expect(getDriving.transmission("AUTOMATIC", "ru")).toBe("Автоматическая");
    });

    it(`should return "Ручная" for "MANUAL" on Russian`, () => {
      expect(getDriving.transmission("MANUAL", "ru")).toBe("Ручная");
    });

    it(`should correctly work without defining locale`, () => {
      expect(getDriving.transmission("AUTOMATIC")).toBe("Автоматическая");
    });

    it(`should return russian translation, when locale not specified`, () => {
      expect(getDriving.transmission("MANUAL")).toBe("Ручная");
    });

  });

  describe('roadType', function() {

    it(`should return "В городах" for "WITHIN_TOWNS" on Russian`, () => {
      expect(getDriving.roadType("WITHIN_TOWNS", "ru")).toBe("В городах");
    });

    it(`should return "Автомагистраль" for "MOTORWAY" on Russian`, () => {
      expect(getDriving.roadType("MOTORWAY", "ru")).toBe("Автомагистраль");
    });

    it(`should correctly work without defining locale`, () => {
      expect(getDriving.roadType("WITHIN_TOWNS")).toBe("В городах");
    });

    it(`should return russian translation, when locale not specified`, () => {
      expect(getDriving.roadType("MOTORWAY")).toBe("Автомагистраль");
    });

  });

  describe('side', function() {

    it(`should return "Левостороннее" for "LEFT" on Russian`, () => {
      expect(getDriving.side("LEFT", "ru")).toBe("Левостороннее");
    });

    it(`should return "Правостороннее" for "RIGHT" on Russian`, () => {
      expect(getDriving.side("RIGHT", "ru")).toBe("Правостороннее");
    });

    it(`should correctly work without defining locale`, () => {
      expect(getDriving.side("LEFT")).toBe("Левостороннее");
    });

    it(`should return russian translation, when locale not specified`, () => {
      expect(getDriving.side("RIGHT")).toBe("Правостороннее");
    });

  });

});

describe('getHealth', () => {

  describe('policy', function() {

    it(`should return "Не требуется" for "NOT_REQUIRED" on Russian`, () => {
      expect(getHealth.policy("NOT_REQUIRED", "ru")).toBe("Не требуется");
    });

    it(`should return "Не требуется, но рекомендуется" for "NOT_REQUIRED_BUT_RECOMMENDED" on Russian`, () => {
      expect(getHealth.policy("NOT_REQUIRED_BUT_RECOMMENDED", "ru")).toBe("Не требуется, но рекомендуется");
    });

    it(`should return "Рекомендуется" for "RECOMMENDED" on Russian`, () => {
      expect(getHealth.policy("RECOMMENDED", "ru")).toBe("Рекомендуется");
    });


    it(`should correctly work without defining locale`, () => {
      expect(getHealth.policy("NOT_REQUIRED_BUT_RECOMMENDED")).toBe("Не требуется, но рекомендуется");
    });

    it(`should return russian translation, when locale not specified`, () => {
      expect(getHealth.policy("NOT_REQUIRED")).toBe("Не требуется");
    });

  });

  describe('risks', function() {

    it(`should return "Желтая лихорадка" for "YELLOW_FEVER" on Russian`, () => {
      expect(getHealth.risks("YELLOW_FEVER", "ru")).toBe("Желтая лихорадка");
    });

    it(`should return "Японский энцефалит" for "JAPANESE_ENCEPHALITIS" on Russian`, () => {
      expect(getHealth.risks("JAPANESE_ENCEPHALITIS", "ru")).toBe("Японский энцефалит");
    });

    it(`should correctly work without defining locale`, () => {
      expect(getHealth.risks("YELLOW_FEVER")).toBe("Желтая лихорадка");
    });

    it(`should return russian translation, when locale not specified`, () => {
      expect(getHealth.risks("JAPANESE_ENCEPHALITIS")).toBe("Японский энцефалит");
    });

  });

});

describe('getATMs', () => {
  it(`should return "Встречаются редко" for "RARE" on Russian`, () => {
    expect(getATMs("RARE", "ru")).toBe("Встречаются редко");
  });

  it(`should return "Очень распространены" for "VERY_COMMON" on Russian`, () => {
    expect(getATMs("VERY_COMMON", "ru")).toBe("Очень распространены");
  });

  it(`should correctly work without defining locale`, () => {
    expect(getATMs("EVERYWHERE")).toBe("Можно найти везде");
  });

  it(`should return russian translation, when locale not specified`, () => {
    expect(getATMs("COMMON")).toBe("Распространены");
  });
});


describe('getCountryNameType', () => {
  it(`should return "Официальное" "OFFICIAL" on Russian`, () => {
    expect(getCountryNameType("OFFICIAL", "ru")).toBe("Официальное");
  });

  it(`should return "Общепринятое" "OFFICIAL" on Russian`, () => {
    expect(getCountryNameType("COMMON", "ru")).toBe("Общепринятое");
  });

  it(`should correctly work without defining locale`, () => {
    expect(getCountryNameType("OFFICIAL")).toBe("Официальное");
  });

  it(`should return russian translation, when locale not specified`, () => {
    expect(getCountryNameType("COMMON")).toBe("Общепринятое");
  });
});

describe('getTipping', () => {

  describe('category', function() {

    it(`should return "Портье в отеле" "HOTEL_PORTER" on Russian`, () => {
      expect(getTipping.category("HOTEL_PORTER", "ru")).toBe("Портье в отеле");
    });

    it(`should return "Кафе и бар" "BAR_CAFFE" on Russian`, () => {
      expect(getTipping.category("BAR_CAFFE", "ru")).toBe("Кафе и бар");
    });

    it(`should correctly work without defining locale`, () => {
      expect(getTipping.category("HOTEL_PORTER")).toBe("Портье в отеле");
    });

    it(`should return russian translation, when locale not specified`, () => {
      expect(getTipping.category("TOUR_GUIDE")).toBe("Туристический гид");
    });

  });

  describe('serviceCharge', function() {

    it(`should return "Обычно" "USUALLY" on Russian`, () => {
      expect(getTipping.serviceCharge("USUALLY", "ru")).toBe("Обычно");
    });

    it(`should return "Почти никогда" "ALMOST_NEVER" on Russian`, () => {
      expect(getTipping.serviceCharge("ALMOST_NEVER", "ru")).toBe("Почти никогда");
    });

    it(`should correctly work without defining locale`, () => {
      expect(getTipping.serviceCharge("USUALLY")).toBe("Обычно");
    });

    it(`should return russian translation, when locale not specified`, () => {
      expect(getTipping.serviceCharge("ALWAYS")).toBe("Всегда");
    });

  });

  describe('placeToTip', function() {

    it(`should return "Прикроватный столик" "BEDSIDE_TABLE" on Russian`, () => {
      expect(getTipping.placeToTip("BEDSIDE_TABLE", "ru")).toBe("Прикроватный столик");
    });

    it(`should return "В конверте" "ENVELOPE" on Russian`, () => {
      expect(getTipping.placeToTip("ENVELOPE", "ru")).toBe("В конверте");
    });

    it(`should correctly work without defining locale`, () => {
      expect(getTipping.placeToTip("BEDSIDE_TABLE")).toBe("Прикроватный столик");
    });

    it(`should return russian translation, when locale not specified`, () => {
      expect(getTipping.placeToTip("TIPPING_BOX")).toBe("Ящик для чаевых");
    });

  });

  describe('frequency', function() {

    it(`should return "За сумку" "PER_BAG" on Russian`, () => {
      expect(getTipping.frequency("PER_BAG", "ru")).toBe("За сумку");
    });

    it(`should return "За ночь" "PER_NIGHT" on Russian`, () => {
      expect(getTipping.frequency("PER_NIGHT", "ru")).toBe("За ночь");
    });

    it(`should correctly work without defining locale`, () => {
      expect(getTipping.frequency("PER_BAG")).toBe("За сумку");
    });

    it(`should return russian translation, when locale not specified`, () => {
      expect(getTipping.frequency("PER_WEEK")).toBe("За неделю");
    });

  });

  describe('expectations', function() {

    it(`should return "Не давать" "DO_NOT_TIP" on Russian`, () => {
      expect(getTipping.expectations("DO_NOT_TIP", "ru")).toBe("Не давать");
    });

    it(`should return "Не ожидаются" "NOT_EXPECTED" on Russian`, () => {
      expect(getTipping.expectations("NOT_EXPECTED", "ru")).toBe("Не ожидаются");
    });

    it(`should correctly work without defining locale`, () => {
      expect(getTipping.expectations("NOT_EXPECTED")).toBe("Не ожидаются");
    });

    it(`should return russian translation, when locale not specified`, () => {
      expect(getTipping.expectations("EXPECTED")).toBe("Ожидаются");
    });

  });

  describe('serviceQuality', function() {

    it(`should return "Плохое" "BAD" on Russian`, () => {
      expect(getTipping.serviceQuality("BAD", "ru")).toBe("Плохое");
    });

    it(`should return "Отличное" "EXCELLENT" on Russian`, () => {
      expect(getTipping.serviceQuality("EXCELLENT", "ru")).toBe("Отличное");
    });

    it(`should correctly work without defining locale`, () => {
      expect(getTipping.serviceQuality("EXCELLENT")).toBe("Отличное");
    });

    it(`should return russian translation, when locale not specified`, () => {
      expect(getTipping.serviceQuality("OK")).toBe("Хорошее");
    });

  });

});

describe('getDrugs', () => {

  describe('type', function() {

    it(`should return "Все" "ALL" on Russian`, () => {
      expect(getDrugs.type("ALL", "ru")).toBe("Все");
    });

    it(`should return "Марихуанна" "CANNABIS" on Russian`, () => {
      expect(getDrugs.type("CANNABIS", "ru")).toBe("Марихуанна");
    });

    it(`should correctly work without defining locale`, () => {
      expect(getDrugs.type("CANNABIS")).toBe("Марихуанна");
    });

    it(`should return russian translation, when locale not specified`, () => {
      expect(getDrugs.type("CANNABIS")).toBe("Марихуанна");
    });

  });

  describe('purpose', function() {

    it(`should return "Владение" "POSSESSION" on Russian`, () => {
      expect(getDrugs.purpose("POSSESSION", "ru")).toBe("Владение");
    });

    it(`should return "Выращивание" "CULTIVATION" on Russian`, () => {
      expect(getDrugs.purpose("CULTIVATION", "ru")).toBe("Выращивание");
    });

    it(`should correctly work without defining locale`, () => {
      expect(getDrugs.purpose("POSSESSION")).toBe("Владение");
    });

    it(`should return russian translation, when locale not specified`, () => {
      expect(getDrugs.purpose("SALE")).toBe("Продажа");
    });

  });

  describe('useType', function() {

    it(`should return "Личное употребление" "PERSONAL" on Russian`, () => {
      expect(getDrugs.useType("PERSONAL", "ru")).toBe("Личное употребление");
    });

    it(`should return "Медицинские показания" "MEDICAL" on Russian`, () => {
      expect(getDrugs.useType("MEDICAL", "ru")).toBe("Медицинские показания");
    });

    it(`should correctly work without defining locale`, () => {
      expect(getDrugs.useType("PERSONAL")).toBe("Личное употребление");
    });

    it(`should return russian translation, when locale not specified`, () => {
      expect(getDrugs.useType("MEDICAL")).toBe("Медицинские показания");
    });

  });

  describe('limitUnit', function() {

    it(`should return "Грамм" "GRAM" on Russian`, () => {
      expect(getDrugs.limitUnit("GRAM", "ru")).toBe("Грамм");
    });

    it(`should return "Таблетка" "TABLET" on Russian`, () => {
      expect(getDrugs.limitUnit("TABLET", "ru")).toBe("Таблетка");
    });

    it(`should correctly work without defining locale`, () => {
      expect(getDrugs.limitUnit("GRAM")).toBe("Грамм");
    });

    it(`should return russian translation, when locale not specified`, () => {
      expect(getDrugs.limitUnit("PLANT")).toBe("Растение");
    });

  });

});

describe('getCards', () => {

  describe('type', function() {

    it(`should return "Среднее" "MEDIUM" on Russian`, () => {
      expect(getCards.acceptIntl("MEDIUM", "ru")).toBe("Среднее");
    });

    it(`should return "Очень высокое" "VERY_HIGH" on Russian`, () => {
      expect(getCards.acceptIntl("VERY_HIGH", "ru")).toBe("Очень высокое");
    });

    it(`should correctly work without defining locale`, () => {
      expect(getCards.acceptIntl("VERY_HIGH")).toBe("Очень высокое");
    });

    it(`should return russian translation, when locale not specified`, () => {
      expect(getCards.acceptIntl("VERY_HIGH")).toBe("Очень высокое");
    });

  });

  describe('brands', function() {

    it(`should return "Мастеркард" "MASTERCARD" on Russian`, () => {
      expect(getCards.brand("MASTERCARD", "ru")).toBe("Мастеркард");
    });

    it(`should return "Американ Экспресс" "AMERICAN_EXPRESS" on Russian`, () => {
      expect(getCards.brand("AMERICAN_EXPRESS", "ru")).toBe("Американ Экспресс");
    });

    it(`should correctly work without defining locale`, () => {
      expect(getCards.brand("MASTERCARD")).toBe("Мастеркард");
    });

    it(`should return russian translation, when locale not specified`, () => {
      expect(getCards.brand("DINERS_CLUB")).toBe("Дайнерс Клаб");
    });

  });

  describe('acceptance', function() {

    it(`should return "Низкое" "LOW" on Russian`, () => {
      expect(getCards.acceptance("LOW", "ru")).toBe("Низкое");
    });

    it(`should return "Среднее" "MEDIUM" on Russian`, () => {
      expect(getCards.acceptance("MEDIUM", "ru")).toBe("Среднее");
    });

    it(`should correctly work without defining locale`, () => {
      expect(getCards.acceptance("LOW")).toBe("Низкое");
    });

    it(`should return russian translation, when locale not specified`, () => {
      expect(getCards.acceptance("MEDIUM")).toBe("Среднее");
    });

  });

});

describe('getCurrencyType', () => {
  it(`should return "Монета" for "COIN" on Russian`, () => {
    expect(getCurrencyType("COIN", "ru")).toBe("Монета");
  });

  it(`should return "Банкнота" for "BANKNOTE" on Russian`, () => {
    expect(getCurrencyType("BANKNOTE", "ru")).toBe("Банкнота");
  });

  it(`should correctly work without defining locale`, () => {
    expect(getCurrencyType("COIN")).toBe("Монета");
  });

  it(`should return russian translation, when locale not specified`, () => {
    expect(getCurrencyType("BANKNOTE")).toBe("Банкнота");
  });
});


describe('getMobileType', () => {
  it(`should return "2G" for "TYPE_2G" on Russian`, () => {
    expect(getMobileType("TYPE_2G", "ru")).toBe("2G");
  });

  it(`should return "4G" for "TYPE_4G" without locale`, () => {
    expect(getMobileType("TYPE_4G")).toBe("4G");
  });
});

describe('getWifiCoverage', () => {
  it(`should return "Встречается очень часто" for "VERY_COMMON" on Russian`, () => {
    expect(getWifiCoverage("VERY_COMMON", "ru")).toBe("Встречается очень часто");
  });

  it(`should return "Повсеместно" for "EVERYWHERE" without locale`, () => {
    expect(getWifiCoverage("EVERYWHERE")).toBe("Повсеместно");
  });
});