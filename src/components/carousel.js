import React from "react";
import ReactCarousel, { Dots } from "@brainhubeu/react-carousel";

import "@brainhubeu/react-carousel/lib/style.css";

class Carousel extends React.Component {
  state = { value: 0 };

  onchange = value => {
    this.setState({ value });
  };

  onClick = e => console.log(e);

  render() {
    return (
      <>
        <ReactCarousel
          value={this.state.value}
          onChange={this.onchange}
          onClick={this.onClick}
          plugins={["infinite", "clickToChange", "fastSwipe"]}
        >
          {this.props.children}
        </ReactCarousel>
        <Dots
          value={this.state.value}
          onChange={this.onchange}
          number={this.props?.children?.length}
        />
      </>
    );
  }
}

export default Carousel;
