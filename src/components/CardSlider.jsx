import React, { useRef, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import { AiOutlineAlert } from "react-icons/ai";

export default function CardSlider({ data, title }) {
  const [showControls, setShowControls] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);
  const listRef = useRef();
  const handleDirection = (direction) => {};

  return (
    <Container
      className="flex column"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <h1>{title}</h1>
      <div className="Wrapper">
        <div
          className={`slider-action left ${
            !showControls ? "none " : ""
          } flex j-center a-center`}
        >
          <AiOutlineAlert onClick={() => handleDirection("left")} />
        </div>
        <div className="flex">
          {data.map((movie, index) => {
            return <Card movieData={movie} index={index} key={movie.id} />;
          })}
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div``;
