// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"errors"
	"fmt"
	"mockserver/internal/sdk/models/components"
	"mockserver/internal/sdk/utils"
)

// Direction - Order of the returned events based on the timestamp.
type Direction string

const (
	DirectionBackward Direction = "backward"
	DirectionForward  Direction = "forward"
)

func (e Direction) ToPointer() *Direction {
	return &e
}
func (e *Direction) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "backward":
		fallthrough
	case "forward":
		*e = Direction(v)
		return nil
	default:
		return fmt.Errorf("invalid value for Direction: %v", v)
	}
}

type StatusCodeType string

const (
	StatusCodeTypeNumber StatusCodeType = "number"
	StatusCodeTypeStr    StatusCodeType = "str"
)

// StatusCode - HTTP status code range to filter events by.
type StatusCode struct {
	Number *float64
	Str    *string

	Type StatusCodeType
}

func CreateStatusCodeNumber(number float64) StatusCode {
	typ := StatusCodeTypeNumber

	return StatusCode{
		Number: &number,
		Type:   typ,
	}
}

func CreateStatusCodeStr(str string) StatusCode {
	typ := StatusCodeTypeStr

	return StatusCode{
		Str:  &str,
		Type: typ,
	}
}

func (u *StatusCode) UnmarshalJSON(data []byte) error {

	var number float64 = float64(0)
	if err := utils.UnmarshalJSON(data, &number, "", true, true); err == nil {
		u.Number = &number
		u.Type = StatusCodeTypeNumber
		return nil
	}

	var str string = ""
	if err := utils.UnmarshalJSON(data, &str, "", true, true); err == nil {
		u.Str = &str
		u.Type = StatusCodeTypeStr
		return nil
	}

	return fmt.Errorf("could not unmarshal `%s` into any supported union types for StatusCode", string(data))
}

func (u StatusCode) MarshalJSON() ([]byte, error) {
	if u.Number != nil {
		return utils.MarshalJSON(u.Number, "", true)
	}

	if u.Str != nil {
		return utils.MarshalJSON(u.Str, "", true)
	}

	return nil, errors.New("could not marshal union type StatusCode: all fields are null")
}

type GetDeploymentEventsRequest struct {
	// The unique identifier or hostname of the deployment.
	IDOrURL string `pathParam:"style=simple,explode=false,name=idOrUrl"`
	// Order of the returned events based on the timestamp.
	Direction *Direction `default:"forward" queryParam:"style=form,explode=true,name=direction"`
	// When enabled, this endpoint will return live events as they happen.
	Follow *float64 `queryParam:"style=form,explode=true,name=follow"`
	// Maximum number of events to return. Provide `-1` to return all available logs.
	Limit *float64 `queryParam:"style=form,explode=true,name=limit"`
	// Deployment build ID.
	Name *string `queryParam:"style=form,explode=true,name=name"`
	// Timestamp for when build logs should be pulled from.
	Since *float64 `queryParam:"style=form,explode=true,name=since"`
	// Timestamp for when the build logs should be pulled up until.
	Until *float64 `queryParam:"style=form,explode=true,name=until"`
	// HTTP status code range to filter events by.
	StatusCode *StatusCode `queryParam:"style=form,explode=true,name=statusCode"`
	Delimiter  *float64    `queryParam:"style=form,explode=true,name=delimiter"`
	Builds     *float64    `queryParam:"style=form,explode=true,name=builds"`
	// The Team identifier to perform the request on behalf of.
	TeamID *string `queryParam:"style=form,explode=true,name=teamId"`
	// The Team slug to perform the request on behalf of.
	Slug *string `queryParam:"style=form,explode=true,name=slug"`
}

func (g GetDeploymentEventsRequest) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(g, "", false)
}

func (g *GetDeploymentEventsRequest) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &g, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *GetDeploymentEventsRequest) GetIDOrURL() string {
	if o == nil {
		return ""
	}
	return o.IDOrURL
}

func (o *GetDeploymentEventsRequest) GetDirection() *Direction {
	if o == nil {
		return nil
	}
	return o.Direction
}

func (o *GetDeploymentEventsRequest) GetFollow() *float64 {
	if o == nil {
		return nil
	}
	return o.Follow
}

func (o *GetDeploymentEventsRequest) GetLimit() *float64 {
	if o == nil {
		return nil
	}
	return o.Limit
}

func (o *GetDeploymentEventsRequest) GetName() *string {
	if o == nil {
		return nil
	}
	return o.Name
}

func (o *GetDeploymentEventsRequest) GetSince() *float64 {
	if o == nil {
		return nil
	}
	return o.Since
}

func (o *GetDeploymentEventsRequest) GetUntil() *float64 {
	if o == nil {
		return nil
	}
	return o.Until
}

func (o *GetDeploymentEventsRequest) GetStatusCode() *StatusCode {
	if o == nil {
		return nil
	}
	return o.StatusCode
}

func (o *GetDeploymentEventsRequest) GetDelimiter() *float64 {
	if o == nil {
		return nil
	}
	return o.Delimiter
}

func (o *GetDeploymentEventsRequest) GetBuilds() *float64 {
	if o == nil {
		return nil
	}
	return o.Builds
}

func (o *GetDeploymentEventsRequest) GetTeamID() *string {
	if o == nil {
		return nil
	}
	return o.TeamID
}

func (o *GetDeploymentEventsRequest) GetSlug() *string {
	if o == nil {
		return nil
	}
	return o.Slug
}

type GetDeploymentEventsResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
}

func (o *GetDeploymentEventsResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}