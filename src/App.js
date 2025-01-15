import React, { useState } from "react";
import "./App.css"; // Create a CSS file for custom styling
//salom dunyo
const App = () => {
  const initialQuestions = [
    {
      question: "Android Studio uchun qaysi dasturlash tili afzal?",
      options: ["Kotlin va Java", "Python va C++", "HTML va CSS", "PHP va Ruby"],
      correctAnswer: "Kotlin va Java",
    },
    {
      question: "Android ilovalar qanday formatda saqlanadi?",
      options: [".apk", ".dmg", ".exe", ".html"],
      correctAnswer: ".apk",
    },
    {
      question: "Xcode muhiti qaysi dasturlash tillarini qo’llab-quvvatlaydi?",
      options: [
        "Swift, Objective C",
        "Kotlin, Java",
        "Java, Python",
        "Ruby, Kotlin",
      ],
      correctAnswer: "Swift, Objective C",
    },
    {
      question: "Android Studio muhitini qaysi web manzildan yuklab olish mumkin?",
      options: [
        "https://developer.android.com/",
        "https://android.com/",
        "https://android.dev.com/",
        "https://android.dev/",
      ],
      correctAnswer: "https://developer.android.com/",
    },
    {
      question:
        "Android Studio dasturidagi asosiy buyruqlar va funksiyalar fayli qanday nomlanadi?",
      options: [
        "MainActivity.java",
        "activity_main.xml",
        "activity_main.java",
        "MainActivity.xml",
      ],
      correctAnswer: "MainActivity.java",
    },

    
    {
      question: "Birinchi telefon kitobi qachon paydo bo’lgan?",
      options: [
        "1878-yil fevralda",
        "1888-yil martda",
        "1868-yil iyulda",
        "1898-yil dekabrda",
      ],
      correctAnswer: "1878-yil fevralda",
    },
    {
      question: "“Alisa” tizimini kim ovozlashtirgan?",
      options: [
        "Tatyana Shitova",
        "Natalya Bochkareva",
        "Marina Golub",
        "Yana Troyanova",
      ],
      correctAnswer: "Tatyana Shitova",
    },
    {
      question:
        "Qaysi kompaniya ilk marotaba mobil telefonlarni sotuvga chiqargan?",
      options: ["Motorola", "Bell", "Apple", "Nokia"],
      correctAnswer: "Motorola",
    },
    {
      question: "Android qanday ma’lumotlar bazasi dvigatelidan foydalanadi?",
      options: ["SQLite", "DBM", "InnoDB", "MyISAM"],
      correctAnswer: "SQLite",
    },
    {
      question:
        "Javada public static void main(String[] args) nima uchun ishlatiladi?",
      options: [
        "Dastur bajarilishini boshlash uchun",
        "Faqat sinov uchun",
        "Klass ichidagi barcha metodlar uchun",
        "Foydalanuvchi interfeysi yaratish uchun",
      ],
      correctAnswer: "Dastur bajarilishini boshlash uchun",
    },
    {
      question: "Birinchi raqamli uyali tarmoqlar qachon paydo bo’lgan?",
      options: ["1990-yilda", "1980-yilda", "1992-yilda", "1976-yilda"],
      correctAnswer: "1990-yilda",
    },
    {
      question:
        "Motorola kompaniyasi tomonidan sotuvga chiqarilgan dastlabki mobil telefon qaysi?",
      options: ["Robin", "DynaTAC", "Oro", "Xperia"],
      correctAnswer: "DynaTAC",
    },
    {
      question: "Dastlabki analog uyali tarmoqlar qachon paydo bo’lgan?",
      options: ["1971-yilda", "1968-yilda", "1979-yilda", "1966-yilda"],
      correctAnswer: "1979-yilda",
    },
    {
      question:
        "Aleksandr Grem Bell tomonidan qachon inson ovozini aniq, tushunarli tarzda takrorlash imkonini beruvchi qurilma uchun patent olingan?",
      options: ["1876-yilda", "1823-yilda", "1926-yilda", "1892-yilda"],
      correctAnswer: "1876-yilda",
    },
    {
      question:
        "Nyu-Yorkdan Chikagoga birinchi telefon qo’ng’irog’i qachon amalga oshirilgan?",
      options: ["1912-yilda", "1874-yilda", "1876-yilda", "1892-yilda"],
      correctAnswer: "1892-yilda",
    },
    {
      question: "Qachon Toshkent shahar telefon tarmogʻi ishga tushirilgan?",
      options: ["1914-yilda", "1924-yilda", "1910-yilda", "1929-yilda"],
      correctAnswer: "1914-yilda",
    },
    {
      question:
        "O’zbekiston hududidagi dastlabki telefon stansiyalari qachon qurilgan?",
      options: ["1920-yil", "1921-yil", "1914-yil", "1929-yil"],
      correctAnswer: "1929-yil",
    },
    {
      question:
        "IT mutaxassislari emulyatorlardan quyidagi maqsadlarda foydalanadilar?",
      options: [
        "Tizimlar o’rtasida ko’chirishda, joriy tizimlarni yaxshilashda",
        "Eski tizimlarni saqlashda, yangi tizimlarni ishlab chiqishda",
        "Barcha javoblar to’g’ri",
        "Yangi tizimlarni ishlab chiqishda, tizimlar o’rtasida ko’chirishda",
      ],
      correctAnswer: "Barcha javoblar to’g’ri",
    },
    {
      question: "Emulyatorlar qanda turlarga bo’linadi?",
      options: [
        "O’yin konsoli emulyatorlari, Printer emulyatorlari, Server emulyatorlari",
        "Funksional emulyatorlar, Mobil emulyatorlar, CPU emulyatorlari",
        "To’liq tizim emulyatorlari, Tarmoq emulyatorlari, Terminal emulyatorlari",
        "Barcha javoblar to’g’ri",
      ],
      correctAnswer: "Barcha javoblar to’g’ri",
    },
    {
      question:
        "Qaysi turdagi emulyatorlar an’anaviy kompyuter terminallarining imkoniyatlarini taqlid qiladi?",
      options: [
        "To’liq tizim emulyatorlari",
        "CPU emulyatorlari",
        "Funksional emulyatorlar",
        "Terminal emulyatorlari",
      ],
      correctAnswer: "Terminal emulyatorlari",
    },
    {
      question:
        "Qaysi turdagi emulyatorlar CPU, chipset, asosiy kirish/chiqish tizimi (BIOS), qurilmalar va boshqalarni taqlid qiladi?",
      options: [
        "Terminal emulyatorlari",
        "To’liq tizim emulyatorlari",
        "CPU emulyatorlari",
        "Funksional emulyatorlar",
      ],
      correctAnswer: "To’liq tizim emulyatorlari",
    },
    {
      question:
        "Qaysi turdagi emulyatorlar avtorizatsiya qilingan internet-serverning xatti-harakatlariga taqlid qiladi?",
      options: [
        "Server emulyatorlari",
        "Tarmoq emulyatorlar",
        "To’liq tizim emulyatorlari",
        "Funksional emulyatorlari",
      ],
      correctAnswer: "Server emulyatorlari",
    },
    {
      question: "Mobil emulyatorning vazifasi qanday?",
      options: [
        "Kompyuter o’yinlarini Andoidga operatsion tizimga o’rnatib beradi",
        "To’g’ri javob yo’q",
        "Raqamli gadjetlar uchun dasturiy ta’minot ishlab chiqadi",
        "Qurilmaning apparat va dasturiy ta’minotini kompyuterda simulyatsiya qiladi",
      ],
      correctAnswer:
        "Qurilmaning apparat va dasturiy ta’minotini kompyuterda simulyatsiya qiladi",
    },
    {
      question: "Mobil emulyatorlar qaysi javobda berilgan?",
      options: [
        "BlueStacks, Visual Studio, LambdaTest, KoPlayer, Delta",
        "PyCharm, Xcode, Arduino IDE, MEmu, BlueStacks",
        "LambdaTest, Delta, MEmu, NoxPlayer, BlueStacks",
        "IntelliJ IDEA, PhpStorm, LDPlayer, BlueStacks, NoxPlayer",
      ],
      correctAnswer: "LambdaTest, Delta, MEmu, NoxPlayer, BlueStacks",
    },
    
  ];
 

  const shuffleArray = (array) => {
    return array
      .map((item) => ({ ...item, sortKey: Math.random() }))
      .sort((a, b) => a.sortKey - b.sortKey)
      .map(({ sortKey, ...rest }) => rest);
  };

  const [questions, setQuestions] = useState(shuffleArray(initialQuestions));
  const [answers, setAnswers] = useState(Array(initialQuestions.length).fill(null));
  const [showResults, setShowResults] = useState(false);

  // Handle answer selection
  const handleAnswerChange = (index, answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = answer;
    setAnswers(updatedAnswers);
  };

  // Calculate results
  const calculateResults = () => {
    setShowResults(true);
  };

  // Restart the test
  const restartTest = () => {
    setQuestions(shuffleArray(initialQuestions));
    setAnswers(Array(initialQuestions.length).fill(null));
    setShowResults(false);
  };

  // Count correct answers
  const correctCount = answers.filter(
    (answer, index) => answer === questions[index].correctAnswer
  ).length;

  return (
    <div className="app">
      <h1 className="title">Test Application</h1>
      {!showResults ? (
        <div className="questionnaire">
          {questions.map((question, index) => (
            <div key={index} className="question-card">
              <p className="question-text">
                {index + 1}. {question.question}
              </p>
              <div className="options">
                {question.options.map((option, optIndex) => (
                  <label key={optIndex} className="option-label">
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={option}
                      onChange={() => handleAnswerChange(index, option)}
                      checked={answers[index] === option}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          ))}
          <button className="submit-button" onClick={calculateResults}>
            Finish
          </button>
        </div>
      ) : (
        <div className="results">
          <h2 className="results-title">Results</h2>
          <p className="score">
            Correct Answers: {correctCount} / {questions.length}
          </p>
          <p className="score">
            Incorrect Answers: {questions.length - correctCount}
          </p>
          <div className="detailed-results">
            {questions.map((question, index) => (
              <div key={index} className="result-card">
                <p className="result-question">
                  {index + 1}. {question.question}
                </p>
                <p className="your-answer">
                  Your Answer: {answers[index] || "Not Answered"}
                </p>
                {answers[index] !== question.correctAnswer && (
                  <p className="correct-answer">
                    Correct Answer: {question.correctAnswer}
                  </p>
                )}
              </div>
            ))}
          </div>
          <button className="restart-button" onClick={restartTest}>
            Restart
          </button>
        </div>
      )}
    </div>
  );
};

export default App;