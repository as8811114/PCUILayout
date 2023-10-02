import { Component } from "react";
import Category from "./Category";
import Contents from "./Contents";
import Header from "./Header";
import data from "./data";
import image from "./images/look.png";
class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedTable: {
        Labiales: "Rojos",
        Máscaras: "Volumen",
        Bases: "Mate",
        Polvos: "Mate",
        Delineadores: "Lápiz",
        Rubores: "-",
      },
      selectedColor: {
        Labiales: "BCC-21056_20181024_LS_06_19",
        Máscaras: "BCC-21056_20181025_LA_02_01",
        Bases: "BCC-21056_20181109_FD_02_01",
        Polvos: "BCC-21056_20181025_FD_03_01",
        Delineadores: "BCC-21056_20181025_LI_01_01",
        Rubores: "BCC-21056_20181025_BL_01_01",
      },
      itemIndex: 0,
      series: [],
      options: [],
      colors: [],
    };
    this.categorySelected = "Labiales";
    this.selectedItem = {
      Labiales: "BCC-21056_20181024_LS_06",
      Máscaras: "BCC-21056_20181025_LA_02",
      Bases: "BCC-21056_20181109_FD_02",
      Polvos: "BCC-21056_20181025_FD_03",
      Delineadores: "BCC-21056_20181025_LI_01",
      Rubores: "BCC-21056_20181025_BL_01",
    };
  }
  handleClickCategory = (category) => {
    this.categorySelected = category;
    this.getOptions(category);
    this.getSeries(category, this.state.selectedTable[category]);
    this.getColors(category, this.state.selectedTable[category], false);
    // this.setState({ categorySelected: category });
  };
  handleClickSubCategory = (category, subCategory) => {
    this.updateChangeSubCateItem(category, subCategory);
    this.getOptions(category);
    this.getSeries(category, subCategory);
    this.getColors(category, subCategory);

    this.setState({
      selectedTable: {
        ...this.state.selectedTable,
        [`${category}`]: subCategory,
      },
    });
  };
  handleItemIndex = (direction) => {
    this.setState({ itemIndex: this.state.itemIndex - direction });
  };
  //handle select Item
  handleItemSelect = (item) => {
    this.selectedItem[`${item.Category}`] = item.GUID.slice(0, -3);

    this.getColors(
      this.categorySelected,
      this.state.selectedTable[`${this.categorySelected}`]
    );
  };

  componentDidMount = () => {
    //initialize options, series, colors,

    this.getOptions("Labiales");
    this.getSeries("Labiales", "Rojos");
    this.getColors("Labiales", "Rojos");
  };
  //get select option
  getOptions = (category) => {
    let subCategoryOptions = new Set();
    let dateAfterFilter = data.filter((d) => d.Category === category);
    for (let x of dateAfterFilter) {
      if (x.SubCategory !== "-") subCategoryOptions.add(x.SubCategory);
    }
    this.setState({ options: Array.from(subCategoryOptions) });
  };

  //Get SubCategory should show how many series
  getSeries = (category, subcategory) => {
    const filterData = data.filter(
      (d) => d.Category === category && d.SubCategory === subcategory
    );
    let checkGUID = [];
    let series = [];
    for (let x of filterData) {
      if (!checkGUID.includes(x.GUID.slice(0, -3))) {
        checkGUID.push(x.GUID.slice(0, -3));
        series.push(x);
      }
    }
    let i = 0;
    console.log(`${this.selectedItem[category]}`);
    for (i = 0; i < series.length; i++) {
      if (this.selectedItem[category] === series[i].GUID.slice(0, -3)) break;
    }
    console.log(series);
    console.log(filterData);

    this.setState({ series: series, data: filterData, itemIndex: i });
  };
  getColors = (category, subcategory, selectFirstColor = true) => {
    const filterData = data.filter(
      (d) => d.Category === category && d.SubCategory === subcategory
    );
    let colors = [];
    for (let x of filterData) {
      if (x.GUID.slice(0, -3) === this.selectedItem[`${category}`])
        colors.push(x);
    }
    console.log(colors);
    if (selectFirstColor) this.handleColorSelect(colors[0]);
    this.setState({ colors: colors });
  };
  handleColorSelect = (color) => {
    console.log(color);
    this.setState({
      selectedColor: {
        ...this.state.selectedColor,
        [this.categorySelected]: color.GUID,
      },
    });
  };

  //set itemIndex to 0 when subCategory change
  updateChangeSubCateItem = (category, subcategory) => {
    const filterData = data.filter(
      (d) => d.Category === category && d.SubCategory === subcategory
    );

    let checkGUID = [];
    let series = [];

    for (let x of filterData) {
      if (!checkGUID.includes(x.GUID.slice(0, -3))) {
        checkGUID.push(x.GUID.slice(0, -3));
        series.push(x);
      }
    }
    this.setState({ itemIndex: 0 });
    this.selectedItem[`${category}`] = series[0].GUID.slice(0, -3);
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
          selected={this.categorySelected}
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
          category={this.categorySelected}
          subCategory={this.state.selectedTable[this.categorySelected]}
          handleClickSubCategory={this.handleClickSubCategory}
          colors={this.state.colors}
          options={this.state.options}
          series={this.state.series}
          handleItemSelect={this.handleItemSelect}
          handleItemIndex={this.handleItemIndex}
          itemIndex={this.state.itemIndex}
          itemSelected={this.selectedItem[this.categorySelected]}
          handleColorSelect={this.handleColorSelect}
          colorSelected={this.state.selectedColor[`${this.categorySelected}`]}
        ></Contents>
      </div>
    );
  }
}
export default App;
