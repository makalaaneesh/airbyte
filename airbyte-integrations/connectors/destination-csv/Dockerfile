FROM airbyte/integration-base-java:dev

WORKDIR /airbyte
ENV APPLICATION destination-csv

COPY build/distributions/${APPLICATION}*.tar ${APPLICATION}.tar

RUN tar xf ${APPLICATION}.tar --strip-components=1

LABEL io.airbyte.version=0.2.3
LABEL io.airbyte.name=airbyte/destination-csv
