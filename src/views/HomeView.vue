<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import ArrowIcon from '@/components/icons/ArrowIcon.vue'
</script>

<template>
  <HeaderComponent />
  <div class="parent-container content-block">
    <div class="child-container content-block__content">
      <h1 class="content-block__content--text">Predicting soccer like never before</h1>
      <p class="content-block__content--description">
        Analyze, predict and gain insights from soccer matches with the power of AI
      </p>
      <button class="content-block__content--button">Get started <ArrowIcon /></button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/base';
@import '../assets/mixins';

.content-block {
  height: calc(100vh - 20rem);

  &__content {
    height: 100%;
    display: flex;
    max-width: 50rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    @include lg {
      height: auto;
      margin-top: 2rem;
    }

    &--text {
      color: $color-5;
      font-size: 4.5rem;
      text-align: center;
      padding: 0 2.5rem;

      @include lg {
        font-size: 3.5rem;
      }

      @include md {
        font-size: 3rem;
      }

      @include sm {
        font-size: 2.5rem;
      }
    }

    &--description {
      text-align: center;
      padding: 0 2.5rem;
      font-size: 1.8rem;
      margin-top: 2rem;

      @include md {
        font-size: 1.5rem;
      }
    }

    &--button {
      font-weight: bold;
      border-radius: 0.5rem;
      padding: 0.8rem 1.4rem;
      background-color: $color-5;
      align-items: center;
      margin-top: 1.5rem;
      font-size: 1.5rem;
      display: flex;
      gap: 0.5rem;

      &:hover {
        gap: 1rem;
        transition: 0.2s gap;
      }

      @include lg {
        font-size: 1.3rem;
      }

      @include md {
        font-size: 1.1rem;
      }

      @include sm {
        font-size: 0.9rem;
      }
    }
  }
}
</style>
