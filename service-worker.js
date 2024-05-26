/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "d68d2a0522beea4568e575118f253172"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.f28deda6.css",
    "revision": "052ad79ac9ce07b960224f3e979c1b0b"
  },
  {
    "url": "assets/img/add_datafile_id4.34881217.png",
    "revision": "34881217c306dea43e2596c25cceeeaf"
  },
  {
    "url": "assets/img/delete_datafile_id2_result.a7f4f4ea.png",
    "revision": "a7f4f4ea7e56f62f5f4020fd053b2ad0"
  },
  {
    "url": "assets/img/delete_datafile_id2.d4ccc4b6.png",
    "revision": "d4ccc4b6c40daa7d0b86f823afa8c733"
  },
  {
    "url": "assets/img/get_all_datafiles_result.81e473d6.png",
    "revision": "81e473d6e5566aebc7e9f10262f0d000"
  },
  {
    "url": "assets/img/get_all_datafiles.91ad2dc0.png",
    "revision": "91ad2dc05d0008ce17dcbeb417a84772"
  },
  {
    "url": "assets/img/get_all_updated_datafiles_result.67b47152.png",
    "revision": "67b471521cc0a5a9ca65dfb6fc68635e"
  },
  {
    "url": "assets/img/get_all_updated_datafiles.d3f6f682.png",
    "revision": "d3f6f682d9a09912d26a70e3a2d249ee"
  },
  {
    "url": "assets/img/get_datafile_by_id_result.953d366b.png",
    "revision": "953d366b2722e17c1bf15f8dad3d89ee"
  },
  {
    "url": "assets/img/get_datafile_by_id.69de797a.png",
    "revision": "69de797a1fabd12ab79e741cc8f3ea98"
  },
  {
    "url": "assets/img/get_datafile_id4_result.aeaaabed.png",
    "revision": "aeaaabed929437651d49361852474898"
  },
  {
    "url": "assets/img/get_datafile_id4.bdc5b041.png",
    "revision": "bdc5b0417ca4faed5cc784c821c578eb"
  },
  {
    "url": "assets/img/get_updated_datafile_id4_result.2c2f9ac6.png",
    "revision": "2c2f9ac617868ec8b1390a8cdaef5c9a"
  },
  {
    "url": "assets/img/get_updated_datafile_id4.10df1bed.png",
    "revision": "10df1bedd3aa517374f3c13561929d24"
  },
  {
    "url": "assets/img/relational_schema.094ee927.png",
    "revision": "094ee927e01563b4c7f54c42bb73eeb8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/server_start.907beb14.png",
    "revision": "907beb143d9be6e16fdea56cd9d859bc"
  },
  {
    "url": "assets/img/update_datafile_id4_result.9482414c.png",
    "revision": "9482414cad9be634016f02e718e6458c"
  },
  {
    "url": "assets/img/update_datafile_id4.11c70feb.png",
    "revision": "11c70feb1408a57995b67604c29587f3"
  },
  {
    "url": "assets/js/10.e1273895.js",
    "revision": "9d9d293cdd1d8bbbc4485a4173518689"
  },
  {
    "url": "assets/js/11.ddf49f31.js",
    "revision": "9eb56cb4328fdf7b3b5720e1fe3f60c6"
  },
  {
    "url": "assets/js/12.70c24ba1.js",
    "revision": "b1c6f64a43140d2e63312895ebe0a483"
  },
  {
    "url": "assets/js/13.f5d34b9f.js",
    "revision": "55f7e6288327ab75c50eb7e478a54727"
  },
  {
    "url": "assets/js/14.1d9be59c.js",
    "revision": "a080fb65b9a770be6799146570144f83"
  },
  {
    "url": "assets/js/15.cfd0b81e.js",
    "revision": "79690cb2d6b3c27f55f75cfbe8486ec4"
  },
  {
    "url": "assets/js/16.28c28d42.js",
    "revision": "736b18fb7cfad7aae039e7cf814221e7"
  },
  {
    "url": "assets/js/17.a3757a31.js",
    "revision": "276bd26fd975856f90f3ad1f7ddc8332"
  },
  {
    "url": "assets/js/18.4b9da57f.js",
    "revision": "ee54c41ba9a8a21d3d94bcd7a4e9aabc"
  },
  {
    "url": "assets/js/19.f89dbf30.js",
    "revision": "f5f07bff7b6cdc536945869afc63cb07"
  },
  {
    "url": "assets/js/2.fa3d04cf.js",
    "revision": "4a788ed2ec3bb40852a4cdeed12e52f6"
  },
  {
    "url": "assets/js/20.003b2af6.js",
    "revision": "5a60a841db8df61873286ff7f1907170"
  },
  {
    "url": "assets/js/21.d73d4185.js",
    "revision": "c18d48b5a88ec0b8967723651efaaec5"
  },
  {
    "url": "assets/js/22.822e1b76.js",
    "revision": "72d5cb014c83c76442eb3305f59ff34c"
  },
  {
    "url": "assets/js/23.a3dac84d.js",
    "revision": "6875e581af22469c4e59e19a7cadb7d7"
  },
  {
    "url": "assets/js/24.8d180ab5.js",
    "revision": "9dd8e405093f6593757bacd6cd6ac1e8"
  },
  {
    "url": "assets/js/26.b038f0f8.js",
    "revision": "3cd3fa2cd5856af626304a2e0bc91950"
  },
  {
    "url": "assets/js/3.250b2c46.js",
    "revision": "e22eebb13c3de5d40f6489df37623937"
  },
  {
    "url": "assets/js/4.532ef429.js",
    "revision": "8dbb81d335ab579ccc62b2f9d4e48276"
  },
  {
    "url": "assets/js/5.ea4f8e93.js",
    "revision": "9aaa091c1832b1410ee6ca9d53e28101"
  },
  {
    "url": "assets/js/6.8ace545c.js",
    "revision": "efdbe9e2d6fe7736e3e4afbaa21f6617"
  },
  {
    "url": "assets/js/7.37ddda07.js",
    "revision": "cef4ee5190674996a63a6af94913cde0"
  },
  {
    "url": "assets/js/8.3f0c3fd4.js",
    "revision": "8dd03f848535124ab797932c03bafea2"
  },
  {
    "url": "assets/js/9.678cdf23.js",
    "revision": "d6fb10b59c593ff1ce1cf846714da527"
  },
  {
    "url": "assets/js/app.ae1fc9ff.js",
    "revision": "e2009728f7ee5d62881b8c3106deb3dc"
  },
  {
    "url": "conclusion/index.html",
    "revision": "6d8d5e89b092895a937bbd5cb350d695"
  },
  {
    "url": "design/index.html",
    "revision": "6c296167b292e2ef22ca0114431cb036"
  },
  {
    "url": "index.html",
    "revision": "5c24b65e9c948deb60a46a737c230b18"
  },
  {
    "url": "intro/index.html",
    "revision": "ba410f53bcdcb99203fbc8d606fb5225"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "17094886591156d097ba6576ef531e40"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "1083d4083850c2c3450953ee3510aae4"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "08ece0b136a9b596ff1bb3831a613951"
  },
  {
    "url": "software/index.html",
    "revision": "999a41eb95e1d26c51d1aca3a4a2acf1"
  },
  {
    "url": "test/index.html",
    "revision": "12a0bacd728036d2fb43b0d3749829a1"
  },
  {
    "url": "use cases/index.html",
    "revision": "11b66f3881567869b627e23dd81f6c4c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
