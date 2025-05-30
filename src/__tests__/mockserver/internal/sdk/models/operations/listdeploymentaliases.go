// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"errors"
	"fmt"
	"mockserver/internal/sdk/models/components"
	"mockserver/internal/sdk/utils"
	"time"
)

type ListDeploymentAliasesRequest struct {
	// The ID of the deployment the aliases should be listed for
	ID string `pathParam:"style=simple,explode=false,name=id"`
	// The Team identifier to perform the request on behalf of.
	TeamID *string `queryParam:"style=form,explode=true,name=teamId"`
	// The Team slug to perform the request on behalf of.
	Slug *string `queryParam:"style=form,explode=true,name=slug"`
}

func (o *ListDeploymentAliasesRequest) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

func (o *ListDeploymentAliasesRequest) GetTeamID() *string {
	if o == nil {
		return nil
	}
	return o.TeamID
}

func (o *ListDeploymentAliasesRequest) GetSlug() *string {
	if o == nil {
		return nil
	}
	return o.Slug
}

type ListDeploymentAliasesProtectionBypassAliasesResponse200Scope string

const (
	ListDeploymentAliasesProtectionBypassAliasesResponse200ScopeEmailInvite ListDeploymentAliasesProtectionBypassAliasesResponse200Scope = "email_invite"
)

func (e ListDeploymentAliasesProtectionBypassAliasesResponse200Scope) ToPointer() *ListDeploymentAliasesProtectionBypassAliasesResponse200Scope {
	return &e
}
func (e *ListDeploymentAliasesProtectionBypassAliasesResponse200Scope) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "email_invite":
		*e = ListDeploymentAliasesProtectionBypassAliasesResponse200Scope(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ListDeploymentAliasesProtectionBypassAliasesResponse200Scope: %v", v)
	}
}

// ListDeploymentAliasesProtectionBypass4 - The protection bypass for the alias
type ListDeploymentAliasesProtectionBypass4 struct {
	CreatedAt     float64                                                      `json:"createdAt"`
	LastUpdatedAt float64                                                      `json:"lastUpdatedAt"`
	LastUpdatedBy string                                                       `json:"lastUpdatedBy"`
	Scope         ListDeploymentAliasesProtectionBypassAliasesResponse200Scope `json:"scope"`
}

func (o *ListDeploymentAliasesProtectionBypass4) GetCreatedAt() float64 {
	if o == nil {
		return 0.0
	}
	return o.CreatedAt
}

func (o *ListDeploymentAliasesProtectionBypass4) GetLastUpdatedAt() float64 {
	if o == nil {
		return 0.0
	}
	return o.LastUpdatedAt
}

func (o *ListDeploymentAliasesProtectionBypass4) GetLastUpdatedBy() string {
	if o == nil {
		return ""
	}
	return o.LastUpdatedBy
}

func (o *ListDeploymentAliasesProtectionBypass4) GetScope() ListDeploymentAliasesProtectionBypassAliasesResponse200Scope {
	if o == nil {
		return ListDeploymentAliasesProtectionBypassAliasesResponse200Scope("")
	}
	return o.Scope
}

type ListDeploymentAliasesProtectionBypassAliasesResponseScope string

const (
	ListDeploymentAliasesProtectionBypassAliasesResponseScopeAliasProtectionOverride ListDeploymentAliasesProtectionBypassAliasesResponseScope = "alias-protection-override"
)

func (e ListDeploymentAliasesProtectionBypassAliasesResponseScope) ToPointer() *ListDeploymentAliasesProtectionBypassAliasesResponseScope {
	return &e
}
func (e *ListDeploymentAliasesProtectionBypassAliasesResponseScope) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "alias-protection-override":
		*e = ListDeploymentAliasesProtectionBypassAliasesResponseScope(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ListDeploymentAliasesProtectionBypassAliasesResponseScope: %v", v)
	}
}

// ListDeploymentAliasesProtectionBypass3 - The protection bypass for the alias
type ListDeploymentAliasesProtectionBypass3 struct {
	CreatedAt float64                                                   `json:"createdAt"`
	CreatedBy string                                                    `json:"createdBy"`
	Scope     ListDeploymentAliasesProtectionBypassAliasesResponseScope `json:"scope"`
}

func (o *ListDeploymentAliasesProtectionBypass3) GetCreatedAt() float64 {
	if o == nil {
		return 0.0
	}
	return o.CreatedAt
}

func (o *ListDeploymentAliasesProtectionBypass3) GetCreatedBy() string {
	if o == nil {
		return ""
	}
	return o.CreatedBy
}

