-- Deploy streamer:create_all_tables to pg

BEGIN;


CREATE TABLE "role" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
   "updated_at" TIMESTAMPTZ
);

CREATE TABLE "user" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "username" TEXT NOT NULL,
  "password" TEXT NOT NULL,
  "role_id" INTEGER NOT NULL REFERENCES role("id"),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
   "updated_at" TIMESTAMPTZ
);
CREATE TABLE "topic" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "title" TEXT NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
   "updated_at" TIMESTAMPTZ
);


CREATE TABLE "post" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "title" TEXT NOT NULL,
  "content" TEXT NOT NULL,
  "user_id" INTEGER NOT NULL REFERENCES "user"("id"),
  --"topic_id" INTEGER NOT NULL REFERENCES topic("id"),
  "message_id" INTEGER NOT NULL REFERENCES message("id")
   "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "message" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "content" TEXT NOT NULL,
  "user_id" INTEGER NOT NULL REFERENCES "user"("id"),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
   "updated_at" TIMESTAMPTZ,
  "post_id" INTEGER NOT NULL REFERENCES post("id")
);

CREATE TABLE "drawing" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   "data" BYTEA NOT NULL,
   "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
  "user_id" INTEGER NOT NULL REFERENCES "user"("id")
);

CREATE TABLE "drawing_comment" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "content" TEXT NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
   "updated_at" TIMESTAMPTZ,
  "drawing_id" INTEGER NOT NULL REFERENCES drawing("id")
);

CREATE TABLE "video" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "url" TEXT NOT NULL,
  "type" TEXT,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
   "updated_at" TIMESTAMPTZ
);

CREATE TABLE "video_comment" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "content" TEXT NOT NULL,
  "video_id" INTEGER NOT NULL REFERENCES video("id"),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
   "updated_at" TIMESTAMPTZ
);

CREATE TABLE "drawing_like" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "user_id" INTEGER NOT NULL REFERENCES "user"("id"),
  "drawing_id" INTEGER NOT NULL REFERENCES drawing("id"),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
   "updated_at" TIMESTAMPTZ

);

CREATE TABLE "comment" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "user_id" INTEGER NOT NULL REFERENCES "user"("id"),
  "drawing_comment_id" INTEGER NOT NULL REFERENCES drawing_comment("id"),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
   "updated_at" TIMESTAMPTZ
);

CREATE TABLE "video_like" (
   "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "user_id" INTEGER NOT NULL REFERENCES "user"("id"),
  "video_id" INTEGER NOT NULL REFERENCES video("id"),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
   "updated_at" TIMESTAMPTZ
);

CREATE TABLE "publish" (
 "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "user_id" INTEGER NOT NULL REFERENCES "user"("id"),
 "video_comment_id" INTEGER NOT NULL REFERENCES comment("id"),
 "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
   "updated_at" TIMESTAMPTZ
 
);


  



COMMIT;