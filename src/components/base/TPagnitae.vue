<template>
  <paginate
    :page-count="pageCount"
    :page-range="3"
    :margin-pages="1"
    :click-handler="clickCallback"
    :prev-text="'Trước'"
    :next-text="'Sau'"
    :container-class="'pagination'"
    :page-class="'page-item'"
  >
  </paginate>
</template>
<script>
import Paginate from "vuejs-paginate-next";
export default {
  components: {
    paginate: Paginate,
  },
  methods: {
    clickCallback(pageNum) {
      //cập nhật lại trang đang được chọn
      this.$emit("setPageNum", pageNum);

      // //gọi hàm load data
      // this.$emit("loadDataDefault",this.selectPageSize,pageNum);

      if (this.isCheckSearch) {
        this.$emit("stateSearch", pageNum);
      } else {
        this.$emit("loadDataDefault", this.selectPageSize, pageNum);
      }
    },
  },
  props: {
    pageCount: {
      type: Number,
    },
    selectPageSize: {
      type: Number,
    },
    isCheckSearch: {
      type: Boolean,
    },
  },
};
</script>
<style>
@import url(../../css/base/pagniate.css);
</style>
