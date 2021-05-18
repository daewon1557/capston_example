const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  icons.classList.toggle('active');
});

checkbox.setDraggable(true);

var openWin;
      
var openers = input.value =opener.document.parentText.value;

function openChild()
{
    // window.name = "부모창 이름"; 
    window.name = "parentForm";
    // window.open("open할 window", "자식창 이름", "팝업창 옵션");
    openWin = window.open("/prse",
            "childForm", "width=750, height=750, resizable = no, scrollbars = no");    
    openWin.document.getElementById("cInput").value = document.getElementById("pInput").value;
}

function setChildText(){
    openWin.document.getElementById("cInput").value = document.getElementById("pInput").value;
}

var value, sname, item, i;

value = document.getElementById("value").value.toUpperCase();
item = document.getElementsByClassName("item");

for(i=0;i<item.length;i++){
  sname = item[i].getElementsByClassName("name");
  if(sname[0].innerHTML.toUpperCase().indexOf(value) > -1){
    item[i].style.display = "flex";
  }else{
    item[i].style.display = "none";
  }
}



function openCloseToc() {
if(document.getElementById('toc-content').style.display === 'block') {
document.getElementById('toc-content').style.display = 'none';
document.getElementById('toc-toggle').textContent = '보이기';
} else {
document.getElementById('toc-content').style.display = 'block';
document.getElementById('toc-toggle').textContent = '숨기기';
}
}