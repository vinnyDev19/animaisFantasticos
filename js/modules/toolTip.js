export default function initToolTip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });
  function onMouseOver(event) {
    const toolTipBox = criarToolTipBox(this);
    onMouseMove.toolTipBox = toolTipBox;
    onMouseLeave.toolTipBox = toolTipBox;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);
    this.addEventListener("mousemove", onMouseMove);
  }
  const onMouseMove = {
    handleEvent(event) {
      this.toolTipBox.style.top = event.pageY + 20 + "px";
      this.toolTipBox.style.left = event.pageX + "px";
    },
  };
  const onMouseLeave = {
    handleEvent() {
      this.toolTipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };
  function criarToolTipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
}
