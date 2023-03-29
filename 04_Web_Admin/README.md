###############################################################################################################################################################################
백그라운드 관리 웹 개발 정보
구성 파일은 src/config/api.js에 있으며 여기에서 관리 서비스 IP 포트를 구성할 수 있습니다. 백그라운드 관리 웹은 하나의 관리 서비스만 호출하기 때문에 관리 서비스 IP: 포트를 직접 지정하도록 선택할 수 있습니다.

동시에 src/service/http.js 파일에서 액세스 구성도 수정해야 합니다.

시작 방법: npm run dev를 통해 프로젝트를 핫 스타트할 수 있으며 npm run build를 통해 배포 파일을 컴파일할 수 있습니다.
###############################################################################################################################################################################
#### 프로젝트 소개
BIZZAN 배경 관리 시스템

#### 소프트웨어 아키텍처
vue+iview 프레임워크

#### 필수 구성 요소 설치
인스턴스를 실행하려면 다음 종속성이 필요합니다.

1. NodeJS - 9.11.2
2. Npm-5.6.0
#### 설치 튜토리얼

1. npm 설치 패키지 및 종속성 설치
2. npm run dev 로컬 개발 환경 시작 【】
3. npm 실행 빌드 코드 패키지 릴리스

#### 기여하다

1. 이 프로젝트를 포크
2. 새 Feat_xxx 브랜치 생성
3. 코드 제출
4. 새 풀 리퀘스트 생성

#### 프로젝트 해체 소개
     -빌드 구성 파일
        -config.js는 개발환경[dev] 또는 패키징[pro] 후 외부에 노출됩니다.
        -env.js 환경 전환
        -webpack.base.config.js - 웹팩 기본 구성
        -webpack.dev.config.js -webpack-merge 병합 기본 구성 및 [npm run dev] 개발 환경
        -webpack.prod.config.js -webpack-merge 패키징에 필요한 기본 구성과 [npm run build] 구성 병합
    -src 홈 디렉토리
        -계산하다
            caculate.js 필터 검색 기준
        -구성
            -- api.js 인터페이스 배열
            -- storage.js 캐시 처리
        -이미지 사진
        -libs 플러그인
        -locale 다국어 구성 파일, 아직 지원되지 않음
        -라우터 프런트엔드 라우팅 구성
        -service는 axios 인터페이스 요청 및 페이지 요청의 인터페이스 처리를 캡슐화합니다.
        -smeditor 서식 있는 텍스트 편집기
        - 스토어 Vuex 스토어
        -style 일반적인 스타일
        -템플릿 온라인 index.html 템플릿 ejs
        -vendors 개발 환경에 필요한 js 가져오기
        -뷰 페이지 디렉토리
        app.vue 페이지 초기화
        main.js 항목 파일

    -index.html
    -package.json - 프로젝트 구성 파일


#### 项目介绍
BIZZAN后台管理系统

#### 软件架构
vue+iview框架

#### Install Prerequisites
The following dependencies are required to run an instance:

1. NodeJS - 9.11.2
2. Npm - 5.6.0
#### 安装教程

1. npm install 安装包以及依赖
2. npm run dev 本地开发环境启动 【】
3. npm run build 代码打包发布

#### 参与贡献

1. Fork 本项目
2. 新建 Feat_xxx 分支
3. 提交代码
4. 新建 Pull Request

#### 项目解构简介
     -build 配置文件
        -config.js 对外暴露是开发环境[dev]还是打包后[pro]
        -env.js 环境切换
        -webpack.base.config.js -webpack基本配置
        -webpack.dev.config.js  -webpack-merge 合并基础配置和[npm run dev]开发环境
        -webpack.prod.config.js -webpack-merge 合并基础配置和[npm run build]打包需要的配置
    -src 主目录
        -caculate
            caculate.js 过滤搜索条件
        -config
            -- api.js 接口整理
            -- storage.js 缓存处理
        -images 图片
        -libs 插件
        -locale 多语言配置文件，暂不支持
        -router 前端路由配置
        -service 封装axios接口请求，以及页面请求的接口处理
        -smeditor 富文本编辑器
        -store Vuex store
        -styles 公用样式
        -template 线上index.html模版 ejs
        -vendors 开发环境需要的js引入
        -views 页面目录
        app.vue 页面初始化
        main.js 入口文件

    -index.html
    -package.json -项目配置文件
