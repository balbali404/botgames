const Discord = require('discord.js');
const client = new Discord.Client();
const perfix ='€'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
 
 const Sra7a = [
            'صراحه  |  صوتك حلوة؟',
            'صراحه  |  التقيت الناس مع وجوهين؟',
            'صراحه  |  شيء وكنت تحقق اللسان؟',
            'صراحه  |  أنا ��خص ضعيف عندما؟',
            'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
            'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
            'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
            'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
            'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
            'صراحه  |  أشجع شيء حلو في حياتك؟',
            'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
            'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
            'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
            'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
            'صراحه  |  نظرة و يفسد الصداقة؟',
            'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
            'صراحه  |  شخص معك بالحلوه والمُره؟',
            'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص ��م ترى ذلك ضعف؟',
            'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
            'صراحه  |  وش تتمنى الناس تعرف عليك؟',
            'صراحه  |  ابيع المجرة عشان؟',
            'صراحه  |  أحيانا احس ان الناس ، كمل؟',
            'صراحه  |  مع مين ودك تنام اليوم؟',
            'صراحه  |  صدفة العمر الحلوة هي اني؟',
            'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
            'صراحه  |  صفة تحبها في نفسك؟',
            'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
            'صراحه  |  تصلي صلواتك الخمس كلها؟',
            'صراحه  |  ‏تجامل أحد على راحتك؟',
            'صراحه  |  اشجع شيء سويتة بحياتك؟',
            'صراحه  |  وش ناوي تسوي اليوم؟',
            'صراحه  |  وش شعورك لما تشوف المطر؟',
            'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
            'صراحه  |  ما اكثر شي ندمن عليه؟',
            'صراحه  |  اي الدول تتمنى ان تزورها؟',
            'صراحه  |  متى اخر مره بكيت؟',
            'صراحه  |  تقيم حظك ؟ من عشره؟',
            'صراحه  |  هل تعتقد ان حظك سيئ؟',
            'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
            'صراحه  |  كلمة تود سماعها كل يوم؟',
            'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
            'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
            'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
            'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
            '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
            'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
            '‏صراحه | هل تحب عائلتك ام تكرههم؟',
            '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
            '‏صراحه  |  هل خجلت من نفسك من قبل؟',
            '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
            '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
            '‏صراحه  |  هل تعرضت إلى موقف مُ��رج جعلك تكره صاحبهُ؟',
             '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
            '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
            '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
            'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
            '‏صراحه  |  ما هو عمرك الحقيقي؟',
            '‏صراحه  |  ما اكثر شي ندمن عليه؟',
            'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
       ]
          client.on('message', message => {
			  	
        if (message.content.startsWith(prefix + 'صراحه')) {
            if(!message.channel.guild) return message.reply('** This command only for servers **');
         var client= new Discord.RichEmbed()
         .setTitle("Alpha")
         .setColor('RANDOM')
         .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
         .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                         .setTimestamp()
       
          message.channel.sendEmbed(client);
          message.react("??")
        }
       });
 
 
 client.on('message', message => {
  if (message.author.bot) return;


if(!message.channel.guild) return;

if (!points[message.author.id]) points[message.author.id] = {
	points: 0,
  wins: 0,
  loses: 0,
  };
if (message.content.startsWith(prefix + 'انمي')) {

const type = require('./anime.json');
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 10  ثواني لتخمن الانمي**').then(msg => {

   const embed = new Discord.RichEmbed()
 .setColor("RANDOM")
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
 .setThumbnail(message.author.avatarURL)     
 .addField(`**اسم بوتك**`,` **${item.type}**`)
 .setFooter(`ستكسب 15 نقطة`)

msg.channel.send(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 10000, errors: ['time'] })
        .then((collected) => {
		message.channel.send(`**${ collected.first().author} مبروك لقد كسبت 15 نقطة 
لمعرفة نقاطك الرجاء كتابة *point**` , '');
		console.log(`[Typing] ${collected.first().author} typed the word.`);
			let userData = points[collected.first().author.id];
userData.wins += 1 
userData.points += 15; 

          })

          .catch(collected => {
points[message.author.id].loses += 1;

            message.channel.send(`:x: ** الاجابه الصحيحه هي : __${item.answers}__حظ اوفر المرة القادمة ! لقد خسرت , انتهى الوقت**` , '');
			console.log('[Typing] Error: No one type the word.');

		})
	})
    })
