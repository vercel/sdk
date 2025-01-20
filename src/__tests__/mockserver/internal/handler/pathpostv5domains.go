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

func pathPostV5Domains(dir *logging.HTTPFileDirectory, rt *tracking.RequestTracker) http.HandlerFunc {
	return func(w http.ResponseWriter, req *http.Request) {
		test := req.Header.Get("x-speakeasy-test-name")
		instanceID := req.Header.Get("x-speakeasy-test-instance-id")

		count := rt.GetRequestCount(test, instanceID)

		switch fmt.Sprintf("%s[%d]", test, count) {
		case "createOrTransferDomain[0]":
			dir.HandlerFunc("createOrTransferDomain", testCreateOrTransferDomainCreateOrTransferDomain0)(w, req)
		default:
			http.Error(w, "Unknown test: "+test, http.StatusBadRequest)
		}
	}
}

func testCreateOrTransferDomainCreateOrTransferDomain0(w http.ResponseWriter, req *http.Request) {
	if err := assert.SecurityAuthorizationHeader(req, true, "Bearer"); err != nil {
		log.Printf("assertion error: %s\n", err)
		http.Error(w, err.Error(), http.StatusUnauthorized)
		return
	}
	if err := assert.ContentType(req, "application/json", true); err != nil {
		log.Printf("assertion error: %s\n", err)
		http.Error(w, err.Error(), http.StatusBadRequest)
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
	respBody := &operations.CreateOrTransferDomainResponseBody{
		Domain: operations.CreateOrTransferDomainDomain{
			Verified: true,
			Nameservers: []string{
				"ns1.nameserver.net",
				"ns2.nameserver.net",
			},
			IntendedNameservers: []string{
				"ns1.vercel-dns.com",
				"ns2.vercel-dns.com",
			},
			CustomNameservers: []string{
				"ns1.nameserver.net",
				"ns2.nameserver.net",
			},
			Creator: operations.CreateOrTransferDomainCreator{
				Username: "vercel_user",
				Email:    "demo@example.com",
				ID:       "ZspSRT4ljIEEmMHgoDwKWDei",
			},
			Name:              "example.com",
			BoughtAt:          types.Float64(1613602938882),
			CreatedAt:         1613602938882,
			ExpiresAt:         types.Float64(1613602938882),
			ID:                "EmTbe5CEJyTk2yVAHBUWy4A3sRusca3GCwRjTC1bpeVnt1",
			OrderedAt:         types.Float64(1613602938882),
			Renew:             types.Bool(true),
			ServiceType:       operations.CreateOrTransferDomainServiceTypeZeitWorld,
			TransferredAt:     types.Float64(1613602938882),
			TransferStartedAt: types.Float64(1613602938882),
			UserID:            "<id>",
			TeamID:            types.String("<id>"),
		},
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
