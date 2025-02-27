// https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper/EyeDropper

function openEyeDropper() {
	new EyeDropper().open().then(({ sRGBHex }) => {
		console.log(sRGBHex);
		navigator.clipboard.writeText(sRGBHex);
	});
}

chrome.action.onClicked.addListener((tab) => {
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		func: openEyeDropper,
	});
});
