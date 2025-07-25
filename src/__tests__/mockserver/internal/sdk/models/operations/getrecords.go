// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"errors"
	"fmt"
	"mockserver/internal/sdk/models/components"
	"mockserver/internal/sdk/utils"
)

type GetRecordsRequest struct {
	Domain string `pathParam:"style=simple,explode=false,name=domain"`
	// Maximum number of records to list from a request.
	Limit *string `queryParam:"style=form,explode=true,name=limit"`
	// Get records created after this JavaScript timestamp.
	Since *string `queryParam:"style=form,explode=true,name=since"`
	// Get records created before this JavaScript timestamp.
	Until *string `queryParam:"style=form,explode=true,name=until"`
	// The Team identifier to perform the request on behalf of.
	TeamID *string `queryParam:"style=form,explode=true,name=teamId"`
	// The Team slug to perform the request on behalf of.
	Slug *string `queryParam:"style=form,explode=true,name=slug"`
}

func (o *GetRecordsRequest) GetDomain() string {
	if o == nil {
		return ""
	}
	return o.Domain
}

func (o *GetRecordsRequest) GetLimit() *string {
	if o == nil {
		return nil
	}
	return o.Limit
}

func (o *GetRecordsRequest) GetSince() *string {
	if o == nil {
		return nil
	}
	return o.Since
}

func (o *GetRecordsRequest) GetUntil() *string {
	if o == nil {
		return nil
	}
	return o.Until
}

func (o *GetRecordsRequest) GetTeamID() *string {
	if o == nil {
		return nil
	}
	return o.TeamID
}

func (o *GetRecordsRequest) GetSlug() *string {
	if o == nil {
		return nil
	}
	return o.Slug
}

type GetRecordsType2 string

const (
	GetRecordsType2A     GetRecordsType2 = "A"
	GetRecordsType2Aaaa  GetRecordsType2 = "AAAA"
	GetRecordsType2Alias GetRecordsType2 = "ALIAS"
	GetRecordsType2Caa   GetRecordsType2 = "CAA"
	GetRecordsType2Cname GetRecordsType2 = "CNAME"
	GetRecordsType2HTTPS GetRecordsType2 = "HTTPS"
	GetRecordsType2Mx    GetRecordsType2 = "MX"
	GetRecordsType2Srv   GetRecordsType2 = "SRV"
	GetRecordsType2Txt   GetRecordsType2 = "TXT"
	GetRecordsType2Ns    GetRecordsType2 = "NS"
)

func (e GetRecordsType2) ToPointer() *GetRecordsType2 {
	return &e
}
func (e *GetRecordsType2) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "A":
		fallthrough
	case "AAAA":
		fallthrough
	case "ALIAS":
		fallthrough
	case "CAA":
		fallthrough
	case "CNAME":
		fallthrough
	case "HTTPS":
		fallthrough
	case "MX":
		fallthrough
	case "SRV":
		fallthrough
	case "TXT":
		fallthrough
	case "NS":
		*e = GetRecordsType2(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetRecordsType2: %v", v)
	}
}

type Record2 struct {
	ID         string          `json:"id"`
	Slug       string          `json:"slug"`
	Name       string          `json:"name"`
	Type       GetRecordsType2 `json:"type"`
	Value      string          `json:"value"`
	MxPriority *float64        `json:"mxPriority,omitempty"`
	Priority   *float64        `json:"priority,omitempty"`
	Creator    string          `json:"creator"`
	Created    *float64        `json:"created"`
	Updated    *float64        `json:"updated"`
	CreatedAt  *float64        `json:"createdAt"`
	UpdatedAt  *float64        `json:"updatedAt"`
}

func (o *Record2) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

func (o *Record2) GetSlug() string {
	if o == nil {
		return ""
	}
	return o.Slug
}

func (o *Record2) GetName() string {
	if o == nil {
		return ""
	}
	return o.Name
}

func (o *Record2) GetType() GetRecordsType2 {
	if o == nil {
		return GetRecordsType2("")
	}
	return o.Type
}

func (o *Record2) GetValue() string {
	if o == nil {
		return ""
	}
	return o.Value
}

func (o *Record2) GetMxPriority() *float64 {
	if o == nil {
		return nil
	}
	return o.MxPriority
}

func (o *Record2) GetPriority() *float64 {
	if o == nil {
		return nil
	}
	return o.Priority
}