func (o *ListDeploymentAliasesProtectionBypass3) GetScope() ListDeploymentAliasesProtectionBypassAliasesResponseScope {
	if o == nil {
		return ListDeploymentAliasesProtectionBypassAliasesResponseScope("")
	}
	return o.Scope
}

type ListDeploymentAliasesProtectionBypassAccess string

const (
	ListDeploymentAliasesProtectionBypassAccessRequested ListDeploymentAliasesProtectionBypassAccess = "requested"
	ListDeploymentAliasesProtectionBypassAccessGranted   ListDeploymentAliasesProtectionBypassAccess = "granted"
)

func (e ListDeploymentAliasesProtectionBypassAccess) ToPointer() *ListDeploymentAliasesProtectionBypassAccess {
	return &e
}
func (e *ListDeploymentAliasesProtectionBypassAccess) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "requested":
		fallthrough
	case "granted":
		*e = ListDeploymentAliasesProtectionBypassAccess(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ListDeploymentAliasesProtectionBypassAccess: %v", v)
	}
}

type ListDeploymentAliasesProtectionBypassAliasesScope string

const (
	ListDeploymentAliasesProtectionBypassAliasesScopeUser ListDeploymentAliasesProtectionBypassAliasesScope = "user"
)

func (e ListDeploymentAliasesProtectionBypassAliasesScope) ToPointer() *ListDeploymentAliasesProtectionBypassAliasesScope {
	return &e
}
func (e *ListDeploymentAliasesProtectionBypassAliasesScope) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "user":
		*e = ListDeploymentAliasesProtectionBypassAliasesScope(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ListDeploymentAliasesProtectionBypassAliasesScope: %v", v)
	}
}

// ListDeploymentAliasesProtectionBypass2 - The protection bypass for the alias
type ListDeploymentAliasesProtectionBypass2 struct {
	CreatedAt     float64                                           `json:"createdAt"`
	LastUpdatedAt float64                                           `json:"lastUpdatedAt"`
	LastUpdatedBy string                                            `json:"lastUpdatedBy"`
	Access        ListDeploymentAliasesProtectionBypassAccess       `json:"access"`
	Scope         ListDeploymentAliasesProtectionBypassAliasesScope `json:"scope"`
}

func (o *ListDeploymentAliasesProtectionBypass2) GetCreatedAt() float64 {
	if o == nil {
		return 0.0
	}
	return o.CreatedAt
}

func (o *ListDeploymentAliasesProtectionBypass2) GetLastUpdatedAt() float64 {
	if o == nil {
		return 0.0
	}
	return o.LastUpdatedAt
}

func (o *ListDeploymentAliasesProtectionBypass2) GetLastUpdatedBy() string {
	if o == nil {
		return ""
	}
	return o.LastUpdatedBy
}

func (o *ListDeploymentAliasesProtectionBypass2) GetAccess() ListDeploymentAliasesProtectionBypassAccess {
	if o == nil {
		return ListDeploymentAliasesProtectionBypassAccess("")
	}
	return o.Access
}

func (o *ListDeploymentAliasesProtectionBypass2) GetScope() ListDeploymentAliasesProtectionBypassAliasesScope {
	if o == nil {
		return ListDeploymentAliasesProtectionBypassAliasesScope("")
	}
	return o.Scope
}

type ListDeploymentAliasesProtectionBypassScope string

const (
	ListDeploymentAliasesProtectionBypassScopeShareableLink ListDeploymentAliasesProtectionBypassScope = "shareable-link"
)

func (e ListDeploymentAliasesProtectionBypassScope) ToPointer() *ListDeploymentAliasesProtectionBypassScope {
	return &e
}
func (e *ListDeploymentAliasesProtectionBypassScope) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "shareable-link":
		*e = ListDeploymentAliasesProtectionBypassScope(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ListDeploymentAliasesProtectionBypassScope: %v", v)
	}
}

// ListDeploymentAliasesProtectionBypass1 - The protection bypass for the alias
type ListDeploymentAliasesProtectionBypass1 struct {
	CreatedAt float64                                    `json:"createdAt"`
	CreatedBy string                                     `json:"createdBy"`
	Scope     ListDeploymentAliasesProtectionBypassScope `json:"scope"`
}

func (o *ListDeploymentAliasesProtectionBypass1) GetCreatedAt() float64 {
	if o == nil {
		return 0.0
	}
	return o.CreatedAt
}

func (o *ListDeploymentAliasesProtectionBypass1) GetCreatedBy() string {
	if o == nil {
		return ""
	}
	return o.CreatedBy
}