points[message.author.id].game += 1; 


}
fs.writeFile("./point.jsmn",JSON.stringify(points), function(err){
    if (err) console.log(err);
  })
});


//points
client.on('message', message => {

if (!points[message.author.id]) points[message.author.id] = {
	points: 0,
  wins: 0,
  loses: 0,
  game: 0,

  };
  if (message.author.bot) return;


if(!message.channel.guild) return;
	let userData = points[message.author.id];

if (message.content.startsWith(prefix + 'point')) {
let pointss = userData.points
try {
                            pointss = shortNumber(pointss);
                        } catch (error) {
                            pointss = 0;
                        }
                        let wins = userData.wins
try {
                            wins = shortNumber(wins);
                        } catch (error) {
                            wins = 0;
                        }
                        let loses = userData.loses
try {
                            loses = shortNumber(loses);
                        } catch (error) {
                            loses  = 0;
                        }
                         let games = userData.game
try {
                            games = shortNumber(games);
                        } catch (error) {
                            games  = 0;
                        }
	let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
	.setColor('#000000')
	.setDescription(`**اسم بوتك

:white_check_mark: عدد الفوز : ${wins}
:x: عدد الخسارة: ${loses}
:label:التقاط: ${pointss}
:video_game: عدد مرات اللعب: ${games}**` , '');
	message.channel.sendEmbed(embed)
  }
  fs.writeFile("./point.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  })

});




client.login('توكن البوت')
//================================= الجيسون .. 

[
    {
	
	        "type": "من هو والد ناروتو ؟",

		    "answers": ["ميناتو"]
    },
    {

 

    
       
		        "type": "من هو شقيق ساسوكي",

		    "answers": ["ايتاشي"]
    },
    {

 
    

	
       
		        "type": "من هو قاتل اوروتشيمارو",

		    "answers": ["ساسوكي"]
    },
    {
 
    

	
       
		        "type": "من هو أول مدرب لناروتو ",

		    "answers": ["كاكاشي"]
    },
    {
 
    

	
       
		        "type": "من هو قاتل ساسوري ",

		    "answers": ["ساكورا"]
    },
    {
 
    

	
       
		        "type": "من قاتل هيدان ",

		    "answers": ["شيكمارو"]
    },
    {
 
    
     

	
       
		        "type": "من هو المتحكم بشخصية باين",

		    "answers": ["ناقتو"]
    },
    {
 

	
       
		        "type": "ما اسم مضيف وحش الذيول الثمانية ",

		    "answers": ["كيلربي"]
    },
    {
 

	
       
		
			        "type": " حركة قوية يجيدها كاكاشي و ساسكي ماهي اسم هذه الحركة",

		    "answers": ["تشيدوري"]
    },
    {
		
 
 
	 
       
		        "type": "ماذا يعني شعــار الوتشيها",

		    "answers": ["المروحة"]
    },
    {
 
 
	 
       
		        "type": "ماذا اعطى ايتاشي لساسكي عند موتة",

		    "answers": ["مانيكوشرنقان"]
    },
    {
 
 
	 
       
		        "type": "ماذا تدعى ساكرا في الانمي ناروتو ",

		    "answers": ["ساكراتشان"]
    },
    {
 
 
	 
       
		        "type": " ماأسماء فريق ساسكي الجديد المسمى هيبي",

		    "answers": ["جيوغو"]
    },
    {
 
    

       
		        "type": "كم عدد مضادات السم التي صنعتها ساكورا بقرية الرمل",

		    "answers": ["ثلاث"]
    },
    {
 

    

       
		        "type": "من هو العضو العاشر لمنظمة الأكاتسكي ",

		    "answers": ["توبي"]
    },
    {
 
    

       
		        "type": "-ما إسم الجسر الذي تمت عليه مهمة فريق كاكاشي الجديد",

		    "answers": ["تنكيشو"]
    },
    {
 

    

       
		        "type": "مااسم السيف الذي اخذه زورو من ثليلر بارك",

		    "answers": ["شوزوي"]
    },
    {
 
	
    

       
		        "type": "مااسم جزيرة روبين التي تدمرت",

		    "answers": ["أوهارا"]
    },
    {
 
     
		 
       
		        "type": "مااسم ام روبين التي ماتت",

		    "answers": ["أوليفا"]
    },
    {
 


     
		 
       
		        "type": "ماهو اسم حآرس امبل دآون ",

		    "answers": ["ماجيبلان"]
    },
    {
 

     
		 
       
		        "type": "ما مهنة ابو فرآنكي ",

		    "answers": ["قرصان"]
    },
    {
 
       
		   
       
		        "type": "كم عدد الاسبادا من هو اضعف منهم  ",

		    "answers": ["عشر"]
    },
    {
 
          
			  
       
		        "type": "مااسم الحقيقي لمستر  منظمة كروكودايل",

		    "answers": ["دازبونز"]
    },
    {
 
          
			  
       
		        "type": "ماذا تعني كلمة ناروتو  ",

		    "answers": ["الدوامه"]
    },
    {
 
              
				  
       
		        "type": "من هو البيجو الذي يمتلك أكبر كمية من التشاكرا",

		    "answers": ["الجيوبي"]
    },
    {
 
              
				  
       
		        "type": "ما اسم القائد الثاني لفريق كاكاشي ",

		    "answers": ["ياماتو"]
    },
    {
 
              
				  
       
		        "type": "ماذا كان اسم أوبيتو عندما كان عضوا خفيا في الأكاتسكي",

		    "answers": ["توبي"]
    },
    {
 
              
				  
       
		        "type": "ماإسم الأعين التي يمتلكها باين أو ناغاتو",

		    "answers": ["رينقان"]
    },
    {
 
              
				  
       
		        "type": "ماذا يستعمل الاسبادا رقم  في القتال ",

		    "answers": ["مسدسين"]
    },
    {
 
              
				  
       
		        "type": "ما هو اسم الاسباد رقم ",

		    "answers": ["ياميرايجلو"]
    },
    {
 
    
               
				   
       
		        "type": "من الذي كان يتنكر احيانا بهيئة كودو شينتشي",

		    "answers": ["كايتوكيد"]
    },
    {
 
                  
					  
       
		        "type": "من هو الرصاصة الفضية ",

		    "answers": ["أكاي"]
    },
    {
 
                             
								 
       
		        "type": "من الذي تنكر بشكل جاك السفاح عندما كان شينتشي و ران في امريكا ",

		    "answers": ["بلموت"]
    },
    {
 
                       
						   
       
		        "type": "ما هو الاسم الحقيقي لشيري (هايبرا)",

		    "answers": ["ميانوشيهو"]
    },
    {
 
                       
						   
       
		        "type": "ما هي هواية ران ( وهي تساعدها على القبض على اللصوص الهاربين او ما شابه )",

		    "answers": ["ياميرايجلو"]
    },
    {
 
                       
						   
       
		        "type": "ما إسم بطل ديث نوت  ",

		    "answers": ["لايتو"]
    },
    {
 
                       
						   
       
		        "type": "هل والد غوغو حي او ميت ",

		    "answers": ["ميت"]
    },
    {
 
                       
						   
       
		        "type": "اخر اتحاد بين عوعو وفيجيتا ما هو اسمهـ",

		    "answers": ["جوجيتا"]
    },
    {
 
                       
						   
       
		        "type": "تراكس يتحد مع من ",

		    "answers": ["جوتين"]
    },
    {
 
                       
						   
       
		        "type": "اول عدو لجهان من ",

		    "answers": ["راديتس"]
    },
    {
 
                       
						   
       
		        "type": "انمي فيه بنتوتة خجولة وحلوة وشعرها قصير ولونه كحلي زي كذا ولون عينها ابيض وهي نينجا",

		    "answers": ["هيناتا"]
    },
    {
 
                       
						   
       
		        "type": "ولد كان شاب ومجرمين حوله طفل صغير وهو محقق ذكي وبفضله ابو خطيبته سار محقق مشهور",

		    "answers": ["كونان"]
    },
    {
 
                       
						   
       
		        "type": "بنت حلوة شعرها اشقر وعينها اخضر مزرق(نيلي)زي كذا شي وقدرتها التحكم في العقل واستخدمته على وحدة وهي نينجة مين هي",

		    "answers": ["اينو"]
    },
    {
 
                       
						   
       
		        "type": "مين أغبى واحد في انمي القناص",

		    "answers": ["ليوريو"]
    },
    {
 
                       
						   
       
		        "type": "أي عائلة ينتمي كيلوا  ",

		    "answers": ["زولديك"]
    },
    {
 
                       
						   
       
		        "type": "من أول شخص تعرف عليه جون من أصدقائه ",

		    "answers": ["ليوريو"]
    },
    {
 
                       
						   
       
		        "type": "ما اسم زعيم عصابة العناكب ",

		    "answers": ["جيني"]
    },
    {
 
                       
						   
       
		        "type": "هل كورابيكا بنت أم ولد ",

		    "answers": ["ولد"]
    },
    {
 
          
                                                  
													  
       
		        "type": "ما هى اسماء ( ال ) الاخرى التى ظهرت فى الانمى",

		    "answers": ["ريوزاكي"]
    },
    {
 
    
                                                                             

																				
		        "type": "ما أسم مساعد ال",

		    "answers": ["واتارى"]
    },
    {

	
	
	
    }
]
 
 
 
 
client.on("message", function(message) {
	
   if(message.content.startsWith(prefix + "rps")) {
    let messageArgs = message.content.split(" ").slice(1).join(" ");
    let messageRPS = message.content.split(" ").slice(2).join(" ");
    let arrayRPS = ['**# - Rock**','**# - Paper**','**# - Scissors**'];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .addField("Rock","ًں‡·",true)
    .addField("Paper","ًں‡µ",true)
    .addField("Scissors","ًں‡¸",true)
    message.channel.send(RpsEmbed).then(msg => {
        msg.react(' ًں‡·')
        msg.react("ًں‡¸")
        msg.react("ًں‡µ")
.then(() => msg.react('ًں‡·'))
.then(() =>msg.react('ًں‡¸'))
.then(() => msg.react('ًں‡µ'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === 'ًں‡·' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === 'ًں‡¸' && user.id === message.author.id;
let reaction3Filter = (reaction, user) => reaction.emoji.name === 'ًں‡µ' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
	    
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 12000 });
reaction1.on("collect", r => {
        message.channel.send(result)
})
reaction2.on("collect", r => {
        message.channel.send(result)
})
reaction3.on("collect", r => {
        message.channel.send(result)
})

    })
}
});




client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 50,
  };
