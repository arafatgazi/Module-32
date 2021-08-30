// eta json placeholder theke copy kra 
// fetch mane oi link theke tule Ana ,then json e turn kre then console log kre 

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
// 1st button 
function loaddata(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    // link theke string golo stringify hisave ase 
    .then(response =>response.json())
    .then(data =>console.log(data))
}
// 2nd users 
function loadusers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(data=>console.log(data))
};

// 3rd button 
// add a function 
function loadpost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response =>response.json())
    .then(data=>getvalue(data))
}
// genarally kono function kono jagai kaj krate parameter use kra drker. 
function getvalue(users){
    const ul=document.getElementById('users');
    // console.log(users);
  for(const user of users){
    //   console.log(user.id);
      const li=document.createElement('li');
      li.innerText=`title:  $(user.title)`;
      ul.appendChild(li)
  }

};

// 4 th button 
function loadcomment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response =>response.json())
    .then(data => loading(data))
}
function loading(data)
{
    const ul1=document.getElementById('comment');
    for(const user of data){
        const li=document.createElement('li')
        li.innerText=user.name;
        ul1.appendChild(li);
    }
};