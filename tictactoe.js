let gameOver = false;
// 建立一個 length = 10 的陣列 (index 0 不使用)
let canvas = new Array(10);
// 使用者點擊
function select(itemId) {
  if (canvas[itemId]) {
    return;
  } else {
    // 在點到的位置上畫 X
    document.getElementById(itemId).innerHTML = "<p>X</p>";
    // 記錄到 canvas
    canvas[itemId] = "X";

    // 判斷是否連線
    check();
    if (!gameOver) {
      // 判斷要在哪畫 O
      // 1. 判斷是否有即將連線的 O
      // 2. 判斷是否有即將連線的 X
      // 先找出不是 undefined 的
      // let selectedX = [];
      // let selectedO = [];
      // for (let i = 1; i < canvas.length; i++) {
      //   if (canvas[i] === "X") selectedX.push(i);
      //   if (canvas[i] === "O") selectedO.push(i);
      // }
      // console.log("X", selectedX);
      // console.log("O", selectedO);

      // 3. 在剩下的格子中隨機畫 O
      setO();
      // 再次判斷是否連線
      check();
    }
  }
}

// 判斷是否連線
function check() {
  // 列出贏的條件
  let winCondictions = [
    // 橫
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    // 直
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    // 斜
    [1, 5, 9],
    [3, 5, 7],
  ];
  let index = 0;
  while (index < winCondictions.length) {
    let win = winCondictions[index];
    if (
      canvas[win[0]] === canvas[win[1]] &&
      canvas[win[1]] === canvas[win[2]]
    ) {
      setStyle(win[0], canvas[win[0]]);
      setStyle(win[1], canvas[win[1]]);
      setStyle(win[2], canvas[win[2]]);
      break;
    }
    index++;
  }
}
// winCondictions.forEach((win) => {
//   if (
//     canvas[win[0]] === canvas[win[1]] &&
//     canvas[win[1]] === canvas[win[2]]
//   ) {
//     setStyle(win[0], canvas[win[0]]);
//     setStyle(win[1], canvas[win[1]]);
//     setStyle(win[2], canvas[win[2]]);
//   }
// });

//   if (canvas[1] === canvas[2] && canvas[2] === canvas[3]) {
//     setStyle(1, canvas[1]);
//     setStyle(2, canvas[2]);
//     setStyle(3, canvas[3]);
//   } else if (canvas[4] === canvas[5] && canvas[5] === canvas[6]) {
//     setStyle(4, canvas[4]);
//     setStyle(5, canvas[5]);
//     setStyle(6, canvas[6]);
//   } else if (canvas[7] === canvas[8] && canvas[8] === canvas[9]) {
//     setStyle(7, canvas[7]);
//     setStyle(8, canvas[8]);
//     setStyle(9, canvas[9]);
//   } else if (canvas[1] === canvas[4] && canvas[4] === canvas[7]) {
//     setStyle(1, canvas[1]);
//     setStyle(4, canvas[4]);
//     setStyle(7, canvas[7]);
//   } else if (canvas[2] === canvas[5] && canvas[5] === canvas[8]) {
//     setStyle(2, canvas[2]);
//     setStyle(5, canvas[5]);
//     setStyle(8, canvas[8]);
//   } else if (canvas[3] === canvas[6] && canvas[6] === canvas[9]) {
//     setStyle(3, canvas[3]);
//     setStyle(6, canvas[6]);
//     setStyle(9, canvas[9]);
//   } else if (canvas[1] === canvas[5] && canvas[5] === canvas[9]) {
//     setStyle(1, canvas[1]);
//     setStyle(5, canvas[5]);
//     setStyle(9, canvas[9]);
//   } else if (canvas[3] === canvas[5] && canvas[5] === canvas[7]) {
//     setStyle(3, canvas[3]);
//     setStyle(5, canvas[5]);
//     setStyle(7, canvas[7]);
//   }

// 設定顏色
function setStyle(itemId, type) {
  let color;
  if (type === "X") color = "#00916E";
  if (type === "O") color = "#ED7777";
  document.getElementById(itemId).style.backgroundColor = color;
  document.getElementById(itemId).style.color = "#fffff";
  if (type) gameOver = true;
  if (gameOver)
    document.getElementById("container").style.pointerEvents = "none";
}

// 在剩下的格子中隨機畫 O
function setO() {
  let empty = [];
  for (let i = 1; i < canvas.length; i++) {
    if (!canvas[i]) empty.push(i);
  }
  let randomIndex = Math.floor(Math.random() * (empty.length - 1));
  let randomItemId = empty[randomIndex];
  // 畫 O
  if (randomItemId) {
    document.getElementById(randomItemId).innerHTML = "<p>O</p>";
  }
  // 記錄到 canvas
  canvas[randomItemId] = "O";
}

// 123 456 789
// 147 258 369
// 159 357

// 1 2 3
// 4 5 6
// 7 8 9
