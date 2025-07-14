function getTodayKey() {
  return (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
}
let currentDomain = "";
let lastStart = Date.now();
let isIdle = false;
function saveTime(domain, delta) {
  if (!domain || delta <= 0)
    return;
  const key = `timetrack_daily_${getTodayKey()}`;
  chrome.storage.local.get([key], (res) => {
    const data = res[key] || {};
    data[domain] = (data[domain] || 0) + delta;
    chrome.storage.local.set({ [key]: data });
  });
}
function updateActiveDomain() {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    const tab = tabs[0];
    if (tab && tab.url) {
      const url = new URL(tab.url);
      currentDomain = url.hostname;
    } else {
      currentDomain = "";
    }
    lastStart = Date.now();
  });
}
function handleTabChange() {
  const now = Date.now();
  if (currentDomain && !isIdle) {
    const delta = Math.floor((now - lastStart) / 1e3);
    saveTime(currentDomain, delta);
  }
  updateActiveDomain();
}
chrome.tabs.onActivated.addListener(handleTabChange);
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.active && changeInfo.url) {
    handleTabChange();
  }
});
chrome.windows.onFocusChanged.addListener(handleTabChange);
chrome.idle.onStateChanged.addListener((state) => {
  const now = Date.now();
  if (state === "idle" || state === "locked") {
    isIdle = true;
    if (currentDomain) {
      const delta = Math.floor((now - lastStart) / 1e3);
      saveTime(currentDomain, delta);
    }
  } else {
    isIdle = false;
    lastStart = now;
  }
});
updateActiveDomain();
