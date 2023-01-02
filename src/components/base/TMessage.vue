<template>
  <div class="message-box">
    <div class="message-box-dialog">
      <div class="ms-message-box--content">
        <div class="content">
          <div class="icon-message">
            <i class="fa-solid fa-triangle-exclamation"></i>
          </div>
          <div class="message-content">
            <span class="message">{{ MessageContent }}</span>
          </div>
        </div>
        <div class="mess-line"></div>
        <div class="mess-footer">
          <div class="Center">
            <button
              style="background-color: #2ca01c"
              class="ms-button-primary ms-button-radius-false ms-button-size-default pointer"
              @click="btnCloseMessageOnClick"
            >
              <div
                class="ms-button-text ms-button--text flex align-center pointer ms-button-primary"
                id="btnCloseMessage"
              >
                Đóng
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url(../../css/base/message.css);
@import url(../../css/base/icon.css);
</style>

<script>
export default {
  name: "TMessage",

  props: {
    MessageContent: {
      type: String,
      required: true,
    },
  },
  methods: {
    btnCloseMessageOnClick() {
      this.$emit("closeMessage", false);
    },
  },
};
</script>
