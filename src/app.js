const {Button, TextView, ui, StatusBar, TabFolder, Tab, ImageView, Page} = require('tabris');

//////////////////////////////////////////
//    DRAWER
let drawer = ui.drawer;
drawer.enabled = true;
drawer.set({
  background:'white'
})
let imageView = ui.ImageView;
new ImageView({
  width: 350, height:350,
  scaleMode:'fill',
  image: '_uId1tyD_400x400.jpg'
}).appendTo(drawer);

new Button({
  text: 'Profile',
  textColor: 'white',
  background: '#0ed180',
  top:375,
  left: 110
}).on('tap', () => drawer.close())
  .appendTo(drawer);
  new Button({
    text: 'Settings',
    textColor: 'white',
    background: '#0ed180',
    top:450,
    left: 110
  }).on('tap', () => drawer.close())
    .appendTo(drawer);
    new Button({
      text: 'Log Out',
      textColor: 'white',
      background: '#30343a',
      top:525,
      left: 110
    }).on('tap', () => drawer.close())
      .appendTo(drawer);

//////////////////////////////////////////////////////
//             TABS
let tabFolder = new TabFolder({
  left: 0, top: 0, right: 0, bottom: 0,
  paging: true,
  tabMode: "fixed",
  textColor: 'navy'
}).appendTo(ui.contentView);
new Tab({
  title: 'Home',
  image: 'cart.png'
}).appendTo(tabFolder);
new Tab({
  title: 'Search',
  image: 'cart.png'
}).appendTo(tabFolder);
new Tab({
  title: 'Messages',
  image: 'cart.png'
}).appendTo(tabFolder);
new Tab({
  title: 'My Node',
  image: 'cart.png'
}).appendTo(tabFolder);
