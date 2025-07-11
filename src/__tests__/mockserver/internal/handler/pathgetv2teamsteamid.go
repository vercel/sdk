// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package handler

import (
	"fmt"
	"log"
	"mockserver/internal/handler/assert"
	"mockserver/internal/logging"
	"mockserver/internal/sdk/models/components"
	"mockserver/internal/sdk/types"
	"mockserver/internal/sdk/utils"
	"mockserver/internal/tracking"
	"net/http"
)

func pathGetV2TeamsTeamID(dir *logging.HTTPFileDirectory, rt *tracking.RequestTracker) http.HandlerFunc {
	return func(w http.ResponseWriter, req *http.Request) {
		test := req.Header.Get("x-speakeasy-test-name")
		instanceID := req.Header.Get("x-speakeasy-test-instance-id")

		count := rt.GetRequestCount(test, instanceID)

		switch fmt.Sprintf("%s[%d]", test, count) {
		case "getTeam[0]":
			dir.HandlerFunc("getTeam", testGetTeamGetTeam0)(w, req)
		default:
			http.Error(w, fmt.Sprintf("Unknown test: %s[%d]", test, count), http.StatusBadRequest)
		}
	}
}

func testGetTeamGetTeam0(w http.ResponseWriter, req *http.Request) {
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
	var respBody *components.Team = &components.Team{
		CreatorID:   "R6efeCJQ2HKXywuasPDc0fOWB",
		UpdatedAt:   1611796915677,
		EmailDomain: types.String("example.com"),
		Saml: &components.TeamSaml{
			Connection: &components.TeamConnection{
				Type:                     "OktaSAML",
				Status:                   "linked",
				State:                    "active",
				ConnectedAt:              1611796915677,
				LastReceivedWebhookEvent: types.Float64(1611796915677),
			},
			Directory: &components.TeamDirectory{
				Type:                     "OktaSAML",
				State:                    "active",
				ConnectedAt:              1611796915677,
				LastReceivedWebhookEvent: types.Float64(1611796915677),
			},
			Enforced: true,
		},
		InviteCode:              types.String("hasihf9e89"),
		Description:             types.String("Our mission is to make cloud computing accessible to everyone."),
		StagingPrefix:           "<value>",
		PreviewDeploymentSuffix: types.String("example.dev"),
		ID:                      "team_nllPyCtREAqxxdyFKbbMDlxd",
		Slug:                    "my-team",
		Name:                    types.String("My Team"),
		Avatar:                  types.String("6eb07268bcfadd309905ffb1579354084c24655c"),
		Membership: components.TeamMembership{
			Confirmed:   false,
			ConfirmedAt: 4040.18,
			Role:        components.TeamRole2Security,
			CreatedAt:   1519.81,
			Created:     619.38,
		},
		CreatedAt: 1630748523395,
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
