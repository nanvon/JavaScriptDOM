// addLoadEvent(firstFunction);
// addLoadEvent(secondFunction);

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != "function") {
    window.onload = func;
  } else {
    window.onload = function () {
      oldonload();
      func();
    };
  }
}

function insertAfter(newElement, targetElement) {
  var parent = targetElement.parentNode;
  if (parent.lastChild == targetElement) {
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement, targetElement.nextSibling);
  }
}

function showPic(whichpic) {
  if (!document.getElementById("placeholder")) return false;
  var source = whichpic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  if (placeholder.nodeName != "IMG") return false;
  placeholder.setAttribute("src", source);

  if (document.getElementById("description")) {
    var text = whichpic.getAttribute("title")
      ? whichpic.getAttribute("title")
      : ";";
    var description = document.getElementById("description");
    if (description.firstChild.nodeType == 3) {
      description.firstChild.nodeValue = text;
    }
  }
  return true;

  // alert(description.childNodes[0].nodeValue);
  // alert(description.firstChild.nodeValue);
}

addLoadEvent(prepareGallery);
function prepareGallery() {
  var gallery = document.getElementById("imagegallery");
  var links = gallery.getElementsByTagName("a");
  for (var i = 0; i < links.length; i++) {
    links[i].onclick = function () {
      return !showPic(this);
    };
    links[i].onkeypress = links[i].onclick;
  }
}

function preparePlaceholder() {
  if(!document.createElement) return false;
  if(!document.getElementById) return false;
  if(!document.getElementById("testdiv")) return false;
  if(!document.createTextNode) return false;

  var para = document.createElement("p");
  var testdiv = document.getElementById("testdiv");
  testdiv.appendChild(para);
  var txt = document.createTextNode("Hello world!");
  para.appendChild(txt);

  var fieldset = document.createElement("fieldset");
  var legend = document.createElement("legend");
  var img = document.createElement("img");
  var div = document.createElement("div");
  var body = document.getElementsByTagName("body");

  var shebei = document.createTextNode("设备");
  var choose = document.createTextNode("choose an image");
  var gallery = document.getElementById("imagegallery");

  img.setAttribute("id", "placeholder");
  img.setAttribute("alt", "设备");
  img.setAttribute("src", "image/设备.png");

  div.setAttribute("id", "description");

  legend.appendChild(shebei);
  div.appendChild(choose);
  fieldset.appendChild(legend);
  fieldset.appendChild(img);
  fieldset.appendChild(div);

  // body[0].appendChild(fieldset);
  // gallery.parentNode.insertBefore(fieldset,gallery);
  insertAfter(fieldset, gallery);
}

// function countBodyChildren() {
//   var body_element = document.getElementsByTagName("body")[0];
//   // alert(body_element.childNodes.length);
//   // alert(body_element.nodeType);
// }
// window.onload=countBodyChildren();

// window.onload = prepareLinks;
// function prepareLinks() {
//   if (!document.getElementsByTagName) return false;
//   var links = document.getElementsByTagName("a");
//   for (var i = 0; i < links.length; i++) {
//     if (links[i].getAttribute("class") == "popup") {
//       links[i].onclick = function () {
//         popUp(this.getAttribute("href"));
//         return false;
//       };
//     }
//   }
// }

addLoadEvent(prepareLinks);
function prepareLinks() {
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;
  if (!document.getElementById("test")) return false;
  var links = document.getElementById("test");
  links.onclick = function () {
    popUp(this.getAttribute("href"));
    console.log("yes");
    return false;
  };
}

function popUp(winURL) {
  window.open(winURL, "popup", "width=520,height=320");
}

// window.onload = test;
// function test() {
//   if (!document.getElementsByTagName) return false;
//   if (!document.getElementById) return false;
//   if (!document.getElementById("lianjie")) return false;
//   if (!document.getElementsByTagName("a")) return false;
//   var ga = document.getElementById("lianjie");
//   var li = ga.getElementsByTagName("a");

//   for (var i = 0; i < li.length; i++) {
//     // console.log(li[i].getAttribute("href"));
//     // console.log(li[i].firstChild.nodeValue);
//   }
// }

// console.log(ceshi);
// function ceshi() {
//   console.log("ceshi");
// }
