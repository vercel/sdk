// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
)

// Reasons - An object describing the reason why the team is being deleted.
type Reasons struct {
	// Idenitifier slug of the reason why the team is being deleted.
	Slug string `json:"slug"`
	// Description of the reason why the team is being deleted.
	Description string `json:"description"`
}

func (o *Reasons) GetSlug() string {
	if o == nil {
		return ""
	}
	return o.Slug
}

func (o *Reasons) GetDescription() string {
	if o == nil {
		return ""
	}
	return o.Description
}

type DeleteTeamRequestBody struct {
	// Optional array of objects that describe the reason why the team is being deleted.
	Reasons []Reasons `json:"reasons,omitempty"`
}

func (o *DeleteTeamRequestBody) GetReasons() []Reasons {
	if o == nil {
		return nil
	}
	return o.Reasons
}

type DeleteTeamRequest struct {
	// Id of the team to be set as the new default team
	NewDefaultTeamID *string `queryParam:"style=form,explode=true,name=newDefaultTeamId"`
	// The Team identifier to perform the request on behalf of.
	TeamID string `pathParam:"style=simple,explode=false,name=teamId"`
	// The Team slug to perform the request on behalf of.
	Slug        *string               `queryParam:"style=form,explode=true,name=slug"`
	RequestBody DeleteTeamRequestBody `request:"mediaType=application/json"`
}

func (o *DeleteTeamRequest) GetNewDefaultTeamID() *string {
	if o == nil {
		return nil
	}
	return o.NewDefaultTeamID
}

func (o *DeleteTeamRequest) GetTeamID() string {
	if o == nil {
		return ""
	}
	return o.TeamID
}

func (o *DeleteTeamRequest) GetSlug() *string {
	if o == nil {
		return nil
	}
	return o.Slug
}

func (o *DeleteTeamRequest) GetRequestBody() DeleteTeamRequestBody {
	if o == nil {
		return DeleteTeamRequestBody{}
	}
	return o.RequestBody
}

// DeleteTeamResponseBody - The Team was successfully deleted
type DeleteTeamResponseBody struct {
	// The ID of the deleted Team
	ID string `json:"id"`
	// Signifies whether the default team update has failed, when newDefaultTeamId is provided in request query.
	NewDefaultTeamIDError *bool `json:"newDefaultTeamIdError,omitempty"`
}

func (o *DeleteTeamResponseBody) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

func (o *DeleteTeamResponseBody) GetNewDefaultTeamIDError() *bool {
	if o == nil {
		return nil
	}
	return o.NewDefaultTeamIDError
}

type DeleteTeamResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// The Team was successfully deleted
	Object *DeleteTeamResponseBody
}

func (o *DeleteTeamResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *DeleteTeamResponse) GetObject() *DeleteTeamResponseBody {
	if o == nil {
		return nil
	}
	return o.Object
}