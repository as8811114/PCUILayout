import { Component } from "react";
import left from "./images/left.png";
import noImage from "./images/no-image-icon-23485.png";
import right from "./images/right.png";

export default class Item extends Component {
  constructor() {
    super();
    this.itemWidth = 182;
  }
  handleItemsMove = (type) => {
    const direction = type === "left" ? -1 : 1;
    const items = document.getElementById("items");

    for (let x of items.childNodes) {
      x.style.transform = `translateX(${
        -1 * this.itemWidth * this.props.itemIndex + this.itemWidth * direction
      }px)`;
    }
    this.props.handleItemIndex(direction);
  };
  adjustItems = () => {
    const items = document.getElementById("items");
    const left = document.getElementById("borderLeft");
    const right = document.getElementById("borderRight");
    const itemsWidth = parseInt(
      window.getComputedStyle(items).getPropertyValue("width")
    );

    const newWidth = parseInt((itemsWidth - 364) / 2.5) + 150;

    for (let x of items.childNodes) {
      x.style.width = newWidth + "px";
    }
    if (newWidth >= 182) {
      left.style.width = right.style.width = "138px";
      this.itemWidth = 182;
    } else {
      left.style.width = right.style.width = `calc((100% - ${newWidth}px) / 2)`;
      this.itemWidth = newWidth;
    }
  };
  addWindowListener = () => {
    window.addEventListener("resize", () => {
      this.adjustItems();
      //handle resize items offset
      this.focusSelectedItem();
    });

    window.addEventListener("load", () => {
      this.adjustItems();
    });
  };
  focusSelectedItem = () => {
    const items = document.getElementById("items");
    for (let x of items.childNodes) {
      x.style.transform = `translateX(${
        -1 * this.itemWidth * this.props.itemIndex
      }px)`;
    }
  };
  componentDidMount = () => {
    this.addWindowListener();
  };
  componentDidUpdate = () => {
    this.focusSelectedItem();
    this.adjustItems();
    console.log(
      this.props.colors.filter((e) => e.GUID === this.props.colorSelected)[0]
    );
  };
  render() {
    return (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "52%",
          maxHeight: "275px",
          minHeight: "199px",
          maxWidth: "546px",
          minWidth: "398px",
          padding: "28px 0px",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            padding: "0px 32px",
            boxSizing: "border-box",
          }}
        >
          {this.props.itemIndex > 0 && (
            <button
              style={{
                cursor: "pointer",
                position: "absolute",
                width: "32px",
                height: "32px",
                top: "calc((100% - 32px) / 2 )",
                left: "0px",
                backgroundColor: "rgba(0,0,0,0)",
                border: "0px black solid",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => {
                this.handleItemsMove("right");
              }}
            >
              <img
                style={{
                  width: "32px",
                  height: "32px",
                }}
                src={left}
              ></img>
            </button>
          )}
          {this.props.itemIndex < this.props.series.length - 1 && (
            <button
              style={{
                cursor: "pointer",
                position: "absolute",
                width: "32px",
                height: "32px",
                top: "calc((100% - 32px) / 2 )",
                right: "0px",
                backgroundColor: "rgba(0,0,0,0)",
                border: "0px black solid",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => {
                this.handleItemsMove("left");
              }}
            >
              <img
                style={{
                  width: "32px",
                  height: "32px",
                }}
                src={right}
              ></img>
            </button>
          )}
          <div
            id={"items"}
            style={{
              display: "flex",
              height: "100%",
              width: "calc(100% - 24px)",
              margin: "0px 12px",
              justifyContent: "flex-start",
              boxSizing: "border-box",
              overflow: "hidden",
            }}
          >
            <div
              id={"borderLeft"}
              style={{
                flexShrink: "0",
                height: "100%",
                width: "calc((100% - 182px) / 2) ",
                minWidth: "107px",
                maxWidth: "138px",
              }}
            ></div>
            {this.props.series.map((d, i) => {
              return (
                <a
                  key={i}
                  style={{
                    padding: "0px",
                    margin: "0px",
                    position: "relative",
                    textDecoration: "none",
                    color: "black",
                    flexShrink: "0",
                    height: "100%",
                    width: "182px",
                    minWidth: "150px",
                    maxWidth: "182px",
                    border:
                      d.GUID.slice(0, -3) === this.props.itemSelected
                        ? "1px solid black"
                        : "",
                    boxSizing: "border-box",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    this.props.handleItemSelect(d);
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: "100%",
                      maxHeight: "275px",
                      boxSizing: "border-box",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",

                      padding: "12px",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        maxHeight: "141px",
                        maxWidth: "156px",
                        paddingBottom: "8px",
                        boxSizing: "border-box",
                        minHeight: "0",
                      }}
                    >
                      <img
                        style={{ height: "100%", width: "100%" }}
                        src={noImage}
                      />
                    </div>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        fontFamily: "GothamLight",
                        fontSize: "12px",
                        textAlign: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ fontSize: "12px", lineHeight: "14px" }}>
                        {this.props.colorSelected &&
                        d.GUID.slice(0, -3) === this.props.itemSelected
                          ? this.props.colors.filter(
                              (e) => e.GUID === this.props.colorSelected
                            )[0].Tone
                          : d.Tone}
                      </div>
                      <div style={{ height: "8px" }}></div>
                      <div
                        style={{
                          fontSize: "18px",
                          lineHeight: "26px",
                          fontFamily: "FreightBigPro",
                          fontWeight: "bold",
                        }}
                      >
                        {d.Name}
                      </div>
                      <div style={{ height: "8px" }}></div>
                      <div
                        style={{
                          fontSize: "12px",
                          fontWeight: "300",
                          lineHeight: "16px",
                        }}
                      >
                        {d.Description}
                      </div>
                      <div style={{ height: "8px" }}></div>
                      <div
                        style={{
                          fontSize: "14px",
                          fontWeight: "bold",
                          lineHeight: "20px",
                          fontFamily: "Gotham",
                        }}
                      >
                        {`$ ${parseInt(
                          Math.random() * (20000 - 10000) + 10000
                        )}`}
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}

            <div
              id={"borderRight"}
              style={{
                flexShrink: "0",
                height: "100%",
                width: "calc((100% - 182px) / 2)",
                minWidth: "106px",
                maxWidth: "137px",
              }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}
