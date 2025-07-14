export async function getItem(key) {
    if (typeof chrome !== 'undefined' && chrome.storage?.local) {
        return new Promise(resolve => {
            chrome.storage.local.get([key], result => {
                resolve(result[key] ?? null);
            });
        });
    }
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}
export async function setItem(key, value) {
    if (typeof chrome !== 'undefined' && chrome.storage?.local) {
        return new Promise(resolve => {
            chrome.storage.local.set({ [key]: value }, () => resolve());
        });
    }
    localStorage.setItem(key, JSON.stringify(value));
}
