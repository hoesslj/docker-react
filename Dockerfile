FROM node:alpine as builder

WORKDIR '/app'

COPY package.json .
RUN npm install

COPY . .

RUN npm run build
# build phase finished

# implicitly indicates that the previous FROM block is done
FROM nginx 
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html

#CMD is implicit here for the nginx image
