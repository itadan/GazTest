CurrencyChart
CurrencyChart - это компонент React, предназначенный для отображения графика курса выбранной валюты за определенный период времени. Он предоставляет возможность выбора валюты из списка доступных и отображает среднее значение курса за выбранный период.

Использование
Установка
Установите зависимости:

bash
Copy code
npm install
Запуск приложения
Запустите приложение:

bash
Copy code
npm start
Пример использования
jsx
Copy code
import React from 'react';
import { CurrencyChart } from './CurrencyChart';

function App() {
  return (
    <div className="App">
      <CurrencyChart />
    </div>
  );
}

export default App;
Дополнительные возможности
Выбор валюты: Кнопки переключатели позволяют выбрать одну из доступных валют.
Отображение среднего значения: Среднее значение курса выбранной валюты за период отображается под графиком.
Зависимости
React: Используется для построения пользовательского интерфейса.
ReactECharts: Используется для отображения графиков.
axios: Используется для выполнения запросов к API.#   g a z  
 #   G a z T e s t  
 