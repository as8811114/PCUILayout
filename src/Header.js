import { Component } from "react";
import cross from "./images/closeIcon.png";

export default class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: "rgb(246, 246, 246)",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          maxWidth: "1400px",
          minWidth: "1160px",
          height: "12%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            padding: "0% 10%",
            position: "relative",
          }}
        >
          <div
            style={{
              fontFamily: "FreightBigPro",
              fontSize: "28px",
              fontWeight: "bold",
              height: "100px",
              display: "flex",
              alignItems: "center",
            }}
          >
            Maquillador virtual
          </div>
          <img
            style={{
              height: "40px",
              width: "90px",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            src={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAABQCAYAAACwGF+mAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALmSURBVHgB7dzvbdNAGMfxH4j3sEGPDcoEmAlgg5oJgAlKJwAmaDoBMEHDBLBBbwNgguCTG8m+IMV/Ht/Fve9HeqTEStpr88R+/PjOEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIlHmsd1Hv+5jyU8u489P+A9TsvwsuWUhx/wGtd5vOTnexJcE7tOfNRy6uh3nQ14z230Hqv43cTXJirZ2GWK6vjQeq+/1go8FsYKR4o3ar8w1+ofOZAZCT1PrTaxSeoT8URlCLXfF9l4qf7h+ryJyyY+aL5fTXxXGl7ocVpPDX0nW7XaWro7pql76VOuU6mhC7Fp4ira9l7IjoSe7rP6baxzIbu1JPQ32dXAlradx0PKICxsLQkd9oThkP5cp3Uy062bH/RFh7VYW5fDq03qU+DULzO8kB019HQX6u+hfwjZldKHthSSOPSdu10Nr7bzgcxKSeiQhLeaL/wcp8Oe81vZqGQzzq4bFfRlKymhKy0nXHQIfemN5nGyn31XVClEDW3DqU3qO+WbDgqVVUN72YrnaAeuiZ9NvFI7L2OsJeYcF9VOLCWhvZZp94W2XTg5vOhs29frLzT+SxQuIFnV40Wi5Jgn7IVrHV7wCUm9isk8Dw0JbcOrLTN8Z1ulZU9E8R8ktB2vw3LhUkiKhLa1VX/CUiVWsyRFQtu7iZ5XQjIktL24XcceOiES2l7c93VCMiS0PRc990IyJLS9eCmWF5Ihoe29i55PuQSOiUhoW7X6JcdGLM1KioS2E0qNT9G2KyEpEtpGmJwU3xJsI+rn5Cxn2z1VuhaV13hOtvaLBl7r8OKJ17Rbg+1XxKQwdqpqyrF5ZeCU71awZ8eHt9jtdI/FncZ98LtMUR8fWraxVZqIksNWuBnOlHnQMMKqbxtbtSeAWyGrOQkd6q9cZ/F/B7wmTBJacoFo+Pu92iSe05rL9T8c0h/PNTYvAAAAAAAAAAAAAAAAAAAAAAAAAAAAoBT/AHF8KrqeyF7QAAAAAElFTkSuQmCC"
            }
          />
          <button
            style={{
              backgroundColor: "rgba(0,0,0,0)",
              border: "0px black solid",
              cursor: "pointer",
              width: "15px",
              height: "15px",
              padding: "0px",
            }}
            onClick={() => {}}
          >
            <img style={{ width: "15px", height: "15px" }} src={cross} />
          </button>
        </div>
      </div>
    );
  }
}
