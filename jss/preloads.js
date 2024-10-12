
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.pt-BR.e9317c1000c76bea6c68.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6797.latest.pt-BR.ad0ee70b06bc9854ca6b.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5817.latest.pt-BR.5b8f3a488f62c86e1062.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5816.latest.pt-BR.62966691cce79d1ce69d.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.pt-BR.358ccb5d0eaee902a349.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4100.latest.pt-BR.8e7cc044415897fd13ea.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/3147.latest.pt-BR.5cb97deead945b5bc3b3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/794.latest.pt-BR.f8a7f2bbf7aef3e0f8bf.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4328.latest.pt-BR.b85365f877c98b25eab5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/648.latest.pt-BR.2027ff23e985eaa03142.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5455.latest.pt-BR.46f69af5c19bcf8a1cd3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8024.latest.pt-BR.6bcbecb2da9631843446.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8217.latest.pt-BR.46b7dbd638857fb4ba10.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.pt-BR.93f8a3e2ce258c451bc8.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/6797.latest.pt-BR.4d537816ff9556bf1225.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.pt-BR.8bb004feb2aa35e02d5d.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.latest.pt-BR.21b3378cad51e984f146.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0695/1439/5905/files/Medium_PNG-Stanley_Brandmark_Primary_Horizontal_x320.png?v=1714662511"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  