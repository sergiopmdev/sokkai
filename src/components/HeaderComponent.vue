<script setup lang="ts">
import MenuIcon from './icons/MenuIcon.vue'

interface Link {
  name: string
  link: string
}

const links: Link[] = [
  {
    name: 'Link 1',
    link: '/link-1'
  },
  {
    name: 'Link 2',
    link: '/link-2'
  },
  {
    name: 'Link 3',
    link: '/link-3'
  },
  {
    name: 'Link 4',
    link: '/link-4'
  }
]
</script>

<template>
  <header class="parent-container">
    <div class="child-container header-content">
      <h1 class="header-content--logo">Sokkai</h1>
      <ul class="header-content__links">
        <li v-for="(link, key) in links" v-bind:key="key">
          <router-link class="header-content__links--link" :to="link.link">{{
            link.name
          }}</router-link>
        </li>
      </ul>
      <div class="header-content__auth">
        <router-link to="/sign-in">
          <button class="header-content__auth--sign-in">Sign in</button>
        </router-link>
        <router-link to="/sign-up">
          <button class="header-content__auth--sign-up">Sign up</button>
        </router-link>
      </div>
      <MenuIcon class="header-content--menu-icon" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '../assets/base';
@import '../assets/mixins';

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
    color: $color-5;
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

    @include lg {
      display: none;
    }

    &--link {
      color: $color-5;

      &:hover {
        color: darken($color-5, 30%);
        transition: 0.2s color;
      }
    }
  }

  &__auth {
    display: flex;
    gap: 2rem;

    @include lg {
      display: none;
    }

    button {
      font-weight: bold;
    }

    &--sign-in {
      color: $color-5;
      background-color: transparent;
      border-bottom: 1px solid transparent;
      padding: 0.8rem 0;

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

  &--menu-icon {
    display: none;
    color: $color-5;
    cursor: pointer;

    @include lg {
      display: block;
    }
  }
}
</style>
