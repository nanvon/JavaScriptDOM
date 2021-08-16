addLoadEvent(displayAbbreviations);
function displayAbbreviations(){
    var abbreviations=document.getElementsByTagName("abbr");
    if(abbreviations.length<1) return  false;
    var defs=new Array();
    for(var i=0;i<abbreviations.length;i++){
        // var current_abbr=abbreviations[i];
        // var definition=current_abbr.getAttribute("tittle");
        // var key=current_abbr.lastChild.nodeValue;
        // defs[key]=definition;
        defs[abbreviations[i].lastChild.nodeValue]=abbreviations[i].getAttribute("title");
    }

    var dlist=document.createElement("dl");
    for(key in defs){
        var definition=defs[key];
        var dtitle=document.createElement("dt");
        var dtitle_text=document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        var ddesec=document.createElement("dd");
        var desc_text=document.createTextNode(definition);
        ddesec.appendChild(desc_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesec);
    }

    var header=document.createElement("h2");
    var header_text=document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    document.body.appendChild(header);
    document.body.appendChild(dlist);
}
