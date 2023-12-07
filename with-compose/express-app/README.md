This uses a simple dockerfile and we can pass in the vars at runtime because it is javascript and nothing gets build and statically linked like in the svelte example with vite
If you develop, start a mongocontainer manually

`docker run --name mongodb -p 27017:27017 -d mongo:latest`
