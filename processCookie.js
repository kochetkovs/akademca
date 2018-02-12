const daysToKeepCookie = 90;


const YZRK = '+7(495)166-2941';
const YZRKZ = '+7(495)166-2948';
const YZOKZ = '+7(495)166-2952';
const YZ = '+7(495)166-5832';

const YKRK = '+7(495)166-2951';
const YKRKK = '+7(495)166-2961';
const YKOKK = '+7(495)166-5864';
const YK = '+7(495)166-5874';

const YS = '+7(495)166-2957';

const YSZ = '+7(495)166-5861';
const YSK = '+7(495)166-5872';

const GZ = '+7(495)166-2963';
const GK = '+7(495)166-2981';
const GS = '+7(495)166-2984';


const unknown = '+7(495)166-2582';
//=======================================================================================================================

function getCookie(name) {
    if (document.cookie.indexOf(name) > 0) {
        var cookie = document.cookie.split(name + '=')[1].split(';')[0];
        //console.log('Read cookie ' + name + ' successfully, it\'s value is: ' + cookie);
        return cookie;
    } else {
        return false
    }
}

function setCookie(name, val) {
    if (val) {
        var expires = new Date();
        expires.setDate(expires.getDate() + daysToKeepCookie);
        document.cookie = name + '=' + val + '; expires=' + expires
        //console.log('Cookie ' + name + ' has been set to the value: ' + val)
    }
}

function getUTMfromURL(name) {
    name = name + '=';
    if (document.URL.indexOf(name) > 0) {
        var utm = document.URL.split(name)[1].split('&')[0].split('#')[0];
        //console.log('Got ' + name.substr(0, name.length-1) + ' from URL, it\'s value is: ' + utm);
        return utm
    } else {
        return false
    }
}
//=======================================================================================================================

var utm_source = getUTMfromURL('utm_source');
var utm_campaign = getUTMfromURL('utm_campaign');
var utm_term = getUTMfromURL('utm_term');

var phoneNumber;
var utm_all;

if (utm_source) {
    setCookie('fromSourceCampaignTerm', utm_source + ' ' + utm_campaign + ' ' + utm_term);
    if (utm_term) {
        utm_all = utm_source + ' ' + utm_campaign + ' ' + utm_term
    } else {
        utm_all = utm_source + ' ' + utm_campaign + ' false'
    }
    switch (utm_all) {
        case 'yandex zelenograd remont-kvartir': {phoneNumber = YZRK; break}
        case 'yandex zelenograd remont-kvartir-zelenograd': {phoneNumber = YZRKZ; break}
        case 'yandex zelenograd otdelka-kvartir-zelenograd': {phoneNumber = YZOKZ; break}
        case 'yandex zelenograd false': {phoneNumber = YZ; break}
        case 'yandex khimki remont-kvartir': {phoneNumber = YKRK; break}
        case 'yandex khimki remont-kvartir-khimki': {phoneNumber = YKRKK; break}
        case 'yandex khimki otdelka-kvartir-khimki': {phoneNumber = YKOKK; break}
        case 'yandex khimki false': {phoneNumber = YK; break}
        case 'yandex sputniki false': {phoneNumber = YS; break}
        case 'yandex seti-zelenograd false': {phoneNumber = YSZ; break}
        case 'yandex seti-khimki false': {phoneNumber = YSK; break}
        case 'google zelenograd false': {phoneNumber = GZ; break}
        case 'google khimki false': {phoneNumber = GK; break}
        case 'google sputniki false': {phoneNumber = GS; break}
        default: {phoneNumber = unknown}
    }
} else {
    switch (getCookie('fromSourceCampaignTerm')) {
        case 'yandex zelenograd remont-kvartir': {phoneNumber = YZRK; break}
        case 'yandex zelenograd remont-kvartir-zelenograd': {phoneNumber = YZRKZ; break}
        case 'yandex zelenograd otdelka-kvartir-zelenograd': {phoneNumber = YZOKZ; break}
        case 'yandex zelenograd false': {phoneNumber = YZ; break}
        case 'yandex khimki remont-kvartir': {phoneNumber = YKRK; break}
        case 'yandex khimki remont-kvartir-khimki': {phoneNumber = YKRKK; break}
        case 'yandex khimki otdelka-kvartir-khimki': {phoneNumber = YKOKK; break}
        case 'yandex khimki false': {phoneNumber = YK; break}
        case 'yandex sputniki false': {phoneNumber = YS; break}
        case 'yandex seti-zelenograd false': {phoneNumber = YSZ; break}
        case 'yandex seti-khimki false': {phoneNumber = YSK; break}
        case 'google zelenograd false': {phoneNumber = GZ; break}
        case 'google khimki false': {phoneNumber = GK; break}
        case 'google sputniki false': {phoneNumber = GS; break}
        case false: {phoneNumber = unknown; break}
        default: {phoneNumber = unknown}
    }
}