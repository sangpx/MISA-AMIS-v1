<template>
  <div>
    <div class="ms-popup-box">
      <div class="ms-loading t-loading-center" v-if="is">
        <TLoading />
      </div>
      <div class="ms-popup">
        <div class="ms-popup-header">
          <div class="ms-popup--title">
            <div class="header-popup flex">
              <div class="title-popup">Thông tin nhân viên</div>
              <label for="" class="ms-component con-ms-checkbox px-6">
                <input type="checkbox" class="ms-checkbox" />
                <span>Là khách hàng</span>
              </label>
              <label for="" class="ms-component con-ms-checkbox px-6">
                <input type="checkbox" class="ms-checkbox" />
                <span>Là khách hàng</span>
              </label>
            </div>
          </div>
          <div class="ms-popup-close">
            <div
              class="mi mi-24 mi-help__nav mr-12-px help-btn ms-has-tooltip"
              @click="btnTest"
            ></div>
            <div
              class="mi mi-24 mi-close ms-has-tooltip mt-6-px"
              @click="btnClosePopup"
            ></div>
          </div>
        </div>
        <div class="ms-popup--content popup-h-73">
          <div class="flex pd-b-12">
            <div class="w-1/2 p-r-26">
              <div class="flex row-input">
                <div class="w-2/5 p-r-6">
                  <div class="ms-input ms-editor">
                    <div class="flex">
                      <div class="ms-input-title">
                        <div>Mã</div>
                      </div>
                      <div class="ms-input-title-require">&nbsp;*</div>
                    </div>
                    <div
                      class="ms-component ms-con-input-label ms-input style-label"
                    >
                      <div class="ms-con-input">
                        <input
                          proName="txtEmployeeCode"
                          ref="txtEmployeeCodeRef"
                          id="txtEmployeeCode"
                          :class="{ errorMsg: isError.EmployeeCode }"
                          v-model="employee.EmployeeCode"
                          type="text"
                          class="input-focus ms-inputx ms-input--input normal hasValue placehoder ms-input-normal"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-3/5">
                  <div class="ms-input ms-editor">
                    <div class="flex">
                      <div class="ms-input-title">
                        <div>Tên</div>
                      </div>
                      <div class="ms-input-title-require">&nbsp;*</div>
                    </div>
                    <div
                      class="ms-component ms-con-input-label ms-input style-label"
                    >
                      <div class="ms-con-input">
                        <input
                          proName="EmployeeName"
                          :class="{ errorMsg: isError.EmployeeName }"
                          ref="txtEmployeeNameRef"
                          v-model="employee.EmployeeName"
                          type="text"
                          class="input-focus ms-inputx ms-input--input normal hasValue placehoder ms-input-normal"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex row-input">
                <div class="combo-editor w-full">
                  <div class="ms-combo ms-combo-box ms-editor">
                    <div class="combo-title flex">
                      <div class="combo-title__text">Đơn vị</div>
                      <div class="combo-required__text">&nbsp;*</div>
                    </div>
                    <div class="combo-main-con">
                      <select
                        @click="btnSelect"
                        ref="selectRef"
                        :class="{ errorMsg: isError.DepartmentId }"
                        class="input-focus selected-options"
                        name=""
                        id="cbxDepartment"
                        v-model="employee.DepartmentId"
                      >
                        <option value="142cb08f-7c31-21fa-8e90-67245e8b283e">
                          Phòng nhân sự
                        </option>
                        <option value="17120d02-6ab5-3e43-18cb-66948daf6128">
                          Phòng tuyển sinh
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex row-input w-full">
                <div class="ms-input ms-editor">
                  <div class="flex">
                    <div class="ms-input-title">
                      <div>Chức danh</div>
                    </div>
                  </div>
                  <div
                    class="ms-component ms-con-input-label ms-input style-label"
                  >
                    <div class="ms-con-input">
                      <input
                        v-model="employee.EmployeePosition"
                        type="text"
                        class="input-focus ms-inputx ms-input--input normal hasValue placehoder ms-input-normal"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-1/2">
              <div class="flex row-input">
                <div class="w-2/5 p-r-6">
                  <div class="ms-date-picker-container datepicker">
                    <div class="flex">
                      <div class="ms-input-title">Ngày sinh</div>
                    </div>
                    <div class="form-date" @click="showDatePicker">
                      <input
                        v-model="employee.DateOfBirth"
                        data-v-726e69cc=""
                        tabindex="0"
                        placeholder="DD/MM/YYYY"
                        class="input-focus datepicker-input input-date"
                      />
                      <!-- <span class="mi mi-24 mi-calendar icon-datepicker"></span> -->
                      <input
                        v-model="employee.DateOfBirth"
                        type="date"
                        class="mi mi-24 mi-calendar icon-datepicker"
                      />
                    </div>
                  </div>
                </div>
                <div class="w-3/5">
                  <div class="gender items-center">
                    <div class="label-input">Giới tính</div>
                    <div class="p-t-5">
                      <div class="ms-radio-group ms-radio-is-vertical-false">
                        <label for="" class="ms-component con-ms-radio m-r-20">
                          <input
                            value="1"
                            v-model="employee.Gender"
                            type="radio"
                            class="ms-radio--input pointer"
                            name="gender"
                          />
                          <span class="ms-radio--label">Nam</span>
                        </label>
                        <label for="" class="ms-component con-ms-radio m-r-20">
                          <input
                            value="0"
                            v-model="employee.Gender"
                            type="radio"
                            class="ms-radio--input pointer"
                            name="gender"
                          />
                          <span class="ms-radio--label">Nữ</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex row-input">
                <div class="w-3/5 p-r-6">
                  <div class="ms-input ms-editor">
                    <div class="flex">
                      <div class="ms-input-title">Số CMND</div>
                    </div>
                    <div
                      class="ms-component ms-con-input-label ms-input style-label"
                    >
                      <div class="ms-con-input">
                        <input
                          v-model="IdentityNumber"
                          :class="{
                            errorMsg: isError.IdentityNumber,
                            correctMsg: isCorrect.IdentityNumber,
                          }"
                          type="text"
                          class="ms-inputx ms-input--input normal hasValue placehoder ms-input-normal"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-2/5">
                  <div class="ms-date-picker-container">
                    <div class="flex">
                      <div class="ms-input-title text-center">Ngày cấp</div>
                    </div>
                    <div class="form-date">
                      <input
                        v-model="employee.IdentityDate"
                        format="DD/MM/YYYY"
                        tabindex="0"
                        placeholder="DD/MM/YYYY"
                        class="input-focus input-date"
                      />
                      <input
                        v-model="employee.IdentityDate"
                        lang="vi"
                        type="date"
                        class="mi mi-24 mi-calendar icon-datepicker"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex row-input w-full">
                <div class="ms-input ms-editor">
                  <div class="flex">
                    <div class="ms-input-title">
                      <div>Nơi cấp</div>
                    </div>
                  </div>
                  <div
                    class="ms-component ms-con-input-label ms-input style-label"
                  >
                    <div class="ms-con-input">
                      <input
                        v-model="employee.IdentityPlace"
                        type="text"
                        class="input-focus ms-inputx ms-input--input normal hasValue placehoder ms-input-normal"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex">
            <div class="popup-tab w-full">
              <div class="navigation-popup-tab">
                <div class="ms-tabs con-ms-tabs ms-tabs-position-top">
                  <div class="con-ms-ul-tabs tab-other">
                    <ul class="ul-tabs ms-tabs-ul ms-ul-tabs-left">
                      <li
                        class="ms-tabs-li flex active-item-tab-other"
                        @click="btnShowTab1"
                        :class="{ 'active-item': isTab1 }"
                      >
                        <div class="ms-tabs-btn">
                          <div class="ms-label tab-label">Liên hệ</div>
                        </div>
                      </li>
                      <li
                        class="ms-tabs-li flex"
                        @click="btnShowTab2"
                        :class="{ 'active-item': isTab2 }"
                      >
                        <div class="ms-tabs-btn">
                          <div class="ms-label tab-label">
                            Tài khoản ngân hàng
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div class="con-slot-tabs border">
                    <div class="con-tab ms-tabs--content">
                      <!-- tab1 -->
                      <div class="cls-style-tab" v-if="isTab1">
                        <div class="w-full row-input">
                          <div class="ms-input ms-editor">
                            <div class="flex">
                              <div class="ms-input-title">Địa chỉ</div>
                            </div>
                            <div
                              class="ms-component ms-con-input-label ms-input style-label"
                            >
                              <div class="ms-con-input">
                                <input
                                  v-model="employee.Address"
                                  data-v-146b109a=""
                                  maxlength="255"
                                  type="text"
                                  class="input-focus ms-inputx ms-input--input normal hasValue placehoder ms-input-normal"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="flex">
                          <div class="w-1/4 p-r-6">
                            <div class="ms-input ms-editor">
                              <div class="flex">
                                <div class="ms-input-title">ĐT di động</div>
                              </div>
                              <div
                                class="ms-component ms-con-input-label ms-input style-label"
                              >
                                <div class="ms-con-input">
                                  <input
                                    v-model="TelephoneNumber"
                                    :class="{
                                      errorMsg: isError.TelephoneNumber,
                                      correctMsg: isCorrect.TelephoneNumber,
                                    }"
                                    data-v-146b109a=""
                                    maxlength="50"
                                    type="text"
                                    class="ms-inputx ms-input--input normal hasValue placehoder ms-input-normal"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="w-1/4 p-r-6">
                            <div class="ms-input ms-editor">
                              <div class="flex">
                                <div class="ms-input-title">ĐT cố định</div>
                              </div>
                              <div
                                class="ms-component ms-con-input-label ms-input style-label"
                              >
                                <div class="ms-con-input">
                                  <input
                                    v-model="PhoneNumber"
                                    :class="{
                                      errorMsg: isError.PhoneNumber,
                                      correctMsg: isCorrect.PhoneNumber,
                                    }"
                                    data-v-146b109a=""
                                    maxlength="50"
                                    type="text"
                                    class="ms-inputx ms-input--input normal hasValue placehoder ms-input-normal"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="w-1/4">
                            <div class="ms-input ms-editor">
                              <div class="flex">
                                <div class="ms-input-title">Email</div>
                              </div>
                              <div
                                class="ms-component ms-con-input-label ms-input style-label"
                              >
                                <div class="ms-con-input">
                                  <input
                                    :class="{
                                      errorMsg: isError.Email,
                                      correctMsg: isCorrect.Email,
                                      'input-blur': isBlurInput,
                                      'input-focus': isFocusInput,
                                    }"
                                    checkMail
                                    id="txtEmail"
                                    v-model="Email"
                                    data-v-146b109a=""
                                    maxlength="50"
                                    type="text"
                                    class="ms-inputx ms-input--input normal hasValue placehoder ms-input-normal"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- tab2 -->

                      <div class="tab-bank-account" v-if="isTab2">
                        <div class="grid-model-control-x">
                          <div class="gridComponent content-height-100-percent">
                            <div class="flex">
                              <div
                                class="table-scroll dynamic-table"
                                style="min-height: 0px; overflow: auto"
                              >
                                <table
                                  class="ms-table"
                                  style="min-width: calc(100% + 0px)"
                                >
                                  <thead class="ms-table--thead">
                                    <tr>
                                      <th
                                        class="dynamic-header col-0 col p-0"
                                        style="
                                          min-width: 150px;
                                          width: 150px;
                                          top: 0px;
                                        "
                                      >
                                        <div class="flex th-height text-left">
                                          <div
                                            class="th-table padding-th w-full cursor-pointer"
                                          >
                                            Số tài khoản
                                          </div>
                                        </div>
                                      </th>
                                      <th
                                        class="dynamic-header col-0 col p-0"
                                        style="
                                          min-width: 150px;
                                          width: 200px;
                                          top: 0px;
                                        "
                                      >
                                        <div class="flex th-height text-left">
                                          <div
                                            class="th-table padding-th w-full cursor-pointer"
                                          >
                                            Tên ngân hàng
                                          </div>
                                        </div>
                                      </th>
                                      <th
                                        class="dynamic-header col-0 col p-0"
                                        style="
                                          min-width: 150px;
                                          width: 180px;
                                          top: 0px;
                                        "
                                      >
                                        <div class="flex th-height text-left">
                                          <div
                                            class="th-table padding-th w-full cursor-pointer"
                                          >
                                            Chi nhánh
                                          </div>
                                        </div>
                                      </th>
                                      <th
                                        class="dynamic-header col-0 col p-0"
                                        style="min-width: 200px; top: 0px"
                                      >
                                        <div class="flex th-height text-left">
                                          <div
                                            class="th-table padding-th w-full cursor-pointer"
                                          >
                                            tỉnh/tp của ngân hàng
                                          </div>
                                        </div>
                                      </th>
                                      <th
                                        class="text-right wiget wiget-title right-0"
                                        style="
                                          min-width: 40px;
                                          width: 40px;
                                          max-width: 40px;
                                          top: 0px;
                                        "
                                      ></th>
                                    </tr>
                                  </thead>

                                  <tbody class="dis-contents">
                                    <tr
                                      class="tr-values vs-table--tr tr-table-state-null select-row selected"
                                    >
                                      <td
                                        class="td ms-table--td dynamic-column"
                                      >
                                        <div class="editable editor"></div>
                                      </td>
                                      <td
                                        class="td ms-table--td dynamic-column"
                                      >
                                        <div class="editable editor"></div>
                                      </td>
                                      <td
                                        class="td ms-table--td dynamic-column"
                                      >
                                        <div class="editable editor"></div>
                                      </td>
                                      <td
                                        class="td ms-table--td dynamic-column"
                                      >
                                        <div class="editable editor"></div>
                                      </td>
                                      <td
                                        class="td ms-table--td dynamic-column"
                                      >
                                        <div class="editable editor"></div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="grid-control-item">
                          <div class="btn-grid-control">
                            <button
                              class="ms-component ms-button ms-button-size-small ms-button-secondary ms-button-secondary-disabled-false ms-button-radius-false ms-button"
                            >
                              <div
                                class="ms-button-text ms-button--text flex align-center"
                                style="color: #333"
                              >
                                Thêm dòng
                              </div>
                            </button>
                            <button
                              class="ms-component ms-button ms-button-size-small ms-button-secondary ms-button-secondary-disabled-false ms-button-radius-false ms-button"
                            >
                              <div
                                class="ms-button-text ms-button--text flex align-center"
                                style="color: #333"
                              >
                                Xóa hết dòng
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="footer-container">
            <div class="divide"></div>
            <div class="popup-footer">
              <div class="popup-footer-button flex">
                <div class="w-full flex align-right">
                  <div class="right-group-button-popup flex">
                    <div class="first-right-button px-3 pointer">
                      <button
                        class="ms-button-size-default ms-button-secondary ms-button-radius-false pointer btn-hover-gray"
                        @click="btnAddOnClick"
                      >
                        <div class="ms-button-text">Cất</div>
                      </button>
                    </div>
                    <div class="second-right-button">
                      <button
                        class="ms-button-radius-false ms-button-secondary ms-button-primary ms-button-size-default pointer btn-hover-green"
                        @click="btnSaveAndAddOnClick"
                      >
                        <div
                          class="ms-button-text ms-button--text flex align-center"
                        >
                          Cất và thêm
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="w-1/2 btn-left">
                  <div class="left-group-button-popup">
                    <button
                      class="ms-button-size-default ms-button-secondary ms-button-radius-false pointer btn-hover-gray"
                      @click="btnClosePopup"
                    >
                      <div class="ms-button-text">Hủy</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TMessage
      v-if="isShowMessage"
      :MessageContent="MessageContent"
      @closeMessage="showMessage"
    />
    <TQuestion
      v-if="isQuestion"
      @showQuestion="showQuestion"
      @validateData="validateData"
      @killEmployeeDetail="killEmployeeDetail"
    />
  </div>
