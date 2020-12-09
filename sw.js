/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","de4552970ce0eba68903971b69595ca1"],["/about/index.html","14ed36dc5018250e26fb44feee8cea06"],["/archives/2020/03/index.html","d60b882a522d22ad717fdefb33f35514"],["/archives/2020/03/page/2/index.html","494a967878ead2374176f2b77f2ab231"],["/archives/2020/03/page/3/index.html","ee374311499f98128afd3d2b4769d03d"],["/archives/2020/03/page/4/index.html","c412ebdb0aa99eabc638c1307436ab2f"],["/archives/2020/04/index.html","dadf259d72bb11a5ba1a3457049870e1"],["/archives/2020/04/page/2/index.html","fac00275e858a10738f2ee4b5dea7428"],["/archives/2020/05/index.html","b93994f2019f16f35ad41ebdf8672f09"],["/archives/2020/07/index.html","397bd750d3784a7bca729f49aae7541b"],["/archives/2020/08/index.html","3b1d180510aaf74df0a951c711247445"],["/archives/2020/index.html","6bf830e6295f14d3af5c797a9505cf08"],["/archives/2020/page/2/index.html","8eda391bad28bcf4992ab26b95ca3b03"],["/archives/2020/page/3/index.html","76ed7ae6e9a0026fcf932b0f9c5ca536"],["/archives/2020/page/4/index.html","04745f8a936e3e75d4eb3c7089b35649"],["/archives/2020/page/5/index.html","c92b4732f38c10701e19e16558f338f4"],["/archives/2020/page/6/index.html","8a9dc3d54e42e976ffb0d86cd8ca4af6"],["/archives/index.html","1032cb60c0533cd06a44d695c196a32f"],["/archives/page/2/index.html","fe69d12a4c0bd34f9786ae3f8c8a764c"],["/archives/page/3/index.html","d37484740ba934d5d344ea26f1c810df"],["/archives/page/4/index.html","55ab88981fcecd4fc43b239f8eed1856"],["/archives/page/5/index.html","7e54da716b3027bdb122e5378488a90a"],["/archives/page/6/index.html","4b17fd9c24df8cfcf567f368c48c37c4"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ai/index.html","201e1afd0c80fffc81aff3113bd4babd"],["/categories/ai/nvidia/index.html","12bacf4b2cb8ebdd39885279119b506b"],["/categories/ai/opencv/index.html","d3b483a3ca168f85623b0e86a8ef14e4"],["/categories/android/index.html","8ef00538f6d4d6164216e2c3de96ae42"],["/categories/control-algorithm/index.html","4fad6d84923646994b298be329cabdb3"],["/categories/git/index.html","607b1f7e2fd4bf7c520031e4dcfa4e80"],["/categories/hardware/index.html","4d7c1afdf467801d11583b5713229cd5"],["/categories/hello-world/index.html","304e650a464a3b744be92d36373dc713"],["/categories/hexo/index.html","70e2fcd0e24fbe34ac5b18d8c68b25e7"],["/categories/index.html","ad8529d1f023c3d34bd7dad4d5da0ae0"],["/categories/keil/index.html","637e06c013e8ea0b1f882cc1448f7689"],["/categories/mcu/index.html","d423c968078d37a0b15f220ffc567026"],["/categories/mcu/nuvoton/index.html","6d0657dee8ee228b90dfc731f16b9f79"],["/categories/mcu/stm32/index.html","224173b48dc204de37af5bafe011506f"],["/categories/mcu/stm8/index.html","9ab0b81dbcc8579ac3581e93426ba151"],["/categories/nvidia/index.html","a626323cc6650223726b138b5931da12"],["/categories/nvidia/jetson-nano/index.html","7f8a79ea9297c2367c80f395dc98902c"],["/categories/os/index.html","1e40849e0b140a8cd3f3e57e0092fa06"],["/categories/os/linux/debian/index.html","a78c04c6601b08e134aecaf36497f92e"],["/categories/os/linux/index.html","4627a4e26e5d06f9015393a8cae70938"],["/categories/os/linux/ubuntu/index.html","194d00572c85f5839ecae23b03adcdd5"],["/categories/os/windows/index.html","ded640942bbe2e253d43dea9802718f6"],["/categories/programming-language/c/index.html","8df6b97e2fe366632060bf108b1cab6f"],["/categories/programming-language/cpp/index.html","ec2173a3cda1d8eacedec94d183b6a12"],["/categories/programming-language/html/index.html","f9bfe1fc7378aef0dd6af94823365ce3"],["/categories/programming-language/index.html","4f37379ec21b264ddc6493a9b3a88f42"],["/categories/programming-language/java/index.html","325338615bca62c288beca2d24bc4856"],["/categories/programming-language/javascript/index.html","1892c18933b08db2483704ac7228f0eb"],["/categories/programming-language/markdown/index.html","c4fa7e93af894d7acd0a533e7e503403"],["/categories/programming-language/page/2/index.html","c36cecb06e0901d6634134c1dd979ee5"],["/categories/programming-language/python/index.html","3632c152ddb3a0a8ef2f4bfcf85c38ac"],["/categories/raspberry/index.html","5a167052a12172de21fa32b70f8812e0"],["/categories/ros/index.html","1882d9d080e173f60bf758338551eae9"],["/categories/ros/page/2/index.html","d944b0369698cb46ea15937c55d1a103"],["/categories/ros/windows/index.html","dcb8776bca6d95e1584a0432a6583993"],["/categories/summarization/index.html","4f752e746169e2f8abfcc654b4ce4f2d"],["/categories/summarization/mcu/index.html","7936c29d1a43f05ffa6d313fbd6a6174"],["/categories/vscode/index.html","24109993805effa828cdf371740c1438"],["/categories/硬件学习/index.html","801f4c8e205a84f9a5633d36afd5f616"],["/categories/硬件学习/pcba/index.html","e1575b51e7b524df49d9ca2ffc4ef093"],["/css/index.css","3e9f18ad48fd5be14c4d870a0a937a6e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/activity/index.html","1361cfe4fa8b3c705eddc21f022e5df5"],["/gallery/competition/index.html","6b2cb84b6b3c15c3e7c2cad9c43f60da"],["/gallery/index.html","e4b67a49fbc2870d10dd4239486ced6c"],["/gallery/life/index.html","ee03cc999ebe0cd7782d77db01035113"],["/gallery/panpan-cooking/index.html","c5eed3c94e56065b592c6f201b90ba45"],["/gallery/work/index.html","a5f06fee84b0fb0cb1e450a733afa6d8"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/private/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/private/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/private/loading-1.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/private/loading-2.gif","0c7b8ac9f53176138475783cacb355b9"],["/img/private/loading-3.gif","bbb0c5b6ac3df761fab26d074de01dc3"],["/img/private/loading-4.gif","72d5c28db01a9d2e63948a1e04980ec2"],["/img/private/page-load-404-bg-1.png","b6a3b13589a98cad0bbc78d839d2d3c8"],["/img/private/page-load-404-bg-2.gif","920bddab73061437464a53005fe39339"],["/img/private/post_img-load-404-1.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/private/pwa/128.png","dfb87bcb93bab780d7c77bee7bb5ffa3"],["/img/private/pwa/144.png","73f252321e5a0dde245e04d73489411d"],["/img/private/pwa/152.png","f403d3c2438c9970899f069661ecbaa9"],["/img/private/pwa/16.png","426755a2eb695c047a8b693ac4bffb85"],["/img/private/pwa/192.png","17b933c8161672b6c10213f5c2d95dff"],["/img/private/pwa/32.png","0eae1df381289033f4fa56d171663c3a"],["/img/private/pwa/384.png","441878f6c0fc8c2e90fb2c7fb64a3f3f"],["/img/private/pwa/512.png","28dd2f5d28961d0c9a18aa188be021af"],["/img/private/pwa/72.png","37113a53ec8997a8e5d2d12f50626646"],["/img/private/pwa/96.png","49400662ef112d868cd2a291724ddefa"],["/img/private/pwa/apple-touch-icon.png","b118d1db3a805b61d8ab55f845686546"],["/img/private/pwa/method-draw-image.svg","3f78d2aebc4b71f3d4e3dae843bfa328"],["/img/private/site_img-load-404-1.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","e41426f8204cd33cb135d5e7a956ddfe"],["/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["/js/utils.js","f2f712d5d52625b377855945420eea15"],["/link/index.html","93888b9ec390b72d4ee0d46f89c887d8"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/messageaboard/index.html","64a806bf9cdf93b6007f7feba35d8b3c"],["/music/index.html","a7c8827c9e5752206d1df863a677ad0a"],["/page/2/index.html","4ca3812f46aadd4378f193cbb7bc94ec"],["/page/3/index.html","6e03a7b7b7f19be0257f710b4c552301"],["/page/4/index.html","6a3390986f8c25995c8e85f8feaef50f"],["/page/5/index.html","eac9460607b19979203151b394e18da2"],["/page/6/index.html","e6cd88ffc86ef95bd63f4560f37a0492"],["/posts/13477882.html","5bb0187473cb7de10e74d10c5a8f24f8"],["/posts/15fa7048.html","1cd13a65f4f379385f728b3305974129"],["/posts/24a8ae0c.html","5f46dcb5e59920d1ed7bca8535015b35"],["/posts/25f0994d.html","22bbab1eabdb112ee26468d206a81a72"],["/posts/28077269.html","22e2308bac87581c89770e4557e4e092"],["/posts/2c5abc07.html","b87f124c0ad1d109c080c3a73227109f"],["/posts/3a13bccb.html","e4b7adaa54320b61da175055abdd0ec9"],["/posts/3b15753a.html","2d18a26909e9de241c0fa3b171607431"],["/posts/3b2a603b.html","8164b5d15e776499a8299a7119b8a6b2"],["/posts/3dd7ffa7.html","d2521c6a7004c92e80b4c3101aea359d"],["/posts/45ed956e.html","680f9377fcaea77de3abb516d06c662b"],["/posts/47567e3c.html","e8f856d29da2821a10bb286ce1da95fb"],["/posts/4805fbba.html","e7e16248c540ca592c69f85fd0f76526"],["/posts/4858c62f.html","55e0b16f166842cd650bec084d0e9e83"],["/posts/498f0b66.html","25b858aae7e3caafb3f335bb74539ccc"],["/posts/4a17b156.html","9488757e249d837799ac4852ead7273f"],["/posts/51dfec46.html","b30be63450208081329cd666c518db39"],["/posts/53197a40.html","127b161c61cebf577217aca9add81c9e"],["/posts/53d0684b.html","18bd999a2e32dbc63f3dc22a3e55b5fb"],["/posts/551d7312.html","cca8de70dc6ba77d03b7a99c4f37f6e9"],["/posts/5751eea2.html","df641b712f38b533bbd4d9b3c77ae446"],["/posts/59244a47.html","17edaf046a0f9c78fb77ad7e6cd89cc2"],["/posts/5b01bfa6.html","0d9898a11b8657d685b724017d1e11d3"],["/posts/5d018fb1.html","b70b908d2a95fb46262a06dd0071113e"],["/posts/5d29def9.html","583907be0c98a57bbf59adee3dc8e587"],["/posts/62e79da4.html","a79947ddf995b9ccb3f4845f4eae905a"],["/posts/72d3205.html","a0af53f8f9f39432ea61dd3103e63794"],["/posts/741cc87a.html","c2be82ad1e289c36866034cfadb9d15f"],["/posts/797aa75.html","70c0332849df578f2608289530067c09"],["/posts/7ba183b4.html","d16ad1774a3d7fe1ed7c5619008b1cbe"],["/posts/7be7930f.html","bcaf7b7d129c61f973030a9adb0aea0b"],["/posts/7d372036.html","ca26799e6512dbfb438a0d8a0312308f"],["/posts/83363fd2.html","206fc80fc2c542d000b8fa358490af06"],["/posts/894a0bcb.html","6903c776e44f6c52ec3389a86a1d32ee"],["/posts/8ae22c6d.html","26dc276cb592ac97c3ee73f1f8519f89"],["/posts/925153f2.html","32adbf8adfdf9ee92c2c307e495de590"],["/posts/948fb0b8.html","caa123b944a6c2976160773679b6af13"],["/posts/a378bd8e.html","612b8aef578f465e5f31e2d5e46d1568"],["/posts/a7b9ea4b.html","bf7443833087b098e02bf6cf946cbd81"],["/posts/a8c481ea.html","ea8b53c242dfbe2a4abd10a02ca7605a"],["/posts/ab7f85.html","9efaf102ff76b66bab6aaede57202355"],["/posts/ac1d9abb.html","f95f2a2112b253700b972493165d1783"],["/posts/b74e4547.html","50911f92e2f6f9c9253d38b91215c299"],["/posts/b900f0d0.html","7bd159ce98856eb85a35620f3f54ab31"],["/posts/cb41abda.html","12cd0dee1551d166fb2b7cfe49bd2ecb"],["/posts/cbb79327.html","51592e6cc6d4f48d6f79d077ac8169b0"],["/posts/d376f476.html","b8adeed2e27f424ec34cb123ad7b8b85"],["/posts/dcf744a9.html","115dbfa47b6a432e641d41cef09bb46c"],["/posts/dd9d548b.html","fa0e2f3a56024891b21824c40c06baa6"],["/posts/e22c3c3.html","2faef1a1947fd653aa1381339aed80d2"],["/posts/f19f4a3.html","82c42ae756082d3ab5292f0ef75f35c3"],["/posts/fb80edc7.html","f84b55a9d4e56fe6f51f4cd429cd4a52"],["/posts/fce157c2.html","dc3f968012708eff08e98f55a4c9135b"],["/posts/fe9c70ea.html","6dece4604f2a975a37fbcd33570b34fc"],["/sw-register.js","05e559f11afb16fc9de37b969a1894cc"],["/tags/ai/index.html","0a0477b5eb3670884340dff9533c4642"],["/tags/android/index.html","6be6c866050627607ba67ee21f9994c0"],["/tags/c/index.html","b7f4e4d5a0e1699fdd6d49b72bf34651"],["/tags/control-algorithm/index.html","8a833617e117964c46b5850e7ffb7c6f"],["/tags/cpp/index.html","cb941fdff394736cc0a63f23a71eee51"],["/tags/debian/index.html","bf890d696b1efc5c043b7a6032f48faf"],["/tags/git/index.html","2a365688b18d20a8d1ad6c01144ce685"],["/tags/hardware/index.html","3cf3128501b3d35d6da0741adf914e09"],["/tags/hello-world/index.html","5313910ba414ef24ce14ff5eccb7a0f8"],["/tags/hexo/index.html","f090c7b42eebc7271cb1053bfab2bbbd"],["/tags/html/index.html","823358daac649c6315b7d8cd725be2b3"],["/tags/index.html","b1d43344754c193245db8deadc727ef8"],["/tags/java/index.html","43b8b784a744521b4afda14d5eafab48"],["/tags/javascript/index.html","538a4c4a78d8c793d970ecbf1429daa0"],["/tags/jetson-nano/index.html","8f6df6257a7ca7f406c81c818ac748d2"],["/tags/keil/index.html","8f12f6654b7b94ee1bcb954f2c3689ae"],["/tags/linux/index.html","186e97400170cffe63d8fba7c56dc087"],["/tags/machine-learning/index.html","90bde387adb677b197cf0e210db39a28"],["/tags/markdown/index.html","9c092b53b31d5ee11e78af20a7e6c033"],["/tags/mcu/index.html","afc9101ac5085f5639d736d874bc3d42"],["/tags/nuvoton/index.html","123d697748dee4bb7fb461e77da4ba5a"],["/tags/nvidia/index.html","f11ed3e04a998a1667fc06e78bac63b0"],["/tags/opencv/index.html","d8394a0aeff25197216e116b7ec941ad"],["/tags/os/index.html","4bcbd617c0ea871fac50f6e5118c3991"],["/tags/pcba/index.html","4ea4663695958815961fcf5f359c5c8f"],["/tags/programming-language/index.html","50b8dce94580463bf9a0104f539cb35f"],["/tags/programming-language/page/2/index.html","f198c280556205e9e58f21a59cce560d"],["/tags/python/index.html","8d31be9f2b05bad187a7cf0dfe995f64"],["/tags/raspberry/index.html","0a66333c6232c5dd679b153a94130f0a"],["/tags/ros/index.html","b10cbf7b51c883c37a63b834622f4b9a"],["/tags/ros/page/2/index.html","010f4e7dcf999abcd099a0dd76df23dc"],["/tags/stm32/index.html","b53f5bd237b7817c75b9557252fb60bb"],["/tags/stm8/index.html","3b102c474e0576e86a9232d3729d269e"],["/tags/summarization/index.html","886294b0d9c1f7ea8d1dbf5861ca1a06"],["/tags/ubuntu/index.html","99d29989f2411d3f8a3c464af782e0fb"],["/tags/vscode/index.html","7b74e0437da6ab9d6af64631b120d4d6"],["/tags/windows/index.html","31a531ce17c56481ecdf259ba0276ffe"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
