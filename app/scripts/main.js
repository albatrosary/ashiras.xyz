console.log('ashiras.xyz');

(function (){
  // Check if a new cache is available on page load.
  console.log('Check if a new cache is available on page load.');
  window.addEventListener('load', function(e) {
    console.log('load event');
    window.applicationCache.addEventListener('updateready', function(e) {
      if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
        // Browser downloaded a new app cache.
        // Swap it in and reload the page to get the new hotness.
        window.applicationCache.swapCache();
        if (confirm('A new version of this site is available. Load it?')) {
          window.location.reload();
        }
      } else {
        // Manifest didn't changed. Nothing new to server.
        console.log('Manifest didn\'t changed. Nothing new to server.');
      }
    }, false);
  }, false);
})();
