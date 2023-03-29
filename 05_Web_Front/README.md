#BIZZAN_web_front

> BIZZAN 디지털 자산 거래소의 웹 터미널

## 전제 조건 설치
인스턴스를 실행하려면 다음 종속성이 필요합니다.
npm 내가 npm@5.6.0

1. NodeJS - 9.11.2
2. Npm-5.6.0

## 빌드 설정

``` 강타
# 종속성 설치
npm 나

# localhost:8080에서 핫 리로드로 제공
npm 실행 개발

# 축소를 통한 생산용 빌드
npm 실행 빌드

```



## 미래
1. 덜 균일하게 사용하고 실험은 다양한 적용 범위를 통해 테마를 사용자 정의할 수 있습니다.
2. iview 구성 요소는 요청 시 참조됩니다.
3. exchange.vue와 같은 대용량 파일의 경우 코드 분할/구성 요소화;


## 프론트엔드 개발 사양
1. 카멜 케이스 방식을 사용하여 Exchange.vue, WithdrawRecord.vue와 같은 페이지 이름을 지정합니다. 이름은 영어 단어이며 모듈의 기능을 올바르게 설명할 수 있어야 합니다.
2. 변수 명명에 병음, 특히 병음 약어를 사용하는 것은 금지되어 있습니다.
3. 페이지가 많을 경우 분류를 위해 폴더를 사용해야 합니다.
4. 모듈에는 가능한 한 데이터 변수가 적어야 하며 데이터 변수가 많을 경우 하위 객체를 사용하여 관리해야 합니다.


# BIZZAN_web_front

> BIZZAN数字资产交易所之web端

## Install Prerequisites
The following dependencies are required to run an instance:
npm i npm@5.6.0

1. NodeJS - 9.11.2
2. Npm - 5.6.0

## Build Setup

``` bash
# install dependencies
npm i

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

```



## Future
1. 统一改用less,实验可以通过变量覆盖的方式定制主题;
2. iview组件按需引用;
3. exchange.vue等大文件，代码拆分/组件化;


## 前端开发规范
1. 页面使用驼峰法命名，如Exchange.vue,WithdrawRecord.vue,名称为英文单词，并且要能正确描述该模块功能
2. 变量命名禁止使用拼音，特别是拼音缩写
3. 页面比较多时应该使用文件夹做分类
4. 模块中data变量应该尽量少，比较多时应该使用子对象进行管理


