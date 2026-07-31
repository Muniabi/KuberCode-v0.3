# KuberCode

Маркетинговый лендинг платформы практического обучения программированию (**kubercode.ru**).

> Кабинет, авторизация и треки обучения будут в отдельном приложении (`app.kubercode.ru`). Этот репозиторий сейчас — только лендинг.

## Стек

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- next-themes

## Команды

```bash
npm install
npm run dev      # http://localhost:3001
npm run build
npm start
npm run lint
```

## Структура

```
app/                  # маршруты и layout
components/ui/        # UI и секции лендинга
  shared/             # Hero, треки, CTA и др.
data/                 # статические данные треков
lib/                  # providers, utils, theme
public/               # статика
```

## Тема

По умолчанию — `dark`. Выбор пользователя сохраняется в `localStorage` (`kc-theme`). Режим `system` доступен в переключателе темы.
