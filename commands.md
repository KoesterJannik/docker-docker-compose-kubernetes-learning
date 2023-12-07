1. Build docker image with a tag eval $(minikube docker-env)
2. 
3. then build with docker build -t <imagename> .
4. (optional) Run docker image manually to see if it is working
	- docker run -p PORT:3000 -d <imagename>

5. Add it to a deployment.yml file
4.kubectl apply -f deployment.yaml
1. expose it using a service
	 kubectl expose deployment dummy-express-app --type=LoadBalancer --port=3000
2. then get the url by
	minikube service dummy-express-app --url


to expose on mac minikube start --driver=docker --ports=30080:30080