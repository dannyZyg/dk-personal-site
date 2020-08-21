SHELL := /bin/bash
.POSIX:
# .PHONY: help

help: ## Show this help
	@egrep -h '\s##\s' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

dev: ## Start the gridsome development server
	gridsome develop

build: ## Build gridsome for production
	gridsome build

update: ## Update NPM
	npm update
