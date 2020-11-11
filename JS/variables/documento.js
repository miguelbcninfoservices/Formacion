// trabajar sobre el elemento document
var doctypeObj = document.doctype;

console.log(
  "doctypeObj.name: "           + doctypeObj.name            + "\n" +
  "doctypeObj.internalSubset: " + doctypeObj.internalSubset  + "\n" +
  "doctypeObj.publicId: "       + doctypeObj.publicId        + "\n" +
  "doctypeObj.systemId: "       + doctypeObj.systemId
);

document.write("<br><p>Este es un ejemplo de write</p>");

var headerH3 = document.getElementsByTagName("H3").item(0);
// the firstChild of the header is a Text node:
headerH3.firstChild.data = "A dynamic document";
// now the header is "A dynamic document".
