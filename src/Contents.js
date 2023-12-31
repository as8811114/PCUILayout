import React, { Component } from "react";
import selectArrow from "./images/selectArrow.png";

import Colors from "./Colors";
import Item from "./Item";

export default class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectOpen: false,
    };
  }

  addWindowListener = () => {
    window.addEventListener("resize", () => {
      if (this.state.selectOpen) this.setState({ selectOpen: false });
    });
    window.addEventListener("click", (e) => {
      if (
        this.props.options.length > 0 &&
        !document.getElementById("subCategory").contains(e.target) &&
        this.state.selectOpen
      ) {
        this.setState({ selectOpen: false });
      }
    });
  };
  handleItemSelect = (item) => {
    this.props.handleItemSelect(item);
  };
  handleItemIndex = (direction) => {
    this.props.handleItemIndex(direction);
  };
  handleColorSelect = (color) => {
    this.props.handleColorSelect(color);
  };

  componentDidMount = () => {
    this.addWindowListener();
  };

  componentDidUpdate = () => {};
  render() {
    return (
      <div
        style={{
          maxWidth: "546px",
          minWidth: "452px",
          maxHeight: "550px",
          minHeight: "398px",
          position: "absolute",
          width: "39%",
          height: "65%",
          top: "24%",
          right: "10%",
        }}
      >
        {/*SubCategory Select Options*/}
        {this.props.options && this.props.options.length > 0 && (
          <div
            id={"subCategory"}
            style={{
              maxWidth: "544px",
              height: "46px",
              border: "1px #e6e9ed solid",
              borderRadius: "0px",
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              padding: "0px 14px",
              position: "relative",
              fontFamily: "GothamLight",
              fontSize: "14px",
            }}
            onClick={(e) => {
              this.setState({ selectOpen: !this.state.selectOpen });
            }}
          >
            <div
              style={{
                width: "95%",
              }}
            >
              <span>{this.props.subCategory}</span>
            </div>
            <div
              style={{
                width: "5%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={selectArrow}
                height={20}
                style={{
                  cursor: "pointer",
                }}
              />
            </div>
            {this.state.selectOpen && (
              <div
                style={{
                  maxHeight: "288px",
                  maxWidth: "546px",
                  width: "100%",
                  position: "absolute",
                  top: "50px",
                  left: "-1px",
                  border: "1px #e6e9ed solid",
                  backgroundColor: "white",

                  overflowY: this.props.options.length > 6 ? "scroll" : "",
                  overflowX: "hidden",
                  zIndex: "999",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0% 1%",
                  }}
                >
                  {this.props.options.map((cate, index) => {
                    return (
                      <div
                        key={cate + index}
                        onClick={() => {
                          this.props.handleClickSubCategory(
                            this.props.category,
                            cate
                          );
                        }}
                        style={{
                          cursor: "pointer",
                          width: "95%",
                          color:
                            cate === this.props.subCategory
                              ? "rgb(97, 75, 121)"
                              : "black",
                          height: "45px",
                          fontFamily:
                            cate === this.props.subCategory
                              ? "Gotham"
                              : "GothamLight",
                          fontWeight:
                            cate === this.props.subCategory ? "bold" : "",
                          borderBottom:
                            index !== this.props.options.length - 1
                              ? "1px #e6e9ed solid"
                              : "",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <div style={{}}>{cate}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
        {/*no subSategory don't show select options*/}
        {this.props.options && this.props.options.length <= 0 && (
          <div
            style={{
              maxWidth: "544px",
              height: "48px",
              padding: "0px 14px",
            }}
          ></div>
        )}
        {/*items*/}
        <Item
          series={this.props.series}
          handleItemSelect={this.handleItemSelect}
          handleItemIndex={this.handleItemIndex}
          itemSelected={this.props.itemSelected}
          itemIndex={this.props.itemIndex}
          colors={this.props.colors}
          colorSelected={this.props.colorSelected}
        ></Item>
        {/* item colors */}
        <Colors
          colors={this.props.colors}
          handleColorSelect={this.handleColorSelect}
          itemSelected={this.props.itemSelected}
          colorSelected={this.props.colorSelected}
        ></Colors>
      </div>
    );
  }
}
