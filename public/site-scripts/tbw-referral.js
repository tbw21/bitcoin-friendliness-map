/* Copied verbatim from thebitcoinway.com's site-wide custom code (October 2026). Keep in step with the site; see app/SiteTracking.tsx. */

  (function() {
    var params = new URLSearchParams(window.location.search);
    var ref = params.get('ref');
    if (ref) {
      localStorage.setItem('referrer_id', ref);
    }
    var referrerId = ref || localStorage.getItem('referrer_id');
    if (referrerId) {
      document.addEventListener('DOMContentLoaded', function() {
        populateField(referrerId);
      });
      populateField(referrerId);
      setTimeout(function() { populateField(referrerId); }, 500);
    }
    function populateField(value) {
      var field = document.querySelector(
        'input[name="referrer_id"], input#referrer_id, input[data-name="referrer_id"]'
      );
      if (field) {
        field.value = value;
      }
    }
  })();
