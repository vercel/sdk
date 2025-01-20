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

func pathGetV1IntegrationsConfigurationID(dir *logging.HTTPFileDirectory, rt *tracking.RequestTracker) http.HandlerFunc {
	return func(w http.ResponseWriter, req *http.Request) {
		test := req.Header.Get("x-speakeasy-test-name")
		instanceID := req.Header.Get("x-speakeasy-test-instance-id")

		count := rt.GetRequestCount(test, instanceID)

		switch fmt.Sprintf("%s[%d]", test, count) {
		case "getConfiguration[0]":
			dir.HandlerFunc("getConfiguration", testGetConfigurationGetConfiguration0)(w, req)
		default:
			http.Error(w, "Unknown test: "+test, http.StatusBadRequest)
		}
	}
}

func testGetConfigurationGetConfiguration0(w http.ResponseWriter, req *http.Request) {
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
	respBody := types.Pointer(operations.CreateGetConfigurationResponseBodyGetConfigurationResponseBody1(
		operations.GetConfigurationResponseBody1{
			CompletedAt:   types.Float64(1558531915505),
			CreatedAt:     1558531915505,
			ID:            "icfg_3bwCLgxL8qt5kjRLcv2Dit7F",
			IntegrationID: "oac_xzpVzcUOgcB1nrVlirtKhbWV",
			OwnerID:       "kr1PsOIzqEL5Xg6M4VZcZosf",
			Projects: []string{
				"prj_xQxbutw1HpL6HLYPAzt5h75m8NjO",
			},
			Source:    operations.GetConfigurationResponseBodySourceMarketplace.ToPointer(),
			Slug:      "slack",
			TeamID:    types.String("team_nLlpyC6RE1qxydlFKbrxDlud"),
			Type:      operations.GetConfigurationResponseBodyTypeIntegrationConfiguration,
			UpdatedAt: 1558531915505,
			UserID:    "kr1PsOIzqEL5Xg6M4VZcZosf",
			Scopes: []string{
				"read:project",
				"read-write:log-drain",
			},
			DisabledAt:        types.Float64(1558531915505),
			DeletedAt:         types.Float64(1558531915505),
			DeleteRequestedAt: types.Float64(1558531915505),
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
