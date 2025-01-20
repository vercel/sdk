// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"mockserver/internal/sdk/models/components"
)

// Revoke - Optional instructions for revoking and regenerating a automation bypass
type Revoke struct {
	// Automation bypass to revoked
	Secret string `json:"secret"`
	// Whether or not a new automation bypass should be created after the provided secret is revoked
	Regenerate bool `json:"regenerate"`
}

func (o *Revoke) GetSecret() string {
	if o == nil {
		return ""
	}
	return o.Secret
}

func (o *Revoke) GetRegenerate() bool {
	if o == nil {
		return false
	}
	return o.Regenerate
}

// Generate a new secret. If neither generate or revoke are provided, a new random secret will be generated.
type Generate struct {
	// Optional value of the secret to generate
	Secret *string `json:"secret,omitempty"`
}

func (o *Generate) GetSecret() *string {
	if o == nil {
		return nil
	}
	return o.Secret
}

type UpdateProjectProtectionBypassRequestBody struct {
	// Optional instructions for revoking and regenerating a automation bypass
	Revoke *Revoke `json:"revoke,omitempty"`
	// Generate a new secret. If neither generate or revoke are provided, a new random secret will be generated.
	Generate *Generate `json:"generate,omitempty"`
}

func (o *UpdateProjectProtectionBypassRequestBody) GetRevoke() *Revoke {
	if o == nil {
		return nil
	}
	return o.Revoke
}

func (o *UpdateProjectProtectionBypassRequestBody) GetGenerate() *Generate {
	if o == nil {
		return nil
	}
	return o.Generate
}

type UpdateProjectProtectionBypassRequest struct {
	// The unique project identifier or the project name
	IDOrName string `pathParam:"style=simple,explode=false,name=idOrName"`
	// The Team identifier to perform the request on behalf of.
	TeamID *string `queryParam:"style=form,explode=true,name=teamId"`
	// The Team slug to perform the request on behalf of.
	Slug        *string                                  `queryParam:"style=form,explode=true,name=slug"`
	RequestBody UpdateProjectProtectionBypassRequestBody `request:"mediaType=application/json"`
}

func (o *UpdateProjectProtectionBypassRequest) GetIDOrName() string {
	if o == nil {
		return ""
	}
	return o.IDOrName
}

func (o *UpdateProjectProtectionBypassRequest) GetTeamID() *string {
	if o == nil {
		return nil
	}
	return o.TeamID
}

func (o *UpdateProjectProtectionBypassRequest) GetSlug() *string {
	if o == nil {
		return nil
	}
	return o.Slug
}

func (o *UpdateProjectProtectionBypassRequest) GetRequestBody() UpdateProjectProtectionBypassRequestBody {
	if o == nil {
		return UpdateProjectProtectionBypassRequestBody{}
	}
	return o.RequestBody
}

type UpdateProjectProtectionBypassScope string

const (
	UpdateProjectProtectionBypassScopeAutomationBypass UpdateProjectProtectionBypassScope = "automation-bypass"
)

func (e UpdateProjectProtectionBypassScope) ToPointer() *UpdateProjectProtectionBypassScope {
	return &e
}
func (e *UpdateProjectProtectionBypassScope) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "automation-bypass":
		*e = UpdateProjectProtectionBypassScope(v)
		return nil
	default:
		return fmt.Errorf("invalid value for UpdateProjectProtectionBypassScope: %v", v)
	}
}

type UpdateProjectProtectionBypassProtectionBypass struct {
	CreatedAt float64                            `json:"createdAt"`
	CreatedBy string                             `json:"createdBy"`
	Scope     UpdateProjectProtectionBypassScope `json:"scope"`
}

func (o *UpdateProjectProtectionBypassProtectionBypass) GetCreatedAt() float64 {
	if o == nil {
		return 0.0
	}
	return o.CreatedAt
}

func (o *UpdateProjectProtectionBypassProtectionBypass) GetCreatedBy() string {
	if o == nil {
		return ""
	}
	return o.CreatedBy
}

func (o *UpdateProjectProtectionBypassProtectionBypass) GetScope() UpdateProjectProtectionBypassScope {
	if o == nil {
		return UpdateProjectProtectionBypassScope("")
	}
	return o.Scope
}

type UpdateProjectProtectionBypassResponseBody struct {
	ProtectionBypass map[string]UpdateProjectProtectionBypassProtectionBypass `json:"protectionBypass,omitempty"`
}

func (o *UpdateProjectProtectionBypassResponseBody) GetProtectionBypass() map[string]UpdateProjectProtectionBypassProtectionBypass {
	if o == nil {
		return nil
	}
	return o.ProtectionBypass
}

type UpdateProjectProtectionBypassResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	Object   *UpdateProjectProtectionBypassResponseBody
}

func (o *UpdateProjectProtectionBypassResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *UpdateProjectProtectionBypassResponse) GetObject() *UpdateProjectProtectionBypassResponseBody {
	if o == nil {
		return nil
	}
	return o.Object
}