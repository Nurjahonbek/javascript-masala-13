// 1)Vazifa: HTML sahifasida bir nechta matn yozilgan bo‘lsin. "Matn rangini o'zgartirish" tugmasi bosilganda, barcha matnning rangi tasodifiy rangga o‘zgartirilsin

// const getbtn = document.getElementById('btn')
// const color1 = document.querySelectorAll('.matn')

// getbtn.addEventListener('click', function(){
//     color1.forEach(matn =>{
//         matn.style.color = randomx()
//     })
// })

// function randomx (){
//     const r = Math.floor(Math.random() * 256)
//     const g = Math.floor(Math.random() * 256)
//     const b = Math.floor(Math.random() * 256)
//     return `rgb(${r}, ${g}, ${b})`
// }

// 2)Vazifa: Foydalanuvchi input maydoniga matn yozadi. "Nusxa olish" tugmasi bosilganda, inputdagi qiymat clipboardga nusxalanadi va sahifada xabar ("Matn nusxalandi!") chiqariladi

// const message = document.getElementById('message')
// const text = document.getElementById('text')
// const button = document.getElementById('btn')
// button.addEventListener('click', function(){
//     if(text.value){
//         navigator.clipboard.writeText(text.value)
//         message.innerHTML = 'xabar saqlandi'
//         setTimeout(() => {
//             message.innerHTML = ''
//         }, 1000);
//     }
// })

// 3)Vazifa: Sahifada matn yozilgan bo‘lsin. Foydalanuvchi qidiruv maydoniga so‘z kiritadi va "Qidirish" tugmasini bosadi. Sahifada shu so‘z bo‘lsa, uning orqa foni sariq rangga bo‘yaladi.

// const message = document.getElementById('message')
// const text = document.getElementById('text')
// const btn = document.getElementById('btn')
// btn.addEventListener('click', function(){
//     if(text.value){
//         let textmessage = message.innerHTML.trim()
//         textmessage = textmessage.replaceAll(text.value, `<span style = "color:red">${text.value}</span>`)
//         message.innerHTML = textmessage
//     }
// })


// 4)Vazifa: Sahifada bir nechta paragraflar bo‘lsin. "Yashirish" tugmasi bosilganda, barcha paragraflar yashiriladi. "Ko‘rsatish" tugmasi bosilganda, ular qayta ko‘rinadigan bo‘lsin.

// const list = document.querySelectorAll('.paragraph')
// const hidebtn = document.getElementById('hidebtn')
// const btn = document.getElementById('btn')
// hidebtn.addEventListener('click', function(){
//     list.forEach(paragraph =>{
//         paragraph.style.display = 'none'  
//     })
// })

// btn.addEventListener('click', function(){
//     list.forEach(paragraph =>{
//         paragraph.style.display = 'block'
//     })
// })

// 5)Vazifa: Sahifada bir nechta tugma joylashtirilgan bo‘lsin. Har bir tugma bosilganda butun sahifaning fon rangi o‘zgaradi. Tugmalar har xil ranglar uchun javob beradi (masalan: qizil, yashil, ko‘k).

// const btn = document.querySelectorAll('.color-btn')
// btn.forEach(value =>{
//     value.addEventListener('click', function(){
//         const color = value.getAttribute('colors')
//         document.body.style.background = color
//     })
// })

// 6)Vazifa: Sahifada matnlar yozilgan bo‘lsin. Foydalanuvchi matn ustiga bosganda uning shrift o‘lchami kattalashadi.

// const list = document.querySelectorAll('.text')
// list.forEach(value =>{
//     value.style.cursor = 'pointer'
//     value.addEventListener('click', function(){
//         const size = window.getComputedStyle(value).fontSize
//         const size1 = parseFloat(size) * 1.2 + 'px'
//         value.style.fontSize = size1
//     })  
// })

// 7)Vazifa: Sahifada bir input maydoni va bir matn ko‘rsatiladigan bo‘sh joy bo‘lsin. Foydalanuvchi inputga nimadir yozganda, yozilgan matn real vaqt rejimida bo‘sh joyga ko‘chib ko‘rsatiladi.

// const input = document.querySelector('#input')
// const display = document.querySelector('#display')
// input.addEventListener('input', function(){
//     display.textContent = input.value
// })

// 8)Vazifa: Foydalanuvchiga parol maydoni va "Ko‘rsatish/Yashirish" tugmasi ko‘rsatiladi. Tugma bosilganda parol ko‘rinadigan yoki yashirin holatga o‘tadi.

// const list = document.getElementById('password')
// const addbtn = document.getElementById('btn')
// addbtn.addEventListener('click', function(){
//     if(list.type == 'password'){
//         list.type = 'text'
//         addbtn.textContent = 'yashirish' 
//     }else{
//         list.type = 'password'
//         addbtn.textContent = 'korsat'
//     }
// })

// 9)Vazifa: Sahifada bitta kvadrat shakl bo‘lsin. Foydalanuvchi kvadratni yuqoriga, pastga, chapga yoki o‘ngga ko‘chirish uchun tugmalardan foydalanadi.

// const box = document.querySelector('#box')
// const topp = document.querySelector('#top')
// const bottomm = document.querySelector('#bottom')
// const leftt = document.querySelector('#left')
// const rightt = document.querySelector('#right')

// let top1 = 0
// let left1 = 0

// topp.addEventListener('click', function(){
//     top1 -= 10
//     box.style.marginTop = top1 + 'px'
// })

// bottomm.addEventListener('click', function(){
//     top1 += 10
//     box.style.marginTop = top1 + 'px'
// })
// leftt.addEventListener('click', function(){
//     left1 -= 10
//     box.style.marginLeft = left1 + 'px'
// })

// rightt.addEventListener('click', function(){
//     left1 += 10
//     box.style.marginLeft = left1 + 'px'
// })

// 11)Vazifa: Sahifada bir nechta paragraflar bo‘lsin. Har bir paragraf yonida "Yashirish" tugmasi bo‘lsin. Tugma bosilganda faqat o‘sha paragraf yashiriladi.

// const hidden = document.querySelectorAll('.btn')
// hidden.forEach(value =>{
//     value.addEventListener('click', function(){
//         const list = value.closest('p')
//         list.style.display = 'none'
//     })
// })

// 12)Vazifa: Sahifada bir nechta paragraflar yozilgan bo‘lsin. Foydalanuvchi har bir paragrafga bosganda, o‘sha matn "Salom, dunyo!" ga almashtiriladi.

// const list = document.querySelectorAll('.text')
// list.forEach(value =>{
//     value.style.cursor = 'pointer'
//     value.addEventListener('click', function(){
//         value.innerText = 'Salom dunyo'
//     })
// })