if (message.content.startsWith(prefix + 'عواصم')) { 
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./3wasem/3wasem.json'); 
const item = type[Math.floor(Math.random() * type.length)]; 
const filter = response => { 
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**اديك 15 ثاني�� لتوجد العاصمه الصحيحه**').then(msg => {
    let embed = new Discord.RichEmbed()
    .setColor('#000000')
    .setFooter("عواصم  | Legend GaMerZ Bot", 'https://cdn.discordapp.com/avatars/439427357175185408/3eb163b7656922ebc9e90653d50231f1.png?size=2048')
    .setDescription(`**اكتب عاصمه: ${item.type}**`)

    msg.channel.sendEmbed(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
        message.channel.send(`${collected.first().author} ✅ **الاجابه صحيحه**`); 

        console.log(`[Typing] ${collected.first().author} typed the word.`);
            let won = collected.first().author; 
            points[won.id].points++;
          })
          .catch(collected => { 
            message.channel.send(`:x: **لا يوجد احد كتب الاجابه الصحيحه**`);
            console.log(`[Typing] ماحد قال الاجابه `);
          })
        })
    })
}
});

//============================ الجيسون

[
    {
        "type": "العراق",
        "answers": ["بغداد"]
    },
    {
        "type": "مصر",
        "answers": ["القاهرة"]
    },
    {
        "type": "سوريا",
        "answers": ["دمشق"]
    },
    {
        "type": "السعودية",
        "answers": ["الرياض"]
    },
    {
        "type": "اليمن",
        "answers": ["صنعاء"]
    },
    {
        "type": "السودان",
        "answers": ["الخرطوم"]
    },
    {
        "type": "الاردن",
        "answers": ["عمان"]
    },
    {
        "type": "ليبيا",
        "answers": ["طرابلس"]
    },
    {
        "type": "البحرين",
        "answers": ["المنامة"]
    }
]





