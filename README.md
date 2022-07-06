# lets-make-someone-happy-backend
A website that will allow you to help turn someone's life around!

# Backend endpoint
https://api.letschangesomeonelife.com/

# Environment
- Docker env: https://dev.to/arnu515/deploy-your-nodejs-app-to-a-server-with-docker-1hcd
- Certbot: https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-20-04 

# Build
```
git pull origin main
npm run docker-build
npm run docker-stop
npm run docker-start
```

# Endpoints
### Main domain: https://api.letschangesomeonelife.com

---
`POST /now` \
Получение текущих настроек и состояния проекта

### Response:
```javascript
return {
    "current_timestamp": Number, // Текущее время
    "money_pool": Number, // Количество собранных средств
    "users_count": Number, // Количество участников в текущем пуле
    "initial_value": Number, // Начальное значение суммы взноса
    "time_remaining": Number, // Оставшееся время
}
```
---
`POST /donate` \
Получение текущих настроек и состояния проекта
### Response:
```javascript
return {
    "redirect_url": String, // URL для переадрессации
}
```
---
`POST /success-donate` \
Получение текущих настроек и состояния проекта
### Request:
```javascript
const payload = {
    "transaction_id": String, // URL для переадрессации
}
```
### Response:
```javascript
return {
    "redirect_url": String, // URL для переадрессации
}
```
---
`POST /fail-donate` \
Получение текущих настроек и состояния проекта
### Response:
```javascript
return {
    "redirect_url": String, // URL для переадрессации
}
```
