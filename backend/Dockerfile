FROM node:18

# Instalando libvips-dev para compatibilidad con sharp
RUN apt-get update && apt-get install -y libvips-dev

# Establecer el directorio de trabajo
WORKDIR /opt/app

# Copiar package.json y yarn.lock
COPY package.json yarn.lock ./

# Aumentar el tiempo de espera de la red y luego instalar las dependencias
RUN yarn config set network-timeout 600000 -g && yarn install

# Copiar el resto de los archivos de la aplicación
COPY . .

# Construir la aplicación
RUN yarn build

# Exponer el puerto de la aplicación
EXPOSE 1337

# Iniciar la aplicación
CMD ["yarn", "start"]
