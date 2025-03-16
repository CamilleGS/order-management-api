const express = require('express')
const uuid = require('uuid')
const app = express()
const port = 3000
app.use(express.json())


const orders = []

const checkMethod = (request, response, next) =>{


    const consolemsg =`${request.method} ${request.path}`


    console.log(consolemsg)
    next()
}

const checkOrderId = (request, response, next) =>{
    const {id} = request.params
    const index = orders.findIndex(order => order.id === id)

    if(index < 0){
        return response.status(404).json({message: "order not found"})
    }

    request.orderIndex = index
    request.orderId = id

    next()
    
}

//mostra todos os pedidos no momento
app.get('/order',checkMethod, (request, response) =>{
    return response.json(orders)
}) //funcionado

//adiciona um pedido no order
app.post('/order',checkMethod,(request, response)=>{
    const {demand, clientName, price} = request.body
    const status = 'in preparation'

    const order = {id:uuid.v4(), demand, clientName,price, status}

    orders.push(order)

    return response.status(201).json(order) // aqui tem que colocar order pois é só pra reportornar o pedido em si e não um array com varios pedidos
})

//upadate em um ou vários itens do pedido
app.put('/order/:id',checkOrderId,checkMethod,(request, response)=>{
    const {demand, clientName, price, status} = request.body
    const index = request.orderIndex
    const id = request.orderId //aqui não pode por entre chaves se não não aparece na response do insomina

    //poe tudo em uma nova variavel
    const upadateOrder = {id, demand, clientName, price, status}
    


    orders[index] = upadateOrder
    return response.json(upadateOrder)

})

app.delete('/order/:id',checkOrderId,checkMethod, (request, response)=>{
    
    const index = request.orderIndex

    orders.splice(index, 1)
    return response.status(204).json()

})


app.patch('/order/:id',checkOrderId,checkMethod, (request, response)=>{

   
    const index = request.orderIndex

    orders[index].status = "Done"

    return response.json(orders[index])

})



app.listen(port, () =>{
    console.log("My sever started 😍🥶 on the port: " +port)
})