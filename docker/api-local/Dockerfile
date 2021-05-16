FROM python:3.9.5

RUN mkdir -p /usr/src/app
COPY ./api-local /usr/src/app
RUN pip install bottle

WORKDIR /usr/src/app
EXPOSE 3001
