// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"errors"
	"fmt"
	"mockserver/internal/sdk/models/components"
	"mockserver/internal/sdk/utils"
)

type Roles2 struct {
	AccessGroupID string `json:"accessGroupId"`
}

func (o *Roles2) GetAccessGroupID() string {
	if o == nil {
		return ""
	}
	return o.AccessGroupID
}

type Roles1 string

const (
	Roles1Owner       Roles1 = "OWNER"
	Roles1Member      Roles1 = "MEMBER"
	Roles1Developer   Roles1 = "DEVELOPER"
	Roles1Billing     Roles1 = "BILLING"
	Roles1Viewer      Roles1 = "VIEWER"
	Roles1Contributor Roles1 = "CONTRIBUTOR"
)

func (e Roles1) ToPointer() *Roles1 {
	return &e
}
func (e *Roles1) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "OWNER":
		fallthrough
	case "MEMBER":
		fallthrough
	case "DEVELOPER":
		fallthrough
	case "BILLING":
		fallthrough
	case "VIEWER":
		fallthrough
	case "CONTRIBUTOR":
		*e = Roles1(v)
		return nil
	default:
		return fmt.Errorf("invalid value for Roles1: %v", v)
	}
}

type RolesType string

const (
	RolesTypeRoles1 RolesType = "roles_1"
	RolesTypeRoles2 RolesType = "roles_2"
)

type Roles struct {
	Roles1 *Roles1
	Roles2 *Roles2

	Type RolesType
}

func CreateRolesRoles1(roles1 Roles1) Roles {
	typ := RolesTypeRoles1

	return Roles{
		Roles1: &roles1,
		Type:   typ,
	}
}

func CreateRolesRoles2(roles2 Roles2) Roles {
	typ := RolesTypeRoles2

	return Roles{
		Roles2: &roles2,
		Type:   typ,
	}
}

func (u *Roles) UnmarshalJSON(data []byte) error {

	var roles2 Roles2 = Roles2{}
	if err := utils.UnmarshalJSON(data, &roles2, "", true, true); err == nil {
		u.Roles2 = &roles2
		u.Type = RolesTypeRoles2
		return nil
	}

	var roles1 Roles1 = Roles1("")
	if err := utils.UnmarshalJSON(data, &roles1, "", true, true); err == nil {
		u.Roles1 = &roles1
		u.Type = RolesTypeRoles1
		return nil
	}

	return fmt.Errorf("could not unmarshal `%s` into any supported union types for Roles", string(data))
}

func (u Roles) MarshalJSON() ([]byte, error) {
	if u.Roles1 != nil {
		return utils.MarshalJSON(u.Roles1, "", true)
	}

	if u.Roles2 != nil {
		return utils.MarshalJSON(u.Roles2, "", true)
	}

	return nil, errors.New("could not marshal union type Roles: all fields are null")
}

type Saml struct {
	// Require that members of the team use SAML Single Sign-On.
	Enforced *bool `json:"enforced,omitempty"`
	// Directory groups to role or access group mappings.
	Roles map[string]Roles `json:"roles,omitempty"`
}

func (o *Saml) GetEnforced() *bool {
	if o == nil {
		return nil
	}
	return o.Enforced
}

func (o *Saml) GetRoles() map[string]Roles {
	if o == nil {
		return nil
	}
	return o.Roles
}

// RemoteCaching - Whether or not remote caching is enabled for the team
type RemoteCaching struct {
	// Enable or disable remote caching for the team.
	Enabled *bool `json:"enabled,omitempty"`
}

func (o *RemoteCaching) GetEnabled() *bool {
	if o == nil {
		return nil
	}
	return o.Enabled
}

