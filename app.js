require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const variantsRouter = require('./routes/variants');
const ordersRouter = require('./routes/orders');
const transactionsRouter = require('./routes/transactions');
const refreshTokensRouter = require('./routes/refreshTokens');

const app = express();

app.use(logger('dev'));
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: false, limit: '5mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/variants', variantsRouter);
app.use('/orders', ordersRouter);
app.use('/transactions', transactionsRouter);
app.use('/refresh-tokens', refreshTokensRouter);

module.exports = app;
