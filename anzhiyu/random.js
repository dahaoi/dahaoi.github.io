var posts=["2022/10/07/2023/我爱你-你要记得我/","2022/10/03/2023/而我说-你爱的好懦弱/","2022/09/20/2022/“黑暗时光”纪事/","2022/09/22/2022/每日问候/","2024/02/01/2024/二月/Navicat Premium 16，无限重置试用14天方法(附源码)/","2024/02/01/2024/二月/Docker安装/","2024/02/01/2024/二月/VMware Workstation Pro 17正式版，附注册码/","2024/02/01/2024/二月/破解Typora/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };