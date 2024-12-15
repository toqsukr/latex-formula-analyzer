# Этап 1: Сборка проекта
FROM node:18 AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код проекта
COPY . .

# Запускаем сборку проекта
RUN npm run build

# Этап 2: Запуск собранного приложения
FROM nginx:alpine

# Копируем собранные файлы из первого этапа
COPY --from=builder /app/dist /usr/share/nginx/html

# Открываем порт 80 для Nginx
EXPOSE 80

# Стартуем Nginx
CMD ["nginx", "-g", "daemon off;"]
