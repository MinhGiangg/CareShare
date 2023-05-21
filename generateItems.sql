CREATE DATABASE IF NOT EXISTS `nodelogin` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `nodelogin`;

CREATE TABLE IF NOT EXISTS `accounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `users` (
	`title` varchar(255) NOT NULL,
	`image` varchar(255) NOT NULL
);

INSERT INTO `accounts` (`id`, `username`, `password`, `email`) VALUES (1, 'test', 'test', 'test@test.com');
INSERT INTO `users` (`title`, `image`) VALUES ('Aggie Reuse','https://aggiereuse.ucdavis.edu/sites/g/files/dgvnsk13421/files/AggieReuse-additional-color.png');
INSERT INTO `users` (`title`, `image`) VALUES ('ASUCD Pantry','https://thepantry.ucdavis.edu/sites/g/files/dgvnsk13406/files/logo-white-transparentbg.png');
INSERT INTO `users` (`title`, `image`) VALUES ('Aggie Compost','https://housing.ucdavis.edu/_images/sustainability/waste_graphics/compost_sq_150.png');
INSERT INTO `users` (`title`, `image`) VALUES ('Black Jacket','https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJsYWNrJTIwamFja2V0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60');
INSERT INTO `users` (`title`, `image`) VALUES ('White Shoes','https://images.unsplash.com/photo-1608229751021-ed4bd8677753?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2hpdGUlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60');
INSERT INTO `users` (`title`, `image`) VALUES ('Blue Cap','https://images.unsplash.com/photo-1483103068651-8ce44652c331?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ymx1ZSUyMGNhcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60');
INSERT INTO `users` (`title`, `image`) VALUES ('Grey Chair','https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlZCUyMHNvZmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60');
INSERT INTO `users` (`title`, `image`) VALUES ('Vintage Clock','https://images.unsplash.com/photo-1415604934674-561df9abf539?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b2xkJTIwY2xvY2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60');

