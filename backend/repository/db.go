package repository

import (
	"fmt"

	"stacs/backend/config"
	"stacs/backend/entity"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var db *gorm.DB

// TODO: not super happy that this causes setup to be order dependent??
func InitDB() error {
	// config
	user := config.EnvConfig.DBUser
	port := config.EnvConfig.DBPort
	name := config.EnvConfig.DBName
	host := config.EnvConfig.DBHost

	fmt.Println(user, port, name, host)

	// create an initial database connection
	dsn := "root:@tcp(127.0.0.1:3306)/?charset=utf8mb4&parseTime=True&loc=Local"
	initDB, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		return err
	}

	// create the database if not exists
	initDB.Exec("CREATE DATABASE IF NOT EXISTS " + name + " ;")
	initInner, err := initDB.DB()
	if err != nil {
		return err
	}
	defer initInner.Close()

	// create the actual database connection
	dsn = fmt.Sprintf("%s:@tcp(%s:%d)/%s?charset=utf8mb4&parseTime=True&loc=Local", user, host, port, name)
	db, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		return err
	}

	db.AutoMigrate(&entity.Example{})
	return nil
}
