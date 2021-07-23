const div = dom.find("#test>.red")[0];
console.log(div);

dom.style(div, "color", "red");

const divList = dom.find(".red");
console.log(divList);

dom.each(divList, (n) => console.log(n));

const div1 = dom.create("<div>newDiv</div>");
console.log(div1);

dom.after(test, div);
const div3 = dom.create('<div id="parent"></div>');

dom.wrap(test, div3);

const nodes = dom.empty(window.empty);
console.log(nodes);

dom.attr(test, "title", "Hi,I am Tom"); //写属性
const title = dom.attr(test, "title"); //读属性，用这个函数，获取test这个div的title属性
console.log(`title:${title}`);

dom.text(test, "你好，这是个新内容");
dom.text(test);

dom.style(test, { border: "1px solid red", color: "blue" });
console.log(dom.style(test, "border"));
dom.style(test, "border", "1px solid green");

dom.class.add(test, "red");
dom.class.add(test, "blue");
dom.class.remove(test, "blue");
console.log(dom.class.has(test, "red"));

const fn = () => {
  console.log("点击了");
};
dom.on(test, "click", fn);
dom.off(test, "click", fn);

const testDiv = dom.find("#test")[0];
console.log(testDiv);
const test2 = dom.find("#test2")[0];
console.log(dom.find(".red", test2)[0]);

console.log(dom.parent(test));

const s2 = dom.find("#s2")[0];
console.log(dom.siblings(s2));
console.log(dom.next(s2));
console.log(dom.previous(s2));

const t = dom.find("#travel")[0];
dom.each(dom.children(t), (n) => dom.style(n, "color", "red"));

console.log(dom.index(s2));
