
// 押すとdivが消える//

$('.tool-btn').on('click', function () {
    $(this).closest("div").css("display", "none");

   if($(this).closest("div").hasClass("page-1")){
    $(".page-2").fadeIn("slow");
   }else if($(this).closest("div").hasClass("page-2")){
    $(".page-3").fadeIn("slow");
   }else if($(this).closest("div").hasClass("page-3")){
    $(".page-4").fadeIn("slow");
   }else if($(this).closest("div").hasClass("page-4")){
    $(".page-5").fadeIn("slow");
   }else if($(this).closest("div").hasClass("page-5")){
    $(".page-6").fadeIn("slow");
   }else if($(this).closest("div").hasClass("page-6")){
    $(".page-7").fadeIn("slow");}
   }); 
 



  $(".btn-container").on("click", function () {

var random = Math.floor(Math.random() * 5);
console.log(random, "ランダムな数字");


if (random === 0) {
    console.log("私");
    $(".who").text("私");
  } else if (random === 1) {
    console.log("君");
    $(".who").text("君");
  } else if (random === 2) {
    console.log("僕");
    $(".who").text("僕");
  } else if (random === 3) {
    console.log("あなた");
    $(".who").text("あなた");
  } else if (random === 4) {
    console.log("誰か");
    $(".who").text("誰か");
  }


  });

  $(".btn-container2").on("click", function () {
    
    var random = Math.floor(Math.random() * 5);
    console.log(random, "ランダムな数字");
    
    
    if (random === 0) {
        console.log("未来");
        $(".is").text("未来");
      } else if (random === 1) {
        console.log("恋");
        $(".is").text("恋");
      } else if (random === 2) {
        console.log("明日");
        $(".is").text("明日");
      } else if (random === 3) {
        console.log("光");
        $(".is").text("光");
      } else if (random === 4) {
        console.log("希望");
        $(".is").text("希望");
      }
    
    
      });
  
  $(".btn-container3").on("click", function () {
        
        var random = Math.floor(Math.random() * 5);
        console.log(random, "ランダムな数字");
        
        
        if (random === 0) {
            console.log("苦くて");
            $(".any").text("苦くて");
          } else if (random === 1) {
            console.log("煌めいて");
            $(".any").text("煌めいて");
          } else if (random === 2) {
            console.log("甘くて");
            $(".any").text("甘くて");
          } else if (random === 3) {
            console.log("するどくて");
            $(".any").text("するどくて");
          } else if (random === 4) {
            console.log("やわらかくて");
            $(".any").text("やわらかくて");
          }
        
        
          });

  $(".btn-container4").on("click", function () {
        
            var random = Math.floor(Math.random() * 5);
            console.log(random, "ランダムな数字");
            
            
            if (random === 0) {
                console.log("繊細だ");
                $(".that").text("繊細だ");
              } else if (random === 1) {
                console.log("あたたかい");
                $(".that").text("あたたかい");
              } else if (random === 2) {
                console.log("ゆるぎない");
                $(".that").text("ゆるぎない");
              } else if (random === 3) {
                console.log("壊れやすい");
                $(".that").text("壊れやすい");
              } else if (random === 4) {
                console.log("夢のようだ");
                $(".that").text("夢のようだ");
              }
            
            
              });        


        
   $(".btn-container5").on("click", function () {

     ;

           
              });

