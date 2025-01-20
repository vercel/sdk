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

func pathGetV4AliasesIDOrAlias(dir *logging.HTTPFileDirectory, rt *tracking.RequestTracker) http.HandlerFunc {
	return func(w http.ResponseWriter, req *http.Request) {
		test := req.Header.Get("x-speakeasy-test-name")
		instanceID := req.Header.Get("x-speakeasy-test-instance-id")

		count := rt.GetRequestCount(test, instanceID)

		switch fmt.Sprintf("%s[%d]", test, count) {
		case "getAlias[0]":
			dir.HandlerFunc("getAlias", testGetAliasGetAlias0)(w, req)
		default:
			http.Error(w, "Unknown test: "+test, http.StatusBadRequest)
		}
	}
}

func testGetAliasGetAlias0(w http.ResponseWriter, req *http.Request) {
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
	respBody := &operations.GetAliasResponseBody{
		Alias:     "my-alias.vercel.app",
		Created:   types.MustTimeFromString("2017-04-26T23:00:34.232Z"),
		CreatedAt: types.Float64(1540095775941),
		Creator: &operations.GetAliasCreator{
			UID:      "96SnxkFiMyVKsK3pnoHfx3Hz",
			Email:    "john-doe@gmail.com",
			Username: "john-doe",
		},
		DeletedAt: types.Float64(1540095775941),
		Deployment: &operations.Deployment{
			ID:   "dpl_5m8CQaRBm3FnWRW1od3wKTpaECPx",
			URL:  "my-instant-deployment-3ij3cxz9qr.now.sh",
			Meta: types.String("{}"),
		},
		DeploymentID: types.String("dpl_5m8CQaRBm3FnWRW1od3wKTpaECPx"),
		ProjectID:    types.String("prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB"),
		UID:          "<id>",
		UpdatedAt:    types.Float64(1540095775941),
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