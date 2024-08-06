const moment = require('moment-timezone');

const getTimeForCountry = (countryCode) => {
    const timeZones = {
        'AF': 'Asia/Kabul',
        'AL': 'Europe/Tirane',
        'DZ': 'Africa/Algiers',
        'AS': 'Pacific/Pago_Pago',
        'AD': 'Europe/Andorra',
        'AO': 'Africa/Luanda',
        'AI': 'America/Anguilla',
        'AG': 'America/Antigua',
        'AR': 'America/Argentina/Buenos_Aires',
        'AM': 'Asia/Yerevan',
        'AW': 'America/Aruba',
        'AU': 'Australia/Sydney',
        'AT': 'Europe/Vienna',
        'AZ': 'Asia/Baku',
        'BS': 'America/Nassau',
        'BH': 'Asia/Bahrain',
        'BD': 'Asia/Dhaka',
        'BB': 'America/Barbados',
        'BY': 'Europe/Minsk',
        'BE': 'Europe/Brussels',
        'BZ': 'America/Belize',
        'BJ': 'Africa/Porto-Novo',
        'BM': 'Atlantic/Bermuda',
        'BT': 'Asia/Thimphu',
        'BO': 'America/La_Paz',
        'BA': 'Europe/Sarajevo',
        'BW': 'Africa/Gaborone',
        'BR': 'America/Sao_Paulo',
        'IO': 'Indian/Chagos',
        'BN': 'Asia/Brunei',
        'BG': 'Europe/Sofia',
        'BF': 'Africa/Ouagadougou',
        'BI': 'Africa/Bujumbura',
        'KH': 'Asia/Phnom_Penh',
        'CM': 'Africa/Douala',
        'CA': 'America/Toronto',
        'CV': 'Atlantic/Cape_Verde',
        'KY': 'America/Cayman',
        'CF': 'Africa/Bangui',
        'TD': 'Africa/Ndjamena',
        'CL': 'America/Santiago',
        'CN': 'Asia/Shanghai',
        'CX': 'Australia/Christmas',
        'CC': 'Indian/Cocos',
        'CO': 'America/Bogota',
        'KM': 'Africa/Moroni',
        'CD': 'Africa/Kinshasa',
        'CG': 'Africa/Brazzaville',
        'CK': 'Pacific/Rarotonga',
        'CR': 'America/Costa_Rica',
        'HR': 'Europe/Zagreb',
        'CU': 'America/Havana',
        'CW': 'America/Curacao',
        'CY': 'Asia/Nicosia',
        'CZ': 'Europe/Prague',
        'DK': 'Europe/Copenhagen',
        'DJ': 'Africa/Djibouti',
        'DM': 'America/Dominica',
        'DO': 'America/Santo_Domingo',
        'EC': 'America/Guayaquil',
        'EG': 'Africa/Cairo',
        'SV': 'America/El_Salvador',
        'GQ': 'Africa/Malabo',
        'ER': 'Africa/Asmara',
        'EE': 'Europe/Tallinn',
        'ET': 'Africa/Addis_Ababa',
        'FK': 'Atlantic/Stanley',
        'FO': 'Atlantic/Faroe',
        'FJ': 'Pacific/Fiji',
        'FI': 'Europe/Helsinki',
        'FR': 'Europe/Paris',
        'GF': 'America/Cayenne',
        'PF': 'Pacific/Tahiti',
        'GA': 'Africa/Libreville',
        'GM': 'Africa/Banjul',
        'GE': 'Asia/Tbilisi',
        'DE': 'Europe/Berlin',
        'GH': 'Africa/Accra',
        'GI': 'Europe/Gibraltar',
        'GR': 'Europe/Athens',
        'GL': 'America/Nuuk',
        'GD': 'America/Grenada',
        'GP': 'America/Guadeloupe',
        'GU': 'Pacific/Guam',
        'GT': 'America/Guatemala',
        'GG': 'Europe/Guernsey',
        'GN': 'Africa/Conakry',
        'GW': 'Africa/Bissau',
        'GY': 'America/Guyana',
        'HT': 'America/Port-au-Prince',
        'HM': 'Australia/Hermite',
        'HN': 'America/Tegucigalpa',
        'HK': 'Asia/Hong_Kong',
        'HU': 'Europe/Budapest',
        'IS': 'Atlantic/Reykjavik',
        'IN': 'Asia/Kolkata',
        'ID': 'Asia/Jakarta',
        'IR': 'Asia/Tehran',
        'IQ': 'Asia/Baghdad',
        'IE': 'Europe/Dublin',
        'IM': 'Europe/Isle_of_Man',
        'IL': 'Asia/Jerusalem',
        'IT': 'Europe/Rome',
        'JE': 'Europe/Jersey',
        'JO': 'Asia/Amman',
        'JP': 'Asia/Tokyo',
        'KZ': 'Asia/Almaty',
        'KE': 'Africa/Nairobi',
        'KI': 'Pacific/Tarawa',
        'KP': 'Asia/Pyongyang',
        'KR': 'Asia/Seoul',
        'KW': 'Asia/Kuwait',
        'KG': 'Asia/Bishkek',
        'LA': 'Asia/Vientiane',
        'LV': 'Europe/Riga',
        'LB': 'Asia/Beirut',
        'LS': 'Africa/Maseru',
        'LR': 'Africa/Monrovia',
        'LY': 'Africa/Tripoli',
        'LI': 'Europe/Liechtenstein',
        'LT': 'Europe/Vilnius',
        'LU': 'Europe/Luxembourg',
        'MO': 'Asia/Macau',
        'MK': 'Europe/Skopje',
        'MG': 'Indian/Antananarivo',
        'MW': 'Africa/Blantyre',
        'MY': 'Asia/Kuala_Lumpur',
        'MV': 'Indian/Maldives',
        'ML': 'Africa/Bamako',
        'MT': 'Europe/Malta',
        'MH': 'Pacific/Majuro',
        'MR': 'Africa/Nouakchott',
        'MU': 'Indian/Mauritius',
        'YT': 'Indian/Mayotte',
        'MX': 'America/Mexico_City',
        'FM': 'Pacific/Chuuk',
        'MD': 'Europe/Chisinau',
        'MC': 'Europe/Monaco',
        'MN': 'Asia/Ulaanbaatar',
        'ME': 'Europe/Podgorica',
        'MS': 'America/Montserrat',
        'MA': 'Africa/Casablanca',
        'MZ': 'Africa/Maputo',
        'MM': 'Asia/Yangon',
        'NA': 'Africa/Windhoek',
        'NC': 'Pacific/Noumea',
        'NZ': 'Pacific/Auckland',
        'NI': 'America/Managua',
        'NE': 'Africa/Niamey',
        'NG': 'Africa/Lagos',
        'NU': 'Pacific/Niue',
        'NF': 'Pacific/Norfolk',
        'MP': 'Pacific/Saipan',
        'NO': 'Europe/Oslo',
        'NP': 'Asia/Kathmandu',
        'NR': 'Pacific/Nauru',
        'NG': 'Africa/Lagos',
        'OM': 'Asia/Muscat',
        'PK': 'Asia/Karachi',
        'PW': 'Pacific/Palau',
        'PS': 'Asia/Gaza',
        'PA': 'America/Panama',
        'PG': 'Pacific/Port_Moresby',
        'PY': 'America/Asuncion',
        'PE': 'America/Lima',
        'PH': 'Asia/Manila',
        'PN': 'Pacific/Pitcairn',
        'PL': 'Europe/Warsaw',
        'PT': 'Europe/Lisbon',
        'PR': 'America/Puerto_Rico',
        'QA': 'Asia/Qatar',
        'RE': 'Indian/Reunion',
        'RO': 'Europe/Bucharest',
        'RU': 'Europe/Moscow',
        'RW': 'Africa/Kigali',
        'SH': 'Atlantic/St_Helena',
        'KN': 'America/St_Kitts',
        'LC': 'America/St_Lucia',
        'MF': 'America/Marigot',
        'PM': 'America/Martinique',
        'VC': 'America/St_Vincent',
        'WS': 'Pacific/Apia',
        'SM': 'Europe/San_Marino',
        'ST': 'Africa/Sao_Tome',
        'SA': 'Asia/Riyadh',
        'SN': 'Africa/Dakar',
        'RS': 'Europe/Belgrade',
        'SC': 'Indian/Seychelles',
        'SL': 'Africa/Freetown',
        'SG': 'Asia/Singapore',
        'SX': 'America/Lower_Princes',
        'SK': 'Europe/Bratislava',
        'SI': 'Europe/Ljubljana',
        'SO': 'Africa/Mogadishu',
        'ZA': 'Africa/Johannesburg',
        'SS': 'Africa/Juba',
        'ES': 'Europe/Madrid',
        'LK': 'Asia/Colombo',
        'SD': 'Africa/Khartoum',
        'SR': 'America/Paramaribo',
        'SZ': 'Africa/Mbabane',
        'SE': 'Europe/Stockholm',
        'CH': 'Europe/Zurich',
        'SY': 'Asia/Damascus',
        'TW': 'Asia/Taipei',
        'TJ': 'Asia/Dushanbe',
        'TZ': 'Africa/Dar_es_Salaam',
        'TH': 'Asia/Bangkok',
        'TG': 'Africa/Lome',
        'TK': 'Pacific/Tokelau',
        'TO': 'Pacific/Tongatapu',
        'TT': 'America/Port_of_Spain',
        'TV': 'Pacific/Tarawa',
        'TZ': 'Africa/Dar_es_Salaam',
        'UG': 'Africa/Kampala',
        'UA': 'Europe/Kiev',
        'AE': 'Asia/Dubai',
        'GB': 'Europe/London',
        'US': 'America/New_York',
        'UY': 'America/Montevideo',
        'UZ': 'Asia/Tashkent',
        'VU': 'Pacific/Efate',
        'VA': 'Europe/Vatican',
        'VE': 'America/Caracas',
        'VN': 'Asia/Ho_Chi_Minh',
        'WF': 'Pacific/Wallis',
        'EH': 'Africa/El_Aaiun',
        'YE': 'Asia/Aden',
        'ZM': 'Africa/Lusaka',
        'ZW': 'Africa/Harare',
    };

    const timeZone = timeZones[countryCode];
    if (!timeZone) {
        throw new Error('Time zone not found for country code: ' + countryCode);
    }

    return moment().tz(timeZone).format('YYYY-MM-DD HH:mm:ss');
};

module.exports = { getTimeForCountry };
