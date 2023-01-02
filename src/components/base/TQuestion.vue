<template>
  <div class="message-box">
    <div class="message-box-dialog">
      <div class="ms-message-box--content ms-space-between">
        <div class="content">
          <div class="icon-message mr-12-px">
            <div class="mi mi-48 mi-exclamation-question-48"></div>
          </div>
          <div class="message-content">
            <span class="message"
              >Dữ liệu đã bị thay đổi. Bạn có muốn cất không?</span
            >
          </div>
        </div>

        <div class="mess-line"></div>

        <div class="mess-footer">
          <button
            class="ms-button-radius-false ms-button-size-default pointer"
            @click="btnCloseMessageDelete"
          >
            <div
              class="ms-button-text ms-button--text flex align-center"
              id="btnCloseMessageDelete"
            >
              Hủy
            </div>
          </button>
          <div>
            <button
              class="ms-button-radius-false ms-button-size-default pointer btn-hover-gray"
              @click="btnNotQuestion"
            >
              <div
                class="ms-button-text ms-button--text flex align-center"
                id="btnCloseMessageDelete"
              >
                Không
              </div>
            </button>
            <button
              class="ms-button-primary ms-button-radius-false ms-button-size-default pointer btn-hover-green"
              @click="btnDeleteAndCloseMessage"
            >
              <div
                class="ms-button-text ms-button--text flex align-center"
                id="btnCloseMessage"
              >
                Có
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.ms-space-between .mess-footer {
  justify-content: space-between !important;
}
.message-box {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  bottom: 0;
  z-index: 2000;
  background-color: rgba(0, 0, 0, 0.233);
}
.mess-footer > button:first-child {
  background-color: transparent;
  border: 1px solid #8d9096;
  color: #111;
}
.mess-footer > button:first-child:hover {
  background-color: rgba(0, 0, 0, 0.233);
}
.message-box .message-box-dialog {
  width: 444px;
  min-width: 444px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.ms-message-box--content {
  padding: 32px;
}

.mess-footer > div > button:first-child {
  outline: none;
  border: 1px solid #8d9096;
  margin-right: 15px;
  background-color: #fff;
}
.mess-footer > div > button:hover:first-child {
  background-color: rgba(0, 0, 0, 0.233);
}
.content {
  display: flex;
  align-items: flex-start;
}

.mess-line {
  height: 1px;
  background: #b8bcc3;
  margin-bottom: 20px;
}

.mess-footer {
  position: relative;
  height: 36px;
  display: flex;
  justify-content: space-between;
}

.message-content {
  overflow: auto;
  max-height: 400px;
  margin-bottom: 32px;
  padding-left: 16px;
  padding-top: 12px;
}
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      employee: {},
      isDelete: false,
    };
  },
  methods: {
    //click "không" để đóng form
    //Author: SANG
    btnCloseMessageDelete() {
      //gọi hàm đóng form ở EmployeeList
      this.$emit("showQuestion", false);
    },

    btnNotQuestion() {
      this.$emit("showQuestion", false);
      this.$emit("killEmployeeDetail");
    },
    // click "ok" để thực hiện xóa
    //Author: SANG
    btnDeleteAndCloseMessage() {
      this.$emit("validateData");
      this.$emit("showQuestion", false);
    },
  },
};
</script>
