CREATE TABLE "Users" (
	"ID" serial NOT NULL,
	"username" TEXT(255) NOT NULL UNIQUE,
	"password" TEXT(255) NOT NULL UNIQUE,
	"user_type" int(255) NOT NULL UNIQUE,
	"cohort" int(255) NOT NULL UNIQUE,
	CONSTRAINT Users_pk PRIMARY KEY ("ID")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "User Types" (
	"ID" serial NOT NULL,
	"User Type" TEXT NOT NULL,
	CONSTRAINT User Types_pk PRIMARY KEY ("ID")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Cohorts" (
	"ID" serial NOT NULL,
	"CohortName" TEXT(255) NOT NULL UNIQUE,
	CONSTRAINT Cohorts_pk PRIMARY KEY ("ID")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "User Speeches" (
	"ID" serial NOT NULL,
	"user_id" int NOT NULL,
	"date" DATE NOT NULL,
	"topic" TEXT(255),
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
	CONSTRAINT User Speeches_pk PRIMARY KEY ("ID")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Comments" (
	"ID" serial NOT NULL,
	"speech_id" int NOT NULL,
	"comment" TEXT(255),
	CONSTRAINT Comments_pk PRIMARY KEY ("ID")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Public Event" (
	"ID" serial NOT NULL,
	"date" DATE NOT NULL,
	"grammarian" int,
	"timer" int,
	"counter" int,
	"speech_evaluator" int NOT NULL,
	"general_evaluator" int,
	"icebreaker" int,
	"table_topics_presenter" int,
	"meeting_mc" int,
	CONSTRAINT Public Event_pk PRIMARY KEY ("ID")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Roles" (
	"ID" serial NOT NULL,
	"role_name" TEXT NOT NULL UNIQUE,
	CONSTRAINT Roles_pk PRIMARY KEY ("ID")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "Users" ADD CONSTRAINT "Users_fk0" FOREIGN KEY ("user_type") REFERENCES "User Types"("ID");
ALTER TABLE "Users" ADD CONSTRAINT "Users_fk1" FOREIGN KEY ("cohort") REFERENCES "Cohorts"("ID");



ALTER TABLE "User Speeches" ADD CONSTRAINT "User Speeches_fk0" FOREIGN KEY ("user_id") REFERENCES "Users"("ID");
ALTER TABLE "User Speeches" ADD CONSTRAINT "User Speeches_fk1" FOREIGN KEY ("role") REFERENCES "Roles"("ID");

ALTER TABLE "Comments" ADD CONSTRAINT "Comments_fk0" FOREIGN KEY ("speech_id") REFERENCES "User Speeches"("ID");

ALTER TABLE "Public Event" ADD CONSTRAINT "Public Event_fk0" FOREIGN KEY ("grammarian") REFERENCES "Users"("ID");
ALTER TABLE "Public Event" ADD CONSTRAINT "Public Event_fk1" FOREIGN KEY ("timer") REFERENCES "Users"("ID");
ALTER TABLE "Public Event" ADD CONSTRAINT "Public Event_fk2" FOREIGN KEY ("counter") REFERENCES "Users"("ID");
ALTER TABLE "Public Event" ADD CONSTRAINT "Public Event_fk3" FOREIGN KEY ("speech_evaluator") REFERENCES "Users"("ID");
ALTER TABLE "Public Event" ADD CONSTRAINT "Public Event_fk4" FOREIGN KEY ("general_evaluator") REFERENCES "Users"("ID");
ALTER TABLE "Public Event" ADD CONSTRAINT "Public Event_fk5" FOREIGN KEY ("icebreaker") REFERENCES "Users"("ID");
ALTER TABLE "Public Event" ADD CONSTRAINT "Public Event_fk6" FOREIGN KEY ("table_topics_presenter") REFERENCES "Users"("ID");
ALTER TABLE "Public Event" ADD CONSTRAINT "Public Event_fk7" FOREIGN KEY ("meeting_mc") REFERENCES "Users"("ID");


