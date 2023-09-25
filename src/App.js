import React from "react";
import "./styles.css"; // Імпортуйте стилі

function BookInfo() {
  const book = {
    title: "Назва вашої улюбленої книги",
    author: "ПІБ автора",
    genre: "Жанр книги",
    pageCount: 300, // Кількість сторінок
    reviews: [
      "Дуже цікава книга!",
      "Чудово написана історія.",
      "Рекомендую всім читати!"
    ]
  };

  return (
    <div className="book-info">
      {" "}
      {/* Додайте клас для стилізації */}
      <h1>{book.title}</h1>
      <p>Автор: {book.author}</p>
      <p>Жанр: {book.genre}</p>
      <p>Кількість сторінок: {book.pageCount}</p>
      <h2>Рецензії:</h2>
      <ul>
        {book.reviews.map((review, index) => (
          <li key={index}>{review}</li>
        ))}
      </ul>
    </div>
  );
}

export default BookInfo;
