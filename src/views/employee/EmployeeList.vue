<template>
  <div>
    <div class="t-header-content">
      <div
        class="ms-dropdown-menu"
        :style="{ top: topDrop, left: leftDrop }"
        v-if="isDropDownMenu"
      >
        <div class="drop-list">
          <div class="drop-item">Nhân bản</div>
          <div class="drop-item" @click="btnDeleteOnClick">Xóa</div>
          <div class="drop-item">Ngưng sử dụng</div>
        </div>
      </div>

      <div class="t-header-title-content">Nhân viên</div>
      <div class="t-header-content-feature flex">
        <button
          class="btn-hover-gray ms-btn-30 ms-btn-pad-16-8 btn-bg-gray pointer border-2"
        >
          <div class="ms-btn-text flex align-center">
            <span class="pr-4">Tiện ích</span>
            <div class="mi mi-16 mi-arrow-up--black opacity"></div>
          </div>
        </button>
        <div class="flex">
          <button
            class="btn-hover-green ms-radius-true ms-dropdown-style-default ms-button-primary pointer"
            @click="btnAddOnClick"
          >
            <div class="ms-btn-text color-white">Thêm</div>
          </button>
          <button
            class="btn-hover-green ms-button-primary ms-padding-is-single-false-size-default ms-con-dropdown-radius-false-true ms-padding-is-single-false-size-default"
          >
            <div class="flex">
              <div class="line"></div>
              <div class="mi mi-16 mi-arrow-up--white bg-green"></div>
            </div>
          </button>
        </div>
      </div>
    </div>

    <div class="grid-model-control">
      <div class="t-loading t-loading-center" v-if="isShowLoading">
        <div class="t-loading-control">
          <TLoading />
        </div>
      </div>
      <div class="grid-list-data">
        <div>
          <button
            class="btn-hover-gray ms-btn-30 ms-btn-pad-16-8 btn-bg-white pointer border-2"
          >
            <div class="ms-btn-text flex align-center">
              <span id="test" class="pr-4">Thực hiện hàng loạt</span>
              <div class="mi mi-16 mi-arrow-up--black opacity"></div>
            </div>
          </button>
        </div>
        <div class="content-input-list">
          <div
            class="ms-input ms-editor is-label-placeholder input-search"
            style="width: 250px"
          >
            <div class="ms-component ms-con-input-label ms-input style-label">
              <div class="ms-con-input">
                <input
                  type="text"
                  placeholder="Tìm theo mã, tên nhân viên"
                  class="input-focus ms-inputx ms-input--input normal hasIcon icon-after-input placehoder ms-input-normal"
                  v-model="txtSearch"
                />
                <div
                  class="icon-inputx notranslate ms-input--icon icon-after icon-no-border mi-search mi mi-16"
                ></div>
              </div>
            </div>
          </div>
          <div class="ultility-buttons flex">
            <div class="refresh-button list-button" @click="btnRefreshData">
              <div class="mi mi-24 mi-refresh"></div>
            </div>
            <div class="export-button list-button" @click="exprotExcel">
              <div class="mi mi-24 mi-excel__nav"></div>
            </div>
            <div class="setting-button list-button">
              <div class="mi mi-24 mi-setting__list"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid-model">
        <div class="grid grid-employee">
          <table
            ref="exprotExcel_Table"
            cellspacing="0"
            cellpadding="0"
            id="tbEmployee"
          >
            <thead>
              <tr>
                <th class="ms-out-left-white-16"></th>
                <th
                  class="ms-th-viewer sticky left-16 ms-td-multi ms-checkbox-th"
                >
                  <input type="checkbox" class="ms-checkbox ms-th-viewer" />
                </th>
                <th style="width: 150px" class="ms-th-viewer">Mã nhân viên</th>
                <th style="width: 150px" class="ms-th-viewer">Tên nhân viên</th>
                <th style="width: 150px" class="ms-th-viewer">Giới tính</th>
                <th style="width: 150px" class="ms-th-viewer text-center">
                  Ngày sinh
                </th>
                <th style="width: 150px" class="ms-th-viewer">Số CMND</th>
                <th style="width: 150px" class="ms-th-viewer text-center">
                  Ngày cấp
                </th>
                <th style="width: 150px" class="ms-th-viewer">Nơi cấp</th>
                <th style="width: 150px" class="ms-th-viewer">Chức danh</th>
                <th style="width: 150px" class="ms-th-viewer">Mã đơn vị</th>
                <th style="width: 150px" class="ms-th-viewer">Tên đơn vị</th>
                <th style="width: 150px" class="ms-th-viewer">Số tài khoản</th>
                <th style="width: 150px" class="ms-th-viewer">Tên ngân hàng</th>
                <th style="width: 150px" class="ms-th-viewer">Trạng thái</th>
                <th style="width: 150px" class="ms-th-viewer border-right-none">
                  Chi nhánh
                </th>
                <th
                  style="width: 100px; z-index: 10"
                  class="ms-th-viewer sticky right-30 border-left-solid top-0 text-center"
                >
                  Chức năng
                </th>
                <th style="width: 150px" class="ms-out-right-white-30"></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(emp, index) in employees"
                :key="emp.EmployeeId"
                @dblclick="rowOnDblClick(emp)"
                @loadTable="loadTable(employees, index)"
              >
                <td class="ms-out-left-white-16"></td>
                <td class="ms-td-viewer sticky left-16 ms-td-multi">
                  <input type="checkbox" class="ms-checkbox" />
                </td>
                <td class="ms-td-viewer">{{ emp.EmployeeCode }}</td>
                <td class="ms-td-viewer">{{ emp.EmployeeName }}</td>
                <td class="ms-td-viewer">{{ emp.GenderName }}</td>
                <td class="ms-td-viewer text-center">
                  {{ formatDate(emp.DateOfBirth) }}
                </td>
                <td style="width: 500px" class="ms-td-viewer">
                  button
                  {{ emp.IdentityNumber }}
                </td>
                <td class="ms-td-viewer text-center">
                  {{ formatDate(emp.IdentityDate) }}
                </td>
                <td class="ms-td-viewer text-center">
                  {{ emp.IdentityPlace }}
                </td>
                <td class="ms-td-viewer">{{ emp.EmployeePosition }}</td>
                <td class="ms-td-viewer">{{ emp.DepartmentCode }}</td>
                <td class="ms-td-viewer">{{ emp.DepartmentName }}</td>
                <td class="ms-td-viewer">{{ emp.BankAccountNumber }}</td>
                <td class="ms-td-viewer">{{ emp.BankName }}</td>
                <td class="ms-td-viewer">{{ emp.WorkStatus }}</td>
                <td class="ms-td-viewer border-right-none">
                  {{ emp.BankBranchName }}
                </td>
                <td
                  class="ms-td-viewer ms-td-widget sticky right-30 border-left-solid text-center"
                >
                  <div class="flex justify-end">
                    <div class="ms-dropdown">
                      <button
                        class="mr-12-px bg-0-0 no-border ms-dropdown-type-feature ms-dropdown-padding-custom-feature pointer"
                      >
                        <div
                          id="btnChange"
                          class="ms-button-text ms-button--text flex align-center"
                          @click="btnChangeClick(emp)"
                        >
                          Sửa
                        </div>
                      </button>
                      <button class="bg-0-0" @click="btnShowDropDownMenu(emp)">
                        <div
                          class="ms-button-text ms-button--text flex align-center"
                        >
                          <div class="mi mi-16 mi-arrow-up--blue"></div>
                        </div>
                      </button>
                    </div>
                  </div>
                </td>
                <td class="ms-out-right-white-30"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="paging-bar ms-pagination">
          <div
            class="flex items-center justify-between w-full row-size pagination-bar"
          >
            <div class="left-pagination">
              Tổng số: {{ TotalRecord }} bản ghi
            </div>
            <div class="flex postion-pagination align-center">
              <select
                class="customer-select"
                v-model="selectPageSize"
                style="width: 200px"
              >
                <option value="10">10 bản ghi trên 1 trang</option>
                <option value="20">20 bản ghi trên 1 trang</option>
                <option value="30">30 bản ghi trên 1 trang</option>
                <option value="50">50 bản ghi trên 1 trang</option>
                <option value="100">100 bản ghi trên 1 trang</option>
              </select>
              <TPagnitae
                @stateSearch="stateSearch"
                :isCheckSearch="isCheckSearch"
                :selectPageSize="selectPageSize"
                @setPageNum="setPageNum"
                @loadDataDefault="loadDataDefault"
                :pageCount="pageCount"
                @txtSearch="txtSearch"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <EmployeeDetail
      v-if="isPopup"
      :pageNum="pageNum"
      :EditMode="EditMode"
      :employeeSelected="employeeSelected"
      @showPopup="showPopup"
      :selectPageSize="selectPageSize"
      @setSelectPageSize="setSelectPageSize"
      @loadDataDefault="loadDataDefault"
      :pageCount="pageCount"
      @loadData="loadData"
      @setEmp="setEmployee"
      @setEdit="setEditMode"
    />

    <TDeleteDialog
      v-if="isShowMessDelete"
      :employeeSelected="employeeSelected"
      @closeMessageDelete="showMessDelete"
      @accectDelete="deleteById"
      @loadDataDefault="loadDataDefault"
      @setPageNum="setPageNum"
      @setSelectPageSize="setSelectPageSize"
      :pageNum="pageNum"
      :selectPageSize="selectPageSize"
    />
  </div>
