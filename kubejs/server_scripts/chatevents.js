// priority: 10

//Welcome to Industrial Village modpack! Quest Book will answer most of your questions and will show intended pack progression. 
//You can access it from the item or in the upper-left corner of your inventory screen.

//By completing quests you will gain useful resources and Quest Coins which then can be exchanged in the dedicated quest chapter for lootcrates.

//If you have any issues or suggestions - visit pack's github page. 

//We also have a discord where you can communicate, ask questions or search for answers.

PlayerEvents.loggedIn(event => {
  if (!event.player.persistentData.contains('firstjoin')) 
  {
    event.player.persistentData.putBoolean('firstjoin', true)

      event.player.tell([
        Component.of('Welcome to Industrial Village modpack!\n').bold().gold(),
		Component.of('The '),
        Component.of('Quest Book ').green(),
        Component.of('will answer most of your questions and will '),
        Component.of('show ').yellow(),
		Component.of('intended '),
        Component.of('pack progression. ').yellow(),
        Component.of('You can access it from the item or in the upper-left corner of your inventory screen.\n'),
		
        Component.of('By completing '),
        Component.of('quests ').green(),
        Component.of('you will gain useful resources and '),
        Component.of('Quest Coins ').gold(),
        Component.of('which then can be exchanged in the dedicated quest chapter for '),
        Component.of('lootcrates.\n').yellow(),
		
        Component.of('If you have any issues or suggestions - '),
        Component.of('visit '),
		Component.of('[github] ')
		  .clickOpenUrl('https://github.com/dr3ams/Industrial-Village/issues')
          .hover('Opens the Industrial Village Github')
          .aqua(),
        Component.of('page. '),
		
        Component.of('We also have a '),
		Component.of('[discord] ')
		  .clickOpenUrl('https://discord.com/invite/dreams-modpacks-512339624627011586')
          .hover('Click to visit our Discord server.')
          .aqua(),
        Component.of('server where you can communicate, ask questions or search for answers.\n'),
		  
        Component.of('Thank you for playing!').green(),
        Component.of('\nNote: You may need to open chat to see the full message.').underlined().yellow()
      ])

  } else if (event.player.persistentData.contains('firstjoin')) 
  {
    event.player.tell([
      Component.of('Welcome back!\n').bold().green(),

		Component.of('In case you didn\'t see previously, '),
		Component.of('The '),
        Component.of('Quest Book ').green(),
        Component.of('will answer most of your questions and will '),
        Component.of('show ').yellow(),
		Component.of('intended '),
        Component.of('pack progression. ').yellow(),
        Component.of('You can access it from the item or in the upper-left corner of your inventory screen.\n'),
		
        Component.of('By completing '),
        Component.of('quests ').green(),
        Component.of('you will gain useful resources and '),
        Component.of('Quest Coins ').gold(),
        Component.of('which then can be exchanged in the dedicated quest chapter for '),
        Component.of('lootcrates.\n').yellow(),
		
        Component.of('If you have any issues or suggestions - '),
        Component.of('visit '),
		Component.of('[github] ')
		  .clickOpenUrl('https://github.com/dr3ams/Industrial-Village/issues')
          .hover('Opens the Industrial Village Github')
          .aqua(),
        Component.of('page. '),
		
        Component.of('We also have a '),
		Component.of('[discord] ')
		  .clickOpenUrl('https://discord.com/invite/dreams-modpacks-512339624627011586')
          .hover('Click to visit our Discord server.')
          .aqua(),
        Component.of('server where you can communicate, ask questions or search for answers.\n'),
		  
        Component.of('Thank you for playing!').green(),
        Component.of('\nNote: You may need to open chat to see the full message.').underlined().yellow()
    ])

  }
})



