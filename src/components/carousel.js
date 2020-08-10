import React from "react";
import ReactCarousel, {
  Dots,
  autoplayPlugin,
} from "@brainhubeu/react-carousel";

import "@brainhubeu/react-carousel/lib/style.css";

class Carousel extends React.Component {
  state = { value: 0 };

  onchange = value => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    const { children } = this.props;
    return (
      <>
        <ReactCarousel value={value} onChange={this.onchange}>
          {children}
        </ReactCarousel>
        <Dots value={value} onChange={this.onchange} number={children.length} />
      </>
    );
  }
}

export default Carousel;
