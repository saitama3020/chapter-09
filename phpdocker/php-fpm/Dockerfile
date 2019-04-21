FROM phpdockerio/php72-fpm:latest
WORKDIR "/application"
RUN apt-get update \
  && apt-get -y --no-install-recommends install php7.2-mysql libmcrypt-dev \
  && apt-get clean; rm -rf /var/lib/apt/* /tmp/* /var/tmp/* /usr/share/doc/*
  