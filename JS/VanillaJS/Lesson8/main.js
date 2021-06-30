document.getElementsByTagName("body")[0].style = "margin-left:50px";

let schoolThings = ["table", "pen", "book", "desk", "board"];
let phoneNumbers = [707770007, 502007000, 707707070, true, false];

// document.write(schoolThings+"<br>");
// document.write(phoneNumbers+"<br>");

let infoArrayv0 = [1, 2, 3]; //data
let infoArrayv1 = new Array(1, 2, 3); //method
// -------------------------------------------------
// let infoArray = ["table","pen","book","desk","board",707770007,502007000,707707070];
// document.write(infoArray[1]);
// --------------------------------------------------
// --------------------------------------------------
// let infoArray = ["table","pen","book","desk","board",707770007,502007000,707707070];
// infoArray[0]=5;
// document.write(infoArray);

// --------------------------------------------------
// --------------------------------------------------

// let infoArray = [" table","pen","book","desk","board",707770007,502007000,707707070];
// infoArray["info"]=5;
// infoArray["book"]="1984 ";
// document.write(infoArray["book"]);
// document.write(infoArray["info"]);
// document.write(infoArray);

// --------------------------------------------------
// --------------------------------------------------

// let infoArray = [];
// infoArray[0]=5;
// infoArray[2]="1984 ";
// infoArray[1]="Hello JS ";

// document.write(infoArray);

// --------------------------------------------------

// --------------------------------------------------
const infoArray = [
  "table",
  "pen",
  "book",
  ["baku", "ankara", ["snow", "winter"], "berlin"],
];

// document.write(infoArray[3][2][1]);
// --------------------------------------------------

let infoObj = {
  name: "JS",
  desc: "Programming Language",
  version: 5,
  doing: function () {
    document.write("Im very strong programming language ");
  },
  frameworks: ["Angular", "Angular JS"],
  exam: (a) => {
    if (a == 5) {
      console.log("bura afrikadir");
    } else {
      console.log("bura moanbikdir");
    }
  },
};
// document.write(infoObj.name+"<br>");
// document.write(infoObj.desc+"<br>");
// document.write(infoObj.version+"<br>");
// document.write(infoObj.frameworks+"<br>");
// infoObj.doing();
// infoObj.exam(5);

// --------------------------------------------------
// --------------------------------------------------

let infoObj = [
  {
    name: "JS",
    desc: "Programming Language",
    version: 5,
    doing: function () {
      document.write("Im very strong programming language ");
    },
    frameworks: ["Angular", "Angular JS"],
    exam: (a) => {
      if (a == 5) {
        console.log("bura afrikadir");
      } else {
        console.log("bura moanbikdir");
      }
    },
  },
  "table",
];
document.write(infoObj[0].name + "<br>");

// --------------------------------------------------
