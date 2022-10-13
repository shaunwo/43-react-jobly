\echo 'Delete and recreate react_jobly db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE react_jobly;
CREATE DATABASE react_jobly;
\connect react_jobly

\i jobly-schema.sql
\i jobly-seed.sql

\echo 'Delete and recreate react_jobly_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE react_jobly_test;
CREATE DATABASE react_jobly_test;
\connect react_jobly_test

\i jobly-schema.sql
