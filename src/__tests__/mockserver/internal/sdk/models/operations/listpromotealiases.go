// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"errors"
	"fmt"
	"mockserver/internal/sdk/models/components"
	"mockserver/internal/sdk/utils"
)

type ListPromoteAliasesRequest struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
	// Maximum number of aliases to list from a request (max 100).
	Limit *float64 `queryParam:"style=form,explode=true,name=limit"`
	// Get aliases created after this epoch timestamp.
	Since *float64 `queryParam:"style=form,explode=true,name=since"`
	// Get aliases created before this epoch timestamp.
	Until *float64 `queryParam:"style=form,explode=true,name=until"`
	// Filter results down to aliases that failed to map to the requested deployment
	FailedOnly *bool `queryParam:"style=form,explode=true,name=failedOnly"`
	// The Team identifier to perform the request on behalf of.
	TeamID *string `queryParam:"style=form,explode=true,name=teamId"`
	// The Team slug to perform the request on behalf of.
	Slug *string `queryParam:"style=form,explode=true,name=slug"`
}

func (o *ListPromoteAliasesRequest) GetProjectID() string {
	if o == nil {
		return ""
	}
	return o.ProjectID
}

func (o *ListPromoteAliasesRequest) GetLimit() *float64 {
	if o == nil {
		return nil
	}
	return o.Limit
}

func (o *ListPromoteAliasesRequest) GetSince() *float64 {
	if o == nil {
		return nil
	}
	return o.Since
}

func (o *ListPromoteAliasesRequest) GetUntil() *float64 {
	if o == nil {
		return nil
	}
	return o.Until
}

func (o *ListPromoteAliasesRequest) GetFailedOnly() *bool {
	if o == nil {
		return nil
	}
	return o.FailedOnly
}

func (o *ListPromoteAliasesRequest) GetTeamID() *string {
	if o == nil {
		return nil
	}
	return o.TeamID
}

func (o *ListPromoteAliasesRequest) GetSlug() *string {
	if o == nil {
		return nil
	}
	return o.Slug
}

type ResponseBodyAliases struct {
	Status string `json:"status"`
	Alias  string `json:"alias"`
	ID     string `json:"id"`
}

func (o *ResponseBodyAliases) GetStatus() string {
	if o == nil {
		return ""
	}
	return o.Status
}

func (o *ResponseBodyAliases) GetAlias() string {
	if o == nil {
		return ""
	}
	return o.Alias
}

func (o *ResponseBodyAliases) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

type ListPromoteAliasesResponseBody2 struct {
	Aliases []ResponseBodyAliases `json:"aliases"`
	// This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.
	Pagination components.Pagination `json:"pagination"`
}

func (o *ListPromoteAliasesResponseBody2) GetAliases() []ResponseBodyAliases {
	if o == nil {
		return []ResponseBodyAliases{}
	}
	return o.Aliases
}

func (o *ListPromoteAliasesResponseBody2) GetPagination() components.Pagination {
	if o == nil {
		return components.Pagination{}
	}
	return o.Pagination
}

type ListPromoteAliasesResponseBody1 struct {
}

type ListPromoteAliasesResponseBodyType string

const (
	ListPromoteAliasesResponseBodyTypeListPromoteAliasesResponseBody1 ListPromoteAliasesResponseBodyType = "listPromoteAliases_responseBody_1"
	ListPromoteAliasesResponseBodyTypeListPromoteAliasesResponseBody2 ListPromoteAliasesResponseBodyType = "listPromoteAliases_responseBody_2"
)

type ListPromoteAliasesResponseBody struct {
	ListPromoteAliasesResponseBody1 *ListPromoteAliasesResponseBody1
	ListPromoteAliasesResponseBody2 *ListPromoteAliasesResponseBody2

	Type ListPromoteAliasesResponseBodyType
}

func CreateListPromoteAliasesResponseBodyListPromoteAliasesResponseBody1(listPromoteAliasesResponseBody1 ListPromoteAliasesResponseBody1) ListPromoteAliasesResponseBody {
	typ := ListPromoteAliasesResponseBodyTypeListPromoteAliasesResponseBody1

	return ListPromoteAliasesResponseBody{
		ListPromoteAliasesResponseBody1: &listPromoteAliasesResponseBody1,
		Type:                            typ,
	}
}

func CreateListPromoteAliasesResponseBodyListPromoteAliasesResponseBody2(listPromoteAliasesResponseBody2 ListPromoteAliasesResponseBody2) ListPromoteAliasesResponseBody {
	typ := ListPromoteAliasesResponseBodyTypeListPromoteAliasesResponseBody2

	return ListPromoteAliasesResponseBody{
		ListPromoteAliasesResponseBody2: &listPromoteAliasesResponseBody2,
		Type:                            typ,
	}
}

func (u *ListPromoteAliasesResponseBody) UnmarshalJSON(data []byte) error {

	var listPromoteAliasesResponseBody1 ListPromoteAliasesResponseBody1 = ListPromoteAliasesResponseBody1{}
	if err := utils.UnmarshalJSON(data, &listPromoteAliasesResponseBody1, "", true, true); err == nil {
		u.ListPromoteAliasesResponseBody1 = &listPromoteAliasesResponseBody1
		u.Type = ListPromoteAliasesResponseBodyTypeListPromoteAliasesResponseBody1
		return nil
	}

	var listPromoteAliasesResponseBody2 ListPromoteAliasesResponseBody2 = ListPromoteAliasesResponseBody2{}
	if err := utils.UnmarshalJSON(data, &listPromoteAliasesResponseBody2, "", true, true); err == nil {
		u.ListPromoteAliasesResponseBody2 = &listPromoteAliasesResponseBody2
		u.Type = ListPromoteAliasesResponseBodyTypeListPromoteAliasesResponseBody2
		return nil
	}

	return fmt.Errorf("could not unmarshal `%s` into any supported union types for ListPromoteAliasesResponseBody", string(data))
}

func (u ListPromoteAliasesResponseBody) MarshalJSON() ([]byte, error) {
	if u.ListPromoteAliasesResponseBody1 != nil {
		return utils.MarshalJSON(u.ListPromoteAliasesResponseBody1, "", true)
	}

	if u.ListPromoteAliasesResponseBody2 != nil {
		return utils.MarshalJSON(u.ListPromoteAliasesResponseBody2, "", true)
	}

	return nil, errors.New("could not marshal union type ListPromoteAliasesResponseBody: all fields are null")
}

type ListPromoteAliasesResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	OneOf    *ListPromoteAliasesResponseBody
}

func (o *ListPromoteAliasesResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *ListPromoteAliasesResponse) GetOneOf() *ListPromoteAliasesResponseBody {
	if o == nil {
		return nil
	}
	return o.OneOf
}