type PatchTeamRequestBody struct {
	// The hash value of an uploaded image.
	Avatar *string `json:"avatar,omitempty"`
	// A short text that describes the team.
	Description *string `json:"description,omitempty"`
	EmailDomain *string `json:"emailDomain,omitempty"`
	// The name of the team.
	Name *string `json:"name,omitempty"`
	// Suffix that will be used for all preview deployments.
	PreviewDeploymentSuffix *string `json:"previewDeploymentSuffix,omitempty"`
	// Create a new invite code and replace the current one.
	RegenerateInviteCode *bool `json:"regenerateInviteCode,omitempty"`
	Saml                 *Saml `json:"saml,omitempty"`
	// A new slug for the team.
	Slug *string `json:"slug,omitempty"`
	// Enable preview toolbar: one of on, off or default.
	EnablePreviewFeedback *string `json:"enablePreviewFeedback,omitempty"`
	// Enable production toolbar: one of on, off or default.
	EnableProductionFeedback *string `json:"enableProductionFeedback,omitempty"`
	// Sensitive environment variable policy: one of on, off or default.
	SensitiveEnvironmentVariablePolicy *string `json:"sensitiveEnvironmentVariablePolicy,omitempty"`
	// Whether or not remote caching is enabled for the team
	RemoteCaching *RemoteCaching `json:"remoteCaching,omitempty"`
	// Display or hide IP addresses in Monitoring queries.
	HideIPAddresses *bool `json:"hideIpAddresses,omitempty"`
	// Display or hide IP addresses in Log Drains.
	HideIPAddressesInLogDrains *bool `json:"hideIpAddressesInLogDrains,omitempty"`
}

func (o *PatchTeamRequestBody) GetAvatar() *string {
	if o == nil {
		return nil
	}
	return o.Avatar
}

func (o *PatchTeamRequestBody) GetDescription() *string {
	if o == nil {
		return nil
	}
	return o.Description
}

func (o *PatchTeamRequestBody) GetEmailDomain() *string {
	if o == nil {
		return nil
	}
	return o.EmailDomain
}

func (o *PatchTeamRequestBody) GetName() *string {
	if o == nil {
		return nil
	}
	return o.Name
}

func (o *PatchTeamRequestBody) GetPreviewDeploymentSuffix() *string {
	if o == nil {
		return nil
	}
	return o.PreviewDeploymentSuffix
}

func (o *PatchTeamRequestBody) GetRegenerateInviteCode() *bool {
	if o == nil {
		return nil
	}
	return o.RegenerateInviteCode
}

func (o *PatchTeamRequestBody) GetSaml() *Saml {
	if o == nil {
		return nil
	}
	return o.Saml
}

func (o *PatchTeamRequestBody) GetSlug() *string {
	if o == nil {
		return nil
	}
	return o.Slug
}

func (o *PatchTeamRequestBody) GetEnablePreviewFeedback() *string {
	if o == nil {
		return nil
	}
	return o.EnablePreviewFeedback
}

func (o *PatchTeamRequestBody) GetEnableProductionFeedback() *string {
	if o == nil {
		return nil
	}
	return o.EnableProductionFeedback
}

func (o *PatchTeamRequestBody) GetSensitiveEnvironmentVariablePolicy() *string {
	if o == nil {
		return nil
	}
	return o.SensitiveEnvironmentVariablePolicy
}

func (o *PatchTeamRequestBody) GetRemoteCaching() *RemoteCaching {
	if o == nil {
		return nil
	}
	return o.RemoteCaching
}

func (o *PatchTeamRequestBody) GetHideIPAddresses() *bool {
	if o == nil {
		return nil
	}
	return o.HideIPAddresses
}

func (o *PatchTeamRequestBody) GetHideIPAddressesInLogDrains() *bool {
	if o == nil {
		return nil
	}
	return o.HideIPAddressesInLogDrains
}

type PatchTeamRequest struct {
	// The Team identifier to perform the request on behalf of.
	TeamID string `pathParam:"style=simple,explode=false,name=teamId"`
	// The Team slug to perform the request on behalf of.
	Slug        *string              `queryParam:"style=form,explode=true,name=slug"`
	RequestBody PatchTeamRequestBody `request:"mediaType=application/json"`
}

func (o *PatchTeamRequest) GetTeamID() string {
	if o == nil {
		return ""
	}
	return o.TeamID
}

func (o *PatchTeamRequest) GetSlug() *string {
	if o == nil {
		return nil
	}
	return o.Slug
}

func (o *PatchTeamRequest) GetRequestBody() PatchTeamRequestBody {
	if o == nil {
		return PatchTeamRequestBody{}
	}
	return o.RequestBody
}

type PatchTeamResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	Team     map[string]any
}

func (o *PatchTeamResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *PatchTeamResponse) GetTeam() map[string]any {
	if o == nil {
		return nil
	}
	return o.Team
}