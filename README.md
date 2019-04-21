# sao-ui

## Project setup
```
npm install
```

### Sao风格组件安装
```
安装 npm i saoui
```

### 组件列表
```
(目前适配PC谷歌浏览器)
Sao-alert
<SaoAlert
      msg="test"
      @comfirm="test"
    />
SaoMenu  
  <SaoMenu
        :ShowMask='isShowMenu'
        ref="mask"
      >
        <MenuBtn
          slot="btn"
          id='1'
          system='1'
        >
          <MenuItem
            id="1"
            to='/a'
            name='test1'
          >
          </MenuItem>
          <MenuItem
            id="2"
            to='/b'
            name='test2'
          >
          </MenuItem>
        </MenuBtn>
   </SaoMenu>
内部开关方法
 if (this.$refs.mask.isShow == true) {
        //内部调用开关方法
        this.$refs.mask.noShow();
      } else {
        this.$refs.mask.showMask();
      }

```
npm
### 参考项目
```
SAO Utils – SAO风格启动菜单开发日志 | 热风CG工作室（素材样式来源）
详情http://www.gpbeta.com/post/develop/sao-utils/
```