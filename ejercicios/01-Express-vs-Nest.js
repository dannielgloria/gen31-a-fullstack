// Este codigo es un ejemplo de como se desarrollaria en express una aplicacion o 
// api super sencilla en express

const express = require('express')
const app = express()

app.get('/' (req, resp) = {
    res.send('Hola mundo cruel!')
    }
)

app.listen(3000, () =>{
    console.log('Este server esta mas vivo que nada')
}
)

// Este es el codigo ejemplo de como desarrollaria en express una aplicacion o 
// api super sencilla en Nest

import { Controller, Get } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

@Controller()
export class AppController{
    @Get
    getSaludo(): string {
        return 'Hola amiges'
    }
}

@Module({
    controller: [AppController],
})

export class AppModule{}

async function inicio() {
    const app = await NestFactory.create(AppModule)
    await app.listen(3001)
    console.log('Este server esta mas vivo que nada')
}

inicio();