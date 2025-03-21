import picOfMe from "../assets/picOfMe.jpg";
import styled from "styled-components";

const PicContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1/1;
  width: 320px;
  border: 7px solid white;
  overflow: hidden;
  border-radius: 50%;
`;

const StyledImage = styled.img`
  z-index: 30;
  user-select: none;
  width: 100%;
`;

export default function PresentationRight() {
  return (
    <div className="composantContainer relative top-[62px] m-auto flex aspect-square items-center justify-center text-center max-lg:h-[300px] max-lg:min-w-[300px] max-sm:h-[250px] max-sm:min-w-[250px]">
      <PicContainer>
        <StyledImage
          src={picOfMe}
          alt="svg composant"
          className="positionPicOfMe"
        />
      </PicContainer>
    </div>
  );
}
