<template>
  <div class="search-input">
    <input type="text" placeholder="Search jokes..." />
    <p>Found jokes: 12</p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.search-input {
  width: 626px;

  @media screen and (max-width: $tablet) {
    width: 100%;
  }

  input {
    width: 100%;
    padding: 19px 30px;
    font-family: Fira Sans;
    font-size: 22px;
    font-weight: 700;
    line-height: 26.4px;
    letter-spacing: 0px;
    text-align: left;
    color: $clr-purple;
    border: none;
    outline: none;
    box-shadow: 0px 7px 12px 0px $clr-grey;

    &::placeholder {
      color: inherit;
    }
  }

  p {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    color: $clr-dark-grey;
    margin: 20px 0 0 36px;
  }
}
</style>
