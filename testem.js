module.exports = {
  'framework': 'mocha',
  'test_page': 'tests/index.html?hidepassed',
  'disable_watching': true,
  'launch_in_ci': [
    'Firefox',
    'SlimerJsVisualAcceptance'
  ],
  'launch_in_dev': [
    'Firefox'
  ],

  'launchers': {
    'PhantomJsVisualAcceptance': {
      'command': 'phantomjs vendor/phantomjs-launcher.js <url>',
      'protocol': 'browser'
    },
    'SlimerJsVisualAcceptance': {
      'command': 'slimerjs -jsconsole vendor/phantomjs-launcher.js <url>',
      'protocol': 'browser'
    }
  }
}
