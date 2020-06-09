PennController.Sequence( "setcounter","welcome","demo1","demo2","demo3","start_page",randomize("block1"),"break",randomize("block2") , "send" , "final" )
PennController.ResetPrefix(null)

PennController.DebugOff() 
PennController.SetCounter( "setcounter" );
// PennController.SetCounter( "setcounter" );
PennController( "welcome" ,
    defaultText
        .print()
    ,
    newText("<p>By completing this survey or questionnaire, you are consenting to be in this research study. Your participation is voluntary and you can stop at any time.</p>")
        .settings.bold()
        .settings.color("red")
    ,
    newText("<p>Welcome!</p>")
    ,
    newText("<p>In this experiment, you will have to match synthetic human bodies with human bodies in the natural image in terms of their <b>body poses</b>.</p>")
    ,
    newText("<p>In each trial, you will see a natural image on the top and two synthetic human images on the bottom of the screen. The two synthetic human bodies may be rotated together to some degree. <br> Your task is to ignore the viewpoint differences and compare synthetic human poses with the pose in the natural image. <br><b>To complete one trial, you will click the synthetic human image whose pose matches the pose in the natural image better, regardless of the viewpoint differences</b>.</p>")
    ,
    newText("<p><b>Even if you cannot decide which synthetic human is more similar to the one in the natural image in some trials, you should still select one in order to move forward to the next trial.</b></p>")
    ,
    newText("<p>There are two blocks with a total of 200 trials. There will be a break after the first 100 trials. Please enter your nickname (whatever string you like!) and click <i>Start</i> to start practice trials.</p>")
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
    newImage("natural_image", "00000_sq.png")
        .settings.size(400,400)
        .print()
    ,
    newImage("false_sklt", "00000_3d_body_noise_01.png")
        .settings.size(190,190)
    ,
    newImage("true_sklt", "00000_3d_body_ori.png")
        .settings.size(190,190)
    ,
    newCanvas(450,260)
        .settings.add(   0 , 50 , getImage("false_sklt") )
        .settings.add(  210 , 50 , getImage("true_sklt") )
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
    newImage("natural_image", "00001_sq.png")
        .settings.size(400,400)
        .print()
    ,
    newImage("false_sklt", "00001_3d_body_noise_02.png")
        .settings.size(190,190)
    ,
    newImage("true_sklt", "00001_3d_body_ori.png")
        .settings.size(190,190)
    ,
    newCanvas(450,260)
        .settings.add(   0 , 50 , getImage("false_sklt") )
        .settings.add(  210 , 50 , getImage("true_sklt") )
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
  
  PennController( "demo3" ,
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
    newText("<p>Example Trial 3</p>")
    ,
    newImage("natural_image", "00004_sq.png")
        .settings.size(400,400)
        .print()
    ,
    newImage("false_sklt", "00004_3d_body_noise_01.png")
        .settings.size(190,190)
    ,
    newImage("true_sklt", "00004_3d_body_ori.png")
        .settings.size(190,190)
    ,
    newCanvas(450,260)
        .settings.add(   0 , 50 , getImage("false_sklt") )
        .settings.add(  210 , 50 , getImage("true_sklt") )
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

PennController( "start_page" ,
    defaultText
        .print()
    ,
    newText("<p>Please click the button below to start Block 1.</p>")
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


// PennController.Template( 
PennController.Template(PennController.GetTable("fulldesign.csv").filter("block", "0"),
    variable => PennController( "block1" , 
//   variable => PennController( "experiment" ,
    newTimer(500)
        .start()
        .wait()
    ,
    newImage("natural_image", variable.natural_img)
        .settings.size(400,400)
        .print()
    ,
//     newAudio("description", variable.AudioFile)
//         .play()
//     ,
//     newText(variable.Description)
//         .unfold(2600)
//     ,
    newImage("false_sklt", variable.false_sklt)
        .settings.size(190,190)
    ,
    newImage("true_sklt", variable.true_sklt)
        .settings.size(190,190)
    ,
    newCanvas(450,260)
        .settings.add(   0 , 50 , getImage("false_sklt") )
        .settings.add(  210 , 50 , getImage("true_sklt") )
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
  .log("false_sklt", variable.false_sklt)
  .log("true_sklt", variable.true_sklt)
//   .log( "Item"   , variable.Item   )
//   .log( "Ending" , variable.Ending )
//   .log( "Group"  , variable.Group  )
)

PennController("break" , newButton("Start second half").print().wait() )


PennController.Template( PennController.GetTable("fulldesign.csv").filter("block", "1"),
    variable => PennController( "block2" , 
//   variable => PennController( "experiment" ,
    newTimer(500)
        .start()
        .wait()
    ,
    newImage("natural_image", variable.natural_img)
        .settings.size(400,400)
        .print()
    ,
//     newAudio("description", variable.AudioFile)
//         .play()
//     ,
//     newText(variable.Description)
//         .unfold(2600)
//     ,
    newImage("false_sklt", variable.false_sklt)
        .settings.size(190,190)
    ,
    newImage("true_sklt", variable.true_sklt)
        .settings.size(190,190)
    ,
    newCanvas(450,260)
        .settings.add(   0 , 50 , getImage("false_sklt") )
        .settings.add(  210 , 50 , getImage("true_sklt") )
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
  .log("false_sklt", variable.false_sklt)
  .log("true_sklt", variable.true_sklt)
//   .log( "Item"   , variable.Item   )
//   .log( "Ending" , variable.Ending )
//   .log( "Group"  , variable.Group  )
)

PennController.SendResults( "send" )
PennController( "final" ,
    newText("<p>Thank you for your participation!</p>")
        .print()
    ,
    newText("<p>Please enter code 14767856 in Amazon Mechanical Turk.</p>")
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
