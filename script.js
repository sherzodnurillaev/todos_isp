let url = "http://localhost:3001/"

axios.get(`${url}todos`)

.then(data => reload(data.data))
.catch(error => console.log(error))

let grid = document.querySelector('.grid')

function reload(data) {

    data.forEach(item => {
        const box = document.createElement('div')
        let txt = document.createElement('h1')
        let span = document.createElement('span')
    
        box.classList.add('box')
        txt.innerText = item.title

        grid.append(box)
        box.append(txt, span)

        if (item.status) {
            span.innerHTML = 'Готово'
            span.style.color = 'blue'
        } else {
            span.innerHTML = 'Не выполнено'
        }  

        span.onclick = () => {
            axios.patch(`${url}todos/${item.id}`, { status: true })
                .then(res => console.log(res.data))
                .catch(error => console.error(error))
        }
    });
}
