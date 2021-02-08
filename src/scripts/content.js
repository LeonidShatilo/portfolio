// eslint-disable-next-line import/prefer-default-export
export const CONTENT = {
  language: 'en',
  header: {
    home: {
      en: 'Home',
      ru: 'Домой',
    },
    about: {
      en: 'About me',
      ru: 'Обо мне',
    },
    portfolio: {
      en: 'Portfolio',
      ru: 'Портфолио',
    },
    contacts: {
      en: 'Contacts',
      ru: 'Контакты',
    },
  },
  home: {
    title: {
      en: `I'm Leonid Shatilo.`,
      ru: 'Я Леонид Шатило.',
    },
    subtitle: {
      en: `I'm a Junior Frontend Developer located in Gomel, Belarus.<br />
      Currently, I'm looking for a job or internship to improve my skills 
      and knowledge. Let's start scrolling and learn more about me.`,
      ru: `Я начинающий Frontend разработчик, находящийся в Гомеле, Беларусь.<br />
      В настоящее время я ищу работу или стажировку для совершенствования своих 
      навыков и знаний. Давайте начнем листать и узнаем больше обо мне.`,
    },
    scrollText: {
      en: `Scroll down`,
      ru: 'Листай вниз',
    },
  },
  about: {
    title: {
      en: 'About me',
      ru: 'Обо мне',
    },
    description: {
      en: `Studied Frontend Development at
            <a
              href="https://careers.epam.by/training/upskilllab"
              target="_blank"
              >EPAM UpSkill Lab</a
            >
            based on <br />
            <a href="https://rs.school/" target="_blank"
              >The Rolling Scopes School</a
            >
            course under the guidance of a mentor.`,
      ru: `Изучал Frontend разработку в
            <a
              href="https://careers.epam.by/training/upskilllab"
              target="_blank"
              >EPAM UpSkill Lab</a
            >
            на базе курса <br />
            <a href="https://rs.school/" target="_blank"
              >The Rolling Scopes School</a
            >
            под руководством ментора.`,
    },
    mastered: {
      en: 'During the training period I mastered:',
      ru: 'За время обучения я освоил:',
    },
  },
  portfolio: {
    header: {
      en: 'My works, made in the process of learning',
      ru: 'Мои работы, сделанные в процессе обучения',
    },
    filter: {
      en: 'All',
      ru: 'Все',
    },
    demo: {
      en: 'DEMO',
      ru: 'ДЕМО',
    },
    technologiesTitle: {
      en: 'This project uses technologies such as:',
      ru: 'В этом проекте используются такие технологии, как:',
    },
  },
  works: {
    fancyWeather: {
      en: `Weather forecast app. When the user opens the application, all
          data on the page refers to the user's current city. The search bar
          searches by city or ZIP code. The background image changes when
          the page content is updated or when you click the button to switch
          the background image in the control block. Implemented additional
          functionality: translation of the map language, determine the
          exact location of the user, as well as voice search.`,
      ru: `Приложение прогноза погоды. Когда пользователь открывает 
          приложение, все данные на странице относятся к текущему городу 
          пользователя. Строка поиска осуществляет поиск по городу или 
          почтовому индексу. Фоновое изображение меняется, когда содержимое 
          страницы обновляется или при нажатии на кнопку для смены фона 
          в блоке управления. Реализован дополнительный функционал: перевод 
          языка карты, определение точного местонахождения пользователя, а 
          также голосовой поиск.`,
    },
    raindrops: {
      en: `A math simulator app that allows you to strengthen your arithmetic
          skills: adding, subtracting, multiplying, and dividing. The
          arithmetic expression is written in a raindrop that falls into the
          sea. The answer is entered on the panel with numbers. You must
          enter the answer before the drop falls.`,
      ru: `Математическое приложение тренажёр, которое позволяет укрепить
          арифметические навыки: сложение, вычитание, умножение и деление.
          Арифметическое выражение написано в капле дождя, которая падает в
          море. Ответ вводится на панели с цифрами. Вы должны ввести ответ
          до того, как капля упадет.`,
    },
    socket: {
      en: `Chat application for sending and receiving messages in real time.
          The application has a client part and a server part.`,
      ru: `Чат-приложение для отправки и получения сообщений в режиме 
          реального времени. Приложение имеет клиентскую и серверную часть.`,
    },
    singolo: {
      en: `Single-page adaptive website, composed by the layout of Figma.`,
      ru: `Одностраничный адаптивный сайт, созданный по макету Figma.`,
    },
    calculator: {
      en: `The simplest calculator that performs mathematical operations:
          addition, subtraction, multiplication and division. An additional
          series of buttons was implemented: Euler number, Pi number, square
          root.`,
      ru: `Простейший калькулятор, который выполняет математические операции: 
          сложение, вычитание, умножение и деление. Реализован дополнительный 
          ряд кнопок: Число Эйлера, число Пи, квадратный корень.`,
    },
    landingPage: {
      en: `Landing, showing the time, user name and his tasks for the current
          day. The background image changes depending on the time of day
          (morning, day, evening). The application uses local storage for
          data storage. A button has been implemented to switch between
          12/24 hour formats.`,
      ru: `Целевая страница, показывающая время, имя пользователя и его задачи 
          на текущий день. Фоновое изображение меняется в зависимости от времени 
          суток (утро, день, вечер). Для хранения данных приложение использует 
          локальное хранилище. Реализована кнопка для переключения между 
          12/24-часовыми форматами.`,
    },
    meditationApp: {
      en: `Meditation application with a choice of sound and duration (2, 5,
          10 minutes). A video screen saver is used as a background, which
          changes depending on the selected sound.`,
      ru: `Приложение для медитации с выбором звука и продолжительности 
          (2, 5, 10 минут). В качестве фона используется видеозаставка, которая 
          изменяется в зависимости от выбранного звука.`,
    },
    whackMole: {
      en: `The game of reaction speed, in which you need to click on the
          hopping mole and earn scores. Implemented saving the best result
          in the local storage.`,
      ru: `Игра на скорость реакции, в которой вам нужно кликать на 
          выпрыгивающего крота и зарабатывать очки. Реализовано сохранение 
          лучшего результата в локальном хранилище.`,
    },
    virtualKeyboard: {
      en: `A virtual keyboard project to enter text using a computer mouse or
          fingers on the smartphone screen.`,
      ru: `Проект виртуальной клавиатуры для ввода текста с помощью компьютерной 
          мыши или пальцев на экране смартфона.`,
    },
    drumKit: {
      en: `A music application that plays sound when you press certain keys
          on your keyboard. Each key has its own sound. Clicking on the
          buttons with a computer mouse is implemented.`,
      ru: `Музыкальное приложение, воспроизводящее звук при нажатии определенных 
          клавиш на клавиатуре. У каждой клавиши свой звук. Реализовано нажатие на 
          кнопки компьютерной мышью.`,
    },
    funCanvas: {
      en: `Creation of a simple canvas for drawing. Implemented additional
          functionality: added buttons for selection of rainbow and wave
          styles, as well as input for selection of any line color and
          width.`,
      ru: `Создание простого холста для рисования. Реализованы дополнительные 
          функциональные возможности: добавлены кнопки для выбора стилей радуги и 
          волны, а также возможность выбора любого цвета и ширины линии.`,
    },
    videoSpeedController: {
      en: `Video playback speed control. You can speed up or slow down video
          playback by moving the slider to the right of the player.`,
      ru: `Контроль скорости воспроизведения видео. Вы можете ускорить или 
          замедлить воспроизведение видео, переместив ползунок справа от проигрывателя.`,
    },
    customVideoPlayer: {
      en: `Simple custom video player with adjustable sound, playback speed
          and rewind. Full-screen viewing option is implemented.`,
      ru: `Простой пользовательский видеоплеер с возможностью регулировки 
          звука, скорости воспроизведения и перемотки. Реализована опция 
          полноэкранного просмотра.`,
    },
    flexPanelGallery: {
      en: `Gallery with images that are opened when you click on them. When
          you open it, additional text appears and the font increases.`,
      ru: `Галерея с изображениями, которые открываются при нажатии на них. 
          При открытии появляется дополнительный текст, а шрифт увеличивается.`,
    },
    cssVariables: {
      en: `A photo editor that allows you to add a photo frame and make
          blurring. When you change the color of the frame, the color of the
          text in the title changes with the help of CSS variables.`,
      ru: `Фоторедактор, позволяющий добавлять фоторамку и делать размытие 
          изображения. При изменении цвета рамки изменяется и цвет текста в 
          заголовке с помощью переменных CSS.`,
    },
  },
  contacts: {
    title: {
      en: `Say hello`,
      ru: `Скажи привет`,
    },
    subtitle: {
      en: `Do you have an offer for me? Nice! Let's collaborate and create 
        something awesome together.`,
      ru: `У вас есть предложение для меня? Здорово! Давайте вместе создадим 
        что-нибудь потрясающее.`,
    },
    email: {
      en: `E-mail`,
      ru: `Почта`,
    },
    phone: {
      en: `Phone`,
      ru: `Телефон`,
    },
  },
};
