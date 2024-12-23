package repository

import (
	"fmt"
	"stacs/backend/dto"
	"stacs/backend/entity"
)

func CreateExample(example *dto.Example) error {
	entity := entity.Example {
		Name: example.Name,
		Count: example.Count,
	}

	if err := db.Create(&entity).Error; err != nil {
		return err
	}
	return nil
}

func GetExamples() ([]dto.Example, error) {
	var entities []entity.Example

	fmt.Println("WOOOOO")
	if err := db.Find(&entities).Error; err != nil {
		return nil, err
	}
	fmt.Println("WOOOOO2")

	examples := make([]dto.Example, len(entities))
	for i := range len(examples) {
		entity := entities[i]
		examples[i] = dto.Example{
			Name: entity.Name,
			Count: entity.Count,
		}
	}
	return examples, nil
}

