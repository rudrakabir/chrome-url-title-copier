# Copy Title & URL

**One click to copy. Two columns when you paste.**

A small Chrome extension that copies the current page’s title and URL together, ready to paste into Google Sheets or Excel. Useful for collecting research, building reading lists, and organizing references without copying each detail separately.

**[Download ZIP](https://github.com/rudrakabir/chrome-url-title-copier/raw/refs/heads/main/Title%20and%20URL%20copier%20for%20Chrome.zip)** · **[Get help](https://github.com/rudrakabir/chrome-url-title-copier/issues)** · **[Buy Me a Coffee](https://www.buymeacoffee.com/rudrakabir)**

## What it looks like in your spreadsheet

The extension separates the title and URL with a tab. Paste into a cell, and they fill that column and the next one. For example:

| Page title | URL |
|---|---|
| Example Domain | https://example.com/ |

Each click copies the current tab. Paste each page into a new row to build your list.

## Install

This project is distributed as an unpacked Chrome extension.

1. **[Download the extension ZIP](https://github.com/rudrakabir/chrome-url-title-copier/raw/refs/heads/main/Title%20and%20URL%20copier%20for%20Chrome.zip)** and extract it.
2. Open `chrome://extensions/` in Chrome.
3. Enable **Developer mode** in the top-right corner.
4. Click **Load unpacked**.
5. Select the extracted extension folder containing `manifest.json`, `background.js`, and `icon.png`.
6. Open Chrome’s extensions menu and pin **Copy Title & URL** for quick access.

Keep the extracted folder on your computer—Chrome loads the extension from that location.

## Use it

1. Open the webpage you want to save.
2. Click the **Copy Title & URL** button in Chrome’s toolbar.
3. Select a cell in Google Sheets or Excel.
4. Paste with **⌘V** on Mac or **Ctrl+V** on Windows/Linux.

Select the cell before pasting, rather than editing inside it, so the title and URL can fill separate columns.

## Privacy and permissions

No account or sign-in is required. The current code copies the active tab’s title and URL to your clipboard when you click the extension button. It contains no analytics or server uploads.

The manifest declares `activeTab`, `scripting`, and host access for `<all_urls>`. These permissions allow interaction with webpages; the copy action runs when you click the toolbar button. You can inspect the [manifest](Title%20and%20URL%20copier%20for%20Chrome/manifest.json) and [copying code](Title%20and%20URL%20copier%20for%20Chrome/background.js) in this repository.

## Questions

**Does it copy all my open tabs?**  
It copies the current tab, one page at a time.

**Can I paste into a text editor?**  
Yes. The result is plain text with a tab between the title and URL. How that tab is displayed depends on the destination app.

**Where can I report a problem?**  
Open an [issue](https://github.com/rudrakabir/chrome-url-title-copier/issues) with your Chrome version and a description of what happened. Suggestions and contributions are welcome too.

## Support the project

Made by **[Rudra Kabir](https://github.com/rudrakabir)**.

If this saves you a few repetitive copy-and-paste steps, you can support the project:

☕ **[Buy Me a Coffee](https://www.buymeacoffee.com/rudrakabir)**