client.on('message', message => {
    if (!points[message.author.id]) points[message.author.id] = { 
        points: 0,
      };
    if (message.content.startsWith(prefix + 'ايموجي')) { 
        if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
    
    const type = require('./emoje/emoje.json'); 
    const item = type[Math.floor(Math.random() * type.length)]; 
    const filter = response => { 
        return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
    };
   message.channel.send({embed: new Discord.RichEmbed().setTitle('لديك ثانيه للاجابه بالجواب الصحيح').setThumbnail(`${item.type}`)}).then(function(m) {
             setTimeout(function() {
m.edit({embed: new Discord.RichEmbed().setTitle('لديك 15 ثانيه للاجابه بالجواب الصحيح').setThumbnail('https://images-ext-2.discordapp.net/external/lLOYcLfSQaNo_5Ex0I-gBD5lIW-FfRXO-W_-ZxSpYLA/https/i.imgur.com/iReHvIZ.png?width=100&height=100')})
             }, 1000)
            message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
            .then((collected) => {
            message.channel.send(`${collected.first().author} ✅ **لقد قمت بكتابة الايموجي بالوقت المناسب**`);
            console.log(`[Game] ${collected.first().author} Answered with the correct answer`);
                let won = collected.first().author;
                points[won.id].points++;
              })
              .catch(collected => { 
                message.channel.send(`:x: **لم يقم أحد بكتابة الايموجي بالوقت المناسب**`);
                console.log(`[Game] ماحد قال الاجابه`);
                    })
            })
    }
    });

