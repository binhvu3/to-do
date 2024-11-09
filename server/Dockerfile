FROM golang:1.23.2

WORKDIR /app

COPY . /app

RUN go build -o main .

EXPOSE 5000 

CMD ["./main"]