</template>
<style>
@import url(../../css/layout/employeeDetail.css);
@import url(../../css/base/button.css);
</style>

<script>
import DatePicker from "vuejs3-datepicker";
import TQuestion from "@/components/base/TQuestion.vue";
import $ from "jquery";
import axios from "axios";
import TLoading from "@/components/base/TLoading.vue";
import TMessage from "@/components/base/TMessage.vue";

export default {
  components: {
    TLoading,
    TMessage,
    TQuestion,
    //DatePicker
  },
  data() {
    return {
      isTab1: true,
      isTab2: false,
      emp: {},
      employee: {},
      isShow: false,
      edit: 0,
      isShowMessage: false,
      isShowToast: false,
      MessageContent: "",
      isError: {},
      isCorrect: {},
      Email: "",
      IdentityNumber: "",
      TelephoneNumber: "",
      PhoneNumber: "",
      isQuestion: false,
      isBlurInput: false,
      isFocusInput: false,
      detailSelectPage: 0,
      checkChange: false,
    };
  },
  methods: {
    //click để hiển thị tab1
    //Author: SANG
    btnShowTab1() {
      try {
        if (this.isTab2) {
          //hiển tab1
          this.isTab1 = true;

          //ẩn tab2
          this.isTab2 = false;
        }
      } catch (error) {
        console.log(error);
      }
    },

    //click để hiển thị tab2
    //Author: SANG
    btnShowTab2() {
      try {
        //ẩn tab1
        this.isTab1 = false;

        //hiển tab2
        this.isTab2 = true;
      } catch (error) {
        console.log(error);
      }
    },

    killEmployeeDetail() {
      this.$emit("showPopup", false);
    },

    // click button cất
    //Author: SANG
    btnAddOnClick() {
      try {
        if (this.validateData()) {
          var me = this;
          //gán lại giá trị cho mảng employee trước khi thêm
          this.employee.Email = this.Email;
          this.employee.IdentityNumber = this.IdentityNumber;

          // Form đang ở thêm mới nhân viên
          if (me.EditMode == 0) {
            //alert(this.employee.DepartmentId);
            axios
              .post("https://amis.manhnv.net/api/v1/Employees", this.employee)
              .then(function (res) {
                me.isShowToast = true;
                me.detailSelectPage += 1;
                me.$emit("setSelectPageSize", me.detailSelectPage);
                me.$emit("loadDataDefault", me.detailSelectPage, me.pageNum);

                me.$emit("showPopup", false);
              })
              .catch(function (res) {
                me.showMessage(true);
                me.MessageContent =
                  "Đã xảy ra lỗi,vui lòng liên hệ MISA để được hỗ trợ";
                console.log(res);
              });
          }
          //Form ở chế độ chỉnh sửa
          else if (me.EditMode == 1) {
            axios
              .put(
                `https://amis.manhnv.net/api/v1/Employees/${this.employee.EmployeeId}`,
                this.employee
              )
              .then(function (res) {
                me.$emit("loadDataDefault", me.selectPageSize, me.pageNum);
                me.$emit("showPopup", false);
              })
              .catch(function (res) {
                me.showMessage(true);
                me.MessageContent =
                  "Đã xảy ra lỗi,vui lòng liên hệ MISA để được hỗ trợ";
                console.log(res);
              });
          }
        }
      } catch (error) {
        console.log(error);
      }
    },

    //gọi hàm đóng Popup ở EmployeeList
    //Author: SANG
    btnClosePopup() {
      try {
        //hiển thị cảnh báo khi có dữ liệu trên form trước khi đóng form
        if (this.checkChange) {
          this.showQuestion(true);
        } else {
          //gọi hàm đóng form
          this.$emit("showPopup", false);
        }
      } catch (error) {
        console.log(error);
      }
    },

    //hiển thị thông báo khi nhập sai
    //Author: SANG
    showMessage(isMessage) {
      this.isShowMessage = isMessage;
    },

    //Click nút cất và thêm để thực hiện thêm mới và gọi lại form
    //Author: SANG
    btnSaveAndAddOnClick() {
      try {
        if (this.validateData()) {
          this.isError["EmployeeName"] =
            this.isError["DepartmentId"] =
            this.isError["EmployeeCode"] =
              true;
          var me = this;
          //gán lại giá trị cho mảng employee trước khi thêm
          this.employee.Email = this.Email;
          this.employee.IdentityNumber = this.IdentityNumber;

          // Form đang ở thêm mới nhân viên
          if (me.EditMode == 0) {
            //alert(this.employee.DepartmentId);zz
            axios
              .post("https://amis.manhnv.net/api/v1/Employees", this.employee)
              .then(function (res) {
                me.isShowToast = true;

                me.detailSelectPage += 1;
                me.$emit("setSelectPageSize", me.detailSelectPage);
                me.$emit("loadDataDefault", me.detailSelectPage, me.pageNum);
                //me.$emit("showPopup",false);

                me.$emit("setEmp", me.employee);
              })
              .finally(function (res) {
                //xóa object
                me.employee = {};
                //khởi tạo lại các giá trị
                me.Email = me.IdentityNumber = "";
                //khởi tạo lại mảng để thực hiện thêm mới
                me.employee = {};

                //lấy mã nhân viên mới
                me.newEmployeeCode();
              })
              .catch(function (res) {
                me.showMessage(true);
                me.MessageContent =
                  "Đã xảy ra lỗi,vui lòng liên hệ MISA để được hỗ trợ";
                console.log(res);
              });
          }

          //Form ở chế độ chỉnh sửa
          else if (me.EditMode == 1) {
            axios
              .put(
                `https://amis.manhnv.net/api/v1/Employees/${this.employee.EmployeeId}`,
                this.employee
              )
              .then(function (res) {
                me.$emit("loadDataDefault", me.selectPageSize, me.pageNum);

                //khởi tạo lại mảng
                me.employee = {};
                me.$emit("setEmp", me.employee);

                //khởi tạo lại chế độ edit về thêm mới nhân viên
                me.$emit("setEdit", 0);
              })
              .finally(function (res) {
                //gọi hàm lấy mã nhân viên mới
                me.newEmployeeCode();
              })
              .catch(function (res) {
                me.showMessage(true);
                me.MessageContent =
                  "Đã xảy ra lỗi,vui lòng liên hệ MISA để được hỗ trợ";
                console.log(res);
              });
          }
        }
      } catch (error) {
        console.log(error);
      }
    },

    showQuestion(isQ) {
      this.isQuestion = isQ;
    },

    //Định dạng ngày tháng
    //Author: SANG
    formatDate(dob) {
      let dateConvert = new Date(dob);
      if (dob && dateConvert instanceof Date && !isNaN(dateConvert.valueOf())) {
        let date = dateConvert.getDate();
        date = date < 10 ? `0${date}` : date;
        //Lấy ra tháng
        let month = dateConvert.getMonth() + 1;
        month = month < 10 ? `0${month}` : month;
        //lấy ra năm
        let year = dateConvert.getFullYear();
        return `${dateConvert}/${month}/${year}`;
      } else {
        return "";
      }
    },

    //Sự kiện khi focus vào input
    //Author: SANG
    focusInput() {
      //kiểm tra xem giá trị mảng isError[email] có giá trị là true(hiển thị border màu đỏ cảnh báo) hay ko
      if (this.isError.Email != true) {
        this.isFocusInput = true;
      }
    },

    //sự kiện khi ko focus vào input
    //Author: SANG
    blurInput() {
      if (!this.isError.Email) {
        this.isBlurInput = false;
      }
    },

    //valide dữ liệu
    validateData() {
      try {
        if (!this.employee.EmployeeName) {
          this.showMessage(true);
          this.MessageContent = "Họ và tên không được để trống";
          this.isError["EmployeeName"] = true;
          return false;
        }
        if (!this.employee.EmployeeCode) {
          this.showMessage(true);
          this.MessageContent = "Mã nhân viên không được để trống";
          this.isError["EmployeeCode"] = true;
          return false;
        }
        if (!this.employee.DepartmentId) {
          this.showMessage(true);
          this.MessageContent = "Đơn vị không được để trống";
          this.isError["DepartmentId"] = true;
          return false;
        }

        if (this.isError["Email"]) {
          this.showMessage(true);
          this.MessageContent = "Email không đúng định dạng";
          return false;
        }

        if (this.isError["IdentityNumber"]) {
          this.showMessage(true);
          this.MessageContent = "Số CMND không đúng định dạng";
          return false;
        }

        return true;
      } catch (error) {
        console.log(error);
      }
    },

    btnTest() {
      console.log(this.isError);
      this.isError["EmployeeCode"] = false;
    },

    //Hàm lấy mã nhân viên mới
    //Author: SANG
    newEmployeeCode() {
      var me = this;
      //lấy mã nhân viên mới
      axios
        .get("https://amis.manhnv.net/api/v1/Employees/NewEmployeeCode")
        .then(function (res) {
          let newEmployeeCode = res.data;
          me.employee.EmployeeCode = newEmployeeCode;
        })
        .catch(function (res) {
          me.showMessage(true);
          me.MessageContent =
            "Đã xảy ra lỗi,vui lòng liên hệ MISA để được hỗ trợ";
          console.log(res);
        });
    },
  },
  props: {
    employeeSelected: {
      type: Object,
    },
    EditMode: {
      type: Number,
      required: true,
    },
    employees: {
      type: [],
    },
    pageNum: {
      type: Number,
    },
    selectPageSize: {
      type: Number,
    },
  },

  beforeUpdate() {
    //hiển thị border cảnh báo khi nhập sai dữ liệu trong form

    //ẩn border cảnh báo khi user đang nhập đúng định dạng

    //Validate ID
    if (this.employee.DepartmentId) {
      this.isError["DepartmentId"] = false;
    }

    //validate Code
    if (!this.employee.EmployeeCode != true) {
      this.isError["EmployeeCode"] = false;
    }
    //validate Name
    if (this.employee.EmployeeName) {
      this.isError["EmployeeName"] = false;
    }
  },

  updated() {},

  created() {
    //gán giá trị lấy từ props
    this.detailSelectPage = this.selectPageSize;

    var me = this;
    //Nếu edit là 0 thì thực hiển thêm mới nh ân viên
    if (this.EditMode == 0) {
      //lấy mã nhân viên mới
      axios
        .get("https://amis.manhnv.net/api/v1/Employees/NewEmployeeCode")
        .then(function (res) {
          let newEmployeeCode = res.data;
          me.employeeSelected.EmployeeCode = newEmployeeCode;
          me.employee = me.employeeSelected;
        });
    } else if (this.EditMode == 1) {
      me.employee = me.employeeSelected;

      //validate ngày trước khi hiển thị
      me.employee.DateOfBirth = this.formatDate(me.employee.DateOfBirth);
      me.employee.IdentityDate = this.formatDate(me.employee.IdentityDate);

      //lấy ra giá trị email
      me.Email = me.employee.Email;

      //lấy ra số CMND
      me.IdentityNumber = me.employee.IdentityNumber;
    }
  },

  mounted() {
    //focus ô nhập liệu đầu tiên
    this.$refs.txtEmployeeCodeRef.focus();
  },

  // watch: {
  //   //kiểm tra xem user có nhập đúng định dạng Email
  //   Email: function () {
  //     let email = new String(this.Email);
  //     // //validate email
  //     if (!email.endsWith("@gmail.com") && !this.Email != true) {
  //       //hiện thị border đỏ để cảnh báo
  //       this.isError["Email"] = true;

  //       //ẩn border xanh lá khi sai định dạng
  //       this.isCorrect["Email"] = false;
  //       this.checkChange = true;
  //     } else {
  //       //ẩn border cảnh báo
  //       this.isError["Email"] = false;
  //       //hiển thị border khi đúng định dạng
  //       this.isCorrect["Email"] = true;
  //     }

  //     if (!this.Email) {
  //       this.checkChange = false;
  //     }
  //   },

  //   IdentityNumber: function () {
  //     //kiểm tra số CMND ko phải số thì hiển thị border màu đỏ cảnh báo
  //     if (!isNaN(this.IdentityNumber)) {
  //       this.isError["IdentityNumber"] = false;
  //       this.checkChange = true;

  //       //hiển thị border xanh khi đúng định dạng
  //       this.isCorrect["IdentityNumber"] = true;
  //     }
  //     //hiển thị border khi đúng định dạng
  //     else {
  //       this.checkChange = true;
  //       this.isCorrect["IdentityNumber"] = true;
  //       this.isError["IdentityNumber"] = true;
  //     }

  //     //kiểm tra xem có undefine
  //     if (!this.IdentityNumber) {
  //       this.checkChange = false;
  //     }
  //   },

  //   TelephoneNumber: function () {
  //     //alert(this.IdentityNumber)
  //     if (!isNaN(this.TelephoneNumber)) {
  //       this.isError["TelephoneNumber"] = false;
  //       this.isCorrect["TelephoneNumber"] = true;
  //       this.checkChange = true;
  //     } else {
  //       this.checkChange = true;
  //       this.isError["TelephoneNumber"] = true;
  //     }

  //     //kiểm tra undefine
  //     if (!this.TelephoneNumber) {
  //       this.checkChange = false;
  //     }
  //   },

  //   PhoneNumber: function () {
  //     //alert(this.IdentityNumber)
  //     if (!isNaN(this.PhoneNumber)) {
  //       this.checkChange = true;
  //       this.isError["PhoneNumber"] = false;
  //     } else {
  //       this.checkChange = true;
  //       this.isError["PhoneNumber"] = true;
  //     }

  //     //kiểm tra undefine
  //     if (!this.PhoneNumber) {
  //       this.checkChange = false;
  //     }
  //   },
  // },
};
</script>
