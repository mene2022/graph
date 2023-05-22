-- Revert streamer:add_interest_columns from pg

BEGIN;

ALTER TABLE "user"
DROP COLUMN "interest1",
DROP COLUMN "interest2",
DROP COLUMN "interest2";

COMMIT;
