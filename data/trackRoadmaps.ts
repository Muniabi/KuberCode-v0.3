export interface RoadmapExercise {
  id: string;
  title: string;
  type: "tutorial" | "practice";
}

export interface RoadmapModule {
  id: string;
  title: string;
  description: string;
  exercises: RoadmapExercise[];
}

export interface TrackRoadmap {
  trackSlug: string;
  languageId: string;
  modules: RoadmapModule[];
}

export const TRACK_ROADMAPS: Record<string, TrackRoadmap> = {
  javascript: {
    trackSlug: "javascript",
    languageId: "js",
    modules: [
      {
        id: "basics",
        title: "Введение в JavaScript",
        description: "Основы синтаксиса, переменные и типы данных",
        exercises: [
          { id: "hello-world", title: "Hello, World!", type: "tutorial" },
          { id: "variables", title: "Переменные и типы", type: "tutorial" },
          { id: "sum-numbers", title: "Умная сумма чисел", type: "practice" },
          { id: "type-coercion", title: "Приведение типов", type: "practice" },
        ],
      },
      {
        id: "control-flow",
        title: "Управление потоком",
        description: "Условия, циклы и ветвление",
        exercises: [
          { id: "conditions", title: "if / else", type: "tutorial" },
          { id: "loops", title: "Циклы for и while", type: "tutorial" },
          { id: "switch", title: "switch / case", type: "practice" },
          { id: "fizzbuzz", title: "FizzBuzz", type: "practice" },
        ],
      },
      {
        id: "functions",
        title: "Функции",
        description: "Объявление, стрелочные функции, замыкания",
        exercises: [
          { id: "declaration", title: "Объявление функций", type: "tutorial" },
          { id: "arrow", title: "Стрелочные функции", type: "tutorial" },
          { id: "closures", title: "Замыкания", type: "practice" },
          { id: "hof", title: "Функции высшего порядка", type: "practice" },
        ],
      },
      {
        id: "arrays",
        title: "Массивы и объекты",
        description: "Работа с коллекциями данных",
        exercises: [
          { id: "array-basics", title: "Методы массивов", type: "tutorial" },
          { id: "map-filter", title: "map / filter / reduce", type: "practice" },
          { id: "objects", title: "Объекты и деструктуризация", type: "tutorial" },
          { id: "json", title: "JSON и сериализация", type: "practice" },
        ],
      },
      {
        id: "async",
        title: "Асинхронность",
        description: "Promises, async/await и Event Loop",
        exercises: [
          { id: "callbacks", title: "Callbacks", type: "tutorial" },
          { id: "promises", title: "Promises", type: "tutorial" },
          { id: "async-await", title: "async / await", type: "practice" },
          { id: "fetch", title: "Работа с Fetch API", type: "practice" },
        ],
      },
      {
        id: "advanced",
        title: "Продвинутые темы",
        description: "Event Loop, прототипы, производительность",
        exercises: [
          { id: "event-loop", title: "Event Loop", type: "tutorial" },
          { id: "prototypes", title: "Прототипное наследование", type: "practice" },
          { id: "performance", title: "Оптимизация кода", type: "practice" },
        ],
      },
    ],
  },
  typescript: {
    trackSlug: "typescript",
    languageId: "typescript",
    modules: [
      {
        id: "basics",
        title: "Введение в TypeScript",
        description: "Типизация, интерфейсы, базовый синтаксис",
        exercises: [
          { id: "types", title: "Базовые типы", type: "tutorial" },
          { id: "interfaces", title: "Интерфейсы", type: "tutorial" },
          { id: "type-aliases", title: "Type Aliases", type: "practice" },
          { id: "unions", title: "Union Types", type: "practice" },
        ],
      },
      {
        id: "generics",
        title: "Generics",
        description: "Обобщённые типы и параметры",
        exercises: [
          { id: "generic-functions", title: "Generic Functions", type: "tutorial" },
          { id: "generic-classes", title: "Generic Classes", type: "practice" },
          { id: "constraints", title: "Constraints", type: "practice" },
        ],
      },
      {
        id: "utility-types",
        title: "Utility Types",
        description: "Partial, Required, Pick, Omit и другие",
        exercises: [
          { id: "partial-required", title: "Partial / Required", type: "tutorial" },
          { id: "pick-omit", title: "Pick / Omit", type: "practice" },
          { id: "record", title: "Record Type", type: "practice" },
          { id: "custom-utility", title: "Свои Utility Types", type: "practice" },
        ],
      },
      {
        id: "advanced-types",
        title: "Продвинутые типы",
        description: "Conditional, Mapped и Template Literal Types",
        exercises: [
          { id: "conditional", title: "Conditional Types", type: "tutorial" },
          { id: "mapped", title: "Mapped Types", type: "practice" },
          { id: "template-literal", title: "Template Literal Types", type: "practice" },
        ],
      },
      {
        id: "architecture",
        title: "Архитектура",
        description: "Паттерны, декораторы и организация кода",
        exercises: [
          { id: "decorators", title: "Декораторы", type: "tutorial" },
          { id: "modules", title: "Модули и namespace", type: "practice" },
          { id: "patterns", title: "Паттерны проектирования", type: "practice" },
        ],
      },
    ],
  },
  golang: {
    trackSlug: "golang",
    languageId: "go",
    modules: [
      {
        id: "basics",
        title: "Введение в Go",
        description: "Синтаксис, переменные, типы данных",
        exercises: [
          { id: "hello-world", title: "Hello, World!", type: "tutorial" },
          { id: "variables", title: "Переменные и типы", type: "tutorial" },
          { id: "constants", title: "Константы и iota", type: "practice" },
        ],
      },
      {
        id: "control-flow",
        title: "Управление потоком",
        description: "if, for, switch — без while",
        exercises: [
          { id: "if-else", title: "if / else", type: "tutorial" },
          { id: "for-loops", title: "Циклы for", type: "tutorial" },
          { id: "switch", title: "switch", type: "practice" },
          { id: "defer", title: "defer и panic", type: "practice" },
        ],
      },
      {
        id: "functions",
        title: "Функции",
        description: "Множественные возвраты, variadic, методы",
        exercises: [
          { id: "multi-return", title: "Множественные возвраты", type: "tutorial" },
          { id: "variadic", title: "Variadic Functions", type: "practice" },
          { id: "closures", title: "Замыкания", type: "practice" },
        ],
      },
      {
        id: "data-structures",
        title: "Структуры данных",
        description: "Slice, Map, Struct и их использование",
        exercises: [
          { id: "slices", title: "Slices", type: "tutorial" },
          { id: "maps", title: "Maps", type: "tutorial" },
          { id: "structs", title: "Structs", type: "practice" },
          { id: "methods", title: "Методы на struct", type: "practice" },
        ],
      },
      {
        id: "interfaces",
        title: "Интерфейсы",
        description: "Duck typing и полиморфизм",
        exercises: [
          { id: "interface-basics", title: "Интерфейсы", type: "tutorial" },
          { id: "type-assertion", title: "Type Assertion", type: "practice" },
          { id: "stringer", title: "fmt.Stringer", type: "practice" },
        ],
      },
      {
        id: "concurrency",
        title: "Конкурентность",
        description: "Goroutines, Channels, WaitGroup",
        exercises: [
          { id: "goroutines", title: "Goroutines", type: "tutorial" },
          { id: "channels", title: "Channels", type: "tutorial" },
          { id: "select", title: "select", type: "practice" },
          { id: "waitgroup", title: "sync.WaitGroup", type: "practice" },
          { id: "mutex", title: "sync.Mutex", type: "practice" },
        ],
      },
    ],
  },
  python: {
    trackSlug: "python",
    languageId: "python",
    modules: [
      {
        id: "basics",
        title: "Введение в Python",
        description: "Синтаксис, переменные, типы, ввод/вывод",
        exercises: [
          { id: "hello-world", title: "Hello, World!", type: "tutorial" },
          { id: "variables", title: "Переменные и типы", type: "tutorial" },
          { id: "input-output", title: "Ввод и вывод", type: "practice" },
        ],
      },
      {
        id: "data-structures",
        title: "Структуры данных",
        description: "Списки, словари, множества, кортежи",
        exercises: [
          { id: "lists", title: "Списки", type: "tutorial" },
          { id: "dicts", title: "Словари", type: "tutorial" },
          { id: "sets", title: "Множества", type: "practice" },
          { id: "comprehensions", title: "List Comprehensions", type: "practice" },
        ],
      },
      {
        id: "oop",
        title: "ООП",
        description: "Классы, наследование, магические методы",
        exercises: [
          { id: "classes", title: "Классы и объекты", type: "tutorial" },
          { id: "inheritance", title: "Наследование", type: "practice" },
          { id: "dunder", title: "Магические методы", type: "practice" },
        ],
      },
      {
        id: "algorithms",
        title: "Алгоритмы",
        description: "Сортировка, поиск, рекурсия",
        exercises: [
          { id: "sorting", title: "Алгоритмы сортировки", type: "practice" },
          { id: "binary-search", title: "Бинарный поиск", type: "practice" },
          { id: "recursion", title: "Рекурсия", type: "practice" },
        ],
      },
      {
        id: "data-science",
        title: "Основы Data Science",
        description: "NumPy, Pandas и анализ данных",
        exercises: [
          { id: "numpy", title: "NumPy основы", type: "tutorial" },
          { id: "pandas", title: "Pandas DataFrames", type: "practice" },
          { id: "visualization", title: "Визуализация данных", type: "practice" },
        ],
      },
    ],
  },
  react: {
    trackSlug: "react",
    languageId: "react",
    modules: [
      {
        id: "basics",
        title: "Основы React",
        description: "JSX, компоненты, props",
        exercises: [
          { id: "jsx", title: "JSX синтаксис", type: "tutorial" },
          { id: "components", title: "Компоненты", type: "tutorial" },
          { id: "props", title: "Props и Children", type: "practice" },
        ],
      },
      {
        id: "hooks",
        title: "Хуки",
        description: "useState, useEffect, useRef и другие",
        exercises: [
          { id: "usestate", title: "useState", type: "tutorial" },
          { id: "useeffect", title: "useEffect", type: "tutorial" },
          { id: "useref", title: "useRef", type: "practice" },
          { id: "custom-hooks", title: "Custom Hooks", type: "practice" },
        ],
      },
      {
        id: "state-management",
        title: "Управление состоянием",
        description: "Context API и паттерны стейта",
        exercises: [
          { id: "context", title: "Context API", type: "tutorial" },
          { id: "reducer", title: "useReducer", type: "practice" },
          { id: "performance", title: "useMemo / useCallback", type: "practice" },
        ],
      },
      {
        id: "architecture",
        title: "Архитектура SPA",
        description: "Роутинг, lazy loading, оптимизация",
        exercises: [
          { id: "routing", title: "Роутинг", type: "tutorial" },
          { id: "lazy", title: "Code Splitting", type: "practice" },
          { id: "forms", title: "Управляемые формы", type: "practice" },
        ],
      },
    ],
  },
  docker: {
    trackSlug: "docker",
    languageId: "docker",
    modules: [
      {
        id: "basics",
        title: "Основы Docker",
        description: "Контейнеры, образы, базовые команды",
        exercises: [
          { id: "hello-docker", title: "Hello Docker", type: "tutorial" },
          { id: "images", title: "Работа с образами", type: "tutorial" },
          { id: "containers", title: "Управление контейнерами", type: "practice" },
        ],
      },
      {
        id: "dockerfile",
        title: "Dockerfile",
        description: "Написание и оптимизация Dockerfile",
        exercises: [
          { id: "basic-dockerfile", title: "Базовый Dockerfile", type: "tutorial" },
          { id: "multistage", title: "Multi-stage builds", type: "practice" },
          { id: "layers", title: "Кэширование слоёв", type: "practice" },
        ],
      },
      {
        id: "compose",
        title: "Docker Compose",
        description: "Многоконтейнерные приложения",
        exercises: [
          { id: "compose-basics", title: "Базовый compose.yml", type: "tutorial" },
          { id: "networks", title: "Networks", type: "practice" },
          { id: "volumes", title: "Volumes", type: "practice" },
        ],
      },
      {
        id: "ci",
        title: "CI / Registry",
        description: "Docker Hub, GitHub Actions, деплой",
        exercises: [
          { id: "registry", title: "Docker Registry", type: "tutorial" },
          { id: "github-actions", title: "GitHub Actions + Docker", type: "practice" },
        ],
      },
    ],
  },
  kubernetes: {
    trackSlug: "kubernetes",
    languageId: "kubernetes",
    modules: [
      {
        id: "basics",
        title: "Введение в Kubernetes",
        description: "Pod, Node, Cluster — базовые концепции",
        exercises: [
          { id: "pod", title: "Первый Pod", type: "tutorial" },
          { id: "kubectl", title: "kubectl основы", type: "tutorial" },
          { id: "namespaces", title: "Namespaces", type: "practice" },
        ],
      },
      {
        id: "workloads",
        title: "Workloads",
        description: "Deployment, ReplicaSet, StatefulSet",
        exercises: [
          { id: "deployment", title: "Deployment", type: "tutorial" },
          { id: "replicaset", title: "ReplicaSet", type: "practice" },
          { id: "rolling-update", title: "Rolling Update", type: "practice" },
        ],
      },
      {
        id: "networking",
        title: "Сеть",
        description: "Service, Ingress, DNS",
        exercises: [
          { id: "service", title: "Service типы", type: "tutorial" },
          { id: "ingress", title: "Ingress", type: "practice" },
          { id: "network-policy", title: "Network Policy", type: "practice" },
        ],
      },
      {
        id: "storage",
        title: "Хранилище",
        description: "PV, PVC, ConfigMap, Secret",
        exercises: [
          { id: "configmap", title: "ConfigMap", type: "tutorial" },
          { id: "secret", title: "Secrets", type: "practice" },
          { id: "pvc", title: "PersistentVolumeClaim", type: "practice" },
        ],
      },
    ],
  },
  sql: {
    trackSlug: "sql",
    languageId: "sql",
    modules: [
      {
        id: "basics",
        title: "Основы SQL",
        description: "SELECT, WHERE, ORDER BY, LIMIT",
        exercises: [
          { id: "select", title: "SELECT основы", type: "tutorial" },
          { id: "where", title: "WHERE и условия", type: "tutorial" },
          { id: "order-limit", title: "ORDER BY / LIMIT", type: "practice" },
        ],
      },
      {
        id: "joins",
        title: "JOIN",
        description: "INNER, LEFT, RIGHT, FULL JOIN",
        exercises: [
          { id: "inner-join", title: "INNER JOIN", type: "tutorial" },
          { id: "left-join", title: "LEFT JOIN", type: "practice" },
          { id: "multi-join", title: "Несколько JOIN", type: "practice" },
        ],
      },
      {
        id: "aggregations",
        title: "Агрегации",
        description: "GROUP BY, HAVING, агрегатные функции",
        exercises: [
          { id: "group-by", title: "GROUP BY", type: "tutorial" },
          { id: "having", title: "HAVING", type: "practice" },
          { id: "window-functions", title: "Window Functions", type: "practice" },
        ],
      },
      {
        id: "advanced",
        title: "Продвинутые темы",
        description: "Индексы, транзакции, оптимизация",
        exercises: [
          { id: "indexes", title: "Индексы", type: "tutorial" },
          { id: "transactions", title: "Транзакции", type: "practice" },
          { id: "explain", title: "EXPLAIN и оптимизация", type: "practice" },
        ],
      },
    ],
  },
};

export function getRoadmap(trackSlug: string): TrackRoadmap | null {
  return TRACK_ROADMAPS[trackSlug] ?? null;
}
