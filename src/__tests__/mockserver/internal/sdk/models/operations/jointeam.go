// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
)

type JoinTeamRequestBody struct {
	// The invite code to join the team.
	InviteCode *string `json:"inviteCode,omitempty"`
}

func (o *JoinTeamRequestBody) GetInviteCode() *string {
	if o == nil {
		return nil
	}
	return o.InviteCode
}

type JoinTeamRequest struct {
	TeamID      string              `pathParam:"style=simple,explode=false,name=teamId"`
	RequestBody JoinTeamRequestBody `request:"mediaType=application/json"`
}

func (o *JoinTeamRequest) GetTeamID() string {
	if o == nil {
		return ""
	}
	return o.TeamID
}

func (o *JoinTeamRequest) GetRequestBody() JoinTeamRequestBody {
	if o == nil {
		return JoinTeamRequestBody{}
	}
	return o.RequestBody
}

// JoinTeamResponseBody - Successfully joined a team.
type JoinTeamResponseBody struct {
	// The ID of the team the user joined.
	TeamID string `json:"teamId"`
	// The slug of the team the user joined.
	Slug string `json:"slug"`
	// The name of the team the user joined.
	Name string `json:"name"`
	// The origin of how the user joined.
	From string `json:"from"`
}

func (o *JoinTeamResponseBody) GetTeamID() string {
	if o == nil {
		return ""
	}
	return o.TeamID
}

func (o *JoinTeamResponseBody) GetSlug() string {
	if o == nil {
		return ""
	}
	return o.Slug
}

func (o *JoinTeamResponseBody) GetName() string {
	if o == nil {
		return ""
	}
	return o.Name
}

func (o *JoinTeamResponseBody) GetFrom() string {
	if o == nil {
		return ""
	}
	return o.From
}

type JoinTeamResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// Successfully joined a team.
	Object *JoinTeamResponseBody
}

func (o *JoinTeamResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *JoinTeamResponse) GetObject() *JoinTeamResponseBody {
	if o == nil {
		return nil
	}
	return o.Object
}
