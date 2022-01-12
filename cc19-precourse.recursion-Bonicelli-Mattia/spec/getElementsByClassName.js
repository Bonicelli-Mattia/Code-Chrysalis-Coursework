const htmlStrings = [
  "<p></p>",
  '<div><div class="testing"></div></div>',
  '<div><div class="targetClassName"></div></div>',
  '<div><button class="targetClassName"></button></div><div class="classname"></div>',
  '<div><p class="targetClassName"><b>asdfasdf</b></p></div><div class="classname"><span></span></div>',
  '<div><p class="targetClassName"><b>asdfasdf</b></p></div><div class="classname"><span class="span test"></span></div>',
  '<div class="a"><p class="targetClassName asdf"><b>aasdfasdfsdfasdf</b></p></div><div class="classname"><span class="span test"></span></div>'
];

const createHtmlElementFromString = (html) => {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.childNodes[0];
};

describe("getElementsByClassName", () => {
  const body = document.body;

  beforeEach(() => {
    body.classList.add("targetClassName");
  });

  afterEach(() => {
    body.classList.remove("targetClassName");
  });

  for (let i = 0; i < htmlStrings.length; i++) {
    testHTMLStrings(htmlStrings[i], i);
  }

  function testHTMLStrings(htmlString, index) {
    it(
      "should match the results of calling the getElementsByClassName method, htmlStrings index: " +
        index,
      () => {
        body.classList.add("targetClassName");
        let $rootElement = createHtmlElementFromString(htmlString);
        body.appendChild($rootElement);
        let result = getElementsByClassName("targetClassName");
        let expectedNodeList = document.getElementsByClassName(
          "targetClassName"
        );
        let expectedArray = Array.prototype.slice.apply(expectedNodeList);
        expect(result).toEqual(expectedArray);
        body.removeChild($rootElement);
      }
    );
  }
});
