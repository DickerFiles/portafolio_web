FROM nginx:alpine

COPY . /usr/share/nginx/html/

COPY pages/ /usr/share/nginx/html/pages/

COPY styles/ /usr/share/nginx/html/styles/

COPY assets/ /usr/share/nginx/html/assets/

EXPOSE 80