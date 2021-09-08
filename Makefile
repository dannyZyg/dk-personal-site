SHELL := /bin/bash
.POSIX:
# .PHONY: help

include .env

help: ## Show this help
	@egrep -h '\s##\s' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

dev: ## Start the gridsome development server
	gridsome develop

build: ## Build gridsome for production
	gridsome build

preview-build:
	npx http-server ./dist

update: ## Update NPM
	npm update

deploy: ## Deploy to AWS
	gridsome build
	aws --profile ${DEPLOY_AWS_PROFILE} s3 sync dist s3://${DEPLOY_AWS_BUCKET} --delete
	aws --profile ${DEPLOY_AWS_PROFILE} cloudfront create-invalidation \
			--distribution-id ${DEPLOY_AWS_CLOUDFRONT_ID} \
			--paths "/*"

