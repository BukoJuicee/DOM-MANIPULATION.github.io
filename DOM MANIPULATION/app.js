function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
  const inputtdl = document.querySelector('.textarea')
  const buttontdl = document.querySelector('.buttoninput')
  const listtdl = document.querySelector('.todolist')
  
  function clickButton(e) {
      e.preventDefault()
      addTodo()
  }
  
  // ADDING TO DO LIST
  function addTodo() {
      const itemall = document.createElement('div')
      itemall.classList.add('itemall')
  
      const item = document.createElement('p')
      item.classList.add('item')
      item.innerText = inputtdl.value
      itemall.appendChild(item)
  
      if (inputtdl.value === '') {
        alert("INVALID, INPUT A TEXT!");
      }
      else {
      const checkbutton = document.createElement("button")
      checkbutton.innerHTML = '<i class="fa-solid fa-check"></i>'
      checkbutton.classList.add("check-button")
      itemall.appendChild(checkbutton)
  
      const trashbutton = document.createElement("button")
      trashbutton.innerHTML = '<i class="fa-solid fa-trash"></i>'
      trashbutton.classList.add("trash-button")
      itemall.appendChild(trashbutton)
  
      listtdl.appendChild(itemall)
      inputtdl.value = ''
  }
}
  // CHECKING AND DELETE TO DO LIST 
  function okdel(e) {
      const item = e.target
  
      // check
      if (item.classList[0] === 'check-button') {
          const todolist = item.parentElement
          todolist.classList.toggle('checklist')
      }
  
      // delete
      if (item.classList[0] === 'trash-button') {
          const todolist = item.parentElement
          todolist.remove()
      }
  }
  
  buttontdl.addEventListener('click', clickButton)
  listtdl.addEventListener('click', okdel)