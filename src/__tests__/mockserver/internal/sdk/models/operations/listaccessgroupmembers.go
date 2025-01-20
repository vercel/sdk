// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"mockserver/internal/sdk/models/components"
)

type ListAccessGroupMembersRequest struct {
	// The ID or name of the Access Group.
	IDOrName string `pathParam:"style=simple,explode=false,name=idOrName"`
	// Limit how many access group members should be returned.
	Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
	// Continuation cursor to retrieve the next page of results.
	Next *string `queryParam:"style=form,explode=true,name=next"`
	// Search project members by their name, username, and email.
	Search *string `queryParam:"style=form,explode=true,name=search"`
	// The Team identifier to perform the request on behalf of.
	TeamID *string `queryParam:"style=form,explode=true,name=teamId"`
	// The Team slug to perform the request on behalf of.
	Slug *string `queryParam:"style=form,explode=true,name=slug"`
}

func (o *ListAccessGroupMembersRequest) GetIDOrName() string {
	if o == nil {
		return ""
	}
	return o.IDOrName
}

func (o *ListAccessGroupMembersRequest) GetLimit() *int64 {
	if o == nil {
		return nil
	}
	return o.Limit
}

func (o *ListAccessGroupMembersRequest) GetNext() *string {
	if o == nil {
		return nil
	}
	return o.Next
}

func (o *ListAccessGroupMembersRequest) GetSearch() *string {
	if o == nil {
		return nil
	}
	return o.Search
}

func (o *ListAccessGroupMembersRequest) GetTeamID() *string {
	if o == nil {
		return nil
	}
	return o.TeamID
}

func (o *ListAccessGroupMembersRequest) GetSlug() *string {
	if o == nil {
		return nil
	}
	return o.Slug
}

type TeamRole string

const (
	TeamRoleOwner       TeamRole = "OWNER"
	TeamRoleMember      TeamRole = "MEMBER"
	TeamRoleDeveloper   TeamRole = "DEVELOPER"
	TeamRoleBilling     TeamRole = "BILLING"
	TeamRoleViewer      TeamRole = "VIEWER"
	TeamRoleContributor TeamRole = "CONTRIBUTOR"
)

func (e TeamRole) ToPointer() *TeamRole {
	return &e
}
func (e *TeamRole) UnmarshalJSON(data []byte) error {
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
		*e = TeamRole(v)
		return nil
	default:
		return fmt.Errorf("invalid value for TeamRole: %v", v)
	}
}

type Members struct {
	Avatar    *string  `json:"avatar,omitempty"`
	Email     string   `json:"email"`
	UID       string   `json:"uid"`
	Username  string   `json:"username"`
	Name      *string  `json:"name,omitempty"`
	CreatedAt *string  `json:"createdAt,omitempty"`
	TeamRole  TeamRole `json:"teamRole"`
}

func (o *Members) GetAvatar() *string {
	if o == nil {
		return nil
	}
	return o.Avatar
}

func (o *Members) GetEmail() string {
	if o == nil {
		return ""
	}
	return o.Email
}

func (o *Members) GetUID() string {
	if o == nil {
		return ""
	}
	return o.UID
}

func (o *Members) GetUsername() string {
	if o == nil {
		return ""
	}
	return o.Username
}

func (o *Members) GetName() *string {
	if o == nil {
		return nil
	}
	return o.Name
}

func (o *Members) GetCreatedAt() *string {
	if o == nil {
		return nil
	}
	return o.CreatedAt
}

func (o *Members) GetTeamRole() TeamRole {
	if o == nil {
		return TeamRole("")
	}
	return o.TeamRole
}

type Pagination struct {
	Count float64 `json:"count"`
	Next  *string `json:"next"`
}

func (o *Pagination) GetCount() float64 {
	if o == nil {
		return 0.0
	}
	return o.Count
}

func (o *Pagination) GetNext() *string {
	if o == nil {
		return nil
	}
	return o.Next
}

type ListAccessGroupMembersResponseBody struct {
	Members    []Members  `json:"members"`
	Pagination Pagination `json:"pagination"`
}

func (o *ListAccessGroupMembersResponseBody) GetMembers() []Members {
	if o == nil {
		return []Members{}
	}
	return o.Members
}

func (o *ListAccessGroupMembersResponseBody) GetPagination() Pagination {
	if o == nil {
		return Pagination{}
	}
	return o.Pagination
}

type ListAccessGroupMembersResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	Object   *ListAccessGroupMembersResponseBody
}

func (o *ListAccessGroupMembersResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *ListAccessGroupMembersResponse) GetObject() *ListAccessGroupMembersResponseBody {
	if o == nil {
		return nil
	}
	return o.Object
}