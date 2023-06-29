const express = require('express');

// 创建应用对象
const app = express();


app.all('/jQuer', (request, response) => {

    const i =[
        {
            "name": "STORY OF SEASONS: Friends of Mineral Town",
            "intro": "Marvelous Inc. | XSEED Games",
            "discount": "-30%",
            "price": "¥252",
            "Price": "¥176.40"
        },
        {
            "name": "Twin Mirror",
            "intro": "DONTNOD Entertainment",
            "discount": "-50%",
            "price": "¥189",
            "Price": "¥94.50"
        },
        {
            "name": "A Total War Saga: TROY",
            "intro": "CREATIVE ASSEMBLY | SEGA",
            "discount": "-25%",
            "price": "¥223",
            "Price": "¥167.25"
        },
        {
            "name": "while True: learn()",
            "intro": "Luden.io | Nival",
            "discount": "-100%",
            "price": "¥39",
            "Price": "免费"
        },
        {
            "name": "Mechajammer",
            "intro": "Whalenought Studios | Modern Wolf",
            "discount": "-10%",
            "price": "¥75",
            "Price": "¥67.50"
        },
        {
            "name": "Bud Spencer and Terence Hill - Slaps and Beans",
            "intro": "Trinity Team | Buddy Productions GmbH",
            "discount": "-75%",
            "price": "¥36",
            "Price": "¥9"
        }
    ]

    let str=JSON.stringify(i);
    let cb = request.query.callback;

    response.send(cb+'('+str+');');
});



app.listen(8000, () => {
    console.log("服务已经启动，8000 端口监听中。");
})