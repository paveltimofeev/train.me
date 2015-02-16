train.me
========

####Reason
Try to use Angular/Node/Elasticsearch

####Concept
Пользователь выбирает программу тренировки, имеющую какую-либо конкретную цель, например 'сделать 200 приседаний'. 
Приложение не позволяет пользователю посматривать план тренировок, давая вместо этого задание на текущий день 
и сообщая, по окончании выполнения упражнения, когда будет следующяя тренировка. 
Таким образом приложение "ведёт" пользвателя по предварительно расчитанным тренировочным циклам играя роль тренера.


####Arch
- Frontend: Angularjs / HTML5 resp
- Backend: Node.js + Expressjs + swagger
- Storage: Elasticsearch


####Hard points
- Идентичная работа на мобильных устройствах и в браузере
- Автоматическая регистрация, авторизация и аутентификация пользователя без ввода логина/пароля по принципу run-and-use
- Возможность шаринга аккаунта между PC <-> Mobile(s) без регистрации и смс


####Demo & links
- [Web Demo](http://train_me-c9-paveltimofeev.c9.io/frontend/webapp/#/)
- [Mobile Demo](http://train_me-c9-paveltimofeev.c9.io/frontend/webapp/Preview.htm)
- [Backend REST Api description](http://github.com/paveltimofeev/train.me/wiki/Backend-REST-API-Description)

![Mobile Demo screeshot](https://raw.githubusercontent.com/paveltimofeev/train.me/master/screenshot.png)

####Tasks & progress
- [ ] MVP
  - [ ] Angularjs
    - [x] Make up HTML5 template
    - [x] Define views
    - [x] Controllers
    - [x] Bind data 
    - [ ] REST api client Service
  - [ ] REST Api
    - [x] Define API
    - [ ] Implement public API
    - [ ] Add swagger ui
    - [ ] Storing/Retrieving data to/from backend DB
  - [ ] Starage
    - [ ] Define data structure
