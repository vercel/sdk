// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"errors"
	"fmt"
	"mockserver/internal/sdk/models/components"
	"mockserver/internal/sdk/utils"
)

type RemoveBypassIPRequestBody2 struct {
	Domain       *string `json:"domain,omitempty"`
	ProjectScope bool    `json:"projectScope"`
	SourceIP     *string `json:"sourceIp,omitempty"`
	AllSources   *bool   `json:"allSources,omitempty"`
	Note         *string `json:"note,omitempty"`
}

func (o *RemoveBypassIPRequestBody2) GetDomain() *string {
	if o == nil {
		return nil
	}
	return o.Domain
}

func (o *RemoveBypassIPRequestBody2) GetProjectScope() bool {
	if o == nil {
		return false
	}
	return o.ProjectScope
}

func (o *RemoveBypassIPRequestBody2) GetSourceIP() *string {
	if o == nil {
		return nil
	}
	return o.SourceIP
}

func (o *RemoveBypassIPRequestBody2) GetAllSources() *bool {
	if o == nil {
		return nil
	}
	return o.AllSources
}

func (o *RemoveBypassIPRequestBody2) GetNote() *string {
	if o == nil {
		return nil
	}
	return o.Note
}

type RemoveBypassIPRequestBody1 struct {
	Domain       string  `json:"domain"`
	ProjectScope *bool   `json:"projectScope,omitempty"`
	SourceIP     *string `json:"sourceIp,omitempty"`
	AllSources   *bool   `json:"allSources,omitempty"`
	Note         *string `json:"note,omitempty"`
}

func (o *RemoveBypassIPRequestBody1) GetDomain() string {
	if o == nil {
		return ""
	}
	return o.Domain
}

func (o *RemoveBypassIPRequestBody1) GetProjectScope() *bool {
	if o == nil {
		return nil
	}
	return o.ProjectScope
}

func (o *RemoveBypassIPRequestBody1) GetSourceIP() *string {
	if o == nil {
		return nil
	}
	return o.SourceIP
}

func (o *RemoveBypassIPRequestBody1) GetAllSources() *bool {
	if o == nil {
		return nil
	}
	return o.AllSources
}

func (o *RemoveBypassIPRequestBody1) GetNote() *string {
	if o == nil {
		return nil
	}
	return o.Note
}

type RemoveBypassIPRequestBodyType string

const (
	RemoveBypassIPRequestBodyTypeRemoveBypassIPRequestBody1 RemoveBypassIPRequestBodyType = "removeBypassIp_requestBody_1"
	RemoveBypassIPRequestBodyTypeRemoveBypassIPRequestBody2 RemoveBypassIPRequestBodyType = "removeBypassIp_requestBody_2"
)

type RemoveBypassIPRequestBody struct {
	RemoveBypassIPRequestBody1 *RemoveBypassIPRequestBody1
	RemoveBypassIPRequestBody2 *RemoveBypassIPRequestBody2

	Type RemoveBypassIPRequestBodyType
}

func CreateRemoveBypassIPRequestBodyRemoveBypassIPRequestBody1(removeBypassIPRequestBody1 RemoveBypassIPRequestBody1) RemoveBypassIPRequestBody {
	typ := RemoveBypassIPRequestBodyTypeRemoveBypassIPRequestBody1

	return RemoveBypassIPRequestBody{
		RemoveBypassIPRequestBody1: &removeBypassIPRequestBody1,
		Type:                       typ,
	}
}

func CreateRemoveBypassIPRequestBodyRemoveBypassIPRequestBody2(removeBypassIPRequestBody2 RemoveBypassIPRequestBody2) RemoveBypassIPRequestBody {
	typ := RemoveBypassIPRequestBodyTypeRemoveBypassIPRequestBody2

	return RemoveBypassIPRequestBody{
		RemoveBypassIPRequestBody2: &removeBypassIPRequestBody2,
		Type:                       typ,
	}
}

func (u *RemoveBypassIPRequestBody) UnmarshalJSON(data []byte) error {

	var removeBypassIPRequestBody1 RemoveBypassIPRequestBody1 = RemoveBypassIPRequestBody1{}
	if err := utils.UnmarshalJSON(data, &removeBypassIPRequestBody1, "", true, true); err == nil {
		u.RemoveBypassIPRequestBody1 = &removeBypassIPRequestBody1
		u.Type = RemoveBypassIPRequestBodyTypeRemoveBypassIPRequestBody1
		return nil
	}

	var removeBypassIPRequestBody2 RemoveBypassIPRequestBody2 = RemoveBypassIPRequestBody2{}
	if err := utils.UnmarshalJSON(data, &removeBypassIPRequestBody2, "", true, true); err == nil {
		u.RemoveBypassIPRequestBody2 = &removeBypassIPRequestBody2
		u.Type = RemoveBypassIPRequestBodyTypeRemoveBypassIPRequestBody2
		return nil
	}

	return fmt.Errorf("could not unmarshal `%s` into any supported union types for RemoveBypassIPRequestBody", string(data))
}

func (u RemoveBypassIPRequestBody) MarshalJSON() ([]byte, error) {
	if u.RemoveBypassIPRequestBody1 != nil {
		return utils.MarshalJSON(u.RemoveBypassIPRequestBody1, "", true)
	}

	if u.RemoveBypassIPRequestBody2 != nil {
		return utils.MarshalJSON(u.RemoveBypassIPRequestBody2, "", true)
	}

	return nil, errors.New("could not marshal union type RemoveBypassIPRequestBody: all fields are null")
}

type RemoveBypassIPRequest struct {
	ProjectID string `queryParam:"style=form,explode=true,name=projectId"`
	// The Team identifier to perform the request on behalf of.
	TeamID *string `queryParam:"style=form,explode=true,name=teamId"`
	// The Team slug to perform the request on behalf of.
	Slug        *string                    `queryParam:"style=form,explode=true,name=slug"`
	RequestBody *RemoveBypassIPRequestBody `request:"mediaType=application/json"`
}

func (o *RemoveBypassIPRequest) GetProjectID() string {
	if o == nil {
		return ""
	}
	return o.ProjectID
}

func (o *RemoveBypassIPRequest) GetTeamID() *string {
	if o == nil {
		return nil
	}
	return o.TeamID
}

func (o *RemoveBypassIPRequest) GetSlug() *string {
	if o == nil {
		return nil
	}
	return o.Slug
}

func (o *RemoveBypassIPRequest) GetRequestBody() *RemoveBypassIPRequestBody {
	if o == nil {
		return nil
	}
	return o.RequestBody
}

type RemoveBypassIPResponseBody struct {
	Ok bool `json:"ok"`
}

func (o *RemoveBypassIPResponseBody) GetOk() bool {
	if o == nil {
		return false
	}
	return o.Ok
}

type RemoveBypassIPResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	Object   *RemoveBypassIPResponseBody
}

func (o *RemoveBypassIPResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *RemoveBypassIPResponse) GetObject() *RemoveBypassIPResponseBody {
	if o == nil {
		return nil
	}
	return o.Object
}