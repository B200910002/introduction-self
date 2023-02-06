export const BASE_URL = `http://localhost:9000/api/v1`;

export const LOGIN_URL = `http://localhost:9000/api/v1/user/login`;
export const REGISTER_URL = `http://localhost:9000/api/v1/user/register`;

export const BLOCKCHAIN_BASE_URL = `${BASE_URL}/blockchain`;
export const BLOCKCHAIN_BLOCKS_URL = `${BLOCKCHAIN_BASE_URL}/blocks`;
export const BLOCKCHAIN_BALANCE_URL = `${BLOCKCHAIN_BASE_URL}/getBalanceOfAddress`;
export const BLOCKCHAIN_CREATE_TRANSACTION_URL = `${BLOCKCHAIN_BASE_URL}/create/transaction`;
export const BLOCKCHAIN_CREATE_BLOCK_URL = `${BLOCKCHAIN_BASE_URL}/create/block`;

export const GRADE_URL = `${BASE_URL}/grade/`;

export const BOOKSTORE_URL = `${BASE_URL}/book/`;
export const BOOKSTORE_BOOKS_URL = `${BOOKSTORE_URL}/books`;
export const BOOKSTORE_CREATE_ORIGIN_BOOK = `${BOOKSTORE_URL}/create-origin-book`
export const BOOKSTORE_CREATE_EDITION_BOOK = `${BOOKSTORE_URL}/create-edition-book`

