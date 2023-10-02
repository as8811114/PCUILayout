import { Component } from "react";
const colors = [
  "#ebb785",
  "#eaa87f",
  "#e6ae82",
  "#f0b27e",
  "#e1b98f",
  "#e3aa72",
  "#bc8865",
  "#a17654",
  "#73441e",
];
export default class Colors extends Component {
  constructor(props) {
    super(props);
    this.state = { cancel: false };
  }
  componentDidUpdate = () => {
    console.log(this.props.colorSelected);
  };
  render() {
    return (
      <div
        id={"color"}
        style={{
          display: "flex",
          width: "100%",
          maxWidth: "546px",
          minWidth: "452px",
          marginTop: "-6px",
          boxSizing: "border-box",
          padding: "0px 15px 0px 43px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            boxSizing: "border-box",
            flexWrap: "wrap",
          }}
        >
          <a
            style={{
              padding: "0px",
              margin: "0px",
              width: "52px",
              height: "52px",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                width: "calc(100% - 12px)",
                height: "calc(100% - 12px)",
                padding: "2px",
                boxSizing: "border-box",
                backgroundPosition: "center center",
                margin: "6px",

                borderRadius: "2px",
                backgroundClip: "content-box",
                backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHsSURBVHgB7dzLbcJAFIXhG5QC6CRJB5RCOqADSAdpJRWQDkgHSQdJB2SO5IU12DBj5nFfv3QWWF5Yn2zhDRB5nud549Zh+7DfsLOPTmFbyuhERL0vmuN2lNCWqPuFch2eyHUMtoo+b8ibC3ib+OCKvJxu3oFeZqmAr2EPivcS9kcL8juQ6DnsSBOPZ0rWAefwku9Gy4BzeG9hH5SYVcBreAfKyCJgMTxkDbAoHrIEWBwPWQGsgocsAFbDQ9oBq+IhzYDV8ZBWwCZ4SCNgMzykDbApHtIE2BwPaQHsgoc0AHbDQ9IBu+IhyYDd8ZBUQBZ4SCIgGzwkDZAVHpIEyA4PSQFkiYckALLFQ9wBWeMhzoDs8RBXQBF4iCOgGDzEDVAUHuIEKA4PcQEUiYc4AIrFQ70BReOhnoDi8VAvQBV4qAegGjzUGlAVHmoJqA4PtQJUiYdaAKrFQ7UBVeOhmoDq8VAtQBN4qAagGTxUGtAUHioJaA4PlQI0iYdKAJrFQ/cCmsZD9wCax0NLAR1vaAmg443KBXS8qBxAx5soFfCJHG+yx8TzdhPHzOOhpd/Cjje0BNDxRqU+wuP2wzzS93PX5jlgXj/xgRjwk7xrfaWchPe9s+9iB0oML8vvYd9E3S+aw46U+TfInud5VvoH3sHSyIJk2roAAAAASUVORK5CYII=")`,
                backgroundSize: "36px 36px",
              }}
              onClick={() => {
                this.props.handleColorSelect({});
              }}
            ></div>
          </a>
          {this.props.colors.map((c, i) => {
            return (
              <a
                key={i + c.Color}
                style={{
                  padding: "0px",
                  margin: "0px",
                  width: "52px",
                  height: "52px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  this.props.handleColorSelect(c);
                }}
              >
                <div
                  style={{
                    width: "calc(100% - 12px)",
                    height: "calc(100% - 12px)",
                    padding: "2px",
                    boxSizing: "border-box",
                    backgroundPosition: "center center",
                    margin: "6px",
                    backgroundColor: `${c.Color}`,
                    border:
                      c.GUID === this.props.colorSelected
                        ? "2px solid black"
                        : "",
                    borderRadius: "2px",
                    backgroundClip: "content-box",
                  }}
                ></div>
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}
