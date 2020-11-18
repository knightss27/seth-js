import { SnackBars } from '../stores.js'

export function addSnackbar(status, message, color, timeout) {
    const id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    let done = false;
    SnackBars.update(sb => {sb[id] = {status, message, color, timeout, done}; return sb})
}