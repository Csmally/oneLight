# fetch请求对于http和https的限制
- https://segmentfault.com/a/1190000002933776
- https://blog.csdn.net/qq_40347548/article/details/86766932

# 不同平台不兼容
- BigButton.ios.js
- BigButton.android.js
- import BigButton from './BigButton';

# 什么情况下image、icon、video放在本地，以及注意事项？
- app经常需要加载展示类存放项目中。如：tabbar的icon
- app经常变动或不经常加载展示的存放到将来服务器上。如：用户头像
- 注意：以上静态资源无论是存放本地还是服务器上，必须事先经过https://tinypng.com/压缩

# 阴影在不同平台注意事项不同
