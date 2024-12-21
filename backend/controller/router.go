package controller

import (
	"github.com/gin-gonic/gin"
	"stacs/backend/controller/example"
)

func InitRouter() *gin.Engine {
	r := gin.Default()

	v1 := r.Group("/v1")
	exar := v1.Group("/example")
	exar.POST("/create", example.CreateExample)
	exar.GET("/get", example.GetExamples)
	exar.DELETE("/delete")
	return r
}

