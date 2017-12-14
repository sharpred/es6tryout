exports.baseController = 'helpers';
let doClick = (e) => {
    $.helpers.doSomething("wibble", "wobble");
    $.helpers.doSomethingWithRest("a", "b", "c", "d", "e", "f", "g");
}

let lblView = Alloy.createController("myView", {wibble: "this is brill"}).getView();

$.middle.add(lblView);

$.index.open();
