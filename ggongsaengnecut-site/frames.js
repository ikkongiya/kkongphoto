// ===== 프레임 목록 =====
// 새 프레임 추가 방법:
//  1) PNG 파일을 frames 폴더에 넣기 (사진이 들어갈 자리는 #FFFFFF 또는 투명)
//  2) 아래 목록에 한 줄 추가하기 (id는 영문/숫자, label은 화면에 보이는 이름)
//     컷이 2개짜리면 cuts:2 도 같이 적기 (좌우로 반반이면 그대로, 위아래로 반반이면 stack:true 도 같이)
//  3) 폴더 전체를 Netlify에 다시 끌어다 놓기
window.FRAMES = [
  { id:'beer',   label:'맥주란잔',          file:'frames/beer.png' },
  { id:'twocut', label:'따라해보라개ㅎㅎ',  file:'frames/twocut.png', cuts:2 },
  { id:'devil',  label:'내가악마일까니가악마일까', file:'frames/devil-v2.png', cuts:2, stack:true },
  { id:'koala',  label:'아호주최재희야~',      file:'frames/koala-v2.png' },
  { id:'mandu',  label:'만듀만듀만듀', file:'frames/mandu-v2.png' },
  { id:'shrimp', label:'안녕하새우',   file:'frames/shrimp-v2.png' },
  { id:'noodle', label:'면킬러', file:'frames/noodle-ramen.png',
    variants:[
      { label:'라면', file:'frames/noodle-ramen.png' },
      { label:'우동', file:'frames/noodle-udon.png' },
      { label:'소바', file:'frames/noodle-soba.png' },
    ] },
  { id:'danke', label:'당케해~', file:'frames/danke.png',
    variants:[
      { label:'포크나이프X', file:'frames/danke.png' },
      { label:'포크나이프O', file:'frames/danke-fork.png' },
    ] },
  { id:'mochi', label:'기모-찌', file:'frames/mochi-over.png',
    variants:[
      { label:'오바모찌', file:'frames/mochi-over.png' },
      { label:'기본모찌', file:'frames/mochi-basic.png' },
      { label:'강추모찌', file:'frames/mochi-rec.png' },
      { label:'남자모찌', file:'frames/mochi-boy.png' },
      { label:'여자모찌', file:'frames/mochi-girl.png' },
    ] },
  { id:'vs',    label:'불안형vs안정형', file:'frames/vs.png', cuts:2 },
  { id:'card', label:'카-도', file:'frames/card-omedeto-v2.png',
    variants:[
      { label:'오메데토',   file:'frames/card-omedeto-v2.png' },
      { label:'간바레',     file:'frames/card-ganbare.png' },
      { label:'다이스키',   file:'frames/card-daisuki.png' },
      { label:'다이죠부',   file:'frames/card-daijobu.png' },
      { label:'고멘나사이', file:'frames/card-gomen.png' },
      { label:'아리가토',    file:'frames/card-arigato.png' },
      { label:'알라븅',     file:'frames/card-arabyung.png' },
    ] },
];
