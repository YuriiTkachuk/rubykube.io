.PHONY: build

start: build run

build:
	docker build -t rubykube .

run:
	docker run -p 4000:8080 rubykube