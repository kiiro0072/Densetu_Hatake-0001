var CameraX = 0
var audio = new Audio("./Saund/tuti.mp3");
var Coin_audio = new Audio("./Saund/Coin.mp3");
var CameraY = 0
var Item_number
var gold = 150;
var Envent = false;
var Shop = false;
var Itemkind = '';
var IndexX = 0;
var IndexY = 0;
var SlotCamera = 0;
var Itemnumber
var n = "n"
var price = [50,80,100,250]
var Shop_nuber = 0;
var Item_name = [n,n,n,n,n,n,n,n,n,n,n,n,n,n,n]
var Item_Int = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var BlockList = [
['g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',],
['g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',],
['g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',],
['g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',],
['g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',],
['g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',],
['g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',],
['g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',],
['g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',],
['g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',],
['g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',],
['g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',],
['g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',],
['g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',],
['g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',],
['g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',],
['g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',],
['g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',],
['g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',],
['n','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',],]

var BlockTIME = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
]
var canvas = document.getElementById('Canvas');
var context = canvas.getContext('2d');
function removeItem(type,List) {
  let i = List;
  if(Item_Int[i] != 0){
  Item_Int[i] = Item_Int[i]-1
  }else{
    Item_Int[i] = Item_Int[i]+1
    Item_name[i] = 'n'
    Item_Int[i] = 0
  }
  if(Item_Int[i] == 0){
    Item_Int[i] = Item_Int[i]+1
    Item_name[i] = 'n'
    Item_Int[i] = 0
    }
}
function DrawBlock(){
    for(var x = 0; x < BlockList[0].length; x++){
        for(var y = 0; y < BlockList.length; y++){
            DrawTile(BlockList[x][y],x*128-CameraX,y*128-CameraY,128,128)
            if(IndexX == x && IndexY == y){
                context.fillStyle = "RGB(255,0,0,0.2)"
                //context.fillRect(x*128,y*128,128,128)
            }
            if(BlockTIME[x][y] == 0){
              switch (BlockList[x][y]) {
                case 'k':
                  BlockList[x][y] = 'kA'
                  BlockTIME[x][y] = 100
                  break;
                  case 'kA':
                    BlockTIME[x][y] = 100
                    BlockList[x][y] = 'kB'
                    break;
                    case 'kB':
                      BlockTIME[x][y] = 100
                      BlockList[x][y] = 'kC'
                      break;
                      case 'J':
                        BlockList[x][y] = 'JA'
                        BlockTIME[x][y] = 100
                        break;
                        case 'JA':
                          BlockTIME[x][y] = 100
                          BlockList[x][y] = 'JB'
                          break;
                          case 'T':
                            BlockList[x][y] = 'TA'
                            BlockTIME[x][y] = 100
                            break;
                            case 'TA':
                              BlockTIME[x][y] = 100
                              BlockList[x][y] = 'TB'
                              break;
                default:
                  break;
              }
            }else{
              BlockTIME[x][y] = BlockTIME[x][y]-1
              console.log(BlockTIME[x][y])
            }
        }
    }
}

