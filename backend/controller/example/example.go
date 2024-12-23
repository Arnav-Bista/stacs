package example

import (
	"stacs/backend/dto"
	"stacs/backend/repository"
	"net/http"
	"github.com/gin-gonic/gin"
	"log"
)

// Create Example godoc
//	@Summary		Creates a new example object
//	@Description	Creates a new example object
//	@Tags				Examples
//	@Accept			json
//	@Produce		json
//  @Param			body body dto.Example true "Data for the new example"
//	@Success		200	{object}	dto.Example
//	@Router			/v1/example/create [post]
func CreateExample(c *gin.Context) {
	var body dto.Example
	if err := c.BindJSON(&body); err != nil {
		c.String(http.StatusBadRequest, "bad request")
	}

	err := repository.CreateExample(&body)
	if err != nil { // DO NOT DO THIS I GOT LAZY
		c.String(500, "internal error")
		return
	}
	c.String(http.StatusOK, "OK")
}

//  Get Examples godoc
//	@Summary		Get all example objects
//	@Description	Get all example objects
//	@Tags				Examples
//	@Accept			json
//	@Produce		json
//	@Success		200	{object}	[]dto.Example
//	@Router			/v1/example/get [get]
func GetExamples(c *gin.Context) {
	examples, err := repository.GetExamples()
	if err != nil { // DO NOT DO THIS I GOT LAZY
		c.String(500, "internal error")
		log.Println(err)
		return
	}
	c.JSON(http.StatusOK, examples)
}




