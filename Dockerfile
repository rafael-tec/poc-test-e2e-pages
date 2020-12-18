FROM cypress/included:6.0.0

RUN mkdir /app
WORKDIR /app
COPY . /app

RUN npm install
RUN npm install cypress -g
CMD npm run cy:run:clean