var elementObject = { tagName: "", tagText: "", tagCount: "" };

var strs = document.getElementsByTagName('p');
for (var i = 0; i < strs.length; i++)  //проход по списку всех p узлов
  {
    var finded_str = strs[i].textContent.match(/element: ([^0-9]\w.+?); text: (.+?); count: (\d+);/g);  //все подходящие значения
    if (finded_str == null)  //если некорректные данные
      { continue; }
    
    for (var k = 0; k < finded_str.length; k++)  //проход по списку всех значений
      {
        elementObject.tagName = finded_str[k].match(/element: ([^0-9]\w.+?);/);  //начало не с цифры
        elementObject.tagText = finded_str[k].match(/text: (.+?);/);  //любой текст
        elementObject.tagCount = finded_str[k].match(/count: (\d+);/);  //только цифры
        var newstr = strs[i].textContent.replace(finded_str[k], '');  //очистка тега p от добавленных данных
        strs[i].textContent = newstr;
        
        var element = document.createElement(elementObject.tagName[1].toLowerCase());  //создание узла
        element.textContent = elementObject.tagText[1];  //содержимое узла
        document.body.appendChild(element);  //добавление узла в документ
        
        for (var j = 0; j < elementObject.tagCount[1] - 1; j++)  //добавление данного числа копий узла
          {
            var repeatElement = element.cloneNode(true);
            document.body.appendChild(repeatElement);
          }
      }
  }
console.log("Tags are ready.");