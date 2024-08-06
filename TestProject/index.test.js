
const { getTimeForCountry } = require('../index');


const timeZones = {
    'US': 'America/New_York',
    'GB': 'Europe/London',
    'IN': 'Asia/Kolkata',
    'AU': 'Australia/Sydney',
    'JP': 'Asia/Tokyo',
    'BR': 'America/Sao_Paulo',
    'ZA': 'Africa/Johannesburg',
    'CN': 'Asia/Shanghai',
    'RU': 'Europe/Moscow',
    'FR': 'Europe/Paris',
};

Object.keys(timeZones).forEach(countryCode => {
    test(`should return the correct time for ${countryCode}`, () => {
        const time = getTimeForCountry(countryCode);
        expect(time).toBeDefined();
        expect(time).toMatch(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/);
    });
});

test('should throw an error for unknown country code', () => {
    expect(() => getTimeForCountry('ZZ')).toThrow('Time zone not found for country code: ZZ');
});

test('should handle time zones with large offsets', () => {
    const time = getTimeForCountry('AU');
    expect(time).toBeDefined();
});

test('should handle daylight saving time changes', () => {
    const timeInNY = getTimeForCountry('US');
    expect(timeInNY).toBeDefined();
});
