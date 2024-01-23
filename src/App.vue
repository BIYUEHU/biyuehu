<script setup lang="ts">
import axios from 'axios';
import config from './config';
import { ref } from 'vue';

document.title = config.title;
particlesJS.load('particles-js', 'particles.json');

const hitokoto = ref('');

async () => {
  hitokoto.value = await axios('https://hotaru.icu/api/hitokoto/v2/?format=text');
};
</script>

<template>
  <div id="particles-js"></div>
  <div id="bg"></div>
  <div id="modal" class="modal_text">
    <img :src="config.avatar" alt="avatar" class="modal__img" width="200" height="200" />
    <div class="modal__name">Hotaru</div>
    <div class="modal__intro">{{ hitokoto }}</div>
    <div class="modal_tech">{{ config.content }}</div>
    <div class="button_group">
      <a
        v-for="element in config.button"
        :key="element.text"
        :href="element.link"
        :target="element.blank ? '_blank' : '_self'"
        :class="element.class ?? 'modal__button'"
        >{{ element.text }}</a
      >
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  width: 100%;
  height: 100%;
}

body {
  font-family: Microsoft YaHei;
  width: 100%;
  height: 100%;
}

#bg {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -10;
  top: 0;
  left: 0;
  background-image: url(https://pic.imgdb.cn/item/6497f5991ddac507cc2c300b.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

#bg::before {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  /* background-color: rgba(0, 0, 0, 0.2); */
}

#modal {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 360px;
  height: 600px;
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 0 32px;
  border-top: 1px solid hsla(0, 0%, 1000%, 0.5);
  border-left: 1px solid hsla(0, 0%, 1000%, 0.5);
  background-image: linear-gradient(90deg, rgba(99, 99, 99, 0.1), rgba(99, 99, 99, 0.1) 1px, transparent 0, transparent),
    linear-gradient(90deg, hsla(0, 0%, 100%, 0.1) -20%, transparent 15%),
    linear-gradient(0deg, hsla(0, 0%, 100%, 0.1), transparent 25%);
  background-color: rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 10px 5px hsla(0, 0%, 100%, 0.15);
  backdrop-filter: blur(3px);
  border-radius: 15px;
  transform: translate(-50%, -50%);
}

.modal_text {
  font-size: 20px;
  text-align: center;
  color: #fff;
  text-shadow: 0 0 2px #000;
}

.modal__img {
  border-radius: 100%;
}

.modal__name {
  font-size: 30px;
}

.modal_tech {
  font-size: 21px;
}

.button_group {
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  margin: 10px 0;
  gap: 12px;
}

.modal__button {
  display: block;
  width: 100%;
  height: 42px;
  line-height: 40px;
  color: #000;
  background-color: #fff;
  border-radius: 8px;
  text-decoration: none;
  border: 1px solid #fff;
  transition:
    color 0.3s,
    background-color 0.3s;
}

.modal__button:hover {
  color: #fff;
  background-color: transparent;
}

.modal__button.github {
  color: #fff;
  background-color: transparent;
}

.modal__button.github:hover {
  color: #000;
  background-color: #fff;
}
</style>
