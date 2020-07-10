var restaurant1 = [250000, 710000, 125000]

var tips = [10, 15, 20]



function Pembayaran1(restaurant1) {
    if (restaurant1 > 500000) {
        console.log(`Tagihan : ${restaurant1}\nTips    : ${(restaurant1 * 0.1)}\nTotal tagihan : ${restaurant1 + (restaurant1 * 0.1)}`)
    } else if (restaurant1 >= 250000 && restaurant1 <= 500000) {
        console.log(`Tagihan : ${restaurant1}\nTips    : ${(restaurant1 * 0.15)}\nTotal tagihan : ${restaurant1 + (restaurant1 * 0.15)}`)
    } else if (restaurant1 < 250000) {
        console.log(`Tagihan : ${restaurant1}\nTips    : ${(restaurant1 * 0.2)}\nTotal tagihan : ${restaurant1 + (restaurant1 * 0.2)}`)
    }
    console.log("===================")
}
Pembayaran1(250000)


function Pembayaran2(restaurant2) {
    if (restaurant2 > 500000) {
        console.log(`Tagihan : ${restaurant2}\nTips    : ${(restaurant2 * 0.1)}\nTotal tagihan : ${restaurant2 + (restaurant2 * 0.1)}`)
    } else if (restaurant2 >= 250000 && restaurant2 <= 500000) {
        console.log(`Tagihan : ${restaurant2}\nTips    : ${(restaurant2 * 0.15)}\nTotal tagihan : ${restaurant2 + (restaurant2 * 0.15)}`)
    } else if (restaurant2 < 250000) {
        console.log(`Tagihan : ${restaurant2}\nTips    : ${(restaurant2 * 0.2)}\nTotal tagihan : ${restaurant2 + (restaurant2 * 0.2)}`)
    }
    console.log("===================")
}
Pembayaran2(710000)



function Pembayaran3(restaurant3) {
    if (restaurant3 > 500000) {
        console.log(`Tagihan : ${restaurant3}\nTips    : ${(restaurant3 * 0.1)}\nTotal tagihan : ${restaurant3 + (restaurant3 * 0.1)}`)
    } else if (restaurant3 >= 250000 && restaurant3 <= 500000) {
        console.log(`Tagihan : ${restaurant3}\nTips    : ${(restaurant3 * 0.15)}\nTotal tagihan : ${restaurant3 + (restaurant3 * 0.15)}`)
    } else if (restaurant3 < 250000) {
        console.log(`Tagihan : ${restaurant3}\nTips    : ${(restaurant3 * 0.2)}\nTotal tagihan : ${restaurant3 + (restaurant3 * 0.2)}`)
    }
    console.log("===================")
}

Pembayaran3(125000)


// function Pembayaran(restaurant1){
//     let arrPayment = []
//     for (let i = 0; i < restaurant1.length;i++){
//         arrPayment.push({
//             Tagihan : restaurant1[i],
//             Tips : arrTips[i](restaurant1[i]),
//             TotalTagihan : restaurant1[i]+arrTips[i](restaurant1[i])
//         })
//     }
//     console.log(arrPayment)
// }

// function countTips(tips) {
//     let arrTips =[]
//     for (let i = 0; i < tips.length;i++){
//         arrTips.push(newTips = tips[i] / 100)
//     }
//     console.log(arrTips)
//     return arrTips  
// }Pembayaran(restaurant1)
// countTips(tips)
