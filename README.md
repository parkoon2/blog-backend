# Rest API Boilerplate

## 서버구동
1. git clone http://knowledgepoint.co.kr:3000/parkoon/node_rest_api_boilerplate
2. yarn 또는 yarn install
3. yarn run watch
4. yarn start

## 서버배포
1. yarn run pack-p

## Update
* 1차 배포 2019. 03. 20

### 폴더 구조
* src (최상위)
* config (설정파일 - 토큰, 환경파일, 데이터베이스, 미들웨어)
* modules (API 모듈)
* utils (공통 모듈 - ex) logger...)

### 파일 구조
##### [최상위]
* babelrc (바벨 설정)
* editorconfig (vs code editor 설정)
* gitignore (git)
* prettierrc (prettier)
* package.json (패키지 관련)
* webpack.config.js (webpack 4 설정)

##### [src]
* index.js (entry point, 서버 구동파일)

##### [config]
* auth.js (토큰관련 인증처리)
* constants.js (환경설정- port, db ...)
* database.js (데이터베이스 세팅)
* middleware.js (미들웨어)

##### [modules]
* index.js (API Router entry point)
* OOO.controller.js (라우트 컨트롤러)
* OOO.route.js (라우팅)
* OOO.service.js (DB 처리 로직)