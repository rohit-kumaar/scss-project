export const buttonContent = `@use "utilities/__utilities-dir" as *;

@mixin btnsType($bg, $color) {
  @extend %transition;
  background: $bg;
  color: $color;

  &:focus-visible,
  &:hover {
    background: $color;
    color: $bg;
  }
}

.button {
  --_btn-py: 10px;
  --_btn-px: 60px;
  padding: var(--_btn-py) var(--_btn-px);
  border: 1px solid;
  border-radius: 50px;
  font-size: rem(16);
  font-weight: 500;
  user-select: none;
  cursor: pointer;

  &:focus-visible,
  &:hover {
    >svg {
      >path {
        fill: getColor(whiteColor);
        transition: fill 500ms;
      }
    }
  }

  &-primary {
    @include btnsType(getColor(blackColor), getColor(whiteColor));
  }

  &-secondary {
    @include btnsType(getColor(blueColor), getColor(whiteColor));
  }

  &-disable {
    pointer-events: none;
  }

  &-transparent {
    border: 0;
    background: transparent;
    color: getColor(blackColor);
    cursor: pointer;
  }
}`;
