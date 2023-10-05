import { browser } from "$app/environment";
import { writable } from "svelte/store";

const defaultValue = 'python';
const initialValue = browser ? window.localStorage.getItem('language') ?? defaultValue : defaultValue;

const language = writable<string>(initialValue);

language.subscribe((value) => {
    if(browser) {
        window.localStorage.setItem('language', value)
    }
})

export default language;