</template>
<style>
@import url(../../css/base/icon.css);
@import url(../../css/base/checkbox.css);
@import url(../../css/base/button.css);
</style>
<script>
import TPagnitae from "../../components/base/TPagnitae.vue";
import TDeleteDialog from "../../components/base/TDeleteDialog.vue";
import $ from "jquery";
import axios from "axios";
import EmployeeDetail from "./EmployeeDetail.vue";
import TLoading from "@/components/base/TLoading.vue";
export default {
  name: "EmployeeList",
  components: {
    TLoading,
    EmployeeDetail,
    TDeleteDialog,
    TPagnitae,
  },

  methods: {
    //ấn nút thêm hiển thị form thông tin
    btnAddOnClick() {
      //hiển thị popup thêm nhân viên
      this.showPopup(true);
      //chỉnh sửa (0=false)
      this.EditMode = 0;
      //gán giá trị phần tử được chọn là rỗng, để thực hiện lấy mã nhân viên mới
      this.employeeSelected = {};
    },
    //nhấn nút xóa để xóa nhân viên
    btnDeleteOnClick() {
      this.showMessDelete(true);
      // var me=this;
      //  axios.delete('https://amis.manhnv.net/api/v1/Employees/'+me.employeeSelected.EmployeeId).then(function(res){
      //     alert("xóa thành công");
      // });
      //  axios.delete('https://amis.manhnv.net/api/v1/Employees/'+me.employeeSelected.EmployeeId).then(function(res){

      //     me.$emit("closeMessageDelete",false);
      // });
    },

    //hàm xóa nhân viên theo id
    deleteById(id) {
      var me = this;
      axios
        .delete("https://amis.manhnv.net/api/v1/Employees/" + id)
        .then(function (res) {
          //đóng form xóa
          me.showMessDelete(false);
          //giảm số lượng bản ghi hiển thị trên trang sau khi xóa
          me.selectPageSize -= 1;
          //giảm số lượng bản ghi
          me.TotalRecord -= 1;
          //thực hiện load lại dữ liệu

          me.loadDataDefault(me.selectPageSize, me.pageNum);
        });
    },

    //sét true false để hiển thị form message xóa nhân viên
    //Author:SANG
    showMessDelete(isShow) {
      //ẩn menu dropdown
      this.isDropDownMenu = false;
      //hiển thị form delete
      this.isShowMessDelete = isShow;
    },

    //set giá trị cho số lượng bản ghi
    setSelectPageSize(Slp) {
      this.selectPageSize = Slp;
    },
    //Hiển thị dropdown
    //Author: SANG
    btnShowDropDownMenu(emp) {
      //lấy object khi click
      this.employeeSelected = emp;
      //lấy tọa độ theo trục y
      this.topDrop = event.clientY + 10 + "px";

      //lấy tọa độ theo trục x
      this.leftDrop = event.clientX - 110 + "px";

      //hiển thị menu dropdown
      this.isDropDownMenu = true;
    },

    //nhấn nút sửa trên tr hiển thị form chi tiết
    //Author: SANG
    btnChangeClick(emp) {
      try {
        //lấy giá trị
        this.employeeSelected = emp;
        //hiển thị popup
        this.isPopup = true;
        //chỉnh sửa(1=true)
        this.EditMode = 1;
      } catch (error) {
        console.log(error);
      }
    },

    //Click icon Refresh load lại data
    //Author:SANG
    btnRefreshData() {
      //đang thực hiện tìm kiếm
      if (this.isCheckSearch) {
        this.stateSearch(this.pageNum);
      }

      //dừng tìm kiếm
      else {
        this.loadDataDefault(this.selectPageSize, this.pageNum);
      }
    },

    //load toàn bộ dữ liệu
    loadData() {
      try {
        //hiển thị loading
        this.isShowLoading = true;

        var me = this;
        axios
          .get("https://amis.manhnv.net/api/v1/Employees")
          .then(function (res) {
            //lấy giá trị
            me.employees = res.data;
            console.log(res);

            //dừng loading
            me.isShowLoading = false;
          })
          .catch(function (res) {
            console.log(res);
          });
      } catch (error) {
        console.log(error);
      }
    },

    //hiển thị danh sách nhân viên theo số lượng bản ghi trên trang
    //Author: SANG
    loadDataDefault(selectPage, pageNum) {
      //hiển thị loading
      this.isShowLoading = true;
      var me = this;
      axios
        .get(
          "https://amis.manhnv.net/api/v1/Employees/filter?pageSize=" +
            selectPage +
            "&pageNumber=" +
            pageNum
        )
        .then(function (res) {
          //lấy giá trị
          me.employees = res.data.Data;
          console.log(res);
          //lấy giá trị số trang
          me.pageCount = res.data.TotalPage;
          //lấy ra số lượng bản ghi
          me.TotalRecord = res.data.TotalRecord;
          //dừng loading
          me.isShowLoading = false;
        })
        .catch(function (res) {
          console.log(res);
        });
    },
    //sét thuộc tính hiển thị Popup
    showPopup(isShow) {
      this.isPopup = isShow;
    },
    //nhấn đúp tr hiển thị form chi tiết
    rowOnDblClick(emp) {
      try {
        //lấy giá trị phần tử được chọn
        this.employeeSelected = emp;
        //hiển thị popup
        this.isPopup = true;

        //trạng thái chỉnh sửa (1=true)
        this.EditMode = 1;
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Nhấn nút hủy trên diglog để đóng form
     */

    /**
     *
     *  định dạng ngày
     */
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
        dob = `${date}/${month}/${year}`;
        return dob;
      } else {
        return "";
      }
    },

    //sét lại giá trị cho chế độ edit
    setEditMode(edit) {
      this.EditMode = edit;
    },

    //set lại giá trị trang hiển thị
    setPageNum(paN) {
      this.pageNum = paN;
    },

    //set lại giá trị mảng được chọn
    //Author: SANG
    setEmployee(emp) {
      this.employeeSelected = emp;
    },

    //Hàm thực hiện search theo trang
    //author: SANG
    stateSearch(pagNum) {
      //hiển thị loading dữ liệu
      this.isShowLoading = true;
      var me = this;
      axios
        .get(
          "https://amis.manhnv.net/api/v1/Employees/filter?pageSize=" +
            me.selectPageSize +
            "&pageNumber=" +
            pagNum +
            "&employeeFilter=" +
            me.txtSearch
        )
        .then(function (res) {
          console.log(res);
          //lấy giá trị
          me.employees = res.data.Data;
          //lấy số lượng trang
          me.pageCount = res.data.TotalPage;
          //lấy ra số lượng bản ghi
          me.TotalRecord = res.data.TotalRecord;
          //dừng loading
          me.isShowLoading = false;
        })
        .finally(function () {})
        .catch(function (res) {
          console.log(res);
        });
    },
    /**Định dạng tiền */
    formatCurrent(money) {
      if (money) {
        let salary = new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(money);
        return salary;
      }
    },

    //Xuất ra file excel
    //Author: SANG
    exprotExcel() {},
  },
  data() {
    return {
      isShowMessDelete: false,
      isShowLoading: false,
      isPopup: false,
      employees: [],
      employeeSelected: {},
      EditMode: 0,
      index: -10,
      i: 0,
      isDropDownMenu: false,
      topDrop: "0",
      leftDrop: "0",
      txtSearch: "",
      pageNum: 1,
      selectPageSize: 10,
      pageCount: 0,
      TotalRecord: 0,
      isCheckSearch: false,
    };
  },

  computed: {},

  created() {
    try {
      //thực hiện load trang khi lần đầu truy cập
      //author: SANG
      this.loadDataDefault(this.selectPageSize, this.pageNum);
    } catch (error) {
      console.log(error);
    }
  },

  watch: {
    //theo dõi sự thay đổi khi nhập input tìm kiếm
    //Author: SANG
    txtSearch: function (pagNum) {
      this.debounce = setTimeout(() => {
        //khi txtSearch rỗng
        if (this.txtSearch == "") {
          //load dữ liệu theo trang và số bản ghi
          this.loadDataDefault(this.selectPageSize, this.pageNum);
          this.isCheckSearch = false;
        } else {
          this.isCheckSearch = true;
          //thực hiện gọi hàm search theo trang
          this.stateSearch(this.pageNum);
        }
      }, 750);
    },

    //Theo dõi sự thay đổi tùy chọn hiển thị số lượng bản ghi trên trang
    //author: SANG
    selectPageSize: function () {
      this.loadDataDefault(this.selectPageSize, this.pageNum);
    },
  },
};
</script>
