// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
)

type GetAccountInfoRequest struct {
	IntegrationConfigurationID string `pathParam:"style=simple,explode=false,name=integrationConfigurationId"`
}

func (o *GetAccountInfoRequest) GetIntegrationConfigurationID() string {
	if o == nil {
		return ""
	}
	return o.IntegrationConfigurationID
}

type Contact struct {
	Email string  `json:"email"`
	Name  *string `json:"name,omitempty"`
}

func (o *Contact) GetEmail() string {
	if o == nil {
		return ""
	}
	return o.Email
}

func (o *Contact) GetName() *string {
	if o == nil {
		return nil
	}
	return o.Name
}

type GetAccountInfoResponseBody struct {
	Name    *string  `json:"name,omitempty"`
	URL     string   `json:"url"`
	Contact *Contact `json:"contact"`
}

func (o *GetAccountInfoResponseBody) GetName() *string {
	if o == nil {
		return nil
	}
	return o.Name
}

func (o *GetAccountInfoResponseBody) GetURL() string {
	if o == nil {
		return ""
	}
	return o.URL
}

func (o *GetAccountInfoResponseBody) GetContact() *Contact {
	if o == nil {
		return nil
	}
	return o.Contact
}

type GetAccountInfoResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	Object   *GetAccountInfoResponseBody
}

func (o *GetAccountInfoResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *GetAccountInfoResponse) GetObject() *GetAccountInfoResponseBody {
	if o == nil {
		return nil
	}
	return o.Object
}