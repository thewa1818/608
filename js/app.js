

// const num = 60;

// if (num >= 90){
//   console.log("30ですよ");
// }else{
//   console.log("違います");
// }

// if(num === 30){
//   console.log("30!");
// }else if(num === 40){
//   console.log("40!!");
// }else if(num === 50){
//   console.log("50!!!");
// }else if(num === 60){
//   console.log("60!!!");
// }else{
//   console.log("どれにも当てはまらないよ");
// }







$("h1").on("click", function () {
  $(".a").html("押された");

  const random = Math.floor(Math.random() * 5);

  if (random === 0){
    console.log("大吉です");
    $(".a").html("大吉です");
    $(".a").css("color","red");
  }else if (random === 1){
    console.log("中吉です");
    $(".a").html("中吉です");
    $(".a").css("color","black");
  }else if (random === 2){
    console.log("吉です");
    $(".a").html("吉です");
    $(".a").css("color","black");
  }else if (random === 3){
    console.log("小吉です");
    $(".a").html("小吉です");
    $(".a").css("color","black");
  }else if (random === 4){
    console.log("末です");
    $(".a").html("末です");
    $(".a").css("color","black");
  }
});

$(".test").on("click", function () {
  // $(this).addClass("aizawa");
  // $(this).removeClass("aizawa");
  $(this).toggleClass("aizawa");
});

$(".test").on("click", function () {
  // cssをjqueryでつけちゃおう！

  // $(this).append(`${num}: <p>押したぞ！！！</p>`);
  // $(this).addClass("morita");
  // $(this).removeClass("morita");
  // $(".test").toggleClass("morita");
  // thisはclickイベント等の指定しているclass名のことをいいます🤗
  // h2 class="bb"を操作したいとき
  // $(".bb").html(`<p>${num}: 押したぞ！！！</p>`);
  num += 1;

  // fadeOut　消すおまじない
  $(".bb").fadeIn(2000); //2000 は2秒

  // if (num === 9) {
  //   alert("おめでとう！！たくさん遊んでくれて！！！");
  // }
});