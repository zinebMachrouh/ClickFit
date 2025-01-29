FROM mysql:8.0

ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=click_fit_db
ENV MYSQL_USER=user
ENV MYSQL_PASSWORD=password

COPY db/init.sql /docker-entrypoint-initdb.d/

EXPOSE 3306

CMD ["mysqld"]
