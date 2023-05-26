import { View, Image, Button } from "@tarojs/components";
import detailImage1 from "../../assets/detail/detail1.jpg";
import { styled } from "@linaria/react";
import { useMemo } from "react";

const Detail = () => {
  const actions = useMemo(
    () => [
      {
        text: "返回",
        onClick: () => null,
      },
      {
        text: "收藏",
        onClick: () => null,
      },
      {
        text: "下载",
        onClick: () => null,
      },
      {
        text: "分享",
        onClick: () => null,
      },
    ],
    []
  );

  return (
    <Wrapper>
      <StyledImage
        style={{ width: "100vw", height: "100vh" }}
        mode="aspectFill"
        src={detailImage1}
      />
      <ActionsWrapper>
        {actions.map(({ text, onClick }) => (
          <StyledButton onClick={onClick} key={text}>
            {text}
          </StyledButton>
        ))}
      </ActionsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(View)`
  background-color: aliceblue;
  width: 100vw;
  height: 100vh;
`;

const StyledImage = styled(Image)``;

const ActionsWrapper = styled(View)`
  position: fixed;
  height: 58px;
  left: 20px;
  right: 20px;
  bottom: 58px;
  background-color: antiquewhite;
  border-radius: 18px;
  display: flex;
`;

const StyledButton = styled(Button)`
  flex: 1;
  color: black;
  line-height: 58px;
`;

export default Detail;
