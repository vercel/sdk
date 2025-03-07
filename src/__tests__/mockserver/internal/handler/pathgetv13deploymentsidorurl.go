// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package handler

import (
	"fmt"
	"log"
	"mockserver/internal/handler/assert"
	"mockserver/internal/logging"
	"mockserver/internal/sdk/models/operations"
	"mockserver/internal/sdk/types"
	"mockserver/internal/sdk/utils"
	"mockserver/internal/tracking"
	"net/http"
)

func pathGetV13DeploymentsIDOrURL(dir *logging.HTTPFileDirectory, rt *tracking.RequestTracker) http.HandlerFunc {
	return func(w http.ResponseWriter, req *http.Request) {
		test := req.Header.Get("x-speakeasy-test-name")
		instanceID := req.Header.Get("x-speakeasy-test-instance-id")

		count := rt.GetRequestCount(test, instanceID)

		switch fmt.Sprintf("%s[%d]", test, count) {
		case "getDeployment[0]":
			dir.HandlerFunc("getDeployment", testGetDeploymentGetDeployment0)(w, req)
		default:
			http.Error(w, fmt.Sprintf("Unknown test: %s[%d]", test, count), http.StatusBadRequest)
		}
	}
}

func testGetDeploymentGetDeployment0(w http.ResponseWriter, req *http.Request) {
	if err := assert.SecurityAuthorizationHeader(req, true, "Bearer"); err != nil {
		log.Printf("assertion error: %s\n", err)
		http.Error(w, err.Error(), http.StatusUnauthorized)
		return
	}
	if err := assert.AcceptHeader(req, []string{"application/json"}); err != nil {
		log.Printf("assertion error: %s\n", err)
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	if err := assert.HeaderExists(req, "User-Agent"); err != nil {
		log.Printf("assertion error: %s\n", err)
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	respBody := types.Pointer(operations.CreateGetDeploymentResponseBodyGetDeploymentResponseBody2(
		operations.GetDeploymentResponseBody2{
			AliasAssigned: false,
			BootedAt:      2317.28,
			BuildingAt:    458.05,
			BuildSkipped:  true,
			Creator: operations.GetDeploymentResponseBodyCreator{
				UID: "<id>",
			},
			Public:     true,
			Status:     operations.GetDeploymentResponseBodyStatusError,
			ID:         "<id>",
			Name:       "<value>",
			Type:       operations.GetDeploymentResponseBodyTypeLambdas,
			CreatedAt:  3161.76,
			ReadyState: operations.GetDeploymentResponseBodyReadyStateReady,
			Meta: map[string]string{
				"key":  "<value>",
				"key1": "<value>",
			},
			Regions: []string{},
			URL:     "https://disloyal-backburn.info",
			Version: 1604.95,
		},
	))
	respBodyBytes, err := utils.MarshalJSON(respBody, "", true)

	if err != nil {
		http.Error(
			w,
			"Unable to encode response body as JSON: "+err.Error(),
			http.StatusInternalServerError,
		)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	_, _ = w.Write(respBodyBytes)
}
