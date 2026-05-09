window.MyModule = {
  init() {
    console.log("Module loaded");

    this.setupUI();
  },

  setupUI() {
    console.log("Setting up UI elements...");

    const box = document.createElement("div");
    box.innerText = "Hello from dynamic module";
    box.style.position = "absolute";
    box.style.top = "10px";
    box.style.right = "10px";
    box.style.background = "black";
    box.style.color = "white";
    box.style.padding = "10px";

    document.body.appendChild(box);
  }
};

window.MyModule.init();
