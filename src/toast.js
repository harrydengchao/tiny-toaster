// import 'lib-flexible';
// 不主动引入 lib-flexible，避免混乱开发者的 viewport 设置
// 推荐开发者 自行引入 lib-flexible
import './scss/tost.scss'
import { Toast } from 'mint-ui';

// iconClass 图标需要自己准备

class Alert {
  constructor() {
    this.config = {
      message: '提示',
      // 显示位置
      position: 'middle',
      // 持续时间
      duration: 2500
    }
    // open history
    this.history = [];
  }

  open(args) {
    // 打开之前，先关闭其它的
    if(this.history.length > 0) this.history.forEach(item => item.close());
    if (args.constructor === String) {
      this.config.message = args;
    } else if (args.constructor === Object) {
      Object.assign(this.config, args)
    }
    let instance = Toast(this.config);
    this.history.push(instance);
    return instance;
    // 可以调用 instance.close(); 来手动关闭
  }

  success(args) {
    Object.assign(this.config, {
      iconClass: 'mintui mintui-success'
    })
    this.open(args);
  }

  error(args) {
    Object.assign(this.config, {
      iconClass: 'mintui mintui-field-error'
    })
    this.open(args);
  }

  warn(args) {
    Object.assign(this.config, {
      iconClass: 'mintui mintui-field-warning'
    })
    this.open(args);
  }

}

let LayerBox = new Alert();

export default LayerBox
