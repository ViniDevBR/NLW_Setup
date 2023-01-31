import Fastify from 'fastify'
import fastifyCors from '@fastify/cors'
import { listenHabits } from './useCases/listenHabits'


const app = Fastify()
app.register(fastifyCors)

const port = 3333
app.listen({
  port
})
  .then(() => console.log('SERVER RODANDO MONSTRÃO, PORTA --->', port))

app.get('/habits' , listenHabits)