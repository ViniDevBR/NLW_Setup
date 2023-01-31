//FASTIFY
import Fastify from 'fastify'
import fastifyCors from '@fastify/cors'
//ROUTES
import { appRouter } from './router'


const app = Fastify()
app.register(fastifyCors)
app.register(appRouter)

const port = 3333
app.listen({
  port
})
  .then(() => console.log('SERVER RODANDO MONSTRÃO, PORTA --->', port))
