.PHONY: install dev build start lint

install:
	bun install

fast:
	bun run dev

build:
	bun run build

start:
	bun run start

lint:
	bun run lint
