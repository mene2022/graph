-- Deploy streamer:add_interest_columns to pg

BEGIN;

-- XXX Add DDLs here.

ALTER TABLE "user"
ADD COLUMN "interest1" TEXT,
ADD COLUMN "interest2" TEXT,
ADD COLUMN "interest3" TEXT;

COMMIT;
