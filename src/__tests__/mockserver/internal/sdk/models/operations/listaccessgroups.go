// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"errors"
	"fmt"
	"mockserver/internal/sdk/models/components"
	"mockserver/internal/sdk/utils"
)

type ListAccessGroupsRequest struct {
	// Filter access groups by project.
	ProjectID *string `queryParam:"style=form,explode=true,name=projectId"`
	// Search for access groups by name.
	Search *string `queryParam:"style=form,explode=true,name=search"`
	// Number of members to include in the response.
	MembersLimit *int64 `queryParam:"style=form,explode=true,name=membersLimit"`
	// Number of projects to include in the response.
	ProjectsLimit *int64 `queryParam:"style=form,explode=true,name=projectsLimit"`
	// Limit how many access group should be returned.
	Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
	// Continuation cursor to retrieve the next page of results.
	Next *string `queryParam:"style=form,explode=true,name=next"`
	// The Team identifier to perform the request on behalf of.
	TeamID *string `queryParam:"style=form,explode=true,name=teamId"`
	// The Team slug to perform the request on behalf of.
	Slug *string `queryParam:"style=form,explode=true,name=slug"`
}

func (o *ListAccessGroupsRequest) GetProjectID() *string {
	if o == nil {
		return nil
	}
	return o.ProjectID
}

func (o *ListAccessGroupsRequest) GetSearch() *string {
	if o == nil {
		return nil
	}
	return o.Search
}

func (o *ListAccessGroupsRequest) GetMembersLimit() *int64 {
	if o == nil {
		return nil
	}
	return o.MembersLimit
}

func (o *ListAccessGroupsRequest) GetProjectsLimit() *int64 {
	if o == nil {
		return nil
	}
	return o.ProjectsLimit
}

func (o *ListAccessGroupsRequest) GetLimit() *int64 {
	if o == nil {
		return nil
	}
	return o.Limit
}

func (o *ListAccessGroupsRequest) GetNext() *string {
	if o == nil {
		return nil
	}
	return o.Next
}

func (o *ListAccessGroupsRequest) GetTeamID() *string {
	if o == nil {
		return nil
	}
	return o.TeamID
}

func (o *ListAccessGroupsRequest) GetSlug() *string {
	if o == nil {
		return nil
	}
	return o.Slug
}

type AccessGroups struct {
	Members        []string `json:"members,omitempty"`
	Projects       []string `json:"projects,omitempty"`
	Entitlements   []string `json:"entitlements,omitempty"`
	IsDsyncManaged bool     `json:"isDsyncManaged"`
	// The name of this access group.
	Name string `json:"name"`
	// Timestamp in milliseconds when the access group was created.
	CreatedAt string `json:"createdAt"`
	// ID of the team that this access group belongs to.
	TeamID string `json:"teamId"`
	// Timestamp in milliseconds when the access group was last updated.
	UpdatedAt string `json:"updatedAt"`
	// ID of the access group.
	AccessGroupID string `json:"accessGroupId"`
	// Number of members in the access group.
	MembersCount float64 `json:"membersCount"`
	// Number of projects in the access group.
	ProjectsCount float64 `json:"projectsCount"`
}

func (o *AccessGroups) GetMembers() []string {
	if o == nil {
		return nil
	}
	return o.Members
}

func (o *AccessGroups) GetProjects() []string {
	if o == nil {
		return nil
	}
	return o.Projects
}

func (o *AccessGroups) GetEntitlements() []string {
	if o == nil {
		return nil
	}
	return o.Entitlements
}

func (o *AccessGroups) GetIsDsyncManaged() bool {
	if o == nil {
		return false
	}
	return o.IsDsyncManaged
}

func (o *AccessGroups) GetName() string {
	if o == nil {
		return ""
	}
	return o.Name
}

func (o *AccessGroups) GetCreatedAt() string {
	if o == nil {
		return ""
	}
	return o.CreatedAt
}

func (o *AccessGroups) GetTeamID() string {
	if o == nil {
		return ""
	}
	return o.TeamID
}

func (o *AccessGroups) GetUpdatedAt() string {
	if o == nil {
		return ""
	}
	return o.UpdatedAt
}

func (o *AccessGroups) GetAccessGroupID() string {
	if o == nil {
		return ""
	}
	return o.AccessGroupID
}

func (o *AccessGroups) GetMembersCount() float64 {
	if o == nil {
		return 0.0
	}
	return o.MembersCount
}

func (o *AccessGroups) GetProjectsCount() float64 {
	if o == nil {
		return 0.0
	}
	return o.ProjectsCount
}

