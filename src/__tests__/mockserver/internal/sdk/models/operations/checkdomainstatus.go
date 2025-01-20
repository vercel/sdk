// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
)

type CheckDomainStatusRequest struct {
	// The name of the domain for which we would like to check the status.
	Name string `queryParam:"style=form,explode=true,name=name"`
	// The Team identifier to perform the request on behalf of.
	TeamID *string `queryParam:"style=form,explode=true,name=teamId"`
	// The Team slug to perform the request on behalf of.
	Slug *string `queryParam:"style=form,explode=true,name=slug"`
}

func (o *CheckDomainStatusRequest) GetName() string {
	if o == nil {
		return ""
	}
	return o.Name
}

func (o *CheckDomainStatusRequest) GetTeamID() *string {
	if o == nil {
		return nil
	}
	return o.TeamID
}

func (o *CheckDomainStatusRequest) GetSlug() *string {
	if o == nil {
		return nil
	}
	return o.Slug
}

// CheckDomainStatusResponseBody - Successful response checking if a Domain's name is available.
type CheckDomainStatusResponseBody struct {
	Available bool `json:"available"`
}

func (o *CheckDomainStatusResponseBody) GetAvailable() bool {
	if o == nil {
		return false
	}
	return o.Available
}

type CheckDomainStatusResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// Successful response checking if a Domain's name is available.
	Object *CheckDomainStatusResponseBody
}

func (o *CheckDomainStatusResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *CheckDomainStatusResponse) GetObject() *CheckDomainStatusResponseBody {
	if o == nil {
		return nil
	}
	return o.Object
}