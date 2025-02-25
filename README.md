docker build -t vite-app .
docker run -d -p 80:80 --name vite-app vite-app
