# sao-ui(vue-cli3)

## Project setup
npm install
SAO 风格页面开发
SAO 组件开发

### Sao风格组件安装
安装 npm i saoui

### 组件列表
(目前适配PC谷歌浏览器)
1.SaoAlert(初代版本1.0.0)
```
<SaoAlert msg="test" @comfirm="test"/>
```  
msg:内容
confirm:提交事件
2.SaoMenu(目前尚有BUG)  
```  
<SaoMenu :ShowMask="isShowMenu" ref="mask">
  <MenuBtn slot="btn" id="1" system="1">
    <MenuItem id="1" to="/index" name="首页"></MenuItem>
    <MenuItem id="2" to="/user" name="个人信息"></MenuItem>
    <MenuItem id="3" to="/fold" name="折叠面板"></MenuItem>
    <MenuItem id="4" to="/carousel" name="轮播图"></MenuItem>
    <MenuItem id="5" to="/animate" name="内容页展示"></MenuItem>
    <MenuItem id="6" to="/ranking" name="排行列表"></MenuItem>
  </MenuBtn>
  <MenuBtn slot="btn" id="2" system="2">
    <MenuItem id="1" to="/input" name="输入框"></MenuItem>
  </MenuBtn>
  <MenuBtn slot="btn" id="3" system="3">
    <MenuItem id="1" to="/a" name="test1"></MenuItem>
  </MenuBtn>
  <MenuBtn slot="btn" id="4" system="4">
    <MenuItem id="1" to="/share" name="安利墙"></MenuItem>
  </MenuBtn>
  <MenuBtn slot="btn" id="5" system="5"></MenuBtn>
</SaoMenu>
```
 内部开关方法(不推荐使用！)
 ```
 if (this.$refs.mask.isShow == true) {
        //内部调用开关方法
        this.$refs.mask.noShow();
      } else {
        this.$refs.mask.showMask();
      }
```
3.MusicBox(初级模板版本1.0.0)  
```
<MusicBox></MusicBox>
 musicList: [{ url: 'https://96.f.1ting.com/5cc5555f/947fc092c7b4ba91e5b1820a4ad9a827/zzzzzmp3/2013aJan/23D/23ostsao/25.mp3', name: 'Yui', actor: '未知' }]
```
4.ShareWall(初级模板版本1.0.0) 
```
<ShareWall></ShareWall>
 imgList: [img1]
```
### 参考项目
SAO Utils – SAO风格启动菜单开发日志 | 热风CG工作室（素材样式来源）
>详情http://www.gpbeta.com/post/develop/sao-utils/
