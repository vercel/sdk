// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package handler

import (
	"fmt"
	"mockserver/internal/handler/assert"
	"mockserver/internal/logging"
	"mockserver/internal/sdk/models/operations"
	"mockserver/internal/sdk/types"
	"mockserver/internal/sdk/utils"
	"mockserver/internal/tracking"
	"net/http"
)

func pathPostV2IntegrationsLogDrains(dir *logging.HTTPFileDirectory, rt *tracking.RequestTracker) http.HandlerFunc {
	return func(w http.ResponseWriter, req *http.Request) {
		test := req.Header.Get("x-speakeasy-test-name")
		instanceID := req.Header.Get("x-speakeasy-test-instance-id")

		count := rt.GetRequestCount(test, instanceID)

		switch fmt.Sprintf("%s[%d]", test, count) {
		case "createLogDrain[0]":
			dir.HandlerFunc("createLogDrain", testCreateLogDrainCreateLogDrain0)(w, req)
		default:
			http.Error(w, "Unknown test: "+test, http.StatusBadRequest)
		}
	}
}

func testCreateLogDrainCreateLogDrain0(w http.ResponseWriter, req *http.Request) {
	if err := assert.SecurityAuthorizationHeader(req, true, "Bearer"); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	if err := assert.ContentType(req, "application/json", true); err != nil {
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
	respBody := &operations.CreateLogDrainResponseBody{
		ClientID:        types.String("oac_xRhY4LAB7yLhUADD69EvV7ct"),
		ConfigurationID: types.String("icfg_cuwj0AdCdH3BwWT4LPijCC7t"),
		CreatedAt:       1558531915505,
		ID:              "ld_nBuA7zCID8g4QZ8g",
		DeliveryFormat:  operations.CreateLogDrainDeliveryFormatJSON.ToPointer(),
		Name:            "My first log drain",
		OwnerID:         "kr1PsOIzqEL5Xg6M4VZcZosf",
		ProjectID:       types.String("AbCgVkqoxXeXCDWehVir51LHGrrcWL4mkYm14W6UBPWQeb"),
		ProjectIds: []string{
			"AbCgVkqoxXeXCDWehVir51LHGrrcWL4mkYm14W6UBPWQeb",
		},
		URL: "https://example.com/log-drain",
		Sources: []operations.CreateLogDrainSources{
			operations.CreateLogDrainSourcesExternal,
		},
		CreatedFrom: operations.CreateLogDrainCreatedFromIntegration.ToPointer(),
		Headers: map[string]string{
			"0":  "{",
			"1":  "\"",
			"2":  "A",
			"3":  "u",
			"4":  "t",
			"5":  "h",
			"6":  "o",
			"7":  "r",
			"8":  "i",
			"9":  "z",
			"10": "a",
			"11": "t",
			"12": "i",
			"13": "o",
			"14": "n",
			"15": "\"",
			"16": ":",
			"17": " ",
			"18": "\"",
			"19": "B",
			"20": "e",
			"21": "a",
			"22": "r",
			"23": "e",
			"24": "r",
			"25": " ",
			"26": "1",
			"27": "2",
			"28": "3",
			"29": "\"",
			"30": "}",
		},
		Environments: []operations.CreateLogDrainEnvironments{
			operations.CreateLogDrainEnvironmentsProduction,
		},
		Branch:       types.String("feature/*"),
		SamplingRate: types.Float64(0.5),
	}
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