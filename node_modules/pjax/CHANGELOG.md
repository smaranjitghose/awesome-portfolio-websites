# 0.2.8 - 2019-03-09

- Fixed: Edge form support.
  ([#178](https://github.com/MoOx/pjax/pull/178) - @robinnorth)
- Fixed: Removed keyup event listener for forms.
  ([#184](https://github.com/MoOx/pjax/pull/184) - @BehindTheMath)
- Fixed: Bugs in evalScripts().
  ([#186](https://github.com/MoOx/pjax/pull/186) - @BehindTheMath)
- Fixed: Handle non-string HTML passed to loadContent().
  ([#200](https://github.com/MoOx/pjax/pull/200) - @BehindTheMath)
- Tooling: Switch linting to ESLint and Prettier.
  ([#191](https://github.com/MoOx/pjax/pull/191) - @BehindTheMath)

# 0.2.7 - 2018-08-15

- Fixed: Parsing values of option elements in forms.
  ([#162](https://github.com/MoOx/pjax/pull/162) - @BehindTheMath)
- Fixed: Added index.d.ts to package.json so it will be installed by npm.
  ([c589ab9](https://github.com/MoOx/pjax/commit/c589ab9c25bee6161bf3e557eaca44e51c14fb89) - @BehindTheMath)
- Fixed: `options.history` to correctly parse being set to false.
  ([#165](https://github.com/MoOx/pjax/pull/165) - @BehindTheMath).
- Fixed: Pass the current `options` object to `loadContent()`.
  ([#171](https://github.com/MoOx/pjax/pull/171) - @BehindTheMath)
- Fixed: Ensure correct XHR encoding for multipart/form-data forms
  ([#174](https://github.com/MoOx/pjax/pull/174) - @BehindTheMath)
- Added: More documentation.
  ([#160](https://github.com/MoOx/pjax/pull/160), [#171](https://github.com/MoOx/pjax/pull/171) - @robinnorth, @BehindTheMath)

# 0.2.6 - 2018-04-30

- Fixed: Form submission for GET requests.
  ([#129](https://github.com/MoOx/pjax/pull/129) - @robinnorth)
- Fixed: Refactor `loadUrl()` to make manually calling simpler.
  ([#134](https://github.com/MoOx/pjax/pull/134) - @robinnorth)
- Fixed: Support multiple select fields in form submissions.
  ([#147](https://github.com/MoOx/pjax/pull/147) - @robinnorth)
- Fixed: Use the same options object in `handle-response` as in `send-request`. This way, `pjax.state.options` will also have the request options.
  ([#148](https://github.com/MoOx/pjax/pull/148) - @BehindTheMath)
- Added: Move the XHR callback to a separate method, and trigger an error event if the response cannot be parsed.
  ([#137](https://github.com/MoOx/pjax/pull/137) - @BehindTheMath)
- Added: TypeScript definitions.
  ([#138](https://github.com/MoOx/pjax/pull/138) - @BehindTheMath)
- Added: `replaceNode` switch, as an alternative to the `outerHTML` switch.
  ([#141](https://github.com/MoOx/pjax/pull/141) - @BehindTheMath)
- Added: `X-PJAX-Selectors` HTTP header. This is a serialized JSON array of selectors, taken from `options.selectors`. You can use this to send back only the elements that Pjax will use to switch, instead of sending the whole page.
  ([#144](https://github.com/MoOx/pjax/pull/144) - @BehindTheMath)
- Added: An option to use `FormData` to submit forms.
  ([#153](https://github.com/MoOx/pjax/pull/153) - @BehindTheMath)
- Added: Tests.
  ([f98f2dd](https://github.com/MoOx/pjax/commit/f98f2dd63b48113ff91b6bd8808257bfc723ef6b), [#145](https://github.com/MoOx/pjax/pull/145) - @robinnorth, @BehindTheMath)

# 0.2.5 - 2018-02-02

- Fixed: Async switch functions now work correctly, because the DOM is now parsed after all the switches finish.
  ([#79](https://github.com/MoOx/pjax/pull/79), [#110](https://github.com/MoOx/pjax/pull/110) - @oskarrough, @BehindTheMath, @robinnorth)
- Fixed: Bug on IE11 preventing AJAX page refresh.
  ([#81](https://github.com/MoOx/pjax/pull/81) - @CPTechnikVX)
- Fixed: Default switches are now available as `Pjax.switches`.
  ([#92](https://github.com/MoOx/pjax/pull/92) - @BehindTheMath)
- Fixed: An error that was caused by a missing `switchElementsAlt`.
  ([#93](https://github.com/MoOx/pjax/pull/93), [#104](https://github.com/MoOx/pjax/pull/104) - @BehindTheMath, @robinnorth)
- Fixed: Incorrect `main` field in npm package
  ([#105](https://github.com/MoOx/pjax/pull/105) - @robinnorth)
- Fixed: A pending XHR is now aborted if the user navigates somewhere else before the request is finished.
  ([#114](https://github.com/MoOx/pjax/pull/114) - @robinnorth)
- Fixed: When rendering new content, focus will now be removed only from elements within one of the containers manipulated by Pjax.
  ([#116](https://github.com/MoOx/pjax/pull/116) - @BehindTheMath)
- Fixed: Stop dispatching extraneous `pjax:complete` events when external scripts load
  ([#118](https://github.com/MoOx/pjax/pull/118) - @robinnorth)
- Added: Send the `X-PJAX` header with XHR requests.
  ([#80](https://github.com/MoOx/pjax/pull/80) - @bram1028)
- Added: Direct download link for script tags. (@MoOx)
- Added: Pass the element that triggered Pjax to the `pjax:send` event.
  ([#94](https://github.com/MoOx/pjax/pull/94) - @BehindTheMath)
- Added: An option to set a timeout for XHR requests.
  ([#95](https://github.com/MoOx/pjax/pull/95) - @BehindTheMath)
- Added: Checks for XHR redirects
  ([#101](https://github.com/MoOx/pjax/pull/101) - @BehindTheMath)
- Added: Save scroll position with history, and restore when navigating backwards or forwards.
  ([#110](https://github.com/MoOx/pjax/pull/110), [#119](https://github.com/MoOx/pjax/pull/119) - @BehindTheMath, @robinnorth)
- Added: Scroll to element position when URL contains a hash
  ([#110](https://github.com/MoOx/pjax/pull/110) - @BehindTheMath)
- Added: Minified version of the Pjax bundle.
  ([#115](https://github.com/MoOx/pjax/pull/115) - @BehindTheMath)
- Changed: Miscellaneous code and tests cleanup.
  ([#96](https://github.com/MoOx/pjax/pull/96), [#98](https://github.com/MoOx/pjax/pull/98), [#99](https://github.com/MoOx/pjax/pull/99), [#100](https://github.com/MoOx/pjax/pull/1070), [#107](https://github.com/MoOx/pjax/pull/107), [#113](https://github.com/MoOx/pjax/pull/113), [#120](https://github.com/MoOx/pjax/pull/120) - @BehindTheMath, @MoOx, @robinnorth)

# 0.2.4 - 2016-06-28

- Fixed: ``refresh`` should now work (use `this.parseDOM` for refresh)
  ([#67](https://github.com/MoOx/pjax/pull/67) - @compressed)
- Fixed: Some attributes, such as `itemscope` have no corresponding value.
  This change allows them to still be set.
  ([#67](https://github.com/MoOx/pjax/pull/67) - @compressed)
- Added: ``cacheBust`` option
  ([#71](https://github.com/MoOx/pjax/pull/71) - @tremby)

# 0.2.3 - 2016-03-24

- Fixed: ``currentUrlFullReload`` option now works
- Fixed: ``this.reload`` is now a Function
  ([#65](https://github.com/MoOx/pjax/issues/65))

# 0.2.2 - 2016-03-12

- Fixed: added back standalone version in `./pjax.js`
([#57](https://github.com/MoOx/pjax/issues/57)
- Fixed: error when using pjax with google analytics (``options`` was undefined)
([#59](https://github.com/MoOx/pjax/pull/59))
- Fixed: HierarchyRequestError error
([#49](https://github.com/MoOx/pjax/pull/49))
- Fixed: ``TypeError: Pjax.forEachEls is not a function``
([#52](https://github.com/MoOx/pjax/pull/52))
- Fixed: ``TypeError: Pjax.executeScripts is not a function``
([#52](https://github.com/MoOx/pjax/pull/52))
- Fixed: ``TypeError: Pjax.clone is not a function``
([#52](https://github.com/MoOx/pjax/pull/52))
- Added: Ignore events with prevented defaults
([#50](https://github.com/MoOx/pjax/pull/50))

# 0.2.1 - 2015-02-04

- Fixed: it's better when a release have actual files.

# 0.2.0 - 2015-02-04

- Fixed: prevent scrollTo from being converted from false to 0 ([#33](https://github.com/MoOx/pjax/pull/33))
- Changed: code exploded in commonjs style
- Added: lots of tests
- Added: `refresh` method to force update a DOM element ([#36](https://github.com/MoOx/pjax/pull/36))

# 0.1.4 - 2014-10-14

- Fixed: allow to load pages without any attributes on `<html>` element (fix [#6](https://github.com/MoOx/pjax/issues/6))
- Fixed: make `Pjax.switches.sideBySide` method usable (fix [#13](https://github.com/MoOx/pjax/issues/13))

# 0.1.3 - 2014-09-16

- Fixed: clicking on the current url somewhere does not produce a full reload by default (see option `currentUrlFullReload`)
- Fixed: `document.implementation.createHTMLDocument` error (in IE10, ref [#16](https://github.com/MoOx/pjax/pull/16))

# 0.1.2 - 2014-04-03

- Changed: `pjax.js` relocated in `src/`
- Fixed: `<html>` attributes of pjaxified document are now available

# 0.1.1 - 2014-04-02

- Fixed: safer UMD wrapper (fix concat issue)

# 0.1.0 - 2014-03-24

✨ Initial release
