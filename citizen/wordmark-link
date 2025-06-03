// BSD Zero Clause License
//
// Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted.
//
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED
// WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL
// DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER
// TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.


//// Wordmark Link ////
$(document).ready(function () {
  $('.mw-logo-wordmark').each(function () {
    if (!$(this).closest('a').length) {
      const link = $('<a>', {
        href: '/',
        title: mw.config.get("wgSiteName")
      });
      $(this).wrap(link);
    }
  });
});

// The above css makes all instances of .mw-logo-wordmark link to the mainpage.
// The two major instances of the logo wordmark are in your footer and the citizen sidebar.

// This javascript is public domain and can be used without permission, attirbution, or royalities.
