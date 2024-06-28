# Define default RUNTIME_IDC_NAME value
RUNTIME_IDC_NAME ?= sg

# Define default target
.PHONY: all consolemanager

# Set default target to 'consolemanager'
all: consolemanager

# Define 'consolemanager' target for building Docker image
consolemanager:
	docker build --platform=linux/amd64 --build-arg RUNTIME_IDC_NAME=$(RUNTIME_IDC_NAME) -t openiiot_consolemanager:1.0.0 .
