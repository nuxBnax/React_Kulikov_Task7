export const loggerMiddleWare = (store) => (next) => (action) => { // так выглядит любой middleware, порядок всегда такой
    // store это объект тут

    console.log('dispatching', action); // пошла отправка action
    console.log('Текущее(до того как сработает action) состояние store', store.getState()); // выведет в текущий момент
    
    const result = next(action);
    console.log('Текущее(ПОСЛЕ того как сработает action) состояние store', store.getState());
    return result;
}

// redux-persist это библиотека которая работает с localStorage