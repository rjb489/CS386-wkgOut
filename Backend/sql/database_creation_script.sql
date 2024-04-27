show databases;

create database workout_planner_system;

use workout_planner_system;
describe users;

create table users
(
 username varchar(30) primary key,
 password varchar(30) not null,
 admin boolean not null,
 experience int
);

create table exercises 
(
 id int primary key auto_increment,
 workout_id int not null,
 name varchar(30) not null,
 reps varchar(20),
 sets varchar(20),
 restTime varchar(30),
 experince int,
 foreign key (workout_id) references workouts(id)
);

create table workouts
(
 id int primary key auto_increment,
 schedule_id int not null,
 workout_date datetime not null,
 foreign key (schedule_id) references schedules(id)
);

create table schedules
(
 id int primary key auto_increment,
 user_id varchar(30) not null,
 foreign key (user_id) references users(email)
);

create table journal_entry
(
 id int primary key auto_increment,
 schedule_id int not null,
 entry longtext,
 entry_date datetime not null,
 foreign key (schedule_id) references schedules(id)
);
 

CREATE TABLE sessions (
    session_id VARCHAR(255) NOT NULL PRIMARY KEY,
    expires BIGINT NOT NULL,
    data TEXT
);

create table exercise 
(
 id int primary key auto_increment,
 user_id varchar(30) not null,
 name varchar(30),
 reps varchar(20),
 sets varchar(20),
 restTime varchar(30),
 experince int,
 foreign key (user_id) references users(username)
);


ALTER TABLE exercise
ADD COLUMN weekday ENUM('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');