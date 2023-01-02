<template>
  <div class="t-navbar expand">
    <div class="logo-container">
      <a href="" class="menu-container-option"></a>
      <a href="" class="logo">
        <img
          src="../../assets/img/Logo_Module_TiengViet_White.66947422.svg"
          alt=""
          class="img-icon"
        />
      </a>
    </div>
    <div class="menu-item-list">
      <router-link to="/employee" class="nav-item">
        <div class="menu-icon mi mi-24 mi-sidebar-dashboard"></div>
        <div class="nav-item-text">Tổng quan</div>
      </router-link>
      <router-link to="/customer" class="nav-item">
        <div class="menu-icon mi mi-24 mi-sidebar-cash"></div>
        <div class="nav-item-text">Tiền mặt</div>
      </router-link>
      <router-link to="/customer" class="nav-item">
        <div class="menu-icon mi mi-24 mi-sidebar-bank"></div>
        <div class="nav-item-text">Tiền gửi</div>
      </router-link>
      <a href="" class="nav-item">
        <div class="menu-icon mi mi-24 mi-sidebar-pu"></div>
        <div class="nav-item-text">Mua hàng</div>
      </a>
      <a href="" class="nav-item">
        <div class="menu-icon mi mi-24 mi-sidebar-sale"></div>
        <div class="nav-item-text">Bán hàng</div>
      </a>
      <a href="" class="nav-item">
        <div class="menu-icon mi mi-24 mi-sidebar-invoice"></div>
        <div class="nav-item-text">Quản lý hóa đơn</div>
      </a>
      <a href="" class="nav-item">
        <div class="menu-icon mi mi-24 mi-sidebar-stock"></div>
        <div class="nav-item-text">Kho</div>
      </a>
      <a href="" class="nav-item">
        <div class="menu-icon mi mi-24 mi-sidebar-tools"></div>
        <div class="nav-item-text">Công cụ hỗ trợ</div>
      </a>

      <a href="" class="nav-item">
        <div class="menu-icon mi mi-24 mi-sidebar-fixed-assets"></div>
        <div class="nav-item-text">Tài sản cố định</div>
      </a>
      <a href="" class="nav-item">
        <div class="menu-icon mi mi-24 mi-sidebar-tax"></div>
        <div class="nav-item-text">Thuế</div>
      </a>
      <a href="" class="nav-item">
        <div class="menu-icon mi mi-24 mi-sidebar-price"></div>
        <div class="nav-item-text">Giá thành</div>
      </a>
      <a href="" class="nav-item">
        <div class="menu-icon mi mi-24 mi-sidebar-general"></div>
        <div class="nav-item-text">Tổng hợp</div>
      </a>
      <a href="" class="nav-item">
        <div class="menu-icon mi mi-24 mi-sidebar-budget"></div>
        <div class="nav-item-text">Ngân sách</div>
      </a>
      <a href="" class="nav-item">
        <div class="menu-icon mi mi-24 mi-sidebar-report"></div>
        <div class="nav-item-text">Báo cáo</div>
      </a>
    </div>
  </div>
</template>

<style>
@import url(../../css/base/icon.css);
@import url(../../css/layout/navbar.css);
</style>
