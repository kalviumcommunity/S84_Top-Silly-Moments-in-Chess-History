CREATE TABLE IF NOT EXISTS users__mysql(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(25) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(25) NOT NULL 
);

CREATE TABLE IF NOT EXISTS moments__mysql(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(25) NOT NULL,
    description VARCHAR(255) TEXT,
    image_url VARCHAR(25) TEXT ,
    video_url VARCHAR(266) TEXT,
    created_by INT,
    FOREIGN KEY (created_by) REFERENCES users__mysql(id) ON DELETE SET NULL
);

INSERT INTO users__mysql(name, email, password) VALUES 
('Dada', 'dada@gmail.com', 'dadaji'),
('Papa', 'papa@gmail.com', 'papaji'),
('Chacha', 'chacha@gmail.com', 'chachaji');


INSERT INTO moments__mysql(title, description, image_url, video_url, created_by) VALUES 
('Funny Moment 1', 'A hilarious chess blunder.', 'image1.jpg', 'video1.mp4', 1),
('Epic Fail', 'An epic chess fail caught on camera.', 'image2.jpg', 'video2.mp4', 2),
('Unexpected Move', 'A surprising move that shocked everyone.', 'image3.jpg', 'video3.mp4', 3);