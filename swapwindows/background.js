chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window-main.html', {
    'outerBounds': {
      'width': 400,
      'height': 500
    }
  });
});
