<script setup lang="ts"></script>

<template>
  <header class="parent-container">
    <div class="child-container header-content">
      <h1 class="header-content--logo">Sokkai</h1>
      <ul class="header-content__links">
        <li class="header-content__links--link">Link 1</li>
        <li class="header-content__links--link">Link 2</li>
        <li class="header-content__links--link">Link 3</li>
        <li class="header-content__links--link">Link 4</li>
      </ul>
      <div class="header-content__auth">
        <button class="header-content__auth--sign-in"><a>Sign in</a></button>
        <button class="header-content__auth--sign-up"><a>Sign up</a></button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '../assets/base';

header {
  height: 6rem;
  display: flex;
  justify-content: center;
}

.header-content {
  height: full;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2rem;

  &--logo {
    font-size: 1.8rem;
    cursor: pointer;

    &:hover {
      color: darken($color-5, 30%);
      transition: 0.2s color;
    }
  }

  &__links {
    display: flex;
    list-style-type: none;
    gap: 4rem;

    &--link {
      cursor: pointer;

      &:hover {
        color: darken($color-5, 30%);
        transition: 0.2s color;
      }
    }
  }

  &__auth {
    display: flex;
    gap: 2rem;

    &--sign-in {
      color: $color-5;
      background-color: transparent;
      border-bottom: 1px solid transparent;

      &:hover {
        border-bottom-color: $color-5;
        transition: 0.2s border-bottom-color;
      }
    }

    &--sign-up {
      padding: 0.8rem 1rem;
      background-color: $color-5;
      border-radius: 0.3rem;

      &:hover {
        background-color: darken($color-5, 30%);
        transition: 0.2s background-color;
      }
    }
  }
}
</style>
