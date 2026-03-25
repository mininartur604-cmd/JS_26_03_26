//Задание 1
let inventory= [['Бананы',10],['Яблочки',154],['самовар', 0]]
for (i in inventory)
{
    if (inventory[i][1]>0) 
        {
            console.log('У вас есть ', inventory[i][0], 'шт. Предмета ', inventory[i][1])
        }
}
//Задание 2 
let shopitems = [['Бананы',10],['Яблочки',154],['самовар', 1]]
for (i of inventory)
{
    if (i[1]<60) 
        {
            console.log('У вас есть ', i[0], 'Цена' , i[1])
        }
}
//Задание 3 
sum = 0
for (i =0; i<shopitems.length;i++)
{
    console.log(shopitems[i][0],shopitems[i][1] )
    if(i%2 ==0)
    {
        sum += shopitems[i][1]
    }
}
console.log('Сумма всех товаров с чётным индексом ',sum)
//Задание 4
rnd = 0
while (rnd < 6)
    {
        rnd = Math.floor(Math.random() * (6 - 1 + 1)) + 1
        console.log('Ввше число ',rnd)
    }
    console.log('ЕЕЕЕЕЕЕЕЕЕЕЕЕЕ выпало ',rnd)
//Задание 5
let balanse = 100000
let item
let count = 0
while (balanse > 0)
    {   
        console.log( 'Балланс', balanse)
        for (i in shopitems)
        {
            console.log( 'Товар',shopitems[i][0],'Цена',shopitems[i][1])
        }
        
        item = prompt('Выберите предмет ')
        count = prompt('Сколько ')
        for (i in shopitems)
        {
            if (shopitems[i][0] == item)
            {
                    balanse -= shopitems[i][1]*count
            }
        }
    }
    console.log( 'Балланc всё')
    