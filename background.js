chrome.action.onClicked.addListener((tab) => {
  if (tab) {
    const textToCopy = `${tab.title}\t${tab.url}`; // Tab separator for Google Sheets

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: copyToClipboard,
      args: [textToCopy]
    });
  }
});

function copyToClipboard(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}
