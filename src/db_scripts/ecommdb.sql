CREATE TABLE `ecommdb`.`product_sizes` (
    `id` INT NOT NULL AUTO_INCREMENT, `product_id` INT NOT NULL, `name` VARCHAR(45) NOT NULL, `quantity` INT NULL, `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, `updateby` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (`id`)
);

ALTER TABLE `ecommdb`.`product_sizes`
ADD INDEX `ProductID` (`product_id` ASC) VISIBLE;

;