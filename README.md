# thebasetrip-definitions

> Человекочитаемые описания аттрибутов из API thebasetrip.com на русском и английском языках

> Get human-readable attributes of thebasetrip.com API on English and Russian

Модуль для удобства получения нормальных (переведенных) значений аттрибутов из API [thebasetrip.com](https://www.thebasetrip.com/en/api/docs/basic). Написал для более удобного использования данных в шаблонах (чтобы не писать постоянно привязку того или иного значения к переводу). Например, в ответе API есть массив, содержащий союзы, куда входит страна (для Европы), типа `['EUROPEAN_UNION', 'EUROPEAN_ECONOMIC_AREA']`. Используя модуль - `lib.getUnions(unions_array_here)`, получим на выходе текст: `Европейский союз, Европейская экономическая зона`, и оп - уже не нужно писать логику в шаблоне. Если вам не нужен модуль, можете просто взять данные из `data/definitions.js` и использовать как хотите.

**Замечание:** [данных c github](https://github.com/the-basetrip/country-information/) в субрегионах используются обозначения типа `WESTERN_EUROPE`, в платной версии API уже используется версия `Western Europe`. Я пока использую бесплатную, а остальное запилил на будущее, поэтому учитывайте этот момент.

## Установка

npm:
```sh
npm install thebasetrip-definitions
```
yarn:
```sh
yarn add thebasetrip-definitions
```

## Использование

Обычный require:
```js
const thebasetripDefs = require('thebasetrip-definitions');
```

Или нужные функции с помощью модулей:
```js
import { getLanguageType, getCountryNameType } from 'thebasetrip-definitions';
```
Все модули принимают первым параметром аттрибут из API, вторым локаль, если не указать, то используется русская `ru`. Вторая доступная - `en`.

```js
lib.getDrugs.useType("PERSONAL", "ru"); // Личное употребление
```

## Методы

### getLanguageType()
Тип языка (пока только официальный).

### getLocationRegion()
Регион страны.

```js
lib.getLocationRegion("AMERICAS"); // Америка
```

### getLocationSubregion()
Суб-регион страны.

```js
lib.getLocationSubregion("AUSTRALIA_AND_NEW_ZEALAND"); // Австралия и Новая Зеландия
```

### getUnions(<string|object>)
Союз(ы), в которые входит страна (пока только для Европы).

```js
lib.getUnions(["EUROPEAN_UNION", "EUROPEAN_ECONOMIC_AREA", "SCHENGEN_AREA"]); // Европейский союз, Европейская экономическая зона, Шенгенская зона
```

### getMeasureSystem()
Системы измерения, используемые в стране.

```js
lib.getUnions("BURMESE_SYSTEM"); // Бирманская система мер
```

### getReligionType()
Религии в стране.

```js
lib.getReligionType("BUDDHISM"); // Буддизм
```

### getEmergencyNumberType()
Номера экстренных служб.

```js
lib.getEmergencyNumberType("FIRE_DEPARTMENT"); // Пожарный департамент
```

### getATMs()
Покрытие банкоматов в стране.

```js
lib.getATMs("VERY_COMMON"); // Очень распространены
```

### getDriving
Информация о вождении в стране.

#### getDriving.license()
Тип прав, нужный для вождения в стране.

```js
lib.getDriving.license("IDP"); // Международное водительское удостоверение
```

#### getDriving.fuelType()
Виды топлива в стране.

```js
lib.getDriving.fuelType("DIESEL"); // Дизель
```

#### getDriving.entityType()
Учреждения, управляющие дорогами страны.

```js
lib.getDriving.entityType("TRAFFIC_NEWS"); // Дорожные новости
```

#### getDriving.transmission()
Типы коробок передач.

```js
lib.getDriving.transmission("MANUAL"); // Ручная
```

#### getDriving.roadType()
Типы дорог (используется для ограничений скорости).

```js
lib.getDriving.roadType("RESIDENTIAL_AREAS"); // Жилые районы
```

#### getDriving.side()
Сторона вождения (право-лево).

```js
lib.getDriving.side("RIGHT"); // Правостороннее
```

### getHealth
Информация о вакцинах и рисках при въезде в страну.

#### getHealth.policy()
Необходимость вакцинации при въезде в страну.

```js
lib.getHealth.policy("NOT_REQUIRED_BUT_RECOMMENDED"); // Не требуется, но рекомендуется
```

#### getHealth.risks()
От каких болезней нужно прививаться для въезда в страну.

```js
lib.getHealth.risks("JAPANESE_ENCEPHALITIS"); // Японский энцефалит
```

### getCountryNameType()
Тип названия страны (официальный или общепринятый).

```js
lib.getCountryNameType("COMMON"); // Общепринятое
```

### getCurrencyType()
Монета или банкнота.

```js
lib.getCurrencyType("COIN"); // Монета
```

### getMobileType()
Тип сетей, 2G, 3G, 4G.

```js
lib.getMobileType("4G"); // 4G
```

### getWifiCoverage()
Распространенность wi-fi в стране.

```js
lib.getWifiCoverage("VERY_COMMON"); // Встречается очень часто
```

### getTipping
Информация о чаевых в стране.

#### getTipping.category()
Для кого давать чаевые.

```js
lib.getTipping.category("HOTEL_HOUSEKEEPER"); // Горничная в отеле
```

#### getTipping.serviceCharge()
Как часто чаевые включены в счёт.

```js
lib.getTipping.serviceCharge("SOMETIMES"); // Иногда
```

#### getTipping.placeToTip()
Где (и как?) оставлять чаевые. Например, есть параметр `DISCREET`, что означает, что их нужно давать скрытно, осторожно, не на виду.

```js
lib.getTipping.placeToTip("BEDSIDE_TABLE"); // Прикроватный столик
```

#### getTipping.frequency()
Как часто нужно давать чаевые.

```js
lib.getTipping.frequency("PER_PERSON"); // За одного человека
```

#### getTipping.expectations()
Ожидает ли чаевые данный тип персонала?

```js
lib.getTipping.expectations("NOT_EXPECTED"); // Не ожидаются
```

#### getTipping.serviceQuality()
За какое обслуживание сколько давать чаевых (?)

```js
lib.getTipping.serviceQuality("EXCELLENT"); // Отличное
```

### getDrugs
Информация о наркотиках в стране.

#### getDrugs.type()
Тип наркотиков, пока только "в целом" и "марихуанна".

```js
lib.getDrugs.type("CANNABIS"); // Марихуанна
```

#### getDrugs.purpose()
Что можно делать (продажа, транспортировка, обладание).

```js
lib.getDrugs.purpose("CULTIVATION"); // Выращивание
```

#### getDrugs.useType()
Для каких целей можно использовать.

```js
lib.getDrugs.useType("MEDICAL"); // Медицинские показания
```

#### getDrugs.limitUnit()
Единица ограничения (грам, таблетка, кустик, косяк).

```js
lib.getDrugs.limitUnit("TABLET"); // Таблетка
```

### getCards
Информация о кредитных картах.

#### getCards.acceptIntl()
Уровень принятия карт международных систем.

```js
lib.getCards.acceptIntl("VERY_HIGH"); // Очень высокое
```

#### getCards.brand()
Бренды карт (Виза, Мастеркард и т.д.)

```js
lib.getCards.brand("MASTERCARD"); // Мастеркард
```

#### getCards.acceptance()
Уровень принятия карт в целом.

```js
lib.getCards.acceptance("NONE"); // Не принимаются
```

## Тесты
```sh
npm test
```

