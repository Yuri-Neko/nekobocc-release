<div align="center">
    <a href="https://ibb.co/ryjz6zL"><img src="https://i.ibb.co/s3fNwND/20230115-133928.jpg" alt="20230115-133928" border="0"></a>
    <br>
    <p>A simple and lightweight Nekopoi scraper.</p>
    <a href="https://badge.fury.io/js/nekobocc"><img src="https://badge.fury.io/js/nekobocc.svg"</a>
    <a href="https://packagephobia.com/result?p=nekobocc"><img src="https://packagephobia.com/badge?p=nekobocc"></a>
    <br>
    <a href="https://www.codefactor.io/repository/github/slavyandesu/nekobocc"><img src="https://www.codefactor.io/repository/github/slavyandesu/nekobocc/badge" alt="CodeFactor" /></a>
    <a href="https://app.fossa.com/projects/git%2Bgithub.com%2FSlavyanDesu%2FNekoBocc?ref=badge_shield" alt="FOSSA Status"><img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2FSlavyanDesu%2FNekoBocc.svg?type=shield"/></a>
</div>

---

## Installation
```sh
$ npm install nekobocc
```

## Loading and configuring the module
As of v1.3.x this module now support both ESM and CommonJS.

### ES Modules (ESM)
```js
import NekoBocc from 'nekobocc';
const nekobocc = new NekoBocc();
```

### CommonJS
```js
const NekoBocc = require('nekobocc').default;
const nekobocc = new NekoBocc();
```

## Example
```js
import NekoBocc from 'nekobocc';
const nekobocc = new NekoBocc();

// Get list of released hentai.
nekobocc.release()
  .then(res => console.log(res));
```

## Results
- **HentaiRelease**
```js
[
    {
      "img": "https://nekopoi.care/wp-content/uploads/2024/04/vlcsnap-2024-04-02-22h26m56s012-300x170.png",
      "title": "[NEW Release] Shunka Shuutou Episode 2 Subtitle Indonesia",
      "url": "https://nekopoi.care/new-release-shunka-shuutou-episode-2-subtitle-indonesia/",
      "sinopsis": "Menceritakan tentang Miharu Aragaki, cewek SMA yang cantik, teladan, ramah, montok, dan idaman para cowok. Dia setiap hari sering ditembak oleh cowok, tapi tidak ada satu pun yang ia terima. Dibalik itu, dia merasa khawatir karena banyak chat yang mengganggu dan ia juga direkam diam-diam. Seketika dia mendapatkan tawaran untuk dibantu solusi dari semua masalahnya itu oleh guru pembimbing, Sasahara Shiki. Namun, bimbingan yang ia dapat sangat mengejutkannya…",
      "genre": "Big Oppai, Blowjob, Oral, Schoolgirl, Virgin",
      "producers": "nur",
      "duration": "20 menit"
    },
    {
      "img": "https://nekopoi.care/wp-content/uploads/2024/04/vlcsnap-2024-04-02-18h24m40s356-300x170.png",
      "title": "[NEW Release] Kotowarenai Haha Episode 1 Subtitle Indonesia",
      "url": "https://nekopoi.care/new-release-kotowarenai-haha-episode-1-subtitle-indonesia/",
      "sinopsis": "Yuu dan Kousuke adalah teman sekelas, mereka selalu bermain ke rumah Kousuke sehabis pulang sekolah, saat Yuu ingin mengembalikan piring kotor kepada Ibu Kousuke, tiba-tiba Ibu Kousuke jatuh dari tangga dan secara reflek Yuu menahannya dan membuat tangannya cedera, dengan waktu penyembuhan itu kedua tangan Yuu tidak bisa digunakan oleh karena itu, segala kebutuhan dari mandi, makan, sampai pipis dibantu oleh Ibu Kousuke.",
      "genre": "Big Oppai, Blowjob, Creampie, Masturbation, MILF, Paizuri, Romance",
      "producers": "QueenBee",
      "duration": "20 menit"
    }
    ...
]
```
- **NekoPoiLatest**
```js
[
    {
      "url": "https://nekopoi.care/jav-uncensored-tz-085-meeting-an-ex-boyfriend-before-the-wedding/",
      "image": "https://nekopoi.care/wp-content/uploads/2024/03/JAv-Uncensored-TZ-085-Meeting-an-ex-boyfriend-before-the-wedding-NekoPoi-300x168.jpg",
      "title": "[Uncensored] TZ-085 Meeting an ex-boyfriend before the wedding ",
      "upload": "Friday, March 15th, 2024"
    },
    {
      "url": "https://nekopoi.care/3d-animation-seraphine-classic/",
      "image": "https://nekopoi.care/wp-content/uploads/2024/03/vlcsnap-2024-03-14-10h55m16s307-300x170.png",
      "title": "[3D Animation] Seraphine Classic",
      "upload": "Friday, March 15th, 2024"
    }
    ...
]
```
- **EpisodeMetadata**
```js
{
    img: 'https://nekopoi.care/wp-content/uploads/2023/01/vlcsnap-2023-01-01-03h58m25s923-300x169.png',
    title: '[NEW Release] Mako-chan Kaihatsu Nikki Episode 4 Subtitle Indonesia – NekoPoi',
    synopsis: 'Makoto tiba-tiba berpacaran dengan teman masa kecilnya yaitu Kaoru. Makoto ternyata adalah cewek yang mesum yang tiap malam menonton bokep sambil colmek yang ia dapat dari menyelinap di kamar kakaknya. Namun suatu malam di hari pertama Makoto berpacaran, ia tertangkap basah sedang colmek oleh kakaknya. Dengan rasa gatal yang menyengat dan kemampuan kakaknya akan pengetahuan seks, membuat Makoto tidak dapat menahan godaan untuk bermain dengan kakaknya…',
    genre: 'Ahegao, Anal, Big Oppai, Blowjob, Incest, Masturbation, Netorare, Schoolgirl',
    producer: 'T-Rex, Bunny Walker',
    duration: '16 menit',
    quality: [
        '[NEW Release] Mako-chan Kaihatsu Nikki Episode 4 Subtitle Indonesia [1080p]',
        '[NEW Release] Mako-chan Kaihatsu Nikki Episode 4 Subtitle Indonesia [720p]',
        '[NEW Release] Mako-chan Kaihatsu Nikki Episode 4 Subtitle Indonesia [480p]',
        '[NEW Release] Mako-chan Kaihatsu Nikki Episode 4 Subtitle Indonesia [360p]'
    ],
    download: [
        'https://ouo.io/wshoBm',
        'https://ouo.io/7Hol1z',
        'https://ouo.io/m75Mbm',
        'https://ouo.io/7MLHJz'
    ]
}
```

