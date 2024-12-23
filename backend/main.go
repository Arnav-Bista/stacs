package main

import (
	"fmt"
	"stacs/backend/config"
	"stacs/backend/controller"
	"stacs/backend/repository"
)

//	@title			Stacs Website API
//	@version		1.0
//	@description	.API Specification for the STACS Website
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
	err = r.Run(fmt.Sprintf(":%d", config.EnvConfig.Port))
	if (err != nil) {
		panic(err)
	}
}
