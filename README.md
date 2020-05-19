# GameStart: Reviews Module

> The reviews module is the service for the GameStart app which consists of three different services and a proxy server. The reviews module features the ability to sort, paginate, and feature reviews from a SQL database with potentially 100s of reviews per product.

## Related Projects

  - https://github.com/Gimli-FEC/gamestart-product-overview
  - https://github.com/Gimli-FEC/Jasper-service
  - https://github.com/Gimli-FEC/jay-proxy

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node > 6.13.0
- Webpack + Babel
- React / React-Dom > 16
- MySQL

## Development

### Installing Dependencies

Basic setup from within the root directory:

```sh
npm install
mysql -u root < database/schema.sql
npm run seed
```
To start express server: 

```sh
npm start
```

To start build:

```sh
npm run react-dev
```
