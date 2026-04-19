# Arabic Language Support - Implementation Guide

## Overview
Your Catholic Faith Guardian website now has full Arabic language support with RTL (right-to-left) layout, spiritually accurate translations, and persistent language preference storage.

## Features Implemented

### 1. **Language Switcher**
- Located in the navigation bar (next to the hamburger menu on mobile)
- Two buttons: "English" and "العربية" (Arabic)
- Active button is highlighted with dark green background and gold text
- Language preference is saved in browser localStorage and persists across sessions

### 2. **RTL Layout Support**
When Arabic is selected, the entire layout automatically converts to right-to-left:
- Text direction reverses
- Navigation items flip direction
- Language switcher repositions appropriately
- All text aligns to the right
- Card layouts adjust for RTL reading

### 3. **Spiritually Accurate Translations**
All theological terms and concepts have been translated with spiritual precision:
- **كريستولوجيا** (Christologia) - Christology
- **الاتحاد الأقنومي** (Al-Ittihad Al-Aqnumi) - The Hypostatic Union
- **الفداء** (Al-Fida) - Redemption/Atonement
- **المجالس المسكونية** (Al-Majalis Al-Miskunia) - Ecumenical Councils
- **العقائد الكاثوليكية** (Al-Aqa'id Al-Kathulukia) - Catholic Doctrines
- **تاريخ الكنيسة** (Tarikh Al-Kanisa) - Church History

### 4. **Files Modified**

#### `translations.js` (NEW)
- Comprehensive translation dictionary with English and Arabic
- All navigation, page titles, and content translations
- Spiritual terminology precisely rendered
- Organized by page sections

#### `script.js` (UPDATED)
- Language initialization on page load
- DOM element translation using `data-i18n` attributes
- Language switching with real-time updates
- localStorage integration for persistent preference
- RTL direction toggling with language

#### `style.css` (UPDATED)
- RTL CSS support for Arabic (`html[lang="ar"]` selectors)
- Language switcher button styling
- Flexbox direction reversal for RTL layout
- Responsive adjustments for both languages
- Proper text alignment for RTL

#### `index.html` (UPDATED)
- Language switcher in navigation
- `data-i18n` attributes on translatable elements
- Included `translations.js` script
- Script tags in proper order

## How to Use

### For End Users:
1. Click on "English" or "العربية" button in the top navigation
2. The entire website instantly converts to that language
3. Your preference is automatically saved
4. All future visits will load in your preferred language

### For Developers - Adding Translations:

1. **Add translation keys to `translations.js`:**
   ```javascript
   en: {
     myNewKey: "English text here"
   },
   ar: {
     myNewKey: "النص العربي هنا"
   }
   ```

2. **Add `data-i18n` attribute to HTML elements:**
   ```html
   <h1 data-i18n="myNewKey">English text here</h1>
   ```

3. **The script automatically translates on language switch**

## Arabic Typography Recommendations

The translations use:
- Standard Modern Arabic (Fusha)
- Spiritually precise theological terminology
- Formal, respectful tone appropriate to religious content
- Google Fonts "Droid Arabic Naskh" for Arabic support

## Implementation on Other Pages

To apply the same language support to `christology.html`, `ecumenical.html`, `doctrines.html`, and `history.html`:

1. Add `<script src="translations.js"></script>` to `<head>`
2. Add `<script src="script.js"></script>` before `</body>`
3. Add language switcher HTML in navigation:
   ```html
   <div class="language-switcher">
       <button class="lang-btn active" data-lang="en">English</button>
       <button class="lang-btn" data-lang="ar">العربية</button>
   </div>
   ```
4. Add `data-i18n="keyName"` attributes to elements you want translated
5. Add translation keys to `translations.js`

## Supported Languages
- **English (en)** - Default language
- **Arabic (ar)** - Full RTL support with spiritually accurate translations

## Browser Compatibility
- Modern browsers supporting:
  - ES6 JavaScript
  - CSS flexbox with RTL
  - localStorage API
  - HTML5 data attributes

## Future Enhancements
- Additional languages (Spanish, French, Italian)
- Language selector in footer
- Language preference tied to user accounts
- More comprehensive translations for all page content
- Deep link support for Arabic pages

## Notes
- All dates are preserved in Arabic numerals (2026 = 2026 in both languages)
- URLs remain unchanged (no language-specific paths)
- SEO considerations for multilingual content
