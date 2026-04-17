const container = document.getElementById("reverse_example_container");

const flip = () => {
    if (container.style.flexDirection !== "column-reverse") {
        container.style.flexDirection = "column-reverse";
    } else {
        container.style.flexDirection = "column";
    }
};

// Discussing keyboard shortcuts and multi line editing

let cat = "column";
cat = "column";
cat = "column";
cat = "column";
cat = "column";
cat = "column";
cat = "column";
cat = "column";
cat = "column";
cat = "column";
cat = "column";
cat = "column";
cat = "column";
cat = "column";

const json = {
    foo: 1,
    bar: 1,
    baz: 1,
    quxx: 1,
};

const foo = json.foo;
const bar = json.bar;
const baz = json.baz;
const quxx = json.quxx;
