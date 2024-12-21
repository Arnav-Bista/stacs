package main

import (
	"stacs/backend/controller"
	"stacs/backend/config"
	"stacs/backend/repository"
)

func main() {
	// load the environment
	err := config.LoadEnv()
	if err != nil {
		panic(err)
	}

	// setup database
	err = repository.InitDB()
	if err != nil {
		panic("failed to connect to db")
	}

	// start server
	r := controller.InitRouter()
	err = r.Run(":8080")
	if (err != nil) {
		panic(err)
	}
}
