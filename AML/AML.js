var AMLTranslator = (function() {
  AMLTranslator = {};
  AMLTranslator.translate = function (input){

    var amlString = input;
    var htmlArr = []; // array where elements are chunks of text or HTML interpreted from AML
    var thisChunk = ""; //text accumulated since the last AML was found
    var B = false; // B will track whether current text is STRONG or not
    var E = false; // E will track whether current text is EM or not

    //loop through every character in the AML string
    for (var i = 0; i < amlString.length; i++) { 
      
      //at every character, check to see if the following characters constitute AML
      if(amlString.substring(i, i+3) === "^!%"){ //this is B (strong) closer
        B = false; // Because this is an AML closer for strong, switch off B
        if(E){ // if EM is on, close it and then open it again
          htmlArr.push(thisChunk,'</EM></STRONG><EM>');
        }else{ // if EM is not on, only close strong 
          htmlArr.push(thisChunk,'</STRONG>');
        } 
        thisChunk = ""; //empty the chunk
        i += 2; //increment past the current AML element

      }else if(amlString.substring(i, i+2) === "^%"){ //this is B opener
        B = true;
        htmlArr.push(thisChunk,'<STRONG>');
        thisChunk = "";
        i += 1;

      }else if(amlString.substring(i, i+3) === "^!~"){ //this is EM closer 
        E = false;
        if(B){// B is on as as well, must be closed and reopened
          htmlArr.push(thisChunk,'</STRONG></EM><STRONG>'); 
        }else{
          htmlArr.push(thisChunk,'</EM>');
        }
        thisChunk = "";
        i += 2;

      }else if(amlString.substring(i, i+2) === "^~"){ //this is EM opener
        E = true;
        htmlArr.push(thisChunk,'<EM>');
        thisChunk = "";
        i += 1;

      }else{ //if no AML was encountered, add the text to the current chunk
        thisChunk = thisChunk.concat(amlString.charAt(i));
        if( i === amlString.length-1){ //this will add the final text chunk to the array
          htmlArr.push(thisChunk);
        }
      }
    }

    return htmlArr.join(""); //join the elements of the array into a string before returning

  };

  return AMLTranslator;

}());

// Make translator available via “require” in Node.js
if (module.exports) {
  module.exports = AMLTranslator;
}
