
# FULL STACK REACT + GO PROJECT w/ DEPLOYMENT TO GOOGLE CLOUD
![Architecture](/public/architecture.jpg)

## Missing Features

- [ ] Fix nginx reverse proxy in local Dev
- [ ] Host app on Google Cloud: Cloud Run with Nginx Reverse Proxy as sidecar

## Usage

### Download

```bash
git clone https://github.com/binhvu3/to-do.git
cd to-do
```

### Add .env file

- EDIT/CREATE .ENV FOR BOTH SERVER + CLIENT DIR BEFORE RUNNING CODE BELOW

```bash
cd server
echo "ENV=development" >> .env
echo "PORT=5000" >> .env
echo "MONGODB_URI= [URI FROM MONGODB]" >> .env

cd ../client
echo "VITE_ENV=development" >> .env
echo "VITE_PORT=5000" >> .env

```

### Modifies docker-compose.yml

- Uncomment dockerfile: Dockerfile == production
- Uncomment dockerfile: Dockerfile.dev == development

### Run

Inside `.` directory,

```bash
docker compose up
```

- Build and deploy backend and frontend application. Check react app on `localhost:5173` and `localhost:5000/api/todos`

```bash
docker compose up  server # [server or client]
```

- Open specific services

### Alternative 

```bash
cd server
docker build -t to-do-server .
docker run -p 5000:5000 to-do-server
```

- Similar process for client

```bash
cd client
docker build -t to-do-client .
docker run -p 5173:5173 to-do-client
```

### Cleanup

```bash
docker compose down
docker stop $(docker ps -a -q)
docker system prune -a
```

## References

### Application

- [Go and React Full Stack App – Go Tutorial for Node Developers](https://www.youtube.com/watch?v=lNd7XlXwlho)
- [How to Deploy a Vite React App using Nginx server?](https://medium.com/@Dev-Mus/how-to-deploy-a-vite-react-app-using-nginx-server-d7190a29d8cd)
- [Github - Go and Reach Project](https://github.com/burakorkmez/react-go-tutorial/blob/master/client/src/chakra/theme.ts)
- [Run a Golang, Nginx, and React App in Docker](https://dev.to/shaggyrec/run-a-golang-nginx-and-react-app-in-docker-59kn)
- [Go Fiber Framework](https://docs.gofiber.io/)
- [MongoDB Documentation](https://www.mongodb.com/docs/drivers/go/upcoming/quick-reference/)
- [Chakra Ui](https://v2.chakra-ui.com/docs/styled-system/global-styles)
- [Tanstack React](https://tanstack.com/query/latest/docs/framework/react/guides/query-options)
- [Air: Go App live update ](https://github.com/air-verse/air)
- [Go Installation](https://go.dev/doc/install)
- [Koyed: Free Hosting Server](https://app.koyeb.com/services/7b76485e-09d2-4dcc-8fec-f6d1a0c4e588/settings)
- [DockerHub](https://hub.docker.com/_)
- [Dockerizing a React application with Nodejs Postgres and NginX dev and prod step by step](https://youtu.be/-pTel5FojAQ?t=1765)

### Google Cloud

- [Frontend proxying using Nginx](https://cloud.google.com/run/docs/internet-proxy-nginx-sidecar#yaml_3)
- [Building Containers](https://cloud.google.com/run/docs/building/containers)
- [Cloud Run now supports sidecar deployments — monitoring agents, proxies and more](https://cloud.google.com/blog/products/serverless/cloud-run-now-supports-multi-container-deployments)
- [Securing Cloud Run services tutorial - Connect Frontend w/ Backend](https://cloud.google.com/run/docs/tutorials/secure-services#run-clone-sample-repository-go)