func (o *Record2) GetCreator() string {
	if o == nil {
		return ""
	}
	return o.Creator
}

func (o *Record2) GetCreated() *float64 {
	if o == nil {
		return nil
	}
	return o.Created
}

func (o *Record2) GetUpdated() *float64 {
	if o == nil {
		return nil
	}
	return o.Updated
}

func (o *Record2) GetCreatedAt() *float64 {
	if o == nil {
		return nil
	}
	return o.CreatedAt
}

func (o *Record2) GetUpdatedAt() *float64 {
	if o == nil {
		return nil
	}
	return o.UpdatedAt
}

// GetRecordsResponseBody2 - Successful response retrieving a list of paginated DNS records.
type GetRecordsResponseBody2 struct {
	Records []Record2 `json:"records"`
	// This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.
	Pagination components.Pagination `json:"pagination"`
}

func (o *GetRecordsResponseBody2) GetRecords() []Record2 {
	if o == nil {
		return []Record2{}
	}
	return o.Records
}

func (o *GetRecordsResponseBody2) GetPagination() components.Pagination {
	if o == nil {
		return components.Pagination{}
	}
	return o.Pagination
}

type GetRecordsType1 string

const (
	GetRecordsType1A     GetRecordsType1 = "A"
	GetRecordsType1Aaaa  GetRecordsType1 = "AAAA"
	GetRecordsType1Alias GetRecordsType1 = "ALIAS"
	GetRecordsType1Caa   GetRecordsType1 = "CAA"
	GetRecordsType1Cname GetRecordsType1 = "CNAME"
	GetRecordsType1HTTPS GetRecordsType1 = "HTTPS"
	GetRecordsType1Mx    GetRecordsType1 = "MX"
	GetRecordsType1Srv   GetRecordsType1 = "SRV"
	GetRecordsType1Txt   GetRecordsType1 = "TXT"
	GetRecordsType1Ns    GetRecordsType1 = "NS"
)

func (e GetRecordsType1) ToPointer() *GetRecordsType1 {
	return &e
}
func (e *GetRecordsType1) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "A":
		fallthrough
	case "AAAA":
		fallthrough
	case "ALIAS":
		fallthrough
	case "CAA":
		fallthrough
	case "CNAME":
		fallthrough
	case "HTTPS":
		fallthrough
	case "MX":
		fallthrough
	case "SRV":
		fallthrough
	case "TXT":
		fallthrough
	case "NS":
		*e = GetRecordsType1(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetRecordsType1: %v", v)
	}
}

type Record1 struct {
	ID         string          `json:"id"`
	Slug       string          `json:"slug"`
	Name       string          `json:"name"`
	Type       GetRecordsType1 `json:"type"`
	Value      string          `json:"value"`
	MxPriority *float64        `json:"mxPriority,omitempty"`
	Priority   *float64        `json:"priority,omitempty"`
	Creator    string          `json:"creator"`
	Created    *float64        `json:"created"`
	Updated    *float64        `json:"updated"`
	CreatedAt  *float64        `json:"createdAt"`
	UpdatedAt  *float64        `json:"updatedAt"`
}

func (o *Record1) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

func (o *Record1) GetSlug() string {
	if o == nil {
		return ""
	}
	return o.Slug
}

func (o *Record1) GetName() string {
	if o == nil {
		return ""
	}
	return o.Name
}

func (o *Record1) GetType() GetRecordsType1 {
	if o == nil {
		return GetRecordsType1("")
	}
	return o.Type
}

func (o *Record1) GetValue() string {
	if o == nil {
		return ""
	}
	return o.Value
}

func (o *Record1) GetMxPriority() *float64 {
	if o == nil {
		return nil
	}
	return o.MxPriority
}

func (o *Record1) GetPriority() *float64 {
	if o == nil {
		return nil
	}
	return o.Priority
}

func (o *Record1) GetCreator() string {
	if o == nil {
		return ""
	}
	return o.Creator
}

func (o *Record1) GetCreated() *float64 {
	if o == nil {
		return nil
	}
	return o.Created
}

func (o *Record1) GetUpdated() *float64 {
	if o == nil {
		return nil
	}
	return o.Updated
}

func (o *Record1) GetCreatedAt() *float64 {
	if o == nil {
		return nil
	}
	return o.CreatedAt
}

