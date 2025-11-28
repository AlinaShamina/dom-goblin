# Игра с гоблинами (DOM Goblin Game)

Мини-игра, где гоблины появляются в случайных клетках игрового поля 4x4, и игрок должен "поймать" их кликом.  
Проект собран с использованием Webpack, Babel, ESLint, Jest и GitHub Actions для автоматического деплоя на GitHub Pages.

![Build Status](https://github.com/AlinaShamina/dom-goblin/actions/workflows/deploy.yml/badge.svg)

Простая игра "Ударь Гоблина" на DOM: гоблин появляется в случайной клетке каждые 1000 мс, а игрок должен по нему кликнуть.

- Поле: 4×4 клетки.
- Гоблин перемещается каждые 1 секунду.
- Попадание учитывается в счёт, промахи тоже.
- Перемещение гоблина происходит через новый родительский DOM-узел, без использования `removeChild`.

## Игра доступна на GitHub Pages:  
[https://alinashamina.github.io/dom-goblin/](https://alinashamina.github.io/dom-goblin/)