type ResponseBodyPagination struct {
	Count float64 `json:"count"`
	Next  *string `json:"next"`
}

func (o *ResponseBodyPagination) GetCount() float64 {
	if o == nil {
		return 0.0
	}
	return o.Count
}

func (o *ResponseBodyPagination) GetNext() *string {
	if o == nil {
		return nil
	}
	return o.Next
}

type ListAccessGroupsResponseBody2 struct {
	AccessGroups []AccessGroups         `json:"accessGroups"`
	Pagination   ResponseBodyPagination `json:"pagination"`
}

func (o *ListAccessGroupsResponseBody2) GetAccessGroups() []AccessGroups {
	if o == nil {
		return []AccessGroups{}
	}
	return o.AccessGroups
}

func (o *ListAccessGroupsResponseBody2) GetPagination() ResponseBodyPagination {
	if o == nil {
		return ResponseBodyPagination{}
	}
	return o.Pagination
}

type ListAccessGroupsResponseBody1 struct {
}

type ListAccessGroupsResponseBodyType string

const (
	ListAccessGroupsResponseBodyTypeListAccessGroupsResponseBody1 ListAccessGroupsResponseBodyType = "listAccessGroups_responseBody_1"
	ListAccessGroupsResponseBodyTypeListAccessGroupsResponseBody2 ListAccessGroupsResponseBodyType = "listAccessGroups_responseBody_2"
)

type ListAccessGroupsResponseBody struct {
	ListAccessGroupsResponseBody1 *ListAccessGroupsResponseBody1
	ListAccessGroupsResponseBody2 *ListAccessGroupsResponseBody2

	Type ListAccessGroupsResponseBodyType
}

func CreateListAccessGroupsResponseBodyListAccessGroupsResponseBody1(listAccessGroupsResponseBody1 ListAccessGroupsResponseBody1) ListAccessGroupsResponseBody {
	typ := ListAccessGroupsResponseBodyTypeListAccessGroupsResponseBody1

	return ListAccessGroupsResponseBody{
		ListAccessGroupsResponseBody1: &listAccessGroupsResponseBody1,
		Type:                          typ,
	}
}

func CreateListAccessGroupsResponseBodyListAccessGroupsResponseBody2(listAccessGroupsResponseBody2 ListAccessGroupsResponseBody2) ListAccessGroupsResponseBody {
	typ := ListAccessGroupsResponseBodyTypeListAccessGroupsResponseBody2

	return ListAccessGroupsResponseBody{
		ListAccessGroupsResponseBody2: &listAccessGroupsResponseBody2,
		Type:                          typ,
	}
}

func (u *ListAccessGroupsResponseBody) UnmarshalJSON(data []byte) error {

	var listAccessGroupsResponseBody1 ListAccessGroupsResponseBody1 = ListAccessGroupsResponseBody1{}
	if err := utils.UnmarshalJSON(data, &listAccessGroupsResponseBody1, "", true, true); err == nil {
		u.ListAccessGroupsResponseBody1 = &listAccessGroupsResponseBody1
		u.Type = ListAccessGroupsResponseBodyTypeListAccessGroupsResponseBody1
		return nil
	}

	var listAccessGroupsResponseBody2 ListAccessGroupsResponseBody2 = ListAccessGroupsResponseBody2{}
	if err := utils.UnmarshalJSON(data, &listAccessGroupsResponseBody2, "", true, true); err == nil {
		u.ListAccessGroupsResponseBody2 = &listAccessGroupsResponseBody2
		u.Type = ListAccessGroupsResponseBodyTypeListAccessGroupsResponseBody2
		return nil
	}

	return fmt.Errorf("could not unmarshal `%s` into any supported union types for ListAccessGroupsResponseBody", string(data))
}

func (u ListAccessGroupsResponseBody) MarshalJSON() ([]byte, error) {
	if u.ListAccessGroupsResponseBody1 != nil {
		return utils.MarshalJSON(u.ListAccessGroupsResponseBody1, "", true)
	}

	if u.ListAccessGroupsResponseBody2 != nil {
		return utils.MarshalJSON(u.ListAccessGroupsResponseBody2, "", true)
	}

	return nil, errors.New("could not marshal union type ListAccessGroupsResponseBody: all fields are null")
}

type ListAccessGroupsResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	OneOf    *ListAccessGroupsResponseBody
}

func (o *ListAccessGroupsResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *ListAccessGroupsResponse) GetOneOf() *ListAccessGroupsResponseBody {
	if o == nil {
		return nil
	}
	return o.OneOf
}