import { Router } from 'express'
const bot = Router()

bot.post('/respond', (req, res) => {
	res.json({status: 'success', response: { statement: 'This is a dummy response'}})
})

export default bot