function DrawTile(type,x,y,width,height){
    var image = new Image()
    switch (type) {
        case 'g':
            image.src = "./image/Blocks/Image.png"
            break;
        case 'k':
          image.src = "./image/Blocks/にんじんA.png"
          break;
        case 'n':
              image.src = "./image/Blocks/Noti.png"
              break;
        case 'kA':
              image.src = "./image/Blocks/にんじんB.png"
              break;
              case 'kB':
                image.src = "./image/Blocks/にんじんC.png"
                break;
                case 'kC':
                  image.src = "./image/Blocks/にんじんD.png"
                  break;
                  case 'J':
                    image.src = "./image/Blocks/にんじんA.png"
                    break;
                    case 'JA':
                      image.src = "./image/Blocks/じゃがいもB.png"
                      break;
                      case 'JB':
                        image.src = "./image/Blocks/じゃがいもA.png"
                        break;
                        case 'T':
                    image.src = "./image/Blocks/にんじんA.png"
                    break;
                    case 'TA':
                      image.src = "./image/Blocks/かぶA.png"
                      break;
                      case 'TB':
                        image.src = "./image/Blocks/かぶB.png"
                        break;
        default:
    }
    context.drawImage(image,x,y,width-5,height-5)
    
}
function getMousePosition(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }
  var mousePos = [0,0];
  canvas.addEventListener('mousemove', function (evt) {
    mousePos = getMousePosition(canvas, evt);
    IndexX = mousePos.x/128;
    IndexY = mousePos.y/128;
    IndexX = Math.floor(IndexX)
    IndexY = Math.floor(IndexY)
  }, false);
  canvas.addEventListener('click', function (evt) {

    if(Item_name[Itemnumber] == 'h'){
      BlockList[IndexX][IndexY] = 'n'
      audio.play()
      removeItem('h',Itemnumber)
    }
    if(Item_name[Itemnumber] == 'a'){
      
      if(BlockList[IndexX][IndexY] == 'n'){
      BlockList[IndexX][IndexY] = 'k'
      audio.play()
      BlockTIME[IndexX][IndexY] = 100;
      removeItem('a',Itemnumber)
      playsoud_Dart()
      }
    }
    if(Item_name[Itemnumber] == 'g'){
      if(BlockList[IndexX][IndexY] == 'n'){
      BlockList[IndexX][IndexY] = 'J'
      audio.play()
      BlockTIME[IndexX][IndexY] = 100;
      removeItem('g',Itemnumber)
      playsoud_Dart()
      }
    }
    if(Item_name[Itemnumber] == 'k'){
      if(BlockList[IndexX][IndexY] == 'n'){
      BlockList[IndexX][IndexY] = 'T'
      audio.play()
      BlockTIME[IndexX][IndexY] = 100;
      removeItem('g',Itemnumber)
      playsoud_Dart()
      }
    }
    if(BlockList[IndexX][IndexY] == 'JB'){
      var random = Math.random(100)*3
      for (let i = 0; i < random; i++) {
        addItem('g')
        BlockList[IndexX][IndexY] = 'n'
        BlockTIME[IndexX][IndexY] = 0;
      }
      playsoud_Dart()
    }
    if(BlockList[IndexX][IndexY] == 'kC'){
      var random = Math.random(100)*3
      for (let i = 0; i < random; i++) {
        addItem('a')
        
      }
      BlockList[IndexX][IndexY] = 'n'
      BlockTIME[IndexX][IndexY] = 0;
      playsoud_Dart()
    }
    if(BlockList[IndexX][IndexY] == 'TB'){
      var random = Math.random(100)*3
      for (let i = 0; i < random; i++) {
        addItem('k')
        
      }
      BlockList[IndexX][IndexY] = 'n'
      BlockTIME[IndexX][IndexY] = 0;
      playsoud_Dart()
    }
  }, false);
function playsoud_Dart(){
}
  document.addEventListener('keyup', keypress_ivent);

