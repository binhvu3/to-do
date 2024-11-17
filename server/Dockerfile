FROM golang:1.23.2

WORKDIR /app

COPY . /app

RUN go build -o main .

EXPOSE 5000

# Run locally
CMD ["./main", "-bind", "0.0.0.0:5000"]

# For Google Cloud side car, https://cloud.google.com/run/docs/deploying#multicontainer-yaml 
# CMD ["./main"] 

