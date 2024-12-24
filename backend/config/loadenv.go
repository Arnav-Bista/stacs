package config

import (
	"os"
	"github.com/joho/godotenv"
	"fmt"
	"errors"
	"strconv"
)

// Structure for storing the environment configuration
type Env struct {
	DBName string
	DBPort int
	DBHost string
	DBUser string
	Port int
}

// parsing function
type ParseFunc[T interface{}] func(value string) (*T, error)

// gets a value from the environment providing a default if not present
func getEnvDefault[T interface{}](key string, def *T, parse ParseFunc[T]) (*T, error) {
	value, ok := os.LookupEnv(key)
	if !ok {
		fmt.Println("%s not present, using default value")
		return def, nil
	}
	return parse(value)
}

// gets a value from the environment failing if not present
func getEnvBasic(key string) (string, error) {
	value, ok := os.LookupEnv(key)
	if !ok {
		return "", fmt.Errorf("Missing required field: '%s'", key)
	}
	return value, nil
}

// gets a value from the environment
func getEnv[T interface{}](key string, parse ParseFunc[T]) (*T, error) {
	value, ok := os.LookupEnv(key)
	if !ok {
		return nil, fmt.Errorf("Missing required field: '%s'", key)
	}
	res, err := parse(value)
	if err != nil {
		return nil, fmt.Errorf("Failed to parse field '%s': %s", key, err)
	}
	return res, nil
}

func parsePosInt(value string) (*int, error) {
	parsed, err := strconv.Atoi(value)
	if err != nil {
		return nil, err
	}
	if parsed <= 0 {
		return nil, errors.New("Expected positive integer")
	}
	return &parsed, nil
}


var DEFAULT_PORT = 3000
var DEFAULT_DB_PORT = 3306

var EnvConfig Env

func LoadEnv() error {
	err := godotenv.Load()
	if err != nil {
		return err
	}

	port, err := getEnvDefault("PORT", &DEFAULT_PORT, parsePosInt)
	if err != nil {
		return err
	}

	dbPort, err := getEnvDefault("DB_PORT", &DEFAULT_DB_PORT, parsePosInt)
	if err != nil {
		return err
	}

	dbHost, err := getEnvBasic("DB_HOST")
	if err != nil {
		return err
	}

	dbUser, err := getEnvBasic("DB_USER")
	if err != nil {
		return err
	}

	dbName, err := getEnvBasic("DB_NAME")
	if err != nil {
		return err
	}

	EnvConfig = Env {
		DBName: dbName,
		DBPort: *dbPort,
		DBHost: dbHost,
		DBUser: dbUser,
		Port: *port,
	}
	return nil
}

