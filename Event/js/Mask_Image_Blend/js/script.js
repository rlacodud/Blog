console.clear();

const minmax = { min: 0, max: 100, step: 1 };
const minmax360 = { min: 0, max: 360, step: 1 };

const PARAMS = {
  pct1: 30,
  pct2: 66,
  angle: 90,
  diffscale: ["angle"]
};
const wrap = document.getElementById("wrap");
const rootstyle = document.documentElement.style;

const pane = new Tweakpane.Pane();
for (const [property, value] of Object.entries(PARAMS)) {
  console.log("xxx", `${property}::: ${PARAMS[property]}`);
  if (isInArray(property, PARAMS.diffscale)) {
    console.log("diffscale");
    pane.addInput(PARAMS, `${property}`, minmax360).on("change", (val) => {
      setCustomProp(`${property}`, val.value);
    });
  } else {
    pane.addInput(PARAMS, `${property}`, minmax).on("change", (val) => {
      setCustomProp(`${property}`, val.value);
    });
  }
}

function setCustomProp(prop, val, unit = "") {
  console.log(prop + " - " + val + " : " + unit);
  rootstyle.setProperty("--" + prop, val + unit);
}

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}
