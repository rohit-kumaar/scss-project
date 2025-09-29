export const buttonContent = `@use "utilities/__utilities-dir" as *;

@mixin btnsType($bd, $bg, $color) {
  border: 1px solid $bd;
  background: $bg;
  color: $color;
  cursor: pointer;
  transition: all 500ms;

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
        fill: $white;
        transition: fill 500ms;
      }
    }
  }

  &--primary {
    @include btnsType(getColor("black"), getColor("black"), getColor("white"));
  }

  &--secondary {
    @include btnsType(getColor("blue"), getColor("blue"), getColor(white));
  }

  &--disable {
    pointer-events: none;
  }

  &--transparent {
    border: 0;
    background: transparent;
    color: $black;
    cursor: pointer;
  }
}

`;
