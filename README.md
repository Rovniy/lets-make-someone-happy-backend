# lets-make-someone-happy-backend
A website that will allow you to help turn someone's life around!

# Backend endpoint
https://api.letschangesomeonelife.com/

# Environment
- Docker env: https://dev.to/arnu515/deploy-your-nodejs-app-to-a-server-with-docker-1hcd
- Certbot: https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-20-04 


```text
sudo cp /etc/nginx/sites-available/letschangesomeonelife.com /etc/nginx/sites-enabled
sudo nginx -t
sudo systemctl restart nginx
sudo certbot --nginx -d letschangesomeonelife.com -d www.letschangesomeonelife.com
```

# Database
```text
docker run --name postgres -p 5432:5432 -e POSTGRES_USER=LCSL_USER -e POSTGRES_PASSWORD=2A10B0CCC1A4A9C2CD1DAD7C43C474B6FD86B7EF47B0A1E356ADFF17C3247A4C -e POSTGRES_DB=LCSL_DB -d postgres:14.4
```

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
    "time_remaining": Number, // Оставшееся время в секундах
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
