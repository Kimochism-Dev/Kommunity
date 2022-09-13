function shuffle (array) {
  let currentIndex = array.length
  let randomIndex
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ]
  }
  return array
}

const galleryItems = [
  {
    id: 0,
    name: 'Genshim person',
    image: 'https://i.pinimg.com/564x/e3/58/d5/e358d5caae587c348e4257dcaf7f46e3.jpg',
    tags: [
      'genshin',
      'genshin-impact'
    ],
    author: {
      name: 'GenshinPlayer',
      image: 'https://assets.reedpopcdn.com/how-hollow-knights-community-crafted-gibberish-into-a-real-language-1567781461548.jpg/BROK/thumbnail/1200x1200/quality/100/how-hollow-knights-community-crafted-gibberish-into-a-real-language-1567781461548.jpg',
      followers: 320
    }
  },
  {
    id: 1,
    name: 'Genshim person',
    image: 'https://i.pinimg.com/564x/57/69/b9/5769b9b4b7d2f6f5d0710c9eec9468d3.jpg',
    tags: [
      'genshin',
      'genshin-impact'
    ],
    author: {
      name: 'GenshinPlayer',
      image: 'https://assets.reedpopcdn.com/how-hollow-knights-community-crafted-gibberish-into-a-real-language-1567781461548.jpg/BROK/thumbnail/1200x1200/quality/100/how-hollow-knights-community-crafted-gibberish-into-a-real-language-1567781461548.jpg',
      followers: 320
    },
    replies: [
      {
        id: 0,
        name: 'Usuário',
        image: 'https://64.media.tumblr.com/d2251ec9326a12361e7e0864c6fabeaa/90b56d91692950f2-4e/s400x600/c815539d3f3d98fb7167bee890176fea8cea8015.pnj',
        replie: 'Comentário'
      },
      {
        id: 1,
        name: 'Utilizador',
        image: 'https://i.pinimg.com/736x/bb/f1/d4/bbf1d4fdc41aff7911099773b102765b.jpg',
        replie: 'Comentário'
      }
    ]
  },
  {
    id: 2,
    name: 'Baal Queeen Supremacy',
    image: 'https://i.pinimg.com/564x/e0/ed/84/e0ed84ba682e25e5939fed33fe800abc.jpg',
    tags: [
      'genshin',
      'genshin-impact',
      'hot',
      '💕',
      'electro',
      'wallpaper'
    ],
    author: {
      name: 'GenshinPlayer',
      image: 'https://assets.reedpopcdn.com/how-hollow-knights-community-crafted-gibberish-into-a-real-language-1567781461548.jpg/BROK/thumbnail/1200x1200/quality/100/how-hollow-knights-community-crafted-gibberish-into-a-real-language-1567781461548.jpg',
      followers: 320
    },
    replies: [
      {
        id: 0,
        name: 'Usuário',
        image: 'https://64.media.tumblr.com/d2251ec9326a12361e7e0864c6fabeaa/90b56d91692950f2-4e/s400x600/c815539d3f3d98fb7167bee890176fea8cea8015.pnj',
        replie: 'Comentário'
      },
      {
        id: 1,
        name: 'Utilizador',
        image: 'https://i.pinimg.com/736x/bb/f1/d4/bbf1d4fdc41aff7911099773b102765b.jpg',
        replie: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        id: 2,
        name: 'Usuário',
        image: 'https://64.media.tumblr.com/d2251ec9326a12361e7e0864c6fabeaa/90b56d91692950f2-4e/s400x600/c815539d3f3d98fb7167bee890176fea8cea8015.pnj',
        replie: 'Comentário'
      },
      {
        id: 3,
        name: 'Utilizador',
        image: 'https://i.pinimg.com/736x/bb/f1/d4/bbf1d4fdc41aff7911099773b102765b.jpg',
        replie: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    ]
  },
  {
    id: 3,
    name: 'Genshim person',
    image: 'https://i.pinimg.com/564x/f4/d2/f7/f4d2f716059d8041010549b7c4b2312c.jpg',
    tags: [
      'genshin',
      'genshin-impact'
    ],
    author: {
      name: 'GenshinPlayer',
      image: 'https://assets.reedpopcdn.com/how-hollow-knights-community-crafted-gibberish-into-a-real-language-1567781461548.jpg/BROK/thumbnail/1200x1200/quality/100/how-hollow-knights-community-crafted-gibberish-into-a-real-language-1567781461548.jpg',
      followers: 320
    },
    replies: [
      {
        id: 0,
        name: 'Usuário',
        image: 'https://64.media.tumblr.com/d2251ec9326a12361e7e0864c6fabeaa/90b56d91692950f2-4e/s400x600/c815539d3f3d98fb7167bee890176fea8cea8015.pnj',
        replie: 'Comentário'
      },
      {
        id: 1,
        name: 'Utilizador',
        image: 'https://i.pinimg.com/736x/bb/f1/d4/bbf1d4fdc41aff7911099773b102765b.jpg',
        replie: 'Comentário'
      }
    ]
  },
  {
    id: 4,
    name: 'Genshim person',
    image: 'https://i.pinimg.com/564x/bd/4b/23/bd4b23b2bf4d29d95ea75e61316b1c66.jpg',
    tags: [
      'genshin',
      'genshin-impact'
    ],
    author: {
      name: 'GenshinPlayer',
      image: 'https://assets.reedpopcdn.com/how-hollow-knights-community-crafted-gibberish-into-a-real-language-1567781461548.jpg/BROK/thumbnail/1200x1200/quality/100/how-hollow-knights-community-crafted-gibberish-into-a-real-language-1567781461548.jpg',
      followers: 320
    },
    replies: [
      {
        id: 0,
        name: 'Usuário',
        image: 'https://64.media.tumblr.com/d2251ec9326a12361e7e0864c6fabeaa/90b56d91692950f2-4e/s400x600/c815539d3f3d98fb7167bee890176fea8cea8015.pnj',
        replie: 'Comentário'
      },
      {
        id: 1,
        name: 'Utilizador',
        image: 'https://i.pinimg.com/736x/bb/f1/d4/bbf1d4fdc41aff7911099773b102765b.jpg',
        replie: 'Comentário'
      }
    ]
  },
  {
    id: 5,
    name: 'Wallpaper',
    image: 'https://i.pinimg.com/750x/1b/a1/71/1ba171ccca27b4b7bde1cc9fcab2629f.jpg',
    tags: [
      'cellphone',
      'wallpaper'
    ],
    author: {
      name: 'WallpaperGuy',
      image: 'https://c.tenor.com/z1jdmUW5-ksAAAAd/genshin-impact-paimon.gif',
      followers: 40000
    }
  },
  {
    id: 6,
    name: 'Wallpaper',
    image: 'https://i.pinimg.com/750x/6d/e2/6d/6de26d6daa1c3c8754b1ad7d84b42fe3.jpg',
    tags: [
      'cellphone',
      'wallpaper'
    ],
    author: {
      name: 'WallpaperGuy',
      image: 'https://c.tenor.com/z1jdmUW5-ksAAAAd/genshin-impact-paimon.gif',
      followers: 40000
    }
  },
  {
    id: 7,
    name: 'Wallpaper',
    image: 'https://i.pinimg.com/564x/1c/80/28/1c80283061f086cc6a97021072cf88ee.jpg',
    tags: [
      'cellphone',
      'wallpaper'
    ],
    author: {
      name: 'WallpaperGuy',
      image: 'https://c.tenor.com/z1jdmUW5-ksAAAAd/genshin-impact-paimon.gif',
      followers: 40000
    }
  },
  {
    id: 8,
    name: 'Wallpaper',
    image: 'https://i.pinimg.com/564x/c5/92/b5/c592b5ff7fe9ce49f4eddbfacd067740.jpg',
    tags: [
      'cellphone',
      'wallpaper'
    ],
    author: {
      name: 'WallpaperGuy',
      image: 'https://c.tenor.com/z1jdmUW5-ksAAAAd/genshin-impact-paimon.gif',
      followers: 40000
    }
  },
  {
    id: 9,
    name: 'Wallpaper',
    image: 'https://i.pinimg.com/564x/f1/ac/2c/f1ac2caadf137bf60563db8b442d02ba.jpg',
    tags: [
      'cellphone',
      'wallpaper'
    ],
    author: {
      name: 'WallpaperGuy',
      image: 'https://c.tenor.com/z1jdmUW5-ksAAAAd/genshin-impact-paimon.gif',
      followers: 40000
    }
  },
  {
    id: 10,
    name: 'Wallpaper',
    image: 'https://i.pinimg.com/564x/55/21/38/552138a2803f217887b39ada211426ae.jpg',
    tags: [
      'cellphone',
      'wallpaper'
    ],
    author: {
      name: 'WallpaperGuy',
      image: 'https://c.tenor.com/z1jdmUW5-ksAAAAd/genshin-impact-paimon.gif',
      followers: 40000
    }
  },
  {
    id: 11,
    name: 'Wallpaper',
    image: 'https://i.pinimg.com/564x/c2/74/de/c274dea2841ff8dccf3fc0c39c8c0bf4.jpg',
    tags: [
      'cellphone',
      'wallpaper'
    ],
    author: {
      name: 'WallpaperGuy',
      image: 'https://c.tenor.com/z1jdmUW5-ksAAAAd/genshin-impact-paimon.gif',
      followers: 40000
    }
  },
  {
    id: 12,
    name: 'Wallpaper',
    image: 'https://i.pinimg.com/564x/83/c4/3c/83c43c3a7415e02ec29a07d807d6cf52.jpg',
    tags: [
      'cellphone',
      'wallpaper'
    ],
    author: {
      name: 'WallpaperGuy',
      image: 'https://c.tenor.com/z1jdmUW5-ksAAAAd/genshin-impact-paimon.gif',
      followers: 40000
    }
  },
  {
    id: 13,
    name: 'Wallpaper',
    image: 'https://i.pinimg.com/564x/d2/25/aa/d225aaf6d62c053b2787d01aedf02c57.jpg',
    tags: [
      'cellphone',
      'wallpaper'
    ],
    author: {
      name: 'WallpaperGuy',
      image: 'https://c.tenor.com/z1jdmUW5-ksAAAAd/genshin-impact-paimon.gif',
      followers: 40000
    }
  },
  {
    id: 14,
    name: 'Wallpaper',
    image: 'https://i.pinimg.com/564x/ac/36/0d/ac360deb2b4ad3b02db86f0c97f8b2aa.jpg',
    tags: [
      'cellphone',
      'wallpaper'
    ],
    author: {
      name: 'WallpaperGuy',
      image: 'https://c.tenor.com/z1jdmUW5-ksAAAAd/genshin-impact-paimon.gif',
      followers: 40000
    }
  },
  {
    id: 15,
    name: 'Wallpaper',
    image: 'https://i.pinimg.com/564x/6f/6b/2a/6f6b2a1543ecaf7b102fc3f5673daebf.jpg',
    tags: [
      'cellphone',
      'wallpaper'
    ],
    author: {
      name: 'WallpaperGuy',
      image: 'https://c.tenor.com/z1jdmUW5-ksAAAAd/genshin-impact-paimon.gif',
      followers: 40000
    }
  },
  {
    id: 16,
    name: 'Wallpaper',
    image: 'https://i.pinimg.com/564x/a2/12/6d/a2126d9a6398d9dd82e6f90444e269c2.jpg',
    tags: [
      'cellphone',
      'wallpaper'
    ],
    author: {
      name: 'WallpaperGuy',
      image: 'https://c.tenor.com/z1jdmUW5-ksAAAAd/genshin-impact-paimon.gif',
      followers: 40000
    }
  },
  {
    id: 17,
    name: 'Wallpaper',
    image: 'https://i.pinimg.com/564x/cb/4c/ab/cb4cab08daa8abd8b58f58e201e47cb9.jpg',
    tags: [
      'cellphone',
      'wallpaper'
    ],
    author: {
      name: 'WallpaperGuy',
      image: 'https://c.tenor.com/z1jdmUW5-ksAAAAd/genshin-impact-paimon.gif',
      followers: 40000
    }
  },
  {
    id: 18,
    name: 'Wallpaper',
    image: 'https://i.pinimg.com/564x/3b/fc/f4/3bfcf429674c5ffde22554d1c1ff8a83.jpg',
    tags: [
      'cellphone',
      'wallpaper'
    ],
    author: {
      name: 'WallpaperGuy',
      image: 'https://c.tenor.com/z1jdmUW5-ksAAAAd/genshin-impact-paimon.gif',
      followers: 40000
    }
  },
  {
    id: 19,
    name: 'Wallpaper',
    image: 'https://i.pinimg.com/564x/4e/d0/f1/4ed0f1facb53531231de2a3a967982bf.jpg',
    tags: [
      'cellphone',
      'wallpaper'
    ],
    author: {
      name: 'WallpaperGuy',
      image: 'https://c.tenor.com/z1jdmUW5-ksAAAAd/genshin-impact-paimon.gif',
      followers: 40000
    }
  },
  {
    id: 20,
    name: 'Wallpaper',
    image: 'https://i.pinimg.com/564x/95/ca/4a/95ca4a34f5d3e414b7fe539c4eb54881.jpg',
    tags: [
      'cellphone',
      'wallpaper'
    ],
    author: {
      name: 'WallpaperGuy',
      image: 'https://c.tenor.com/z1jdmUW5-ksAAAAd/genshin-impact-paimon.gif',
      followers: 40000
    }
  },
  {
    id: 21,
    name: 'Wallpaper',
    image: 'https://i.pinimg.com/564x/e7/23/38/e72338579d59d681b007752c27b4be89.jpg',
    tags: [
      'cellphone',
      'wallpaper'
    ],
    author: {
      name: 'WallpaperGuy',
      image: 'https://c.tenor.com/z1jdmUW5-ksAAAAd/genshin-impact-paimon.gif',
      followers: 40000
    }
  },
  {
    id: 22,
    name: 'Wallpaper',
    image: 'https://i.pinimg.com/564x/1f/81/ba/1f81badaec0446569d828f4b3abfa99b.jpg',
    tags: [
      'cellphone',
      'wallpaper'
    ],
    author: {
      name: 'WallpaperGuy',
      image: 'https://c.tenor.com/z1jdmUW5-ksAAAAd/genshin-impact-paimon.gif',
      followers: 40000
    }
  },
  {
    id: 23,
    name: 'Wallpaper',
    image: 'https://cdn.discordapp.com/attachments/512809986699690004/1002222367805800539/wallpaperhentaihd.jpg',
    tags: [
      'cellphone',
      'wallpaper'
    ],
    author: {
      name: 'WallpaperGuy',
      image: 'https://c.tenor.com/z1jdmUW5-ksAAAAd/genshin-impact-paimon.gif',
      followers: 40000
    }
  },
  {
    id: 24,
    name: 'Wallpaper',
    image: 'https://i.pinimg.com/564x/69/01/16/690116af7e6b51b89e96d0f14884ee3c.jpg',
    tags: [
      'cellphone',
      'wallpaper'
    ],
    author: {
      name: 'WallpaperGuy',
      image: 'https://c.tenor.com/z1jdmUW5-ksAAAAd/genshin-impact-paimon.gif',
      followers: 40000
    }
  },
  {
    id: 25,
    name: 'Wallpaper',
    image: 'https://i.pinimg.com/564x/c2/69/02/c26902b671f761cda7129e4fad085e72.jpg',
    tags: [
      'cellphone',
      'wallpaper'
    ],
    author: {
      name: 'WallpaperGuy',
      image: 'https://c.tenor.com/z1jdmUW5-ksAAAAd/genshin-impact-paimon.gif',
      followers: 40000
    }
  },
  {
    id: 26,
    name: 'Wallpaper',
    image: 'https://i.pinimg.com/564x/8d/44/11/8d4411eca7a6fabf80741a50ba8b4f0b.jpg',
    tags: [
      'cellphone',
      'wallpaper'
    ],
    author: {
      name: 'WallpaperGuy',
      image: 'https://c.tenor.com/z1jdmUW5-ksAAAAd/genshin-impact-paimon.gif',
      followers: 40000
    }
  },
  {
    id: 27,
    name: 'Wallpaper',
    image: 'https://i.pinimg.com/564x/ff/79/42/ff7942600e4623c6b08619dd769e7cf3.jpg',
    tags: [
      'cellphone',
      'wallpaper'
    ],
    author: {
      name: 'WallpaperDevilGuy',
      image: 'https://i.pinimg.com/564x/ff/79/42/ff7942600e4623c6b08619dd769e7cf3.jpg',
      followers: 40000
    }
  },
  {
    id: 28,
    name: 'Wallpaper',
    image: 'https://i.pinimg.com/564x/5c/6e/1f/5c6e1f615a12c0539a828a008c9a5c6a.jpg',
    tags: [
      'cellphone',
      'wallpaper'
    ],
    author: {
      name: 'WallpaperDevilGuy',
      image: 'https://i.pinimg.com/564x/ff/79/42/ff7942600e4623c6b08619dd769e7cf3.jpg',
      followers: 40000
    }
  },
  {
    id: 29,
    name: 'Wallpaper',
    image: 'https://i.pinimg.com/564x/7a/0f/0e/7a0f0eedbc49a9861bbe620aecdd87f5.jpg',
    tags: [
      'cellphone',
      'wallpaper'
    ],
    author: {
      name: 'WallpaperDevilGuy',
      image: 'https://i.pinimg.com/564x/ff/79/42/ff7942600e4623c6b08619dd769e7cf3.jpg',
      followers: 40000
    }
  },
  {
    id: 30,
    name: 'Wallpaper',
    image: 'https://i.pinimg.com/564x/1e/6c/45/1e6c45de02eb79908fea9d3810c13ae9.jpg',
    tags: [
      'cellphone',
      'wallpaper'
    ],
    author: {
      name: 'WallpaperDevilGuy',
      image: 'https://i.pinimg.com/564x/ff/79/42/ff7942600e4623c6b08619dd769e7cf3.jpg',
      followers: 40000
    }
  },
  {
    id: 30,
    name: 'Wallpaper',
    image: 'https://gifdb.com/images/high/genshin-impact-anemo-kazuha-t0r769pa4w8r3k9t.webp',
    tags: [
      'cellphone',
      'wallpaper'
    ],
    author: {
      name: 'WallpaperDevilGuy',
      image: 'https://i.pinimg.com/564x/ff/79/42/ff7942600e4623c6b08619dd769e7cf3.jpg',
      followers: 40000
    }
  },
  {
    id: 31,
    name: 'Wallpaper',
    image: 'https://gifdb.com/images/high/genshin-impact-mona-third-skill-zeo0yoh5e4dpsqzn.webp',
    tags: [
      'cellphone',
      'wallpaper'
    ],
    author: {
      name: 'WallpaperDevilGuy',
      image: 'https://i.pinimg.com/564x/ff/79/42/ff7942600e4623c6b08619dd769e7cf3.jpg',
      followers: 40000
    }
  },
  {
    id: 32,
    name: 'Wallpaper',
    image: 'https://gifdb.com/images/high/genshin-impact-ningguang-kavolvdas2uuq7bc.webp',
    tags: [
      'cellphone',
      'wallpaper'
    ],
    author: {
      name: 'WallpaperDevilGuy',
      image: 'https://i.pinimg.com/564x/ff/79/42/ff7942600e4623c6b08619dd769e7cf3.jpg',
      followers: 40000
    }
  },
  {
    id: 33,
    name: 'Wallpaper',
    image: 'https://media.giphy.com/media/T3JtiuN4vsNgxQKjre/giphy.gif',
    tags: [
      'cellphone',
      'wallpaper'
    ],
    author: {
      name: 'WallpaperDevilGuy',
      image: 'https://i.pinimg.com/564x/ff/79/42/ff7942600e4623c6b08619dd769e7cf3.jpg',
      followers: 40000
    }
  },
  {
    id: 33,
    name: 'Wallpaper',
    image: 'https://i.pinimg.com/564x/d5/16/4e/d5164e892a67469b7dc1c501947bca59.jpg',
    tags: [
      'cellphone',
      'wallpaper'
    ],
    author: {
      name: 'WallpaperDevilGuy',
      image: 'https://i.pinimg.com/564x/ff/79/42/ff7942600e4623c6b08619dd769e7cf3.jpg',
      followers: 40000
    }
  }
]

export default shuffle(galleryItems)