//==================== JSON

[
    {
        "type": "https://emojipedia-us.s3.amazonaws.com/thumbs/72/twitter/134/face-with-look-of-triumph_1f624.png",
        "answers": ["ًںک¤"]
    },
    {
        "type": "https://emojipedia-us.s3.amazonaws.com/thumbs/120/twitter/134/baby_1f476.png",
        "answers": ["ًں‘¶"]
    },
    {
        "type": "https://emojipedia-us.s3.amazonaws.com/thumbs/120/twitter/134/japanese-goblin_1f47a.png",
        "answers": ["ًں‘؛"]
    },
    {
        "type": "https://emojipedia-us.s3.amazonaws.com/thumbs/120/twitter/134/see-no-evil-monkey_1f648.png",
        "answers": ["ًں™ˆ"]
    },
        {
        "type": "https://emojipedia-us.s3.amazonaws.com/thumbs/120/twitter/134/flag-for-yemen_1f1fe-1f1ea.png",
        "answers": ["ًں‡¾ًں‡ھ"]
    },
        {
        "type": "https://emojipedia-us.s3.amazonaws.com/thumbs/120/twitter/134/comet_2604.png",
        "answers": ["âک„ï¸ڈ"]
    },
        {
        "type": "https://emojipedia-us.s3.amazonaws.com/thumbs/120/twitter/134/trident-emblem_1f531.png",
        "answers": ["ًں”±"]
    },
        {
        "type": "https://emojipedia-us.s3.amazonaws.com/thumbs/120/twitter/134/fleur-de-lis_269c.png",
        "answers": ["âڑœï¸ڈ"]
    }
    
]





















client.login('NTY3Mzk3MjgzNDMyNDk3MTcy.XLS8CA.nfnASRKHwjmcHp9TzfnPcxX-XiY');
