import React from "react";
import { red, blue, green } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import { AutoRotatingCarousel } from "material-auto-rotating-carousel";

class Carousel extends React.Component {
  state = { open: false };

  render() {
    return (
      <div style={{ position: "relative", width: "100%", height: 500 }}>
        <Button onClick={() => this.setState({ open: true })}>
          Open carousel
        </Button>
        <AutoRotatingCarousel
          autoplay={false}
          open={this.state.open}
          onClose={() => this.setState({ open: false })}
          onStart={() => this.setState({ open: false })}
          style={{ position: "absolute" }}
        >
          {/* <Slide
            media={<img src='http://www.icons101.com/icon_png/size_256/id_79394/youtube.png' />}
            mediaBackgroundStyle={{ backgroundColor: red[400] }}
            style={{ backgroundColor: red[600] }}
            title='This is a very cool feature'
            subtitle='Just using this will blow your mind.'
          />
          <Slide
            media={<img src='http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png' />}
            mediaBackgroundStyle={{ backgroundColor: blue[400] }}
            style={{ backgroundColor: blue[600] }}
            title='Ever wanted to be popular?'
            subtitle='Well just mix two colors and your are good to go!'
          />
          <Slide
            media={<img src='http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png' />}
            mediaBackgroundStyle={{ backgroundColor: green[400] }}
            style={{ backgroundColor: green[600] }}
            title='May the force be with you'
            subtitle='The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.'
          /> */}
          <div style={{ zIndex: 10 }}>Hello World</div>
          <div>Hello World2</div>
          <div>Hello World3</div>
        </AutoRotatingCarousel>
      </div>
    );
  }
}

export default Carousel;
