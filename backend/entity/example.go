package entity

import "time"

type Example struct {
	ID uint
	Name string
	Count int
	CreatedAt time.Time
	UpdatedAt time.Time
}


