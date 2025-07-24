# msa-exam
### msa 프로젝트로 fastapi, sprint boot로 rest api 기능 구현하고 vue.js에서 UI구현하고 rest api 호출하여 예제

- 프로젝트 구조 
1. fastapi/add-app 은 backend 는 1개로 연동 함 
2. fastapi/add-app2 은 backend 는 3개로 리벌스 프록시로 연동 함 
3. react-spring-boot/add-app 은 backend 는 1개로 연동함 
4. react-spring-boot/add-app2 은 backend 는 3개로 리벌스 프록시로 연동함 
5. vue-spring-boot/add-app 은 backend 는 1개로 연동함 
6. vue-spring-boot/add-app2 은 backend 는 3개로 리벌스 프록시로 연동함 
7. ubuntu에서 각 해당 폴더(add-app, add-app2)에서 빌드는 ./build.sh 파일, 실행은 docker compose up으로 실행 , 종료를  docker compose down 해본다 (수동 작업)



- CD/CD 하기위한 시스템 구성 절차 (자동 배포)
1. vmware 가상머신 ubuntu 설치,  계정명(kosa)
2. 가상머신에 jdk 설치 
3. 가상머신에 npm 설치 
4. 가상머신에 docker-cli 설치 
5. 가상머신에 git 저장소를 복제한다 
6. github actions -> runner 설치 (설치치 이름 kosa-label로 할 것)
7. ~/add-app 폴더 생성 
8. cp ~/msa-exam/react-spring-boot/add-app/docker-compose-deploy.yml ~/add-app/docker-compose.yml 
9. cp -r ~/msa-exam/react-spring-boot/add-app/nginx ~/add-app/nginx
10. 위와 같이 작업을 하면 소스를 수정하고 커밋하면 자동으로 가상머신에 배포된다


