<template>
  <button><slot></slot></button>
</template>

<script>
export default {
  name: 'Button',
}
</script>

<style>
  button {
    border: 2px solid #3c9da6;
    border-radius: 15px;
    background-color: #75c0c7;
    color: #fff;
    font-size: 1em;
    font-weight: 700;
    padding: 5px 10px;
    cursor: pointer;
  }
  button:hover {
    border: 2px solid #75c0c7;
    background-color: #3c9da6;
  }
  button:active {
    border: 2px solid #75c0c7;
    background-color: #0a8691;
  }
  button:focus {
    border: 2px solid #75c0c7;
    outline: none;
  }
</style>
