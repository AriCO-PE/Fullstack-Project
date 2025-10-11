# Imagen base
FROM node:20-slim

# Directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json para cache
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer puerto de React
EXPOSE 3000

# Comando por defecto para desarrollo
CMD ["npm", "start"]
