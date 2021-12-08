 const constUL = document.getElementById('ulList');

constUL.addEventListener("click", (event) =>{
  if  (event.ctrlKey || event.metaKey) { 
  event.target.className = "background";
  }







  //  if  (event.ctrlKey || event.metaKey) { 
  //     let select = ul.querySelectorAll('.background');
  //       for(let elem of select) {
  //         elem.classList.add('background')
  // } 
  //   elem.classList.remove('background')
  // }
  
  // if (event.ctrlKey && event.shiftKey || event.metaKey && event.shiftKey) { 
  //   // event.shiftKey для Мака не уверен, что правильно написал. По моему так же как и для Винды должно быть
  //   let select = ul.querySelectorAll('.background');
  //     for(let elem of select) {
  //       elem.classList.remove('background')
  // } }
   });
 