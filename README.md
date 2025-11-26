# Игра с гоблинами (DOM Goblin Game)

Мини-игра, где гоблины появляются в случайных клетках игрового поля 4x4, и игрок должен "поймать" их кликом.  
Проект собран с использованием Webpack, Babel, ESLint, Jest и GitHub Actions для автоматического деплоя на GitHub Pages.

![Build Status](https://github.com/AlinaShamina/dom-goblin/actions/workflows/deploy.yml/badge.svg)

[Перейти к игре](https://alinashamina.github.io/dom-goblin/)

## Структура проекта

- `src/` – исходные файлы (JS, CSS, HTML, изображения)
- `dist/` – сгенерированные файлы сборки (не коммитятся, создаются Webpack)
- `.github/workflows/` – настройка CI/CD для GitHub Actions
- `webpack.config.js` – конфигурация Webpack
- `package.json` / `yarn.lock` – зависимости и скрипты сборки

## Скрипты

- `yarn start` — запуск проекта в режиме разработки (webpack-dev-server)
- `yarn build` — сборка проекта для продакшн (dist/)

## Как играть

1. Нажмите **Start** для начала игры.
2. Гоблин появляется в случайной клетке каждые 1 секунду.
3. Кликайте на гоблина, чтобы набрать очки.
4. Игра заканчивается, если пропущено 5 появлений гоблинов.
5. Нажмите **Stop**, чтобы остановить игру.

## Особенности

- Используется **Webpack** для сборки всех ресурсов (JS, CSS, изображения)
- Все DOM-элементы создаются и перемещаются динамически
- Используется современный метод `append` вместо устаревшего `appendChild`
- **Custom cursor** в виде молотка при клике по гоблину
- CI/CD с GitHub Actions для автоматического деплоя на GitHub Pages
