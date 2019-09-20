const fill = document.querySelector('.fill')
console.log(fill)
const empties = document.querySelectorAll('.empty')

for(const empty in empties) {
    
    let e =empties[empty];
    console.log(e)
    e.addEventListener('dragover', dragOver)
    e.addEventListener('dragenter', dragEnter)
    e.addEventListener('dragleave', dragLeave)
    e.addEventListener('drop', dragDrop)
}

//Fill Listeners

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

function dragStart() {
    this.className += ' hold'
    setTimeout(()=> {this.className = 'invisible'}, 0)
}

function dragEnd() {
    this.className = 'fill'
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
}

function dragLeave() {
    this.className = 'empty'   
}

function dragDrop(e) {
    this.className = 'empty'
    this.append(fill)
}