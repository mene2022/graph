BEGIN;

-- Role table
INSERT INTO "role" ("name") VALUES 
('Admin'),
('User');

-- User table
INSERT INTO "user" ("username", "email", "password", "age", "gender", "role_id") VALUES 
('admin', 'admin@example.com', 'password_example', 30, 'Male', 1),
('user1', 'user1@example.com', 'password_example', 22, 'Female', 2);

-- Message table
INSERT INTO "message" ("content", "user_id") VALUES 
('Hello world!', 1),
('Hello everyone!', 2);

-- Post table
INSERT INTO "post" ("title", "content", "message_id") VALUES 
('First Post', 'Welcome to our community!', 1),
('Second Post', 'Enjoy your stay here!', 2);

-- Topic table
INSERT INTO "topic" ("title", "post_id") VALUES 
('Introduction', 1),
('Getting started', 2);

-- Drawing table
INSERT INTO "drawing" ("name", "data", "user_id") VALUES 
('Drawing1', 'data1', 1),
('Drawing2', 'data2', 2);

-- Drawing Comment table
INSERT INTO "drawing_comment" ("content", "drawing_id") VALUES 
('Nice drawing!', 1),
('Great job!', 2);

-- Video table
INSERT INTO "video" ("url", "name", "type") VALUES 
('https://example.com/video1', 'Video1', 'mp4'),
('https://example.com/video2', 'Video2', 'mp4');

-- Video Comment table
INSERT INTO "video_comment" ("content", "video_id") VALUES 
('Nice video!', 1),
('Great job!', 2);

-- Drawing Like table
INSERT INTO "drawing_like" ("user_id", "drawing_id") VALUES 
(1, 2),
(2, 1);

-- Comment table
INSERT INTO "comment" ("user_id", "drawing_comment_id") VALUES 
(1, 2),
(2, 1);

-- Video Like table
INSERT INTO "video_like" ("user_id", "video_id") VALUES 
(1, 2),
(2, 1);

-- Publish table
INSERT INTO "publish" ("user_id", "video_comment_id") VALUES 
(1, 2),
(2, 1);

COMMIT;
