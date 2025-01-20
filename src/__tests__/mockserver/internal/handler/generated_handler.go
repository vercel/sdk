// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package handler

import (
	"context"
	"net/http"
)

// GeneratedHandler is the type that encapsulates a generated handler.
type GeneratedHandler struct {
	// HTTP request handler function.
	handlerFunc http.HandlerFunc

	// HTTP method, such as GET.
	Method string

	// URL path, such as /path.
	Path string
}

// NewGeneratedHandler creates a generated handler via method, path, and handler
// function.
func NewGeneratedHandler(ctx context.Context, method string, path string, handlerFunc http.HandlerFunc) *GeneratedHandler {
	return &GeneratedHandler{
		handlerFunc: handlerFunc,
		Method:      method,
		Path:        path,
	}
}

// HandlerFunc returns the underlying HTTP handler function.
func (h GeneratedHandler) HandlerFunc() http.HandlerFunc {
	return h.handlerFunc
}