console.log('test');

var to_do_list = [{
  content: 'THE SECOND THING TO DO TODAY',
  tomo_number: 0,
  time: '25:00',
  isDone: false
}, {
  content: 'THE THIRD THING TO DO TODAY',
  tomo_number: 0,
  time: '25:00',
  isDone: false
}, {
  content: 'THE FOURTH THING TO DO TODAY',
  tomo_number: 0,
  time: '25:00',
  isDone: false
}]; //代辦清單

showList(0); //一開始初始 list

// 新增 list 元素
document.getElementById('add-list-btn').onclick = function () {
  var list_content = document.getElementById('mission-input').value; //取到代辦清單得值
  
  //new 一筆物件
  to_do_list.push({
    content: list_content,
    tomo_number: 0,
    time: '25:00',
    isDone: false
  })
  
  var ul_child_num = document.querySelector('.list').childElementCount; // 得目前有幾個待辦事項

  //更新清單
  showList(ul_child_num-2);
};

// 清單更新函數
function showList(initial){

  for (var i = initial; i < to_do_list.length; i++) {
    var node_ul = document.querySelector('.list');

    var node_li = document.createElement('li');
    var check_circle = createDOM('div', 'check-circle small');
    var todo_box = createDOM('div','todo-box');
    todo_box.appendChild(createDOM('h3', '', to_do_list[i].content));
    todo_box.appendChild(createDOM('ul', 'toma-list'));
    var btn = createDOM('div','btn btn-play-small');
    btn.appendChild(createDOM('i', 'material-icons', 'play_circle_outline'));
    var number = createDOM('div', 'number-box', to_do_list[i].time);

    node_li.appendChild(check_circle);
    node_li.appendChild(todo_box);
    node_li.appendChild(btn);
    node_li.appendChild(number);

    if(initial!=0){
      node_ul.insertBefore(node_li, node_ul.childNodes[2]);
    }else{
      node_ul.insertBefore(node_li, document.querySelector('.btn-more'));
    }
  }
}

// 新增 DOM
function createDOM(node,class_name,text){
  var node_name = document.createElement(node);
  node_name.setAttribute('class', class_name);
  node_name.textContent = text;
  return node_name;
}




