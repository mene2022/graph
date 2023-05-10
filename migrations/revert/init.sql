-- Revert streamer:init from pg
BEGIN;

DROP TABLE "role","user","topic","post","message","drawing","drawing_comment","video","video_comment","drawing_like","comment","video_like","publish";

COMMIT;
