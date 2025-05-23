// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
)

type RemoveTeamMemberRequest struct {
	// The user ID of the member.
	UID string `pathParam:"style=simple,explode=false,name=uid"`
	// The ID of the team to set as the new default team for the Northstar user.
	NewDefaultTeamID *string `queryParam:"style=form,explode=true,name=newDefaultTeamId"`
	TeamID           string  `pathParam:"style=simple,explode=false,name=teamId"`
}

func (o *RemoveTeamMemberRequest) GetUID() string {
	if o == nil {
		return ""
	}
	return o.UID
}

func (o *RemoveTeamMemberRequest) GetNewDefaultTeamID() *string {
	if o == nil {
		return nil
	}
	return o.NewDefaultTeamID
}

func (o *RemoveTeamMemberRequest) GetTeamID() string {
	if o == nil {
		return ""
	}
	return o.TeamID
}

// RemoveTeamMemberResponseBody - Successfully removed a member of the team.
type RemoveTeamMemberResponseBody struct {
	// ID of the team.
	ID string `json:"id"`
}

func (o *RemoveTeamMemberResponseBody) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

type RemoveTeamMemberResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// Successfully removed a member of the team.
	Object *RemoveTeamMemberResponseBody
}

func (o *RemoveTeamMemberResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *RemoveTeamMemberResponse) GetObject() *RemoveTeamMemberResponseBody {
	if o == nil {
		return nil
	}
	return o.Object
}
