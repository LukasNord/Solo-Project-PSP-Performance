CREATE TABLE "users" (
  "id" serial NOT NULL,
  "username" VARCHAR(255) NOT NULL UNIQUE,
  "password" VARCHAR(255) NOT NULL UNIQUE,
  "user_type" int NOT NULL UNIQUE,
  "cohort" int NOT NULL UNIQUE,
  CONSTRAINT Users_pk PRIMARY KEY ("id")
); 


CREATE TABLE "user_security" (
  "id" serial NOT NULL,
  "user_type" TEXT NOT NULL,
  CONSTRAINT user_security_pk PRIMARY KEY ("id")
);



CREATE TABLE "cohorts" (
  "id" serial NOT NULL,
  "cohort_name" TEXT NOT NULL UNIQUE,
  CONSTRAINT cohorts_pk PRIMARY KEY ("id")
); 



CREATE TABLE "user_speeches" (
  "id" serial NOT NULL,
  "user_id" int NOT NULL,
  "date" DATE NOT NULL,
  "topic" TEXT,
  "role" int,
  "ah" int,
  "uh" int,
  "like" int,
  "so" int,
  "but" int,
  "and" int,
  "um" int,
  "you_know" int,
  "double_clutch" int,
  "false_start" int,
  "other" int,
  CONSTRAINT user_speeches_pk PRIMARY KEY ("id")
);



CREATE TABLE "comments" (
  "id" serial NOT NULL,
  "speech_id" int NOT NULL,
  "comment" TEXT,
  CONSTRAINT comments_pk PRIMARY KEY ("id")
);



CREATE TABLE "public_event" (
  "id" serial NOT NULL,
  "date" DATE NOT NULL,
  "grammarian" int,
  "timer" int,
  "counter" int,
  "speech_evaluator" int NOT NULL,
  "general_evaluator" int,
  "icebreaker" int,
  "table_topics_presenter" int,
  "meeting_mc" int,
  CONSTRAINT public_event_pk PRIMARY KEY ("id")
); 



CREATE TABLE "roles" (
  "id" serial NOT NULL,
  "role_name" TEXT NOT NULL UNIQUE,
  CONSTRAINT Roles_pk PRIMARY KEY ("id")
); 



ALTER TABLE "users" ADD CONSTRAINT "Users_fk0" FOREIGN KEY ("user_type") REFERENCES "user_security"("id");
ALTER TABLE "users" ADD CONSTRAINT "Users_fk1" FOREIGN KEY ("cohort") REFERENCES "cohorts"("id");



ALTER TABLE "user_speeches" ADD CONSTRAINT "user_speeches_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");
ALTER TABLE "user_speeches" ADD CONSTRAINT "user_speeches_fk1" FOREIGN KEY ("role") REFERENCES "roles"("id");

ALTER TABLE "comments" ADD CONSTRAINT "comments_fk0" FOREIGN KEY ("speech_id") REFERENCES "user_speeches"("id");

ALTER TABLE "public_event" ADD CONSTRAINT "public_event_fk0" FOREIGN KEY ("grammarian") REFERENCES "users"("id");
ALTER TABLE "public_event" ADD CONSTRAINT "public_event_fk1" FOREIGN KEY ("timer") REFERENCES "users"("id");
ALTER TABLE "public_event" ADD CONSTRAINT "public_event_fk2" FOREIGN KEY ("counter") REFERENCES "users"("id");
ALTER TABLE "public_event" ADD CONSTRAINT "public_event_fk3" FOREIGN KEY ("speech_evaluator") REFERENCES "users"("id");
ALTER TABLE "public_event" ADD CONSTRAINT "public_event_fk4" FOREIGN KEY ("general_evaluator") REFERENCES "users"("id");
ALTER TABLE "public_event" ADD CONSTRAINT "public_event_fk5" FOREIGN KEY ("icebreaker") REFERENCES "users"("id");
ALTER TABLE "public_event" ADD CONSTRAINT "public_event_fk6" FOREIGN KEY ("table_topics_presenter") REFERENCES "users"("id");
ALTER TABLE "public_event" ADD CONSTRAINT "public_event_fk7" FOREIGN KEY ("meeting_mc") REFERENCES "users"("id");



