PennController.ResetPrefix(null)
PennController.Sequence( "welcome" , "demo1", "demo2","start_page",randomize("experiment") , "send" , "final" )
PennController( "welcome" ,
    defaultText
        .print()
    ,
    newText("<p>Welcome!</p>")
    ,
    newText("<p>In this experiment, you will have to click which of two stick figures matches the body pose in the natural image better.</p>")
    ,
    newText("<p>The brightness of stick figures represents the depth information. The brighter a part is on the stick figure, the closer it is to the observer.</p>")
    ,
    newImage("https://pages.jh.edu/~hzhu38/up-pose/demo/demo_00000_sklt.png")
        .settings.center()
        .settings.size(160,160)
        .print()
    ,
    newText("<p>Please enter your ID and then click the button below to start a example trial before proceeding to the experiment.</p>")
    ,
    newTextInput("ID")
        .print()
    ,
    newButton("Start")
        .print()
        .wait()
    ,
    newVar("ID")
        .settings.global()
        .set( getTextInput("ID") )
)
.log( "ID" , getVar("ID") )


PennController( "demo1" ,
    newTimer(500)
        .start()
        .wait()
    ,
    defaultText
        .settings.center()
        .print()
    ,
    // newText("<p>This is a example trial. You will have to pick which stick figure matches the body pose better. </p>")
    // ,
    newText("<p>Example Trial 1</p>")
    ,
    newImage("https://pages.jh.edu/~hzhu38/up-pose/demo/demo_00000_image.png")
        .settings.size(350,350)
        // .settings.center()
        .print()
    ,
//     newAudio("description", variable.AudioFile)
//         .play()
//     ,
//     newText(variable.Description)
//         .unfold(2600)
//     ,
    newImage("left1","https://pages.jh.edu/~hzhu38/up-pose/demo/demo_00000_sklt.png")
        .settings.size(160,160)
    ,
    newImage("right1","https://pages.jh.edu/~hzhu38/up-pose/demo/demo_00001_sklt.png")
        .settings.size(160,160)
    ,
    newCanvas(350,250)
        .settings.add(   0 , 50 , getImage("left1") )
        .settings.add(  190 , 50 , getImage("right1") )
        // .settings.center()
        .print()
    ,
    newSelector()
        .settings.add( getImage("left1") , getImage("right1") )
        .shuffle()
        .settings.keys(          "F"    ,          "J"   )
        // .settings.log()
        .wait()
    ,
//     getAudio("description")
//        .wait("first")
//     ,
    newTimer(500)
        .start()
        .wait()
    
  )
  PennController( "demo2" ,
    newTimer(500)
        .start()
        .wait()
    ,
    defaultText
        .settings.center()
        .print()
    ,
    // newText("<p>This is a example trial. You will have to pick which stick figure matches the body pose better. </p>")
    // ,
    newText("<p>Example Trial 2</p>")
    ,
    newImage("https://pages.jh.edu/~hzhu38/up-pose/demo/demo_00001_image.png")
        .settings.size(350,350)
        .print()
    ,
    
//     newAudio("description", variable.AudioFile)
//         .play()
//     ,
//     newText(variable.Description)
//         .unfold(2600)
//     ,
    newImage("left2","https://pages.jh.edu/~hzhu38/up-pose/demo/demo_00001_sklt.png")
        .settings.size(160,160)
    ,
    newImage("right2","https://pages.jh.edu/~hzhu38/up-pose/demo/demo_00002_sklt.png")
        .settings.size(160,160)
    ,
    newCanvas(350,250)
        .settings.add(   0 , 50 , getImage("left2") )
        .settings.add(  190 , 50 , getImage("right2") )
        .print()
    ,
    newSelector()
        .settings.add( getImage("left2") , getImage("right2") )
        .shuffle()
        .settings.keys(          "F"    ,          "J"   )
        // .settings.log()
        .wait()
    ,
    newTimer(500)
        .start()
        .wait()
  )

PennController( "start_page" ,
    defaultText
        .print()
    ,
    newText("<p>Please click the button below to start the experiment.</p>")
    ,
    newButton("Start")
        .print()
        .wait()
)
  
//   .log( "ID"     , getVar("ID")    )
//   .log( "natural_img"     , variable.natural_img    )
//   .log( "Item"   , variable.Item   )
//   .log( "Ending" , variable.Ending )
//   .log( "Group"  , variable.Group  )


PennController.Template( 
  variable => PennController( "experiment" ,
    newTimer(500)
        .start()
        .wait()
    ,
    newImage("natural_image", variable.natural_img)
        .settings.size(350,350)
        .print()
    ,
//     newAudio("description", variable.AudioFile)
//         .play()
//     ,
//     newText(variable.Description)
//         .unfold(2600)
//     ,
    newImage("false_sklt", variable.false_sklt)
        .settings.size(160,160)
    ,
    newImage("true_sklt", variable.true_sklt)
        .settings.size(160,160)
    ,
    newCanvas(350,250)
        .settings.add(   0 , 50 , getImage("false_sklt") )
        .settings.add(  190 , 50 , getImage("true_sklt") )
        .print()
    ,
    newSelector()
        .settings.add( getImage("false_sklt") , getImage("true_sklt") )
        .shuffle()
        .settings.keys(          "F"    ,          "J"   )
        .settings.log()
        .wait()
    ,
//     getAudio("description")
//        .wait("first")
//     ,
    newTimer(500)
        .start()
        .wait()
  )
  .log( "ID"     , getVar("ID")    )
  .log( "natural_img"     , variable.natural_img    )
//   .log( "Item"   , variable.Item   )
//   .log( "Ending" , variable.Ending )
//   .log( "Group"  , variable.Group  )
)
PennController.SendResults( "send" )
PennController( "final" ,
    newText("<p>Thank you for your participation!</p>")
        .print()
    ,
//     newText("<p>If you have any comments, please leave it here.</p>")
//         .print()
//     ,
//     newTextInput("comments")
//         .print()
//     ,
    
//     newButton("Submit")
//         .print()
//         .wait()
//     ,
//     newVar("comments")
//         .settings.global()
//         .set( getTextInput("comments") )
// //     newText("<p><a href='https://www.put.your/platform/confirmation/link.here'>Click here to validate your participation.</a></p>")
// //         .print()
// //     ,
//     // ,
    newButton("void")
        .wait()
)
// .log( "comments" , getVar("comments") )
