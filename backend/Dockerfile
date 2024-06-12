FROM node:18-alpine

# Instalando libvips-dev para compatibilidad con sharp
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev git

# Establecer el directorio de trabajo
WORKDIR /opt/app

# Copiar package.json y yarn.lock
COPY package.json yarn.lock ./

# Aumentar el tiempo de espera de la red y luego instalar las dependencias
#RUN yarn config set network-timeout 600000 -g && yarn install
RUN yarn config set network-timeout 600000 -g && yarn install

WORKDIR /opt/app
# Copiar el resto de los archivos de la aplicación
COPY . .
RUN chown -R node:node /opt/app
# Construir la aplicación
RUN yarn build

#CMD para strapi
CMD ["yarn", "develop"]
