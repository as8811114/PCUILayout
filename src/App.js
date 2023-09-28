import { Component } from "react";
import Contents from "./Contents";
import Header from "./Header";
import Category from "./Category";
import image from "./images/look.png";
import data from "./data";
class App extends Component {
  constructor() {
    super();
    this.state = {
      categorySelected: "Labiales",

      selectedTable: {
        Labiales: "Rojos",
        Máscaras: "Volumen",
        Bases: "Mate",
        Polvos: "Mate",
        Delineadores: "Lápiz",
        Rubores: "-",
      },
      selectedItem: {
        Labiales: "",
        Máscaras: "",
        Bases: "",
        Polvos: "",
        Delineadores: "",
        Rubores: "",
      },
      series: [],
      data: [],
      options: [],
    };
  }
  handleClickCategory = (category) => {
    this.getOptions(category);
    this.getData(category, this.state.selectedTable[category]);
    this.setState({ categorySelected: category });
  };
  handleClickSubCategory = (category, subCategory) => {
    this.getOptions(category);
    this.getData(category, subCategory);
    this.setState({
      selectedTable: {
        ...this.state.selectedTable,
        [`${category}`]: subCategory,
      },
    });
  };
  componentDidMount = () => {
    this.getOptions("Labiales");
    this.getData("Labiales", "Rojos");
  };

  getOptions = (category) => {
    let subCategoryOptions = new Set();
    let dateAfterFilter = data.filter((d) => d.Category === category);
    for (let x of dateAfterFilter) {
      if (x.SubCategory !== "-") subCategoryOptions.add(x.SubCategory);
    }
    this.setState({ options: Array.from(subCategoryOptions) });
  };
  getData = (category, subcategory) => {
    const filterData = data.filter(
      (d) => d.Category === category && d.SubCategory === subcategory
    );
    this.getSeries(filterData);
    this.setState({
      data: filterData,
    });
  };
  getSeries = (data) => {
    console.log(data);
    let checkGUID = [];
    let series = [];
    console.log(data);
    for (let x of data) {
      if (!checkGUID.includes(x.GUID.slice(0, -3))) {
        checkGUID.push(x.GUID.slice(0, -3));
        series.push(x);
      }
    }
    this.setState({ series: series });
    console.log(series);
  };

  render() {
    return (
      <div
        style={{
          maxWidth: "1400px",
          minWidth: "1160px",
          minHeight: "610px",
          maxHeight: "820px",
          height: "100vh",
          width: "100vw",
          position: "relative",
        }}
      >
        <Header></Header>
        <Category
          handleClickCategory={this.handleClickCategory}
          selected={this.state.categorySelected}
        ></Category>
        <img
          style={{
            position: "absolute",
            left: "10%",
            top: "24%",
            minHeight: "398px",
            minWidth: "452px",
            maxHeight: "65%",
            height: "100%",
            width: "39%",
            backgroundColor: "gray",
          }}
          src={image}
        ></img>
        <Contents
          category={this.state.categorySelected}
          subCategory={this.state.selectedTable[this.state.categorySelected]}
          handleClickSubCategory={this.handleClickSubCategory}
          data={this.state.data}
          options={this.state.options}
          series={this.state.series}
        ></Contents>
      </div>
    );
  }
}
export default App;
