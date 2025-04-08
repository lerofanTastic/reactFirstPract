import React, { useEffect, useState } from "react";

export const ApiCard = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');
    const [page, setPage] = useState(1);
    
    const API_KEY = "665ecd03";
    
    useEffect(() => {
      // Добавляем параметр _={Date.now()} чтобы кэш всегда сбрасывался
      const requestUrl = `http://www.omdbapi.com/?s=series&apikey=${API_KEY}&page=${page}&_=${Date.now()}`;
      console.log('Запрос по URL:', requestUrl);
  
      fetch(requestUrl)
        .then((response) => response.json())
        .then((data) => {
          console.log('Полученные данные:', data);
          if (data.Response === 'True') {
            // Если API возвращает нужную страницу, добавляем результаты в массив
            setMovies(prev => [...prev, ...data.Search]);
          } else {
            setError(data.Error);
          }
        })
        .catch((err) => {
          console.error('Ошибка при запросе: ', err);
          setError('Что-то пошло не так!');
        });
    }, [API_KEY, page]); // Каждый раз, когда меняется page, вызывается новый запрос
  
    const loadMore = () => {
      setPage(prevPage => prevPage + 1);
    };
  
    return (
      <div style={{ padding: '20px' }}>
        <h1>Список аниме по OMDb API</h1>
        {error && <p>{error}</p>}
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {movies.map((movie) => (
            <div key={movie.imdbID} style={{ margin: '10px', width: '200px' }}>
              <h3>{movie.Title}</h3>
              {movie.Poster !== 'N/A' ? (
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  style={{ width: '100%', height: 'auto' }}
                />
              ) : (
                <p>Изображение недоступно</p>
              )}
              <p><strong>Год:</strong> {movie.Year}</p>
            </div>
          ))}
        </div>
        <button onClick={loadMore} style={{ marginTop: '20px' }}>
          Загрузить ещё
        </button>
      </div>
    );
};
