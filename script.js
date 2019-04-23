var elementObject = { tagName: "", tagText: "", tagCount: "" };

var strs = document.getElementsByTagName('p');
for (var i = 0; i < strs.length; )  //проход по списку всех p узлов
  {
    elementObject.tagName = strs[i].textContent.match(/element: ([^0-9]\w.+?);/);  //начало не с цифры
    elementObject.tagText = strs[i].textContent.match(/text: (.+?);/);  //любой текст
    elementObject.tagCount = strs[i].textContent.match(/count: (\d+);/);  //только цифры
    
    if (elementObject.tagName == null  ||  elementObject.tagText == null  ||  elementObject.tagCount == null)  //если некорректные данные
      { i++; continue; }
    
    var element = document.createElement(elementObject.tagName[1].toLowerCase());  //создание узла
    element.textContent = elementObject.tagText[1];  //содержимое узла
    document.body.appendChild(element);  //добавление узла в документ
    
    for (var j = 0; j < elementObject.tagCount[1] - 1; j++)  //добавление данного числа копий узла
      {
        var repeatElement = element.cloneNode(true);
        document.body.appendChild(repeatElement);
      }
    document.body.removeChild(strs[i]);
  }
console.log("Tags are ready.");