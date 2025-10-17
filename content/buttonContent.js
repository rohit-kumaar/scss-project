export const buttonContent = `@use "utilities/__utilities-dir" as *;

@mixin btnsType($bd, $bg, $color) {
  @extend %transition;
  border: 1px solid $bd;
  background: $bg;
  color: $color;
  cursor: pointer;

  &:focus-visible,
  &:hover {
    border: 1px solid $bd;
    background: $color;
    color: $bg;
  }
}

.button {
  padding: 10px 60px;
  border: 1px solid transparent;
  border-radius: 50px;
  font-size: rem(16);
  font-weight: 500;
  user-select: none;

  &:focus-visible,
  &:hover {
    > svg {
      > path {
        fill: getColor(whiteColor);
        transition: fill 500ms;
      }
    }
  }

  &--primary {
    @include btnsType(
      getColor(blackColor),
      getColor(blackColor),
      getColor(whiteColor)
    );
  }

  &--secondary {
    @include btnsType(
      getColor(blueColor),
      getColor(blueColor),
      getColor(whiteColor)
    );
  }

  &--disable {
    pointer-events: none;
  }

  &--transparent {
    border: 0;
    background: transparent;
    color: getColor(blackColor);
    cursor: pointer;
  }
}


`;
