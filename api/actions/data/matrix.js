const matrix = {
  "0": {
    label: 'Рынок',
    blocks: [
      {
        label: 'Проблемы и адресаты',
        elems: [
          // {text: 'Целевая аудитория', value: 0},
          // {text: 'Проблемы и потребности аудитории', value: 1},
          // {text: 'Объем рынка', value: 2},
          'Целевая аудитория ',
          'Проблемы и потребности аудитории',
          'Объем рынка',
          'Конкуренты' ,
          'Внешние факторы: политические, экономические, технологические и др.',
          'SWOT-анализ'
        ],
        after: 'Проверка гипотез с помощью Customer Development',
        left: {
          label: 'Стартовый уровень',
          icon: 'guru'
        }
      },
      {
        label: 'Задачи и ожидания адресатов',
        elems: [
          'Персонажи',
          'Customer Journey Map',
          'Явные и скрытые ожидания триггеры'
        ],
        after: 'Формулирование прогнозируемых KPI',
        left: {
          label: 'Уровень проектирования',
          icon: 'len'
        }
      },
      {
        label: 'Реакция и динамика рынка',
        elems: [
          'Клики, покупки',
          'Мониторинг деятельности конкурентов',
          'Системы мониторинга внешней среды'
        ],
        after: 'Комплекс работ по каждой из вертикалей позволяют системно повышать ключевые метрики продукта',
        left: {
          label: 'Уровень реализации',
          icon: 'dev'
        }
      }
    ],
    summary: {
      label: 'Доля рынка'
    }
  },
  "1": {
    label: 'Маркетинг',
    blocks: [
      {
        label: 'Доставка до аудитории',
        elems: [
          'Маркетинговые каналы',
          'Расчет стоимости привлечения пользователя'
        ]
      },
      {
        label: 'Сценарии взаимодействия',
        elems: [
          'Стратегия работы с клиентом',
          'Мессаджи в рекламе',
          'Маркетинг конкурентов',
          'Маркетинговая стратегия, площадки и медиаплан',
          'Расчеты и формирование KPI маркетинга'
        ]
      },
      {
        label: 'Инструменты коммуникации',
        elems: [
          'Инструменты коммуникации (посадочные, приложения, баннеры и пр.)',
          'Веб-метрики и изменение качества трафика и конвертации',
          'Инструменты автоматизации и повышения конверсии: call-tracking, онлайн-чаты, ретаргетинг, сетки, партнерки и пр.',
          'Работа с данными по клиентам: интеграция CRM, консолидация и обработка данных из различных источников'
        ]
      }
    ],
    summary: {
      label: 'KPI маркетинга:',
      elems: [
        'Конверсии',
        'ROI',
        'Качество трафика',
        'Ядро',
        'CLV',
        'Охват'
      ]
    }
  },
  "2": {
    label: 'Продукт',
    blocks: [
      {
        label: 'Концепция продукта',
        elems: [
          'Идея продукта',
          'Уникальное торговое предложение',
          'Коммерциализация и модель монетизации'
        ]
      },
      {
        label: 'Сценарии использования',
        elems: [
          'Сценарии использования продукта',
          'Функциональные возможности и особенности, фишки, идеи',
          'Воронка продаж и инструменты влияния',
          'Конкурентные продукты',
          'Требования к MVP и его состав',
          'Расчеты и формирование KPI продукта'
        ]
      },
      {
        label: 'Разработка и эксплуатация',
        elems: [
          'Прототипирование и дизайн интерфейсов',
          'Разработка и тестирование продукта',
          'Внедрение систем отслеживания конверсии внутри продукта, систем сплит-тестирования интерфейсов',
          'Техническая поддержка продукта и ИТ-инфраструктуры (серверы и пр.)',
          'Проведение опросов аудитории и сбор обратной связи'
        ]
      }
    ],
    summary: {
      label: 'KPI продукта:',
      elems: [
        'Конверсии',
        'ROI',
        'CLV',
        'Средний чек',
        'Повторные покупки',
        'Retention (возвраты)',
        'Churn Rate',
        'Отказы',
        'Ядро'
      ]
    }
  },
  "3": {
    label: 'Бизнес',
    blocks: [
      {
        label: 'Экономика продукта',
        elems: [
          'Расчет операционных затрат',
          'Бизнес-модель'
        ]
      },
      {
        label: 'Бизнес-процессы',
        elems: [
          'Экономика продукта',
          'Проектирование бизнес-процессов'
        ]
      },
      {
        label: 'Обеспечение',
        elems: [
          'Оптимизация бизнес-процессов',
          'Масштабирование'
        ]
      }
    ],
    summary: {
      label: 'Выручка'
    }
  }
};

export default matrix;