- **HentaiMetadata**
```js
{
    img: 'https://nekopoi.care/wp-content/uploads/2021/07/MakochanKaihatsuNikkiep69538176cde48c8e3ebb65761cb63504-213x300.jpg',
    title: 'Mako-chan Kaihatsu Nikki',
    synopsis: 'Makoto tiba-tiba berpacaran dengan teman masa kecilnya yaitu Kaoru. Makoto ternyata adalah cewek yang mesum yang tiap malam menonton bokep sambil colmek yang ia dapat dari menyelinap di kamar kakaknya. Namun suatu malam di hari pertama Makoto berpacaran, ia tertangkap basah sedang colmek oleh kakaknya. Dengan rasa gatal yang menyengat dan kemampuan kakaknya akan pengetahuan seks, membuat Makoto tidak dapat menahan godaan untuk bermain dengan kakaknya…',
    views: 21035,
    japanese: 'まこちゃん開発日記',
    category: 'Hentai',
    episode: 4,
    status: 'Completed',
    aired: 'Jul 02, 2021',
    producer: 'T-Rex, Bunny Walker',
    genre: 'Ahegao, Anal, Big Oppai, Blowjob, Incest, Masturbation, Netorare, Schoolgirl',
    duration: '16 min',
    score: 7,
    url: [
        'https://nekopoi.care/mako-chan-kaihatsu-nikki-episode-1-subtitle-indonesia/',
        'https://nekopoi.care/mako-chan-kaihatsu-nikki-episode-2-subtitle-indonesia/',
        'https://nekopoi.care/mako-chan-kaihatsu-nikki-episode-3-subtitle-indonesia/',
        'https://nekopoi.care/mako-chan-kaihatsu-nikki-episode-4-subtitle-indonesia/'
    ]
}
```

## API
**nekobocc.release([page])**
- `page` Page number to be shown, this parameter is optional. Default is `1`.

Get list of released hentai.
<br>
return a `HentaiRelease`

**nekobocc.latest([page])**
- `page` Page number to be shown, this parameter is optional. Default is `1`.

Get list of released NekoPoi All.
<br>
return a `NekoPoiLatest`

**nekobocc.search(query)**
- `query` is a `string` and you need to pass it, otherwise will resulting an error.

Get search result from given `query`.  
return a `HentaiRelease`

**nekobocc.get(url)**
- `url` Nekopoi episode or hentai page URL.

Get metadata of episode or hentai page from a valid URL.  
return a `HentaiMetadata` or `EpisodeMetadata`

**nekobocc.random()**  
Get random hentai or episode page.  
return a `HentaiMetadata` or `EpisodeMetadata`

## License
[MIT](LICENSE)  
<div align="center"><a href="https://app.fossa.com/projects/git%2Bgithub.com%2FSlavyanDesu%2FNekoBocc?ref=badge_large" alt="FOSSA Status"><img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2FSlavyanDesu%2FNekoBocc.svg?type=large"/></a></div>
