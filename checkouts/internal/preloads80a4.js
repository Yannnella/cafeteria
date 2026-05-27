
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com","https://extensions.shopifycdn.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills-legacy.BcltRhPu.js","/cdn/shopifycloud/checkout-web/assets/c1/app-legacy.BVZH3ZDk.js","/cdn/shopifycloud/checkout-web/assets/c1/esnext-vendor-legacy.BzLpyt_e.js","/cdn/shopifycloud/checkout-web/assets/c1/browser-legacy.COqDO0nT.js","/cdn/shopifycloud/checkout-web/assets/c1/shared-is-shop-pay-active-legacy.O0R4n3cr.js","/cdn/shopifycloud/checkout-web/assets/c1/types-UnauthenticatedErrorModalPayload-legacy.COqPajPZ.js","/cdn/shopifycloud/checkout-web/assets/c1/images-payment-icon-legacy.BW3R3WiF.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-shop-discount-offer-legacy.CoZillPW.js","/cdn/shopifycloud/checkout-web/assets/c1/NotFound-legacy.DOkqehIj.js","/cdn/shopifycloud/checkout-web/assets/c1/context-utilities-legacy.DPIhymzo.js","/cdn/shopifycloud/checkout-web/assets/c1/shared-unactionable-errors-legacy.D8Q_0Dkp.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-installmentsNotSupportedForAddress-legacy.Dk7Zs_tj.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayCheckoutGqlVersion-legacy.B0tZzseQ.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-ShopPayCheckoutSessionQuery-legacy.Dm4hdJqI.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-setAddressErrors-legacy.g5J8LFeF.js","/cdn/shopifycloud/checkout-web/assets/c1/types-index-legacy.DcmdnTVi.js","/cdn/shopifycloud/checkout-web/assets/c1/images-flag-icon-legacy.Bfupgm8k.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-es-legacy.J4fPjsN1.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage-legacy.-dqt_vzG.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useWalletsTimeout-legacy.DtkHK6fn.js","/cdn/shopifycloud/checkout-web/assets/c1/remember-me-hooks-legacy.BpiW3tc6.js","/cdn/shopifycloud/checkout-web/assets/c1/OffsitePaymentFailed-legacy.ByCde9fA.js","/cdn/shopifycloud/checkout-web/assets/c1/NoAddressLocationFullDetour-legacy.BbX05ne6.js","/cdn/shopifycloud/checkout-web/assets/c1/SplitDeliveryMerchandiseContainer-legacy.DVmvkS0s.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayButtonClassName-legacy.BogSTxTd.js","/cdn/shopifycloud/checkout-web/assets/c1/ChangeCompanyLocationLink-legacy.BMTmggik.js","/cdn/shopifycloud/checkout-web/assets/c1/WalletsSandbox-WalletSandbox-legacy.CWsF_CsQ.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUnauthenticatedErrorModal-legacy.Cw_FTi4u.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useForceShopPayUrl-legacy.Bm_BIPGd.js","/cdn/shopifycloud/checkout-web/assets/c1/GooglePayButton-index-legacy.CYoFuOi3.js","/cdn/shopifycloud/checkout-web/assets/c1/MarketsProDisclaimer-legacy.FJm-vwj3.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingGroupsSummaryLine-legacy.B0X-R9-R.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview-legacy.BabypbaF.js","/cdn/shopifycloud/checkout-web/assets/c1/AutocompleteField-hooks-legacy.BW-dUssu.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalizationExtensionField-legacy.BY5ZBoa7.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayPaymentRequiredMethod-legacy.ZCDb7Dxo.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUpdateCheckoutAddress-legacy.0wzjlhey.js","/cdn/shopifycloud/checkout-web/assets/c1/WalletLogo-legacy.CXYYZIng.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useGeneralPaymentErrorMessage-legacy.DP-r1CN5.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShowShopPayOptin-legacy.BKNQ3QeS.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShowCreateMoreAccountsGdprTreatment-legacy.HFto3_ph.js","/cdn/shopifycloud/checkout-web/assets/c1/Section-legacy.DNY4BzVa.js","/cdn/shopifycloud/checkout-web/assets/c1/MobileOrderSummary-legacy.CorhHRHz.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useOnePageFormSubmit-legacy.voGR631A.js","/cdn/shopifycloud/checkout-web/assets/c1/PayPalOverCaptureInfoBanner-legacy.C8VbFYQc.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-get-negotiation-input-legacy.BXnP1nkC.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-cash-constants-legacy.UL4zt1ZY.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentErrorBanner-legacy.DSEhIyU3.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblems-StockProblemsLineItemList-legacy.Oq12fGix.js","/cdn/shopifycloud/checkout-web/assets/c1/DutyOptions-legacy.NWSBNnsq.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown-legacy.D_sRlp7k.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal-legacy.BGMi-VBB.js","/cdn/shopifycloud/checkout-web/assets/c1/extension-targets-shipping-options-legacy.BaHSxNgZ.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector-legacy.lpA-DuXS.js","/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown-legacy.CqBpAyD5.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useSubscribeMessenger-legacy.C-BJvo-Z.js","/cdn/shopifycloud/checkout-web/assets/c1/component-RuntimeExtension-legacy.bEZCnCYP.js","/cdn/shopifycloud/checkout-web/assets/c1/AnnouncementRuntimeExtensions-legacy.7Rp4bHis.js","/cdn/shopifycloud/checkout-web/assets/c1/extension-targets-rendering-extension-targets-legacy.LAP3_OTY.js","/cdn/shopifycloud/checkout-web/assets/c1/esm-browser-v4-legacy.On_frbc2.js","/cdn/shopifycloud/checkout-web/assets/c1/ExtensionsInner-legacy.N8vYMsmc.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0784/1395/5354/files/blackdrop_blanco_logo_x320.png?v=1702310255","https://cdn.shopify.com/s/files/1/0784/1395/5354/files/coleccio-blackdrop-ej_2000x.jpg?v=1702492420"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
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
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  