<template>
  <div class="t-header items-center">
    <div class="header-icon mi mi-24 mi-three-stripes pointer"></div>
    <div class="flex header-branch">
      <div class="header-branch-name">Công ty cổ phần MISA</div>
      <a href="" class="flex items-center">
        <div
          class="header-icon mi mi-14 mi-chevron-right header-branch-icon pointer"
        ></div>
      </a>
    </div>
    <div class="header-current-db">
      <div class="icon-header-current-db"></div>
      <div class="header-current-db-name">DC-01</div>
    </div>
    <div class="ms-space"></div>
    <div class="ms-download hv-0">
      <div class="pointer header-icon">
        <div class="wrap-notify pt-0 ms-download-icon">
          <i class="fa-solid fa-circle-arrow-down"></i>
        </div>
      </div>
    </div>
    <div class="flex header-quick-search">
      <div class="ms-input ms-editor ms-input--input-search">
        <div class="ms-component ms-con-input-label ms-input style-label">
          <div class="ms-con-input">
            <input
              type="text"
              placeholder="Nhập từ khóa tìm kiếm"
              class="input-focus ms-inputx ms-input--input normal hasIcon icon-after-input placehoder ms-input-normal"
            />
            <div
              class="icon-inputx notranslate ms-input--icon icon-after mi-search mi mi-16"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <div class="header-menu-icon extend-feature-btn">
      <button class="hv-1 ms-button expand-more-button">
        <div class="header-icon mi mi-24 mi-category pointer"></div>
      </button>
    </div>
    <div class="header-menu-icon extend-feature-btn">
      <button class="hv-2 ms-button expand-more-button">
        <div class="header-icon mi mi-24 mi-setting__nav pointer"></div>
      </button>
    </div>
    <div class="header-menu-icon extend-feature-btn">
      <button class="hv-3 ms-button expand-more-button">
        <div class="header-icon mi mi-24 mi-chat__nav pointer"></div>
      </button>
    </div>
    <div class="header-menu-icon extend-feature-btn">
      <button class="hv-4 ms-button expand-more-button">
        <div class="header-icon mi mi-24 mi-help__nav pointer"></div>
      </button>
    </div>
    <div class="header-menu-icon extend-feature-btn">
      <button class="hv-5 ms-button expand-more-button">
        <div class="header-icon mi mi-24 mi-category pointer"></div>
      </button>
    </div>
    <div class="header-menu-icon extend-feature-btn">
      <button class="hv-6 ms-button expand-more-button">
        <div class="header-icon mi mi-24 mi-bell__nav pointer"></div>
      </button>
    </div>
    <div class="account-info">
      <div class="dropdown-secondary ms-dropdown">
        <button class="ms-padding-is-single-true-size-default ms-button">
          <div class="ms-button-text ms-button--text flex align-center">
            <div class="flex items-center ms-dropdown-user">
              <div class="user-ava">
                <div class="mi mi-32 mi-user-avatar avatar"></div>
              </div>
              <div class="user-name">
                <div class="pr-6 display-user">Phạm Xuân Sang</div>
              </div>
              <div
                class="mi mi-14 mi-chevron-down header-branch-icon pointer"
              ></div>
            </div>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<style>
@import url(../../css/layout/header.css);
</style>
