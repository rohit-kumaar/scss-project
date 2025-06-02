export const buttonContent = `@use "utilities/__utilities-dir" as *;

.button {
  transition: all 300ms;

  &:focus-visible,
  &:hover {
    > svg {
      > path {
        // fill: $white;
        transition: fill 300ms;
      }
    }
  }

  &-primary {
    // background: $blue-400;
    // color: $white;

    &:focus-visible,
    &:hover {
      //   border: 1px solid $blue-400;
      //   background: $white;
      //   color: $blue-400;
    }
  }
}
`;
