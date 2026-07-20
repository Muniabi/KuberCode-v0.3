export interface Track {
    id: string;
    title: string;
    description: string;
    icon: string; // путь к SVG или emoji-fallback
    color: string; // градиент/цвет карточки
    exerciseCount: number;
    difficulty: "beginner" | "intermediate" | "advanced";
    tags: string[];
    slug: string;
}

export const TRACKS: Track[] = [
    {
        id: "javascript",
        slug: "javascript",
        title: "JavaScript",
        description:
            "Основы языка, замыкания, async/await, работа с DOM и современный ES2024+",
        icon: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/javascript/default.svg",
        color: "from-yellow-500/20 to-yellow-600/5",
        exerciseCount: 48,
        difficulty: "beginner",
        tags: ["ES2024", "async", "DOM"],
    },
    {
        id: "typescript",
        slug: "typescript",
        title: "TypeScript",
        description:
            "Типы, generics, utility types и архитектура строго-типизированных приложений",
        icon: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/typescript/default.svg",
        color: "from-blue-500/20 to-blue-600/5",
        exerciseCount: 36,
        difficulty: "intermediate",
        tags: ["Generics", "Types", "OOP"],
    },
    {
        id: "golang",
        slug: "golang",
        title: "Go",
        description:
            "Горутины, каналы, интерфейсы и написание высокопроизводительных сервисов",
        icon: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/go/default.svg",
        color: "from-cyan-500/20 to-cyan-600/5",
        exerciseCount: 30,
        difficulty: "intermediate",
        tags: ["Goroutines", "Channels", "REST"],
    },
    {
        id: "python",
        slug: "python",
        title: "Python",
        description:
            "Алгоритмы, структуры данных, автоматизация и основы Data Science",
        icon: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/python/default.svg",
        color: "from-green-500/20 to-green-600/5",
        exerciseCount: 42,
        difficulty: "beginner",
        tags: ["Algorithms", "OOP", "Data"],
    },
    {
        id: "react",
        slug: "react",
        title: "React",
        description:
            "Компоненты, хуки, управление состоянием и архитектура SPA-приложений",
        icon: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/react/default.svg",
        color: "from-sky-500/20 to-sky-600/5",
        exerciseCount: 28,
        difficulty: "intermediate",
        tags: ["Hooks", "State", "SPA"],
    },
    {
        id: "docker",
        slug: "docker",
        title: "Docker",
        description:
            "Контейнеризация, Dockerfile, Compose и базовая оркестрация сервисов",
        icon: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/docker/default.svg",
        color: "from-blue-600/20 to-blue-700/5",
        exerciseCount: 20,
        difficulty: "intermediate",
        tags: ["Containers", "Compose", "CI"],
    },
    {
        id: "kubernetes",
        slug: "kubernetes",
        title: "Kubernetes",
        description:
            "Pod, Deployment, Service, Ingress и управление кластером в production",
        icon: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/kubernetes/default.svg",
        color: "from-indigo-500/20 to-indigo-600/5",
        exerciseCount: 18,
        difficulty: "advanced",
        tags: ["Pods", "Deployments", "K8s"],
    },
    {
        id: "sql",
        slug: "sql",
        title: "SQL",
        description:
            "Запросы, JOIN, индексы, транзакции и оптимизация баз данных",
        icon: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/postgresql/default.svg",
        color: "from-orange-500/20 to-orange-600/5",
        exerciseCount: 24,
        difficulty: "beginner",
        tags: ["Queries", "Joins", "Indexes"],
    },
];

export const STATS = [
    { value: "180+", label: "Упражнений" },
    { value: "8", label: "Треков обучения" },
    { value: "12 000+", label: "Учеников" },
    { value: "94%", label: "Довольны результатом" },
];

export const TESTIMONIALS = [
    {
        id: 1,
        text: "Благодаря KuberCode я устроился Go-разработчиком через 4 месяца практики. Формат «задача → решение → фидбек» работает.",
        name: "Артём К.",
        role: "Go Developer, Яндекс",
        avatar: "АК",
    },
    {
        id: 2,
        text: "Наконец-то платформа, где не просто смотришь видео, а сразу пишешь код и получаешь результат. Прошла JavaScript за 6 недель.",
        name: "Мария Л.",
        role: "Frontend Developer, VK",
        avatar: "МЛ",
    },
    {
        id: 3,
        text: "TypeScript-трек закрыл все мои пробелы в типизации. Особенно полезны упражнения на Generics и утилитарные типы.",
        name: "Дмитрий П.",
        role: "Senior TS Developer",
        avatar: "ДП",
    },
];
