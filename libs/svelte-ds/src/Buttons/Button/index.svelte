<svelte:options tag="svelte-ds-button" />

<style>
  button {
    border: 2px solid #c4c03f;
    border-radius: 15px;
    background-color: #c7c57b;
    color: #fff;
    font-size: 1em;
    font-weight: 700;
    padding: 5px 10px;
    cursor: pointer;
  }
  button:hover {
    border: 2px solid #c7c57b;
    background-color: #c4c03f;
  }
  button:active {
    border: 2px solid #c7c57b;
    background-color: #9c9811;
  }
  button:focus {
    border: 2px solid #c7c57b;
    outline: none;
  }
</style>

<button><slot></slot></button>
