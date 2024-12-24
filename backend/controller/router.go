package controller

import (
	"github.com/gin-gonic/gin"
	"stacs/backend/controller/example"
	_ "stacs/backend/docs"
	"github.com/swaggo/files"
	"github.com/swaggo/gin-swagger"
)

func InitRouter() *gin.Engine {
	r := gin.Default()
	r.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))

	v1 := r.Group("/v1")
	exar := v1.Group("/example")
	exar.POST("/create", example.CreateExample)
	exar.GET("/get", example.GetExamples)
	exar.DELETE("/delete")
	return r
}

