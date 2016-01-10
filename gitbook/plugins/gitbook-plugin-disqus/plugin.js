require([
    "gitbook",
    "jQuery",
    "URIjs/URI",
    "utils/url",
], function(gitbook, $, URI, URL) {
    var use_identifier = false;

    var resetDisqus = function() {
        var $disqusDiv = $("<div>", {
            "id": "disqus_thread"
        });
        $(".book-body .page-inner").append($disqusDiv);

        if (typeof DISQUS !== "undefined") {
            DISQUS.reset({
                reload: true,
                config: function () {
                    this.language = $('html').attr('lang') || "en";
                    this.page.url = window.location.href;

                    if (use_identifier) {
                        this.page.identifier = currentUrl();
                    }
                }
            });
        }
    };

    var resetAdsense = function() {
        var $adsenseDiv =
          '<br><br>'+
          '<h3 style="text-align:center">贊助</h3>' +
          '<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>' +
          '<ins class="adsbygoogle"' +
               'style="display:block"' +
               'data-ad-client="ca-pub-1990193713845546"' +
               'data-ad-slot="2858259611"' +
               'data-ad-format="auto"></ins>' +
          '<br><br>'+
          '<script>' +
          '(adsbygoogle = window.adsbygoogle || []).push({});' +
          '</script>';

        $(".book-body .page-inner").append($adsenseDiv);

    };

    var currentUrl = function() {
        var location = new URI(window.location.href),
            base     = URL.join(window.location.href, gitbook.state.basePath),
            current  = location.relativeTo(base).toString(),
            language = $('html').attr('lang'),
            parent   = URL.dirname(base),
            folder   = new URI(base).relativeTo(parent).toString();

        // If parent folder is the same as language, we assume translated books
        if (folder.replace(/\/$/, "") === language) {
            current = folder + current;
        }

        return current;
    };

    gitbook.events.bind("start", function(e, config) {
        config.disqus = config.disqus || {};
        var disqus_shortname = config.disqus.shortName;
        var disqus_config = function() {
            this.language = $('html').attr('lang') || "en";
        };

        if (config.disqus.useIdentifier) {
            use_identifier = true;
            var disqus_identifier = currentUrl();
        }

        /* * * DON'T EDIT BELOW THIS LINE * * */
        (function() {
            var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
            dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        })();

        resetDisqus();
    });

    gitbook.events.bind("page.change", resetAdsense);
    gitbook.events.bind("page.change", resetDisqus);
});
