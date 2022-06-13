require('dotenv').config();
const API_URL = process.env.REACT_APP_DOMAIN;
export const truncate_string = (baseString, length = 50) => {
    return baseString.substring(0, length);
}

export const textCopier = (part) => {
    navigator.clipboard.writeText(API_URL + '/' + part)
}

export const wordCounter = (baseString) => {
    return baseString.split(" ").length
}

export const wordTruncater = (baseString, words) => {
    return baseString.split(" ").splice(0, words).join(" ");
}