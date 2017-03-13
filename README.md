
> ### 说明

* 基于Vue2 的一个 toast 状态组件

---

### 安装
```javascript
npm install --save tiny-toaster
```

### 使用
```javascript
import Toast from 'tiny-toaster';

// open Toast default
// default config = {
//   message: '提示',
//   position: 'middle',
//   duration: 2500
// }
// or
// config = '成功'
// open Toast default
Toast.open(config);

// open Toast success
Toast.success(config);

// open Toast error
Toast.error(config);

// open Toast warn
Toast.warn(config);

```
