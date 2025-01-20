// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package handler

import (
	"fmt"
	"mockserver/internal/handler/assert"
	"mockserver/internal/handler/values"
	"mockserver/internal/logging"
	"mockserver/internal/tracking"
	"net/http"
)

func pathGetV8ArtifactsHash(dir *logging.HTTPFileDirectory, rt *tracking.RequestTracker) http.HandlerFunc {
	return func(w http.ResponseWriter, req *http.Request) {
		test := req.Header.Get("x-speakeasy-test-name")
		instanceID := req.Header.Get("x-speakeasy-test-instance-id")

		count := rt.GetRequestCount(test, instanceID)

		switch fmt.Sprintf("%s[%d]", test, count) {
		case "downloadArtifact[0]":
			dir.HandlerFunc("downloadArtifact", testDownloadArtifactDownloadArtifact0)(w, req)
		default:
			http.Error(w, "Unknown test: "+test, http.StatusBadRequest)
		}
	}
}

func testDownloadArtifactDownloadArtifact0(w http.ResponseWriter, req *http.Request) {
	if err := assert.SecurityAuthorizationHeader(req, true, "Bearer"); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	if err := assert.AcceptHeader(req, []string{"application/json"}); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	if err := assert.HeaderExists(req, "User-Agent"); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	respBodyBytes := values.ReadFileToBytes("./testdata/example.file")
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	_, _ = w.Write(respBodyBytes)
}