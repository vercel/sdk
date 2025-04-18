// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
)

type RemoveProjectMemberRequest struct {
	// The ID or name of the Project.
	IDOrName string `pathParam:"style=simple,explode=false,name=idOrName"`
	// The user ID of the member.
	UID string `pathParam:"style=simple,explode=false,name=uid"`
	// The Team identifier to perform the request on behalf of.
	TeamID *string `queryParam:"style=form,explode=true,name=teamId"`
	// The Team slug to perform the request on behalf of.
	Slug *string `queryParam:"style=form,explode=true,name=slug"`
}

func (o *RemoveProjectMemberRequest) GetIDOrName() string {
	if o == nil {
		return ""
	}
	return o.IDOrName
}

func (o *RemoveProjectMemberRequest) GetUID() string {
	if o == nil {
		return ""
	}
	return o.UID
}

func (o *RemoveProjectMemberRequest) GetTeamID() *string {
	if o == nil {
		return nil
	}
	return o.TeamID
}

func (o *RemoveProjectMemberRequest) GetSlug() *string {
	if o == nil {
		return nil
	}
	return o.Slug
}

type RemoveProjectMemberResponseBody struct {
	ID string `json:"id"`
}

func (o *RemoveProjectMemberResponseBody) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

type RemoveProjectMemberResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	Object   *RemoveProjectMemberResponseBody
}

func (o *RemoveProjectMemberResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *RemoveProjectMemberResponse) GetObject() *RemoveProjectMemberResponseBody {
	if o == nil {
		return nil
	}
	return o.Object
}
