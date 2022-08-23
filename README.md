# dotPool

*Billiard game for the web, using 3D heads*

## Development

Install dependencies:

```shell
yarn
```

Run using hot reload:

```shell
yarn dev
```

Create release build:

```shell
yarn build
```

## Docker

Run dev container on port 8000 (warning: hot reload may not work on Windows file system):

```shell
docker-compose up -d --build
```

Run release container (requires Docker-network `reverse-proxy`, opens no ports):

```shell
docker-compose -f docker-compose.prod.yml up -d --build
```
