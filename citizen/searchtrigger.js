// adds functionality to a citizen search trigger. SEARCH BOX MUST HAVE THE ID 'skin-citizen-search-trigger' OR WHATEVER ID YOU PUT IN
mw.loader.using(['mediawiki.util']).done(function () {
	/* Trigger search box when click on the fake search button on main page */
	var searchTrigger = document.getElementById('skin-citizen-search-trigger');
	if (searchTrigger) {
		searchTrigger.addEventListener('click', function () {
			var search = document.getElementById('citizen-search-details');
			// HACK: Force sticky header to be visible
			var isSearchHidden =
				document.body.classList.contains('citizen-scroll--down') &&
				window.matchMedia('(max-width: 1119px)');
			if (isSearchHidden) {
				document.body.classList.remove('citizen-scroll--down');
				document.body.classList.add('citizen-scroll--up');
			}
			var prefill = searchTrigger.dataset.prefill;
			if (prefill) {
				var prefillText = mw.html.escape(searchTrigger.dataset.prefill);
				document.getElementById('searchInput').value = prefillText;
			}
			// Citizen does not have a visible search bar, you need to expand the search card first
			// And Citizen will focus the input automatically
			search.open = true;
		});
	}
});
