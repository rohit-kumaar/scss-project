export const extendContent = `@use "utilities/variables" as *;
@use "utilities/function" as *;

%flexColumn {
  display: flex;
  flex-direction: column;
}

%alignCenter {
  display: flex;
  align-items: center;
}

%flexCenter {
  display: flex;
  align-items: center;
  justify-content: center;
}

%flexBetween {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

%gridCenter {
  display: grid;
  place-items: center;
}

%textCenter {
  text-align: center;
}

%customScrollBar {
  &::-webkit-scrollbar {
    width: 6px;
    background: getColor(whiteColor);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(getColor(blackColor), 40%);
    background: getColor(blueColor);
  }
}

%transition {
  transition: all 300ms ease-in-out;
}`;
