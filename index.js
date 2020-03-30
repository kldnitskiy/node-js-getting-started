//const express = require('express')
//const path = require('path')

//
//express()
//  .use(express.static(path.join(__dirname, 'public')))
//  .set('views', path.join(__dirname, 'views'))
//  .set('view engine', 'ejs')
//  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

const express = require('express')
const {Botact} = require('botact')
const bodyParser = require('body-parser')
const server = express()
const PORT = process.env.PORT || 5000
const bot = new Botact({
    token: '91c66aec637d3f1ea0615132ea568793ffc55b18c0dd878c386584ee226bf7264f669f30cc61986c8e3e2',
    confirmation: 'f5f07863'
})

bot.on(function (user_message){
    console.log(user_message.body)
    user_message.reply('Привет')
})
bot.event('group_join', ({ reply }) => {
  reply('Большое спасибо, что вступил в группу Мегабаттла! ')
})
server.use(bodyParser.json())

server.post('/', bot.listen)

server.get('/', (request, response) => {
    request.header('Content-Type', 'application/json')
    response.send('f5f07863')
    
})

server.listen(PORT)