func (o *Record1) GetUpdatedAt() *float64 {
	if o == nil {
		return nil
	}
	return o.UpdatedAt
}

type GetRecordsResponseBody1 struct {
	Records []Record1 `json:"records"`
}

func (o *GetRecordsResponseBody1) GetRecords() []Record1 {
	if o == nil {
		return []Record1{}
	}
	return o.Records
}

type GetRecordsResponseBodyType string

const (
	GetRecordsResponseBodyTypeStr                     GetRecordsResponseBodyType = "str"
	GetRecordsResponseBodyTypeGetRecordsResponseBody1 GetRecordsResponseBodyType = "getRecords_ResponseBody_1"
	GetRecordsResponseBodyTypeGetRecordsResponseBody2 GetRecordsResponseBodyType = "getRecords_ResponseBody_2"
)

// GetRecordsResponseBody - Successful response retrieving a list of paginated DNS records.
type GetRecordsResponseBody struct {
	Str                     *string                  `queryParam:"inline"`
	GetRecordsResponseBody1 *GetRecordsResponseBody1 `queryParam:"inline"`
	GetRecordsResponseBody2 *GetRecordsResponseBody2 `queryParam:"inline"`

	Type GetRecordsResponseBodyType
}

func CreateGetRecordsResponseBodyStr(str string) GetRecordsResponseBody {
	typ := GetRecordsResponseBodyTypeStr

	return GetRecordsResponseBody{
		Str:  &str,
		Type: typ,
	}
}

func CreateGetRecordsResponseBodyGetRecordsResponseBody1(getRecordsResponseBody1 GetRecordsResponseBody1) GetRecordsResponseBody {
	typ := GetRecordsResponseBodyTypeGetRecordsResponseBody1

	return GetRecordsResponseBody{
		GetRecordsResponseBody1: &getRecordsResponseBody1,
		Type:                    typ,
	}
}

func CreateGetRecordsResponseBodyGetRecordsResponseBody2(getRecordsResponseBody2 GetRecordsResponseBody2) GetRecordsResponseBody {
	typ := GetRecordsResponseBodyTypeGetRecordsResponseBody2

	return GetRecordsResponseBody{
		GetRecordsResponseBody2: &getRecordsResponseBody2,
		Type:                    typ,
	}
}

func (u *GetRecordsResponseBody) UnmarshalJSON(data []byte) error {

	var getRecordsResponseBody1 GetRecordsResponseBody1 = GetRecordsResponseBody1{}
	if err := utils.UnmarshalJSON(data, &getRecordsResponseBody1, "", true, true); err == nil {
		u.GetRecordsResponseBody1 = &getRecordsResponseBody1
		u.Type = GetRecordsResponseBodyTypeGetRecordsResponseBody1
		return nil
	}

	var getRecordsResponseBody2 GetRecordsResponseBody2 = GetRecordsResponseBody2{}
	if err := utils.UnmarshalJSON(data, &getRecordsResponseBody2, "", true, true); err == nil {
		u.GetRecordsResponseBody2 = &getRecordsResponseBody2
		u.Type = GetRecordsResponseBodyTypeGetRecordsResponseBody2
		return nil
	}

	var str string = ""
	if err := utils.UnmarshalJSON(data, &str, "", true, true); err == nil {
		u.Str = &str
		u.Type = GetRecordsResponseBodyTypeStr
		return nil
	}

	return fmt.Errorf("could not unmarshal `%s` into any supported union types for GetRecordsResponseBody", string(data))
}

func (u GetRecordsResponseBody) MarshalJSON() ([]byte, error) {
	if u.Str != nil {
		return utils.MarshalJSON(u.Str, "", true)
	}

	if u.GetRecordsResponseBody1 != nil {
		return utils.MarshalJSON(u.GetRecordsResponseBody1, "", true)
	}

	if u.GetRecordsResponseBody2 != nil {
		return utils.MarshalJSON(u.GetRecordsResponseBody2, "", true)
	}

	return nil, errors.New("could not marshal union type GetRecordsResponseBody: all fields are null")
}

type GetRecordsResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// Successful response retrieving a list of paginated DNS records.
	OneOf *GetRecordsResponseBody
}

func (o *GetRecordsResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *GetRecordsResponse) GetOneOf() *GetRecordsResponseBody {
	if o == nil {
		return nil
	}
	return o.OneOf
}
