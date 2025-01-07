// Enable talk button for user pages
mw.loader.using(['mediawiki.util'], function () {
    $(document).ready(function () {
        // Get the namespace ID
        var namespaceId = mw.config.get('wgNamespaceNumber');

        // If namespace ID is not 2, insert CSS to hide the #ca-talk element
        if (namespaceId !== 2) {
            // Create a <style> element
            var style = document.createElement('style');
            style.textContent = '#ca-talk { display: none; }';
            document.head.appendChild(style);
        }
    });
});
