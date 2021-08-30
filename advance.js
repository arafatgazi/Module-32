function loadalbums(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res=>res.json())
    .then(data =>display(data))
}
// nicher eta deoar karon jno display kre without clicking 
loadalbums();
function display(albums){
    const load=document.getElementById('display');
    for(const album of albums){
        const li=document.createElement('li')
        li.innerText=album.title
        load.appendChild(li);
    }

}