// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
)

type DeleteConfigurationRequest struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
	// The Team identifier to perform the request on behalf of.
	TeamID *string `queryParam:"style=form,explode=true,name=teamId"`
	// The Team slug to perform the request on behalf of.
	Slug *string `queryParam:"style=form,explode=true,name=slug"`
}

func (o *DeleteConfigurationRequest) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

func (o *DeleteConfigurationRequest) GetTeamID() *string {
	if o == nil {
		return nil
	}
	return o.TeamID
}

func (o *DeleteConfigurationRequest) GetSlug() *string {
	if o == nil {
		return nil
	}
	return o.Slug
}

type DeleteConfigurationResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
}

func (o *DeleteConfigurationResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}