func (o *ListDeploymentAliasesProtectionBypass1) GetScope() ListDeploymentAliasesProtectionBypassScope {
	if o == nil {
		return ListDeploymentAliasesProtectionBypassScope("")
	}
	return o.Scope
}

type ListDeploymentAliasesProtectionBypassType string

const (
	ListDeploymentAliasesProtectionBypassTypeListDeploymentAliasesProtectionBypass1 ListDeploymentAliasesProtectionBypassType = "listDeploymentAliases_protectionBypass_1"
	ListDeploymentAliasesProtectionBypassTypeListDeploymentAliasesProtectionBypass2 ListDeploymentAliasesProtectionBypassType = "listDeploymentAliases_protectionBypass_2"
	ListDeploymentAliasesProtectionBypassTypeListDeploymentAliasesProtectionBypass3 ListDeploymentAliasesProtectionBypassType = "listDeploymentAliases_protectionBypass_3"
	ListDeploymentAliasesProtectionBypassTypeListDeploymentAliasesProtectionBypass4 ListDeploymentAliasesProtectionBypassType = "listDeploymentAliases_protectionBypass_4"
)

type ListDeploymentAliasesProtectionBypass struct {
	ListDeploymentAliasesProtectionBypass1 *ListDeploymentAliasesProtectionBypass1
	ListDeploymentAliasesProtectionBypass2 *ListDeploymentAliasesProtectionBypass2
	ListDeploymentAliasesProtectionBypass3 *ListDeploymentAliasesProtectionBypass3
	ListDeploymentAliasesProtectionBypass4 *ListDeploymentAliasesProtectionBypass4

	Type ListDeploymentAliasesProtectionBypassType
}

func CreateListDeploymentAliasesProtectionBypassListDeploymentAliasesProtectionBypass1(listDeploymentAliasesProtectionBypass1 ListDeploymentAliasesProtectionBypass1) ListDeploymentAliasesProtectionBypass {
	typ := ListDeploymentAliasesProtectionBypassTypeListDeploymentAliasesProtectionBypass1

	return ListDeploymentAliasesProtectionBypass{
		ListDeploymentAliasesProtectionBypass1: &listDeploymentAliasesProtectionBypass1,
		Type:                                   typ,
	}
}

func CreateListDeploymentAliasesProtectionBypassListDeploymentAliasesProtectionBypass2(listDeploymentAliasesProtectionBypass2 ListDeploymentAliasesProtectionBypass2) ListDeploymentAliasesProtectionBypass {
	typ := ListDeploymentAliasesProtectionBypassTypeListDeploymentAliasesProtectionBypass2

	return ListDeploymentAliasesProtectionBypass{
		ListDeploymentAliasesProtectionBypass2: &listDeploymentAliasesProtectionBypass2,
		Type:                                   typ,
	}
}

func CreateListDeploymentAliasesProtectionBypassListDeploymentAliasesProtectionBypass3(listDeploymentAliasesProtectionBypass3 ListDeploymentAliasesProtectionBypass3) ListDeploymentAliasesProtectionBypass {
	typ := ListDeploymentAliasesProtectionBypassTypeListDeploymentAliasesProtectionBypass3

	return ListDeploymentAliasesProtectionBypass{
		ListDeploymentAliasesProtectionBypass3: &listDeploymentAliasesProtectionBypass3,
		Type:                                   typ,
	}
}

func CreateListDeploymentAliasesProtectionBypassListDeploymentAliasesProtectionBypass4(listDeploymentAliasesProtectionBypass4 ListDeploymentAliasesProtectionBypass4) ListDeploymentAliasesProtectionBypass {
	typ := ListDeploymentAliasesProtectionBypassTypeListDeploymentAliasesProtectionBypass4

	return ListDeploymentAliasesProtectionBypass{
		ListDeploymentAliasesProtectionBypass4: &listDeploymentAliasesProtectionBypass4,
		Type:                                   typ,
	}
}

