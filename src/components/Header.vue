<template>
    <div>
    <b-navbar class="h" toggleable="lg" type="dark">
    <b-navbar-brand to="/"><strong>강의 예약시스템</strong></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

     <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/board/free"><strong>공지사항</strong></b-nav-item>
        <b-nav-item  to="/board_l/free"><strong>분실물 센터</strong></b-nav-item>
        <b-nav-item to="/board_s/free"><strong> With Me? (스터디원 모집)</strong></b-nav-item>
      </b-navbar-nav>
     </b-collapse>
    </b-navbar>
    </div>
</template>         
<script>
export default {
  name: "Header",
  data() {
  return {};
  }
};
</script>
<style>
.h{
  background-color: rgb(52, 152, 218);
}

</style>