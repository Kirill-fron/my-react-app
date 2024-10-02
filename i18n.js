import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            "headerText": "3D animator training camp",
            "courseTitle": "Course",
            "courseName": "3D Animation in Blender",
            "education" : "3D animation training",
            "courseDescription": "In this course, you will learn the basics of animation, the specifics of 3D animation in Blender...",
            "programBtn": "Program",
            "levelLabel": "Knowledge level:",
            "levelValue": "From beginner to expert",
            "skillsLabel": "You will master:",
            "skillsValue": "Blender, Adobe After Effects, Mixamo, Unreal Engine",
            "practiceLabel": "Practice:",
            "practiceValue": "You will get a lot of practice with character animation and motion design",
            "careerTitle": "Your career",
            "careerAnimatorTitle": "3D Animator",
            "careerAnimatorDescription": "A professional who brings 3D objects and characters to life. The appearance is created by the artist...",
            "skills": "Skills",
            "animation": "Animation",
            "rendering": "Rendering",
            "compositing": "Compositing",
            "blender": "Blender",
            "title": 'Where are animator skills needed?',
            "film": "Film",
            "gaming": "Gaming Industry",
            "advertising": "Advertising",
            "television": "Television",
            "architecture": "Architecture and Design",
            "medicine": "Medicine",
            "education": "Education",
            "science": "Science and Research",
            "manufacturing": "Manufacturing and Engineering",
            "vr": "Virtual and Augmented Reality",
            "music": "Music Industry",
            "fashion": "Fashion",
            "space": "Space Industry"
        },
       
    },
    ru: {
        translation: {
            "headerText": "тренировочный лагерь 3D аниматора",
            "courseTitle": "Курс",
            "courseName": "3D Анимация в программе Blender",
            "education": "Обучение 3D анимации",
            "courseDescription": "На курсе вы изучите основы анимации, особенности 3D анимации в программе Blender...",
            "programBtn": "Программа",
            "levelLabel": "Уровень знаний:",
            "levelValue": "С нуля до эксперта",
            "skillsLabel": "Вы освоите:",
            "skillsValue": "Blender, Adobe After Effects, Mixamo, Unreal Engine",
            "practiceLabel": "Практика:",
            "practiceValue": "Получите много практики с анимацией персонажей и моушн-дизайном",
            "careerTitle": "Ваша карьера",
            "careerAnimatorTitle": "3D Аниматор",
            "careerAnimatorDescription": "профессионал, который оживляет трехмерные объекты и персонажи. Внешний вид персонажа создается художником, но его поведение и движения в пространстве определяет аниматор. С помощью анимации можно наделить одну и ту же модель различными чертами характера: например, монстр может выглядеть отважным и агрессивным или, наоборот, робким и боязливым. 3D-аниматоры могут занимать позиции режиссеров-постановщиков, аниматоров, риггеров, специалистов по визуализации, а также художников по моделированию и текстурированию.",
            "skills": "Навыки",
            "animation": "Анимация",
            "rendering": "Рендеринг",
            "compositing": "Композинг",
            "blender": "Blender",
            "title": "Где нужны навыки аниматора",
            "film": "Кино",
            "gaming": "Игровая индустрия",
            "advertising": "Реклама",
            "television": "Телевидение",
            "architecture": "Архитектура и дизайн",
            "medicine": "Медицина",
            "education": "Образование",
            "science": "Наука и исследования",
            "manufacturing": "Производство и инженерия",
            "vr": "Виртуальная и дополненная реальность",
            "music": "Музыкальная индустрия",
            "fashion": "Мода",
            "space": "Космическая индустрия"
        },

    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
