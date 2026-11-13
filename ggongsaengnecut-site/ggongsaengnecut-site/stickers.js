window.STICKER_GROUPS = [
  {label:'기본', files:["stickers/s01.png", "stickers/s02.png", "stickers/s03.png", "stickers/s04.png", "stickers/s05.png", "stickers/s06.png", "stickers/s07.png", "stickers/s08.png", "stickers/s09.png", "stickers/s10.png", "stickers/s11.png", "stickers/s12.png", "stickers/s13.png", "stickers/s14.png", "stickers/s15.png", "stickers/s16.png"]},
  {label:'눈', files:["stickers/s17.png", "stickers/s18.png", "stickers/s19.png", "stickers/s20.png"]},
  {label:'안경', files:["stickers/s21.png", "stickers/s22.png", "stickers/s23.png", "stickers/s24.png"]},
  {label:'기타', files:["stickers/s25.png", "stickers/s26.png", "stickers/s27.png"]}
];
window.STICKERS = [].concat.apply([], window.STICKER_GROUPS.map(function(g){ return g.files; }));