function keypress_ivent(e) {
  console.log(e.key)
  if (e.key == 's') {
    Coin_audio.play()
    if(Shop){
      context.fillStyle = "#262"
      context.fillRect(0,0,10000,10000)
      Shop = false
    }else{
      Shop = true
    }
}
  if(Shop == false){
  switch (e.key) {
    case '1':
      Itemnumber = SlotCamera+0
      Coin_audio.play()
      break;
    case '2':
      Itemnumber = SlotCamera+1
      Coin_audio.play()
      break;
    case '3':
      Itemnumber = SlotCamera+2
      Coin_audio.play()
      break;
    case '4':
        Itemnumber = SlotCamera+3
        Coin_audio.play()
        break;
    case '5':
        Itemnumber = SlotCamera+4
        Coin_audio.play()
        break;
    case '6':
        Itemnumber = SlotCamera+5
        Coin_audio.play()
        break;
        case '7':
          Itemnumber = SlotCamera+6
          Coin_audio.play()
          break;
        case '8':
          Itemnumber = SlotCamera+7
          Coin_audio.play()
          break;
        case '9':
          Itemnumber = SlotCamera+8
          Coin_audio.play()
          break;
          case '0':
            Coin_audio.play()
            Itemnumber = SlotCamera+9
            break;
            case 'q':
              Coin_audio.play()
              add_Item = 'null';
              var add = 0;
              removeItem(0,Itemnumber)
              add_Item = Item_name[Itemnumber]
              console.log(add_Item)
              if(add_Item == 'a'){
                add = 50*0.8;
              }
              if(add_Item == 'g'){
                add = 80*0.8;
              }
              if(add_Item == 'h'){
                add = 0;
              }
              if(add_Item == 'k'){
                add = 80;
              }
              if(add_Item == 'null'){
                add = 0;
              }
              //add = 0;
              gold += add;
              console.log(add)
              break
                default:
                  break;
  }
}else{
  switch (e.key) {
  case 'q':
    console.log(Shop_nuber)
    if(Shop_nuber == 0){
      if(price[0] <= gold){
      addItem("a")
      gold = gold-price[0]
      }
    }
    if(Shop_nuber == 1){
      if(price[1] <= gold){

      addItem('g')
      gold = gold-price[1]
      }
    }
    if(Shop_nuber == 2){
      if(price[2] <= gold){
        for (let i = 0; i < 9; i++) {
          addItem('h')
          
        }
      addItem('h')
      gold = gold-price[2]
      }
    }
    if(Shop_nuber == 4){
      console.log(Shop_nuber)
      if(price[3] <= gold){

      addItem('k')
      gold = gold-price[3]
      }
    }
    break
    case '1':
      Item_number = 0
      break;
    case '2':
      Item_number = 1
      break;
    case '3':
      Item_number = 2
      break;
    case '4':
      Item_number = 3
        break;
    case '5':
      Item_number = 4
        break;
    case '6':
      Item_number = 5
        break;
        case '7':
          Item_number = 6
          break;
        case '8':
          Item_number = 7
          break;
        case '9':
          Item_number = 8
          break;
          case '0':
            Item_number = 9
            break;
  }
  Shop_nuber = Item_number
}
  Itemkind = Item_name[Itemnumber]
  }

  function DrawEnvent(){
    for (let i = 0; i < Item_name.length; i++) {
      
    }
  }
  function addItem(type){
    if(Item_name.includes(type)){
      var i = 0;
      while (Item_name[i] != type || Item_name[i] == 'n') {

        i++;
      }
      console.log(Item_name[i] == '',i)
      if (Item_Int[i] == 'n') {
        Item.addList(type,Item_name)
        Item.addList(1,Item_Int)
      }else{
        Item_Int[i] = Item_Int[i]+1;
      }
      if (Item_Int[i] == 60) {
      while (Item_name[i] != 'n' || Item_name[i] == type && Item_Int[i] == 59) {

        i++;
      }
        Item_Int[i] = Item_Int[i]+1;
        Item.addList(type,Item_name)
      }
    }else{
        Item.addList(type,Item_name)
        Item.addList(1,Item_Int)
    }
}
function NEWDrawEnvent(){
    context.fillStyle = "#555"
    context.fillRect(0,580,10000,150)
    for (let i = 0; i < Item_name.length; i++) {
      var image = new Image()
      context.fillStyle = "#999"
      if(i == Itemnumber){
      context.fillStyle = "#FF0"
      context.fillRect(i*140+SlotCamera-10,600,100,100)
      }else{
        context.fillRect(i*140+SlotCamera-10,600,100,100)
      }
      switch (Item_name[i]) {
          case 'g':
              image.src = "./image/Items/じゃがいも.png"
              break;
          case 'a':
                image.src = "./image/Items/にんじん.png"
                break;
          case 'h':
                  image.src = "./image/Items/鍬.png"
                  break;
                  /*case 'k':
                  image.src = "./image/Items/かぶ.png"
                  break;*/
          default:
            image.src = "./image/Items/空.png"
              break;
      }
      context.drawImage(image,i*140-0+SlotCamera,610,80,80)
      context.font = "30px italic bold";
      context.fillStyle = "#333"
      //context.fillText(Item_Int[i], i*140+SlotCamera, 690);
      
      if(Item_name[i] == 'h'){
        let x = Item_Int[i]+9;
        context.fillText(Math.floor(x/10), i*140+SlotCamera, 690);
      }else{
        context.fillText(Item_Int[i], i*140+SlotCamera, 690);
      }
    }
  }
  function main() {
    //context.fillRect(0,0,10000,10000)
    if(Shop){
      Draw.Draw(context,Item_number,price)
      NEWDrawEnvent()
      
      context.fillStyle = '#999';
      
    }else{
      DrawBlock()
      NEWDrawEnvent()
      //context.fillText("S:ショップを開く,1~9~0:アイテム選択",200,40)
    }
    context.font = "20px italic bold";
    context.fillStyle = '#333';
    context.fillRect(1160,540,1000,60)
    context.fillRect(0,0,500,50)
    context.fillStyle = '#F3F';
    if(Shop){
      context.fillText("S:ショップを閉じる",1200,600)
      context.fillText("1~9~0:アイテム選択",1200,580)
      context.fillText("q:購入",1200,560)
    }else{
      context.fillText("S:ショップを開く",1200,600)
      context.fillText("1~9~0:アイテム選択",1200,580)
      context.fillText("q:選択したアイテムを売る",1160,560)
    }
    context.font = "40px italic bold";
    context.fillStyle = '#FFF';
    context.fillText("Gold:"+gold+"G",0,40)
    
    //console.log(mousePos.x,":",mousePos.y)
	requestAnimationFrame(main);
}
requestAnimationFrame(main);
