package example

import (
	"stacs/backend/dto"
	"stacs/backend/repository"
	"net/http"
	"github.com/gin-gonic/gin"
	"log"
)

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

func GetExamples(c *gin.Context) {
	examples, err := repository.GetExamples()
	if err != nil { // DO NOT DO THIS I GOT LAZY
		c.String(500, "internal error")
		log.Println(err)
		return
	}
	c.JSON(http.StatusOK, examples)
}




