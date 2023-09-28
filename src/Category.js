import { Component } from "react";
import BASES from "./category_icons/BASES.png";
import DELINEADORES from "./category_icons/DELINEADORES.png";
import LABIALES from "./category_icons/LABIALES.png";
import LOOKS from "./category_icons/LOOKS.png";
import MASCARAS from "./category_icons/MASCARAS.png";
import POLVOS from "./category_icons/POLVOS.png";
import RUBORES from "./category_icons/Rubores.png";
const categoryButtonStyle = {
  cursor: "pointer",
  maxWidth: "150px",
  width: "100%",
  height: "100%",
  position: "relative",
};
const buttonDivStyle = {
  height: "94%",
  width: "84%",
  fontWeight: "bold",
  fontSize: "12px",
  fontFamily: "Gotham",
  position: "absolute",
  left: "8%",
  top: "6%",
  lineHeight: "1",
};
const buttonImgStyle = {
  width: "24px",
  height: "24px",
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};
const buttons = [
  { label: "Looks", src: LOOKS, cate: "Looks" },
  { label: "Lablales", src: LABIALES, cate: "Labiales" },
  { label: "Máscaras", src: MASCARAS, cate: "Máscaras" },
  { label: "Bases", src: BASES, cate: "Bases" },
  { label: "Polvos", src: POLVOS, cate: "Polvos" },
  { label: "Delinear", src: DELINEADORES, cate: "Delineadores" },
  { label: "Rubores", src: RUBORES, cate: "Rubores" },
];
export default class Category extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "rgb(246, 246, 246)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "1400px",
          minWidth: "1160px",
          height: "8%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "80%",
            height: "100%",
          }}
        >
          {buttons.map((button, i) => {
            return (
              <a
                key={i}
                style={
                  this.props.selected == button.cate
                    ? {
                        ...categoryButtonStyle,
                        filter:
                          "brightness(0) saturate(100%) invert(32%) sepia(17%) saturate(1175%) hue-rotate(226deg) brightness(92%) contrast(89%)",
                        borderBottom: "solid 2px",
                      }
                    : { ...categoryButtonStyle, color: "rgb(150,150,150)" }
                }
                onClick={(e) => {
                  this.props.handleClickCategory(button.cate);
                }}
              >
                <div style={buttonDivStyle}>
                  <img style={buttonImgStyle} src={button.src}></img>

                  <div
                    style={{
                      width: "100%",
                      height: "51%",
                      position: "absolute",
                      left: "0px",
                      top: "49%",
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div>{button.label}</div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}
