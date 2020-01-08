PennController.ResetPrefix(null)
PennController.Sequence( "welcome" , randomize("experiment") , "send" , "final" )
PennController( "welcome" ,
    defaultText
        .print()
    ,
    newText("<p>Welcome!</p>")
    ,
    newText("<p>In this experiment, you will have to report which of two pictures matches a description.</p>")
    ,
    newText("<p>Press the <strong>F</strong> key for the picture on the left, or the <strong>J</strong> key for the picture on the right.</p>")
    ,
    newText("<p>Please enter your ID and then click the button below to start the experiment.</p>")
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
PennController.Template( 
  variable => PennController( "experiment" ,
    newTimer(500)
        .start()
        .wait()
    ,
    newImage("natural_image", variable.natural_img)
        .settings.size(500,500)
        .print()
    ,
//     newAudio("description", variable.AudioFile)
//         .play()
//     ,
//     newText(variable.Description)
//         .unfold(2600)
//     ,
    newImage("false_sklt", variable.false_sklt)
        .settings.size(220,220)
    ,
    newImage("true_sklt", variable.true_sklt)
        .settings.size(220,220)
    ,
    newCanvas(500,220)
        .settings.add(   0 , 0 , getImage("false_sklt") )
        .settings.add( 280 , 0 , getImage("true_sklt") )
        .print()
    ,
    newSelector()
        .settings.add( getImage("false_sklt") , getImage("true_sklt") )
//         .shuffle()
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
//   .log( "Item"   , variable.Item   )
//   .log( "Ending" , variable.Ending )
//   .log( "Group"  , variable.Group  )
)
PennController.SendResults( "send" )
PennController( "final" ,
    newText("<p>Thank you for your participation!</p>")
        .print()
    ,
    newText("<p><a href='https://www.put.your/platform/confirmation/link.here'>Click here to validate your participation.</a></p>")
        .print()
    ,
    newButton("void")
        .wait()
)
