# 开发日志

## 1 启用 Angular Material 支持

```shell
ng add @angular/material
```

### 1.1 设置字体

```scss
$custom-typography: mat-typography-config(
  $font-family: '"Fira Code", "Microsoft Yahei", "PingFangSC-Regular", sans-serif',
  $display-4: mat-typography-level(112px, 112px, 300),
  $display-3: mat-typography-level(56px, 56px, 400),
  $display-2: mat-typography-level(45px, 48px, 400),
  $display-1: mat-typography-level(34px, 40px, 400),
  $headline: mat-typography-level(24px, 32px, 400),
  $title: mat-typography-level(20px, 32px, 500),
  $subheading-2: mat-typography-level(16px, 28px, 400),
  $subheading-1: mat-typography-level(14px, 24px, 400),
  $body-1: mat-typography-level(13px, 20px, 400),
  $body-2: mat-typography-level(13px, 24px, 500),
  $caption: mat-typography-level(10px, 20px, 400),
  $button: mat-typography-level(13px, 12px, 500),
  $input: mat-typography-level(inherit, 1.125, 400)
);
```

### 1.2 设置主题

```scss
@import '~@angular/material/theming';

$zhihu-primary: mat-palette($mat-blue);
$zhihu-accent : mat-palette($mat-pink, A200, A100, A400);
$zhihu-warn: mat-palette($mat-red);
$zhihu-theme: mat-light-theme((color: (primary: $zhihu-primary,
      accent: $zhihu-accent,
      warn: $zhihu-warn,
    )));
@include angular-material-theme($zhihu-theme);
```

### 1.3 设置下划线动画（可选）

```scss
a,
a:link,
a:active,
a:visited {
  position       : relative;
  color          : #3298db;
  text-decoration: none;
  transition     : color 0.3s ease-in-out;
}

a:hover {
  color: #0180d4;
}

a.animation::after {
  content: '';

  width   : 100%;
  height  : 0.05rem;
  position: absolute;
  bottom  : -0.05rem;
  left    : 0;

  background-color: currentColor;
  transform       : scaleX(0);
  transform-origin: left;
  transition      : all .35s;
}

a.animation:hover::after {
  transform       : scale(1);
  transform-origin: right;
}
```