let colors = []; // 用來儲存每條線條的顏色
let heights = []; // 用來儲存每條線條的高度

function setup() { // 初始設定只做一次
  // 建立一個寬高為視窗寬與高的畫布，並設定透明背景
  createCanvas(windowWidth, windowHeight);
  // 設定背景顏色為透明
  clear();

  // 初始化每條線條的顏色和高度
  for (let i = 0; i < 40; i++) {
    colors[i] = color(random(255), random(255), random(255), 130); // 隨機設定顏色並增加透明度
    heights[i] = random(15, 25); // 隨機設定每條線條的高度
  }
}

function draw() {
  // 設定背景顏色為透明
  clear();

  // 繪製多條線條，產生類似海草的效果
  for (let i = 0; i < 40; i++) {
    // 使用預先設定的顏色
    stroke(colors[i]);
    // 固定線條寬度
    strokeWeight(40);

    // 計算每條線條的 x 座標
    let x = (i + 0.5) * (width / 40);
    let y = height;
    let heightOffset = heights[i]; // 使用預先設定的高度

    beginShape();
    // 固定底部位置
    vertex(x, y);
    for (let j = 1; j < 15; j++) { // 增加節點數量
      // 計算每個控制點的 x 座標，使其左右搖動
      let offsetX = sin(frameCount * 0.02 + j * 0.5 + i) * 5; // 減慢搖擺速度
      vertex(x + offsetX, y - j * heightOffset);
    }
    endShape();
  }
}
