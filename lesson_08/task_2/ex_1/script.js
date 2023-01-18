let form = document.querySelector('form ');
form.removeAttribute('novalidate');

let name=form.elements.name;
let lastname=form.elements.lastname;

let age=form.elements.age;
age.setAttribute('type', 'number')

let message=form.elements.message;
message.setAttribute('minlength',12)
let minlength=message.attributes.minLength.value;
message.setAttribute('required','')

let inputs=[name,lastname,age,message]
let input=document.querySelector('input')

let error=document.createElement('span')
error.className = "error";
form.append(error)
error.innerHTML = 'Пожалуйста, заполните обязательные поля'


form.addEventListener('click', (e) => {
    error.style.display='none';
    inputs.forEach(input=>{
        if(input.value===''){
            e.target.classList.add('invalid');
            error.style.display='block';
        } else{
            e.target.classList.remove('invalid');
            return true
        }
    })

})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    serializeForm(form)

})

function serializeForm(form) {
    const{name,lastname,age,message}=form.elements
    let inputs=[name,lastname,age,message]
    let data=Array()
    inputs.forEach((element) => {
            const { name, value } = element
            data.push({ name, value })
        })
    console.log(data)
    alert(`Спасибо ${name.value} ${lastname.value} , Ваше сообщение принято!`)
    inputs.forEach((element=>{
        element.value=''
    }))
}

let error2=document.createElement('span')
error2.innerHTML = 'Минимальное количество символов-12'
form.append(error2)
error2.style.color='red'
error2.style.display='none'

message.onblur=function (){
    let length = message.value.length
    if(length<minlength){
        message.classList.add('invalid');
        error2.style.display='inline-block'
    } else {
        message.classList.remove('invalid');
        error2.style.display='none'
    }
}

message.addEventListener('blur', (e) => {
    let length = message.value.length
    if(length<minlength){
       e.target.classList.add('invalid');
        error2.style.display='inline-block'
    } else {
       e.target.classList.remove('invalid');
        error2.style.display='none'
    }
})


