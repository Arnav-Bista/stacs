package repository

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	"stacs/backend/entity"
)

var db *gorm.DB

// TODO: not super happy that this causes setup to be order dependent??
func InitDB() error {
	var err error
	db, err = gorm.Open(sqlite.Open("example.db"), &gorm.Config{})
	if err != nil {
		return err
	}
	db.AutoMigrate(&entity.Example{})
	return nil
}


