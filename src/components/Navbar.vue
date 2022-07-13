<script setup lang="ts"></script>

<template>
  <div id="navbar">
    <nav class="navbar-sticky section">
      <ul>
        <li>
          <el-link href="/">Home</el-link>
        </li>
        <li>
          <el-link href="/personnages">Personnages</el-link>
        </li>
      </ul>
      <ul>
        <li>
          <el-link
            href="https://github.com/CorentinNrd/RickandMorty"
            target="_blank"
            >Github du projet</el-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss">
#navbar {
  .navbar-sticky {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border-bottom: 1px solid #e6e6e6;
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 0px 20px 0px 20px;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    height: 4rem;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      gap: 20px;
    }
  }
}
</style>
