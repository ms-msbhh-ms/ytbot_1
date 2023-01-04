const {Telegraf} = require("telegraf");
const validUrl = require('valid-url');
const request = require('request');

if (validUrl.isUri("h")){
  
} else {
    console.log('Not a URI');
}
const yt_bot = new Telegraf("5806161953:AAEtaBM8BNPKpKEAWbN4qEQCXfai1b8zeAw")

yt_bot.start((ctx)=>{
    ctx.reply("স্বাগতম আপনাকে 🤓 এখন আপনি এখানে লিঙ্ক দিলে ইউটিউব লিঙ্ক হবে যাবে। তারপর শুধু কোবাইবেন🤓🤓 লিঙ্ক আপডেট  সবার আগে  পাওয়ার জন্য আমার ইউটিউব চ্যানেলটি সাবস্ক্রাইব করুন। https://www.youtube.com/@learningjourneybd")
})
yt_bot.on("text",(ctx)=>{
    console.log(ctx.message.text)
    let yturl = `https://www.youtube.com/redirect?q=${ctx.message.text}&html_redirect=1&redir_token=QUFFLUhqbkc5bWlPT0wtUHVUVHJNb0l2NDRUYndOVWhMZ3xBQ3Jtc0ttOUM2Q21Kd3h6R19MTkhJaHhIeUVBR3lINzVQZ2ExaS1teHBMek5sNk5OVU81bTl1MlBuSW9WY0x2LUdQdDRkWmk1eVZWanZVWTF5cHE1QUItcWx5UHpzN09WRmtncU4zdk9FVGhDdTNndlg5MEIzMA`
    
    if (validUrl.isUri(ctx.message.text)){
    
     request({
        url: 'http://localhost:5051/noyon',
        method: 'POST',
        json: {mes: 'heydude'}
      }, function(error, response, body){
        
        ctx.reply(response.body.messge)
      });
    } else {
        ctx.reply('এটা কোন লিঙ্ক নাহ।');
    }
})
yt_bot.launch()