func (u *ListDeploymentAliasesProtectionBypass) UnmarshalJSON(data []byte) error {

	var listDeploymentAliasesProtectionBypass1 ListDeploymentAliasesProtectionBypass1 = ListDeploymentAliasesProtectionBypass1{}
	if err := utils.UnmarshalJSON(data, &listDeploymentAliasesProtectionBypass1, "", true, true); err == nil {
		u.ListDeploymentAliasesProtectionBypass1 = &listDeploymentAliasesProtectionBypass1
		u.Type = ListDeploymentAliasesProtectionBypassTypeListDeploymentAliasesProtectionBypass1
		return nil
	}

	var listDeploymentAliasesProtectionBypass3 ListDeploymentAliasesProtectionBypass3 = ListDeploymentAliasesProtectionBypass3{}
	if err := utils.UnmarshalJSON(data, &listDeploymentAliasesProtectionBypass3, "", true, true); err == nil {
		u.ListDeploymentAliasesProtectionBypass3 = &listDeploymentAliasesProtectionBypass3
		u.Type = ListDeploymentAliasesProtectionBypassTypeListDeploymentAliasesProtectionBypass3
		return nil
	}

	var listDeploymentAliasesProtectionBypass4 ListDeploymentAliasesProtectionBypass4 = ListDeploymentAliasesProtectionBypass4{}
	if err := utils.UnmarshalJSON(data, &listDeploymentAliasesProtectionBypass4, "", true, true); err == nil {
		u.ListDeploymentAliasesProtectionBypass4 = &listDeploymentAliasesProtectionBypass4
		u.Type = ListDeploymentAliasesProtectionBypassTypeListDeploymentAliasesProtectionBypass4
		return nil
	}

	var listDeploymentAliasesProtectionBypass2 ListDeploymentAliasesProtectionBypass2 = ListDeploymentAliasesProtectionBypass2{}
	if err := utils.UnmarshalJSON(data, &listDeploymentAliasesProtectionBypass2, "", true, true); err == nil {
		u.ListDeploymentAliasesProtectionBypass2 = &listDeploymentAliasesProtectionBypass2
		u.Type = ListDeploymentAliasesProtectionBypassTypeListDeploymentAliasesProtectionBypass2
		return nil
	}

	return fmt.Errorf("could not unmarshal `%s` into any supported union types for ListDeploymentAliasesProtectionBypass", string(data))
}

func (u ListDeploymentAliasesProtectionBypass) MarshalJSON() ([]byte, error) {
	if u.ListDeploymentAliasesProtectionBypass1 != nil {
		return utils.MarshalJSON(u.ListDeploymentAliasesProtectionBypass1, "", true)
	}

	if u.ListDeploymentAliasesProtectionBypass2 != nil {
		return utils.MarshalJSON(u.ListDeploymentAliasesProtectionBypass2, "", true)
	}

	if u.ListDeploymentAliasesProtectionBypass3 != nil {
		return utils.MarshalJSON(u.ListDeploymentAliasesProtectionBypass3, "", true)
	}

	if u.ListDeploymentAliasesProtectionBypass4 != nil {
		return utils.MarshalJSON(u.ListDeploymentAliasesProtectionBypass4, "", true)
	}

	return nil, errors.New("could not marshal union type ListDeploymentAliasesProtectionBypass: all fields are null")
}

// Aliases - A list of the aliases assigned to the deployment
type Aliases struct {
	// The unique identifier of the alias
	UID string `json:"uid"`
	// The alias name, it could be a `.vercel.app` subdomain or a custom domain
	Alias string `json:"alias"`
	// The date when the alias was created
	Created time.Time `json:"created"`
	// Target destination domain for redirect when the alias is a redirect
	Redirect *string `json:"redirect,omitempty"`
	// The protection bypass for the alias
	ProtectionBypass map[string]ListDeploymentAliasesProtectionBypass `json:"protectionBypass,omitempty"`
}

func (a Aliases) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(a, "", false)
}

func (a *Aliases) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &a, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *Aliases) GetUID() string {
	if o == nil {
		return ""
	}
	return o.UID
}

func (o *Aliases) GetAlias() string {
	if o == nil {
		return ""
	}
	return o.Alias
}

func (o *Aliases) GetCreated() time.Time {
	if o == nil {
		return time.Time{}
	}
	return o.Created
}

func (o *Aliases) GetRedirect() *string {
	if o == nil {
		return nil
	}
	return o.Redirect
}

func (o *Aliases) GetProtectionBypass() map[string]ListDeploymentAliasesProtectionBypass {
	if o == nil {
		return nil
	}
	return o.ProtectionBypass
}

// ListDeploymentAliasesResponseBody - The list of aliases assigned to the deployment
type ListDeploymentAliasesResponseBody struct {
	// A list of the aliases assigned to the deployment
	Aliases []Aliases `json:"aliases"`
}

func (o *ListDeploymentAliasesResponseBody) GetAliases() []Aliases {
	if o == nil {
		return []Aliases{}
	}
	return o.Aliases
}

type ListDeploymentAliasesResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// The list of aliases assigned to the deployment
	Object *ListDeploymentAliasesResponseBody
}

func (o *ListDeploymentAliasesResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *ListDeploymentAliasesResponse) GetObject() *ListDeploymentAliasesResponseBody {
	if o == nil {
		return nil
	}
	return o.Object
}
