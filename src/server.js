const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3001;

app.use(express.json());

let lastRequestTimeout;

app.post('/search', (req, res) => {
  // Валидация полей email и number
  const { email, number } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email обязателен' });
  }
  // Можно также добавить дополнительную валидацию email и number здесь

  // Отмена предыдущего запроса, если он был
  if (lastRequestTimeout) {
    clearTimeout(lastRequestTimeout);
  }

  // Имитация задержки в 5 секунд
  lastRequestTimeout = setTimeout(() => {
    // Поиск пользователей в JSON
    const users = findUsersByEmailAndNumber(email, number);

    // Возврат результатов на фронтенд
    res.json(users);
  }, 5000);
});

function findUsersByEmailAndNumber(email, number) {
  // Выполните поиск в вашем JSON-файле и верните найденных пользователей
}

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
